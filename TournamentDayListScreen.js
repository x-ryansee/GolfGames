import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const tournamentDays = [
  { id: 1, date: 'September 22nd', location: 'Caledonia Golf', gameFormat: '6,6,6 2 Man Best Ball' },
  { id: 2, date: 'September 23rd', location: 'Willbrook Plantation', gameFormat: '4 Man Scramble (Step Back)' },
  { id: 3, date: 'September 23rd', location: 'True Blue Golf Club', gameFormat: 'Cha Cha Cha' },
  { id: 4, date: 'September 24th', location: 'Barefoot Dye', gameFormat: '2 Man Best Ball' },
];

const TournamentDayListScreen = ({ navigation }) => {
  const renderTournamentDay = ({ item }) => (
    <TouchableOpacity
      style={styles.tournamentDayItem}
      onPress={() => navigation.navigate('TournamentDetails', { tournament: item })}
    >
      <Text style={styles.tournamentDayDate}>{item.date}</Text>
      <Text style={styles.tournamentDayLocation}>{item.location}</Text>
      <Text style={styles.tournamentDayGameFormat}>{item.gameFormat}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tournament Day List</Text>
      <FlatList
        data={tournamentDays}
        keyExtractor={item => item.id.toString()}
        renderItem={renderTournamentDay}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  tournamentDayItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  tournamentDayDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tournamentDayLocation: {
    fontSize: 14,
    color: '#888',
  },
  tournamentDayGameFormat: {
    fontSize: 14,
    color: '#333',
  },
});

export default TournamentDayListScreen;
