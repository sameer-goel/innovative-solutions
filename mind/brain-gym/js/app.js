// Brain Gym - Main Application Logic
// Handles UI variant switching, navigation, and core functionality

class BrainGymApp {
    constructor() {
        this.currentUser = MockData.users[0]; // Default to first user for demo
        this.currentVariant = 'neural'; // Match the HTML class
        this.init();
    }

    init() {
        this.setupVariantSwitcher();
        this.loadDashboard();
        this.setupEventListeners();
        console.log('Brain Gym App initialized with variant:', this.currentVariant);
    }

    setupVariantSwitcher() {
        const variantSelector = document.getElementById('ui-variant');
        
        if (variantSelector) {
            variantSelector.addEventListener('change', (e) => {
                const newVariant = e.target.value;
                this.switchVariant(newVariant);
            });
        }

        // Set initial variant to neural (matching HTML)
        this.currentVariant = 'neural';
        this.switchVariant(this.currentVariant);
    }

    switchVariant(variant) {
        const appContainer = document.getElementById('app');
        
        if (appContainer) {
            // Remove all variant classes
            appContainer.classList.remove('variant-corporate', 'variant-gamified', 'variant-scientific', 'variant-neural');
            
            // Add new variant class
            appContainer.classList.add(`variant-${variant}`);
        }
        
        this.currentVariant = variant;
        
        // Update variant selector if it exists
        const variantSelector = document.getElementById('ui-variant');
        if (variantSelector) {
            variantSelector.value = variant;
        }
        
        // Refresh dashboard to apply variant-specific styling
        this.loadDashboard();
        
        console.log('Switched to variant:', variant);
    }

    setupEventListeners() {
        // Category card clicks
        document.addEventListener('click', (e) => {
            const categoryCard = e.target.closest('.category-card');
            if (categoryCard) {
                const category = categoryCard.dataset.category;
                this.handleCategoryClick(category);
                return;
            }

            // Test button clicks
            if (e.target.classList.contains('test-button') || e.target.closest('.test-button')) {
                const testButton = e.target.classList.contains('test-button') ? e.target : e.target.closest('.test-button');
                const testType = testButton.dataset.test;
                this.startTest(testType);
            }

            // Test navigation clicks
            if (e.target.classList.contains('nav-test-btn') || e.target.closest('.nav-test-btn')) {
                const navButton = e.target.classList.contains('nav-test-btn') ? e.target : e.target.closest('.nav-test-btn');
                const testType = navButton.dataset.test;
                this.switchTest(testType);
            }
        });

        // Right sidebar toggle
        const profileTrigger = document.getElementById('profile-trigger');
        const rightSidebar = document.getElementById('right-sidebar');
        const sidebarClose = document.getElementById('sidebar-close');
        
        if (profileTrigger && rightSidebar) {
            profileTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                rightSidebar.classList.toggle('open');
                profileTrigger.classList.toggle('active');
            });
        }

        if (sidebarClose && rightSidebar) {
            sidebarClose.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                rightSidebar.classList.remove('open');
                if (profileTrigger) profileTrigger.classList.remove('active');
            });
        }

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (rightSidebar && rightSidebar.classList.contains('open')) {
                if (!rightSidebar.contains(e.target) && !profileTrigger.contains(e.target)) {
                    rightSidebar.classList.remove('open');
                    profileTrigger.classList.remove('active');
                }
            }
        });

        // Navigation
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.logout();
            });
        }
    }

    async loadDashboard() {
        try {
            // Update user info if element exists
            const userNameElement = document.getElementById('user-name');
            if (userNameElement) {
                userNameElement.textContent = `Welcome, ${this.currentUser.name}`;
            }
            
            // Load progress stats
            await this.loadProgressStats();
            
            // Load recent results
            await this.loadRecentResults();
            
            // Apply variant-specific enhancements
            this.applyVariantEnhancements();
            
        } catch (error) {
            console.error('Error loading dashboard:', error);
        }
    }

    async loadProgressStats() {
        const user = this.currentUser;
        
        // Update stats if elements exist
        const totalSessionsElement = document.getElementById('total-sessions');
        if (totalSessionsElement) {
            totalSessionsElement.textContent = user.totalSessions;
        }
        
        const avgScoreElement = document.getElementById('avg-score');
        if (avgScoreElement) {
            avgScoreElement.textContent = user.averageScore;
        }
        
        const improvementElement = document.getElementById('improvement');
        if (improvementElement) {
            improvementElement.textContent = `+${user.improvement}%`;
        }
    }

    async loadRecentResults() {
        try {
            const results = await MockAPI.getTestResults(this.currentUser.id);
            const recentResults = results.slice(0, 5); // Get last 5 results
            
            const resultsContainer = document.getElementById('recent-results');
            if (!resultsContainer) return;
            
            resultsContainer.innerHTML = '';
            
            if (recentResults.length === 0) {
                resultsContainer.innerHTML = '<p>No recent results. Start a test to see your progress!</p>';
                return;
            }
            
            recentResults.forEach(result => {
                const resultElement = this.createResultElement(result);
                resultsContainer.appendChild(resultElement);
            });
            
        } catch (error) {
            console.error('Error loading recent results:', error);
        }
    }

    createResultElement(result) {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-item';
        
        const testNames = {
            stroop: 'Color Clash',
            nback: 'Memory Chain',
            cpt: 'Focus Guardian'
        };
        
        resultDiv.innerHTML = `
            <div class="result-info">
                <h4>${testNames[result.testType]}</h4>
                <p>${new Date(result.date).toLocaleDateString()} • ${result.difficulty}</p>
            </div>
            <div class="result-score">${result.score}</div>
        `;
        
        return resultDiv;
    }

    applyVariantEnhancements() {
        const container = document.querySelector('.container');
        
        // Remove existing variant-specific elements
        document.querySelectorAll('.variant-enhancement').forEach(el => el.remove());
        
        switch (this.currentVariant) {
            case 'gamified':
                this.addGamifiedEnhancements();
                break;
            case 'scientific':
                this.addScientificEnhancements();
                break;
            case 'corporate':
                this.addCorporateEnhancements();
                break;
        }
    }

    addGamifiedEnhancements() {
        // Add achievement badges
        const progressCard = document.querySelector('.progress-card');
        if (progressCard && !progressCard.querySelector('.achievement-badge')) {
            const badge = document.createElement('div');
            badge.className = 'achievement-badge variant-enhancement';
            badge.textContent = '🏆 High Performer';
            progressCard.style.position = 'relative';
            progressCard.appendChild(badge);
        }

        // Add motivational messages
        const testsCard = document.querySelector('.tests-card');
        if (testsCard) {
            const motivation = document.createElement('div');
            motivation.className = 'motivation-message variant-enhancement';
            motivation.style.cssText = `
                background: linear-gradient(45deg, #f39c12, #e74c3c);
                color: white;
                padding: 15px;
                border-radius: 10px;
                margin-bottom: 20px;
                text-align: center;
                font-weight: 600;
            `;
            motivation.innerHTML = '🚀 Ready to boost your brain power? Pick a challenge!';
            testsCard.insertBefore(motivation, testsCard.firstChild.nextSibling);
        }
    }

    addScientificEnhancements() {
        // Add data table to results
        const resultsCard = document.querySelector('.results-card');
        if (resultsCard) {
            const dataTable = document.createElement('table');
            dataTable.className = 'data-table variant-enhancement';
            dataTable.innerHTML = `
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Current</th>
                        <th>Target</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Attention Span</td>
                        <td>78%</td>
                        <td>85%</td>
                        <td><span class="metric-badge">IMPROVING</span></td>
                    </tr>
                    <tr>
                        <td>Working Memory</td>
                        <td>82%</td>
                        <td>90%</td>
                        <td><span class="metric-badge">ON TRACK</span></td>
                    </tr>
                    <tr>
                        <td>Processing Speed</td>
                        <td>75%</td>
                        <td>80%</td>
                        <td><span class="metric-badge">NEEDS FOCUS</span></td>
                    </tr>
                </tbody>
            `;
            resultsCard.appendChild(dataTable);
        }

        // Add progress bars to stats
        const stats = document.querySelectorAll('.stat');
        stats.forEach(stat => {
            if (!stat.querySelector('.progress-bar')) {
                const progressBar = document.createElement('div');
                progressBar.className = 'progress-bar variant-enhancement';
                const progressFill = document.createElement('div');
                progressFill.className = 'progress-fill';
                progressFill.style.width = Math.random() * 100 + '%';
                progressBar.appendChild(progressFill);
                stat.appendChild(progressBar);
            }
        });
    }

    addCorporateEnhancements() {
        // Add professional summary
        const dashboardGrid = document.querySelector('.dashboard-grid');
        if (dashboardGrid && !dashboardGrid.querySelector('.summary-card')) {
            const summaryCard = document.createElement('div');
            summaryCard.className = 'card summary-card variant-enhancement';
            summaryCard.style.gridColumn = '1 / -1';
            summaryCard.innerHTML = `
                <h3>Performance Summary</h3>
                <p style="color: #666; line-height: 1.6;">
                    Your cognitive performance has improved by <strong>${this.currentUser.improvement}%</strong> 
                    over the past quarter. Focus areas for continued development include working memory 
                    and sustained attention tasks.
                </p>
            `;
            dashboardGrid.insertBefore(summaryCard, dashboardGrid.firstChild);
        }
    }

    switchTest(testType) {
        // Update active state in navigation
        document.querySelectorAll('.nav-test-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-test="${testType}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Update main content
        this.updateMainContent(testType);
    }

    updateMainContent(testType) {
        const testConfigs = {
            stroop: {
                title: 'Color Clash - Stroop Test',
                description: 'Test your cognitive inhibition and attention control by identifying colors while ignoring word meanings.',
                example: { word: 'BLUE', color: '#e74c3c', answer: 'RED' },
                stats: { questions: 50, time: '~3', best: 82 }
            },
            nback: {
                title: 'Memory Chain - N-Back Test',
                description: 'Challenge your working memory by remembering stimuli from N steps back in the sequence.',
                example: { word: 'A → B → A', color: '#3b82f6', answer: 'Match!' },
                stats: { questions: 40, time: '~5', best: 76 }
            },
            cpt: {
                title: 'Focus Guardian - CPT Test',
                description: 'Maintain sustained attention over time by responding to target stimuli while ignoring distractors.',
                example: { word: 'X', color: '#10b981', answer: 'Target!' },
                stats: { questions: 200, time: '~8', best: 79 }
            }
        };

        const config = testConfigs[testType];
        if (!config) return;

        // Update header
        document.getElementById('current-test-title').textContent = config.title;
        document.getElementById('current-test-description').textContent = config.description;

        // Update example
        const exampleWord = document.querySelector('.example-word');
        if (exampleWord) {
            exampleWord.textContent = config.example.word;
            exampleWord.style.color = config.example.color;
        }

        const correctAnswer = document.querySelector('.correct-answer');
        if (correctAnswer) {
            correctAnswer.textContent = `Answer: ${config.example.answer}`;
        }

        // Update stats
        const statNumbers = document.querySelectorAll('.test-stats .stat-number');
        if (statNumbers.length >= 3) {
            statNumbers[0].textContent = config.stats.questions;
            statNumbers[1].textContent = config.stats.time;
            statNumbers[2].textContent = config.stats.best;
        }
    }

    startTest(testType) {
        console.log(`Starting ${testType} test`);
        
        // Show loading state if button exists
        const startButton = document.getElementById('start-test-btn');
        if (startButton) {
            const originalText = startButton.innerHTML;
            startButton.innerHTML = '<div class="loading"></div> Loading...';
            startButton.disabled = true;
            
            // Simulate test loading
            setTimeout(() => {
                startButton.innerHTML = originalText;
                startButton.disabled = false;
                
                // In a real app, this would navigate to the test page
                alert(`${testType.toUpperCase()} test would start here!\n\nThis is a demo - the actual cognitive tests will be implemented in the next iteration.`);
            }, 1500);
        } else {
            // If no start button, just show the alert
            alert(`${testType.toUpperCase()} test would start here!\n\nThis is a demo - the actual cognitive tests will be implemented in the next iteration.`);
        }
    }

    handleCategoryClick(category) {
        console.log(`Category clicked: ${category}`);
        
        if (category === 'focus') {
            this.showTestArea();
            stroopTest.start();
        } else {
            alert(`${category.charAt(0).toUpperCase() + category.slice(1)} exercises coming soon!`);
        }
    }

    showTestArea() {
        const homepageContent = document.querySelector('.homepage-content');
        if (homepageContent) {
            homepageContent.innerHTML = '<div id="test-area"></div>';
        }
    }

    logout() {
        console.log('Logout clicked');
        // In a real app, this would handle logout
        alert('Logout functionality - would return to login or company portal');
    }
}

// Global function to return to homepage
function showHomepage() {
    location.reload();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.brainGymApp = new BrainGymApp();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BrainGymApp;
}