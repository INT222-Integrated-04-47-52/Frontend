// import { Link } from "react-router-dom";
import React, { Component } from "react";
import withContext from "./withContext";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {useHistory} from "react-router-dom";
const initState = {
  name: "",
  description: "",
  genderEnter: null,
  typeEnter: null,
  userId: null,

  kinds: [],
  genders: [],
};

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  componentDidMount() {
  //http://13.76.45.147:5000/
  //`${process.env.REACT_APP_API_URL}/allKinds`

    axios.get(`${process.env.REACT_APP_API_URL}/allGenders`).then((res) => {
      this.setState({ genders: res.data });
    });
   
  }

  save = async (e) => {
    e.preventDefault();

    const userId = await axios.get(
      `${process.env.REACT_APP_API_URL}/max-userId`
    );

    const hasMaxColorsId = await axios.get(
      `${process.env.REACT_APP_API_URL}/max-userHasColorsId`
    );
    var colorIds = this.state.userHasColors.map((g) => parseInt(g));
    var colorObject = colorIds.map((im) =>
      this.state.colors.find((cf) => cf.colorId === im)
    );
    console.log(colorObject);

    var genderObject = this.state.genders.find(
      (g) => g.genderId === parseInt(this.state.genderEnter)
    
    );
   console.log(this.state.genders[0].genderId)
    console.log("genders")
    console.log(this.state.genders)
    console.log("genderEnter")
    console.log(this.state.genderEnter)
    console.log("genderObjectSet;")
 console.log(typeof(this.state.genderEnter))
    console.log(typeof(this.state.genders[0].genderId))
    console.log(genderObject);

    var kindObject = this.state.kinds.find(
      (k) => k.kindId === parseInt(this.state.kindEnter)
    );
   
    console.log("kindObjectSet;")
    console.log(kindObject);

    var typeObject = this.state.types.find(
      (t) => t.typeId === parseInt(this.state.typeEnter)
    );
    console.log("typeObjectSet;")
    console.log(typeObject);

    // e.preventDefault();
    console.log(this.state.genders);

    /*, genderEnter, 
      kindEnter,typeEnter, userHasColors */

    const { name, description,file } = this.state;
    const gender = genderObject;
    const kind = kindObject;
    const type = typeObject;
    const colors = colorObject;
{/*   userId: id,
        name: name,
        image: imgName,
        description:description,
        kind:kind,
        gender:gender,
        type:type,
        userHasColors: userHasColors */}
        {/*name=="" ||description==""||kind==""||gender==""||type=="" */}
    if (name&&description&&kind&&gender&&type&&file) {
      const id = userId.data + 1;
      var hasColorsId = hasMaxColorsId.data + 1;
      console.log(hasColorsId);
      const HasColor = [];
      for (var loopColors of colors) {
        
        const hasColorsEach = {hasColorsId,colors:loopColors}
        HasColor.push(hasColorsEach)
        hasColorsId+=hasColorsId+1;
        console.log(loopColors); 
     }
      // const HasColors = {hasColorsEach };
      const userHasColors = HasColor
      console.log(userHasColors);
      let imgName = this.state.imageName;
      console.log(imgName);
      console.log("gender")
      console.log(genderObject)
      console.log(gender)
      console.log("kind")
      console.log(kindObject)
      console.log(kind)
      console.log("type")
      console.log(typeObject)
      console.log(type)

      let userJson ={ 
        userId: id,
        name: name,
        image: imgName,
        description:description,
        kind:kind,
        gender:gender,
        type:type,
        userHasColors: userHasColors
      }
   
      let file = this.state.file;
     console.log(userJson)
      console.log(file)
      let formData = new FormData();
      var blob = new Blob([JSON.stringify(userJson)],{
        type: "application/json",
      });
      console.log(userJson);
       formData.append("image", file); 
        formData.append("newuser",blob);
    /* url: `${process.env.REACT_APP_API_URL}/adduser/image`, */
    // {`http://13.76.45.147:5000/image/${user.image}`}
    //http://13.76.45.147:5000/
        axios({ 
        url: `${process.env.REACT_APP_API_URL}/adduser/image`,
        method: "POST",
        data: formData
        
      }).then(res=>this.props.history.replace("/Shop"))
       .catch(err=>err)
       console.log(formData)
       /* 
      formData.append("userId",id)
      formData.append("name",name)
      formData.append("image","imagee")
      formData.append("description",description)
      formData.append("kind",kind)
      formData.append("gender", gender)
      formData.append("type",type)
      formData.append("userHasColors",userHasColors)
      */
      for (var value of formData.values()) {
        console.log(value); 
     }
       
     
    

      /*  for (var pair of formData.entries()) {
       console.log(pair[0]+ ', ' + pair[1]+ pair[2]+ pair[3]+ pair[4]+ pair[5]); 
    }*/
    /*  const blob = await new Blob([userJson], {
        type: "application/json",
      });
      let formData = new formData();
      formData.append("image", file, file.name);
      await formData.append("newuser", blob);
      await axios
        .post(`${process.env.REACT_APP_API_URL}/adduser/image`, {
          data: formData,
        })
        .then(
        (res) => { },
          (err) => { }
        ); */
       
 /*     Math.random().toString(36).substring(2) + Date.now().toString(36); */

    /*   await axios({
        url: `${process.env.REACT_APP_API_URL}/allusers`,
        method: "POST",
        data: formData,
      });*/
      /* http://13.76.45.147:5000/adduser/image */
      {/*
       userId: id,
        name: name,
        image: imgName,
        description:description,
        kind:kind,
        gender:gender,
        type:type,
        userHasColors: userHasColors */}
        {/*userId,
          name,
          image,
          description,
          gender,
          kind,
          type,
          userHasColors, */}
    
      this.props.context.adduser(
        { id,
          name,
          imgName,
          description,
          gender,
          kind,
          type,
          userHasColors,
        },
        () => this.setState(initState)
      );
      this.setState({
      
        flash: { status: "is-success", msg: "user created successfully" },
        
      });
    } else {
      this.setState({
        flash: { status: "is-danger", msg: "Please enter all required information" },
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  handleFile(e) {
    let file = e.target.files[0];
    const reader = new FileReader();
      reader.onload = (event) => {
        this.setState({ imageUrl: event.target.result});
 
      };
    reader.readAsDataURL(file);
    this.setState({ file: file ,imageName: file.name});

    console.log(e.target.files, "file");
    console.log(e.target.files[0].name);
  }
  handleColor = (ce) => {
    let getColor = [...this.state.userHasColors, ce.target.value];

    if (
      this.state.userHasColors.findIndex((x) => x.id === ce.target.value) !==
      -1
    ) {
      getColor = getColor.filter((x) => x !== ce.target.value);
    }
    this.setState({ userHasColors: getColor });
  };
  render() {
    const { name, description, gender, kind, type } = this.state;
    const { user } = this.props.context;

    return (
   /*!(user && user.accessLevel < 1) ? (*/
    //   <Redirect to="/" />
    // ) : (
      <div className="mx-5">
      <form onSubmit={this.save}>
      {/* <div style={{paddingLeft:"32px"}} className="text-left  font-black  text-5xl">
                            <h1 className="font-bold mt-4 ml-28">Add user</h1>
                           </div> */}
 <div className="contact__text -mt-24">
                        <div style={{paddingLeft:"32px",paddingTop:"40px"}} className="section-title">
                            <h2 className="pt-24 pl-24 m-1.5">Add user</h2>
                            <p className="pl-24 m-1.5">เพิ่มรายการสินค้า</p>
                        </div>
                        </div>
        <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="">
            <div className="m-4 h-full">
              {/* <div className="user__details__pic__item pl-48"> */}
              <div className="">{/* <img src={userImage}/> */}</div>
              <label class="text-left block font-semibold">
                รูปภาพสินค้า:{" "}
              </label>
 <img class="my-5 w-48 md:w-96" alt="" src={this.state.imageUrl} />
             <input
                type="file"
                class="w-1/2 md:w-80 mt-4 focus:outline-none"
                name="file" 
                id="image" multiple
                onChange={(e) => {
                  this.handleFile(e);
                }}
              />
            
           
            </div>
          </div>

          {/* <div className="user__details__text  pl-72 font-semibold"> */}
          <div className="text-left space-y-4">
            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <span className="font-semibold">ชื่อสินค้า: </span>
              <br />

              <input
                className="border p-2 w-full h-10"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
                placeholder="ระบุชื่อสินค้า"
              />
            </div>

            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <span className="font-semibold">รายละเอียดสินค้า: </span>
              <textarea
                type="text"
                rows="2"
                style={{ resize: "none" }}
                name="description"
                value={description}
                onChange={this.handleChange}
                className="border p-2 w-full h-20"
                placeholder="ระบุรายละเอียดสินค้า"
              />
            </div>

            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <span className="font-semibold">สไตล์: </span>
              <div className=" ">
                {this.state.genders.map((g) => (
                  <div className="mx-2">
                    <input
                      key={g.genderId}
                      type="radio"
                      id={g.genderId}
                      name="genderEnter"
                      checked={gender}
                      value={g.genderId}
                      onChange={this.handleChange}
                    />
                    {g.genderName}
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <span className="font-semibold">ชนิดสินค้า: </span>
              <div className="">
                <div className=" ">
                  {this.state.kinds.map((k) => (
                    <div className="mx-2">
                      <input 
                        key={k.kindId}
                        type="radio"
                        id={k.kindId}
                        value={k.kindId}
                        checked={kind}
                        name="kindEnter"
                        onChange={this.handleChange}
                      />
                      {k.kindName}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="">
              {/* <div className="user__details__option text-left"> */}
              <label htmlFor="type" className="font-semibold ">
                ประเภทสินค้า:
              </label>
              <div className="">
               <select
                  onChange={this.handleChange}
                  className="w-full h-10 border-2"
                  name="typeEnter"
                  value={type}
                > <option value="" disabled selected hidden className="text-gray-500">Please Choose...</option>
                {this.state.types.map((t) => (
                    <option
                      id="typeEnter"
                      key={t.typeId}
                      name="type"
                      value={t.typeId}
                    >
                      {t.typeName}
                    </option>
                  ))}{" "}
                </select>
              </div>
            </div>

            <div className="user__details__option font-semibold">
              <div className="user__details__option__color">
                <span>Color:</span>
                <br />

                {/*className={{'border-red-600': this.state.colors.map(c => c.id).includes(color.id)}} */}
                <div className="grid grid-cols-1 md:grid-cols-6">
                  {this.state.colors.map((c) => (
                    <div className="mx-2 my-1">  <input className="absolute mr-12 px-2 mt-2 -ml-1"
                        key={c.colorId}
                        type="checkbox"
                        id={c.colorId}
                        name="userHasColors"
                        value={c.colorId}
                        onChange={this.handleColor}
                      /> 
               <label
                      className="absolute   mx-10 ml-4 "
                      style={{ backgroundColor: c.colorCode 
                      }}
                    >
                       
                  
                      {/*  style={{backgroundColor : c.codeName, border: "solid red"
                       }}*/}

                      {/* border: this.state.colors.map(ci => ci.id).includes(c.colorCode)?"solid red": "" */}
                      </label> </div>
              
               
                  ))}
                </div>
              </div>
            </div>

            {this.state.flash && (
              <div className={`notification ${this.state.flash.status}`}>
                {this.state.flash.msg}
              </div>
            )}
            <div className="field is-clearfix">
              {/* <Link to="/Shop">  */}{" "}
              <button
                className="primary-btn flex my-4 mx-auto justify-center"
                type="submit"
                onClick={this.save}
              >
                Submit
              </button>
              {/* </Link>  */}
            </div>
          </div>
        </div>
      </form>
      </div>
    )
  }
}
export default withContext(AddUser);