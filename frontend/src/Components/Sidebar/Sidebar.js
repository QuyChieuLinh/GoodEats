import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price"


function Sidebar() {
  return (
    <section className="sidebar">
      <Category />
      <Price/>
    </section>
  );
}

export default Sidebar;
