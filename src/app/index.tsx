import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Button, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles } from '../../Styles/main';

function Logo({ width, height }: { width: number; height: number }) {
  return (
    <Text style={{ width, height, textAlign: 'center', textAlignVertical: 'center', fontSize: 36, fontWeight: 'bold', color: '#444' }}>
      Eventify
    </Text>
  );
}

const { width } = Dimensions.get('window');

const slides = [
  { id: '1', title: 'Seamless Event Access', desc: 'Scan tickets quickly with zero latency at entry points.' },
  { id: '2', title: 'Real-Time Verification', desc: 'Prevent duplicate entries and detect invalid passes instantly.' },
  { id: '3', title: 'Live Analytics', desc: 'Track attendee check-ins in real time directly from your phone.' },
];

const onboardingSlides = [
  {
    title: 'Discover Tech & Creator Events',
    subtitle: 'Access tickets, explore schedules, and connect with peers seamlessly.',
  },
  {
    title: 'Fast & Secure Ticket Verification',
    subtitle: 'Generate digital QR passes instantly or verify tickets at the venue gate.',
  },
];

export default function IndexScreen() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const splashOpacity = useRef(new Animated.Value(1)).current;
  const onboardingOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(splashOpacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(onboardingOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowSplash(false);
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={mystyles.container}>
      {showSplash ? (
        <Animated.View style={[mystyles.splashOverlay, { opacity: splashOpacity }]}>
          <View style={mystyles.splashContent}>
            <Image source={require('../../assets/images/splash-logo.png')}
            style={mystyles.splashLogo}
            resizeMode="contain"
            />
            <Text style={mystyles.splashTitle}>Eventify</Text>
            <Text style={mystyles.splashTagline}>Your Ticket, Your Access</Text>
          </View>
        </Animated.View>
      ) : null}

      <Animated.View style={[mystyles.onboardingContainer, { opacity: onboardingOpacity }]}>
        <View style={mystyles.slideContainer}>
          <Text style={mystyles.slideTitle}>{onboardingSlides[activeSlide].title}</Text>
          <Text style={mystyles.slideSubtitle}>{onboardingSlides[activeSlide].subtitle}</Text>


          <View style={mystyles.paginationDots}>
            {onboardingSlides.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  mystyles.dot,
                  activeSlide === index && mystyles.activeDot,
                ]}
                onPress={() => setActiveSlide(index)}
              />
            ))}
          </View>
        </View>

        <View style={mystyles.actionGroup}>
          <Button color="#B5651D" 
            title="Explore Events" 
            onPress={() => router.push('/(public)/event-landing')} 
          />

          <TouchableOpacity
            onPress={() => router.push('/(auth)/login')}
            style={{ marginTop: 12, padding: 10, borderWidth: 1, 
              borderColor: '#B5651D', borderRadius: 5, alignItems: 'center' }}
          >
            <Text>Staff Access Portal</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}