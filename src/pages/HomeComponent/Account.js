import React from 'react';
import UserItem from '../Admin/UserItem';
import axios from "axios";


export default class Account extends React.Component {
  state = {
    persons: [],
    userAccount:null
  }
  nextPath(path) {
    this.props.history.push(path);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  componentDidMount() {
   
    this.state.userAccount = localStorage.getItem("user");
    // user= JSON.parse(user);
    axios.get(`${process.env.REACT_APP_API_URL}/user/account/`
    )
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      
      console.log( this.state.userAccount)
  }

  render() {
    return (
      <div className="container">
    
        <div className="contact__text -mt-24">
                <div
                 
                  className="section-title "
                >
                  <h2 className="pt-24  m-1.5">Account</h2>
                  <p className=" m-1.5">แก้ไขข้อมูลผู้ใช้</p>
                </div>
              </div>
        <div class="text-gray-900 bg-gray-100 text-left">
    
          <div className="column">
            <span className="title has-text-grey-light">
           
            </span>
          </div>
</div>


      
    </div>


    );
    
    
}
}
// import React, { useState } from "react";
// import UserItem from "./UserItem";
// import withContext from "../../withContext";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// const UserList = (props) => {
//   const history = useHistory();
//   const { users } = props.context;
//   const onPostDeleteHandler = async (e, id) => {
//     const res = await axios.delete(
//       `${process.env.REACT_APP_API_URL}/delete/${id}`
//     );
//     if (res) history.go(0);
//     // alert("Delete user successfully")
//   };
//   const onGetHandler = async (e, id) => {
//     const res = await  axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons });
//     })
//     // alert("Delete user successfully")
//   };
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div>
//       {/*  <div className="shop__sidebar__search " style={{paddingLeft:"46px"}}>
//           <form action="#">
//             <input type="text" placeholder="Search..."  onChange={(e) => console.log(e.target.value)} />
//             <button type="submit">
//               <span className="icon_search"></span>
//             </button>
//           </form>
//         </div> */}
     
//       <div className="hero is-primary"></div>
//       <br />
//       <div className="container">
//         <div className="column columns is-multiline">
//           {users && users.length ? (
//             users
//               .map((user, index) => (
//                 <UserItem
//                   user={user}
//                   key={index}
                 
//                   postDeleted={(e) => onPostDeleteHandler(e, user.accountId)}
//                 />
//               ))
//           ) : (
//             <div className="column">
//               <span className="title has-text-grey-light">
//                 No users found!
//               </span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default withContext(UserList);
