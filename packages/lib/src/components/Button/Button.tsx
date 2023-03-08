import { createElement } from 'react';

export interface ButtonProps {
  children: string;
  onClick?: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  const text = `${children}`;
  return <button onClick={onClick}>{text}</button>;
};
