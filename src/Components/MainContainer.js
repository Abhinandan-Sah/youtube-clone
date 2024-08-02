import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = (()=>{
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    return (
        <div className={`p-4 ${isMenuOpen? 'w-10/12 ml-auto': 'w-12/12'}  `}>
            <ButtonList />
            <VideoContainer />
        </div>
    );
});

export default MainContainer;