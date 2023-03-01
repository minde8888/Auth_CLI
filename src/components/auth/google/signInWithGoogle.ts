import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

GoogleSignin.configure({
    webClientId: '110886429969-b65i13imcqn7dlmmbcl97jmcqksbfjc0.apps.googleusercontent.com',
    offlineAccess: true
});

export async function signInWithGoogle() {
    try {
        // Pasirenkame "GoogleSignin" mygtuką
        await GoogleSignin.hasPlayServices();
        const { idToken } = await GoogleSignin.signIn();
        // Sukuriame kredencialus su gautu "idToken"
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken);
        // Prisijungiame su Firebase sukurtais kredencialais
        const { user } = await firebase.auth().signInWithCredential(googleCredential);
        // Gauname "access token"
        const accessToken = await user.getIdToken();
        console.log(accessToken);
    } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // Vartotojas nutraukė prisijungimo procesą
            console.log('Canceled');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // Prisijungimo procesas jau vyksta
            console.log('In progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // Play paslaugos neveikia šiame įrenginyje
            console.log('Play services not available');
        } else {
            // Nežinoma klaida
            console.log('Unknown error', error);
        }
    }
}
