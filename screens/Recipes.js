import React from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import RecipeCard from '../components/RecipeCard';
import { RECIPES } from '../data/recipes';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Recipes({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <FlatList
        data={RECIPES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            id={item.id}
            item={item}
            image={item.image}
            title={item.title}
            category={item.category}
            onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}
          />
        )}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', 
  },
});
