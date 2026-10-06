import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles } from '../../../Styles/main';

export default function VerifyEmailScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(false);

  const handleVerify = () => {
    const fullCode = code.join('');
    if (fullCode !== '123456') {
      setError(true);
    } else {
      setError(false);
      router.replace('/(staff)/dashboard');
    }
  };

  return (
    <SafeAreaView style={mystyles.container}>
      <View style={mystyles.content}>
        <Text style={mystyles.title}>Verify your email</Text>
        <Text style={mystyles.subtitle}>Enter the 6-digit code sent to {email || 'your email'}</Text>

        <View style={mystyles.otpContainer}>
          {code.map((digit, idx) => (
            <TextInput
              key={idx}
              style={[mystyles.otpBox, error && mystyles.otpBoxError]}
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              onChangeText={(val) => {
                const newCode = [...code];
                newCode[idx] = val;
                setCode(newCode);
                if (error) setError(false);
              }}
            />
          ))}
        </View>

        {error && <Text style={mystyles.errorText}>Incorrect code. Try again</Text>}

        <TouchableOpacity style={mystyles.resendBtn}>
          <Text style={mystyles.resendText}>Resend code</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 24 }}>
          <Button color="#B5651D" title="Verify" onPress={handleVerify} />
        </View>
      </View>
    </SafeAreaView>
  );
}