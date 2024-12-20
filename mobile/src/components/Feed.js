import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Purpose: Display the feed for mobile users
const Feed = ({ posts }) => {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Feed;
