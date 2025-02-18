import "./global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./components/Main";
import { DbContextProvider } from "./contexts/DbContext";

export default function App() {
  return (
    <DbContextProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Main />
      </SafeAreaProvider>
    </DbContextProvider>
  );
}
