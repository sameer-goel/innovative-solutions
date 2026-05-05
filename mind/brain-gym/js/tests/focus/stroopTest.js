// Stroop Test - Focus Category
// Tests cognitive inhibition and attention control

class StroopTest {
    constructor() {
        this.colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        this.colorWords = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE', 'ORANGE'];
        this.currentTrial = 0;
        this.totalTrials = 20;
        this.score = 0;
        this.startTime = 0;
        this.testStartTime = 0;
        this.timerInterval = null;
        this.responses = [];
        this.currentWord = '';
        this.currentColor = '';
        this.lastColor = '';
        this.isRunning = false;
    }

    start() {
        this.currentTrial = 0;
        this.score = 0;
        this.responses = [];
        this.lastColor = '';
        this.isRunning = true;
        this.showInstructions();
    }

    showInstructions() {
        const testArea = document.getElementById('test-area');
        testArea.innerHTML = `
            <div class="stroop-container">
                <h2>Stroop Test - "Color Clash"</h2>
                <div class="instructions">
                    <p>You will see color words displayed in different colors.</p>
                    <p><strong>Click the button that matches the COLOR of the text, not the word itself.</strong></p>
                    <p>For example: If you see <span style="color: red;">BLUE</span>, click RED (the color of the text).</p>
                    <p>Work as quickly and accurately as possible!</p>
                </div>
                <div class="test-settings">
                    <label for="question-count">Number of Questions:</label>
                    <input type="range" id="question-count" min="5" max="20" step="5" value="20">
                    <span id="question-display">20</span>
                </div>
                <button class="start-test-btn" onclick="stroopTest.startTest()">Start Test</button>
            </div>
        `;
        
        // Setup slider event listener
        const slider = document.getElementById('question-count');
        const display = document.getElementById('question-display');
        if (slider && display) {
            slider.addEventListener('input', (e) => {
                display.textContent = e.target.value;
            });
        }
    }

    startTest() {
        const questionCount = document.getElementById('question-count');
        if (questionCount) {
            this.totalTrials = parseInt(questionCount.value);
        }
        this.testStartTime = Date.now();
        this.startTimer();
        this.nextTrial();
    }

    nextTrial() {
        if (this.currentTrial >= this.totalTrials) {
            this.endTest();
            return;
        }

        this.currentTrial++;
        this.generateTrial();
        this.startTime = Date.now();
        this.displayTrial();
    }

    generateTrial() {
        const wordIndex = Math.floor(Math.random() * this.colorWords.length);
        let colorIndex;
        
        // Ensure the color is different from the last one
        do {
            colorIndex = Math.floor(Math.random() * this.colors.length);
        } while (this.colors[colorIndex] === this.lastColor && this.colors.length > 1);
        
        this.currentWord = this.colorWords[wordIndex];
        this.currentColor = this.colors[colorIndex];
        this.lastColor = this.currentColor;
    }

    displayTrial() {
        const testArea = document.getElementById('test-area');
        const elapsed = Math.floor((Date.now() - this.testStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        testArea.innerHTML = `
            <div class="stroop-container">
                <div class="trial-info">
                    <span>Trial ${this.currentTrial}/${this.totalTrials}</span>
                    <span id="test-timer">${timeDisplay}</span>
                    <span>Score: ${this.score}/${this.currentTrial - 1}</span>
                </div>
                <div class="stroop-word" style="color: ${this.currentColor}; font-size: 48px; font-weight: bold; margin: 40px 0;">
                    ${this.currentWord}
                </div>
                <div class="color-buttons">
                    ${this.colors.map(color => 
                        `<button class="color-btn" style="background-color: ${color};" onclick="stroopTest.selectColor('${color}')">${color.toUpperCase()}</button>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    selectColor(selectedColor) {
        if (!this.isRunning) return;
        
        const responseTime = Date.now() - this.startTime;
        const isCorrect = selectedColor === this.currentColor;
        
        if (isCorrect) {
            this.score++;
        }

        this.responses.push({
            trial: this.currentTrial,
            word: this.currentWord,
            color: this.currentColor,
            selected: selectedColor,
            correct: isCorrect,
            responseTime: responseTime
        });

        setTimeout(() => this.nextTrial(), 500);
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.testStartTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            const timerElement = document.getElementById('test-timer');
            if (timerElement) {
                timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    endTest() {
        this.isRunning = false;
        this.stopTimer();
        const accuracy = Math.round((this.score / this.totalTrials) * 100);
        const avgResponseTime = Math.round(this.responses.reduce((sum, r) => sum + r.responseTime, 0) / this.responses.length);
        const totalTime = Math.floor((Date.now() - this.testStartTime) / 1000);
        
        const testArea = document.getElementById('test-area');
        testArea.innerHTML = `
            <div class="stroop-container">
                <h2>Test Complete!</h2>
                <div class="results">
                    <div class="result-item">
                        <span class="result-label">Accuracy:</span>
                        <span class="result-value">${accuracy}%</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Correct Answers:</span>
                        <span class="result-value">${this.score}/${this.totalTrials}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Average Response Time:</span>
                        <span class="result-value">${avgResponseTime}ms</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Total Time:</span>
                        <span class="result-value">${Math.floor(totalTime / 60)}:${(totalTime % 60).toString().padStart(2, '0')}</span>
                    </div>
                    <div class="performance-rating">
                        <h3>Performance: ${this.getPerformanceRating(accuracy, avgResponseTime)}</h3>
                    </div>
                </div>
                <button class="restart-btn" onclick="stroopTest.start()">Try Again</button>
                <button class="back-btn" onclick="showHomepage()">Back to Categories</button>
            </div>
        `;
    }

    getPerformanceRating(accuracy, avgTime) {
        if (accuracy === 100 && avgTime < 1000) return "Perfect! 🏆";
        if (accuracy >= 95 && avgTime < 1200) return "Excellent! 🏆";
        if (accuracy >= 85 && avgTime < 1500) return "Very Good! 🎯";
        if (accuracy >= 75 && avgTime < 2000) return "Good! 👍";
        if (accuracy >= 60 && avgTime < 2500) return "Fair - Keep Practicing! 📈";
        if (accuracy >= 60) return "Slow but Accurate! ⏰";
        return "Needs Improvement - Try Again! 💪";
    }
}

// Global instance for easy access
const stroopTest = new StroopTest();