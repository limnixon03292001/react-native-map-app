import { Image, StyleSheet, Platform, TextInput, Text, ScrollView, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MapView from 'react-native-maps';
import { useState } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import GOOGLE_MAP_KEY from '@/key';

export default function HomeScreen() {

  const [coords, setCoords] = useState({
    pickupCoords: {
      latitude: 14.6681,
      longitude: 120.9658,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },

    dropCoords: {
      latitude: 14.6096,
      longitude: 121.0796,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  });

  const { pickupCoords, dropCoords } = coords;

  return (
    <View style={styles.container}>
      <MapView  
        style={StyleSheet.absoluteFill}
        initialRegion={pickupCoords}
      >
        <MapViewDirections
          origin={pickupCoords}
          destination={dropCoords}
          apikey={GOOGLE_MAP_KEY}
          strokeWidth={3}
          strokeColor='hotpink'
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})