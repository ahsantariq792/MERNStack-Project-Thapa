import React, { useState } from 'react'
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { baseurl } from '../Core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function About() {
    const [value, setValue] = React.useState('1');
    const [user, setUser] = useState()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate()

    const aboutPage = async () => {
        try {
            const res = await axios.get(`${baseurl}/api/v1/getData`, {
                withCredentials: "true"
            })

                .then((res) => {
                    // const data = await res.json();
                    console.log(res)
                    setUser(res.data) //response contains many things but we need only data (in body)

                })
                .catch((err) => {
                    console.log(err)
                    navigate("/login") //if token not found then redirect back to login page and about route is not allowed
                })
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        aboutPage()
        return () => {
            console.log("cleanup")
        }
    }, [])


    return (
        <>

            <div className="container">

                <form action="" method="GET">
                    <div className=" row mt-2 ">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCpSMSdUIC3Vrn8C89ZexVZkHaiIY0z3ZzQ&usqp=CAU" width="200px" height="200px" alt="" />
                            </div>
                            <div className="row">
                                <div className="mt-4">
                                    <div className="profile-work">
                                        <p>Work Link</p>
                                        <a href="www.google.com" target="_blank">You Tube</a> <br />
                                        <a href="www.google.com" target="_blank">You Tube</a> <br />
                                        <a href="www.google.com" target="_blank">You Tube</a> <br />
                                        <a href="www.google.com" target="_blank">You Tube</a> <br />
                                        <a href="www.google.com" target="_blank">You Tube</a> <br />
                                        <a href="www.google.com" target="_blank">You Tube</a> <br />
                                        <a href="www.google.com" target="_blank">You Tube</a> <br />
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="profile_head">
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h5>{user?.name}</h5>
                                        <h6>Freelancer</h6>
                                        <p>RANKINGS <span>1/10:</span></p>
                                    </div>
                                    <div>
                                        <div className="col-md-2">
                                            <Button type="submit" variant="contained" color="primary"><EditIcon />Profile</Button>
                                        </div>
                                    </div>
                                </div>

                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab label="About" value="1" />
                                                <Tab label="Timeline" value="2" />
                                            </TabList>
                                        </Box>

                                        <TabPanel value="1"><div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>User  ID</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label >
                                                        <p>{user?._id}</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label >
                                                        <p>{user?.email}</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label >
                                                        <p>{user?.phone}</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Profession</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Freelancer</p>

                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Domain</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Web Developer</p>
                                                </div>

                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Experience</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Fresher</p>
                                                </div>
                                            </div>
                                        </div>
                                        </TabPanel>

                                        <TabPanel value="2"><div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>abcd</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label >
                                                        <p>abcd</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>abcd</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label >
                                                        <p>abcd</p>
                                                    </label>
                                                </div>
                                            </div>


                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Section</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label >
                                                        <p>abcd</p>
                                                    </label>
                                                </div>
                                            </div>


                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Roll No</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label >
                                                        <p>1325241</p>
                                                    </label>
                                                </div>
                                            </div>


                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label >
                                                        <p>abcd</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label>Work</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label >
                                                        <p>abcd</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        </TabPanel>

                                    </TabContext>
                                </Box>
                            </div>
                        </div>



                    </div>



                </form>
            </div>




        </>
    )
}

export default About




