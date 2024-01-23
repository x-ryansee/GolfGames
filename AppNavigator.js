import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import TournamentDetailsScreen from './TournamentDetailsScreen';
import GroupTeamsScreen from './GroupsTeamsScreen';
import TournamentDayListScreen from './TournamentDayListScreen';
import PointStandingScreen from './PointStandingScreen';
import ScoreEntryScreen from './ScoreEntryScreen';
import BottomNav from './BottomNav';
// ... any other imports ...

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomNav">
        <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
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
