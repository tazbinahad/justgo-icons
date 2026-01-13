import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconFolderPlayOutline = (props: IconBaseProps) => {
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
          d="M21 7.4999V12.7289C20.451 12.4139 19.848 12.1979 19.2 12.0809V7.4999H4.8V16.4999H12.981C12.936 16.7969 12.9 17.0939 12.9 17.3999C12.9 17.7059 12.936 18.0029 12.981 18.2999H4.8C3.81 18.2999 3 17.4989 3 16.4999V5.6999C3 4.7009 3.801 3.8999 4.8 3.8999H10.2L12 5.6999H19.2C20.19 5.6999 21 6.5009 21 7.4999ZM16.5 20.0999L21 17.3999L16.5 14.6999V20.0999Z"
        />
      </svg>
    );
  });
};
export default IconFolderPlayOutline;