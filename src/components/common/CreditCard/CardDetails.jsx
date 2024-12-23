export function CardDetails({ cardHolder, validThru, isDark }) {
    return (
        <div className="grid grid-cols-2 gap-4 mb-9">
            <div>
                <div className="text-xs mb-1">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>CARD HOLDER</span>
                </div>
                <div className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {cardHolder}
                </div>
            </div>
            <div>
                <div className="text-xs mb-1">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>VALID THRU</span>
                </div>
                <div className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {validThru}
                </div>
            </div>
        </div>
    );
}