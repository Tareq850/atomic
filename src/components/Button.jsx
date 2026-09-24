export default function Button({
  children,
  variant = "primary",
  size = "medium",
  ...props
}) {
  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    danger: "bg-danger text-white hover:opacity-90",
    success: "bg-success text-white hover:opacity-90",
  };

  const sizes = {
    small: "px-sm py-xs text-sm",
    medium: "px-md py-sm text-md",
    large: "px-lg py-md text-lg",
  };

  const buttonStyle =
    variants[variant] || variants.primary;

  const buttonSize =
    sizes[size] || sizes.medium;

  return (
    <button
      className={`
        ${buttonStyle}
        ${buttonSize}
        rounded-md
        font-medium
        transition
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
      `}
      {...props}
    >
      {children}
    </button>
  );
}