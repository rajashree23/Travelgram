import { LeftSidebar } from "../../component/Sidebar/LeftSidebar";
import { Posts } from "./component/Posts/Posts";

import "./homefeed.mobile.layout.css";
import "./homefeed.desktop.layout.css";
import { Followbar } from "../../component/Followbar/Followbar";

export const HomeFeed = () => {
  return (
    <div className="homefeed-container">
      <LeftSidebar />
      <Posts />
      <Followbar/>
    </div>
  );
};
