import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import React from "react";

const MainLayot = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default MainLayot;
