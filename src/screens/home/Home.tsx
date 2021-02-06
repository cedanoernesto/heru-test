import React, { useEffect } from 'react';
import { Text, FlatList, View, StatusBar, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
const { GET_USERS_REQUESTED } = userActions;

const WelcomeScreen = ({
    user: { loading, users },
    getUsers,
    navigation
  }) => {
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Image style={styles.img} source={require('../../../img/user.png')}/>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    );
    useEffect(() => {
        getUsers();
      }, []);
      console.log(loading, users);
      return (
        <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      )
  }
const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch({ type: GET_USERS_REQUESTED }),
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
    marginRight: 20
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)