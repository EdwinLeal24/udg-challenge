import { FooterContainer, Paragraph, LinkedinLink } from "./Footer.styles";
import Image from "next/image";

export const Footer = ({}) => {
  return (
    <FooterContainer>
      <Paragraph>
        Created by  
        <LinkedinLink
          href="https://www.linkedin.com/in/edwin-leal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edwin Leal  
          <Image
            src="/linkedin.svg"
            alt="Linkedin logo"
            width={22}
            height={21}
          />
        </LinkedinLink>
      </Paragraph>
    </FooterContainer>
  );
};
