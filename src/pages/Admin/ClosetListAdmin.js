import React from 'react';
import ClosetItemAdmin from './ClosetItemAdmin';
import axios from "axios";

export default class ClosetListAdmin extends React.Component {
  state = {
    closets: []
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
    axios.get(`${process.env.REACT_APP_API_URL}/admin/allClosets`
    ,{ headers: {"Authorization" : `${user.token}`}})
      .then(res => {
        const closets = res.data;
        this.setState({ closets });
      })
      
  }

  render() {
    return (
      <div className="container">
       
        <div className="contact__text -mt-24">
                <div
                 
                  className="section-title "
                >
                  <h2 className="pt-24  m-1.5">Order Customer</h2>
                  <p className=" m-1.5">รวมข้อมูลการสั่งตัด</p>
                
                </div>
                
              </div>
           
        <div class="text-gray-900 bg-gray-100 text-left">
    
  
        <table class="min-w-full border-collapse block md:table text-md bg-white shadow-md rounded mb-4">
       
        <thead class="block md:table-header-group">
                <tr class="border-b block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th class="text-left p-3 px-5 block md:table-cell">Order Id</th>
                    <th class="text-left p-3 px-5 block md:table-cell">Customer</th>
                    <th class="text-left p-3 px-5 block md:table-cell">Product</th>
                    <th class="text-left p-3 px-5 block md:table-cell">Kind</th>
                    <th class="text-left p-3 px-5 block md:table-cell">Gender</th>
                    <th class="text-left p-3 px-5 block md:table-cell">Type</th>
                    <th class="text-left p-3 px-5 block md:table-cell">Image</th>
                    
                    <th></th>
                </tr>
                </thead>
              
       
              	<tbody class="block md:table-row-group">
        {this.state.closets && this.state.closets.length ? (
          this.state.closets
          
            .map((closet, index) => (
              <ClosetItemAdmin
                closet={closet}
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
      
      
         
            </tbody>
        </table>
        {/* <div className="flex justify justify-center ">
        <button
                 className=" mr-3 text-sm bg-blue-700 hover:bg-blue-900 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  style={{ }}
                  type="submit"
                  onClick={() => this.nextPath('/AddUser') }
                >
                  {" "}
                  Add user
                </button></div> */}
</div>


      
    </div>


    );
    
    
}
}

