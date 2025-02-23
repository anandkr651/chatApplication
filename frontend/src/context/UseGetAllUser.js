// import { useEffect, useState } from "react";
// import Cookies from "js-cookie";
import axios from "axios";

// function UseGetAllUser() {
//   const [alluser, setAlluser] = useState([]);
//   const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getusers = async () => {
  //     setLoading(true);
  //     try {
  //       // const token = Cookies.get("accessToken") ;
  //       // // const token = JSON.parse(localStorage.getItem("chatApp"));
  //       // console.log(token);
        
  //       // const response = await axios.get("/api/v1/users/getOnlineUser"  )
  //       const response = await axios.get("/api/v1/users/allUserExceptOnline"  )

  //       // console.log(Array.isArray(response.data));

  //       setAlluser(response.data.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("error in get all user");
  //     }
  //   };
  //   getusers();
  // },[]);
//   return [alluser, loading];
// }






 const all = async ()=>{
  const response = await axios.get("/api/v1/users/allUserExceptOnline"  )
  // console.log(response.data.data);

  return await response.data.data
}
const alluser = all();

export {alluser}