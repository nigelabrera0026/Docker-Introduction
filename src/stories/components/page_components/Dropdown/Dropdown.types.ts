/** 
 * Type declaration for Dropdown component.
 * @author Nigel Abrera
 * @date   March 03, 2024
 */

interface DropdownProps {
  label?: string;
  items?: string[];
  error?: boolean;
  open?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  size: 'mobile' | 'normal';
  primary?: boolean;
}

export type { DropdownProps};