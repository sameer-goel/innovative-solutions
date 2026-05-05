// Mock Data for Brain Gym Application
// This file contains all mock data for development and testing

const MockData = {
    // Mock Users
    users: [
        {
            id: "john.doe",
            name: "John Doe",
            department: "Marketing",
            email: "john.doe@company.com",
            joinDate: "2023-01-15",
            totalSessions: 45,
            averageScore: 78,
            improvement: 23
        },
        {
            id: "jane.smith",
            name: "Jane Smith",
            department: "Engineering",
            email: "jane.smith@company.com",
            joinDate: "2022-08-10",
            totalSessions: 67,
            averageScore: 85,
            improvement: 31
        },
        {
            id: "mike.johnson",
            name: "Mike Johnson",
            department: "Sales",
            email: "mike.johnson@company.com",
            joinDate: "2023-03-22",
            totalSessions: 32,
            averageScore: 72,
            improvement: 18
        }
    ],

    // Mock Test Results
    testResults: {
        "john.doe": [
            {
                testType: "stroop",
                date: "2024-12-16",
                score: 82,
                accuracy: 94,
                avgResponseTime: 1.2,
                difficulty: "medium",
                improvement: "+5%"
            },
            {
                testType: "nback",
                date: "2024-12-15",
                score: 76,
                accuracy: 88,
                avgResponseTime: 2.1,
                difficulty: "2-back",
                improvement: "+8%"
            },
            {
                testType: "cpt",
                date: "2024-12-14",
                score: 79,
                accuracy: 91,
                avgResponseTime: 0.8,
                difficulty: "standard",
                improvement: "+3%"
            }
        ],
        "jane.smith": [
            {
                testType: "stroop",
                date: "2024-12-16",
                score: 89,
                accuracy: 97,
                avgResponseTime: 1.0,
                difficulty: "hard",
                improvement: "+12%"
            },
            {
                testType: "nback",
                date: "2024-12-15",
                score: 84,
                accuracy: 92,
                avgResponseTime: 1.8,
                difficulty: "3-back",
                improvement: "+15%"
            },
            {
                testType: "cpt",
                date: "2024-12-14",
                score: 87,
                accuracy: 95,
                avgResponseTime: 0.7,
                difficulty: "extended",
                improvement: "+7%"
            }
        ],
        "mike.johnson": [
            {
                testType: "stroop",
                date: "2024-12-16",
                score: 74,
                accuracy: 89,
                avgResponseTime: 1.4,
                difficulty: "easy",
                improvement: "+2%"
            },
            {
                testType: "nback",
                date: "2024-12-15",
                score: 68,
                accuracy: 82,
                avgResponseTime: 2.5,
                difficulty: "1-back",
                improvement: "+4%"
            },
            {
                testType: "cpt",
                date: "2024-12-14",
                score: 71,
                accuracy: 86,
                avgResponseTime: 0.9,
                difficulty: "standard",
                improvement: "+1%"
            }
        ]
    },

    // Mock Progress Data (6 months)
    progressData: {
        "john.doe": {
            monthly: [
                { month: "Jul 2024", avgScore: 65, sessions: 8 },
                { month: "Aug 2024", avgScore: 68, sessions: 9 },
                { month: "Sep 2024", avgScore: 72, sessions: 7 },
                { month: "Oct 2024", avgScore: 75, sessions: 8 },
                { month: "Nov 2024", avgScore: 77, sessions: 6 },
                { month: "Dec 2024", avgScore: 78, sessions: 7 }
            ],
            strengths: ["Attention Control", "Processing Speed"],
            improvements: ["Working Memory", "Cognitive Flexibility"]
        },
        "jane.smith": {
            monthly: [
                { month: "Jul 2024", avgScore: 72, sessions: 12 },
                { month: "Aug 2024", avgScore: 76, sessions: 11 },
                { month: "Sep 2024", avgScore: 79, sessions: 10 },
                { month: "Oct 2024", avgScore: 82, sessions: 12 },
                { month: "Nov 2024", avgScore: 84, sessions: 11 },
                { month: "Dec 2024", avgScore: 85, sessions: 11 }
            ],
            strengths: ["Working Memory", "Cognitive Flexibility"],
            improvements: ["Sustained Attention", "Processing Speed"]
        },
        "mike.johnson": {
            monthly: [
                { month: "Jul 2024", avgScore: 68, sessions: 5 },
                { month: "Aug 2024", avgScore: 69, sessions: 6 },
                { month: "Sep 2024", avgScore: 70, sessions: 4 },
                { month: "Oct 2024", avgScore: 71, sessions: 6 },
                { month: "Nov 2024", avgScore: 72, sessions: 5 },
                { month: "Dec 2024", avgScore: 72, sessions: 6 }
            ],
            strengths: ["Processing Speed"],
            improvements: ["Working Memory", "Attention Control", "Sustained Attention"]
        }
    },

    // Test Configurations
    testConfigs: {
        stroop: {
            name: "Color Clash",
            description: "Stroop Test - Measures cognitive inhibition and attention control",
            colors: ["red", "blue", "green", "yellow", "purple", "orange"],
            words: ["RED", "BLUE", "GREEN", "YELLOW", "PURPLE", "ORANGE"],
            trials: 50,
            timeLimit: 30000, // 30 seconds
            difficulties: {
                easy: { congruentRatio: 0.7, timePerTrial: 3000 },
                medium: { congruentRatio: 0.5, timePerTrial: 2000 },
                hard: { congruentRatio: 0.3, timePerTrial: 1500 }
            }
        },
        nback: {
            name: "Memory Chain",
            description: "N-Back Test - Measures working memory and cognitive load capacity",
            stimuli: ["A", "B", "C", "D", "E", "F", "G", "H"],
            trials: 40,
            difficulties: {
                "1-back": { n: 1, timePerTrial: 3000 },
                "2-back": { n: 2, timePerTrial: 3000 },
                "3-back": { n: 3, timePerTrial: 3000 }
            }
        },
        cpt: {
            name: "Focus Guardian",
            description: "Continuous Performance Test - Measures sustained attention",
            targets: ["X"],
            distractors: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            trials: 200,
            targetFrequency: 0.2, // 20% targets
            timePerTrial: 1500,
            difficulties: {
                standard: { duration: 300000 }, // 5 minutes
                extended: { duration: 600000 }  // 10 minutes
            }
        }
    },

    // Personalized Recommendations
    recommendations: {
        "john.doe": [
            {
                type: "exercise",
                title: "Working Memory Boost",
                description: "Practice dual N-back exercises for 10 minutes daily",
                priority: "high"
            },
            {
                type: "tip",
                title: "Attention Focus",
                description: "Try the Pomodoro technique during work tasks",
                priority: "medium"
            }
        ],
        "jane.smith": [
            {
                type: "challenge",
                title: "Advanced Stroop",
                description: "Try the hard difficulty Stroop test to push your limits",
                priority: "medium"
            },
            {
                type: "exercise",
                title: "Sustained Attention",
                description: "Practice extended CPT sessions to improve focus endurance",
                priority: "high"
            }
        ],
        "mike.johnson": [
            {
                type: "exercise",
                title: "Basic Memory Training",
                description: "Start with 1-back exercises and gradually increase difficulty",
                priority: "high"
            },
            {
                type: "tip",
                title: "Regular Practice",
                description: "Consistency is key - aim for 3 sessions per week",
                priority: "high"
            }
        ]
    }
};

// Mock API Functions
const MockAPI = {
    // Simulate login
    login: function(employeeId, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = MockData.users.find(u => u.id === employeeId);
                if (user && password === "demo123") {
                    resolve(user);
                } else {
                    reject(new Error("Invalid credentials"));
                }
            }, 500); // Simulate network delay
        });
    },

    // Get user progress
    getUserProgress: function(userId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MockData.progressData[userId] || null);
            }, 300);
        });
    },

    // Get test results
    getTestResults: function(userId, testType = null) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let results = MockData.testResults[userId] || [];
                if (testType) {
                    results = results.filter(r => r.testType === testType);
                }
                resolve(results);
            }, 300);
        });
    },

    // Save test result
    saveTestResult: function(userId, result) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!MockData.testResults[userId]) {
                    MockData.testResults[userId] = [];
                }
                MockData.testResults[userId].unshift(result);
                resolve(result);
            }, 500);
        });
    },

    // Get recommendations
    getRecommendations: function(userId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MockData.recommendations[userId] || []);
            }, 300);
        });
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MockData, MockAPI };
}