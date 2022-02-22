import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function CreateComment({ route, navigation }) {

    const [content, changeContent] = useState('')
    const { post_id } = route.params

    const onSubmit = () => {
        let body = {
          content: content
        }
        fetch(`https://skuytestapp.herokuapp.com/api/comments/${post_id}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body)
        }).catch(err => console.error(err)).then(response => response.text()).then(data => console.log(data)).then(changeContent(''))
        alert('Submitted')
        navigation.goBack()
    }
    
    // https://stackoverflow.com/questions/33071950/how-would-i-grow-textinput-height-upon-text-wrapping
    return (
        <View>
            <Text>Create a Post</Text>
            <TextInput 
                style={styles.content}
                value={content}
                onChangeText={changeContent}
            />
            <Button 
                title="Submit"
                onPress={onSubmit}
            />
            <Button 
                title="Cancel"
                onPress={() => navigation.goBack()}
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
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });