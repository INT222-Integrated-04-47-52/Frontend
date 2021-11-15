import React,{useState,useEffect} from "react";



export default function UserItem(props){
  const { person } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    const userLocal = localStorage.getItem("user");
    setUser(userLocal);
    console.log("pp")
    console.log(user);
  });

  return (
    
    <div className=" column is-half">
      
      <div className="box">
        <div className="media">
        
          <div className="media-content text-left flex flex-col justify-start items-start">
            <div className="justify-left items-start ">
              <b style={{ textTransform: "capitalize" }}>
                Name: {person.name}
              </b>
            </div>
            <div className="text-left">Description: {person.username}</div>
            <div>Gender: {person.email}</div>

          
          {user  ? (     
          <div className="is-clearfix flex bl-12 justify-center mt-20">
             
              <button
                className="button is-small bg-red-600 ml-4 text-gray-400   
          is-pulled-right" style={{backgroundColor:"red", color:"white"}}
                type="submit"  onClick={props.postDeleted}
              >
                {" "}
                Remove
              </button>
              <button
                className="button is-small bg-green-600 ml-4 text-gray-400   
          is-pulled-right" style={{backgroundColor:"green",color:"white"}}
                type="submit"  onClick={props.postEdit}
              >
                {" "}
                Edit
              </button>
       
            </div>
            

          ) :(<div></div>)
         }  
          </div>
        </div>
      </div>
    </div>
  );
};