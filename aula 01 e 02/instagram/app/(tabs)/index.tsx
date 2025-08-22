import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginScreen from '@/src/screens/loginscreen';
import FeedScreen from '@/src/screens/feedscreen';
import ProfileScreen from '@/src/screens/profilescreen';

type Tab = 'Login' | 'Feed' | 'Perfil';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Login');

  return (
    <View style={{ flex: 1 }}>
      {activeTab === 'Login' && <LoginScreen onLogin={() => setActiveTab('Feed')} />}
      {activeTab === 'Feed' && <FeedScreen />}
      {activeTab === 'Perfil' && <ProfileScreen />}

      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setActiveTab('Login')} style={styles.tabButton}>
          <Text style={[styles.tabText, activeTab === 'Login' && styles.activeTabText]}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('Feed')} style={styles.tabButton}>
          <Text style={[styles.tabText, activeTab === 'Feed' && styles.activeTabText]}>
            Feed
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('Perfil')} style={styles.tabButton}>
          <Text style={[styles.tabText, activeTab === 'Perfil' && styles.activeTabText]}>
            Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  activeTabText: {
    color: '#3797EF',
    fontWeight: 'bold',
  },
});
