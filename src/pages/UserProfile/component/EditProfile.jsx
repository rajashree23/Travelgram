import { AiFillCamera } from "react-icons/ai";
import { toast } from "react-toastify";
import { useState } from "react";

import { useAuthContext } from "../../../context/auth/AuthContext";
import { handleImageUpload } from "../../../utils/posts";
import { DEFAULT_PROFILE_URLS } from "../../../utils/constants";
import { editUser } from "../../../services/auth/authService";

export const EditUserProfile = ({ user, setShowEditProfile }) => {
  const { token, dispatch } = useAuthContext();
  const [userDetail, setUserDetail] = useState(user);
  const [image, setImage] = useState(null);
  const handleInput = (type, value) =>
    setUserDetail((user) => ({ ...user, [type]: value }));
  const handleSubmit = async () => {
    if (image) {
      const imageUploadResponse = await handleImageUpload(image);
      editUser(
        { ...userDetail, profileAvatar: imageUploadResponse.url },
        dispatch,
        token,
        toast
      );
    } else {
      editUser(userDetail, dispatch, token, toast);
    }
    setShowEditProfile(false);
  };
  return (
    <>
      <div className="edit-profile-modal-container">
        <div className="profile-pic-container edit">
          <label htmlFor="fileInput">
            <img
              src={
                image ? URL.createObjectURL(image) : userDetail.profileAvatar
              }
              alt={userDetail.username[0]}
            />
            <AiFillCamera className="camera-icon" />
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*, video/mp4,video/x-m4v,video/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="default-container">
          {DEFAULT_PROFILE_URLS.map((url, index) => (
            <div
              key={index}
              className="profile-pic-container edit"
              onClick={() => handleInput("profileAvatar", url)}
            >
              <img src={url} alt={url[0]} loading="lazy"  />
            </div>
          ))}
        </div>
        <label className="edit-label">
          First Name:
          <input
            type="text"
            value={userDetail.firstName}
            onChange={(e) => handleInput("firstName", e.target.value)}
          />
        </label>

        <label className="edit-label">
          Last Name:
          <input
            type="text"
            value={userDetail.lastName}
            onChange={(e) => handleInput("lastName", e.target.value)}
          />
        </label>
        <label className="edit-label">
          Bio:
          <input
            type="text"
            value={userDetail.bio}
            onChange={(e) => handleInput("bio", e.target.value)}
          />
        </label>
        <label className="edit-label">
          Website:
          <input
            type="text"
            value={userDetail.website}
            onChange={(e) => handleInput("website", e.target.value)}
          />
        </label>

        <div className="button-container">
          <button className="secondary-button" onClick={handleSubmit}>
            Save
          </button>
          <button
            onClick={() => setShowEditProfile(false)}
            className="secondary-button"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="myoverlay" />
    </>
  );
};
