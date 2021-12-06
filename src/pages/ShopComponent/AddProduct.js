import "../../HTMLcomponents/cssComponent/decorate.css";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
import withContext from "../../withContext";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
const initState = {
  file: null,
  name: "",
  description: "",
  genderEnter: null,
  kindEnter: null,
  typeEnter: null,
  productHasColors: [],
  productId: null,
  colors: [],
  types: [],
  kinds: [],
  genders: [],
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  componentDidMount() {
    //http://13.76.45.147:5000/
    //`${process.env.REACT_APP_API_URL}/allKinds`
    let user = localStorage.getItem("user");
    user= JSON.parse(user);
    console.log(user)
    console.log()
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/allGenders`, {
        headers: { Authorization: `${user.token}` },
      })
      .then((res) => {
        this.setState({ genders: res.data });
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/allKinds`, {
        headers: { Authorization: `${user.token}` },
      })
      .then((res) => {
        this.setState({ kinds: res.data });
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/allTypes`, {
        headers: { Authorization: `${user.token}` },
      })
      .then((res) => {
        this.setState({ types: res.data });
      });
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/allColors`, {
        headers: { Authorization: `${user.token}` },
      })
      .then((res) => {
        this.setState({ colors: res.data });
      });
  }

  save = async (e) => {
    e.preventDefault();
    let user = localStorage.getItem("user");
    user= JSON.parse(user);
    const productId = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/max-productId`
      ,{ headers: {"Authorization" : `${user.token}`} }
    );

    const hasMaxColorsId = await axios.get(
      `${process.env.REACT_APP_API_URL}/admin/max-productHasColorsId`
      ,{ headers: {"Authorization" : `${user.token}`} }
    );
    var colorIds = this.state.productHasColors.map((g) => parseInt(g));
    var colorObject = colorIds.map((im) =>
      this.state.colors.find((cf) => cf.colorId === im)
    );
    console.log(colorObject);

    var genderObject = this.state.genders.find(
      (g) => g.genderId === parseInt(this.state.genderEnter)
    );
    console.log(this.state.genders[0].genderId);
    console.log("genders");
    console.log(this.state.genders);
    console.log("genderEnter");
    console.log(this.state.genderEnter);
    console.log("genderObjectSet;");
    console.log(typeof this.state.genderEnter);
    console.log(typeof this.state.genders[0].genderId);
    console.log(genderObject);

    var kindObject = this.state.kinds.find(
      (k) => k.kindId === parseInt(this.state.kindEnter)
    );

    console.log("kindObjectSet;");
    console.log(kindObject);

    var typeObject = this.state.types.find(
      (t) => t.typeId === parseInt(this.state.typeEnter)
    );
    console.log("typeObjectSet;");
    console.log(typeObject);

    // e.preventDefault();
    console.log(this.state.genders);

    /*, genderEnter, 
      kindEnter,typeEnter, productHasColors */

    const { name, description, file } = this.state;
    const gender = genderObject;
    const kind = kindObject;
    const type = typeObject;
    const colors = colorObject;
    {
      /*   productId: id,
        name: name,
        image: imgName,
        description:description,
        kind:kind,
        gender:gender,
        type:type,
        productHasColors: productHasColors */
    }
    {
      /*name=="" ||description==""||kind==""||gender==""||type=="" */
    }
    if (name && description && kind && gender && type && file) {
      const id = productId.data + 1;
      var hasColorsId = hasMaxColorsId.data + 1;
      console.log(hasColorsId);
      const HasColor = [];
      for (var loopColors of colors) {
        const hasColorsEach = { hasColorsId, colors: loopColors };
        HasColor.push(hasColorsEach);
        hasColorsId = hasColorsId+1;
        console.log(loopColors);
      }
      // const HasColors = {hasColorsEach };
      const productHasColors = HasColor;
      console.log(productHasColors);
      let imgName = this.state.imageName;
      console.log(imgName);
      console.log("gender");
      console.log(genderObject);
      console.log(gender);
      console.log("kind");
      console.log(kindObject);
      console.log(kind);
      console.log("type");
      console.log(typeObject);
      console.log(type);

      let productJson = {
        productId: id,
        name: name,
        image: imgName,
        description: description,
        kind: kind,
        gender: gender,
        type: type,
        productHasColors: productHasColors,
      };

      let file = this.state.file;
      console.log(productJson);
      console.log(file);
      let formData = new FormData();
      var blob = new Blob([JSON.stringify(productJson)], {
        type: "application/json",
      });
      console.log(productJson);
      formData.append("image", file);
      formData.append("newProduct", blob);
      /* url: `${process.env.REACT_APP_API_URL}/addProduct/image`, */
      // {`http://13.76.45.147:5000/image/${product.image}`}
      //http://13.76.45.147:5000/
      let user = localStorage.getItem("user");
      user= JSON.parse(user);
      axios({
        url: `${process.env.REACT_APP_API_URL}/admin/addProduct/image`,
        method: "POST",
        data: formData,
        headers: {"Authorization" : `${user.token}`} 
      })
        .then((res) => this.props.history.go(0)
        )
        .catch((err) => 
        this.setState({
          flash: {
            status: "is-danger",
            msg: err.response.data.message,
            
          },
        })
        // alert(err.response.data.message)
        
        
        
        );

      console.log(formData);
      /* 
      formData.append("productId",id)
      formData.append("name",name)
      formData.append("image","imagee")
      formData.append("description",description)
      formData.append("kind",kind)
      formData.append("gender", gender)
      formData.append("type",type)
      formData.append("productHasColors",productHasColors)
      */
      for (var value of formData.values()) {
        console.log(value);
      }

      /*  for (var pair of formData.entries()) {
       console.log(pair[0]+ ', ' + pair[1]+ pair[2]+ pair[3]+ pair[4]+ pair[5]); 
    }*/
      /*  const blob = await new Blob([productJson], {
        type: "application/json",
      });
      let formData = new formData();
      formData.append("image", file, file.name);
      await formData.append("newProduct", blob);
      await axios
        .post(`${process.env.REACT_APP_API_URL}/addProduct/image`, {
          data: formData,
        })
        .then(
        (res) => { },
          (err) => { }
        ); */

      /*     Math.random().toString(36).substring(2) + Date.now().toString(36); */

      /*   await axios({
        url: `${process.env.REACT_APP_API_URL}/allProducts`,
        method: "POST",
        data: formData,
      });*/
      /* http://13.76.45.147:5000/addProduct/image */
      {
        /*
       productId: id,
        name: name,
        image: imgName,
        description:description,
        kind:kind,
        gender:gender,
        type:type,
        productHasColors: productHasColors */
      }
      {
        /*productId,
          name,
          image,
          description,
          gender,
          kind,
          type,
          productHasColors, */
      }

      this.props.context.addProduct(
        {
          id,
          name,
          imgName,
          description,
          gender,
          kind,
          type,
          productHasColors,
        },
        () => this.setState(initState)
      );
      this.setState({
       
        flash: { status: "is-success", msg: "Product created successfully" },
      });
    } else {
      this.setState({
        flash: {
          status: "is-danger",
          msg: "Something wrong",
          
        },
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
      this.setState({ imageUrl: event.target.result });
    };
    reader.readAsDataURL(file);
    this.setState({ file: file, imageName: file.name });

    console.log(e.target.files, "file");
    console.log(e.target.files[0].name);
  }
  handleColor = (ce) => {
    let getColor = [...this.state.productHasColors, parseInt(ce.target.value)];
    if (
      this.state.productHasColors.findIndex(
        (x) => x === parseInt(ce.target.value)
      ) !== -1
    ) {
      getColor = getColor.filter((x) => x !== parseInt(ce.target.value));
    }
    this.setState({ productHasColors: getColor });
    console.log(this.state.productHasColors);
  };
  render() {
    const { name, description, gender, kind, type } = this.state;
    const { user } = this.props.context;

    return (
      /*!(user && user.accessLevel < 1) ? (*/
      //   <Redirect to="/" />
      // ) : (
      <div className="mx-5 container">
        <form onSubmit={this.save}>
          {/* <div style={{paddingLeft:"32px"}} className="text-left  font-black  text-5xl">
                            <h1 className="font-bold mt-4 ml-28">Add Product</h1>
                           </div> */}
          <div className="contact__text -mt-8">
            <div
          
              className="section-title"
            >
              <h2 className="pt-24 pl-24 m-1.5">Add Product</h2>
              <p className="pl-24 m-1.5">เพิ่มรายการสินค้า</p>
            </div>
          </div>
          <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="">
              <div className="m-4 h-full">
                {/* <div className="product__details__pic__item pl-48"> */}
                <div className="">{/* <img src={productImage}/> */}</div>
                <label class="text-left block font-semibold">
                  รูปภาพสินค้า:{" "}
                </label>
                <img
                  class="my-5 w-48 md:w-96"
                  alt=""
                  src={this.state.imageUrl}
                />
                <input
                  type="file"
                  class="w-1/2 md:w-80 mt-4 focus:outline-none"
                  name="file"
                  id="image"
                  multiple
                  onChange={(e) => {
                    this.handleFile(e);
                  }}
                />
              </div>
            </div>

            {/* <div className="product__details__text  pl-72 font-semibold"> */}
            <div className="text-left space-y-4">
              <div className="">
                {/* <div className="product__details__option text-left"> */}
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
                {/* <div className="product__details__option text-left"> */}
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
                {/* <div className="product__details__option text-left"> */}
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
                {/* <div className="product__details__option text-left"> */}
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
                {/* <div className="product__details__option text-left"> */}
                <label htmlFor="type" className="font-semibold ">
                  ประเภทสินค้า:
                </label>
                <div className="">
                  <select
                    onChange={this.handleChange}
                    className="w-full h-10 border-2"
                    name="typeEnter"
                    value={type}
                  >
                    {" "}
                    <option
                      value=""
                      disabled
                      selected
                      hidden
                      className="text-gray-500"
                    >
                      Please Choose...
                    </option>
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

              <div className="product__details__option font-semibold">
                <div className="product__details__option__color">
                  <span>Color:</span>
                  <br />

                  {/*className={{'border-red-600': this.state.colors.map(c => c.id).includes(color.id)}} */}
                  <div className="grid grid-cols-1 md:grid-cols-6">
                    {this.state.colors.map((c) => (
                      <div className="mx-2 my-1">
                        {" "}
                        <input
                          className="absolute mr-12 px-2 mt-2 -ml-1"
                          key={c.colorId}
                          type="checkbox"
                          id={c.colorId}
                          name="productHasColors"
                          value={c.colorId}
                          onChange={this.handleColor}
                        />
                        <label
                          className="absolute   mx-10 ml-4 "
                          style={{ backgroundColor: c.colorCode }}
                        >
                          {/*  style={{backgroundColor : c.codeName, border: "solid red"
                       }}*/}

                          {/* border: this.state.colors.map(ci => ci.id).includes(c.colorCode)?"solid red": "" */}
                        </label>{" "}
                      </div>
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
    );
  }
}
export default withContext(AddProduct);
// import "../../HTMLcomponents/cssComponent/decorate.css";
// // import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import withContext from "../../withContext";
// import { Redirect } from "react-router-dom";
// import axios from "axios";
// import {useHistory} from "react-router-dom";
// const AddProduct =(props)=>  {
//   const [productData, setProductData] = useState({
//     name: "",
//     description: "",
//     genderEnter:[],
//     kindEnter:[],
//     typeEnter:[],
//     productHasColors:[]
//   });

//   const [file,setFile] = useState({file : null,imageName: ""});
//   // const [name,setName] = useState("");
//   // const [description,setDescription] = useState("");
//   // const [genderEnter,setGenderEnter] = useState(null);
//   // const [kindEnter,setKindEnter] = useState(null);
//   // const [typeEnter,setTypeEnter] = useState(null);
//   // const [productHasColors,setProductHasColors] = useState([]);
//   const [productId,setProductId] = useState(null);
//   const [colors,setColors] = useState([]);
//   const [types,setTypes] = useState([]);
//   const [kinds,setKinds] = useState([]);
//   const [genders,setGenders] = useState([]);
//   const [flash,setFlash]= useState({status:"", msg: ""});
//   const [imageURL,setImageURL] = useState(null);
//   useEffect (() =>{
//   //http://13.76.45.147:5000/
//   //`${process.env.REACT_APP_API_URL}/allKinds`
//     axios.get(`${process.env.REACT_APP_API_URL}/allGenders`).then((res) => {
//       setGenders( res.data );
//     });
//     axios.get(`${process.env.REACT_APP_API_URL}/allKinds`).then((res) => {
//       setKinds( res.data );
//     });
//     axios.get(`${process.env.REACT_APP_API_URL}/allTypes`).then((res) => {
//       setTypes( res.data );
//     });
//     axios.get(`${process.env.REACT_APP_API_URL}/allColors`).then((res) => {
//       setColors(res.data );
//     });
//   },[]);

//  const save = async (e) => {
//     e.preventDefault();

//     const productId = await axios.get(
//       `${process.env.REACT_APP_API_URL}/max-productId`
//     );

//     const hasMaxColorsId = await axios.get(
//       `${process.env.REACT_APP_API_URL}/max-productHasColorsId`
//     );

//     let colorIds = productData.productHasColors.map((g) => parseInt(g));
//     let colorObject = colorIds.map((im) =>
//       colors.find((cf) => cf.colorId === im)
//     );
//     console.log(colorObject);

//     let genderObject = genders.find(
//       (g) => g.genderId === parseInt(productData.genderEnter)

//     );

//     let kindObject = kinds.find(
//       (k) => k.kindId === parseInt(productData.kindEnter)
//     );

//     let typeObject = types.find(
//       (t) => t.typeId === parseInt(productData.typeEnter)
//     );

//     // e.preventDefault();

//     /*, genderEnter,
//       kindEnter,typeEnter, productHasColors */

//     // const { name, description,file }
//     const gender = genderObject;
//     const kind = kindObject;
//     const type = typeObject;
//     const colors = colorObject;
// {/*   productId: id,
//         name: name,
//         image: imgName,
//         description:description,
//         kind:kind,
//         gender:gender,
//         type:type,
//         productHasColors: productHasColors */}
//         {/*name=="" ||description==""||kind==""||gender==""||type=="" */}
//     if (productData.name && productData.description && productData.kindEnter && productData.genderEnter && productData.typeEnter && file) {
//       const id = productId.data + 1;
//       var hasColorsId = hasMaxColorsId.data + 1;
//       const HasColor = [];
//       for (var loopColors of colors) {

//         const hasColorsEach = {hasColorsId,colors:loopColors}
//         HasColor.push(hasColorsEach)
//         hasColorsId+=hasColorsId+1;

//      }
//       // const HasColors = {hasColorsEach };
//       const productHasColors = HasColor

//       let imgNamez = file.imageName;

//       let productJson ={
//         productId: id,
//         name: productData.name,
//         image: imgNamez,
//         description:productData.description,
//         kind:kind,
//         gender:gender,
//         type:type,
//         productHasColors: productHasColors
//       }

//       let file = file;

//       let formData = new FormData();
//       var blob = new Blob([JSON.stringify(productJson)],{
//         type: "application/json",
//       });

//        formData.append("image", file);
//         formData.append("newProduct",blob);
//     /* url: `${process.env.REACT_APP_API_URL}/addProduct/image`, */
//     // {`http://13.76.45.147:5000/image/${product.image}`}
//     //http://13.76.45.147:5000/
//         axios({
//         url: `${process.env.REACT_APP_API_URL}/addProduct/image`,
//         method: "POST",
//         data: formData

//       }).then(res=>props.history.replace("/Shop"))
//        .catch(err=>err)

//        /*
//       formData.append("productId",id)
//       formData.append("name",name)
//       formData.append("image","imagee")
//       formData.append("description",description)
//       formData.append("kind",kind)
//       formData.append("gender", gender)
//       formData.append("type",type)
//       formData.append("productHasColors",productHasColors)
//       */
//     //   for (var value of formData.values()) {
//     //     console.log(value);
//     //  }

//       /*  for (var pair of formData.entries()) {
//        console.log(pair[0]+ ', ' + pair[1]+ pair[2]+ pair[3]+ pair[4]+ pair[5]);
//     }*/
//     /*  const blob = await new Blob([productJson], {
//         type: "application/json",
//       });
//       let formData = new formData();
//       formData.append("image", file, file.name);
//       await formData.append("newProduct", blob);
//       await axios
//         .post(`${process.env.REACT_APP_API_URL}/addProduct/image`, {
//           data: formData,
//         })
//         .then(
//         (res) => { },
//           (err) => { }
//         ); */

//  /*     Math.random().toString(36).substring(2) + Date.now().toString(36); */

//     /*   await axios({
//         url: `${process.env.REACT_APP_API_URL}/allProducts`,
//         method: "POST",
//         data: formData,
//       });*/
//       /* http://13.76.45.147:5000/addProduct/image */
//       {/*
//        productId: id,
//         name: name,
//         image: imgName,
//         description:description,
//         kind:kind,
//         gender:gender,
//         type:type,
//         productHasColors: productHasColors */}
//         {/*productId,
//           name,
//           image,
//           description,
//           gender,
//           kind,
//           type,
//           productHasColors, */}

//       // props.context.addProduct(
//       //   { id,
//       //     name,
//       //     imgName,
//       //     description,
//       //     gender,
//       //     kind,
//       //     type,
//       //     productHasColors,
//       //   },
//       //   () => setProductData(productData)
//       // );
//       setFlash({

//           status: "is-success", msg: "Product created successfully"

//       });
//     } else {
//       setFlash({
//         status: "is-danger", msg: "Please enter all required information"
//       });
//     }
//   };

//  const handleChange = (e) => {
//     setProductData({ [e.target.name]: e.target.value });

//     console.log(productData);
//   };

//   const handleFile = (e) => {
//     let file = e.target.files[0];
//     const reader = new FileReader();
//       reader.onload = (event) => {
//         setImageURL(event.target.result);

//       };
//     reader.readAsDataURL(file);
//     setFile({ file: file ,imageName: file.imageName});
//   }
//   /*  handleColor = (ce) => {
//     let getColor = [...this.state.productHasColors, ce.target.value];

//     if (
//       this.state.productHasColors.findIndex((x) => x.id === ce.target.value) !==
//       -1
//     ) {
//       getColor = getColor.filter((x) => x !== ce.target.value);
//     }
//     this.setState({ productHasColors: getColor });
//   }; */
//   const handleColor = (ce) => {
// console.log(productData.productHasColors)
// let getColor = [...productData.productHasColors,ce.target.value];

//     // getColor.push(ce.target.value);

//     if (
//       productData.productHasColors.findIndex((x) => x.id === ce.target.value) !==
//       -1
//     ) {
//       getColor = getColor.filter((x) => x !== ce.target.value);
//     }
//   setProductData({productHasColors: getColor });

//     console.log(productData.productHasColors)
//   };

//     // const { name, description, gender, kind, type } = state;
//     // const { user } = props.context;

//     return (
//    /*!(user && user.accessLevel < 1) ? (*/
//     //   <Redirect to="/" />
//     // ) : (
//       <div className="mx-5">
//       <form onSubmit={save}>
//       {/* <div style={{paddingLeft:"32px"}} className="text-left  font-black  text-5xl">
//                             <h1 className="font-bold mt-4 ml-28">Add Product</h1>
//                            </div> */}
//  <div className="contact__text -mt-24">
//                         <div style={{paddingLeft:"32px",paddingTop:"40px"}} className="section-title">
//                             <h2 className="pt-24 pl-24 m-1.5">Add Product</h2>
//                             <p className="pl-24 m-1.5">เพิ่มรายการสินค้า</p>
//                         </div>
//                         </div>
//         <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
//           <div className="">
//             <div className="m-4 h-full">
//               {/* <div className="product__details__pic__item pl-48"> */}
//               <div className="">{/* <img src={productImage}/> */}</div>
//               <label class="text-left block font-semibold">
//                 รูปภาพสินค้า:{" "}
//               </label>
//  <img class="my-5 w-48 md:w-96" alt="" src={imageURL} />
//              <input
//                 type="file"
//                 class="w-1/2 md:w-80 mt-4 focus:outline-none"
//                 name="file"
//                 id="image" multiple
//                 onChange={(e) => {
//                   handleFile(e);
//                 }}
//               />

//             </div>
//           </div>

//           {/* <div className="product__details__text  pl-72 font-semibold"> */}
//           <div className="text-left space-y-4">
//             <div className="">
//               {/* <div className="product__details__option text-left"> */}
//               <span className="font-semibold">ชื่อสินค้า: </span>
//               <br />

//               <input
//                 className="border p-2 w-full h-10"
//                 type="text"
//                 name="name"
//                 value={productData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="ระบุชื่อสินค้า"
//               />
//             </div>

//             <div className="">
//               {/* <div className="product__details__option text-left"> */}
//               <span className="font-semibold">รายละเอียดสินค้า: </span>
//               <textarea
//                 type="text"
//                 rows="2"
//                 style={{ resize: "none" }}
//                 name="description"
//                 value={productData.description}
//                 onChange={handleChange}
//                 className="border p-2 w-full h-20"
//                 placeholder="ระบุรายละเอียดสินค้า"
//               />
//             </div>

//             <div className="">
//               {/* <div className="product__details__option text-left"> */}
//               <span className="font-semibold">สไตล์: </span>
//               <div className=" ">
//                 {genders.map((g) => (
//                   <div className="mx-2">
//                     <input
//                       key={g.genderId}
//                       type="radio"
//                       id={g.genderId}
//                       name="genderEnter"
//                       checked={productData.gender}
//                       value={g.genderId}
//                       onChange={handleChange}
//                     />
//                     {g.genderName}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="">
//               {/* <div className="product__details__option text-left"> */}
//               <span className="font-semibold">ชนิดสินค้า: </span>
//               <div className="">
//                 <div className=" ">
//                   {kinds.map((k) => (
//                     <div className="mx-2">
//                       <input
//                         key={k.kindId}
//                         type="radio"
//                         id={k.kindId}
//                         value={k.kindId}
//                         checked={productData.kind}
//                         name="kindEnter"
//                         onChange={handleChange}
//                       />
//                       {k.kindName}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="">
//               {/* <div className="product__details__option text-left"> */}
//               <label htmlFor="type" className="font-semibold ">
//                 ประเภทสินค้า:
//               </label>
//               <div className="">
//                <select
//                   onChange={handleChange}
//                   className="w-full h-10 border-2"
//                   name="typeEnter"
//                   value={productData.type}
//                 > <option value="" disabled selected hidden className="text-gray-500">Please Choose...</option>
//                 {types.map((t) => (
//                     <option
//                       id="typeEnter"
//                       key={t.typeId}
//                       name="type"
//                       value={t.typeId}
//                     >
//                       {t.typeName}
//                     </option>
//                   ))}{" "}
//                 </select>
//               </div>
//             </div>

//             <div className="product__details__option font-semibold">
//               <div className="product__details__option__color">
//                 <span>Color:</span>
//                 <br />

//                 {/*className={{'border-red-600': colors.map(c => c.id).includes(color.id)}} */}
//                 <div className="grid grid-cols-1 md:grid-cols-6">
//                   {colors.map((c) => (
//                     <div className="mx-2 my-1">  <input className="absolute mr-12 px-2 mt-2 -ml-1"
//                         key={c.colorId}
//                         type="checkbox"
//                         id={c.colorId}
//                         name="productHasColors"
//                         value={c.colorId}
//                         onChange={handleColor}
//                       />
//                <label
//                       className="absolute   mx-10 ml-4 "
//                       style={{ backgroundColor: c.colorCode
//                       }}
//                     >

//                       {/*  style={{backgroundColor : c.codeName, border: "solid red"
//                        }}*/}

//                       {/* border: colors.map(ci => ci.id).includes(c.colorCode)?"solid red": "" */}
//                       </label> </div>

//                   ))}
//                 </div>
//               </div>
//             </div>

//             {flash && (
//               <div className={`notification ${flash.status}`}>
//                 {flash.msg}
//               </div>
//             )}
//             <div className="field is-clearfix">
//               {/* <Link to="/Shop">  */}{" "}
//               <button
//                 className="primary-btn flex my-4 mx-auto justify-center"
//                 type="submit"
//                 onClick={save}
//               >
//                 Submit
//               </button>
//               {/* </Link>  */}
//             </div>
//           </div>
//         </div>
//       </form>
//       </div>
//     )
//   }
// export default withContext(AddProduct);
