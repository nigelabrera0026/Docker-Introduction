/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/

interface HeroProps {
  primary?: boolean;
  backgroundColor?: string;
  size: 'mobile' | 'normal';
  disabled?: boolean;

};

export type { HeroProps };