import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
export default (): $React$Node => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const day = date.toLocaleString('es', { weekday: 'long' });
  const month = date.toLocaleString('es', { month: 'long' });
  const numberDate = date.getDate();
  const year = date.getFullYear();
    return (
        <View style={styles.clock}>
          <Text style={styles.ap}>{hours > 12 ? 'PM' : 'AM'}</Text>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.hours}>{`${hours - 12}:${`0${minutes}`.slice(-2)}`}</Text>
          <Text style={styles.date}>{numberDate} de {month} del {year}</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    clock: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      },
      ap: {
        position: 'absolute',
        fontSize: 150,
        opacity: 0.1,
        color: colors.secondary
      },
      hours: {
        fontSize: 60,
        color: colors.secondary
      },
      day: {
        fontSize: 35
      },
      date: {
        fontSize: 20
      }
});