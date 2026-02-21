// Core Translation Engine
function TranslationEngine() {
    this.translations = {};
}

TranslationEngine.prototype.addTranslation = function(key, value) {
    this.translations[key] = value;
};

TranslationEngine.prototype.translate = function(key) {
    return this.translations[key] || key;
};

// Glossary Manager
function GlossaryManager() {
    this.glossary = {};
}

GlossaryManager.prototype.addTerm = function(term, definition) {
    this.glossary[term] = definition;
};

GlossaryManager.prototype.getDefinition = function(term) {
    return this.glossary[term] || 'Term not found';
};

// Export as module
module.exports = { TranslationEngine, GlossaryManager };