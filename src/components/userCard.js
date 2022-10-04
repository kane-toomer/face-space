import React from 'react';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

import logo from '../assets/images/mememoji2.svg';

const UserCard = () => {

    return (
        <>
            <div className="px-4 sm:px-0 flex justify-center">
                {/* Compose */}
                <div className="w-full lg:w-8/12 px-5 rounded-lg bg-white">
                    <div className="my-6">
                        <div className="rounded-lg border-4 border-dashed border-gray-200">

                            {/* User Information */}
                            <div className="mt-5 flex justify-center">
                                <div className="text-center">
                                    <span className="inline-block h-20 w-20 overflow-hidden rounded-full bg-gray-100">
                                        <img className="h-full w-full text-gray-300" src={logo} />
                                    </span>
                                    <div>
                                        <button className="font-bold">Kane Toomer</button>
                                        <br />
                                        <button className="font-medium text-sm text-red-600">@kanetoomer</button>
                                    </div>
                                </div>
                            </div>

                            {/* Posts and Follower Count */}
                            <div className="mt-5 px-4 sm:px-0 flex justify-center">
                                <div className='flex items-center justify-between'>
                                    <div className='text-center'>
                                        <p className='font-bold'>12</p>
                                        <p>Following</p>
                                    </div>
                                    <div className='ml-5 text-center'>
                                        <p className='font-bold'>120</p>
                                        <p>Followers</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className='mt-5 md:mt-10 mx-10 text-center font-medium'>
                                <p>Just a man on a mission! | FS Software Developer & total space cadet</p>
                            </div>

                            {/* Settings Button */}
                            <div className='flex justify-center mt-10 mb-5'>
                                <a href="/settings" className='bg-red-600 px-4 py-2 rounded-md w-4/12 text-center text-white font-medium'>Settings</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCard;