interface ToggleProps {
    size?: 'mobile' | 'normal';
    backgroundColor?: string;
    onChange?: () => void;
    isChecked?: boolean;
};

export type { ToggleProps }