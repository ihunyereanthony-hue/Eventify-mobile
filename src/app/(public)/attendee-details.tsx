import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles } from '../../../Styles/main';

export default function AttendeeDetailsScreen() {
  const router = useRouter();
  const { fullName, email, ticketType } = useLocalSearchParams<{
    fullName?: string;
    email?: string;
    ticketType?: string;
  }>();

  return (
    <SafeAreaView style={mystyles.container}>
      <ScrollView contentContainerStyle={mystyles.content}>
        <TouchableOpacity onPress={() => router.back()} style={mystyles.backBtn}>
          <Text style={mystyles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={mystyles.title}>Attendee Profile</Text>
        <Text style={mystyles.subtitle}>Pass summary & event check-in status</Text>

        <View style={mystyles.card}>
          <View style={mystyles.avatarCircle}>
            <Text style={mystyles.avatarText}>
              {(fullName || 'J').charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={mystyles.name}>{fullName || 'John Doe'}</Text>
          <Text style={mystyles.email}>{email || 'john@example.com'}</Text>

          <View style={mystyles.tierBadge}>
            <Text style={mystyles.tierText}>{ticketType || 'VIP Pass'}</Text>
          </View>

          <View style={mystyles.divider} />

          <View style={mystyles.infoRow}>
            <Text style={mystyles.label}>Event</Text>
            <Text style={mystyles.value}>Tech Summit 2026</Text>
          </View>
          <View style={mystyles.infoRow}>
            <Text style={mystyles.label}>Date</Text>
            <Text style={mystyles.value}>Oct 17, 2026</Text>
          </View>
          <View style={mystyles.infoRow}>
            <Text style={mystyles.label}>Pass ID</Text>
            <Text style={mystyles.value}>EVT-4582</Text>
          </View>
          <View style={mystyles.infoRow}>
            <Text style={mystyles.label}>Check-in Status</Text>
            <Text style={[mystyles.value, { color: '#00C853' }]}>Registered</Text>
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <Button color="#B5651D"
            title="View QR Code Pass"
            onPress={() =>
              router.push({
                pathname: '/ticket-qr',
                params: { fullName, email, ticketType },
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}