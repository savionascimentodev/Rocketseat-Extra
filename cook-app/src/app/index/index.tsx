import { View, Text, Image } from "react-native"
import { styles } from "./styles"
import { Ingredients } from "@/components/Ingredients"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha os produtos</Text>
      <Text style={styles.subtitle}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <Ingredients />
    </View>
  )
}
