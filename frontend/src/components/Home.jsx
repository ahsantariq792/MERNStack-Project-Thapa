import { React, useEffect, useState } from 'react'
import { baseurl } from '../Core'
import axios from 'axios'
import { textTransform } from '@mui/material/node_modules/@mui/system'

function Home() {

    const [username, setUserame] = useState()
    const [show, setShow] = useState()

    const homePage = async () => {
        try {
            const res = await axios.get(`${baseurl}/api/v1/getData`, {
                withCredentials: "true"
            })

                .then((res) => {
                    setUserame(res.data.name)
                    //response contains many things but we need only data (in body)
                    setShow(!show)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        homePage()
        return () => {
            console.log("cleanup")
        }
    }, [])

    return (
        <>
            <div className='homepage'>
                <div>
                    <h4 className='homepage_head'>WELCOME</h4>
                </div><div>
                    <h2 className='homepage_username'>{username}</h2>
                </div>
                <div>
                    <h4 className='homepage_text'>{show ? "HAPPY TO SEE YOU" : "We Are MERN Developers"}</h4>
                </div>
            </div>

        </>
    )
}

export default Home