import styled from "styled-components";

const LayoutContainer = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.space500};
`;

export { LayoutContainer, Main };
