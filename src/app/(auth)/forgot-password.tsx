import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles } from '../../../Styles/main';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <SafeAreaView style={mystyles.container}>
      <View style={mystyles.content}>
        <TouchableOpacity onPress={() => router.back()} style={mystyles.backBtn}>
          <Text style={mystyles.backText}>‹ Back to Login</Text>
        </TouchableOpacity>

        <Text style={mystyles.title}>Reset Password</Text>
        <Text style={mystyles.subtitle}>
          {submitted 
            ? `We sent reset instructions to ${email}` 
            : 'Enter your registered email address to receive recovery instructions.'}
        </Text>

        {!submitted ? (
          <View style={mystyles.form}>
            <TextInput
              style={mystyles.input}
              placeholder="name@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <View style={{ marginTop: 16 }}>
              <Button color="#B5651D" title="Send Reset Link" onPress={() => setSubmitted(true)} />
            </View>
          </View>
        ) : (
          <View style={{ marginTop: 24 }}>
            <Button color="#B5651D" title="Return to Login" onPress={() => router.replace('/(auth)/login')} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}