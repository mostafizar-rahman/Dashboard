import React from "react";

const orders = [
  {
    id: 1,
    name: "Jondo",
    price: "$112",
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 2,
    name: "Mostafizur",
    price: "$15",
    payment: "Due",
    status: "Pending",
  },
  {
    id: 3,
    name: "Ali",
    price: "$112",
    payment: "Paid",
    status: "Return",
  },
  {
    id: 4,
    name: "Surove",
    price: "$500",
    payment: "Paid",
    status: "In Progress",
  },
  {
    id: 5,
    name: "Will Fan",
    price: "$30",
    payment: "Due",
    status: "Return",
  },
  {
    id: 6,
    name: "Jondo",
    price: "$112",
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: 7,
    name: "Kritick",
    price: "$112",
    payment: "Paid",
    status: "Pending",
  },
];

const OrderHistory = () => {
  return (
    <div className="rounded-2xl   shadow-sm bg-white px-5 py-3 ">
      <div className="flex justify-between items-center">
        <h3 className="text-blue-600 text-2xl font-bold">Resent Oreder</h3>
        <button className="btn bg-blue-700 text-white px-3 py-1">
          View All
        </button>
      </div>

      <div className="container p-2 mx-auto sm:p-4 ">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="">
              <tr className="text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const { id, name, price, status, payment } = order;
                return (
                  <tr key={id} className="border-b border-opacity-20 ">
                    <td className="p-3 whitespace-nowrap">
                      <p>{name}</p>
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <p>{price}</p>
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      <p>{payment}</p>
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      <span
                        className={`${
                          status === "Return"
                            ? "bg-red-500 rounded-md px-2 text-white"
                            : ""
                        }
                        ${
                          status === "Pending"
                            ? "bg-yellow-500 rounded-md px-2 text-white"
                            : ""
                        } 
                        ${
                          status === "In Progress"
                            ? "bg-blue-500 rounded-md px-2 text-white"
                            : ""
                        } 
                        ${
                          status === "Delivered"
                            ? "bg-green-500 rounded-md px-2 text-white"
                            : ""
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
