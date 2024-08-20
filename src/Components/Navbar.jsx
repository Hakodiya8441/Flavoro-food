import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/Slices/searchSlice";

const Navbar = () => {
  //for real time date
  const now = new Date();
  const currentDate = now.toUTCString().slice(0, 16);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
        <div>
          <h3 className="text-xl font-bold text-gray-600">{currentDate}</h3>
          <h1 className="text-2xl font-bold">Flavoro Foods</h1>
        </div>
        <div>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here....!"
            autoComplete="off"
            className="p-3 border border-gray-400 outline-none text-sm rounded-lg w-full lg:w-[25vw]"
            onChange={(e)=>dispatch(setSearch(e.target.value))}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
