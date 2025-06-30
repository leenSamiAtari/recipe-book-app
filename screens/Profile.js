import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext';
import RecipeCard from '../components/RecipeCard';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  const { favorites, clearFavorites } = useContext(FavoritesContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/profile.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Leen Atari</Text>
      <Text style={styles.email}>leen@example.com</Text>

      <View style={styles.favoritesSection}>
        <Text style={styles.sectionTitle}>- My Favorite Recipes</Text>

        {favorites.length > 0 && (
          <TouchableOpacity onPress={clearFavorites} style={styles.clearBtn}>
             <Ionicons name="trash-outline" size={16} color="white" />
            <Text style={styles.clearBtnText}>Clear All Favorites</Text>
          </TouchableOpacity>
        )}

        {favorites.length === 0 ? (
          <Text style={styles.emptyText}>No favorites yet.</Text>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <RecipeCard
                id={item.id}
                item={item}
                image={item.image}
                title={item.title}
                category={item.category}
                onPress={() =>
                  navigation.navigate('RecipeDetails', { recipe: item })
                }
              />
            )}
            scrollEnabled={false} 
          />
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 500,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  favoritesSection: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 4,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 10,
  },
  clearBtn: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: '#ff5e57',
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 50, 
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 2 },
  elevation: 3,
},
clearBtnText: {
  color: 'white',
  fontWeight: '600',
  fontSize: 13,
  marginLeft: 4, 
},
  emptyText: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
