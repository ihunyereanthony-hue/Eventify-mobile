import React from 'react';
import { mystyles } from '../../../Styles/main';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function TicketQrScreen() {
  const router = useRouter();
  const { fullName, ticketType } = useLocalSearchParams<{ fullName?: string; ticketType?: string }>();

  return (
    <SafeAreaView style={mystyles.container}>
      <View style={mystyles.ticketCard}>
        <View style={mystyles.cardHeader}>
          <Text style={mystyles.eventTitle}>Tech & Creators Summit 2026</Text>
          <Text style={mystyles.badge}>{ticketType || 'VIP'}</Text>
        </View>

        <View style={mystyles.qrBox}>
          {/* Mock QR Placeholder */}
          <View style={mystyles.qrGraphic} />
          <Text style={mystyles.codeText}>TICKET CODE: EVT-4582</Text>
        </View>

        <View style={mystyles.detailsRow}>
          <Text style={mystyles.detailText}>Attendee: <Text style={mystyles.bold}>{fullName || 'John Doe'}</Text></Text>
          <Text style={mystyles.detailText}>Status: <Text style={{ color: '#228B22' }}>Valid</Text></Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => router.push('/(public)/verify-ticket')} style={mystyles.verifyLink}>
        <Text style={mystyles.linkText}>Have a code? Verify Pass</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}