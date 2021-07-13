// Bibliotecas Externas
import React from "react";
import { View, Button } from "react-native";

// Hooks
import { useAuth } from "../../hooks/auth";

// Estilização
// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
