import styled from "styled-components";
import { Text } from "@components/index";

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

export { Items, Item, FontText, InputRange };
