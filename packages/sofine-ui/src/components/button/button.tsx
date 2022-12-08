import { Component, JSX } from 'solid-js'

interface ComponentProps {
  variant?: string
}

export type CommonProps<T = {}> = ComponentProps & T

export type ButtonProps = CommonProps<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>
>

export const Button: Component<ButtonProps> = props => {
  return <button class='button'>{props.children}</button>
}
