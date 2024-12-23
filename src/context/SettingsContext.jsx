import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        dateOfBirth: '',
        presentAddress: '',
        permanentAddress: '',
        city: '',
        postalCode: '',
        country: '',
        profileImage: "/profile/user-profile.png"
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const updateProfileData = (name, value) => {
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when field is updated
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const updateProfileImage = (imageUrl) => {
        setProfileData(prev => ({
            ...prev,
            profileImage: imageUrl
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!profileData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (profileData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Username validation
        if (!profileData.username.trim()) {
            newErrors.username = 'Username is required';
        } else if (profileData.username.includes(' ')) {
            newErrors.username = 'Username cannot contain spaces';
        } else if (profileData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!profileData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(profileData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!profileData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (!passwordRegex.test(profileData.password)) {
            newErrors.password = 'Password must be at least 8 characters with 1 uppercase, 1 lowercase and 1 number';
        }

        // Date of Birth validation
        if (!profileData.dateOfBirth) {
            newErrors.dateOfBirth = 'Date of Birth is required';
        } else {
            const dob = new Date(profileData.dateOfBirth);
            const today = new Date();
            const age = today.getFullYear() - dob.getFullYear();
            if (age < 18) {
                newErrors.dateOfBirth = 'Must be at least 18 years old';
            } else if (age > 100) {
                newErrors.dateOfBirth = 'Invalid date of birth';
            }
        }

        // Address validations
        if (!profileData.presentAddress.trim()) {
            newErrors.presentAddress = 'Present address is required';
        }

        if (!profileData.permanentAddress.trim()) {
            newErrors.permanentAddress = 'Permanent address is required';
        }

        // City validation
        if (!profileData.city.trim()) {
            newErrors.city = 'City is required';
        }

        // Postal Code validation
        const postalRegex = /^\d{5}$/;
        if (!profileData.postalCode.trim()) {
            newErrors.postalCode = 'Postal code is required';
        } else if (!postalRegex.test(profileData.postalCode)) {
            newErrors.postalCode = 'Invalid postal code format (5 digits)';
        }

        // Country validation
        if (!profileData.country.trim()) {
            newErrors.country = 'Country is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const saveProfile = async () => {
        if (validateForm()) {
            setIsLoading(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('Profile updated:', profileData);
                return true;
            } catch (error) {
                console.error('Error updating profile:', error);
                return false;
            } finally {
                setIsLoading(false);
            }
        }
        return false;
    };

    return (
        <SettingsContext.Provider value={{
            profileData,
            errors,
            isLoading,
            updateProfileData,
            updateProfileImage,
            validateForm,
            saveProfile
        }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
}; 