import React from "react";
import inputStyles from './text-input.module.css'


export default function TextInput({inputElement}) {
  return (
    <input ref={inputElement} type ='email'
    placeholder="Введите свой e-mail" required
    className={inputStyles.input}/>
  )
}