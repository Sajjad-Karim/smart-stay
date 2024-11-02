import React from "react";

const UserPreferences = () => {
  return (
    <div className="user-preferences">
      <h2 className="text-2xl font-semibold mb-4">User Preferences</h2>
      <p className="text-lg">
        Preferred Accommodation Type:{" "}
        <span className="font-medium">Shared Room</span>
      </p>
      <p className="text-lg">
        Preferred Check-in Time: <span className="font-medium">Afternoon</span>
      </p>
      {/* Add more preferences as needed */}
    </div>
  );
};

export default UserPreferences;
