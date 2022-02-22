import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function PostPreview({post, navigation }) {

    return (
        <View style={styles.feed}>
            <Text style={styles.title}>
                Community, User, Timestamp, etc.
            </Text>
            <View style={styles.postPreview}>
                <Text>post id: {post.id}</Text>
                <Button 
                    title={post.content} 
                    onPress={() => navigation.navigate('Post', {
                        post_id: post.id,
                        post_content: post.content
                    })}
                />
                <Text>
                    likes: {post.likes} 
                    , comments: {post.comments.length}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    feed: {
        borderColor: 'red',
        borderWidth: 1,
    },
	postPreview: {
	  paddingBottom: 30,
	  borderColor: 'red',
	},
	title: {
	  fontSize: 22,
	},
});
  