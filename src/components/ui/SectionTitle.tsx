type SectionTitleProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="heading-font text-4xl font-black text-cyan-100 md:text-6xl">
      {children}
    </h2>
  );
}
