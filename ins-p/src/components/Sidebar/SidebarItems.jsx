import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import Explore from "./Explore";
import Reels from "./Reels";
import Messages from "./Messages";


const SidebarItems = () => {
	
	return (
		<>
			<Home />
			<Search />
            <Explore />
            <Reels/>
            <Messages/>
			<Notifications />
			<CreatePost />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;