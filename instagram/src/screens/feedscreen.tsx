import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Post from '@/components/post';

const posts = [
  {
    id: '1',
    username: 'PaulaSantos',
    profilePic: 'https://i.pravatar.cc/150?img=1',
    image: 'https://picsum.photos/500/500?random=1',
    likes: 120,
    description: 'Paz!',
    date: '2 dias atrás',
  },
  {
    id: '2',
    username: 'EduardoAntunes',
    profilePic: 'https://i.pravatar.cc/150?img=2',
    image: 'https://picsum.photos/500/500?random=2',
    likes: 89,
    description: 'Aquele rolê.',
    date: '3 dias atrás',
  },
];

export default function FeedScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
