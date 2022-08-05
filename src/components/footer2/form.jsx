import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "../../sass/form-style.scss";
const Login = () => {
	const Formik = useFormik({
		initialValues: {
			fullname: "",
			email: "",
			phone: "",
			message: "",
		},
		onSubmit: () => {},
		validationSchema: Yup.object({
			email: Yup.string().email().required("Valid email is required"),
			fullname: Yup.string().required("Name is required"),
			phone: Yup.string().required("Phone is required"),
			message: Yup.string().required("Message is required"),
		}),
	});
	console.log(Formik);

	return (
		<form className="ContactForm" onSubmit={Formik.handleSubmit}>
			<div className="InputContainer">
				<label className="Label" for="fullname">
					Full Name:
				</label>{" "}
				<input
					className="Input"
					id="fullname"
					name="fullname"
					type={"text"}
					value={Formik.values.fullname}
					placeholder="Enter full name"
					onChange={Formik.handleChange}
				></input>
				{Formik.errors.fullname && Formik.touched.fullname && (
					<div className="ErrorWindow">
						{Formik.errors.fullname}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</div>
				)}
			</div>
			<div className="InputContainer">
				<label className="Label" for="email">
					Email:
				</label>
				<input
					className="Input contact-input"
					id="email"
					name="email"
					type={"email"}
					value={Formik.values.email}
					placeholder="Enter email address"
					onChange={Formik.handleChange}
				></input>
				{Formik.errors.email && Formik.touched.email && (
					<div className="ErrorWindow">
						{Formik.errors.email}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</div>
				)}
			</div>
			<div className="InputContainer">
				<label className={"Label"} for="phone">
					Phone:
				</label>
				<input
					className="Input"
					id="phone"
					name="phone"
					type={"text"}
					value={Formik.values.phone}
					placeholder="Enter phone number"
					onChange={Formik.handleChange}
				></input>
				{Formik.errors.phone && Formik.touched.phone && (
					<div className="ErrorWindow">
						{Formik.errors.phone}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</div>
				)}
			</div>
			<div className="InputContainer">
				<label className="Label" for="message">
					Message:
				</label>
				<input
					className="Input"
					id="message"
					name="message"
					type={"message"}
					value={Formik.values.message}
					placeholder="Your Comment..."
					onChange={Formik.handleChange}
				></input>
				{Formik.errors.message && Formik.touched.message && (
					<div className="ErrorWindow">
						{Formik.errors.message}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</div>
				)}
			</div>
			<button className="Submit" type={"submit"}>
				Submit <span className="Arrow">→</span>
			</button>
		</form>
	);
};

export default Login;
