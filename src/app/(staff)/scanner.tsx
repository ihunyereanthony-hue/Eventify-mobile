import { Camera, CameraView } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mystyles, } from '../../../Styles/main';

export default function ScannerScreen() {
  const router = useRouter();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const scannerOverlayStyle = StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFill,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarcodeScanned = ({ data }: { data: string }) => {
    if (scanned) return;
    setScanned(true);

    let scanResult = 'confirmed';
    if (data.includes('DUP')) scanResult = 'duplicate';
    if (data.includes('BAD') || data.length < 4) scanResult = 'invalid';

    router.push({
      pathname: '/(staff)/scan-result',
      params: { ticketCode: data, result: scanResult },
    });
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView style={mystyles.centerContainer}>
        <Text style={mystyles.infoText}>Requesting camera permission...</Text>
      </SafeAreaView>
    );
  }

  if (hasPermission === false) {
    return (
      <SafeAreaView style={mystyles.centerContainer}>
        <Text style={mystyles.errorText}>No access to camera. Enable camera permissions in settings.</Text>
        <TouchableOpacity style={mystyles.retryBtn} onPress={() => router.back()}>
          <Text style={mystyles.retryText}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={mystyles.container}>
      <View style={mystyles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={mystyles.backText}>‹ Dashboard</Text>
        </TouchableOpacity>
        <Text style={mystyles.title}>Scan Ticket QR</Text>
      </View>

      <View style={mystyles.cameraWrapper}>
        <CameraView
          style={StyleSheet.absoluteFill}
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
        />
        
        <View style={mystyles.scannerOverlay}>
          <View style={mystyles.targetFrame} />
        </View>
      </View>

      <View style={mystyles.footer}>
        <Text style={mystyles.instructionText}>Center the ticket QR code inside the frame to scan.</Text>
      </View>
    </SafeAreaView>
  );
}
