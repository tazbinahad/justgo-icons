import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconSocialXTwitterStyleColor = (props: IconBaseProps) => {
  return WithIconProps(props, ({ width, height, fill, className }) => {
    return (
      <svg
        viewBox="0 0 24 24"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.46165 3H2.53857L9.79541 13.048L2.53857 21H5.0353L10.8984 14.5752L15.5385 21H21.4617L14.2048 10.9521L21.4617 3H18.9649L13.1018 9.42481L8.46165 3Z"
          fill="black"
        />
      </svg>
    );
  });
};
export default IconSocialXTwitterStyleColor;