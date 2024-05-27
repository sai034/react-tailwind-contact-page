import React from 'react';
import { Button, Form, Input, Row, Col,ConfigProvider} from 'antd';
const Forms1 = () => {
    const [form] = Form.useForm();
    const colors1 = ['#1C1258','#FFB0B0'];
 
        return (
            <Form form={form} name="horizontal_login" layout="vertical"  className="mx-12 mt-24">

            <Row gutter={24}>
              <Col span={24}>
             <div className='mar'>
                <Form.Item
                  name="username"
                  label="Username"
                  
                  rules={[
                    {
                      
                      message: 'Please input your username!',
                    },
                  ]}
                >
                   
                    <Input placeholder="Enter your name" />
                 
                </Form.Item>
                </div>
              </Col>
              </Row>
              <Row span={24}>
              <Col span={24}>
                
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
            <Row span={24}>
              <Col span={24}>
                
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
            </Row>
            <Row span={24}>
              <Col span={24}>
                
              <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[
                    {
                
                      message: 'Please input your subject!',
                    },
                  ]}
                >
                  <Input placeholder="Enter Subject" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={24}>
                
               <span>Message</span>
              
               
                <Input.TextArea 
               
                 placeholder="Enter Message"
                 style={{
                  
                   height: 80,
                   resize: 'none',
                 }}
               
                />
           
          
          </Col> 
          </Row>
          <Row gutter={24}>
            <Col span={24}>
          <Form.Item>
      
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
            
          </Form.Item> 
          </Col>
          </Row>
            
              
             
            </Form>
        )
    
}
export default Forms1