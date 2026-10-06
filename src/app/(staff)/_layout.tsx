import { Stack } from "expo-router";

export default function StaffLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name= "dashboard"/>
            <Stack.Screen name= "scanner"/>
            <Stack.Screen name= "scan-result" 
            options={{ presentation: 'modal' }}/>
            <Stack.Screen name= "check-ins"/>
        </Stack>
    );
}