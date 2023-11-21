import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Task from '../pages/Task';
import CreateTask from '../pages/CreateTask';


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

        <AuthStack.Screen
                name="CreateTask"
                component={CreateTask}
                options={{
                    headerShown: false,
                }}
            />
            
        </AuthStack.Navigator>

                
    )
}

export default AuthRoutes;