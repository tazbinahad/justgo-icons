import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconEmailFill = (props: IconBaseProps) => {
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
          d="M2.03464 4.73811L12 10.8281L21.9654 4.73811C21.8503 4.31285 21.4617 4 21 4H3C2.53833 4 2.14973 4.31285 2.03464 4.73811ZM22 7.06083L12.5215 12.8533C12.2013 13.0489 11.7987 13.0489 11.4786 12.8533L2 7.06083V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V7.06083Z"
        />
      </svg>
    );
  });
};
export default IconEmailFill;