// import UseGetAllUser from "../../context/UseGetAllUser.jsx";
'use client'
import Profile from "./Profile";
import { alluser } from "../../context/UseGetAllUser";
import { useState } from "react";
function User() {

  const [datab,setDatab]= useState([])
  const alldata= alluser.then(async(data)=> setDatab(data));
  console.log(alluser);
  

  return (
    <div className=" max-h-screen overflow-scroll">
      <h1 className="px-8 py-2 text-white bg-slate-900 text-xl fixed top-20  w-[30%] z-10">
        Message
      </h1>
      <div className="mt-32 mb-10">
        {datab.map((user) => {
          // <Profile key={index} user={user} />
          console.log(user);
          
        })
      }
      </div>
    </div>
  );
}

export default User;
