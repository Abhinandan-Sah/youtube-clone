import { Head } from "./Head";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = ()=>{
    return (
        <div>
            <Head />
            <div className="flex h-full">
            <SideBar  />
            <Outlet />
            </div>
        </div>
    );
};

export default Body;