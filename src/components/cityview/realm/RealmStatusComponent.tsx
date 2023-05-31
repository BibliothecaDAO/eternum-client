import React, { useEffect, useState } from 'react';
import { ReactComponent as RelicIcon } from '../../../assets/icons/common/relic.svg';
import { ReactComponent as SkullIcon } from '../../../assets/icons/common/skull.svg';
import { ReactComponent as ShieldIcon } from '../../../assets/icons/common/shield.svg';
import { ReactComponent as PickAxeIcon } from '../../../assets/icons/common/pick-axe.svg';

type RealmStatusComponentProps = {}

export const RealmStatusComponent = ({ }: RealmStatusComponentProps) => {

    return (
        <div className="flex items-center p-8 -my-10 space-x-10 rounded-3xl h-36 bg-gray">
            <div className='flex flex-col items-center justify-center text-xs text-white'>
                <div className='flex items-center mb-2'>3 <RelicIcon className="ml-1" /></div>
                <span>Sovereign</span>
            </div>
            <div className='flex flex-col items-center justify-center text-xs text-anger-light'>
                <SkullIcon className="mb-2" />
                <span>Starving</span>
            </div>
            <div className='flex flex-col items-center justify-center text-xs text-gold'>
                <ShieldIcon className="mb-2" />
                <span>Vulnerable</span>
            </div>
            <div className='flex flex-col items-center justify-center text-xs text-brilliance'>
                <PickAxeIcon className="mb-2" />
                <span>Idle</span>
            </div>
        </div>
    );
};

export default RealmStatusComponent;