// ui-manager.js

/**
 * UI Manager for the RPG Translator
 * Handles theme management and UI updates.
 */

class UIManager {
    constructor() {
        this.theme = 'light'; // Default theme
    }

    /**
     * Sets the current theme.
     * @param {string} newTheme - The new theme to be set (e.g., 'light', 'dark').
     */
    setTheme(newTheme) {
        this.theme = newTheme;
        document.body.setAttribute('data-theme', this.theme);
        console.log(`Theme set to: ${this.theme}`);
    }

    /**
     * Toggles between light and dark themes.
     */
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(this.theme);
    }

    /**
     * Initializes the UI Manager and applies the current theme.
     */
    init() {
        document.body.setAttribute('data-theme', this.theme);
        console.log(`UIManager initialized with theme: ${this.theme}`);
    }
}

// Example usage:
const uiManager = new UIManager();
uiManager.init();