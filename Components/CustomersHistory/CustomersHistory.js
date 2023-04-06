import React from "react";

const customers = [
  {
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    country: "Itlay",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Mostafizur",
    country: "Bangladesh",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Sagor",
    country: "india",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    country: "Japan",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    country: "Dubai",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    country: "India",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Jon Deo",
    country: "Bangladesh",
  },
];
const CustomersHistory = () => {
  return (
    <div className="rounded-2xl  shadow-sm bg-white px-5 py-3">
      <h3 className="text-blue-600 font-bold text-2xl">Recent Customers</h3>
      <div className="mt-3">
        {customers.map((customer) => {
          const { image, name, country } = customer;
          return (
            <div className="flex items-center gap-3 mt-3">
              <img src={image} alt="" className="w-12 h-12 rounded-full" />
              <div className="flex flex-col">
                <b>{name}</b>
                <small>{country}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomersHistory;
