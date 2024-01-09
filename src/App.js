import "./App.css";
import { useEffect, useState } from "react";
import { getAllData, savedata } from "./firebase/firebase/firebase";

function App() {
  const [data, setdata] = useState([]);

  const changdata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submitdata = () => {
    savedata(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="App">
      {/*  =========== */}
      <div className="contact-container">
        <div className="left-col">
          <img
            className="logo"
            src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"
          />
        </div>
        <div className="right-col">
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="slider round" />
            </label>
            <div className="description">Dark Mode</div>
          </div>
          <h1>Contact us</h1>
          <form id="contact-form" method="post">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="fname"
              onChange={changdata}
              placeholder="Your Full Name"
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changdata}
              placeholder="Your Email Address"
              required
            />
            {/*<a href="javascript:void(0)">*/}
            <button
              type="button"
              onClick={submitdata}
            >
              Send
            </button>
            {/*</a>*/}
          </form>
          <div id="error" />
          <div id="success-msg" />
        </div>
      </div>
    </div>
  );
}

export default App;
