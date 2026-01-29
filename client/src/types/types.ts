export interface InputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  label?: string;
  error?: string;
}
export interface IconProps {
  size?: number;
  className?: string;
}
export interface ButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}
