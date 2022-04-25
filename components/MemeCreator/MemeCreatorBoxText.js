import Input from "@nextui-org/react/Input";
import { Text } from "@components/index";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  ${({ isTitle, theme }) =>
    isTitle
      ? `top: ${theme.spacing.space150}`
      : `bottom: ${theme.spacing.space150}`};

  align-items: center;
  width: 100%;
  z-index: 10;

  ${({ isEditing }) =>
    isEditing &&
    `
    padding: 40px 0 10px 0;
    width: 90%;
    background: rgba( 132, 100, 198, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    `}
`;

const Title = styled(Text)`
  font-weight: bold;
`;

export const MemeCreatorBoxText = ({
  text,
  color,
  font,
  fontSize,
  isEditing,
  inputChange,
  handleTextClick,
  isTitle,
}) => {
  console.log("isEditing", isEditing, fontSize);
  return (
    <TitleContainer isTitle={isTitle} isEditing={isEditing}>
      {isEditing ? (
        <Input
          clearable
          underlined
          initialValue={text}
          onChange={({ target }) => inputChange(target.value)}
          width="80%"
        />
      ) : (
        <Title
          text={text}
          color={color}
          font={font}
          size={fontSize}
          onClickFunc={handleTextClick}
        />
      )}
    </TitleContainer>
  );
};
