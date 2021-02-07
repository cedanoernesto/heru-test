import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Mapbox from "@react-native-mapbox-gl/maps";
import Clock from '../../components/Clock';
import styles from './style';
const HomeScreen = (): $React$Node => {
  const { MapView, UserLocation, Camera } = Mapbox;
  const [followUser, setFollowUser] = useState(false);
  const requestPermission = async () => {
    const permission = await Mapbox.requestAndroidLocationPermissions();
    if (permission) {
      setFollowUser(permission);
    }
  }
  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Clock/>
      </View>
      <View style={styles.mapContainer}>
        <MapView  styleURL={Mapbox.StyleURL.Street} style={styles.map} >
          <Camera followZoomLevel={14} followUserMode={Mapbox.UserTrackingModes.Follow} followUserLocation={followUser}/>
          <UserLocation animated={true}  />
        </MapView>
      </View>
    </View>
  );
  }
export default HomeScreen;