import { Popover, Button, Input } from "@nextui-org/react";
import { TitleContainer } from "./PopoverInputText.styles";

export const PopoverInputText = ({ text, inputChange, label, placeholder }) => {
  return (
    <TitleContainer>
      <Popover placement={"top"}>
        <Popover.Trigger>
          <Button auto color="secondary">
            {label}
          </Button>
        </Popover.Trigger>
        <Popover.Content>
          <Input
            clearable
            placeholder={placeholder}
            initialValue={text}
            onChange={({ target }) => inputChange(target.value)}
            width="300px"
          />
        </Popover.Content>
      </Popover>
    </TitleContainer>
  );
};
