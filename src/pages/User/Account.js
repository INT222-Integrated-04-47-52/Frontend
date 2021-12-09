
import React from 'react';
import UserItem from '../Admin/UserItem';
import axios from "axios";
import EditUser  from '../Admin/EditUser';
import { Link } from 'react-router-dom';
export default class Account extends React.Component {
  state = {
    persons: [],
    user:{}
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
    
    user = JSON.parse(user)
   
    console.log(this.state.persons)

  axios.get(`${process.env.REACT_APP_API_URL}/admin/allAccounts`
    ,{ headers: {"Authorization" : `${user.token}`}})
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      
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
      <>
      <div className="container">
       
      <div className="contact__text">
              <div
               
                className="section-title "
              >
                <h2 className="pt-24  m-1.5">Account</h2>
                <p className=" m-1.5">แก้ไขข้อมูลผู้ใช้</p>
              
              </div>
              
              <div className="nav-item">
                      {this.state.user  && (
                  <Link to="/Account" className="bg-black main-nav md:px-8 navbar-item"
                  activeClassName="main-nav-active ">
                    Account
                  </Link>
                  
          )}{" "}</div>
            </div>
            </div>
       
          <div class="bg-white  pb-6 w-full justify-left items-left overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
      <div class="relative h-40">
        <img class="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"/>
      </div>
      <div class="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img class="object-cover w-full h-full" src="/Users/khorapingadpu/Documents/React-Project/Frontend/src/HTMLcomponents/img/PinNookNooch/Pin.jpg"/>
      </div>
      <div class="mt-16">
        <h1 class="text-lg text-center font-semibold">
         {this.state.user.fname + "  " +"  "+ this.state.user.lname}
        </h1>
        <p class="text-sm text-gray-600 text-center">
        {this.state.user.email}
        </p>
            
      <div class=" flex flex-wrap justify-center mx-6 ">
     
        <div class="text-sm mr-2 text-center  my-1 uppercase tracking-wider border px-2 text-white rounded border-indigo-600 bg-indigo-600  cursor-default">
         {this.state.user.role}
        </div>
      </div>
      </div>  <div class="pt-3 flex flex-wrap justify-center mx-6 border-t">
        </div>
      <div class="">
        <h1 class="text-sm text-left font-semibold pl-12">
       Name: 
        </h1>
        <p class="text-sm text-gray-600 text-left pl-12">
        {this.state.user.fname + "   " +"  "+ this.state.user.lname}
        </p>
        <h1 class="text-sm text-left font-semibold pl-12">
       Email: 
        </h1>
        <p class="text-sm text-gray-600 text-left pl-12">
        {this.state.user.email}
        </p>
        <h1 class="text-sm text-left font-semibold pl-12">
       Phone: 
        </h1>
        <p class="text-sm text-gray-600 text-left pl-12">
        {this.state.user.phone}
        </p>
      </div>
      <Link to="/EditAccount">
      <button type="submit" class=" pl-5 py-1 pr-5 bg-blue-500 text-gray-100 text-sm rounded focus:border-4 border-blue-300">Edit</button>
</Link>
    </div>

 

  </>
    );
    
    
}
}
