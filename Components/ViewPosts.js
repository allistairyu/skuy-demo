import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import Post from './Post'

export default function ViewPosts() {
	const [posts, loadPosts] = React.useState([])
	const [refresh, triggerRefresh] = React.useState(0)

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
		// result.then(loadPosts({
		// 	id: 2,
		// 	title: 'asdf',
		// 	content: 'contentasdf',
		// 	likes: 25
		// }))
	}, [refresh])

	return (
		// <View>
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollView}>
				<Text>View Posts</Text>
				{posts.map((p, index) => 
					<Post post={p} key={index}/>
				)}
				<Button 
					title="refresh"
					onPress={() => triggerRefresh(refresh + 1)}
				/>
			</ScrollView>
		</SafeAreaView>
		// </View>
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
  