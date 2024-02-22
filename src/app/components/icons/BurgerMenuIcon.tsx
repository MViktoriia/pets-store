import { SVGProps } from 'react';

function BurgerMenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <rect width={50} height={4} fill="#FFC54B" rx={2} />
      <rect width={50} height={4} y={12} fill="#FFC54B" rx={2} />
      <rect width={50} height={4} y={24} fill="#FFC54B" rx={2} />
    </svg>
  );
}

export default BurgerMenuIcon;
