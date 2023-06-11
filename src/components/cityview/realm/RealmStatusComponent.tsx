import React, { useEffect, useState } from 'react';
import { ReactComponent as SkullIcon } from '../../../assets/icons/common/skull.svg';
import { ReactComponent as ShieldIcon } from '../../../assets/icons/common/shield.svg';
import clsx from 'clsx';

type RealmStatusComponentProps = {} & React.ComponentPropsWithRef<'div'>

export const RealmStatusComponent = ({ className }: RealmStatusComponentProps) => {

    return (
        <div className={clsx("flex space-x-4", className)}>
            <div className='flex items-center justify-center px-3 py-2 ml-auto text-xs text-white rounded-full cursor-default h-7 bg-light-red'>
                <ShieldIcon className="mr-2 fill-current" />
                <span>Vulnerable</span>
            </div>
            <div className='flex items-center justify-center px-3 py-2 ml-auto text-xs text-white rounded-full cursor-default h-7 bg-light-red'>
                <SkullIcon className="mr-2 fill-current" />
                <span>People Starving</span>
            </div>
        </div>
    );
};

export default RealmStatusComponent;