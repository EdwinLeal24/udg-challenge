import { theme } from "@nextui-org/react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 900px;
  height: 600px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.black};
  box-shadow: 15px 15px 30px rgb(23, 23, 23), -15px -15px 30px rgb(36, 36, 36);
`;

export { CardContainer };
