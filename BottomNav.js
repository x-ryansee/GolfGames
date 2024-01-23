import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-vector-icons/Ionicons';

// Import your screens here
import HomeScreen from './HomeScreen'; // Update with your actual HomeScreen path
import ProfileScreen from './ProfileScreen'; // Update with your actual ProfileScreen path
import PlayersScreen from './PlayersScreen'; // Update with your actual PlayersScreen path
import MatchupScreen from './MatchupScreen'; // Update with your actual MatchupScreen path

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Players') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Matchup') {
            iconName = focused ? 'golf' : 'golf-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Players" component={PlayersScreen} />
      <Tab.Screen name="Matchup" component={MatchupScreen} />
    </Tab.Navigator>
  );
};

export default BottomNav;
