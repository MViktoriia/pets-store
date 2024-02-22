import { SVGProps } from 'react';

function OrdersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="39"
      fill="none"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={2}
        d="M13.525 1.673A4.47 4.47 0 0 0 9.051 6.14a4.47 4.47 0 0 0 4.474 4.465h6.95a4.47 4.47 0 0 0 4.475-4.465 4.47 4.47 0 0 0-4.475-4.466h-6.95Z"
      />
      <path
        fill="#000"
        d="M12.351 16.197a1.69 1.69 0 1 1-3.38 0 1.69 1.69 0 0 1 3.38 0ZM12.351 23.803a1.69 1.69 0 1 1-3.38 0 1.69 1.69 0 0 1 3.38 0ZM12.351 30.565a1.69 1.69 0 1 1-3.38 0 1.69 1.69 0 0 1 3.38 0Z"
      />
    </svg>
  );
}

export default OrdersIcon;
