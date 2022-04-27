import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.space150};
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.space450};
`;

export { LayoutContainer, Main };
