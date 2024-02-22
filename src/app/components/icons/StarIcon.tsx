import { SVGProps } from 'react';

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <path
        stroke="#FFC54B"
        d="m6.302 3.3-.246.44-.042.075c-.228.41-.412.742-.707.966l-.001.001c-.3.227-.664.309-1.109.409a54.915 54.915 0 0 0-.08.018l-.476.108c-.94.212-1.586.36-2.03.535-.435.171-.548.32-.59.457-.045.144-.034.343.225.755.263.417.705.936 1.344 1.683l.326.381.053.063c.305.355.55.64.66 1 .111.357.075.733.028 1.208a82.75 82.75 0 0 0-.008.083l-.05.507c-.096.997-.162 1.69-.14 2.192.023.5.13.66.235.741.097.074.259.13.71 0 .458-.13 1.065-.408 1.944-.813l.447-.205.072-.034c.416-.193.76-.351 1.133-.351.374 0 .717.158 1.133.351l.072.033.447.206h.001c.88.405 1.485.682 1.943.814.452.13.613.073.71-.001.106-.08.213-.241.235-.741.022-.501-.044-1.195-.14-2.192l-.05-.508-.008-.082c-.046-.476-.083-.852.028-1.21s.355-.642.659-.997l.055-.064.325-.38c.64-.748 1.082-1.267 1.344-1.685.26-.412.27-.61.226-.754-.043-.137-.155-.286-.59-.457-.444-.175-1.09-.323-2.03-.535l-.476-.108-5.582-1.91Zm0 0c.483-.867.819-1.467 1.118-1.857C7.718 1.053 7.885 1 8 1c.116 0 .282.053.58.443.3.39.635.99 1.119 1.857m-3.397 0h3.397m0 0 .246.44m-.246-.44.246.44m0 0 .041.075m-.041-.075.041.075m0 0c.229.41.412.742.708.966m-.708-.966.708.966m0 0c.298.228.664.31 1.109.41m-1.11-.41 1.11.41m0 0 .08.018-.08-.019Z"
      />
    </svg>
  );
}

export default StarIcon;
