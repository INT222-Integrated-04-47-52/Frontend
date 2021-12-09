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

    console.log(this.state.genders);


    const { name, description, file } = this.state;
    const gender = genderObject;
    const kind = kindObject;
    const type = typeObject;
    const colors = colorObject;


    if (name && description && kind && gender && type && file && colors.length > 0 ) {
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
 
      let user = localStorage.getItem("user");
      user= JSON.parse(user);
      axios({
        url: `${process.env.REACT_APP_API_URL}/admin/addProduct/image`,
        method: "POST",
        data: formData,
        headers: {"Authorization" : `${user.token}`} 
      })
        .then((res) =>  {
          
          this.props.history.push('/Shop')
          this.props.history.go(0)
       
        }

       
        ) 
        .catch((err) => 
        this.setState({
          flash: {
            status: "is-danger",
            msg: err.response.data.message,
            
          },
        })

        
        );

      console.log(formData);
     
      for (var value of formData.values()) {
        console.log(value);
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
          msg: "Please enter all required information"
          
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
      
      <div className=" container">
        <form onSubmit={this.save}>
         
          <div className="contact__text">
            <div
          
              className="section-title"
            >
              <h2>Add Product</h2>
              <p>เพิ่มรายการสินค้า</p>
            </div>
          </div>
          <div className="flex place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="">
              <div className="m-4 h-full">
                
                <div className=""></div>
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

            <div className="text-left space-y-4">
              <div className="">
               
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
              
                  <div className="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3">
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
    );
  }
}
export default withContext(AddProduct);
