import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Main() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text className="bg-slate-600 p-5 font-bold text-xl">
        Changes you make will automatically reload.
      </Text>
    </View>
  );
}
