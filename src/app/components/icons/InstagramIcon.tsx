import { SVGProps } from 'react';

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          d="M27.297.5H8.703A8.203 8.203 0 0 0 .5 8.703v18.594A8.203 8.203 0 0 0 8.703 35.5h18.594a8.203 8.203 0 0 0 8.203-8.203V8.703A8.203 8.203 0 0 0 27.297.5Z"
        />
        <path
          fill="url(#c)"
          d="M27.297.5H8.703A8.203 8.203 0 0 0 .5 8.703v18.594A8.203 8.203 0 0 0 8.703 35.5h18.594a8.203 8.203 0 0 0 8.203-8.203V8.703A8.203 8.203 0 0 0 27.297.5Z"
        />
        <path
          fill="#fff"
          d="M18.001 4.328c-3.713 0-4.179.016-5.637.083-1.456.066-2.45.297-3.318.635-.9.35-1.662.816-2.422 1.576a6.71 6.71 0 0 0-1.578 2.422c-.34.87-.57 1.864-.636 3.318-.065 1.459-.082 1.925-.082 5.638s.017 4.178.083 5.636c.067 1.456.297 2.45.635 3.318.35.9.817 1.662 1.577 2.422a6.696 6.696 0 0 0 2.42 1.578c.87.338 1.864.569 3.32.636 1.458.066 1.924.082 5.637.082 3.713 0 4.178-.016 5.636-.082 1.455-.067 2.45-.297 3.32-.636a6.689 6.689 0 0 0 2.42-1.578 6.71 6.71 0 0 0 1.578-2.421c.336-.87.567-1.864.635-3.319.066-1.458.083-1.923.083-5.636s-.017-4.179-.083-5.637c-.068-1.456-.299-2.45-.635-3.318a6.71 6.71 0 0 0-1.578-2.423 6.68 6.68 0 0 0-2.42-1.576c-.872-.338-1.867-.569-3.322-.635-1.459-.067-1.923-.083-5.637-.083h.004Zm-1.226 2.464H18c3.65 0 4.083.013 5.525.079 1.333.06 2.056.283 2.538.47a4.226 4.226 0 0 1 1.572 1.023c.478.479.774.934 1.023 1.572.187.482.41 1.205.47 2.538.066 1.441.08 1.874.08 5.523 0 3.649-.014 4.082-.08 5.523-.06 1.333-.283 2.056-.47 2.538a4.225 4.225 0 0 1-1.023 1.57 4.228 4.228 0 0 1-1.572 1.023c-.481.188-1.205.41-2.538.471-1.441.066-1.874.08-5.525.08-3.65 0-4.083-.014-5.524-.08-1.333-.061-2.057-.284-2.54-.471a4.236 4.236 0 0 1-1.571-1.023 4.238 4.238 0 0 1-1.023-1.571c-.188-.482-.41-1.205-.471-2.538-.066-1.441-.079-1.874-.079-5.525 0-3.651.013-4.082.079-5.523.06-1.333.283-2.057.47-2.539A4.235 4.235 0 0 1 8.367 8.36a4.242 4.242 0 0 1 1.572-1.023c.482-.188 1.206-.41 2.539-.472 1.26-.057 1.75-.074 4.298-.076v.003Zm8.524 2.27a1.64 1.64 0 1 0 0 3.282 1.64 1.64 0 0 0 0-3.283v.001Zm-7.298 1.917a7.021 7.021 0 1 0 .002 14.043A7.021 7.021 0 0 0 18 10.979Zm0 2.464a4.557 4.557 0 1 1 0 9.114 4.557 4.557 0 0 1 0-9.114Z"
        />
      </g>
      <defs>
        <radialGradient
          id="b"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 -34.6876 32.2622 0 9.797 38.196)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD5" />
          <stop offset={0.1} stopColor="#FD5" />
          <stop offset={0.5} stopColor="#FF543E" />
          <stop offset={1} stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="c"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(78.681 -4.524 -1.76) scale(15.5055 63.9144)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3771C8" />
          <stop offset={0.128} stopColor="#3771C8" />
          <stop offset={1} stopColor="#60F" stopOpacity={0} />
        </radialGradient>
        <clipPath id="a">
          <path fill="#fff" d="M.5.5h35v35H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default InstagramIcon;
