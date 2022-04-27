import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.space450};
  width: 100%;
  justify-content: center;
`;

const EditNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: ${({ theme }) => theme.sizes.size100};
  width: 100px;

  & > button {
    padding: ${({ theme }) => theme.spacing.space200};
  }
`;

const MemeImage = styled.img`
  display: none;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing.space250};
`;

const Label = styled.label``;

const HiddenLink = styled.a`
  display: none;
`;

export { Container, EditNav, MemeImage, Label, HiddenLink };
