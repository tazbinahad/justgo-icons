import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconBandedFill = (props: IconBaseProps) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM5.68066 7.09668L16.9023 18.3184C17.4303 17.9076 17.9057 17.4324 18.3164 16.9043L7.09473 5.68262C6.56661 6.09328 6.09134 6.56864 5.68066 7.09668Z"
        />
      </svg>
    );
  });
};
export default IconBandedFill;