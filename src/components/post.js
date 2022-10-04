import React from 'react';
import { ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, HeartIcon } from '@heroicons/react/24/outline';

const Post = () => {

    return (
        <>
            <div className="px-4 py-6 sm:px-0 flex justify-center">
                <div className="w-full lg:w-9/12 pb-4 px-5 rounded-lg bg-white">
                    <div className="p-5">
                        {/* User Information */}
                        <div className="mt-2 flex justify-between">
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
                            <p className="font-medium text-sm text-gray-400">10m ago</p>
                        </div>

                        {/* Posted Content */}
                        <div className="my-10">
                            {/* Written Content */}
                            <p className="text-slate-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et tortor at risus.</p>
                            {/* Images - Hidden unless images are added. */}
                            <div className="my-6">
                                <div className="h-64 md:h-72 lg:h-96 rounded-lg border-4 border-dashed border-gray-200" />
                            </div>
                        </div>

                        {/* Engagement */}
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <button className="flex">
                                    <HeartIcon className="text-gray-600 h-6 w-6" aria-hidden="true" />
                                    <p className="ml-1 text-gray-600 font-bold">12</p>
                                </button>
                                <button className="flex ml-10">
                                    <ChatBubbleOvalLeftIcon className="text-gray-600 h-6 w-6" aria-hidden="true" />
                                    <p className="ml-1 text-gray-600 font-bold">5</p>
                                </button>
                            </div>
                            <button>
                                <EllipsisHorizontalIcon className="text-gray-600 h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;