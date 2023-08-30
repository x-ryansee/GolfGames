import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const numHoles = 18; // Number of holes in the round

const ScoreEntryScreen = ({ route }) => {
  const { tournament } = route.params;
  
  // Initialize state to hold scores for each player on each hole
  const [scores, setScores] = useState(
    Array.from({ length: numHoles }, () => Array(tournament.players ? tournament.players.length : 0).fill(''))
  );

  // Function to update the scores array
  const updateScore = (holeIndex, playerIndex, score) => {
    const updatedScores = [...scores];
    updatedScores[holeIndex][playerIndex] = score;
    setScores(updatedScores);
  };

  if (!tournament.players) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* The rest of your code */}
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
    holesContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    holeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    holeLabel: {
      width: 60,
      fontSize: 16,
    },
    scoreInput: {
      width: 40,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
      textAlign: 'center',
    },
    submitButton: {
      backgroundColor: '#007bff',
      borderRadius: 10,
      paddingVertical: 15,
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
    submitButtonText: {
      fontSize: 16,
      color: 'white',
    },
  });

  
export default ScoreEntryScreen;
