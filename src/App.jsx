import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Cards from "./components/cards";
import MarketingSummary from "./components/MarketingSummary";
import SalesSummary from "./components/SalesSummary";
import RecentOrders from "./components/RecentOrders";
function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="container">
          <Cards />
          <div className="container2">
            <div className="left">
              <MarketingSummary />
              <SalesSummary />
            </div>
            <RecentOrders />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
