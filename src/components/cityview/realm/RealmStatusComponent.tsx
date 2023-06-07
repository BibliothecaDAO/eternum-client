import React, { useEffect, useState } from 'react';
import { ReactComponent as SkullIcon } from '../../../assets/icons/common/skull.svg';
import { ResourceIcon } from '../../../elements/ResourceIcon';
import { findResourceById } from '../../../constants/resources';
import clsx from 'clsx';

type RealmStatusComponentProps = {} & React.ComponentPropsWithRef<'div'>

const dummyResources = [
    {
        resourceId: 3,
        amount: 150,
        speed: -5
    },
    {
        resourceId: 4,
        amount: 32,
        speed: 11
    },
    {
        resourceId: 18,
        amount: 120,
        speed: -12
    },
    {
        resourceId: 20,
        amount: 4,
        speed: 0
    }
]

export const RealmStatusComponent = ({ className }: RealmStatusComponentProps) => {

    return (
        <div className={clsx("flex h-16 space-x-4", className)}>
            <div className='flex bg-[#FF0000] items-center justify-center p-3 rounded-xl text-xs text-white h-10'>
                <SkullIcon className="mr-2 fill-current" />
                <span>People Starving</span>
            </div>
            <div className='flex mx-auto space-x-2'>
                {dummyResources.map((resource) => (<div className='flex flex-col'>
                    <div key={resource.resourceId} className='flex items-center p-3 text-xs font-bold text-white bg-black/60 rounded-xl h-11'>
                        <ResourceIcon resource={findResourceById(resource.resourceId)?.trait as string} size='xs' className='mr-1' />
                        <div className="text-xs">
                            {resource.amount}
                        </div>
                    </div>
                    <div className={clsx('text-xxs mt-2 rounded-[5px] px-2 h-4 w-min',
                        resource.speed > 0 && 'text-order-vitriol bg-dark-green',
                        resource.speed < 0 && 'text-light-red bg-brown',
                        resource.speed == 0 && 'text-gold bg-brown'
                    )}>
                        {resource.speed !== 0 ? `${resource.speed}/s` : 'IDLE'}
                    </div>
                </div>
                ))}

            </div>
        </div>
    );
};

export default RealmStatusComponent;