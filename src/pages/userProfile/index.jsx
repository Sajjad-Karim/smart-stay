import React, { useState } from "react";
import ProfileDetails from "@/components/profileDetails";
import UserPreferences from "@/components/userPreferances";
import userBackground from "../../assets/images/background.jpg";
import profile from "../../assets/images/profile.jpg";
const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    coverImage: userBackground,
    profileImage: profile,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-6  ">
        <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>
        <div className="tabs flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("details")}
            className={`tab mx-2 py-2 px-4 rounded-lg transition-colors duration-300 ${
              activeTab === "details" && "bg-gray-200 text-gray-700"
            }`}
          >
            Profile Details
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={`tab mx-2 py-2 px-4 rounded-lg transition-colors duration-300 ${
              activeTab === "preferences" && "bg-gray-200 text-gray-700"
            }`}
          >
            User Preferences
          </button>
        </div>
        <div className="tab-content bg-white shadow-md rounded-lg p-4">
          {activeTab === "details" && (
            <ProfileDetails
              userData={userData}
              isEditing={isEditing}
              onEditToggle={handleEditToggle}
            />
          )}
          {activeTab === "preferences" && <UserPreferences />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
