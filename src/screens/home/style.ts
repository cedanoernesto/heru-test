import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  map: {
    flex: 1
  },
  clockContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 10,
    borderBottomLeftRadius: 100
  },
  mapContainer: {
    height: '100%',
    width: '100%',
    padding: 10,
  },
});