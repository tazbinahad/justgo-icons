import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconPlayOutline = (props: IconBaseProps) => {
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
          d="M8.5 5.9376L8.5 18.062L19 11.9998L8.5 5.9376ZM6.5 5.07157C6.5 3.91687 7.75001 3.19519 8.75 3.77254L20.75 10.7007C21.75 11.2781 21.75 12.7215 20.75 13.2988L8.75 20.227C7.75 20.8044 6.5 20.0827 6.5 18.928L6.5 5.07157Z"
        />
      </svg>
    );
  });
};
export default IconPlayOutline;