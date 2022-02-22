import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import CommentContainer from './CommentContainer';

export default function Post({ route, navigation }) {

    const [refresh, triggerRefresh] = useState(0)
    const [post, loadPost] = useState('')
    const { post_id } = route.params

    useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch(`https://skuytestapp.herokuapp.com/api/posts/${post_id}`)
			const data = await response.json()
			return data
		}
		const result = fetchPost().catch(console.error)
		result.then((data) => {console.log(data);loadPost(data)})
	}, [refresh])

    return (
            <View>
                <View style={styles.postBox}>
                    <Text style={styles.title}>Post {post_id}</Text>
                    <Text style={styles.content}>{post.content}</Text>
                </View>
                <Button 
                    title="refresh"
                    onPress={() => triggerRefresh(refresh + 1)}
                />
                <FlatList
                    data={post.comments}
                    renderItem={({item}) => 
                    // <Text style={styles.postBox}>{item.content}</Text>}
                    <CommentContainer
                        comment={item} 
                    />}
                />
                <Button 
                    title="Comment"
                    onPress={() => navigation.navigate('Create Comment', {post_id: post_id})}
                />
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