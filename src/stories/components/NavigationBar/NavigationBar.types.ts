/*
@author:    Nigel Abrera
@date:      April 30, 2024
*/

import { TextProps } from '../Text/Text.types';
import { DropdownProps } from '../Dropdown/Dropdown.types';

interface NavigationBarProps {
  text: TextProps;
  dropdown: DropdownProps;
  backgroundColor?: string;
  size?: 'mobile' | 'normal';
  disabled?: boolean;
}

export type { NavigationBarProps };