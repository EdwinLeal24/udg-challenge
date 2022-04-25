import styled from "styled-components";
export const Txt = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  font-family: ${(props) => {
    switch (props.font) {
      case "comic":
        return props.theme.fonts.comic;
      case "pacifico":
        return props.theme.fonts.pacifico;
      default:
        return props.theme.fonts.arial;
    }
  }};
  color: ${(props) => props.color};
  width: 100%;
  text-align: center;
  cursor: pointer;
`;
