import React, { Fragment, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CustomThemeProvider, useTheme } from "@/hooks/theme";
import { TouchableOpacity, View } from "react-native";
import "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
function LayoutContent() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <GestureHandlerRootView>
      <Fragment>
        <StatusBar style={theme === "dark" ? "light" : "dark"} />

        <Stack
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme === "dark" ? "#191919" : "#f2f2f2",
            },
            headerTintColor: theme === "dark" ? "#fff" : "#000",

            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Daily English Booster",
              // headerShadowVisible: false,
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      router.push("/settings");
                    }}
                    style={{ marginRight: 1 }}
                  >
                    <Ionicons
                      name="settings-outline"
                      size={24}
                      color={theme === "dark" ? "#fff" : "#000"}
                    />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />
          <Stack.Screen name="settings" options={{ title: "Settings" }} />

          {/* <Stack.Screen name="index" options={{ title: "Home" }} /> */}
          {/* <Stack.Screen name="settings" options={{ title: "Settings" }} /> */}
        </Stack>
      </Fragment>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CustomThemeProvider>
      <LayoutContent />
    </CustomThemeProvider>
  );
}
