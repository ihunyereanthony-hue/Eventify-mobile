import { useRouter } from 'expo-router';
import { Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles } from '../../../Styles/main';

export default function EventLandingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={mystyles.container}>
      <ScrollView contentContainerStyle={mystyles.content}>
        <View style={mystyles.heroBanner} />

        <View style={mystyles.detailsContainer}>
          <Text style={mystyles.eventTitle}>Tech & Creators Summit 2026</Text>
          <Text style={mystyles.meta}> Saturday, Oct 17th, 2026 • 8:00 AM</Text>
          <Text style={mystyles.meta}> Landmark Center, Lagos</Text>

          <View style={mystyles.divider} />

          <Text style={mystyles.sectionHeader}>About Event</Text>
          <Text style={mystyles.description}>
            Join over 2,000 tech professionals and creators for a day of practical insights, 
            keynotes, networking, and direct industry growth opportunities.
          </Text>

          <View style={{ marginTop: 32 }}>
            <Button color="#B5651D"
              title="Register for Ticket"
              onPress={() => router.push('/(public)/assign-ticket')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}