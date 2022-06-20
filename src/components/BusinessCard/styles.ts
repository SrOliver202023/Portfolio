import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  padding: 0.8rem 4rem;
  flex-direction: column;

  @media (min-width: 960px) {
    margin: auto;
    display: flex;
    flex: initial;
    flex-direction: row;
    justify-content: center;
  }
`;

export const AvatarWrapper = styled.div`
  @media (min-width: 746px) {
  }

  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;

  div img {
    width: 18rem;
    height: 18rem;
    background: transparent;
    margin: auto;
    @media (min-width: 960px) {
      width: 24rem;
      height: 24rem;
    }
  }
  div :nth-child(1) {
    position: absolute;
    animation: spin infinite 30s linear;
  }
  div :nth-child(2) {
    padding: 2rem;

    margin: auto;
    position: relative;
    opacity: 0.9;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 0.8rem;

  @media (min-width: 960px) {
    margin-top: initial;
    width: 20rem;
    margin-left: 12.5rem;
  }
`;
export const ThemeButtonWraper = styled.div``;

export const SocialWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 400px;

  h3 {
    border-radius: 0.5rem 0.5rem 0 0;
    font-weight: 100;
    padding: 0.5rem;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
    background-color: var(--PurpleHeart-400);
  }
  footer {
    border-radius: 0 0 0.5rem 0.5rem;

    margin-top: 0.25rem;
    display: flex;
    background-color: var(--PurpleHeart-500);
    padding: 0.5rem 2rem;
    justify-content: space-between;
    a {
      display: flex;
      background-color: var(--PurpleHeart-500);

      img {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 0.25rem;
        padding: 0.25rem;
        background-color: var(--PurpleHeart-500);
      }
    }
  }
`;
export const AboutMeWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 400px;
  margin-top: 2rem;
  h3 {
    border-radius: 0.5rem 0.5rem 0 0;
    font-weight: 100;
    padding: 0.5rem;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;

    background-color: var(--PurpleHeart-400);
  }
  p {
    font-size: 1rem;
    text-align: center;
    margin-top: 0.25rem;
    padding: 1rem;
    background-color: var(--Gray-800);
    border-right: solid 0.5rem var(--PurpleHeart-500);
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;
