import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { Colors } from '../constants/Colors';

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync('userToken');
    await SecureStore.deleteItemAsync('userData');
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ 
        title: 'Home',
        headerRight: () => (
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        )
      }} />
      <Text style={styles.text}>Welcome to the AI Course Finder!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
  },
  logoutButton: {
    marginRight: 15,
  },
  logoutText: {
    color: Colors.light.primary,
    fontWeight: '600',
  }
});
