import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles } from '../../../Styles/main';

const Logo = ({ width = 100, height = 32 }: { width?: number; height?: number }) => (
  <View
    style={{
      width,
      height,
      borderRadius: 12,
      backgroundColor: '#B5651D',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 18 }}>E</Text>
  </View>
);

export default function StaffSignUpScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    router.push({ pathname: '/(auth)/verify-email', params: { email } });
  };

  return (
    <SafeAreaView style={mystyles.container}>
      <ScrollView contentContainerStyle={mystyles.content}>
        <View style={mystyles.logoHeader}>
          <Logo width={100} height={32} />
          <Text style={mystyles.subtitle}>Eventify Staff</Text>
        </View>

        <View style={mystyles.form}>
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontWeight: '600', fontSize: 24, marginBottom: 4 }}>Full name</Text>
            </View>
          <TextInput
            placeholder="Enter full name"
            value={fullName}
            onChangeText={setFullName}
          />
           <View style={{ marginBottom: 16 }}>
              <Text style={{ fontWeight: '600', fontSize: 24, marginBottom: 4 }}>Email</Text>
            </View>
          <TextInput
            placeholder="Email (Email provider)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
           <View style={{ marginBottom: 16 }}>
              <Text style={{ fontWeight: '600', fontSize: 24, marginBottom: 4 }}>Password</Text>
            </View>
          <TextInput
            placeholder="Create password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
           <View style={{ marginBottom: 16 }}>
              <Text style={{ fontWeight: '600', fontSize: 24, marginBottom: 4 }}>Confirm Password</Text>
            </View>
          <TextInput
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <View style={{ marginTop: 12 }}>
            <Button color="#B5651D" title="Sign Up" onPress={handleSignUp} />
          </View>

          <TouchableOpacity style={mystyles.socialBtn}>
            <Text style={mystyles.socialText}>G Sign up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mystyles.socialBtn}>
            <Text style={mystyles.socialText}> Sign up with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/(auth)/login')} style={mystyles.loginLink}>
            <Text style={mystyles.linkText}>Already have an account? <Text style={mystyles.highlight}>Log in</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
