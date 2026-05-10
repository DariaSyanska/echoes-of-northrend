type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div className={`relative z-10 mx-auto max-w-6xl ${className}`}>
      {children}
    </div>
  );
}
