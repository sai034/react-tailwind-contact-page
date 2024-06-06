import React from 'react';
import '../App.css';
// import logo1 from'../Group 23.jpg';
import banner from '../bannerImage.jpg';
function Contact_us() {
    // const myStyle = {
    //     background: `linear-gradient(180deg, #1C1258 20%, rgba(255, 224, 199, 0.38) 200%), url(${banner})`,
    //     width: `100%`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    
    // };
return (
    <div>
        
 <div className='w-full container1'  > {/* style = {myStyle} */}

{/* Padding-top: 96px */}
<div className='pt-24 '>

{/* Arranging the Contact Us(text) in center using flex */}
<div className='flex justify-center items-center ' > 
{/* Setting color,font-weight and font-size using css*/}
<div className="contact-label">Contact Us</div>

</div>
</div>
</div>
</div>
)
}
export default Contact_us