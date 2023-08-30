import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TournamentDetailsScreen = ({ route, navigation }) => {
  const { tournament } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tournament Details</Text>
      <Text style={styles.detailsText}>Date: {tournament.date}</Text>
      <Text style={styles.detailsText}>Location: {tournament.location}</Text>
      <Text style={styles.detailsText}>Game Format: {tournament.gameFormat}</Text>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('GroupTeams', { tournament })}
      >
        <Text style={styles.optionButtonText}>View Groups/Teams</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('ScoreEntry', { tournament })}
      >
        <Text style={styles.optionButtonText}>Enter Scores</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('PointStanding', { tournament })}
      >
        <Text style={styles.optionButtonText}>View Point Standings</Text>
      </TouchableOpacity>
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
  detailsText: {
    fontSize: 16,
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  optionButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default TournamentDetailsScreen;
