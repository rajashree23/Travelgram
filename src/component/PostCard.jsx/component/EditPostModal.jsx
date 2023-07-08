import { FaImage } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";
import { useState } from "react";

import { useDataContext } from "../../../context/data/DataContext";
import { editPost } from "../../../services/data/postService";
import { useAuthContext } from "../../../context/auth/AuthContext";
import { ACTION_TYPES } from "../../../utils/actionTypeConstants";
import { handleImageUpload } from "../../../utils/posts";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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

  const handleEditPost = async (e) => {
    e.stopPropagation();
    if (image) {
      if (postData.content) {
        const imageUploadResponse = await handleImageUpload(image);
        editPost(
          post._id,
          { ...postData, mediaUrl: imageUploadResponse.url },
          dispatch,
          token,
          toast
        );
        dispatch({
          type: ACTION_TYPES.SET_EDIT_POST_MODAL,
          payload: null,
        });
      } else {
        toast.warning("Can not post without any content!");
      }
    } else {
      editPost(post._id, postData, dispatch, token, toast);
      dispatch({
        type: ACTION_TYPES.SET_EDIT_POST_MODAL,
        payload: null,
      });
    }
  };
  return (
    <>
      <div className="modal-container">
        <div className="profile-pic-container">
          <LazyLoadImage
            src={authUser.profileAvatar}
            alt={authUser.username[0]}
            effect="blur"
          />
        </div>
        <div className="edit-content">
          <div className="post-input-container">
            <textarea
              value={postData.content}
              className="post-input"
              onChange={(e) => handleInputChange("content", e.target.value)}
            />

            {(image || postData.mediaUrl) && (
              <div className="edit-post-container">
                <LazyLoadImage
                  effect="blur"
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
              accept="image/*"
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
                  handleEditPost(e);
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
