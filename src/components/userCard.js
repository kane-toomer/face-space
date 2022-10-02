import React from 'react';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

const UserCard = () => {

    return (
        <>
            <div className="m-5">
                <div className="w-full lg:w-4/12 p-5 rounded-lg bg-white">
                    <div className="flex items-center">
                        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>
                        <div>
                            <p className="ml-4 font-bold">Kane Toomer</p>
                            <p className="ml-4 font-medium text-sm text-blue-600">@kanetoomer</p>
                        </div>
                    </div>

                    {/* Engagement */}
                    <div className="flex justify-center mt-10">
                        <div className="flex items-center">
                            <p className="ml-10 text-center">
                                <p className="ml-1 text-gray-600 font-bold">1</p>
                                <p className="ml-1 text-gray-600 font-bold">Posts</p>
                            </p>
                            <p className="ml-10 text-center">
                                <p className="ml-1 text-gray-600 font-bold">12</p>
                                <p className="ml-1 text-gray-600 font-bold">Following</p>
                            </p>
                            <p className="ml-10 text-center">
                                <p className="ml-1 text-gray-600 font-bold">5</p>
                                <p className="ml-1 text-gray-600 font-bold">Followers</p>
                            </p>
                        </div>
                    </div>

                    {/* Settings */}
                    <div className="flex justify-center mt-12">
                        <a href="/settings" className="py-3 bg-blue-600 rounded-md text-white font-medium w-8/12 flex items-center justify-center">
                            <Cog8ToothIcon className="h-6 w-6 mr-1" aria-hidden="true" />
                            <p>Settings</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCard;