import React from 'react';
import { View, Text } from 'react-native';

// Purpose: Display user profile information
const Profile = ({ user }) => {
  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

export default Profile;
