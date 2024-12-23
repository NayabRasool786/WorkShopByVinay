// Project data
const projects = [
    {
        title: "Research Project Alpha",
        description: "Collaborative research on renewable energy solutions",
        members: 5,
        progress: 75,
        deadline: "2024-03-15"
    },
    {
        title: "Web Development Team",
        description: "Building the next-gen campus portal",
        members: 4,
        progress: 60,
        deadline: "2024-04-01"
    },
    // Add more projects as needed
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupNotifications();
    setupUserProfile();
});

function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-stats">
            <span><i class="fas fa-users"></i> ${project.members} members</span>
            <span><i class="fas fa-calendar"></i> ${formatDate(project.deadline)}</span>
        </div>
        <div class="progress-bar">
            <div class="progress" style="width: ${project.progress}%"></div>
        </div>
        <button class="join-btn">Join Project</button>
    `;
    
    return card;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function setupNotifications() {
    const notificationBtn = document.querySelector('.notification-btn');
    
    notificationBtn.addEventListener('click', () => {
        // Implement notification functionality
        alert('Notifications feature coming soon!');
    });
}

function setupUserProfile() {
    const userProfile = document.querySelector('.user-profile');
    
    userProfile.addEventListener('click', () => {
        // Implement user profile dropdown
        console.log('User profile clicked');
    });
}

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Implement search functionality
function searchProjects(query) {
    return projects.filter(project => 
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase())
    );
}

// Add responsive navigation
const setupResponsiveNav = () => {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 80) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
};

setupResponsiveNav();
