import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Timer() {
  //Timer to log runs and intervals
  const [milliseconds, setMilliseconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  //Countdown clock before timer starts
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (isActive && countdown > 0) {
      interval = setInterval(() => {
        //countdown from 5 every second
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, countdown]);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (isActive && countdown === 0) {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, countdown]);


  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setMilliseconds(0);
    setCountdown(5);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const formatTime = (time: number) => {
    return ('0' + Math.floor(time / 60000)).slice(-2) + ':' +
           ('0' + Math.floor((time / 1000) % 60)).slice(-2) + ':' +
           ('0' + ((time / 100) % 10).toFixed(0)).slice(-2);
  };

  return (
    <View>
      
        <Text>Countdown: {countdown} seconds</Text>
  
        <Text>Timer: {formatTime(milliseconds)}</Text>
  
      <Button title={isActive ? 'Pause' : 'Start'} onPress={isActive ? handlePause : handleStart} />
      <Button title='Stop' onPress={handleStop} />
    </View>
  )
}

const styles = StyleSheet.create({})