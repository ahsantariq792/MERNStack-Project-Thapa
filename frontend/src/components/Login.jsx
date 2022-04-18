import '../App.css';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import loginPic from "../images/doraemon.png"
import { useNavigate } from 'react-router-dom'
import { baseurl } from "../Core"
import axios from 'axios';
import { GlobalContext } from '../context/Context';
import { useContext } from "react";

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),

    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});





function Login() {

    let navigate = useNavigate();
    let { state, dispatch } = useContext(GlobalContext);



    const submit = async (values, { resetForm }) => {
        console.log("values:", values)
        resetForm({})

        const { email, password } = values

        const res = await axios.post(`${baseurl}/api/v1/login`, {
            email, password
        }, {
            withCredentials: true
        })

        if (!res) {
            console.log("Invalid Credentials");
        } else {
            console.log("registration completed");
            console.log(res)
            dispatch({
                type: "USER_LOGIN",
                payload: {
                    name: res.data.name,
                    email: res.data.email,
                    _id: res.data._id
                }
            })
            navigate("/")
            console.log("name", state.user.name)
        }
    }

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            email: 'ahsan12345@gmail.com',
            password: '12345678',
        },
        onSubmit: submit
    },
    );


    return (
        <>
            <div className="container">

                <div className="row m-5 no-gutters shadow-lg">



                    <div className="col-md-6 p-4 bg-light" >
                        <div className="form-style my-5">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group pb-3 my-1">

                                    <TextField
                                        id="outlined-basic"
                                        name="email"
                                        label="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}

                                        fullWidth
                                        variant="outlined" />

                                </div>
                                <div className="form-group pb-3">

                                    <TextField
                                        id="outlined-basic"
                                        name="password"
                                        label="password"
                                        type="password"
                                        className="inputbox"

                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        fullWidth
                                        variant="outlined" />

                                </div>
                                <div className="d-flex align-items-center justify-content-end mx-2">
                                    <div style={{ color: "blue" }}>Forget Password?</div>
                                </div><br />
                                <div className="pb-2">
                                    <button type="submit" id="userbtn" className="btn btn-success w-100 font-weight-bold mt-5 mb-2">LOGIN</button>
                                </div>
                                <p><center>New User?&nbsp;&nbsp;&nbsp;&nbsp;<b><Link to="/signup" style={{ textDecoration: "none", color: "blue" }}>SIGNUP HERE</Link></b> </center></p>
                            </form>
                        </div>

                    </div>

                    <div className="col-md-6 d-none  bg-light d-md-block">

                        <div style={{ fontFamily: "Impact, Haettenschweiler ", marginBottom: "20px" }}>
                            <h1 className="m-5" style={{ fontFamily: "cursive" }}><center>WELCOME</center></h1>
                        </div>
                        <div className="pic1" ><center>
                            <img style={{ height: "300px" }} src={loginPic} /></center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;