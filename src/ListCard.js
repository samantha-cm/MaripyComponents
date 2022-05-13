import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { BsArrowRightShort } from "react-icons/bs";

function ListCard() {
  return (
    <div className="p-6 bg-white w-[160px] md:w-[550px] m-8 shadow-md md:h-[250px]">
      <div className=" flex flex-col items-center md:flex-row">
        <div className=" flex items-center justify-center md:mr-4	">
          <div className=" p-3 bg-purple-50 w-10 h-10 flex items-center justify-center	 rounded-md">
            <HiOutlineCheckCircle className=" text-purple-700 bg-purple-50" />
          </div>
        </div>
        <h4 className="py-8 md:py-0 text-gray-900">Approve PTO</h4>
      </div>
      <p className=" pt-5 pb-3 text-gray-500 hidden md:block">
        Approve the collaborato s time off with Anticipation. Doloribus dolores
        nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut
        at blanditiis et quo et molestiae.
      </p>
      <div className=" flex ">
        <a
          className="text-indigo-600 flex items-center font-medium text-sm justify-center hover:text-indigo-400"
          href="/"
        >
          Approve here
          <BsArrowRightShort className=" h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export default ListCard;
