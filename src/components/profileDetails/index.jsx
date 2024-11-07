/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { FaPen } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import userBackground from '../../assets/images/background.jpg';
import profile from '../../assets/images/profile.png';
import { updateUserInfo, updateUserPicture } from '@/features/user/user.action';
import { toast } from 'react-toastify';
import { profileBaseUrl } from '@/http/config';
import Spinner from '../spinner/Spinner';
import { Formik, Form, Field } from 'formik';

const ProfileDetails = ({ isEditing, onEditToggle }) => {
  const dispatch = useDispatch();

  const { login, isSessionLoading } = useSelector((state) => state.auth);

  const {
    isUpdateUserSuccess,
    error,
    isUpdateUserFailed,
    isUpdateUserLoading,
    user: { message },
    isUpdateUserProfileSuccess,
    isUpdateUserProfileFailed,
  } = useSelector((state) => state.user);

  const toDisplay = `${profileBaseUrl}/${login?.userData?.displayImg}`;

  const [profileImage, setProfileImage] = useState(toDisplay);

  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
      const fd = new FormData();
      fd.append('file', file);
      dispatch(updateUserPicture(fd));
    }
  };

  useEffect(() => {
    if (isUpdateUserSuccess) {
      toast.success(message);
    }

    if (isUpdateUserLoading) {
      toast.info('Updating Details');
    }
    if (isUpdateUserFailed) {
      toast.error(error);
    }

    if (isUpdateUserProfileSuccess) {
      toast.success('Picture Updated');
    }
    if (isUpdateUserProfileFailed) {
      toast.error('Failed to update picture');
    }
  }, [
    isUpdateUserSuccess,
    isUpdateUserFailed,
    isUpdateUserLoading,
    error,
    message,
    isUpdateUserProfileSuccess,
    isUpdateUserProfileFailed,
  ]);

  if (isSessionLoading) {
    return <Spinner />;
  }

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
          alt="profile"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = profile;
          }}
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
          ref={fileInputRef}
        />
      </div>

      <Formik
        initialValues={{
          name: login?.userData?.fullName || 'Your Name',
          username: login?.userData?.username || '',
          email: login?.userData?.email || '',
        }}
        onSubmit={(values) => {
          dispatch(
            updateUserInfo({
              username: values.username,
              fullName: values.name,
            })
          );
          onEditToggle(); // Close editing mode after saving
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-4">
            <div className="mb-4">
              <label className="block mb-1">Full Name:</label>
              <Field
                type="text"
                name="name"
                disabled={!isEditing}
                className="input-field border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Username:</label>
              <Field
                type="text"
                name="username"
                disabled={!isEditing}
                className="input-field border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email:</label>
              <Field
                type="email"
                name="email"
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
                    disabled={isSubmitting}
                    className="bg-blue-500 text-gray-500 shadow-md py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  >
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileDetails;
