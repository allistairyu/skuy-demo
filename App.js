import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Audio } from 'expo-av';
import { setAudioModeAsync } from 'expo-av/build/Audio';
import CreatePost from './Components/CreatePost'
import ViewPosts from './Components/ViewPosts'
import NavBar from './Components/NavBar'

export default function App() {

  // const [sound, setSound] = useState();
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  // const [alarmTime, setAlarmTime] = useState(addMinutes(new Date(), 1/12).toLocaleTimeString());
  // const [createView, choose] = useState(0)
  const [createPost, showCreatePost] = useState(false)

  // function addMinutes(date, minutes) {
  //   return new Date(date.getTime() + minutes*60000);
  // }

  // async function playSound() {
  //   console.log('Loading Sound')
  //   const { sound } = await Audio.Sound.createAsync(
  //     require('./assets/asdf.mp3')
  //   )
  //   setSound(sound)

  //   console.log('Playing Sound')
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   let secTimer = setInterval( () => {
  //           setTime(new Date().toLocaleTimeString())
  //         },1000)
  //   return () => {
  //     clearInterval(secTimer)
  //     if (alarmTime === time) {
  //       console.log('Unloading sound');
  //       playSound()
  //       if (sound) sound.unloadAsync()
  //     }
  //   };
  //       }, [time])

  // const alarm = () => {
  //   Alert.alert(
  //     'Alarm Title',
  //     'WAKE UP',
  //     [
  //       {
  //         text: 'Snooze',
  //         onPress: () => true
  //       },
  //       {
  //         text: "Cancel",
  //         onPress: () => false
  //       }
  //     ]
  //   )
  // }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.baseText}>{time}</Text> */}
      <StatusBar style="auto" />
      
      <Button 
        title="View Posts"
        onPress={() => choose(1)}
      />
      <Button 
        title="Create a Post"
        onPress={() => showCreatePost(true)}
      />
      {createPost ?
        <View>
          <CreatePost />
          <Button title="Cancel" onPress={() => showCreatePost(false)} />
        </View>
        :
        <></>
      }
      <ViewPosts />
      {/* {!createView ?
        <CreatePost />
        :
        <ViewPosts />
      } */}
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
