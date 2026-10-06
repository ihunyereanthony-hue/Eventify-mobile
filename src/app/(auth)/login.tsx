import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles } from '../../../Styles/main';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace('/(staff)/dashboard');
  };

  return (
    <SafeAreaView style={mystyles.container}>
      <View style={mystyles.content}>
        <View style={mystyles.logoHeader}>
          <Text style={mystyles.title}>Eventify</Text>
          <Text style={mystyles.subtitle}>Staff Access Portal</Text>
        </View>

        <View style={mystyles.form}>
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: '600', fontSize: 24, marginBottom: 4 }}>Email</Text>
          </View>
          <TextInput
            placeholder="Enter staff email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontWeight: '600', fontSize: 24, marginBottom: 4 }}>Password</Text>
          </View>
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity 
            onPress={() => router.push('/(auth)/forgot-password')} 
            style={mystyles.forgotLink}
          >
            <Text style={mystyles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 16 }}>
            <Button color="#B5651D" title="Log In" onPress={handleLogin} />
          </View>

          <TouchableOpacity onPress={() => router.push('/(auth)/sign-up')} style={mystyles.signUpLink}>
            <Text style={mystyles.linkText}>
              Don't have an account? <Text style={mystyles.highlight}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
