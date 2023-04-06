import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {
  AiOutlineEye,
  AiOutlineShoppingCart,
  AiOutlineMessage,
} from "react-icons/ai";

const ImportantInfo = () => {
  return (
    <section className="flex justify-between items-center gap-10 my-10 flex-wrap">
      <div className="p-5 shadow-xl shadow-slate-600 rounded-lg flex items-center gap-5 flex-1 justify-around bg-white">
        <div>
          <h2 className="text-3xl font-semibold text-blue-600">1,504</h2>
          <small>Daily Views</small>
        </div>
        <div>
          <AiOutlineEye className="text-5xl" />
        </div>
      </div>
      <div className="p-5 shadow-xl shadow-slate-600 rounded-lg flex items-center gap-5 flex-1 justify-around bg-white">
        <div>
          <h2 className="text-3xl font-semibold text-blue-600">80</h2>
          <small>Sales</small>
        </div>
        <div>
          <AiOutlineShoppingCart className="text-5xl" />
        </div>
      </div>
      <div className="p-5 shadow-xl shadow-slate-600 rounded-lg flex items-center gap-5 flex-1 justify-around bg-white">
        <div>
          <h2 className="text-3xl font-semibold text-blue-600">1,504</h2>
          <small>Comments</small>
        </div>
        <div>
          <AiOutlineMessage className="text-5xl" />
        </div>
      </div>
      <div className="p-5 shadow-xl shadow-slate-600 rounded-lg flex items-center gap-5 flex-1 justify-around bg-white">
        <div>
          <h2 className="text-3xl font-semibold text-blue-600">$7,504</h2>
          <small>Earning</small>
        </div>
        <div>
          <FaRegMoneyBillAlt className="text-5xl" />
        </div>
      </div>
    </section>
  );
};

export default ImportantInfo;
