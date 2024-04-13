/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/

interface DropdownProps {
  primary?: boolean;
  label?: string;
  items?: string[];
  error?: boolean;
  open?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  size: 'mobile' | 'normal'
}

export type { DropdownProps};