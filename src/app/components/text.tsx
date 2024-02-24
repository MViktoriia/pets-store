import { DetailedHTMLProps, HTMLAttributes } from 'react';

function Text({
  children,
  className,
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  return <p className={`font-sans text-base ${className}`}>{children}</p>;
}

export default Text;
