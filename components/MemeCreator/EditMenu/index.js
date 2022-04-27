import { Popover, Button, Radio } from "@nextui-org/react";
import Image from "next/image";
import { ColorPicker } from "@components/index";
import { Items, Item, FontText, InputRange } from "./EditMenu.styles";

export const EditMenu = ({
  color,
  setColor,
  fonts,
  setFont,
  setFontSize,
  downloadOptions,
  setDownloadOption,
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
    {
      el: (
        <Radio.Group value="jpg" css={{ padding: "10px" }}>
          {downloadOptions.map((option, i) => (
            <Radio
              key={option + i}
              squared
              value={option}
              color="secondary"
              textColor="secondary"
              onChange={() => setDownloadOption(option)}
            >
              {option}
            </Radio>
          ))}
        </Radio.Group>
      ),
      icon: "Files.svg",
    },
  ];

  return (
    <>
      {elements.map((item, i) => (
        <Popover key={i} placement={item.placement ?? "right"}>
          <Popover.Trigger>
            <Button auto bordered color="secondary">
              <Image
                src={`/${item.icon}`}
                width="58"
                height="58"
                alt={item.icon}
              />
            </Button>
          </Popover.Trigger>
          <Popover.Content>{item.el}</Popover.Content>
        </Popover>
      ))}
    </>
  );
};
