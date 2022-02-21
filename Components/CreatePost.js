import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'
import uuid from 'react-native-uuid';

export default function CreatePost() {

  const [title, changeTitle] = React.useState('')
  const [content, changeContent] = React.useState('')

  const onSubmit = () => {
    // const post_id = uuid.v4()
    //fetch post stuff
    let body = {
      content: content
    }
    fetch(`https://skuytestapp.herokuapp.com/api/posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }).catch(err => console.error(err)).then(response => response.text()).then(data => console.log(data)).then(changeTitle('')).then(changeContent(''))
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