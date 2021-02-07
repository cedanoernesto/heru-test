import React from 'react';
import { Text, View, Image } from 'react-native';
import { UserDetailsProps } from './interface';
import styles from './style';

const UserDetailsScreen = ({ route } : UserDetailsProps): $React$node => {
    const { item } = route.params;
    const { street, suite, city, zipcode } =  item.address;
    return (
    <View>
        <View style={styles.topContainer}>
            <Image source={require('../../../img/user.png')}/>
            <Text style={styles.name} >{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
        <View style={styles.addressContainer}>
            <Text style={styles.address}>{street} {suite} </Text>
            <Text style={styles.address}>{city} {zipcode}</Text>
        </View>
    </View>
    );
};
export default UserDetailsScreen;
