(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

})(jQuery);

function backToUsersListPage() {
    window.location.href = ("UsersList.html")
}
function GoToUsersListPage() {
    window.location.href = ("UsersList.html")
    alert("User Added Successfully!");
}
function editedSuccessfully() {
    window.location.href = ("UsersList.html")
    alert("User Edited Successfully!");
}
function login() {
    window.location.href = ("login.html")
}
function newStore() {
    window.location.href = ("AddNewuser.html")
}


//Api
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
let users = [];
let currentPage = 1;
const rowsPerPage = 5;

document.addEventListener("DOMContentLoaded", function () {
    fetchUsers();

    document.getElementById('prevPage').addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayUsers();
        }
    });

    document.getElementById('nextPage').addEventListener('click', function (e) {
        e.preventDefault();
        if (currentPage * rowsPerPage < users.length) {
            currentPage++;
            displayUsers();
        }
    });
});

function fetchUsers() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            users = data;
            displayUsers();
        })
        .catch(error => console.error('Error fetching users:', error));
}

function displayUsers() {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedUsers = users.slice(start, end);

    paginatedUsers.forEach((user, index) => {
        const row = `<tr>
            <td>${start + index + 1}</td>
            <td>${user.id}</td>
            <td>${user.name.split(' ')[0]}</td>
            <td>${user.name.split(' ')[1] || ''}</td>
            <td>${user.email}</td>
            <td>${user.company.name}</td>
            <td><a href="#" onclick="toggleStatus(${user.id})">Activate</a></td>
            <td>
                <a href="#" onclick="editUser(${user.id})">Edit</a> / 
                <a href="#" onclick="viewUser(${user.id})">View</a> / 
                <a href="#" onclick="deleteUser(${user.id})">Delete</a>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });

    updatePaginationButtons();
}

function updatePaginationButtons() {
    document.getElementById('prevPage').parentElement.classList.toggle('disabled', currentPage === 1);
    document.getElementById('nextPage').parentElement.classList.toggle('disabled', currentPage * rowsPerPage >= users.length);


    document.getElementById('pageNumber').textContent = `Page ${currentPage} of ${Math.ceil(users.length / rowsPerPage)}`;
}


function viewUser(userId) {
    window.location.href = `ViewUser.html?userId=${userId}`;
}

// Edit user (Mock update)
function editUser(userId) {
    window.location.href = `EditUser.html?userId=${userId}`;

}

// Delete user
function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
        fetch(`${apiUrl}/${userId}`, { method: 'DELETE' })
            .then(() => {
                alert('User deleted successfully!');
                fetchUsers();
            })
            .catch(error => console.error('Error deleting user:', error));
    }
}


// Toggle user status (Mock functionality)
function toggleStatus(userId) {
    alert(`User ${userId} status toggled!`);
}
