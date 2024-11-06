import { useState } from 'react';
import ProfileDetails from '@/components/profileDetails';
import UserPreferences from '@/components/userPreferances';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('details');

  const [userPreferences, setUserPreferences] = useState({
    location: ['New York', 'Paris'],
    budget: '120$',
    amenities: ['WiFi', 'Parking'],
    roomType: 'spread',
  });
  const handleSavePreferences = (updatedPreferences) => {
    setUserPreferences(updatedPreferences);
  };

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
            onClick={() => setActiveTab('details')}
            className={`tab mx-2 py-2 px-4 rounded-lg transition-colors duration-300 ${
              activeTab === 'details' && 'bg-gray-200 text-gray-700'
            }`}
          >
            Profile Details
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`tab mx-2 py-2 px-4 rounded-lg transition-colors duration-300 ${
              activeTab === 'preferences' && 'bg-gray-200 text-gray-700'
            }`}
          >
            User Preferences
          </button>
        </div>
        <div className="tab-content bg-white shadow-md rounded-lg p-4">
          {activeTab === 'details' && (
            <ProfileDetails
              isEditing={isEditing}
              onEditToggle={handleEditToggle}
            />
          )}
          {activeTab === 'preferences' && (
            <UserPreferences
              userPreferences={userPreferences}
              onSavePreferences={handleSavePreferences}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
