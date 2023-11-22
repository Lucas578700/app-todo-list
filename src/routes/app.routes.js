import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Task from '../pages/Task';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Task"
                component={Task}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;