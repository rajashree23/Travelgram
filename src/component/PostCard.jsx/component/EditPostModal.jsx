import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDataContext } from "../../../context/data/DataContext";
import { editPost } from "../../../services/data/postService";
import { useAuthContext } from "../../../context/auth/AuthContext";

export const EditPostModal = ({
  post,
  setShowEditPostModal,
  setShowPostMenu,
}) => {
  const [postData, setPostData] = useState({
    content: post.content,
    mediaUrl: post.mediaUrl,
  });
  const [image, setImage] = useState(post.mediaUrl);
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

            {image && (
              <div className="new-post-container">
                <img src={post.mediaUrl} alt="media" />
                <FontAwesomeIcon
                  icon={faXmarkCircle}
                  className="cross-icon"
                  onClick={() => {
                    setImage(null);
                    handleInputChange("mediaUrl", "");
                  }}
                />
              </div>
            )}
          </div>
          <div className="action-container">
            <FontAwesomeIcon icon={faImage} className="edit-post-media" />
            <div className="button-container">
              <button
                className="secondary-button"
                onClick={() => {
                  setShowEditPostModal(false);
                  setShowPostMenu(false);
                }}
              >
                Cancel
              </button>
              <button
                className="secondary-button"
                onClick={() => {
                  editPost(post._id, postData, dispatch, token, toast);
                  setShowEditPostModal(false);
                  setShowPostMenu(false);
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
