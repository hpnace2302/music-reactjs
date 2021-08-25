import React,{useState} from 'react'
import {Row, Col, Form , Input, Button } from 'antd'
import { api } from '../../services/api'
import { helper } from '../../helper/common'
import { useHistory } from "react-router-dom";
import Nav from '../../components/NavMusic/Nav'
import ContentMusic from '../../components/Content/ContentMusic';

const Login = () => {
  const [errorLogin, setErrorLogin] = useState(null)

  const history = useHistory()

  const onFinish = (values) => {
    const {username, password} = values 
    const token = api.checkLoginUser(username, password)
    if (token !== null) {
      setErrorLogin(null)
      // lưu token vào localStorage - cookie browser
      helper.saveTokenLocalStorage(token)
      // quay vào trang tìm kiếm
      history.push('/home')
    } else {
      setErrorLogin('account invalid')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
      <Nav/>
      <ContentMusic>
        <Row style={{backgroundColor: 'white', height: '1000px', marginTop: '60px', paddingTop: '50px'}}>
          <Col span={12} offset={6}>
            <h1 style={{textAlign: 'center'}}>Login</h1>
            {errorLogin !== null && <p style={{color: 'red', textAlign: 'center'}}>{errorLogin}</p>}
            <Form
              style={{paddingLeft: '50px'}}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </ContentMusic>
    </>
  )
}

export default React.memo(Login)