import type { ReactNode } from "react";

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
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

export type Urgency = "Low" | "Medium" | "High";
export interface TaskFormValues {
  title: string;
  description?: string;
  urgency: Urgency;
}

export interface TaskModalProps {
  isOpen: boolean;
  title: string;
  submitLabel: string;
  defaultValues?: TaskFormValues;
  onClose: () => void;
  onSubmit: (data: TaskFormValues) => void;
}
