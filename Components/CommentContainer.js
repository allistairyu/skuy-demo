import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CommentContainer({ comment }) {
    return (
        <View style={styles.postBox}>
            <Text>{comment.content}</Text>
            <Text>id: {comment.id} time: {comment.date_created}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        marginTop: 15,
        marginLeft: 15,
    }, 
    content: {
        fontSize: 16,
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 20,
    },
    postBox: {
        borderColor: 'red',
        borderWidth: 1,
    }
})