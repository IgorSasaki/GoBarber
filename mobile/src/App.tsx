// Bibliotecas externas
import React from "react";
import "react-native-gesture-handler";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Hooks
import AppProvider from "./hooks";

// Componentes
import AuthRoutes from "./routes";

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={{ backgroundColor: "#312e38", flex: 1 }}>
          <AuthRoutes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default src;
