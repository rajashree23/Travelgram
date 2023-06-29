import { LeftSidebar } from "../../component/Sidebar/LeftSidebar";
import { Posts } from "./component/Posts/Posts";
import { Followbar } from "../../component/Followbar/Followbar";

import "./homefeed.mobile.layout.css";
import "./homefeed.desktop.layout.css";

export const HomeFeed = () => {
  return (
    <div className="homefeed-container">
      <LeftSidebar />
      <Posts />
      <Followbar />
    </div>
  );
};
