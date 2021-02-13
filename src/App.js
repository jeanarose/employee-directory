import Container from "./components/Container/Container";
import Hero from "./components/Hero/Hero";
import Table from "./components/Table/Table";

function App() {
  return (
    <>
      <Hero />
      <Container>
        <Table />
      </Container>
    </>
  );
}

export default App;
