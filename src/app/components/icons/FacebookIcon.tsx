import { SVGProps } from 'react';

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#1877F2"
          d="M35.5 18C35.5 8.335 27.665.5 18 .5S.5 8.335.5 18c0 8.735 6.4 15.975 14.766 17.287V23.06h-4.444V18h4.444v-3.855c0-4.386 2.612-6.81 6.61-6.81 1.914 0 3.917.343 3.917.343v4.306h-2.207c-2.174 0-2.852 1.35-2.852 2.733V18h4.854l-.776 5.059h-4.078v12.228C29.1 33.975 35.5 26.735 35.5 18Z"
        />
        <path
          fill="#fff"
          d="M24.812 23.059 25.588 18h-4.854v-3.283c0-1.384.678-2.733 2.852-2.733h2.207V7.678s-2.003-.342-3.917-.342c-3.998 0-6.61 2.423-6.61 6.809V18h-4.444v5.059h4.444v12.228a17.632 17.632 0 0 0 5.468 0V23.06h4.078Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5.5h35v35H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookIcon;
