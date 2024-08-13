import React, { lazy, Suspense } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/Aboutus";
import ContactUs from "./Pages/ContactUs";
import Cart from "./Pages/Cart";
import Error from "./Components/Error";
import RestaurantDetails from "./Components/RestaurantDetails/RestaurantDetails";
//import Grocery from "./Components/Grocery/Grocery";

const Grocery = lazy(() => import("./Components/Grocery/Grocery"));

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="restaurant">
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          </Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/grocery"
            element={
              <Suspense fallback={"Loading....."}>
                <Grocery />
              </Suspense>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
