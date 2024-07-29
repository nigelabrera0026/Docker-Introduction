/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/

interface HeroProps {
  src: string;
  alt: string;
  backgroundColor?: string;
  size: 'mobile' | 'normal';
  disabled?: boolean;

};

export type { HeroProps };