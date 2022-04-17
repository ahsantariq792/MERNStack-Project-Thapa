import React from 'react'
import "../App.css"
import { Formik, Form } from 'formik'
import { TextField } from './TextField'
import * as yup from 'yup'
import signupPic from "../images/tom_and_jerry.png"
import { baseurl } from "../Core"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Signup = () => {

    let navigate = useNavigate();

    const submit = async (values, { resetForm }) => {

        resetForm({})

        const { email, name, password, cpassword, phone } = values

        const res = await axios.post(`${baseurl}/api/v1/signup`,
            {
                email, name, phone, password, cpassword
            }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res) {
            console.log("Invalid registration");
        } else {
            console.log("registration completed");
            navigate("/login")

        }
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validate = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        name: yup
            .string('Enter your password')
            .min(3, 'Name should be of minimum 4 characters length')
            .required('Name is required'),
        phone: yup
            .string('Enter your phone no.')
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(11, 'Phone should contain 11 digits')
            .max(11, 'Phone should contain 11 digits')
            .required('phone number is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        cpassword: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    })






    return (
        <div className="container my-3 no-gutters shadow-lg">
            <div className="row p-3">
                <div className="col-md-5">
                    <Formik
                        initialValues={{
                            name: 'Ahsan',
                            phone: '35346069657',
                            email: 'ahsan1244@gmail.com',
                            password: '12345678',
                            cpassword: '12345678',
                            picture: ''

                        }}
                        validationSchema={validate}
                        onSubmit={submit}
                    >
                        {formik => (
                            <div>

                                <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                                <Form>
                                    <TextField label="Name" name="name" type="text"></TextField>
                                    <TextField label="Phone" name="phone" type="text"></TextField>
                                    <TextField label="Email" name="email" type="text"></TextField>
                                    <TextField label="Password" name="password" type="password"></TextField>
                                    <TextField label="Confirm Password" name="cpassword" type="password"></TextField>
                                    <TextField label="Profile Picture" name="picture" type="file"></TextField>
                                    <button className="btn btn-success mt-3 w-50 m-2" style={{ height: "40px" }} type="submit">Submit</button>
                                    <button className="btn btn-danger mt-3 w-25 m-2" style={{ height: "40px" }} type="reset">Reset</button>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
                <div className="col-md-7 my-auto">
                    <img className="img-fluid w-100" style={{ height: "500px" }} src={signupPic} alt="image"></img>
                </div>
            </div>

        </div>

    )
}

export default Signup;