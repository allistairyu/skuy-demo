import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, StatusBar, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import PostPreview from './PostPreview'
export default function ViewPosts({ navigation }) {
	const [posts, loadPosts] = useState([])
	const [refresh, triggerRefresh] = useState(0)

	//https://devtrium.com/posts/async-functions-useeffect
	// https://skuytestapp.herokuapp.com/api/posts
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`https://skuytestapp.herokuapp.com/api/posts`)
			const data = await response.json()
			return data
		}
		const result = fetchPosts().catch(console.error)
		result.then((data) => loadPosts(data))
	}, [refresh])

	return (
		<View>
			<Button 
				title="refresh"
				onPress={() => triggerRefresh(refresh + 1)}
			/>
			<FlatList
				data={posts}
				renderItem={({item}) => <PostPreview post={item} navigation={navigation} />}
			/>
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  paddingTop: StatusBar.currentHeight,
	  borderColor: 'red',
	  borderWidth: 5
	},
	scrollView: {
	  marginHorizontal: 30,
	  borderColor: 'red'
	},
	text: {
	  fontSize: 42,
	},
  });
  