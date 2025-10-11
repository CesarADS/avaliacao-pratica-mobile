import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="fetch"
        options={{
          title: "Fetch",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="http" 
            size={size} 
            color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
