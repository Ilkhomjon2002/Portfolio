import { sidebar } from "../../../utilits/sidebar";
import SidePic from "./SidePics";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__menu">Menu</div>

			{sidebar.map((item) => {
				return <SidePic info={item} />;
			})}
		</div>
	);
};

export default Sidebar;
