import React from "react";
import ReactDOM from "react-dom";
import { Steps } from "antd";
import { useInView } from "react-intersection-observer";

function About() {
	const { ref, inView } = useInView();
	const { Step } = Steps;
	return (
		<div className={`${inView ? "visible" : "About"}`} id="About" ref={ref}>
			<h1 className="About__heading">About</h1>
			<div className="About__content">
				<div className="About__textWrapper">
					<h2>{inView ? "hello" : "hidden"},</h2>
					<h3>
						My name is Ilkhomjon. I am 20-years-old,young and passionate
						web-developer who is learning and trying hard to pursuade his
						dreams.
					</h3>
					<h3>
						Currently I am sophomore student of Gachon Universtiy, IT
						Department. Despite I major in Computer Engeneering, I chose and
						prefer Web-developing for my future career.
					</h3>
				</div>
				<div className="About__pic"></div>
			</div>
		</div>
	);
}

export { About };
