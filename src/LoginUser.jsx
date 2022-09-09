import React, { useState } from "react";
import { FormGroup, Input, Button } from "reactstrap";
import * as yup from "yup";
import {  useFormik } from "formik";
import {  useSelector } from "react-redux";

import axios from "axios";
import { Alert } from "reactstrap";

const LoginUser = () => {
  const [navigate, setNavigate] = useState(false);
  const [message, setMessage] = useState(false);


  const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (...data) => {
      // dispatch(loginUser({ ...data }));

      await axios
        .post(`http://localhost:5000/users/login`, ...data)
        .then((res) => {
          // console.log(res.data.token);
          // axios.defaults.headers.common["Authorization"]=`Bearer ${res.data.token}`

          if (res.data.token !== undefined) {
            localStorage.setItem("userToken", res.data.token);
            setNavigate(true);

            return res;
          } else {
            setMessage(res.data.data);
          }
        });
      clearForm();
    },
  });
  const loginingUser = useSelector((state) => state.post.loginUser);

  const clearForm = () => {
    let inputs = document.querySelectorAll("Input");
    inputs.forEach((input) => {
      input.value = "";
    });
  };
  if (navigate) {
    // return (window.location.href = "http://localhost:3000/userPage/");
    return "Hello";
  }

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={formik.handleSubmit}
        name="login-form"
        noValidate
        autoComplete="off"
        className="w-50 "
      >
        <FormGroup>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="text-danger">
            {formik.errors.email ? formik.errors.email : null}
          </div>
        </FormGroup>
        <FormGroup>
          <Input
            value={formik.values.password}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
          />
          <div className="text-danger">
            {formik.errors.password ? formik.errors.password : null}
          </div>
        </FormGroup>

        <Button type="submit" block>
          Submit
        </Button>
        {message !== false ? (
          <Alert className="mt-3" color="danger">
            {message}
          </Alert>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default LoginUser;
