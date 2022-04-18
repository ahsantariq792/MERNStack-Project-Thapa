import "./App.css"
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import { GlobalContext } from './context/Context';
import { useContext, useEffect } from "react";
import axios from "axios";
import { baseurl } from "./Core";


function App() {

  let { state, dispatch } = useContext(GlobalContext);


  // useEffect(() => {

  //   axios.get(`${baseurl}/api/v1/getData`, {
  //     withCredentials: true
  //   })
  //     .then((res) => {
  //       console.log("res: ", res.data);
  //       if (res.data.email) {
  //         dispatch({
  //           type: "USER_LOGIN",
  //           payload: {
  //             name: res.data.name,
  //             email: res.data.email,
  //             _id: res.data._id
  //           }
  //         })
  //       } else {
  //         dispatch({ type: "USER_LOGOUT" })
  //       }
  //     }).catch((e) => {
  //       dispatch({ type: "USER_LOGOUT" })
  //     })

  //   return () => {
  //   };
  // }, []);


  return (
    <>
      {(state?.user?.email == null) ?
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<ErrorPage />} />  {/* //if page not found redirect to error page*/}
          </Routes>
        </>
        : null}

      {(state?.user?.email) ?
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />  {/* //if page not found redirect to error page*/}
          </Routes>
        </>
        : null}
    </>
  );
}

export default App;
