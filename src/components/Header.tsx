import React from "react";

function Header() {
  return (
    <header className="fixed flex-col md:flex-row gap-4 bg-[#131517] border-b border-[#1E1F25] w-full flex items-center justify-between p-4">
      <form className="order-1 md:order-none">
        <div className="relative">
          <input
            className="bg-[#1E1F25] text-gray-300 outline-none py-1 pl-10 pr-4 rounded-full"
            type="text"
            placeholder="Search"
          />
        </div>
      </form>
      <nav className="flex items-center gap-2 text-lg"></nav>
    </header>
  );
}

export default Header;
