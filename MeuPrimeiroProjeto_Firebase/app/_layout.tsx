import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => (
          <Text
            style={{
              fontSize: 32, // Aumentado ainda mais o tamanho do texto
              fontWeight: "bold",
              textAlign: "center",
              background: "linear-gradient(90deg, #00FF00, #0000FF)", // Gradiente verde e azul
              WebkitBackgroundClip: "text", // Faz o gradiente aplicar ao texto
              color: "transparent", // Torna o fundo do texto transparente
            }}
          >
            Firebase Database
          </Text>
        ),
        headerTitleAlign: "center", // Centraliza o título
        headerStyle: {
          backgroundColor: "#000", // Define o fundo preto
          height: 70, // Ajusta a altura do cabeçalho para acomodar o texto maior
          borderBottomWidth: 2, // Define a espessura da linha
          borderBottomColor: "#fff", // Define a cor da linha (branca)
        },
      }}
    />
  );
}
