// components/UserDetail.js
import React, { useState, useEffect } from 'react';
import { fetchUserDetail } from '../services/userService';
import '../styles/UserDetail.css';

function UserDetail({ userId, onClose }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchUserDetail(userId).then(data => {
            setUser(data);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching user details:", error);
            setLoading(false);
        });
    }, [userId]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="user-detail">
            <button onClick={onClose}>Close</button>
            <img src={user.avatar} alt={user.first_name} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>Email: {user.email}</p>
            {/* Add more user details as needed */}
        </div>
    );
}

export default UserDetail;