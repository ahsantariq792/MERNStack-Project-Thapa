import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import "../App.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { baseurl } from '../Core';


function Contact() {

    const navigate = useNavigate()


    const [userdata, setUserdata] = useState({ name: "", email: "", phone: "", message: "" })


    const handleInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserdata({ ...userdata, [name]: value })
        //here name means tha name attribute in input tag

    }


    //api for getting data
    const contactPage = async () => {
        try {
            const res = await axios.get(`${baseurl}/api/v1/getData`, {
                withCredentials: "true"
            })

                .then((res) => {
                    setUserdata({ ...userdata, name: res.data.name, email: res.data.email, phone: res.data.phone })
                    //response contains many things but we need only data (in body)
                })
                .catch((err) => {
                    console.log(err)
                    navigate("/login")
                    //if token not found then redirect back to login page and about route is not allowed
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        contactPage()
        return () => {
            console.log("cleanup")
        }
    }, [])


    //api for sending data
    const contactForm = async (e) => {
        e.preventDefault()  //to prevent form from submitting otherwise the form will be submitted and data will be refreshed
        const { name, email, phone, message } = userdata

        const res = await axios.post(`${baseurl}/api/v1/contact`, {
            name, email, phone, message
        }, {
            withCredentials: "true"
        })

        if (!res) {
            console.log("message not sent");
        } else {
            console.log("message sent");
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-3 mx-auto">
                    <div className="box col-lg-10 offset-lg-1">
                        <div className="col-lg-3 rounded shadow-lg d-flex justify-content-around align-items-center">
                            <div>
                                <PhoneInTalkIcon color="primary" fontSize="large" />
                            </div>
                            <div>
                                <h6>Phone</h6>
                                <p>+925454545</p>
                            </div>
                        </div>
                        <div className="col-lg-3 rounded shadow-lg d-flex justify-content-around p-3 align-items-center">
                            <div>
                                <EmailIcon color="primary" fontSize="large" />
                            </div>
                            <div>
                                <h6>Email</h6>
                                <p>abc@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 rounded shadow-lg d-flex justify-content-around align-items-center">
                            <div>
                                <LocationOnIcon color="primary" fontSize="large" />
                            </div>
                            <div>
                                <h6>Address</h6>
                                <p>Karachi, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 rounded my-5 p-4 shadow-lg offset-lg-1">
                            <div className="contact_form_container py-05">
                                <h1 className="contact_form_title">Get in Touch</h1>
                                <form id="contact_form" method='POST' onSubmit={contactForm} className="">
                                    <div className="contact_form_fields d-flex align-items-center justify-content-between">
                                        <input type="text" id="contact_form_name" onChange={handleInputs} placeholder="Your Name" name="name" value={userdata.name} className="contact_form_name input_field" required />
                                        <input type="email" id="contact_form_email" onChange={handleInputs} placeholder="Your Email" name="email" value={userdata.email} className="contact_form_email input_field" required />
                                        <input type="number" id="contact_form_phone" onChange={handleInputs} placeholder="Your Number" name="phone" value={userdata.phone} className="contact_form_phone input_field" required />
                                    </div>
                                    <div className="row">
                                        <div className="my-4">
                                            <textarea id="" className="text_box w-100 mt-2" cols="40" rows="10" onChange={handleInputs} value={userdata.message} name="message" placeholder="your message"></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <Button type="submit" variant="contained" color="success">
                                            Send Message
                                        </Button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact