import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import Table from "../Table/Table";
import Search from "../Search/Search";

function EmployeeDirectory() {
  return (
    <>
      <Hero />
      <Container>
        <Search />
        <Table />
      </Container>
    </>
  );
}

export default EmployeeDirectory;
