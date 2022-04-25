import styled from "styled-components";
import { Popover, Button } from "@nextui-org/react";
import Image from "next/image";
import { CheckIcon, ColorPicker, Text } from "@components/index";

const Items = styled.ul`
  width: ${({ theme }) => theme.spacing.space450}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  margin: 0;
  padding: 15px;
  text-align: center;
`;

const Item = styled.li``;

const FontText = styled(Text)`
  text-transform: capitalize;
`;

const InputRange = styled.input`
  margin: 10px;
`;

export const MemeCreatorEditMenu = ({
  color,
  setColor,
  fonts,
  setFont,
  setFontSize,
  memeTitle,
  handleTextClick,
  isEditing,
}) => {
  const elements = [
    {
      el: <ColorPicker color={color} setColor={setColor} />,
      icon: "Brush.svg",
    },
    {
      el: (
        <Items>
          {fonts.map((font, i) => (
            <Item key={font + i}>
              <FontText
                text={font}
                font={font}
                onClickFunc={() => setFont(font)}
              />
            </Item>
          ))}
        </Items>
      ),
      icon: "Font.svg",
    },
    {
      el: (
        <InputRange
          type="range"
          orient="vertical"
          min="0"
          max="80"
          onChange={({ target }) => setFontSize(target.value)}
        />
      ),
      icon: "Font-size.svg",
    },
  ];

  return (
    <>
      {elements.map((item, i) => (
        <Popover key={i} placement="right">
          <Popover.Trigger>
            <Button auto bordered color="secondary">
              <Image
                src={`/${item.icon}`}
                width="30"
                height="30"
                alt={item.icon}
              />
            </Button>
          </Popover.Trigger>
          <Popover.Content>{item.el}</Popover.Content>
        </Popover>
      ))}

      {isEditing && (
        <Button
          auto
          color="success"
          disabled={memeTitle.length === 0}
          icon={<CheckIcon fill="currentColor" filled />}
          onClick={handleTextClick}
        />
      )}
    </>
  );
};
