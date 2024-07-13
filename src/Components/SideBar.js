const SideBar = (()=>{
    return (
        <div className="shadow-lg p-5 w-2/12 h-screen fixed  overflow-y-auto">
            <div>
            <div className="border-gray-500 border-b-2 ">
                <ul className="mb-2">
                    <li className="mb-1">Home</li>
                    <li className="mb-1">Shorts</li>
                    <li className="mb-1">Subscription</li>
                </ul>
            </div>
            <div className="border-gray-500 border-b-2">
                <h1 className="text-lg font-bold">Explore</h1>
                <ul className="mb-2">
                    <li className="mb-1">Trending</li>
                    <li className="mb-1">Music</li>
                    <li className="mb-1">Gaming</li>
                    <li className="mb-1">Sport</li>
                </ul>
            </div>
            <div className="border-gray-500 border-b-2">
                <h1 className="text-lg font-bold">More from YouTube</h1>
                <ul className="mb-2">
                    <li className="mb-1">YouTube Premium</li>
                    <li className="mb-1">YouTube Studio</li>
                    <li className="mb-1">YouTube Music</li>
                    <li className="mb-1">YouTube Kids</li>
                </ul>
            </div>
            <div className="border-gray-500 border-b-2">
                <ul>
                    <li className="mb-1">Setting</li>
                    <li className="mb-1">Report history</li>
                    <li className="mb-1">Help</li>
                    <li className="mb-1">Send feedback</li>
                </ul>
            </div>
            </div>
            <div>
            About Press Copyright Contact us Creators Advertise Developers
Terms Privacy Policy & Safety How YouTube works Test new features<br/>
© 2024 Google LLC
            </div>
        </div>
    );
});

export default SideBar;