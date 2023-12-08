import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
    
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const handlePause =() => {
    setIsActive(false);
  };

  return (
    <View>
      <Text>Timer: {seconds} seconds</Text>
      <Button title={isActive ? 'Pause' : 'Start'} onPress={isActive ? handlePause : (handleStart)} />
      <Button title='Stop' onPress={handleStop} />
    </View>
  )
}

const styles = StyleSheet.create({})