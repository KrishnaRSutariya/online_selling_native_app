/**
 * @format
 */

import 'react-native-reanimated';

import { AppRegistry } from 'react-native';
import { registerRootComponent } from 'expo';
import App from './src/App';
import { name as appName } from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// AppRegistry.registerComponent(appName, () => App);

registerRootComponent(() => {
    return (
        <GestureHandlerRootView>
            <App />
        </GestureHandlerRootView>
    )
});