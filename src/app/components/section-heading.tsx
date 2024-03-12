export interface SectionHeadingProps {
  children: React.ReactNode;
  className: string;
}

function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={`font-serif text-[24px] font-bold lg:text-[36px] ${className}`}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
