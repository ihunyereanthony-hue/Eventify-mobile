import { Stack } from "expo-router";

export default function publicLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name= "event-landing"/>
            <Stack.Screen name= "assign-ticket"/>
            <Stack.Screen name= "ticket-qr"/>
            <Stack.Screen name= "attendee-details"/>
            <Stack.Screen name= "verify-ticket"/>
        </Stack>
    );
}