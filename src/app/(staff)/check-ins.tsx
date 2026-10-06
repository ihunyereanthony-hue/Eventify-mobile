import React from 'react';
import { mystyles } from '../../../Styles/main';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const mockLogs = [
  { id: '1', name: 'John Eze', code: 'EVT-4582', time: '10:54 AM', status: 'Confirmed' },
  { id: '2', name: 'Sarah Conner', code: 'EVT-9921', time: '10:50 AM', status: 'Confirmed' },
  { id: '3', name: 'David Mark', code: 'EVT-1102', time: '10:42 AM', status: 'Duplicate' },
];

export default function CheckInsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={mystyles.container}>
      <View style={mystyles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={mystyles.backText}>‹ Dashboard</Text>
        </TouchableOpacity>
        <Text style={mystyles.title}>Live Check-ins</Text>
      </View>

      <FlatList
        data={mockLogs}
        keyExtractor={(item) => item.id}
        contentContainerStyle={mystyles.list}
        renderItem={({ item }) => (
          <View style={mystyles.logCard}>
            <View>
              <Text style={mystyles.name}>{item.name}</Text>
              <Text style={mystyles.meta}>{item.code} • {item.time}</Text>
            </View>
            <Text style={[mystyles.status, { color: item.status === 'Confirmed' ? '#34A853' : '#FBBC05' }]}>
              {item.status}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}