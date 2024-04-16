/*
@author:    Nigel Abrera
@date:      March 04, 2024
*/
interface LabelProps {
  label?: string;
  variant: 'mobile' | 'normal';
  disabled?: boolean;
  error?: boolean;
  backgroundColor?: string;
};

export type { LabelProps };