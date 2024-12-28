function toggleCommittees() {
    const committees = document.getElementById("committees");
    const btn = document.querySelector('.toggle-btn i');

    if (committees.style.display === "none") {
        committees.style.display = "grid";
        btn.className = "fas fa-chevron-up";
    } else {
        committees.style.display = "none";
        btn.className = "fas fa-chevron-down";
    }
}

// Add hover effect for members
document.querySelectorAll('.member').forEach(member => {
    member.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#e9ecef';
    });
    member.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#f8f9fa';
    });
}); function toggleCommittees() {
    const committees = document.getElementById("committees");
    const btn = document.querySelector('.toggle-btn i');

    if (committees.style.display === "none") {
        committees.style.display = "grid";
        btn.className = "fas fa-chevron-up";
    } else {
        committees.style.display = "none";
        btn.className = "fas fa-chevron-down";
    }
}

// Add hover effect for members
document.querySelectorAll('.member').forEach(member => {
    member.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#e9ecef';
    });
    member.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#f8f9fa';
    });
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // You'll need to add appropriate CSS for dark mode
}

// Search functionality
function searchMembers() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.member').forEach(member => {
        const text = member.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            member.style.display = 'flex';
        } else {
            member.style.display = 'none';
        }
    });
}