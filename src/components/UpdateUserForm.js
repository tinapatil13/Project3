import React, { useState } from 'react';
import '../styles/UpdateUserForm.css';

function UpdateUserForm({ user, onSave }) {
    const [updatedName, setUpdatedName] = useState(user.first_name);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...user, first_name: updatedName });
    };

    return (
        <form className="update-user-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text"
                    value={updatedName}
                    onChange={e => setUpdatedName(e.target.value)}
                />
            </label>
            <button type="submit">Save</button>
        </form>
    );
}

export default UpdateUserForm;