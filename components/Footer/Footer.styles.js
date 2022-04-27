import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 820px;
  color: ${({ theme }) => theme.colors.white};

  > a {
    margin: ${({ theme }) => theme.sizes.size100};
  }
`;

const Paragraph = styled.p``;
const LinkedinLink = styled.a``;

export { FooterContainer, Paragraph, LinkedinLink };
