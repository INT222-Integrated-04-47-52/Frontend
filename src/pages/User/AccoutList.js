import React from 'react';
import AccountItem from './AccountItem';
import axios from "axios";


export default class AccountList extends React.Component {
  state = {
    persons: [], user: {}
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
    user = JSON.parse(user);
    console.log(user)
    if (user.role === "ADMIN") {
      axios.get(`${process.env.REACT_APP_API_URL}/admin/account/${user.accountId}`
        , { headers: { "Authorization": `${user.token}` } })
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    } else {
      axios.get(`${process.env.REACT_APP_API_URL}/user/account/${user.accountId}`
        , { headers: { "Authorization": `${user.token}` } })
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    axios.get(`${process.env.REACT_APP_API_URL}/admin/account/${user.accountId}`
      , { headers: { "Authorization": `${user.token}` } })
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
            <h2 className="pt-24  m-1.5">User</h2>
            <p className=" m-1.5">ข้อมูลผู้ใช้</p>

          </div>

        </div>

        <div class="text-gray-900 bg-gray-100 text-left">


          <table class="min-w-full border-collapse block md:table text-md bg-white mb-4">


            <tbody class="block md:table-row-group">
              <AccountItem
                person={this.state.persons}
                key={this.state.persons.accountId}
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

