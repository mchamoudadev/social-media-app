import { useContext } from "react";
import { UserContext } from "../App";

const Header = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<div>
				<span>Welcome {user}</span>
				<button onClick={() => setUser("")}>Logout</button>
			</div>
		</>
	);
};

export default Header;
