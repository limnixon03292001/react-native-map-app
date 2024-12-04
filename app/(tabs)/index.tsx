import {
  Image,
  StyleSheet,
  Platform,
  TextInput,
  Text,
  ScrollView,
  View,
  Button,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MapView from "react-native-maps";
import { useEffect, useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import GOOGLE_MAP_KEY from "@/key";
import ActionSheet, { ActionSheetRef, SheetProvider } from "react-native-actions-sheet";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";


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
    },
  });
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const { pickupCoords, dropCoords } = coords;

  useEffect(() => {
    actionSheetRef.current?.show();
  },[]);

  return (
    <SafeAreaProvider>
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
         <MapView style={StyleSheet.absoluteFill} initialRegion={pickupCoords}>
          <MapViewDirections
            origin={pickupCoords}
            destination={dropCoords}
            apikey={GOOGLE_MAP_KEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        </MapView>
        <SheetProvider context="global">
        <ActionSheet
        ref={actionSheetRef}
      isModal={false}
      backgroundInteractionEnabled
      snapPoints={[30, 100]}
      gestureEnabled
      closable={false}
      disableDragBeyondMinimumSnapPoint
      containerStyle={{
        borderWidth: 1,
        borderColor: '#f0f0f0',
        height: '100%',
      }}>
      <View
        style={{
          paddingHorizontal: 20,
          height: 400,
          paddingVertical: 20,
          gap: 10
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 40,
            fontWeight: 700,
          }}>
          Searching...
        </Text>
 
      </View>
    </ActionSheet>
          </SheetProvider>
    </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  container_inner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});
