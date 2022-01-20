import React from "react";

import PostComponent from "../../components/Post/PostComponent";
import Sidebar from "../../components/Post/Sidebar";
const Post = () => {
    
    return (
        <div className="w-screen min-h-screen bg-[#fafafa] flex flex-col">
            {/* <Sidebar /> */}
            <div className="h-[110px]"></div>
            <div className="flex flex-col w-full items-center">
                <PostComponent></PostComponent>
            </div>
        </div>
    );
};

export default Post;
