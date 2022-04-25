import { HexColorPicker } from "react-colorful";

export const ColorPicker = ({ color, setColor }) => {
  return <HexColorPicker color={color} onChange={setColor} />;
};
