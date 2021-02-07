import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, Image, Pressable, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { userActions } from '../../redux/actions';
import { colors } from '../../styles/colors';
import { WelcomeScreenProps } from './interface';
import styles from './style';
const { GET_USERS_REQUESTED } = userActions;
const WelcomeScreen = ({
  user: { loading, users },
  getAllUsers,
  navigation
}: WelcomeScreenProps): $React$Node => {
  const renderItem = ({ item }) => (
    <Pressable onPress={ () => navigation.push('userDetails', { item })} >
      <View style={styles.item}>
      <Image style={styles.img} source={require('../../../img/user.png')}/>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
    </Pressable>
  );
  useEffect(() => {
      getAllUsers();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size={100} color={colors.primary} /> :
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          refreshing={loading}
        />}
    </View>
  );
  }
const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch({ type: GET_USERS_REQUESTED }),
});
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)