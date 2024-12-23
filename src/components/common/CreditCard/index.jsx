import React from 'react';
import { CardBalance } from './CardBalance';
import { CardDetails } from './CardDetails';
import { CardNumber } from './CardNumber';

export function Card({ balance, cardHolder, validThru, cardNumber, variant = 'dark' }) {
    const isDark = variant === 'dark';

    return (
        <div className={`w-full rounded-3xl ${isDark ? 'bg-custom-gradient' : 'bg-white'}`}>
            <div className='p-6 pb-0'>
                <CardBalance balance={balance} isDark={isDark} />
                <CardDetails cardHolder={cardHolder} validThru={validThru} isDark={isDark} />
            </div>
            <CardNumber cardNumber={cardNumber} isDark={isDark} />
        </div>
    );
}