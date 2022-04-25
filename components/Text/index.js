import { Txt } from "./Text.styles";

export const Text = ({ text, size, color, font, className, onClickFunc }) => {
  return (
    <Txt
      className={className}
      color={color}
      size={size}
      font={font}
      onClick={onClickFunc}
    >
      {text}
    </Txt>
  );
};
