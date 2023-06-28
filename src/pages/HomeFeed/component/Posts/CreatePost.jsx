import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faImage } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

import "../../homefeed.mobile.layout.css";
import "../../homefeed.desktop.layout.css";
import { useAuthContext } from "../../../../context/auth/AuthContext";
import { useDataContext } from "../../../../context/data/DataContext";
import { savePost } from "../../../../services/data/postService";

export const CreatePost = () => {
  const { token, authUser } = useAuthContext();
  const { dispatch } = useDataContext();

  const [postData, setPostData] = useState({
    content: "",
    mediaUrl: "",
  });
  // const [media, setMedia] = useState(null);

  // const handleFileUpload = (e) => setMedia(e.target.files[0]);

  const handleInputText = (e) =>
    setPostData((PostDataValues) => ({
      ...PostDataValues,
      content: e.target.value,
    }));
  const handlePostSubmit = () => {
    if (postData.content) {
      savePost(postData, dispatch, token, toast);
      setPostData({ content: "", mediaUrl: "" });
    } else {
      toast.warning("Can not post without any content!");
    }
  };
  return (
    <div className="create-post-container">
      <div className="profile-pic-container">
        <img src={authUser.profileAvatar} alt={authUser.username[0]} />
      </div>
      <div className="post-input-container">
        <textarea
          value={postData.content}
          type="text"
          placeholder="Write something interesting..."
          className="post-input"
          onChange={handleInputText}
        />
        <div className="post-input-action-container">
          <div className="icons">
            <FontAwesomeIcon icon={faFaceSmile} />
            <label htmlFor="fileInput">
              <FontAwesomeIcon icon={faImage} className="icon" />
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/png, image/gif, image/jpeg"
              // onChange={handleFileUpload}
            />
          </div>
          <div>
            <button className="secondary-button" onClick={handlePostSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
