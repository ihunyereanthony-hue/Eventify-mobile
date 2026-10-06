import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles } from '../../../Styles/main';

export default function AssignTicketScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedType, setSelectedType] = useState('VIP');

  const handleRegister = () => {
    router.push({
      pathname: '/(public)/ticket-qr',
      params: { fullName, email, ticketType: selectedType },
    });
  };

  return (
    <SafeAreaView style={mystyles.container}>
      <ScrollView contentContainerStyle={mystyles.content}>
        <Text style={mystyles.title}>Attendee Details</Text>
        <Text style={mystyles.subtitle}>Fill in your details to claim your pass.</Text>

        <View style={mystyles.form}>
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: '600', fontSize: 24, marginBottom: 4 }}>Full Name</Text>
            <TextInput
              placeholder="John Doe"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: '600', fontSize: 24, marginBottom: 4 }}>Email Address</Text>
            <TextInput
              placeholder="john@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <Text style={mystyles.label}>Select Ticket Tier</Text>
          <View style={mystyles.tierSelector}>
            {['Regular', 'VIP', 'VVIP'].map((type) => (
              <TouchableOpacity
                key={type}
                style={[mystyles.tierOption, selectedType === type && mystyles.activeTier]}
                onPress={() => setSelectedType(type)}
              >
                <Text style={[mystyles.tierText, selectedType === type && mystyles.activeTierText]}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ marginTop: 24 }}>
            <Button color="#B5651D" title="Generate Pass" onPress={handleRegister} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}