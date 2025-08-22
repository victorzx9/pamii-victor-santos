import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const imageSize = screenWidth / numColumns;

const user = {
  username: 'victorzx',
  name: 'Victor Santos',
  bio: 'Jogador @palmeiras ✈️',
  profilePic: 'https://i.pravatar.cc/150?img=12',
  posts: 6,
  followers: 1200,
  following: 180,
  photos: [
    'https://picsum.photos/id/1011/300/300',
    'https://picsum.photos/id/1012/300/300',
    'https://picsum.photos/id/1013/300/300',
    'https://picsum.photos/id/1015/300/300',
    'https://picsum.photos/id/1016/300/300',
    'https://picsum.photos/id/1018/300/300',
  ],
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header: Foto e Nome */}
      <View style={styles.header}>
        <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      {/* Contadores */}
      <View style={styles.countsContainer}>
        <View style={styles.countBox}>
          <Text style={styles.countNumber}>{user.posts}</Text>
          <Text style={styles.countLabel}>Posts</Text>
        </View>
        <View style={styles.countBox}>
          <Text style={styles.countNumber}>{user.followers}</Text>
          <Text style={styles.countLabel}>Seguidores</Text>
        </View>
        <View style={styles.countBox}>
          <Text style={styles.countNumber}>{user.following}</Text>
          <Text style={styles.countLabel}>Seguindo</Text>
        </View>
      </View>

      {/* Botão Editar Perfil */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Grid de Fotos */}
      <FlatList
        data={user.photos}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.photo} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold' },
  username: { color: 'gray', marginBottom: 5 },
  bio: { textAlign: 'center', paddingHorizontal: 30, color: '#444' },
  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  countBox: { alignItems: 'center' },
  countNumber: { fontWeight: 'bold', fontSize: 18 },
  countLabel: { color: 'gray' },
  editButton: {
    marginHorizontal: 40,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#3797EF',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
  },
  editButtonText: { color: '#3797EF', fontWeight: 'bold' },
  photo: {
    width: imageSize,
    height: imageSize,
    margin: 1,
  },
});
