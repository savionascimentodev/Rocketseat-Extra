import { Pressable, Image, Text } from "react-native"
import { styles } from "./styles"

export default function Ingredient() {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} />
      <Text>Maça</Text>
    </Pressable>
  )
}
