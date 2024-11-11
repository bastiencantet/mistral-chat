interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary' | 'danger';
}

export function Button({ children, onClick, type = "button", disabled = false, className = "", variant = 'primary' }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-md text-white ${variant === 'primary' ? 'bg-black dark:bg-white dark:text-black' : variant === 'secondary' ? 'bg-gray-500' : 'bg-red-500'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </button>
    );
}
