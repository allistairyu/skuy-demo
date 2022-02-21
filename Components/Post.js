import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Post({post}) {

    return (
        <View>
            <Text>id: {post.id}</Text>
            <Text>title: {post.title}</Text>
            <Text>content: {post.content}</Text>
            <Text>likes: {post.likes}</Text>
        </View>
    )
}