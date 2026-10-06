import React from 'react';
import { mystyles } from '../../../Styles/main';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const mockEvents = [
  { id: '1', name: 'Tech & Creators Summit 2026', date: 'Sat, Oct 17th, 2026 - 8:00 AM', location: 'Lagos, Nigeria', isLive: true },
  { id: '2', name: 'Product Design Summit 2026', date: 'Fri, Nov 20th, 2026 - 10:00 AM', location: 'Abuja, Nigeria', isLive: false },
];

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={mystyles.container}>
      <View style={mystyles.header}>
        <Text style={mystyles.logoText}>Eventify</Text>
        <Text style={mystyles.greeting}>Good Morning, Daniel 👋</Text>
        <Text style={mystyles.sectionTitle}>Select events</Text>
      </View>

      <FlatList
        data={mockEvents}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
        contentContainerStyle={mystyles.list}
        renderItem={({ item }) => (
          <View style={mystyles.eventCard}>
            <View style={mystyles.cardHeader}>
              <View style={mystyles.eventImagePlaceholder} />
              <View style={mystyles.cardDetails}>
                <View style={mystyles.titleRow}>
                  <Text style={mystyles.eventName}>{item.name}</Text>
                  {item.isLive && <View style={mystyles.liveBadge}><Text style={mystyles.liveText}>● LIVE</Text></View>}
                </View>
                <Text style={mystyles.eventMeta}>📅 {item.date}</Text>
                <Text style={mystyles.eventMeta}>📍 {item.location}</Text>
              </View>
            </View>

            <View style={mystyles.cardActions}>
              <TouchableOpacity 
                style={mystyles.scanBtn} 
                onPress={() => router.push({ pathname: '/(staff)/scanner', params: { eventId: item.id } })}
              >
                <Text style={mystyles.scanBtnText}>Scan</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={mystyles.checkInsBtn} 
                onPress={() => router.push({ pathname: '/(staff)/check-ins', params: { eventId: item.id } })}
              >
                <Text style={mystyles.checkInsBtnText}>Check-ins</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}