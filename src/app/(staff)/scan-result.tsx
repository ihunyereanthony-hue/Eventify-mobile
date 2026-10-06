import React from 'react';
import { mystyles,} from '../../../Styles/main';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function ScanResultScreen() {
  const router = useRouter();
  const { ticketCode, result } = useLocalSearchParams<{ ticketCode?: string; result?: string }>();

  const isConfirmed = result === 'confirmed';
  const isDuplicate = result === 'duplicate';

  const badgeBg = isConfirmed ? mystyles.confirmedBg : isDuplicate ? mystyles.duplicateBg : mystyles.dangerBg;
  const headline = isConfirmed ? 'Pass Verified!' : isDuplicate ? 'Already Scanned' : 'Invalid Ticket';
  const iconSymbol = isConfirmed ? '✓' : '!';

  return (
    <SafeAreaView style={mystyles.container}>
      <View style={mystyles.card}>
        <View style={[mystyles.badgeIcon, { backgroundColor: isConfirmed ? '#4CAF50' : isDuplicate ? '#FBC02D' : '#F44336' }]}>
          <Text style={mystyles.iconSymbol}>{iconSymbol}</Text>
        </View>

        <Text style={mystyles.headline}>{headline}</Text>
        <Text style={mystyles.ticketCode}>Code: {ticketCode || 'EVT-0000'}</Text>

        <View style={mystyles.detailsBox}>
          <View style={mystyles.detailRow}>
            <Text style={mystyles.detailLabel}>Attendee Name</Text>
            <Text style={mystyles.detailValue}>Alex Johnson</Text>
          </View>
          <View style={mystyles.detailRow}>
            <Text style={mystyles.detailLabel}>Ticket Tier</Text>
            <Text style={mystyles.detailValue}>VIP Access</Text>
          </View>
          {isDuplicate && (
            <View style={[mystyles.detailRow, { borderTopWidth: 1, borderTopColor: '#FFE3E3', paddingTop: 8 }]}>
              <Text style={[mystyles.detailLabel, { color: mystyles.danger.color }]}>First Scanned</Text>
              <Text style={[mystyles.detailValue, { color: mystyles.danger.color }]}>10:14 AM by Gate 1</Text>
            </View>
          )}
        </View>

        <TouchableOpacity 
          style={mystyles.primaryButton} 
          onPress={() => router.replace('/(staff)/scanner')}
        >
          <Text style={mystyles.primaryButtonText}>Scan Next Pass</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={mystyles.secondaryButton} 
          onPress={() => router.replace('/(staff)/dashboard')}
        >
          <Text style={mystyles.secondaryButtonText}>Back to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}