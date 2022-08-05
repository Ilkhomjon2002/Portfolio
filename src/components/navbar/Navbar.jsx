import { ReactComponent as PicLogo } from "../../assets/apps.svg";

const Navbar = () => {
	return (
		<>
			{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave'><path fill="#f3f4f5" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,240C672,277,768,299,864,272C960,245,1056,171,1152,133.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}

			<h1 className="navbar__welcomeTxt">Welcome</h1>

			<div className="navbar__logo-box">
				<PicLogo className="navbar__logo icon" />
				{/* <img src={picLogo} alt="logo" className="navbar__logo"/> */}
				{/* <i class="fi fi-rr-apps"></i> */}
				<h2 className="navbar__logo-name">Makhsudov ILHKHOMJON</h2>
			</div>
		</>
	);
};

export default Navbar;
