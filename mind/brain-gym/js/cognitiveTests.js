// Brain Gym - Cognitive Tests Module
// Main registry for all cognitive tests organized by category

console.log('Cognitive Tests module loaded');

const CognitiveTests = {
    focus: {
        stroop: {
            name: 'Stroop Test',
            nickname: 'Color Clash',
            description: 'Test cognitive inhibition and attention control',
            file: 'tests/focus/stroopTest.js'
        },
        cpt: {
            name: 'Continuous Performance Test',
            nickname: 'Focus Guardian',
            description: 'Maintain sustained attention',
            file: 'tests/focus/cptTest.js'
        }
    },
    
    memory: {
        nback: {
            name: 'N-Back Test',
            nickname: 'Memory Chain',
            description: 'Challenge working memory',
            file: 'tests/memory/nbackTest.js'
        }
    },
    
    logic: {
        // Future logic tests will go here
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CognitiveTests;
}