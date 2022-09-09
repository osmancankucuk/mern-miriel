import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { addUser } from "./redux/actions/post";

const RegisterUser = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    //   .max(40, "Password must not exceed 40 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Confirm Password does not match"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (data) => {
      dispatch(addUser({ ...data }));
      clearForm();
    },
  });
  const clearForm = () => {
    let inputs = document.querySelectorAll("Input");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        name="user-form"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className="w-50 "
      >
        <FormGroup>
          <Input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <div className="text-danger">
            {formik.errors.name ? formik.errors.name : null}
          </div>
        </FormGroup>

        <FormGroup>
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />

          <div className="text-danger">
            {formik.errors.email ? formik.errors.email : null}
          </div>
        </FormGroup>
        <FormGroup>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="text-danger">
            {formik.errors.password ? formik.errors.password : null}
          </div>
        </FormGroup>
        <FormGroup>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <div className="text-danger">
            {formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null}
          </div>
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default RegisterUser;
