import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Slot />
    </View>
  );
}
