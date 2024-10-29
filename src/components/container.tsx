function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`!container px-4 mx-auto ${className}`}>{children}</div>
  );
}

export default Container;
