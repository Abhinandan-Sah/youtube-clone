import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = (()=>{
    return (
        <div className="w-10/12 p-4">
            <ButtonList />
            <VideoContainer />
        </div>
    );
});

export default MainContainer;