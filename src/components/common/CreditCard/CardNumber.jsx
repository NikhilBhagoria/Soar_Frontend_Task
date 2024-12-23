export function CardNumber({ cardNumber, isDark }) {
    return (
        <div className="flex justify-between items-center bg-custom-gradient-opacity p-[22px]">
            <div className={`text-lg tracking-[4px] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {cardNumber}
            </div>
            <div className="flex -space-x-3">
                <div className={`w-6 h-6 rounded-full  opacity-50 ${isDark ? 'bg-white' : 'bg-[#9199AF80]'}`}></div>
                <div className={`w-6 h-6 rounded-full  opacity-50 ${isDark ? 'bg-white' : 'bg-[#9199AF80]'}`}></div>
            </div>
        </div>
    );
}