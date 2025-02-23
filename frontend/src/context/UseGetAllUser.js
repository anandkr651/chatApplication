import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function useGetAllUser() {
  const [alluser, setAlluser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getusers = async () => {
      setLoading(true);
      try {
        // const token = Cookies.get("accessToken") ;
        // const token = JSON.parse(localStorage.getItem("chatApp"));
        // console.log(token);
        
        const response = await axios.get("/api/v1/users/allUserExceptOnline") 

        // console.log(response.data);

        setAlluser(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in useGetAllUsers: " + error);
      }
    };
    getusers();
  },[]);
  return [alluser, loading];
}

export default useGetAllUser;



        // , {
        //   credentials: "include",
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });