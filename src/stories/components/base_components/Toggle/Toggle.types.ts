interface ToggleProps {
    size?: 'mobile' | 'normal';
    backgroundColor?: string;
    isChecked?: boolean; // seemns redundant but the only purpose is to evade the type error logs.
    onChange?: (isChecked: boolean) => void;
};

export type { ToggleProps };