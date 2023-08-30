import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // You can replace this with actual tournament data
  const tournamentDays = [
    { date: 'September 22nd', location: 'Caledonia Golf' },
    { date: 'September 23rd', location: 'Willbrook Plantation' },
    { date: 'September 23rd', location: 'True Blue Golf Club' },
    { date: 'September 24th', location: 'Barefoot Dye' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Golf Tournament App</Text>
      <Text style={styles.subtitle}>Upcoming Tournament Days:</Text>
      {tournamentDays.map((tournament, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tournamentCard}
          onPress={() => navigation.navigate('TournamentDetails', { tournament })}
        >
          <Text style={styles.tournamentDate}>{tournament.date}</Text>
          <Text style={styles.tournamentLocation}>{tournament.location}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  tournamentCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '100%',
  },
  tournamentDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tournamentLocation: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomeScreen;
