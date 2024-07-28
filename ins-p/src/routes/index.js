import React from 'react';
import PrivateRoutes from '../components_1/privateRoutes';
import AuthPageMain from '../pages_main/AuthPage/authPage';
import HomePageMain from '../pages_main/HomePage/homePage';
import LogOut from '../components/AuthForm/Logout';




export const routes = [
    {
        path: '/',
        children: [
            {
                path: '/',
                element : <AuthPageMain/>
               
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
                    }
                ]
            }
        ]
    }
];
