import React from 'react';
import '../App.css';
import logo from "../image.png"
import { useState } from 'react';
import { Drawer } from 'antd'
import { Button, Form, Input, Row, Col,ConfigProvider} from 'antd'
function Header() {
  
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
return (
<div>
       {/*Setting width and height and background color and aligning the div content in center using flex */}
 
  <div className="bg-white w-[90%] flex justify-between items-center">
  {/* Styling image - rounded(eclipse) */} 
  {/* Setting mx-24(margin-left and right in 96px and width(w-12) and height(h-12) in 48px) */}
  {/* left-0 top-2 (Arranging the image in the div) */}

  {/* className="rounded-full mx-24 absolute left-0 top-2 w-12 h-12 */}

  
     <img className="rounded-full mx-24 relative w-12 h-10" src={logo} /> 
     {/* <div classname='visible sm'>     
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button> </div> */}
      <ul className=" flex justify-center space-x-20 items-center hidden md:flex">
        
        <li className="font-bold font-medium cursor-pointer">Home</li>    
        <li className="font-bold font-medium cursor-pointer">About us</li>  
        <li className="font-bold font-medium cursor-pointer">Services</li>   
        <li className="font-bold font-medium cursor-pointer">Projects</li>    
        <li className="font-bold font-medium cursor-pointer">Career</li>  
    
        </ul>
        <div className='hidden md:flex'><button className=" mr-10  mb-8 w-36 h-12 text-white left-2 ">Contact Us</button></div>
        <div className='flex-none lg:hidden md:hidden'>
    
    <div className="float-left ml-10 mb-8"><Button type='primary' onClick={showDrawer} style={{ background: "#1C1258"}}>
      ≣
  </Button></div></div>
      </div>
        
        
      <Drawer onClose={onClose} open={open}   placement="left">
      <ul className=" flex flex-col justify-center items-center gap-10">
        <li className="font-bold font-medium cursor-pointer">Home</li>    {/* Setting bold text  */}
        <li className="font-bold font-medium cursor-pointer">About us</li>  {/* Setting bold text  */}
        <li className="font-bold font-medium cursor-pointer">Services</li>   {/* Setting bold text  */}
        <li className="font-bold font-medium cursor-pointer">Projects</li>    {/* Setting bold text  */}
        <li className="font-bold font-medium cursor-pointer">Career</li>  
         <li><button className="text-white w-36 h-12 ">Contact Us</button></li>
         </ul>
         
      </Drawer>
</div>
)
}
export default Header