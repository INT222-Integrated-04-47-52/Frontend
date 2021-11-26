import React, { useState, useEffect } from "react";
import axios from "axios";
import EditUser from "./EditUser";

export default function UserItem(props) {
  const { person } = props;
  const [user, setUser] = useState(null);
  const [isInput, setIsIn] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    const userLocal = localStorage.getItem("user");
    
    setUser(userLocal);
    console.log(user);
    console.log(person);
    axios
      .get(`${process.env.REACT_APP_API_URL}/login/${person.accountId}`
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
      .delete(`${process.env.REACT_APP_API_URL}/admin/delete/account/${person.accountId}`
      ,{ headers: {"Authorization" : `${user.token}`}})
      .then(() => {
        
        setUser(null);
        window.location.reload(false);

      });
  }



  return (
    <>
 
     { isInput && 
     <EditUser  person={person} close={() => setIsIn(false)}/>}
  <tr class=" border-t border-l border-r hover:bg-orange-100 bg-white block md:table-row">
                  <td class="p-3 px-5 block md:table-cell"> <span class="inline-block w-1/3 md:hidden font-bold">Name</span>{person.fname} {" "}{person.lname}</td>
                    <td class="p-3 px-5 block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email</span>  {person.email}</td>
                    <td class="p-3 px-5 block md:table-cell">  <span class="inline-block w-1/3 md:hidden font-bold">Phone</span>{person.phone}</td>
                    <td class="p-3 px-5 block md:table-cell">  <span class="inline-block w-1/3 md:hidden font-bold">Role</span>{person.role}</td>
                    {/* <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </td> */}
                    <td class="p-3 px-5 flex justify-end">
                    <button type="submit"     onClick={()=> setIsIn(true)}  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                      <button   type="submit" onClick={()=> setIsIn(false)} disabled={!isInput} class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Submit</button>

             
                    <button type="submit"    onClick={deleteUser} class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                    </tr>
                     
                  
    </>
  );
}
