import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RecipeDetailsScreen({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={recipe.image} style={styles.image} />

      <View style={styles.contentCard}>
        <Text style={styles.title}>{recipe.title}</Text>

        <View style={styles.meta}>
          <Ionicons name="restaurant" size={16} color="#888" />
          <Text style={styles.metaText}>{recipe.category}</Text>

          <Ionicons name="time-outline" size={16} color="#888" style={{ marginLeft: 12 }} />
          <Text style={styles.metaText}>{recipe.prepTime}</Text>
        </View>

        <Text style={styles.sectionTitle}>📝 Ingredients</Text>
        {recipe.ingredients.map((item, index) => (
          <Text key={index} style={styles.bullet}>• {item}</Text>
        ))}

        <Text style={styles.sectionTitle}>👨‍🍳 Instructions</Text>
        <Text style={styles.instructions}>{recipe.instructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 240,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  contentCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 18,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  metaText: {
    marginLeft: 4,
    color: '#555',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
    color: '#34495e',
  },
  bullet: {
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 4,
    color: '#444',
  },
  instructions: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 6,
    color: '#555',
  },
});
