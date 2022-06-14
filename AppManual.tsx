// Change file app name to "App.tsx" to try manual color scheme

import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { TailwindProvider, useColorScheme } from "tailwindcss-react-native";
import { useColorScheme as useColorSchemeRN } from "react-native";
import { useEffect } from "react";

export default function App() {
  const colorSchemeRN = useColorSchemeRN();
  useEffect(() => {
    console.log("Apperance change at device level");
  }, [colorSchemeRN]);

  return (
    <TailwindProvider initialColorScheme={colorSchemeRN}>
      <MainApp deviceLevelCS={colorSchemeRN} />
    </TailwindProvider>
  );
}

function MainApp({ deviceLevelCS }: any) {
  const { colorScheme, setColorScheme } = useColorScheme();
  useEffect(() => {
    console.log("Apperance change at app level");
  }, [colorScheme]);

  return (
    <View className="items-center justify-center flex-1 bg-white dark:bg-black">
      <Text className="text-center text-black dark:text-white">
        Tailwindcss react native is working...Attempting dark mode...
      </Text>
      <Text className="py-6 text-black dark:text-white">
        {`The device color scheme is ${deviceLevelCS}`}
      </Text>
      <View className="text-black dark:text-white">
        <Button
          title={`The app color scheme is ${colorScheme}`}
          onPress={() =>
            setColorScheme(colorScheme === "light" ? "dark" : "light")
          }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
