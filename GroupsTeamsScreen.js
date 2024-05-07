import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GroupsTeamsScreen = ({ route }) => {
  const { tournament } = route.params;

  const groupsTeams = [
    { id: 1, name: 'Group 1', players: ['Player 1', 'Player 2', 'Player 3', 'Player 4'] },
    { id: 2, name: 'Group 2', players: ['Player 5', 'Player 6', 'Player 7', 'Player 8'] },
    { id: 3, name: 'Group 3', players: ['Player 9', 'Player 10', 'Player 11', 'Player 12'] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Groups/Teams for {tournament.date}</Text>
      {groupsTeams.map(group => (
        <View key={group.id} style={styles.groupContainer}>
          <Text style={styles.groupTitle}>{group.name}</Text>
          {group.players.map(player => (
            <Text key={player} style={styles.playerName}>{player}</Text>
          ))}
        </View>
      ))}
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
  groupContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '100%',
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  playerName: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default GroupsTeamsScreen;
