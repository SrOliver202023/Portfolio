import {
  Container,
  AvatarWrapper,
  InfoWrapper,
  ThemeButtonWraper,
  SocialWrapper,
  AboutMeWrapper,
} from "./styles";

import AvatarSvg from "../../assets/Avatar.svg";
import AvatarCircleSvg from "../../assets/AvatarCircle.svg";
import FiGithubSvg from "../../assets/FiGithub.svg";
import FiLinkedinSvg from "../../assets/FiLinkedin.svg";
import FiInstagramSvg from "../../assets/FiInstagram.svg";

export function BusinessCard() {
  return (
    <Container>
      <AvatarWrapper>
        <div>
          <img src={AvatarCircleSvg} />
          <img src={AvatarSvg} />
        </div>
      </AvatarWrapper>
      <InfoWrapper>
        <ThemeButtonWraper></ThemeButtonWraper>
        <SocialWrapper>
          <h3>Redes sociais</h3>
          <footer>
            <a href="https://github.com/SrOliver202023" target="_black">
              <img src={FiGithubSvg} alt="Github Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmerson-oliveira-0564191b4/"
              target="_black"
            >
              <img src={FiLinkedinSvg} alt="Likedin Icon" />
            </a>
            <a href="https://www.instagram.com/sr.oliver23/" target="_black">
              <img src={FiInstagramSvg} alt="Instagram Icon" />
            </a>
          </footer>
        </SocialWrapper>
        <AboutMeWrapper>
          <h3>Sobre mim</h3>
          <p>
            Desenvolvedor Jr, trabalho nas stacks de NodeJs, ReactJs e React
            Native, aplicando Typescript e conceitos de Clean Code.
          </p>
        </AboutMeWrapper>
      </InfoWrapper>
    </Container>
  );
}
