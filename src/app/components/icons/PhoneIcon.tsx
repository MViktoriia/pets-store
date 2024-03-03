import { SVGProps } from 'react';

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      {...props}
    >
      <path
        fill="#124B4B"
        fillRule="evenodd"
        d="M34.482 16.53c-.55.106-1.078-.25-1.224-.789-1.652-6.124-6.724-11.506-13.583-13.1-.536-.125-.898-.642-.796-1.183A.952.952 0 0 1 20.016.69c7.76 1.745 13.43 7.796 15.245 14.635.146.551-.22 1.097-.78 1.205ZM27.544 16.53c-.556.076-1.064-.312-1.227-.849-.856-2.82-3.509-5.441-6.634-6.328-.529-.15-.898-.66-.804-1.201.092-.533.597-.897 1.12-.762 3.99 1.026 7.358 4.33 8.356 7.989.15.549-.248 1.073-.811 1.151ZM20.232 16.582c-.35.048-.676-.182-.928-.43-.256-.254-.545-.612-.484-.967l.059-.34c.092-.533.608-.903 1.088-.655.547.283 1.01.72 1.31 1.234.289.49-.111 1.03-.675 1.107l-.37.05ZM7.965 6.195c.549.226 1.001.552 1.284.821l4.008 3.812c.772.734.99 1.586.859 2.355a2.952 2.952 0 0 1-.86 1.59l-1.804 1.716c-.292.278-.32.595-.224.792 1.27 2.568 4.459 5.396 7.237 7.226.332.219.815.188 1.156-.137l1.549-1.473c.36-.343.843-.528 1.223-.638a7.32 7.32 0 0 1 1.216-.227c.897-.097 1.708.266 2.269.799l4.077 3.878.027.025c.235.223.64.609.908 1.123.304.587.417 1.311.11 2.133a2.401 2.401 0 0 1-.614.89l-1.767 1.68c-.297.282-.533.515-.76.74-.177.174-.349.343-.54.526-.388.373-.78.727-1.193 1.008a3.719 3.719 0 0 1-1.45.613c-.552.098-1.117.056-1.712-.095-10.377-2.631-17.25-9.858-21.341-16.993-.552-.963-.908-2.38-1.05-3.673a10.58 10.58 0 0 1-.049-1.925c.044-.58.157-1.188.413-1.676.133-.252.388-.582.642-.893.276-.336.622-.734.995-1.148a56.166 56.166 0 0 1 2.323-2.43c.206-.2.535-.472.998-.595.783-.209 1.52-.05 2.07.176Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default PhoneIcon;
