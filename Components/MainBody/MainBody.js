import React from "react";
import ImportantInfo from "../ImportantInfo/ImportantInfo";
import CustomersHistory from "../CustomersHistory/CustomersHistory";
import OrderHistory from "../OrderHistory/OrderHistory";
import Navbar from "../Navbar/Navbar";

const MainBody = ({ handleSidebarToggle }) => {
  return (
    <div className="bg-gray-200 min-h-screen h-full px-3">
      <Navbar handleSidebarToggle={handleSidebarToggle} />
      <ImportantInfo />
      <div className="md:grid grid-cols-[67%_30%] gap-5 space-y-3 md:space-y-0">
        <div>
          <OrderHistory />
        </div>
        <div>
          <CustomersHistory />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
