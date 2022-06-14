import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-white dark:bg-black">
        <Text className="px-6 text-center text-black dark:text-white">
          Hi, Tailwindcss RN 👋🏻 ! Attempting dark mode via system settings...Not
          working yet...
        </Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
