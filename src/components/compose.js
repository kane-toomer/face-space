import React from 'react';
import { BoltIcon, PhotoIcon } from '@heroicons/react/24/outline';

const Compose = () => {

    return (
        <>
            <div className="px-4 sm:px-0 flex justify-center">
                {/* Compose */}
                <div className="w-full lg:w-8/12 pb-4 px-5 rounded-lg bg-white">
                    {/* top */}
                    <div className="">
                        <textarea
                            id="about"
                            name="about"
                            rows={5}
                            className="my-5 block w-full"
                            placeholder="What's on your mind?"
                            defaultValue={''}
                            style={{ resize: 'none', outline: 'none', border: 'none' }}
                        />
                    </div>

                    {/* Image Preview - Hidden unless images are added. */}
                    {/* <div className="mt-5 mb-10">
                        <p className="text-gray-400">Image Preview:</p>
                        <div className="px-4 py-6 sm:px-0">
                            <div className="h-64 md:h-72 lg:h-96 rounded-lg border-4 border-dashed border-gray-200" />
                        </div>
                    </div> */}

                    {/* bottom */}
                    <div className="flex justify-between">
                        <button className="text-slate-800">
                            <PhotoIcon className="h-7 w-7" aria-hidden="true" />
                        </button>
                        <button className="bg-red-600 text-white font-bold py-2 px-3 rounded-md hover:bg-red-900">
                            <BoltIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Compose;