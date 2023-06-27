import { LeftSidebar } from "../../component/Sidebar/LeftSidebar";
import { Followbar } from "../../component/Followbar/Followbar";
import { Posts } from "./component/Posts";

import "./explore.mobile.layout.css";
import "./explore.desktop.layout.css";

export const Explore = () => {
  return (
    <div className="explore-container">
      <LeftSidebar />
      <Posts />
      <Followbar />
    </div>
  );
};
