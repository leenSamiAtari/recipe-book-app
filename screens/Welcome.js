import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/welcome-food.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Recipe Book</Text>
        <Text style={styles.subtitle}>Delicious ideas, one tap away !</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('HomeTabs')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    width: '100%',
    opacity:0.3
  },
  overlay: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#ff6b6b',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

