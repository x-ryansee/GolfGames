import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import TournamentDetailsScreen from './TournamentDetailsScreen';
import GroupTeamsScreen from './GroupsTeamsScreen';
import TournamentDayListScreen from './TournamentDayListScreen';
import PointStandingScreen from './PointStandingScreen';
import ScoreEntryScreen from './ScoreEntryScreen';
// ... any other imports ...

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TournamentDetails" component={TournamentDetailsScreen} />
        <Stack.Screen name="GroupTeams" component={GroupTeamsScreen} />
        <Stack.Screen name="TournamentDayList" component={TournamentDayListScreen} />
        <Stack.Screen name="PointStanding" component={PointStandingScreen} />
        <Stack.Screen name="ScoreEntry" component={ScoreEntryScreen} />
        {/* ... other screen components ... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
