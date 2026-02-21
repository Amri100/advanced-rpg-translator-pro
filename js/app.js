// RPG Translator Application Logic

class RPGTranslator {
    constructor() {
        this.languages = {};
    }

    addLanguage(name, phrases) {
        this.languages[name] = phrases;
    }

    translate(phrase, fromLang, toLang) {
        const fromPhrases = this.languages[fromLang];
        const toPhrases = this.languages[toLang];

        if (!fromPhrases || !toPhrases) {
            throw new Error('Language not supported');
        }

        const index = fromPhrases.indexOf(phrase);
        return index >= 0 ? toPhrases[index] : 'Translation not found';
    }
}

// Example usage
const translator = new RPGTranslator();
translator.addLanguage('English', ['Hello', 'Goodbye']);
translator.addLanguage('Spanish', ['Hola', 'Adiós']);

console.log(translator.translate('Hello', 'English', 'Spanish')); // Outputs: Hola
