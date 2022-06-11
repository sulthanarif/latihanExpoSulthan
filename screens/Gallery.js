import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Text>Gallery</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});