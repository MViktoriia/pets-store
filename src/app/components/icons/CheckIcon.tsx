import { SVGProps } from 'react';

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      fill="currentColor"
      {...props}
    >
      <path d="M29.921 0a.5.5 0 0 0-.37.164L9.547 22.162a.5.5 0 0 1-.671.062l-5.442-4.122a.5.5 0 0 0-.302-.101H.895a.5.5 0 0 0-.425.762l8.377 13.598a.5.5 0 0 0 .831.03L32.43.792A.5.5 0 0 0 32.024 0H29.92Z" />
    </svg>
  );
}

export default CheckIcon;
