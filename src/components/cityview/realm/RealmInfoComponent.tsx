import React, { useEffect, useState } from 'react';
import { ResourceIcon } from '../../../elements/ResourceIcon';
import { findResourceById } from '../../../constants/resources';

type RealmInfoComponentProps = {}

export const RealmInfoComponent = ({ }: RealmInfoComponentProps) => {

    const dummyResources = [
        {
            resourceId: 3,
            amount: 150
        },
        {
            resourceId: 4,
            amount: 32
        },
        {
            resourceId: 18,
            amount: 120,
        },
        {
            resourceId: 20,
            amount: 4
        }
    ]

    return (
        <>
            <div className="relative shadow-lg shadow-black/25 flex items-center px-4 py-2 text-white rounded-full h-[50px] bg-crimson">
                <svg className='mr-2' width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.36218 4.11992e-05C6.61477 0.0024055 6.8555 0.106415 7.02884 0.288088C8.51792 1.84873 10.9107 4.77701 10.9107 9.47968C10.9107 11.7866 10.4135 13.9174 9.67961 15.652C9.06242 17.1107 8.25293 18.3464 7.37664 19.1639H12.0714C12.5843 19.1639 13 19.575 13 20.082C13 20.589 12.5843 21 12.0714 21H0.928571C0.415735 21 0 20.589 0 20.082C0 19.575 0.415735 19.1639 0.928571 19.1639H5.26075C4.98357 18.902 4.71807 18.5995 4.47102 18.2666C3.82235 17.4964 3.22913 16.5696 2.7424 15.5549C1.93769 13.8772 1.39286 11.8947 1.39286 9.86885C1.39286 7.80445 2.09445 5.79247 2.95706 4.13239C3.82102 2.46967 4.88294 1.09005 5.6901 0.275557C5.8669 0.0971618 6.10956 -0.0023231 6.36218 4.11992e-05ZM9.05357 9.47968C9.05357 9.69656 9.04863 9.91163 9.03899 10.1247C8.53218 8.65512 7.67803 7.54453 6.74654 7.0095C6.44793 6.83797 6.07773 6.84446 5.78544 7.02632C4.93993 7.55245 4.20088 8.52341 3.67912 9.597C3.52969 9.90447 3.3936 10.2294 3.27519 10.5668C3.25859 10.3345 3.25 10.1016 3.25 9.86885C3.25 8.19725 3.8252 6.47975 4.60896 4.97135C5.15949 3.91188 5.79501 2.99001 6.35716 2.30068C7.62053 3.79315 9.05357 6.09649 9.05357 9.47968ZM5.93513 17.1352C6.05127 17.2713 6.16815 17.3997 6.28517 17.52C6.52779 17.2072 6.77764 16.7947 6.99936 16.2879C7.39017 15.3946 7.66071 14.2809 7.66071 13.072C7.66071 11.0991 6.95259 9.69158 6.29051 8.98956C5.9729 9.32414 5.64089 9.79993 5.35308 10.3922C4.92192 11.2793 4.64286 12.3214 4.64286 13.3115C4.64286 14.2975 4.91983 15.2974 5.34982 16.1643C5.5282 16.5239 5.72754 16.85 5.93513 17.1352Z" fill="#FFF5EA" />
                </svg>
                <div className='flex flex-col'>
                    <div className="font-bold">
                        Miliadea
                    </div>
                    <div className="text-xxs text-gold">
                        0x...loaf
                    </div>
                </div>
                <div className='flex mx-auto space-x-2'>
                    {dummyResources.map((resource) => (
                        <div key={resource.resourceId} className='flex flex-col items-center'>
                            <ResourceIcon resource={findResourceById(resource.resourceId)?.trait as string} size='xs' />
                            <div className="text-xs">
                                {resource.amount}
                            </div>
                        </div>
                    ))}

                </div>
                <button className="px-2 py-1 ml-auto text-xs border rounded-full text-gold border-gold">
                    Show on map
                </button>
            </div>
        </>
    );
};

export default RealmInfoComponent;