import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';

type PostProps = {
  post: {
    id: string;
    username: string;
    profilePic: string;
    image: string;
    likes: number;
    description: string;
    date: string;
  };
};

export default function Post({ post }: PostProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.profilePic }} style={styles.profilePic} />
          <Text style={styles.username}>{post.username}</Text>
        </View>
        <Feather name="more-horizontal" size={20} />
      </View>

      <Image source={{ uri: post.image }} style={styles.postImage} />

      <View style={styles.actions}>
        <View style={styles.leftIcons}>
          <TouchableOpacity>
            <FontAwesome name="heart-o" size={24} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <FontAwesome name="bookmark-o" size={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.likes}>{post.likes} curtidas</Text>

      <Text style={styles.description}>
        <Text style={styles.username}>{post.username} </Text>
        {post.description}
      </Text>

      <Text style={styles.date}>{post.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10,
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  profilePic: { width: 35, height: 35, borderRadius: 50, marginRight: 10 },
  username: { fontWeight: 'bold' },
  postImage: { width: '100%', height: 400 },
  actions: {
    flexDirection: 'row', justifyContent: 'space-between', padding: 10,
  },
  leftIcons: { flexDirection: 'row' },
  icon: { marginRight: 15 },
  likes: { fontWeight: 'bold', paddingHorizontal: 10 },
  description: { paddingHorizontal: 10, marginTop: 2 },
  date: { paddingHorizontal: 10, color: 'gray', fontSize: 12, marginTop: 5 },
});
