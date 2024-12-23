export function CardBalance({ balance, isDark }) {
    return (
        <div className="mb-8">
            <div className="text-sm">
                <span className={isDark ? 'text-white' : 'text-gray-600'}>Balance</span>
            </div>
            <div className={`flex justify-between items-center text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${balance}
                <img src={isDark ? "/icons/Chip_Card.svg" : "/icons/Chip_Card_black.svg"} alt="Card Chip" className="w-9" />
            </div>
        </div>
    );
}