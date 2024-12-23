import React, { useRef, useState } from 'react';
import { useSettings } from '../../context/SettingsContext';

const Settings = () => {
    const {
        profileData,
        errors,
        isLoading,
        updateProfileData,
        updateProfileImage,
        saveProfile
    } = useSettings();

    const [activeTab, setActiveTab] = useState("editProfile");
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateProfileData(name, value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await saveProfile();
        if (success) {
            alert('Profile updated successfully!');
        } else {
            alert('Failed to update profile. Please try again.');
        }
    };

    return (
        <div className='p-8 sm:p-9 md:p-10 bg-[#F5F7FA]'>
            <div className='max-w-7xl mx-auto bg-white p-10 rounded-lg'>
                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6 md:mb-8">
                    <nav className="flex space-x-4 md:space-x-8">
                        <button
                            onClick={() => setActiveTab("editProfile")}
                            className={`relative pb-3 md:pb-4 px-1 font-medium text-sm md:text-base ${activeTab === "editProfile"
                                ? "text-black"
                                : "text-gray-500"
                                }`}
                        >
                            Edit Profile
                            {activeTab === "editProfile" && (
                                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-black rounded-tr-lg rounded-tl-lg" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("preferences")}
                            className={`relative pb-3 md:pb-4 px-1 font-medium text-sm md:text-base ${activeTab === "preferences"
                                ? "text-black"
                                : "text-gray-500"
                                }`}
                        >
                            Preferences
                            {activeTab === "preferences" && (
                                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-black rounded-tr-lg rounded-tl-lg" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("security")}
                            className={`relative pb-3 md:pb-4 px-1 font-medium text-sm md:text-base ${activeTab === "security"
                                ? "text-black"
                                : "text-gray-500"
                                }`}
                        >
                            Security
                            {activeTab === "security" && (
                                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-black rounded-tr-lg rounded-tl-lg" />
                            )}
                        </button>
                    </nav>
                </div>

                {/* Main Content */}
                <div className='flex flex-col md:flex-row md:gap-8'>
                    {/* Profile Picture Section */}
                    <div className='w-full md:w-1/4 mb-6 md:mb-0'>
                        <div className='relative w-32 md:w-48 mx-auto'>
                            <img
                                src={profileData.profileImage}
                                alt="Profile"
                                className='w-32 h-32 md:w-48 md:h-48 rounded-full object-cover cursor-pointer'
                                onClick={handleImageClick}
                            />
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                            <button
                                onClick={handleImageClick}
                                className='absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-2">
                            Click to upload new profile picture
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className='w-full md:w-3/4'>
                        <div className='space-y-4 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                            {/* Left Column */}
                            <div className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={profileData.name}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                        placeholder='Charlene Reed'
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>User Name</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={profileData.username}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                        placeholder='charlene Reed'
                                    />
                                    {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={profileData.email}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                        placeholder='charlenereed@gmail.com'
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={profileData.password}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                        placeholder='********'
                                    />
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={profileData.dateOfBirth}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                    />
                                    {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Present Address</label>
                                    <input
                                        type="text"
                                        name="presentAddress"
                                        value={profileData.presentAddress}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.presentAddress ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                        placeholder='San Jose, California, USA'
                                    />
                                    {errors.presentAddress && <p className="text-red-500 text-xs mt-1">{errors.presentAddress}</p>}
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Permanent Address</label>
                                    <input
                                        type="text"
                                        name="permanentAddress"
                                        value={profileData.permanentAddress}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.permanentAddress ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                        placeholder='San Jose, California, USA'
                                    />
                                    {errors.permanentAddress && <p className="text-red-500 text-xs mt-1">{errors.permanentAddress}</p>}
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={profileData.city}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                        placeholder='San Jose'
                                    />
                                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Postal Code</label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={profileData.postalCode}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                        placeholder='45962'
                                    />
                                    {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                                </div>
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-1'>Country</label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={profileData.country}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                        placeholder='USA'
                                    />
                                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Updated Save Button */}
                        <div className='mt-6 md:mt-8 md:text-end'>
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className={`w-full md:w-auto md:px-6 py-2 bg-black text-white rounded-md 
                                    ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Saving...
                                    </span>
                                ) : (
                                    'Save Changes'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings