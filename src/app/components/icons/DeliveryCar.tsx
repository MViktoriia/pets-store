import { SVGProps } from 'react';

function DeliveryCar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 57 57"
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="57"
      fill="currentColor"
      {...props}
    >
      <path
        fill="#308D8D"
        d="M7.125 28.5H28.5v3.563H7.125V28.5Zm-3.563-8.906h17.813v3.562H3.562v-3.562Z"
      />
      <path
        fill="#308D8D"
        d="M53.293 29.58 47.95 17.11a1.78 1.78 0 0 0-1.637-1.079H40.97V12.47a1.781 1.781 0 0 0-1.782-1.781h-28.5v3.562h26.72v22.365a7.11 7.11 0 0 0-3.31 4.354H22.902a7.125 7.125 0 1 0 0 3.562h11.194a7.09 7.09 0 0 0 13.744 0h3.815a1.78 1.78 0 0 0 1.781-1.781V30.281c0-.241-.049-.48-.144-.702ZM16.031 46.312a3.562 3.562 0 1 1 0-7.124 3.562 3.562 0 0 1 0 7.123Zm24.938-26.72h4.168l3.819 8.907h-7.987v-8.906Zm0 26.72a3.562 3.562 0 1 1 0-7.124 3.562 3.562 0 0 1 0 7.123Zm8.906-5.344H47.84a7.116 7.116 0 0 0-6.872-5.344v-3.563h8.906v8.907Z"
      />
    </svg>
  );
}

export default DeliveryCar;
