import { Container, Logo, Menu, List, Link } from "./styles";

export function Header() {
  return (
    <Container>
      <Menu>
        <Logo>Emmerson Oliveira</Logo>
        <List>
          <Link>Start</Link>
          <Link>Projects</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </List>
      </Menu>
    </Container>
  );
}
