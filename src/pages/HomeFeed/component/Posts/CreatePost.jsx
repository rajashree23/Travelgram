import { useState } from "react";
import { FaImage } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";

import { useAuthContext } from "../../../../context/auth/AuthContext";
import { useDataContext } from "../../../../context/data/DataContext";
import { savePost } from "../../../../services/data/postService";
import { handleImageUpload } from "../../../../utils/posts";

import "../../homefeed.mobile.layout.css";
import "../../homefeed.desktop.layout.css";

export const CreatePost = () => {
  const { token, authUser } = useAuthContext();
  const { dispatch } = useDataContext();

  const [postData, setPostData] = useState({
    content: "",
    mediaUrl: "",
  });
  const [image, setImage] = useState(null);

  const handleInputText = (e) => {
    setPostData((PostDataValues) => ({
      ...PostDataValues,
      content: e.target.value,
    }));
  };

  const handlePostSubmit = async () => {
    if (image) {
      if (postData.content) {
        const imageUploadResponse = await handleImageUpload(image);
        savePost(
          { ...postData, mediaUrl: imageUploadResponse.url },
          dispatch,
          token,
          toast
        );
        setPostData({ content: "", mediaUrl: "" });
        setImage(null);
      } else {
        toast.warning("Can not post without any content!");
      }
    } else {
      savePost(postData, dispatch, token, toast);
      setPostData({ content: "", mediaUrl: "" });
    }
  };
  
  return (
    <div className="create-post-container">
      <div className="profile-pic-container">
        {authUser.profileAvatar ? (
          <img src={authUser.profileAvatar} alt={authUser.username} />
        ) : (
          <p className="default-user-profile">
            {authUser.username[0].toUpperCase()}
          </p>
        )}
      </div>
      <div className="post-input-container">
        <textarea
          value={postData.content}
          type="text"
          placeholder="Write something interesting..."
          className="post-input"
          onChange={handleInputText}
        />
        {image && (
          <div className="new-post-container">
            <img src={URL.createObjectURL(image)} alt="post" />
            <MdCancel
              className="cross-icon"
              onClick={() => setImage(null)}
            />
          </div>
        )}
        <div className="post-input-action-container">
          <div className="icons">
            {/* <FontAwesomeIcon icon={faFaceSmile} className="icon" /> */}

            <label htmlFor="fileInput">
              <FaImage className="icon" />
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/png, image/gif, image/jpeg"
              onChange={(e) => setImage(e.target.files[0])}
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
