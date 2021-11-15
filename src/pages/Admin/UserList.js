import React from 'react';
import UserItem from './UserItem';
import axios from "axios";


export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div className="container">
        <div>
          
        </div>
      <div className="column columns is-multiline">
        {this.state.persons && this.state.persons.length ? (
          this.state.persons
          
            .map((person, index) => (
              <UserItem
                person={person}
                key={index}
              />
            ))
        ) : (
          <div className="column">
            <span className="title has-text-grey-light">
              No products found!
            </span>
          </div>
        )}
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
