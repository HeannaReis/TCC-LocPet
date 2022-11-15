import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Adocao() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flez: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})
