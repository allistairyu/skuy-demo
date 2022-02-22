import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Post from './Components/Post';
import Feed from './Components/Feed'
import CreatePost from './Components/CreatePost';
import CreateComment from './Components/CreateComment'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
          name="Feed"
          component={Feed}
        />
        <Stack.Screen 
          name="Post"
          component={Post}
        />
        <Stack.Screen 
          name="Create Post"
          component={CreatePost}
        />
        <Stack.Screen 
          name="Create Comment"
          component={CreateComment}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 48
  },
});
