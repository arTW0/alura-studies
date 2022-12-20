import React from "react"
import './style.scss'

interface ButtonProps {
  texto: string
  type?: string
}

const Button = ({ texto }: ButtonProps) => {
  return <button className="botao">
    {texto}
  </button>
}

export default Button