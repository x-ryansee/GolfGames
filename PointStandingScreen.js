import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const pointStandings = [
  { id: 1, name: 'Player 1', points: [10, 8, 12, 10] },
  { id: 2, name: 'Player 2', points: [9, 11, 9, 8] },
  { id: 3, name: 'Player 3', points: [12, 10, 8, 11] },
  // ...and so on
];

const PointStandingsScreen = () => {
  // Calculate total points for each player/team
  const standingsWithTotalPoints = pointStandings.map(player => ({
    ...player,
    totalPoints: player.points.reduce((total, points) => total + points, 0),
  }));

  // Sort players/teams by total points in descending order
  const sortedStandings = [...standingsWithTotalPoints].sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Point Standings</Text>
      <FlatList
        data={sortedStandings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.standingsItem, index === 0 && styles.leaderItem]}>
            <Text style={styles.playerName}>{item.name}</Text>
            <Text style={styles.totalPoints}>Total Points: {item.totalPoints}</Text>
            <Text style={styles.individualPoints}>Points: {item.points.join(', ')}</Text>
          </View>
        )}
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    paddingTop: 10,
    width: '100%',
  },
  standingsItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  leaderItem: {
    backgroundColor: '#ffd700', // Highlight leading player/team
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  totalPoints: {
    fontSize: 14,
    color: '#555',
  },
  individualPoints: {
    fontSize: 14,
    color: '#888',
  },
});

export default PointStandingsScreen;
