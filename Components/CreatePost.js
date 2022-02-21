import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'
import uuid from 'react-native-uuid';

export default function CreatePost() {

  const [title, changeTitle] = React.useState('')
  const [content, changeContent] = React.useState('')

  const onSubmit = async () => {
    const post_id = uuid.v4()
    //fetch post stuff
    const post_response = await fetch(`https://skuytestapp.herokuapp.com/api/posts/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title, 
        content: content,
        comments: [],
        likes: 1,
        id: post_id,
        date_created: new Date()
        })
    });
    console.log(post_response)
    alert('Submitted')
  }

  return (
    <View>
      <Text>Create a Post</Text>
      <TextInput 
        onChangeText={changeTitle}
        style={styles.title}
        value={title}
      />
      <TextInput 
        style={styles.content}
        value={content}
        onChangeText={changeContent}
      />
      <Button 
        title="Submit"
        onPress={onSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  content: {
    height: 150,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});