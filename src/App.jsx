import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Contact_us from './components/Contact_us.jsx';
import Footer from './components/Footer.jsx';
import Forms from './components/Forms.jsx';
import Forms1 from './components/Forms1.jsx';
import Footer1 from './components/Footer1.jsx';
import { Button, Form, Input, Row, Col,ConfigProvider} from 'antd';


// <div class="grid grid-cols-1 md:grid-cols-2 lg: gid-cols-3 gap-10"></div>
function App() {
  const [form] = Form.useForm();
  const colors1 = ['#1C1258','#FFB0B0'];
 return (
  <div>
    <Header />
   <Contact_us />
   <div className="container mx-auto px-6 py-8 ">
                <p className="font-Rubik text-center text-gray-700">
                We're excited to hear about your idea, whether it's straightforward or complex. At NewDefines, we 
                thrive on meeting new challenges and connecting with new faces. If you’re unsure where to start, 
                share more about your company and how you think we can help. Team NewDefines is here to listen, adjust, and execute changes tailored to your business needs. It's that simple.</p>
                </div>
        <div className=" mx-16 flex flex-col justify-center items-center">
          {/* Setting the form space */}
        <div className='form-place hidden lg:block'>
           {/* Setting the form usng ant design */}
           <Forms />
       
      </div>
     
      <div className='flex-none lg:hidden'>
      <div className='form-place2'>
       <Forms1 />
      </div>
      </div>

      </div>
   
      <br/> <br />
     {/* Setting footer using css (height and top) and tailwiind css (width) */}
     <div className='lg:hidden'>
      <Footer1 />
     </div>
     <div className='hidden lg:block'>
      <Footer />
</div>  
</div>

 );

}
export default App;
