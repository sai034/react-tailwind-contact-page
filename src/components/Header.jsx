import React from 'react';
import '../App.css';
import logo from '../logo.jpg';
import { useState } from 'react';
import { Drawer  } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined,MenuFoldOutlined } from '@ant-design/icons';
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
 
  <div className="px-3 py-2 mx-auto bg-white w-[90%] flex justify-between items-center">
  {/* Styling image - rounded(eclipse) */} 
  {/* Setting mx-24(margin-left and right in 96px and width(w-12) and height(h-12) in 48px) */}
  {/* left-0 top-2 (Arranging the image in the div) */}

  {/* className="rounded-full mx-24 absolute left-0 top-2 w-12 h-12 */}

  
     <img className='mx-6 w-12 h-14' src={logo} /> 
     {/* <div classname='visible sm'>     
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button> </div> */}
  
      <ul className=" flex flex-row justify-center items-center space-x-20  hidden md:flex">
     
       <div className='hidden lg:block'>  <li className="font-bold font-medium cursor-pointer">Home</li>    </div>
        <div className='hidden lg:block'><li className="font-bold font-medium cursor-pointer">About us</li>  </div>
        <div className='hidden lg:block'> <li className="font-bold font-medium cursor-pointer">Services</li>   </div>
        <div className='hidden lg:block'> <li className="font-bold font-medium cursor-pointer">Projects</li>    </div>
        <div className='hidden lg:block'> <li className="font-bold font-medium cursor-pointer">Career</li>  </div>
        
        </ul>
        <div className='hidden md:flex'>
          <div className='hidden lg:block'>
          <button className=" mr-10  mb-8 w-36 h-12 text-white left-2 ">Contact Us</button></div></div>
       
        <div className='flex-none lg:hidden '>
    
    <div className="float-left mt-4  w-20 h-14"> <MenuFoldOutlined   onClick={showDrawer} />
  </div></div>
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