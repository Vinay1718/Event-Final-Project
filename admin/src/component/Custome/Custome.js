import React, { useState, useEffect } from 'react';
import './Custome.css';

export default function UserProfile() {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : {
            name: 'User',
            email: 'user@gmail.com',
            phone: '123-456-7890',
            address: '123 Fake Street, Springfield, USA',
            gender: 'Male',
            dob: '1990-01-01',
            bio: 'Hello, I am a dummy user for the profile section.',
            facebook: 'https://facebook.com/user',
            instagram: 'https://instagram.com/user',
            profileImage: 'https://www.w3schools.com/w3images/avatar2.png',
        };
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedUser = { ...user, [name]: value };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            const updatedUser = { ...user, profileImage: imageURL };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <div className="profile-header">
                <img src={user.profileImage} alt="Profile" className="profile-image" />
                {isEditing ? (
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                ) : (
                    <button className="edit-button" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="profile-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label>
                    Gender:
                    <select
                        name="gender"
                        value={user.gender}
                        onChange={handleChange}
                        disabled={!isEditing}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <label>
                    Date of Birth:
                    <input
                        type="date"
                        name="dob"
                        value={user.dob}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label>
                    Bio:
                    <textarea
                        name="bio"
                        value={user.bio}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label>
                    Facebook:
                    <input
                        type="text"
                        name="facebook"
                        value={user.facebook}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                <label>
                    Instagram:
                    <input
                        type="text"
                        name="instagram"
                        value={user.instagram}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </label>

                {isEditing && (
                    <button type="submit" className="save-button">Save Changes</button>
                )}
            </form>
        </div>
    );
}
