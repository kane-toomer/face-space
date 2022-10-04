import React from 'react';
import NavigationBar from '../navigation/navigation';

import UserCard from '../components/userCard.js';
import Post from '../components/post.js';

const Profile = () => {

    return (
        <>
            {/* Main Content */}
            <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-6">
                {/* User Card */}
                <UserCard />

                <Post />
            </main>
        </>
    );
}

export default Profile;