import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

export default function NavBar() {
  return (
    <View styles={styles.container}>
      <Text>NavBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
      flexDirection: "row",
      paddingTop: 20,
	  paddingBottom: 20,
	  borderColor: 'red',
	  borderWidth: 5
	},
  });
  