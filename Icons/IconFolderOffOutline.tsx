import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconFolderOffOutline = (props: IconBaseProps) => {
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
          d="M4.09714 3L3 4.08857L4.31143 5.4C3.97714 5.71714 3.76286 6.16286 3.76286 6.66V16.9457C3.76286 17.8971 4.53429 18.66 5.47714 18.66H17.5714L19.9114 21L21 19.9114L4.09714 3ZM5.47714 16.9457V8.37429H7.28571L15.8571 16.9457H5.47714ZM11.6486 8.37429L8.22 4.94571H10.62L12.3343 6.66H19.1914C20.1343 6.66 20.9057 7.42286 20.9057 8.37429V16.9457C20.9057 17.1514 20.8714 17.3486 20.8029 17.5286L19.1914 15.9171V8.37429H11.6486Z"
        />
      </svg>
    );
  });
};
export default IconFolderOffOutline;