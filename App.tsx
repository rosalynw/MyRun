import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Timer from './Features/Timer'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Timer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  }
})