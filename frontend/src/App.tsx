
import NavBar from "components";
import DataTable from "components/DataTable";
import Footer from "components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary">Olá mundo!</h1> 

      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
