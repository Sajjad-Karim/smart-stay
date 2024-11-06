/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { FaPen } from 'react-icons/fa'; // Import pen icon
import { useSelector } from 'react-redux';
import userBackground from '../../assets/images/background.jpg';
import profile from '../../assets/images/profile.jpg';
const ProfileDetails = ({ isEditing, onEditToggle }) => {
  const { login } = useSelector((state) => state.auth);
  const [profileImage, setProfileImage] = useState(
    login?.userData?.displayImg || profile
  );
  const [formData, setFormData] = useState({
    name: login.userData.fullName || 'Your Name',
    username: login.userData.username,
    email: login.userData.email,
  });
  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated User Data:', {
      username: formData.username,
      name: formData.name,
    });
    onEditToggle(); // Close editing mode after saving
  };

  return (
    <div className="profile-details text-center p-4 rounded-lg">
      <div className="cover-image mb-4">
        <img
          src={userBackground}
          alt="Cover"
          className="w-full h-40 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="profile-image mb-4 relative">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="absolute top-[65px] left-[60px] bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition duration-300"
        >
          <FaPen className="text-blue-500" />
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          ref={fileInputRef} // Set the ref here
        />
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block mb-1">Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={!isEditing}
            className="input-field border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled={!isEditing}
            className="input-field border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="username"
            value={formData.email}
            disabled
            className="input-field border rounded p-2 w-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onEditToggle}
            className={`bg-blue-500 text-gray-500 border py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ${
              isEditing ? 'hidden' : 'block'
            }`}
          >
            Edit Details
          </button>
          {isEditing && (
            <>
              <button
                type="submit"
                className="bg-blue-500 text-gray-500 shadow-md py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={onEditToggle}
                className="ml-2 bg-gray-300 text-gray-500 py-2 px-4 rounded hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
