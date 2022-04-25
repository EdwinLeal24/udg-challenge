import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: ${({ theme }) => theme.spacing.space450};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export { Container, Title };
