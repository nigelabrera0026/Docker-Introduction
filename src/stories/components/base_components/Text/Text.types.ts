interface TextProps {
  primary?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  words?: string;
  size?: 'mobile' | 'normal';
  children?: React.ReactNode;
  error?: boolean;
}

export type { TextProps };