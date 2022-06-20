import { BusinessCard } from "../components/BusinessCard";
import { Header } from "../components/Header";
import { Container, WelcomeWrapper } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <section>
        <WelcomeWrapper>
          <p>
            Welcome, I'm <br /> Emmerson Oliveira
          </p>
        </WelcomeWrapper>
        <BusinessCard />
      </section>
    </Container>
  );
}
