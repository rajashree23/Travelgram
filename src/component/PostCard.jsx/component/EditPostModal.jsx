import { FaImage } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";
import { useState } from "react";

import { useDataContext } from "../../../context/data/DataContext";
import { editPost } from "../../../services/data/postService";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { ACTION_TYPES } from "../../../utils/actionTypeConstants";

export const EditPostModal = ({ post }) => {
  const [postData, setPostData] = useState({
    content: post.content,
    mediaUrl: post.mediaUrl,
  });
  const [image, setImage] = useState(null);

  const { dispatch } = useDataContext();
  const { token, authUser } = useAuthContext();

  const handleInputChange = (type, value) =>
    setPostData((postDataVal) => ({ ...postDataVal, [type]: value }));

  return (
    <>
      <div className="modal-container">
        <div className="profile-pic-container">
          <img src={authUser.profileAvatar} alt={authUser.username[0]} />
        </div>
        <div className="edit-content">
          <div className="post-input-container">
            <textarea
              value={postData.content}
              className="post-input"
              onChange={(e) => handleInputChange("content", e.target.value)}
            />

            {(image || postData.mediaUrl) && (
              <div className="new-post-container">
                <img
                  src={image ? URL.createObjectURL(image) : postData.mediaUrl}
                  alt="media"
                />
                <MdCancel
                  className="cross-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImage(null);
                    handleInputChange("mediaUrl", "");
                  }}
                />
              </div>
            )}
          </div>
          <div className="action-container">
            <label htmlFor="editFileInput">
              <FaImage className="edit-post-media" />
            </label>
            <input
              type="file"
              id="editFileInput"
              accept="image/*, video/mp4,video/x-m4v,video/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <div className="button-container">
              <button
                className="secondary-button"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({
                    type: ACTION_TYPES.SET_EDIT_POST_MODAL,
                    payload: null,
                  });
                }}
              >
                Cancel
              </button>
              <button
                className="secondary-button"
                onClick={(e) => {
                  e.stopPropagation();
                  editPost(post._id, postData, dispatch, token, toast);
                  dispatch({
                    type: ACTION_TYPES.SET_EDIT_POST_MODAL,
                    payload: null,
                  });
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="myoverlay" />
    </>
  );
};
