import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import "../App.css"

function Contact() {
    const handleInputs = (e) => {
        console.log("Hi")

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
                                <form id="contact_form" className="">
                                    <div className="contact_form_fields d-flex align-items-center justify-content-between">
                                        <input type="text" id="contact_form_name" onChange={handleInputs} placeholder="Your Name" name="name" value="" className="contact_form_name input_field" required />
                                        <input type="email" id="contact_form_email" onChange={handleInputs} placeholder="Your Email" name="email" value="" className="contact_form_email input_field" required />
                                        <input type="number" id="contact_form_phone" onChange={handleInputs} placeholder="Your Number" name="phone" value="" className="contact_form_phone input_field" required />
                                    </div>
                                    <div className="row">
                                        <div className="my-4">
                                            <textarea id="" className="text_box w-100 mt-2" cols="40" rows="10" onChange={handleInputs} name="message" placeholder="your message"></textarea>
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