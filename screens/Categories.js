import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/categories';
import { RECIPES } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Categories({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRecipes = selectedCategory === 'All'
    ? RECIPES
    : RECIPES.filter(recipe => recipe.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory
            ]}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredRecipes}
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
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'center',
  },
  categoryButton: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    margin: 5,
  },
  selectedCategory: {
    backgroundColor: '#3498db',
  },
  categoryText: {
    color: '#000',
  },
});
