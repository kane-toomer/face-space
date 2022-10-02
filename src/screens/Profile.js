import React from 'react';
import NavigationBar from '../navigation/navigation';

import UserCard from '../components/userCard.js';

const Profile = () => {

    return (
        <>
            {/* Header */}
            <NavigationBar />

            {/* User Card */}
            <UserCard />
        </>
    );
}

export default Profile;