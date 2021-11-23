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
      .get(`${process.env.REACT_APP_API_URL}/login/${person.accountId}`)
      .then((response) => {
        setUser(response.data);
    }); 
  }, []);
  
  function handleChange(event) {
    console.log(event.target.value);
  }
  function deleteUser() {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/delete/account/${person.accountId}`)
      .then(() => {
        
        setUser(null);
        window.location.reload(false);

      });
  }



  return (
    <>
     { isInput && <EditUser  person={person} close={() => setIsIn(false)}/>}
    <div className=" column is-half">
      <div className="box">
         <div className="media">
          <div className="media-content text-left flex flex-col justify-start items-start">
            <div className=" justify-left text-left items-start ">
              <b>Name:{" "}</b>
           {person.fname} {" "}{person.lname}
                <br>
                </br>
               
                <b>Phone:{" "}</b>
                {person.phone}
                <br>
                </br>

                <b>Mail:{" "}</b>
                {person.email}
                <br>
                </br>


         
           
           </div>
            
              <div className="is-clearfix flex bl-12 justify-left mt-2">
                <button
                  className="button is-small bg-red-600 ml-4 text-gray-400   
          is-pulled-right"
                  style={{ backgroundColor: "red", color: "white" }}
                  type="submit"
                  onClick={deleteUser}
                >
                  {" "}
                  Delete
                </button>
               
                 <button
                  className="button is-small bg-green-600 ml-4 text-gray-400   
          is-pulled-right"
                  style={{ backgroundColor: "green", color: "white" }}
                  type="submit"
                 onClick={()=> setIsIn(true)}
                >
                  {" "}
                  Edit
                </button> 
                <button
                  className="button is-small bg-green-600 ml-4 text-gray-400   
          is-pulled-right"
                  style={{ backgroundColor: "green", color: "white" }}
                  type="submit"
                  onClick={()=> setIsIn(false)} disabled={!isInput}
                >
                  {" "}
                  Submit
                </button> 
              </div>
           
            
            
          </div> 
        </div> 
      </div>
    </div>
    
    </>
  );
}
