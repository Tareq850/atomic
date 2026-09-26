export default function Input({
  variant = "default",
  size = "medium",
  label,
  error,
  ...props
}) {
  const variants = {
    default:
      "border-gray-300 focus:border-primary focus:ring-primary",

    success:
      "border-success focus:border-success focus:ring-success",

    danger:
      "border-danger focus:border-danger focus:ring-danger",
  };

  const sizes = {
    small: "px-sm py-xs text-sm",
    medium: "px-md py-sm text-md",
    large: "px-lg py-md text-lg",
  };

  const inputStyle =
    variants[variant] || variants.default;

  const inputSize =
    sizes[size] || sizes.medium;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        className={`
          w-full
          rounded-md
          border
          bg-white
          outline-none
          transition
          duration-200
          focus:ring-2
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${inputStyle}
          ${inputSize}
        `}
        {...props}
      />

      {error && (
        <span className="text-sm text-danger">
          {error}
        </span>
      )}
    </div>
  );
}