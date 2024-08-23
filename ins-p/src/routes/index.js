import React from 'react';
import PrivateRoutes from '../components_1/privateRoutes';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePageMain from '../pages_main/HomePage/homePage';
import LogOut from '../components/AuthForm/Logout';
import ProfilePageMain from '../pages_main/ProfilePage/profilePage';




export const routes = [
    {
        path: '/',
        children: [
            {
                path: '/',
                element :   <AuthPage />
               
            },
            {
                element : <PrivateRoutes/>,
                children : [
                    {
                        path : '/home',
                       element : <HomePageMain/>
                    },
                    {
                        path: 'logout',
                        element : <LogOut/>
                    },
                    {
                        path : '/inforUser',
                        element : <ProfilePageMain/>
                    }
                ]
            }
        ]
    }
];
