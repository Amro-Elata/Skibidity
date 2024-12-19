import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getPosts } from '../utils/api';

function Feed({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await getPosts();
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <View>
      {posts.map(post => (
        <View key={post.id}>
          <Text>{post.content}</Text>
        </View>
      ))}
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

export default Feed;
