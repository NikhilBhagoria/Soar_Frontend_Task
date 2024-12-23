import React from 'react';
const CreditCard = ({ variant = 'dark', cardData }) => {
    const isDark = variant === 'dark';

    return (
        <div
            className={`relative w-full aspect-[1.58/1] p-6 rounded-2xl ${isDark ? 'bg-[#1E2532] text-white' : 'bg-white text-[#1E2532]'
                }`}
        >
            {/* Balance Section */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <p className="text-sm opacity-80">Balance</p>
                    <p className="text-2xl font-semibold mt-1">${cardData.balance}</p>
                </div>
                <img
                    src={isDark ? "/icons/Chip_Card.svg" : "/icons/Chip_Card_black.svg"}
                    alt="Card Chip"
                    className="w-12"
                />
            </div>

            {/* Card Details */}
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs opacity-80">CARD HOLDER</p>
                        <p className="font-medium mt-1">{cardData.cardHolder}</p>
                    </div>
                    <div>
                        <p className="text-xs opacity-80">VALID THRU</p>
                        <p className="font-medium mt-1">{cardData.validThru}</p>
                    </div>
                </div>

                {/* Card Number */}
                <div className="flex justify-between items-center">
                    <div className={`text-lg tracking-wider ${isDark ? 'text-white' : 'text-[#1E2532]'}`}>
                        {cardData.cardNumber}
                    </div>
                    <img
                        src="/icons/mastercard-logo.svg"
                        alt="Mastercard"
                        className="h-8 opacity-60"
                    />
                </div>
            </div>

            {/* Gradient Effect */}
            {isDark && (
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-500/10 to-transparent rounded-b-2xl" />
            )}
        </div>
    );
};

export default CreditCard;