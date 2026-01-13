import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconPowerbiStyleColor = (props: IconBaseProps) => {
  return WithIconProps(props, ({ width, height, fill, className }) => {
    return (
      <svg
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill={fill || "currentColor"}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M13.5 22H18.5C19.0525 22 19.5 21.5525 19.5 21V3C19.5 2.4475 19.0525 2 18.5 2H13.5C12.9475 2 12.5 2.4475 12.5 3V21C12.5 21.5525 12.9475 22 13.5 22Z"
        />
        <path
          d="M9.5 22H14.5C15.0525 22 15.5 21.5525 15.5 21V8C15.5 7.4475 15.0525 7 14.5 7H9.5C8.9475 7 8.5 7.4475 8.5 8V21C8.5 21.5525 8.9475 22 9.5 22Z"
        />
        <path
          d="M5.5 22H10.5C11.0525 22 11.5 21.5525 11.5 21V13C11.5 12.4475 11.0525 12 10.5 12H5.5C4.9475 12 4.5 12.4475 4.5 13V21C4.5 21.5525 4.9475 22 5.5 22Z"
        />
        <defs>
          <linearGradient
            x1="16"
            y1="1.9735"
            x2="16"
            y2="22.3755"
            gradientUnits="userSpaceOnUse">
            <stop
              offset="0.006"
              stopColor="#EBB112"
            />
            <stop
              offset="1"
              stopColor="#BB5C17"
            />
          </linearGradient>
          <linearGradient
            x1="11.0445"
            y1="6.57"
            x2="13.0045"
            y2="22.836"
            gradientUnits="userSpaceOnUse">
            <stop
              stopColor="#FED35D"
            />
            <stop
              offset="0.281"
              stopColor="#F6C648"
            />
            <stop
              offset="0.857"
              stopColor="#E3A513"
            />
            <stop
              offset="0.989"
              stopColor="#DE9D06"
            />
          </linearGradient>
          <linearGradient
            x1="4.9015"
            y1="11.3905"
            x2="10.6675"
            y2="21.829"
            gradientUnits="userSpaceOnUse">
            <stop
              stopColor="#FFD869"
            />
            <stop
              offset="0.983"
              stopColor="#FFDF26"
            />
          </linearGradient>
        </defs>
      </svg>
    );
  });
};
export default IconPowerbiStyleColor;