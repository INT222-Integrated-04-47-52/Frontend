
//แบบแก้ไขได้

 import "../../HTMLcomponents/cssComponent/decorate.css";
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
   imageUrl: null,
   updatedAt: null,
 };

 class CartItem extends Component {
   constructor(props) {
     super(props);
     this.state = initState;
   }

   componentDidMount() {
     let user = localStorage.getItem("user");
     user= JSON.parse(user);
     axios.get(`${process.env.REACT_APP_API_URL}/admin/allGenders`
     ,{ headers: {"Authorization" : `${user.token}`} }
     ).then((res) => {
       this.setState({ genders: res.data });
     });
     axios.get(`${process.env.REACT_APP_API_URL}/admin/allKinds`
     ,{ headers: {"Authorization" : `${user.token}`} }).then((res) => {
       this.setState({ kinds: res.data });
     });
     axios.get(`${process.env.REACT_APP_API_URL}/admin/allTypes`
     ,{ headers: {"Authorization" : `${user.token}`} }).then((res) => {
       this.setState({ types: res.data });
     });
     axios.get(`${process.env.REACT_APP_API_URL}/admin/allColors`
     ,{ headers: {"Authorization" : `${user.token}`} }).then((res) => {
       this.setState({ colors: res.data });
     });

     let indColorArr = [];

     for (let i = 0; i < this.props.product.productHasColors.length; i++) {
       indColorArr.push(this.props.product.productHasColors[i].colors.colorId);
     }

     this.setState({
       productId: this.props.product.productId,
       name: this.props.product.name,
       description: this.props.product.description,
       image: this.props.product.image,
       kindEnter: this.props.product.kind.kindId,
       genderEnter: this.props.product.gender.genderId,
       typeEnter: this.props.product.type.typeId,
       productHasColors: indColorArr,
     });
     console.log("productThatClick");
     console.log(this.props.product.productId);
     console.log("imageThatClick");
     console.log(this.props.product.image);
   }

   save = async (e) => {
     let user = localStorage.getItem("user");
     user= JSON.parse(user);
     const proId = await axios.get(
       `${process.env.REACT_APP_API_URL}/admin/product/${this.state.productId}`
       ,{ headers: {"Authorization" : `${user.token}`} });
     console.log(proId);
     const hasMaxColorsId = await axios.get(
       `${process.env.REACT_APP_API_URL}/admin/max-productHasColorsId`
       ,{ headers: {"Authorization" : `${user.token}`} });
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
     console.log(this.state.genders);

     const { name, description } = this.state;
     const gender = genderObject;
     const kind = kindObject;
     const type = typeObject;
     const colors = colorObject;


     if (this.state.productId) {
       const id = this.state.productId;
       var hasColorsId = hasMaxColorsId.data + 1;
       console.log(hasColorsId);
       const HasColor = [];
       for (var loopColors of colors) {
         const hasColorsEach = { hasColorsId, colors: loopColors };
         HasColor.push(hasColorsEach);
         hasColorsId += hasColorsId + 1;
         console.log(loopColors);
       }
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
       console.log(this.state.image);

       console.log("productJSON" + productJson);

       console.log("fileend" + file);
       let formData = new FormData();
       var blob = new Blob([JSON.stringify(productJson)], {
         type: "application/json",
       });
       console.log(productJson);

       console.log("file");
       console.log(file);
       console.log("fileName");
       console.log(this.state.image);


       let user = localStorage.getItem("user");
       user= JSON.parse(user);
       if (this.state.file == null) {
         formData.append("editProduct", blob);
         axios({
           url: `${process.env.REACT_APP_API_URL}/admin/editProduct/image`,
           method: "PUT",
           data: formData,
           headers: {"Authorization" : `${user.token}`} ,
         })
           .then((res) => {
             if (res.data.status === 200) {
              this.props.history.push('/Shop')
              this.props.history.go(0)
             } else {
             }
           })
           .catch((err) => err);
         console.log("formData");
         console.log(formData);
       } else {
         formData.append("image", file);
         formData.append("editProduct", blob);
         axios({
           url: `${process.env.REACT_APP_API_URL}/admin/editProduct/image`,
           method: "PUT",
           headers: {"Authorization" : `${user.token}`} ,
           data: formData,
         })
           .then((res) => {
             if (res.data.status === 200) {
              this.props.history.push('/Shop')
              this.props.history.go(0)
             } else {
             }
           })
           .catch((err) => err);
         console.log("formData");
         console.log(formData);
       }

       for (var value of formData.values()) {
         console.log(value);
       }

       this.setState({
         flash: { status: "is-success", msg: "Product created successfully" },
       });
     } else {
       this.setState({
         flash: {
           status: "is-danger",
           msg: "Please enter all required information",
         },
       });
     }
   };

   handleChange = (e) => {
     this.setState({ [e.target.name]: e.target.value });
     console.log(e.target.name);
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
      
       <div
         className="bg-black bg-opacity-50 "
         style={{
           position: "absolute",
           zIndex: "5",
           top: 0,
           left: 0,
           width: "100%",
           height: "100%",
         }}
       >
         <div className="bg-white h-1/12" style={{ opacity: "1" }}>
           <div className="mx-5">
             <div onClick={this.props.close}>
               <span className="material-icons text-5xl  ">close</span>
             </div>
             <form onSubmit={this.save}>
              
               <div className="contact__text -mt-24">
                 <div
                   style={{ paddingTop: "40px" }}
                   className="section-title"
                 >
                   <h2 className="pt-24 pl-24 m-1.5">Closet</h2>
                   <p className="pl-24 m-1.5">ระบุข้อมูลเพื่อสั่งซื้อสินค้า</p>
                 </div>
               </div>
               <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
                 <div className="">
                   <div className="m-4 h-full">
                     
                     <div className="">
                       <img
                         src={
                           this.state.imageUrl === null
                             ? `${process.env.REACT_APP_API_URL}/image/${this.state.image}`
                             : this.state.imageUrl
                         }
                       />
                     </div>
                     <label class="text-left block font-semibold">
                       รูปภาพสินค้า:{" "}
                     </label>

                   </div>
                 </div>

                 <div className="text-left space-y-4">
                   <div className="">
                 
                     <span className="font-semibold">ชื่อสินค้า: </span>
                     <br />
                     {name}

                   </div>

                   <div className="">
                     
                     <span className="font-semibold">รายละเอียดสินค้า: </span>
                     <br></br>
                    {description}
                   </div>

                   <div className="">
                    
                     <span className="font-semibold">สไตล์: </span>
                  {this.props.product.gender.genderName}
                     
                   </div>

                   <div className="">
                    
                     <span className="font-semibold">ชนิดสินค้า: </span>
                     <div className="">
                       <div className=" ">
                       {this.props.product.kind.kindName}
                         
                       </div>
                     </div>
                   </div>

                   <div className="">
                     <label htmlFor="type" className="font-semibold ">
                       ประเภทสินค้า:
                     </label>
                     <div className="">
                     {this.props.product.type.typeName}
                     </div>
                   </div>

                   <div className="product__details__option font-semibold">
                     <div className="product__details__option__color">
                       <span>Color:</span>
                       <br />

                       <div className="grid grid-cols-1 md:grid-cols-6">
                         {this.props.product.productHasColors.map((c) => (
                           <div className="mx-2 my-1">
                          <input
                               className="absolute mr-12 px-2 mt-2 -ml-1"
                               key={c.colors.colorId}
                               type="radio"
                               id={c.colors.colorId}
                               name="productHasColors"
                               value={c.colors.colorId}
                              
                               onChange={this.handleColor}
                             />
                             <label
                               className="absolute   mx-10 ml-4 "
                               style={{ backgroundColor: c.colors.colorCode }}
                             >
                              
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
                    {" "}
                     <button
                       className="primary-btn flex my-4 mx-auto justify-center"
                       type="submit"
                       onClick={this.save}
                     >
                       Submit
                     </button>
                  
                   </div>
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>
     );
   }
 }
 export default withContext(CartItem);
