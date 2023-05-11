<<<<<<< HEAD
import React, { useState } from "react";

import Form from "../components/LoginForm";
import NavBar from "../components/NavBar";
import Links from "../components/Links";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    event.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      // mutateUser(
      //   await fetchJson("/api/login", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(body),
      //   })
      // );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <div>
      <NavBar
        background="bg-yellow-400"
        children={[
          <Links name="Home" dir="/" />,
          <Links name="About" dir="about" />,
          <Links name="Contact" dir="contact" />,
        ]}
      />
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center p-5 mt-20">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-full">
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-yellow-400 py-10 px-10">
              <img width="100%" height="auto" src="hero.png" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                <p>Enter your information to sign in</p>
              </div>
              <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
=======
import React, { useState } from "react";

import Form from "../components/LoginForm";
import NavBar from "../components/NavBar";
import Links from "../components/Links";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    event.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      // mutateUser(
      //   await fetchJson("/api/login", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(body),
      //   })
      // );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <div>
      <NavBar
        background="bg-yellow-400"
        children={[
          <Links name="Home" dir="/" />,
          <Links name="About" dir="about" />,
          <Links name="Contact" dir="contact" />,
        ]}
      />
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center p-5 mt-20">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-full">
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-yellow-400 py-10 px-10">
              <img width="100%" height="auto" src="hero.png" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                <p>Enter your information to sign in</p>
              </div>
              <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
>>>>>>> 67bf36377577b46be472058945021139905c4fa3
