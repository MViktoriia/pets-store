import React, { PropsWithChildren } from 'react';

function FilterTitle({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <h3 className={` text-lg ${className} `}>{children}</h3>;
}

export default FilterTitle;
