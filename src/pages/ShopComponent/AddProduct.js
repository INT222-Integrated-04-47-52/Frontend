import "../../HTMLcomponents/cssComponent/decorate.css";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
import withContext from "../../withContext";
import { Redirect } from "react-router-dom";
import axios from "axios";

const initState = {
  file:null,
  name: "",
  description: "",
  genderEnter: "",
  kindEnter: "",
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
  

    axios.get(`${process.env.REACT_APP_API_URL}/allGenders`).then((res) => {
      this.setState({ genders: res.data });
    });
    axios.get(`${process.env.REACT_APP_API_URL}/allKinds`).then((res) => {
      this.setState({ kinds: res.data });
    });
    axios.get(`${process.env.REACT_APP_API_URL}/allTypes`).then((res) => {
      this.setState({ types: res.data });
    });
    axios.get(`${process.env.REACT_APP_API_URL}/allColors`).then((res) => {
      this.setState({ colors: res.data });
    });
  }

  save = async (e) => {
    e.preventDefault();

    const productId = await axios.get(
      `${process.env.REACT_APP_API_URL}/max-productId`
    );

    const hasMaxColorsId = await axios.get(
      `${process.env.REACT_APP_API_URL}/max-productHasColorsId`
    );
    var colorIds = this.state.productHasColors.map((g) => parseInt(g));
    var colorObject = colorIds.map((im) =>
      this.state.colors.find((cf) => cf.colorId === im)
    );
    console.log(colorObject);

    var genderObject = this.state.genders.find(
      (g) => g.genderId === this.state.genderEnter
    );
    console.log(genderObject);

    var kindObject = this.state.kinds.find(
      (k) => k.kindId === this.state.kindEnter
    );
    console.log(kindObject);

    var typeObject = this.state.types.find(
      (t) => t.typeId === this.state.typeEnter
    );
    console.log(typeObject);

    e.preventDefault();
    console.log(this.state.genders);

    /*, genderEnter, 
      kindEnter,typeEnter, productHasColors */

    const { name, description } = this.state;
    const gender = genderObject;
    const kind = kindObject;
    const type = typeObject;
    const colors = colorObject;

    if (name) {
      const id = productId.data + 1;
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
      const productHasColors = HasColor
      console.log(productHasColors);
      let imgName = this.state.imageName;
      console.log(imgName);
      let productJson ={ 
        productId: id,
        name: name,
        image: imgName,
        description:description,
        gender:gender,
        kind:kind,
        type:type,
        productHasColors: productHasColors
      }
   
      let file = this.state.file;
     
      console.log(file)
      let formData = new FormData();
      var blob = new Blob([JSON.stringify(productJson)],{
        type: "application/json",
      });
      console.log(productJson);
       formData.append("image", file); 
        formData.append("newProduct",blob);
    /* url: `${process.env.REACT_APP_API_URL}/addProduct/image`, */
        axios({
        url: `${process.env.REACT_APP_API_URL}/addProduct/image`,
        method: "POST",
        data: formData
        
      }).then(res=>res)
       .catch(err=>err)
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
      const image = "image"
      this.props.context.addProduct(
        { productId,
          name,
          image,
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
        flash: { status: "is-danger", msg: "Please enter name" },
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
    let getColor = [...this.state.productHasColors, ce.target.value];

    if (
      this.state.productHasColors.findIndex((x) => x.id === ce.target.value) !==
      -1
    ) {
      getColor = getColor.filter((x) => x !== ce.target.value);
    }
    this.setState({ productHasColors: getColor });
  };
  render() {
    const { name, description, gender, kind, type } = this.state;
    const { user } = this.props.context;

    return !(user && user.accessLevel < 1) ? (
      <Redirect to="/" />
    ) : (
      <form onSubmit={this.save}>
        <h1>เพิ่มสินค้า</h1>
        <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="">
            <div className="m-4 h-full">
              {/* <div className="product__details__pic__item pl-48"> */}
              <div className="">{/* <img src={productImage}/> */}</div>
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
                <div className=" ">
                  {this.state.colors.map((c) => (
                    <label
                      className="mx-2"
                      style={{ backgroundColor: c.colorCode }}
                    >
                      {/*  style={{backgroundColor : c.codeName, border: "solid red"
                       }}*/}

                      {/* border: this.state.colors.map(c => c.id).includes(color.id)?"solid red": "" */}
                      <input
                        key={c.colorId}
                        type="checkbox"
                        id={c.colorId}
                        name="productHasColors"
                        value={c.colorId}
                        onChange={this.handleColor}
                      />
                    </label>
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
                className="primary-btn flex justify-center"
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
    );
  }
}
export default withContext(AddProduct);
