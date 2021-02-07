import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export default StyleSheet.create({
  topContainer: {
      paddingTop: 20,
      alignItems: 'center',
      backgroundColor: colors.primary,
      padding: 20,
      borderBottomLeftRadius: 100
  },
  name: {
      fontSize: 24,
      color: colors.secondary
  },
  email: {
      color: colors.secondary
  },
  address: {
      color: colors.secondary,
      fontSize: 14
  },
  addressContainer: {
      color: colors.secondary,
      padding: 10,
      alignItems: 'center',
  },
  mapContainer: {
      height: 300,
      width: '100%'
  },
});