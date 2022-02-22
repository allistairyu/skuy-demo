import { View, Text, StyleSheet, StatusBar, Button } from 'react-native'
import React, { useState } from 'react'
import CreatePost from './CreatePost';
import ViewPosts from './ViewPosts';
import NavBar from './NavBar';
import { NavigationHelpersContext } from '@react-navigation/native';

export default function Feed({ navigation }) {

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        
        <Button 
          title="View Posts"
          onPress={() => choose(1)}
        />
        <Button 
          title="Create a Post"
          onPress={() => navigation.navigate('Create Post')}
        />
        {/* <View>
            <CreatePost />
            <Button title="Cancel" onPress={() => showCreatePost(false)} />
        </View> */}
        <ViewPosts navigation={navigation}/>
        <NavBar />
    </View>
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
  