import { useEffect } from "react";
import { useState } from "react"

const useLocalStorage = (key, valorInicial) => {
  const [valor, setValor] = useState(() => {
    try {
      const valorLocal = window.localStorage.getItem(key);
      return valorLocal ? JSON.parse(valorLocal) : valorInicial;
    } catch (err) {
      console.log(err)
      return valorInicial;
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(valor))
  }, [key, valor])

  return [valor, setValor]
}
export default useLocalStorage