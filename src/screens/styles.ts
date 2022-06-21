import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const WelcomeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1.5rem;

  p {
    max-width: 280px;
    text-align: left;
    font-size: 1.2rem;
    background-color: var(--PurpleHeart-400);
    padding: 1.5rem 2rem;
    border-radius: 8px;
    border-right: solid 0.5rem var(--PurpleHeart-500);
  }
`;
