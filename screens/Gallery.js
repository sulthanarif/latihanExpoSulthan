import { View, Text } from 'react-native'
import React from 'react'

export default function Gallery() {
  return (
    <View>
      <Text>Gallery</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}