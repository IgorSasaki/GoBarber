// Bibliotecas externas
import React from "react";
import "react-native-gesture-handler";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Componentes
import AuthRoutes from "./routes";

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ backgroundColor: "#312e38", flex: 1 }}>
        <AuthRoutes />
      </View>
    </NavigationContainer>
  );
};

export default src;
