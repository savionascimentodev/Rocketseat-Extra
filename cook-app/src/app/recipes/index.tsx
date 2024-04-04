import { View, Text, FlatList } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import {} from "react-native"
import { Recipe } from "@/components/Recipe"
// import { Ingredients } from "@/components/Ingredients"

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back}
        />
        <Text style={styles.title}>Ingredientes</Text>
      </View>

      {/* <Ingredients ingredients={[]} /> */}

      <FlatList
        data={["1"]}
        keyExtractor={item => item}
        renderItem={() => (
          <Recipe
            recipe={{
              name: "Omelete",
              image: "https://i.ytimg.com/vi/gY4YpCyxV4Q/sddefault.jpg",
              minutes: 10
            }}
          />
        )}
      />
    </View>
  )
}
