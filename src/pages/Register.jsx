import React from 'react'
import {Form, Input, message} from 'antd'
import "../style/RegiserStyles.css";
import { Link} from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



export default function Register() {

  const navigate = useNavigate();

    const onfinishHandler = async(values) =>{
      console.log(values);
      try {
        const res = await axios.post("/api/v1/user/register", values);
        if (res.data.success) {
          message.success("Register Successfully!");
          navigate("/login");
        } else {
          message.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        message.error("Something Went Wrong");
      }
    }

  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register From</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-2">
            Already user login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  )
}
