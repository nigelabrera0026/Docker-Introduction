/*
@author: Nigel Abrera
@date: March 07, 2024
*/

export interface RadioButtonOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioButtonProps {
  name: string;
  options: RadioButtonOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
}
