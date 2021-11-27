import React from 'react';
import AccountItem from './AccountItem';
import axios from "axios";


export default class AccountList extends React.Component {
  state = {
    persons: [],user:{}
  }
  nextPath(path) {
    this.props.history.push(path);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  componentDidMount() {
    let user = localStorage.getItem("user");
    user= JSON.parse(user);
    console.log(user)
  if(user.role==="ADMIN"){  
      axios.get(`${process.env.REACT_APP_API_URL}/admin/account/${user.accountId}`
    ,{ headers: {"Authorization" : `${user.token}`}})
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })}else{
        axios.get(`${process.env.REACT_APP_API_URL}/user/account/${user.accountId}`
        ,{ headers: {"Authorization" : `${user.token}`}})
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
  })}
    
      axios.get(`${process.env.REACT_APP_API_URL}/admin/account/${user.accountId}`
      ,{ headers: {"Authorization" : `${user.token}`}})
        .then(res => {
          const user = res.data;
          this.setState({ user });
          console.log("user")
          console.log(user)
        })
  }

  render() {
    return (
      <div className="container">
       
        <div className="contact__text -mt-24">
                <div
                 
                  className="section-title "
                >
                  <h2 className="pt-24  m-1.5">Edit Product</h2>
                  <p className=" m-1.5">แก้ไขข้อมูลผู้ใช้</p>
                
                </div>
                
              </div>
           
        <div class="text-gray-900 bg-gray-100 text-left">
    
  
        <table class="min-w-full border-collapse block md:table text-md bg-white shadow-md rounded mb-4">
       
     
              	<tbody class="block md:table-row-group">
            <AccountItem
                person={ this.state.persons}
                key={this.state.persons.accountId}
                />
            </tbody>
        </table>


    
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
