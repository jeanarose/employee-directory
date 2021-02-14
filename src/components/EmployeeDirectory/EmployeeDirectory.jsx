import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import Search from "../Search/Search";

function EmployeeDirectory() {
  return (
    <>
      <Hero />
      <Container>
        <Search />
        <EmployeeTable />
      </Container>
    </>
  );
}

export default EmployeeDirectory;
