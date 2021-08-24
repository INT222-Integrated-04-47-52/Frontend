import patternImage from '../../components/img/patternDesign.png';

function AddSize(){
    return(  <div className="text-left mx-44 flex flex-row ">
        <div class="  ">
            
        <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
   ยาวหน้า  
    <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
      </div>
       
         <div className="my-2 w-3/6 grid grid-cols-2 gap-4">
      ยาวหลัง  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
 
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      บ่าหน้า  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      บ่าหลัง  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      ไหล่  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      คอ  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      รอบอก  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      อกสูง  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      อกห่าง  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      เอว  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      หน้าท้อง  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      สะโพก  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      รักแร้  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
        </div>


         <div className="">
        <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      แขนกว้าง  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      แขนยาว  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      ข้อมือ  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      เสื้อยาว  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      เอว  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      หน้าท้อง  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      สะโพก  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      กระโปรงยาว  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      เป้านั่ง <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      รอบเป้า  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      โคนขา  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      ความยาวขา  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>
         <div className="my-2 w-3/6  grid grid-cols-2 gap-4">
      ปลายขา  <input className="border px-2 border-gray-100 " type="number" placeholder="dsa"/>
        </div>

        </div>
        <img src={patternImage} className="w-48 h-96"/>
    </div>  );
}
export default AddSize;
