import Navigation from "../Components/Navbar/Navbar";
import Products from "../Components/Products/Products";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/Sidebar/Sidebar";

function Home() {
  return (
    <>
      <main>
        <Sidebar />
        <Products />
      </main>
    </>
  );
}

export default Home;
