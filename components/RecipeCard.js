import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { categoryColors } from '../data/categoryColors';
import { Ionicons } from '@expo/vector-icons';
import { FavoritesContext } from '../context/FavoritesContext';

export default function RecipeCard({ image, title, onPress, category, id, item }) {
   const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={[styles.categoryBadge, { backgroundColor: categoryColors[category] || '#ccc' }]}>
        <Ionicons name="restaurant" size={14} color="white" style={styles.icon} />
        <Text style={styles.badgeText}>{category}</Text>
      </View>

       <TouchableOpacity onPress={() => toggleFavorite(item)} style={styles.heart}>
        <Ionicons
          name={isFavorite(id) ? 'heart' : 'heart-outline'}
          size={22}
          color={isFavorite(id) ? 'red' : '#666'}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.detailsBtn}>View Details →</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: 180,
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#3498db',
    zIndex: 2,
  },
  icon: {
    marginRight: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    color: '#333',
  },
  detailsBtn: {
    color: '#3498db',
    fontWeight: '600',
    fontSize: 14,
  },
   heart: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 10,
  },
});

