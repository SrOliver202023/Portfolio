import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: var(--Gray-800);
  @media (min-width: 746px) {
    padding: 1rem 8rem;
  }

  * {
    background: 0;
  }
  text-align: center;
`;
export const Menu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: column;
  @media (min-width: 746px) {
    flex-direction: initial;
  }
`;
export const Logo = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin: auto;

  @media (min-width: 746px) {
    margin: initial;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
`;
export const Link = styled.li`
  margin-left: 0.5rem;
  font-size: 1rem;
  padding: 0.25rem;
  cursor: pointer;

  :nth-child(1) {
    border-bottom: 4px solid var(--PurpleHeart-500);
    cursor: initial;
  }
`;
