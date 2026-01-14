import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconFolderArrowDownOutline = (props: IconBaseProps) => {
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
          d="M21.5 6.7751V12.2946C20.9205 11.9621 20.284 11.7341 19.6 11.6106V6.7751H4.4V16.2751H13.0355C12.988 16.5886 12.95 16.9021 12.95 17.2251C12.95 17.5481 12.988 17.8616 13.0355 18.1751H4.4C3.355 18.1751 2.5 17.3296 2.5 16.2751V4.8751C2.5 3.8206 3.3455 2.9751 4.4 2.9751H10.1L12 4.8751H19.6C20.645 4.8751 21.5 5.7206 21.5 6.7751ZM19.6 14.3751H17.7V18.1751H15.8L18.65 21.0251L21.5 18.1751H19.6V14.3751Z"
        />
      </svg>
    );
  });
};
export default IconFolderArrowDownOutline;