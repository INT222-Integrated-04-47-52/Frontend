import React, { useState, useEffect } from "react";
import axios from "axios";
import EditUser from "../Admin/EditUser";

export default function ClosetItemAdmin(props) {
  const { closet } = props;
  const [user, setUser] = useState(null);
  const [isInput, setIsIn] = useState(false);

  useEffect(() => {

    const userLocal = localStorage.getItem("user");
    
    setUser(userLocal);
    console.log(user);
    console.log(closet);
    axios
      .get(`${process.env.REACT_APP_API_URL}/login/${userLocal.accountId}`
    )
      .then((response) => {
        setUser(response.data);
    }); 
  }, []);
  
  function handleChange(event) {
    console.log(event.target.value);
  }
  function deleteUser() {
    let user = localStorage.getItem("user");
    user= JSON.parse(user);
    axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/delete/account/${closet.accountId}`
      ,{ headers: {"Authorization" : `${user.token}`}})
      .then(() => {
        
        setUser(null);
        window.location.reload(false);

      });
  }



  return (
    <>
 
     { isInput && 
     <EditUser  closet={closet} close={() => setIsIn(false)}/>}
  <tr class="rounded-md border-t border-l border-r block md:table-row">
                   <td class=" pt-5 px-5 block md:table-cell bg-indigo-50 "><span class="inline-block w-1/3 md:hidden font-bold">Order</span><br></br>
                    {closet.closetId}
                 </td>
                    <td class=" px-5 block md:table-cell "><span class="inline-block w-1/3 md:hidden font-bold">Account</span>  <br></br>
                    <span className="font-semibold">Name: </span>{closet.account.fname}{" "} {closet.account.lname}<br></br>
                    <span className="font-semibold">Phone: </span>{closet.account.phone}</td>
                    <td class="px-5 block md:table-cell "><span class="inline-block w-1/3 md:hidden font-bold">Product</span>  {closet.product.fname}<br></br>
                    <span className="font-semibold">Kind: </span>{closet.product.kind.kindName}<br></br>
                    <span className="font-semibold">Gender: </span>{closet.product.gender.genderName}<br></br>
                    <span className="font-semibold">Type: </span>{closet.product.type.typeName}<br></br>
                    <span className="font-semibold">Pick Up Date: </span>{closet.pickUpDate}<br></br></td>
                    <td class=" px-5 block md:table-cell "> <span class="inline-block w-1/3 md:hidden font-bold">image</span>   
                    <img src={`${process.env.REACT_APP_API_URL}/image/${closet.product.image}`}
                alt={closet.product.image}
                className="h-20 object-scale-down lg:object-cover lg:h-48"
              /></td>
               <td class=" pt-5 px-5 block md:table-cell  "><span class="inline-block w-1/3 md:hidden font-bold">Order</span><br></br>
               <br></br>
                      <button
                        className="transition mt-2  delay-150 duration-300 ease-in-out w-20 mb-2 border  border-1 md:mb-0    tracking-wider text-white bg-red-500 hover:bg-red-800 hover:text-white"
                        type="submit"
                        onClick={props.postDeleted}>{" "}
                        Remove
                      </button> 
                 </td>   
                    <td class="p-3 px-5 flex justify-end">       
                    </td>
                    </tr>
                     
                  
    </>
  );
}
