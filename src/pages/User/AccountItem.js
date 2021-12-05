import React, { useState, useEffect } from "react";
import axios from "axios";
import EditAccount from "./EditAccount";
import Order from "./ClosetList"
import { Link } from 'react-router-dom'
import image from '../../HTMLcomponents/img/PinNookNooch/Pin.jpg'
export default function AccountItem(props) {
  const { person } = props;
  const [user, setUser] = useState(null);
  const [isInput, setIsIn] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    const userLocal = localStorage.getItem("user");

    setUser(userLocal);
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    setUser(user)
    console.log(user);
    console.log("person")
    console.log(person);
    
    axios
      .get(`${process.env.REACT_APP_API_URL}/login/${person.accountId}` ,{ headers: {"Authorization" : `${user.token}`} })
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  function handleChange(event) {
    console.log(event.target.value);
  }
  function deleteUser() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/admin/delete/account/${person.accountId}`,
        { headers: { Authorization: `${user.token}` } }
      )
      .then(() => {
        setUser(null);
        window.location.reload(false);
      });
  }

  return (
    <>
      {isInput && <EditAccount person={person} close={() => setIsIn(false)} />}

      <div class="bg-white  pb-6 w-full justify-left items-left overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
      <div class="relative h-40">
          <img
            class="absolute h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
        </div>
        <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
          <img
            class="object-cover w-full h-full"
            src={image}
          />
        </div>
        <div class="mt-16">
          <h1 class="text-lg text-center font-semibold">
            {person.fname + "   " + "  " + person.lname}
          </h1>
          <p class="text-sm text-gray-600 text-center">{person.email}</p>

          <div class=" flex flex-wrap justify-center mx-6 ">
            <div class="text-sm mr-2 text-center  my-1 uppercase tracking-wider border px-2 text-white rounded border-indigo-600 bg-indigo-600  cursor-default">
              {person.role}
            </div>
          </div>
        </div>{" "}
        <div class="pt-3 flex flex-wrap justify-center mx-6 border-t"></div>
        <div class="">
          <h1 class="text-sm text-left font-semibold pl-12">Name:</h1>
          <p class="text-sm text-gray-600 text-left pl-12">
            {person.fname + "   " + "  " + person.lname}
          </p>
          <h1 class="text-sm text-left font-semibold pl-12">Email:</h1>
          <p class="text-sm text-gray-600 text-left pl-12">{person.email}</p>
          <h1 class="text-sm text-left font-semibold pl-12">Phone:</h1>
          <p class="text-sm text-gray-600 text-left pl-12">{person.phone}</p>
       
       
        </div>
   <div className="flex justify-center mt-2">    
    <button
          type="submit"
          onClick={() => setIsIn(true)}
          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 
                    rounded focus:outline-none focus:shadow-outline"
        >
          Edit
        </button>

           
        { user && user.accessLevel<1 ? (

<div className=" ">
<Link to='/OrderAdmin'>
<button
    className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 
    rounded focus:outline-none focus:shadow-outline"
   
    type="submit"
  
  >
    {" "}
    ออเดอร์ทั้งหมด
  </button> 
  </Link>
</div>
) : (
<div><Link to='/OrderUser'><button
    className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 
    rounded focus:outline-none focus:shadow-outline"

    type="submit"
  
  >
    {" "}
    ออเดอร์
  </button>   </Link></div>
)}

      {/* <Link to="/Order">  
                 
        <button class="mr-3 text-sm bg-green-500 
                      hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none 
                      +focus:shadow-outline" >
          ข้อมูลออเดอร์
        </button>  </Link> */}
      {/* <button
          type="submit"
          onClick={deleteUser}
          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button> */}
        </div>
      </div>

      {/* <div class="mt-16">
        <h1 class="text-lg text-center font-semibold">
        {person.fname} {" "}{person.lname}
        </h1>
        <p class="text-sm text-gray-600 text-center">
        {person.email}
        </p>
        <p class="text-sm text-gray-600 text-center">
        {person.phone}
        </p>
      <div class=" flex flex-wrap justify-center mx-6 ">    
        <div class="text-sm mr-2 text-center  my-1 uppercase tracking-wider border px-2 text-white 
        rounded border-indigo-600 bg-indigo-600  cursor-default">
        {person.role}
        </div>
      </div>
      </div> 
       <div class="pt-3 flex flex-wrap justify-center mx-6 border-t">
        </div> */}

      {/* <div className="flex justify justify-center ">
        <button
                 className=" mr-3 text-sm bg-blue-700 hover:bg-blue-900 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  style={{ }}
                  type="submit"
                  onClick={() => this.nextPath('/AddUser') }
                >
                  {" "}
                  Add user
                </button>
                </div>   */}
      {/* <tr class=" border-t border-l border-r hover:bg-orange-100 bg-white block md:table-row">
                  <td class="p-3 px-5 block md:table-cell">
                       <span class="inline-block w-1/3 md:hidden font-bold">Name</span>{person.fname} {" "}{person.lname}</td>
                    <td class="p-3 px-5 block md:table-cell">
                        <span class="inline-block w-1/3 md:hidden font-bold">Email</span>  {person.email}</td>
                    <td class="p-3 px-5 block md:table-cell">  
                    <span class="inline-block w-1/3 md:hidden font-bold">Phone</span>{person.phone}</td>
                    <td class="p-3 px-5 block md:table-cell">  
                    <span class="inline-block w-1/3 md:hidden font-bold">Role</span>{person.role}</td>
                
                    <td class="p-3 px-5 flex justify-end">
                           </tr> */}
    </>
  );
}
