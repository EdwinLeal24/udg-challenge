import { HiddenInput } from "./InputFile.styles";
export const InputFile = ({ handleFile }) => {
  return (
    <HiddenInput
      type="file"
      onChange={(ev) => handleFile(ev.target.files)}
      accept="image/png, image/jpeg, image/webp, image/gif, image/jpg,"
    />
  );
};
