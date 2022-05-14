const localStorageItem = 'background-color';
const defaultBackgroundColor = "#232627";
const defaultTextColor = "#ffffff";

window.onload = () => {
    addSubscriptions();
    setSavedPreferences();
}

/**
 * Add Event Listener for click event on buttons.
 */
const addSubscriptions = () => {
    const buttons = ['primary-button', 'secondary-button', 'accent-button'];
    buttons.map(button => {
        const el = document.querySelector(`#${button}`);
        el.addEventListener('click', setColor);
        el.color = window.getComputedStyle(document.documentElement).getPropertyValue(`--${button}`);
    });
    document.querySelector('#reset-button').addEventListener('click', resetPreferences);
}

/**
 * Used to change the background & text colors of the page.
 * @param event
 */
const setColor = (event) => {
    document.querySelector(':root').style.setProperty('--bckg', `hsl(${event.currentTarget.color}, 100%, 50%)`);
    document.querySelector(':root').style.setProperty('--text-color', `hsl(${event.currentTarget.color - 180}, 100%, 50%)`);
    localStorage.setItem(localStorageItem, event.currentTarget.color);
    setResetButtonVisibility('visible');
}

/**
 * Used to extract saved preferences from local storage and set theme.
 */
const setSavedPreferences = () => {
    if (localStorage.getItem(localStorageItem)) {
        // Create an object with event like structure so we can reuse the setColor function.
        const preferredColor = {
            currentTarget: {
                color: localStorage.getItem(localStorageItem)
            }
        };
        setColor(preferredColor);
    }
}

/**
 * Used to remove saved preferences from local storage and reset theme.
 */
const resetPreferences = () => {
    localStorage.removeItem(localStorageItem);
    document.querySelector(':root').style.setProperty('--bckg', `hsl(195, 5%, 15%)`);
    document.querySelector(':root').style.setProperty('--text-color', `hsl(0, 0%, 100%)`);
    setResetButtonVisibility('hidden');
}

/**
 * Set whether the reset button should be visible or not.
 * @param state
 */
const setResetButtonVisibility = (state) => {
    document.querySelector('#reset-button').style.setProperty('visibility', state);
}
