import React from 'react';
import { Button, Form, Input, Row, Col,ConfigProvider} from 'antd';
const Forms = () => {
  const colors1 = ['#1C1258','#FFB0B0'];
  const [form] = Form.useForm();
  return (
    <Form form={form} name="horizontal_login" layout="vertical"  className="mx-24 mt-32">
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="username"
            label="Username"
            
            rules={[
              {
                
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          
        <Form.Item
            name="email_address"
            label="Email Address"
            rules={[
              {
          
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
        </Col>
      </Row>
      <br /> 
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="number"
            label="Number"
            rules={[
              {
         
                message: 'Please input your number!',
              },
            ]}
          >
            <Input placeholder="Enter Number" />
          </Form.Item>
        </Col>
        <Col span={12}>
          
        <Form.Item
            name="subject"
            label="Subject"
            rules={[
              {
                
                message: 'Please input your subject! ',
              },
            ]}
          >
            <Input placeholder="Type Subject" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          
         <span>Message</span>
         <br /> <br />
         
          <Input.TextArea 
         
           placeholder="Enter Message"
           style={{
            
             height: 208,
             resize: 'none',
           }}
         
          />
     
    </Col> 
    </Row>
    <Row gutter={24}>
      <Col span={4}>
    <Form.Item>

      <div className='mx-48 mt-8'>
      <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary:`linear-gradient(104.22deg, ${colors1.join(', ')})`,
          
          },
        },
      }}
    >
      <Button type="primary" size="large">
        Send Message
      </Button>
    </ConfigProvider>
      </div>
    </Form.Item> 
    </Col>
    </Row>
    
    </Form>
    
  );
};
export default Forms;