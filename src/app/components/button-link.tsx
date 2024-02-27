import { Url } from 'next/dist/shared/lib/router/router';
import Link, { LinkProps } from 'next/link';
import { FC, HTMLProps } from 'react';
import clsx from 'clsx';

export interface ButtonLink {
  disabled: boolean;
}

export const ButtonLink: FC<
  LinkProps & HTMLProps<HTMLAnchorElement & ButtonLink>
> = ({
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  className,
  disabled,
}) => {
  return (
    <Link
      className={clsx(
        `border border-solid rounded-[10px] text-base bg-white ${className} hover:text-orange`,
        disabled && 'pointer-events-none text-gray-light border-gray-light',
      )}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
