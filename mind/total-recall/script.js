// Sample quiz data
const quizData = {
    'rich-dad': {
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        category: 'Finance',
        questions: [
            {
                question: "What is the key difference between assets and liabilities according to Kiyosaki?",
                answers: [
                    "Assets put money in your pocket, liabilities take money out",
                    "Assets are expensive, liabilities are cheap",
                    "Assets are physical, liabilities are digital",
                    "There is no real difference"
                ],
                correct: 0,
                explanation: "Assets generate income and put money in your pocket, while liabilities take money out. This is the foundation of building wealth."
            },
            {
                question: "What does the 'Rat Race' represent in the book?",
                answers: [
                    "A competitive business environment",
                    "The cycle of working for money without building wealth",
                    "A type of investment strategy",
                    "A board game mentioned in the book"
                ],
                correct: 1,
                explanation: "The Rat Race represents the endless cycle of working for money, paying expenses, and never building true wealth or financial freedom."
            },
            {
                question: "According to Kiyosaki, what should you do first when you get paid?",
                answers: [
                    "Pay all your bills immediately",
                    "Put money into savings",
                    "Pay yourself first by investing",
                    "Buy something nice for yourself"
                ],
                correct: 2,
                explanation: "Pay yourself first means setting aside money for investments and assets before paying other expenses. This builds wealth over time."
            },
            {
                question: "What are the four quadrants in the Cashflow Quadrant?",
                answers: [
                    "Employee, Self-employed, Business owner, Investor",
                    "Saver, Spender, Investor, Borrower",
                    "Assets, Liabilities, Income, Expenses",
                    "Rich, Poor, Middle class, Wealthy"
                ],
                correct: 0,
                explanation: "The four quadrants are E (Employee), S (Self-employed), B (Business owner), and I (Investor). Moving from left to right increases financial freedom."
            },
            {
                question: "Why does Kiyosaki say 'your house is not an asset'?",
                answers: [
                    "Houses always lose value",
                    "You can't sell your house",
                    "It takes money out of your pocket (mortgage, taxes, maintenance)",
                    "Houses are too expensive"
                ],
                correct: 2,
                explanation: "Your primary residence takes money out of your pocket through mortgage payments, taxes, insurance, and maintenance, making it a liability, not an asset."
            }
        ]
    },
    'thinking-fast': {
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        category: 'Psychology',
        hasLessons: true,
        questions: [
            {
                question: "What is System 1 thinking?",
                answers: [
                    "Slow, deliberate, and logical thinking",
                    "Fast, automatic, and intuitive thinking",
                    "Mathematical and analytical thinking",
                    "Creative and artistic thinking"
                ],
                correct: 1,
                explanation: "System 1 is fast, automatic, intuitive thinking that operates with little effort. It's responsible for quick judgments and gut reactions."
            },
            {
                question: "What is anchoring bias?",
                answers: [
                    "Being too attached to your first idea",
                    "Relying too heavily on the first piece of information encountered",
                    "Staying in one place too long",
                    "Being influenced by your emotions"
                ],
                correct: 1,
                explanation: "Anchoring bias occurs when people rely too heavily on the first piece of information they receive when making decisions."
            }
        ]
    },
    'atomic-habits': {
        title: 'Atomic Habits',
        author: 'James Clear',
        category: 'Self-Improvement',
        questions: [
            {
                question: "What is the 1% rule in habit formation?",
                answers: [
                    "Small improvements compound over time",
                    "You should only change 1% of your habits",
                    "Habits take 1% of your energy",
                    "Success is 1% inspiration, 99% perspiration"
                ],
                correct: 0,
                explanation: "Small 1% improvements compound over time to create remarkable results. Getting 1% better each day leads to being 37 times better in a year."
            },
            {
                question: "What are the four stages of habit formation?",
                answers: [
                    "Cue, Craving, Response, Reward",
                    "Think, Plan, Act, Review",
                    "Start, Continue, Maintain, Master",
                    "Trigger, Action, Result, Repeat"
                ],
                correct: 0,
                explanation: "The four stages are: Cue (trigger), Craving (motivation), Response (action), and Reward (benefit). This forms the habit loop."
            },
            {
                question: "What is habit stacking?",
                answers: [
                    "Doing multiple habits at once",
                    "Linking a new habit to an existing one",
                    "Building habits on top of each other",
                    "Creating a list of habits to do"
                ],
                correct: 1,
                explanation: "Habit stacking means linking a new habit to an existing one using the formula: 'After I [existing habit], I will [new habit].'"
            },
            {
                question: "What makes a habit stick according to Clear?",
                answers: [
                    "Willpower and motivation",
                    "Making it obvious, attractive, easy, and satisfying",
                    "Doing it for 21 days straight",
                    "Having a strong why"
                ],
                correct: 1,
                explanation: "The four laws of behavior change: make it obvious (cue), attractive (craving), easy (response), and satisfying (reward)."
            },
            {
                question: "What is the plateau of latent potential?",
                answers: [
                    "The point where habits become automatic",
                    "When you stop improving at a skill",
                    "The valley of disappointment before breakthrough",
                    "The maximum potential of any habit"
                ],
                correct: 2,
                explanation: "The plateau of latent potential explains why habits seem to make no difference until you cross a critical threshold and breakthrough occurs."
            }
        ]
    },
    'mindset': {
        title: 'Mindset',
        author: 'Carol Dweck',
        category: 'Psychology',
        questions: [
            {
                question: "What is the key difference between fixed and growth mindset?",
                answers: [
                    "Fixed mindset believes abilities are unchangeable, growth mindset believes they can be developed",
                    "Fixed mindset is negative, growth mindset is positive",
                    "Fixed mindset is for adults, growth mindset is for children",
                    "There is no real difference"
                ],
                correct: 0,
                explanation: "Fixed mindset believes abilities are static traits, while growth mindset believes abilities can be developed through effort, learning, and persistence."
            },
            {
                question: "How should you praise children according to Dweck?",
                answers: [
                    "Praise their intelligence and talent",
                    "Praise their effort and process",
                    "Don't praise them at all",
                    "Praise the results they achieve"
                ],
                correct: 1,
                explanation: "Praise the process, effort, and strategies rather than intelligence or talent. This encourages a growth mindset and resilience."
            }
        ]
    },
    'sapiens': {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        category: 'History',
        questions: [
            {
                question: "What are the three major revolutions in human history according to Harari?",
                answers: [
                    "Cognitive, Agricultural, Scientific",
                    "Stone Age, Bronze Age, Iron Age",
                    "Hunting, Farming, Industrial",
                    "Tribal, Feudal, Modern"
                ],
                correct: 0,
                explanation: "The Cognitive Revolution (70,000 years ago), Agricultural Revolution (10,000 years ago), and Scientific Revolution (500 years ago) shaped human history."
            },
            {
                question: "What enabled Homo sapiens to dominate other human species?",
                answers: [
                    "Superior physical strength",
                    "Better tools and weapons",
                    "Ability to cooperate in large numbers through shared myths",
                    "Larger brain size"
                ],
                correct: 2,
                explanation: "The ability to create and believe in shared myths (religions, nations, corporations) allowed sapiens to cooperate in unprecedented numbers."
            }
        ]
    },
    'deep-work': {
        title: 'Deep Work',
        author: 'Cal Newport',
        category: 'Productivity',
        questions: [
            {
                question: "What is deep work?",
                answers: [
                    "Working long hours without breaks",
                    "Professional activities performed in a state of distraction-free concentration",
                    "Physical labor that requires strength",
                    "Working on multiple projects simultaneously"
                ],
                correct: 1,
                explanation: "Deep work is professional activities performed in a state of distraction-free concentration that push cognitive capabilities to their limit."
            },
            {
                question: "What is the opposite of deep work?",
                answers: [
                    "Lazy work",
                    "Shallow work",
                    "Easy work",
                    "Surface work"
                ],
                correct: 1,
                explanation: "Shallow work consists of logistical-style tasks performed while distracted. These efforts tend to not create much new value and are easy to replicate."
            },
            {
                question: "What is the key to developing a deep work habit?",
                answers: [
                    "Working harder",
                    "Eliminating all distractions",
                    "Creating rituals and routines",
                    "Working longer hours"
                ],
                correct: 2,
                explanation: "Developing rituals and routines around deep work helps minimize the friction to transition into and maintain a state of unbroken concentration."
            }
        ]
    },
    'psychology-money': {
        title: 'Psychology of Money',
        author: 'Morgan Housel',
        category: 'Finance',
        questions: [
            {
                question: "What is the most important factor in building wealth according to Housel?",
                answers: [
                    "High income",
                    "Smart investments",
                    "Time and compound interest",
                    "Taking big risks"
                ],
                correct: 2,
                explanation: "Time is the most powerful force in investing. Compound interest and time in the market beat timing the market or having the highest income."
            },
            {
                question: "What does 'enough' mean in the context of money?",
                answers: [
                    "Having more than your neighbors",
                    "Knowing when to stop taking risks that might jeopardize what you have",
                    "Earning a million dollars",
                    "Being able to buy anything you want"
                ],
                correct: 1,
                explanation: "Knowing when you have 'enough' means understanding when to stop taking risks that might jeopardize what you already have for gains you don't need."
            }
        ]
    },
    'power-now': {
        title: 'The Power of Now',
        author: 'Eckhart Tolle',
        category: 'Mindfulness',
        questions: [
            {
                question: "What is the main message of The Power of Now?",
                answers: [
                    "Plan for the future carefully",
                    "Learn from past mistakes",
                    "Focus on the present moment",
                    "Time management is crucial"
                ],
                correct: 2,
                explanation: "The main message is that true peace and happiness can only be found by fully embracing and being present in the current moment."
            },
            {
                question: "What does Tolle call the voice in your head?",
                answers: [
                    "Intuition",
                    "The ego",
                    "Consciousness",
                    "The soul"
                ],
                correct: 1,
                explanation: "Tolle refers to the constant mental chatter and self-talk as the ego, which creates suffering by dwelling on past and future rather than the present."
            }
        ]
    },
    // NEUROSCIENCE BOOKS
    'behave': {
        title: 'Behave',
        author: 'Robert Sapolsky',
        category: 'Neuroscience',
        questions: [
            {
                question: "According to Sapolsky, what determines human behavior?",
                answers: [
                    "Free will alone",
                    "A complex interaction of biology, environment, and experience",
                    "Genetics only",
                    "Social conditioning only"
                ],
                correct: 1,
                explanation: "Sapolsky argues that behavior emerges from the interaction of neurobiological, hormonal, developmental, and environmental factors across multiple timescales."
            },
            {
                question: "What is the role of the prefrontal cortex in behavior?",
                answers: [
                    "Controls basic reflexes",
                    "Regulates emotions and executive decision-making",
                    "Processes sensory information",
                    "Controls motor functions"
                ],
                correct: 1,
                explanation: "The prefrontal cortex is crucial for executive functions, impulse control, moral reasoning, and regulating emotional responses from the limbic system."
            }
        ]
    },
    'predictably-irrational': {
        title: 'Predictably Irrational',
        author: 'Dan Ariely',
        category: 'Neuroscience',
        questions: [
            {
                question: "What does Ariely mean by 'predictably irrational'?",
                answers: [
                    "Humans are completely random in their decisions",
                    "People make systematic, predictable errors in judgment",
                    "Rationality is impossible to achieve",
                    "Emotions always override logic"
                ],
                correct: 1,
                explanation: "Ariely shows that while humans aren't rational, our irrationality follows predictable patterns that can be studied and understood."
            },
            {
                question: "What is the 'anchoring effect' in decision-making?",
                answers: [
                    "People stick to their first decisions",
                    "Initial information heavily influences subsequent judgments",
                    "Decisions are tied to emotional states",
                    "People avoid making difficult choices"
                ],
                correct: 1,
                explanation: "The anchoring effect occurs when people rely too heavily on the first piece of information encountered when making decisions."
            }
        ]
    },
    'brain-that-changes': {
        title: 'The Brain That Changes Itself',
        author: 'Norman Doidge',
        category: 'Neuroscience',
        questions: [
            {
                question: "What is neuroplasticity?",
                answers: [
                    "The brain's ability to change and reorganize throughout life",
                    "The flexibility of brain tissue",
                    "The brain's resistance to damage",
                    "The speed of neural transmission"
                ],
                correct: 0,
                explanation: "Neuroplasticity refers to the brain's remarkable ability to reorganize, form new neural connections, and adapt throughout a person's lifetime."
            },
            {
                question: "According to Doidge, when does neuroplasticity occur?",
                answers: [
                    "Only during childhood",
                    "Only after brain injury",
                    "Throughout our entire lives",
                    "Only during sleep"
                ],
                correct: 2,
                explanation: "Doidge demonstrates that neuroplasticity continues throughout life, allowing the brain to adapt, learn, and recover at any age."
            }
        ]
    },
    // ARTIFICIAL INTELLIGENCE BOOKS
    'life-3-0': {
        title: 'Life 3.0',
        author: 'Max Tegmark',
        category: 'Artificial Intelligence',
        questions: [
            {
                question: "What does Tegmark mean by 'Life 3.0'?",
                answers: [
                    "Biological life",
                    "Cultural life that can design its software",
                    "Life that can design both its software and hardware",
                    "Digital life forms"
                ],
                correct: 2,
                explanation: "Life 3.0 refers to the stage where beings can design both their software (learning/goals) and hardware (physical form), potentially achieved through advanced AI."
            },
            {
                question: "What is the 'control problem' in AI?",
                answers: [
                    "How to control AI development speed",
                    "How to ensure AI systems remain aligned with human values",
                    "How to control AI costs",
                    "How to control AI access"
                ],
                correct: 1,
                explanation: "The control problem refers to the challenge of ensuring that advanced AI systems remain beneficial and aligned with human values and intentions."
            }
        ]
    },
    'human-compatible': {
        title: 'Human Compatible',
        author: 'Stuart Russell',
        category: 'Artificial Intelligence',
        questions: [
            {
                question: "What is Russell's main concern about AI development?",
                answers: [
                    "AI will be too expensive",
                    "AI systems optimizing for the wrong objectives",
                    "AI will be too slow",
                    "AI will replace all jobs"
                ],
                correct: 1,
                explanation: "Russell argues that the main risk is AI systems becoming very good at achieving objectives that are not aligned with human values and preferences."
            },
            {
                question: "What does Russell propose as a solution for AI alignment?",
                answers: [
                    "Stop AI development",
                    "AI systems that are uncertain about human preferences and defer to humans",
                    "Faster AI development",
                    "Government regulation only"
                ],
                correct: 1,
                explanation: "Russell proposes that AI systems should be designed to be uncertain about human preferences and actively seek to learn and defer to human judgment."
            }
        ]
    },
    'prompt-engineering-guide': {
        title: 'The Prompt Engineering Guide',
        author: 'Various Contributors',
        category: 'AI Engineering',
        questions: [
            {
                question: "What is prompt engineering?",
                answers: [
                    "Building AI hardware",
                    "The practice of designing inputs to get desired outputs from AI models",
                    "Programming AI from scratch",
                    "Training AI models"
                ],
                correct: 1,
                explanation: "Prompt engineering is the practice of crafting effective inputs (prompts) to guide AI language models toward producing desired outputs."
            },
            {
                question: "What is 'few-shot prompting'?",
                answers: [
                    "Using very short prompts",
                    "Providing a few examples in the prompt to guide the model",
                    "Asking multiple questions at once",
                    "Using prompts with few words"
                ],
                correct: 1,
                explanation: "Few-shot prompting involves providing a few examples of the desired input-output pattern to help the model understand the task."
            }
        ]
    },
    'generative-ai-handbook': {
        title: 'Generative AI Handbook',
        author: 'Multiple Authors',
        category: 'AI Engineering',
        questions: [
            {
                question: "What distinguishes generative AI from other AI types?",
                answers: [
                    "It's faster than other AI",
                    "It creates new content rather than just analyzing existing data",
                    "It uses less computing power",
                    "It's more accurate than other AI"
                ],
                correct: 1,
                explanation: "Generative AI is designed to create new content (text, images, code, etc.) rather than just classify or analyze existing data."
            },
            {
                question: "What is a 'transformer' in the context of generative AI?",
                answers: [
                    "A robot that changes shape",
                    "A neural network architecture that processes sequences",
                    "A data conversion tool",
                    "A power supply component"
                ],
                correct: 1,
                explanation: "Transformers are neural network architectures that excel at processing sequential data and form the foundation of modern language models like GPT."
            }
        ]
    },
    'agentic-ai-systems': {
        title: 'Agentic AI Systems',
        author: 'Research Collective',
        category: 'AI Engineering',
        questions: [
            {
                question: "What defines an 'agentic' AI system?",
                answers: [
                    "AI that works for government agencies",
                    "AI that can act autonomously to achieve goals",
                    "AI that is very fast",
                    "AI that mimics human agents"
                ],
                correct: 1,
                explanation: "Agentic AI systems are designed to act autonomously, make decisions, and take actions to achieve specified goals with minimal human intervention."
            },
            {
                question: "What is a key challenge in agentic AI development?",
                answers: [
                    "Making AI faster",
                    "Ensuring AI agents remain aligned with intended objectives",
                    "Reducing AI costs",
                    "Making AI more user-friendly"
                ],
                correct: 1,
                explanation: "A major challenge is ensuring that autonomous AI agents pursue their goals in ways that remain aligned with human values and intentions."
            }
        ]
    }
};

// App state
let currentScreen = 'landing';
let currentBook = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userName = '';
let userGoal = '';
let quizStartTime = null;
let timerInterval = null;
let isLoggedIn = false;
let pendingBookSelection = null;
// Removed pendingAction variable - no longer needed

// Login functions
function promptLogin(bookId) {
    if (isLoggedIn) {
        selectBook(bookId);
    } else {
        pendingBookSelection = bookId;
        showScreen('login');
    }
}

function handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const errorElement = document.getElementById('login-error');
    
    if (username === 'user' && password === 'pass') {
        isLoggedIn = true;
        userName = 'Demo User';
        
        // Update profile display
        const userNameElement = document.querySelector('.user-info h2');
        if (userNameElement) {
            userNameElement.textContent = userName;
        }
        
        // Hide error
        errorElement.classList.add('hidden');
        
        // Handle pending book selection
        if (pendingBookSelection) {
            selectBook(pendingBookSelection);
            pendingBookSelection = null;
        } else {
            showScreen('profile');
        }
    } else {
        // Show error
        errorElement.classList.remove('hidden');
    }
}

// Profile setup functions
function selectGoal(goal) {
    userGoal = goal;
    
    // Update button styling
    document.querySelectorAll('.goal-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`[data-goal="${goal}"]`).classList.add('selected');
    
    // Enable complete button if name is also filled
    checkSetupComplete();
}

function checkSetupComplete() {
    const nameInput = document.getElementById('username');
    const completeBtn = document.querySelector('.setup-complete-btn');
    
    if (nameInput && completeBtn) {
        if (nameInput.value.trim() && userGoal) {
            completeBtn.disabled = false;
        } else {
            completeBtn.disabled = true;
        }
    }
}

function completeSetup() {
    const nameInput = document.getElementById('username');
    userName = nameInput.value.trim();
    
    if (userName && userGoal) {
        isLoggedIn = true;
        
        // Update profile display
        const userNameElement = document.querySelector('.user-info h2');
        if (userNameElement) {
            userNameElement.textContent = userName;
        }
        showScreen('profile');
    }
}

// Update timer display
function updateTimer() {
    if (!quizStartTime) return;
    
    const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    const timeElement = document.getElementById('time-elapsed');
    if (timeElement) {
        timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Screen navigation
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    currentScreen = screenId;
    
    // Start timer for quiz
    if (screenId === 'quiz' && !quizStartTime) {
        quizStartTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }
    
    // Clear timer when leaving quiz
    if (screenId !== 'quiz' && timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Simplified book selection - removed lesson functionality
function showBookOptions(bookId) {
    selectBook(bookId);
}

// Book selection
function selectBook(bookId) {
    if (!isLoggedIn) {
        promptLogin(bookId);
        return;
    }
    
    currentBook = bookId;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizStartTime = null;
    
    const book = quizData[bookId];
    
    // Update quiz header
    const bookElement = document.getElementById('current-book');
    const authorElement = document.getElementById('current-author');
    const scoreElement = document.getElementById('current-score');
    const timeElement = document.getElementById('time-elapsed');
    
    if (bookElement) bookElement.textContent = book.title;
    if (authorElement) authorElement.textContent = book.author;
    if (scoreElement) scoreElement.textContent = '0';
    if (timeElement) timeElement.textContent = '0:00';
    
    // Load first question
    loadQuestion();
    showScreen('quiz');
}

// Load question
function loadQuestion() {
    const book = quizData[currentBook];
    const question = book.questions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / book.questions.length) * 100;
    const progressBar = document.getElementById('quiz-progress');
    const questionCounter = document.getElementById('question-counter');
    const currentScoreElement = document.getElementById('current-score');
    
    if (progressBar) progressBar.style.width = progress + '%';
    if (questionCounter) {
        questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${book.questions.length}`;
    }
    if (currentScoreElement) {
        currentScoreElement.textContent = score.toString();
    }
    
    // Update question
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Update answers
    const answersContainer = document.getElementById('answers');
    if (answersContainer) {
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.onclick = () => selectAnswer(index);
            answersContainer.appendChild(button);
        });
    }
    
    // Hide feedback
    const feedback = document.getElementById('feedback');
    if (feedback) {
        feedback.classList.add('hidden');
    }
    selectedAnswer = null;
}

// Select answer
function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = answerIndex;
    const book = quizData[currentBook];
    const question = book.questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-btn');
    
    // Style buttons based on correctness
    buttons.forEach((button, index) => {
        if (index === question.correct) {
            button.classList.add('correct');
        } else if (index === answerIndex && index !== question.correct) {
            button.classList.add('incorrect');
        }
        button.style.pointerEvents = 'none'; // Disable further clicks
    });
    
    // Update score
    if (answerIndex === question.correct) {
        score++;
    }
    
    // Show feedback
    const feedback = document.getElementById('feedback');
    const isCorrect = answerIndex === question.correct;
    
    if (feedback) {
        feedback.innerHTML = `
            <div class="feedback-content">
                <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
                <p><strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong> ${question.explanation}</p>
            </div>
            <button class="next-btn" onclick="nextQuestion()">
                ${currentQuestionIndex < book.questions.length - 1 ? 'Next Question' : 'View Results'}
            </button>
        `;
        
        feedback.classList.remove('hidden');
    }
}

// Next question
function nextQuestion() {
    const book = quizData[currentBook];
    
    if (currentQuestionIndex < book.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    const book = quizData[currentBook];
    const percentage = Math.round((score / book.questions.length) * 100);
    
    // Update results display
    const scoreElement = document.querySelector('.score');
    const percentageElement = document.querySelector('.percentage');
    
    if (scoreElement) scoreElement.textContent = `${score}/${book.questions.length}`;
    if (percentageElement) percentageElement.textContent = `${percentage}%`;
    
    // Show appropriate badge based on performance
    const badgeElement = document.querySelector('.badge-earned');
    if (badgeElement) {
        if (percentage >= 80) {
            badgeElement.innerHTML = '<span class="badge-icon"><i class="fas fa-trophy"></i></span><span>New Badge: Master Learner!</span>';
        } else if (percentage >= 60) {
            badgeElement.innerHTML = '<span class="badge-icon"><i class="fas fa-brain"></i></span><span>New Badge: Concept Grasper!</span>';
        } else {
            badgeElement.innerHTML = '<span class="badge-icon"><i class="fas fa-book"></i></span><span>Keep Learning - You\'re Improving!</span>';
        }
    }
    
    showScreen('results');
}

// Quiz quit functions
function confirmQuitQuiz() {
    const modal = document.getElementById('quit-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeQuitModal() {
    const modal = document.getElementById('quit-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function quitQuiz() {
    // Clear timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Reset quiz state
    currentBook = null;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizStartTime = null;
    
    // Close modal and go to landing page (homepage)
    closeQuitModal();
    showScreen('landing');
}

// Leaderboard tabs
function showLeaderboard(type) {
    // Update tab styling
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // In a real app, this would fetch different data
    // For demo purposes, we'll just show the same data
}

// Daily tips for learning
const learningTips = [
    "Before starting a quiz, spend 30 seconds trying to recall what you remember about the book. This 'pre-test' primes your brain for better learning.",
    "Don't just memorize facts - try to connect new concepts to things you already know. This creates stronger neural pathways.",
    "Take breaks between study sessions. Your brain consolidates memories during rest periods, making learning more effective.",
    "Explain concepts out loud as if teaching someone else. This 'Feynman Technique' reveals gaps in your understanding.",
    "Focus on your mistakes - they're learning opportunities. Spend extra time understanding why you got something wrong.",
    "Mix up your practice sessions. Study different books or topics in the same session for better retention.",
    "Set small, achievable daily goals. Consistency beats intensity when it comes to long-term learning."
];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Add name input listener
    const nameInput = document.getElementById('username');
    if (nameInput) {
        nameInput.addEventListener('input', checkSetupComplete);
    }
    
    // Add login form listeners
    const loginUsername = document.getElementById('login-username');
    const loginPassword = document.getElementById('login-password');
    
    if (loginUsername && loginPassword) {
        // Allow Enter key to submit login
        [loginUsername, loginPassword].forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleLogin();
                }
            });
        });
    }
    
    // Set daily tip
    setDailyTip();
    
    // Add some interactive animations
    document.querySelectorAll('.book-card, .book-card-home').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('quit-modal');
        if (modal && e.target === modal) {
            closeQuitModal();
        }
    });
    
    // Add typing effect to landing page (for demo wow factor)
    const title = document.querySelector('.header-content h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});

// Lesson system data
const lessonData = {
    1: {
        title: "The Characters of the Story",
        duration: "15 min read",
        objectives: [
            "Understand the difference between System 1 and System 2 thinking",
            "Recognize examples of automatic vs. controlled mental processes",
            "Apply the two-system framework to everyday decisions"
        ],
        content: `
            <h3>Introduction to Two Systems</h3>
            <p>Daniel Kahneman introduces us to the two systems that drive the way we think:</p>
            
            <div class="concept-box">
                <h4>System 1: Fast Thinking</h4>
                <ul>
                    <li><strong>Automatic:</strong> Operates without conscious effort</li>
                    <li><strong>Intuitive:</strong> Based on learned associations and emotions</li>
                    <li><strong>Fast:</strong> Provides immediate impressions and feelings</li>
                    <li><strong>Examples:</strong> Recognizing faces, simple math (2+2), reading words</li>
                </ul>
            </div>

            <div class="concept-box">
                <h4>System 2: Slow Thinking</h4>
                <ul>
                    <li><strong>Effortful:</strong> Requires attention and conscious control</li>
                    <li><strong>Logical:</strong> Follows rules and weighs evidence</li>
                    <li><strong>Slow:</strong> Takes time to process complex information</li>
                    <li><strong>Examples:</strong> Complex math (17 × 24), parking in a narrow space, comparing products</li>
                </ul>
            </div>

            <h3>The Interaction Between Systems</h3>
            <p>These systems don't work in isolation. System 1 continuously generates impressions, intuitions, and feelings that become the main sources of the explicit beliefs and deliberate choices of System 2.</p>

            <p>System 2 normally accepts the suggestions of System 1 with little modification. Only when System 1 runs into difficulty does System 2 become more fully engaged.</p>

            <div class="example-box">
                <h4>Real-World Example</h4>
                <p>When you see the equation "2 + 2 = ?", System 1 automatically provides the answer "4" without any conscious effort. But when you see "17 × 24 = ?", System 1 cannot provide an immediate answer, so System 2 must take over with deliberate calculation.</p>
            </div>
        `,
        homework: [
            {
                type: "reflection",
                title: "System Recognition Exercise",
                description: "For the next day, keep a small notebook and record 5 examples each of System 1 and System 2 thinking you observe in yourself.",
                example: "System 1: Automatically knowing your friend's voice on the phone. System 2: Calculating the tip at a restaurant."
            },
            {
                type: "practice",
                title: "Stroop Effect Experiment",
                description: "Try the Stroop test online (search 'Stroop test'). Notice how System 1 automatically reads words while System 2 tries to name colors. Reflect on this conflict.",
                example: "When you see the word 'BLUE' written in red ink, System 1 wants to say 'blue' while System 2 knows the correct answer is 'red'."
            },
            {
                type: "application",
                title: "Decision Analysis",
                description: "Think of a recent important decision you made. Identify which parts were System 1 (gut feelings, immediate reactions) and which were System 2 (careful analysis, pros/cons lists).",
                example: "Choosing a restaurant: System 1 might be attracted to familiar cuisine, while System 2 considers price, location, and reviews."
            }
        ]
    }
};

let currentLessonId = 1;

// Open a specific lesson
function openLesson(lessonId) {
    if (lessonId > 1 && !isLessonCompleted(lessonId - 1)) {
        showLockedMessage();
        return;
    }
    
    currentLessonId = lessonId;
    loadLessonContent(lessonId);
    showScreen('lesson-detail');
}

// Load lesson content
function loadLessonContent(lessonId) {
    const lesson = lessonData[lessonId];
    if (!lesson) return;
    
    // Update lesson header
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-duration').textContent = lesson.duration;
    document.getElementById('lesson-progress-text').textContent = `Lesson ${lessonId} of 5`;
    document.getElementById('lesson-progress-bar').style.width = `${(lessonId / 5) * 100}%`;
    
    // Update objectives
    const objectivesList = document.getElementById('lesson-objectives');
    objectivesList.innerHTML = lesson.objectives.map(obj => `<li>${obj}</li>`).join('');
    
    // Update content
    document.getElementById('lesson-content').innerHTML = lesson.content;
    
    // Update homework
    const homeworkContainer = document.getElementById('homework-exercises');
    homeworkContainer.innerHTML = lesson.homework.map((hw, index) => `
        <div class="homework-item">
            <div class="homework-header">
                <span class="homework-number">${index + 1}</span>
                <h4>${hw.title}</h4>
                <span class="homework-type">${hw.type}</span>
            </div>
            <p class="homework-description">${hw.description}</p>
            <div class="homework-example">
                <strong>Example:</strong> ${hw.example}
            </div>
        </div>
    `).join('');
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');
    
    prevBtn.disabled = lessonId === 1;
    nextBtn.disabled = lessonId === 5;
    
    if (lessonId === 1) {
        prevBtn.style.opacity = '0.5';
    } else {
        prevBtn.style.opacity = '1';
    }
}

// Navigate between lessons
function navigateLesson(direction) {
    const newLessonId = currentLessonId + direction;
    if (newLessonId >= 1 && newLessonId <= 5) {
        openLesson(newLessonId);
    }
}

// Complete a lesson
function completeLesson() {
    // Mark lesson as completed in localStorage
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completedLessons.includes(currentLessonId)) {
        completedLessons.push(currentLessonId);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    }
    
    // Show completion message
    alert(`Lesson ${currentLessonId} completed! 🎉\n\nDon't forget to complete the practice exercises to reinforce your learning.`);
    
    // Navigate to next lesson or back to lessons list
    if (currentLessonId < 5) {
        openLesson(currentLessonId + 1);
    } else {
        showScreen('lessons');
    }
}

// Check if lesson is completed
function isLessonCompleted(lessonId) {
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    return completedLessons.includes(lessonId);
}

// Simplified homepage book selection
function showBookOptionsHome(bookId) {
    promptLogin(bookId);
}

// Show locked message
function showLockedMessage() {
    alert('Complete the previous lesson to unlock this one! 🔒');
}

// Set daily learning tip
function setDailyTip() {
    const tipElement = document.getElementById('daily-tip-content');
    if (tipElement) {
        // Use date to ensure same tip per day
        const today = new Date().getDate();
        const tipIndex = today % learningTips.length;
        const tip = learningTips[tipIndex];
        
        tipElement.innerHTML = `<p><strong>Active Recall in Action:</strong> ${tip}</p>`;
    }
}

// Add some demo data updates for portfolio effect
setInterval(() => {
    // Randomly update the stats to show "live" activity
    const stats = document.querySelectorAll('.stats-preview .number');
    if (stats.length > 0 && currentScreen === 'landing') {
        stats[0].textContent = (2847 + Math.floor(Math.random() * 10)).toLocaleString();
        stats[1].textContent = (156 + Math.floor(Math.random() * 5)).toString();
    }
}, 5000);