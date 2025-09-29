import "./App.css";

import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import ProductPage from "./Pages/ProductPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <Navigation />
//       <main>
//         <Sidebar />
//         <Products />
//       </main>
//       <Footer />
//     </>
//   );
// }

export default App;
