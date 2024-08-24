import React from 'react';
import PageLayout from '../../Layouts/PageLayout/PageLayout';
// import HomePage from '../../pages/HomePage/HomePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
function ProfilePageMain() {
    return(
        <>
            <PageLayout>
               <ProfilePage/>
            </PageLayout>
        </>
    )
}

export default ProfilePageMain;