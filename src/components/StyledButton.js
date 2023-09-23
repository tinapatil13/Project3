document.addEventListener('DOMContentLoaded', fetchUsers);

async function fetchUsers() {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    const users = data.data;
    
    const usersContainer = document.getElementById('users');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `${user.first_name} ${user.last_name}`;
        userDiv.addEventListener('click', () => displayUserDetails(user.id));
        usersContainer.appendChild(userDiv);
    });
}