import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#131517]">
      {/* <Header /> */}
      {/* xl:pt-24 md:pt-20 pt-24 p-4  */}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
