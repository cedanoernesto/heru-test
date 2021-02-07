import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    justifyContent: 'flex-start',
    fontSize: 20,
  },
  email: {
    fontSize: 12,
  },
  img: {
    width: 36,
    height: 36,
    marginRight: 10
  }
})