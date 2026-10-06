import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles } from '../../../Styles/main';

export default function VerifyTicketScreen() {
  const router = useRouter();
  const [ticketCode, setTicketCode] = useState('');
  const [verified, setVerified] = useState<boolean | null>(null);

  const handleVerify = () => {
    if (ticketCode.trim().length > 0) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  return (
    <SafeAreaView style={mystyles.container}>
      <View style={mystyles.content}>
        <TouchableOpacity onPress={() => router.back()} style={mystyles.backBtn}>
          <Text style={mystyles.backText}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={mystyles.title}>Verify Pass</Text>
        <Text style={mystyles.subtitle}>Enter the ticket reference code printed on your pass.</Text>

        <View style={mystyles.form}>
            <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: '600', fontSize: 24, marginBottom: 4 }}>Ticket Code</Text>
            </View>
          <TextInput
            placeholder="e.g. EVT-4582"
            value={ticketCode}
            onChangeText={setTicketCode}
            autoCapitalize="characters"
          />

          <View style={{ marginTop: 12 }}>
            <Button color="#B5651D" title="Check Ticket" onPress={handleVerify} />
          </View>
        </View>

        {verified !== null && (
          <View style={[mystyles.resultCard, { borderColor: verified ? '#4CAF50' : '#F44336' }]}>
            <Text style={[mystyles.resultTitle, { color: verified ? '#4CAF50' : '#F44336' }]}>
              {verified ? 'Valid Ticket Pass' : 'Invalid Code'}
            </Text>
            <Text style={mystyles.resultText}>
              {verified
                ? `Code ${ticketCode.toUpperCase()} is valid for Tech Summit 2026.`
                : 'Please check your code and try again.'}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}