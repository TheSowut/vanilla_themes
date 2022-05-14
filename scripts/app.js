window.onload = () => {
    addSubscriptions();
    setSavedPreferences();
}

/**
 * Add Event Listener for click event on buttons.
 */
const addSubscriptions = () => {
    const buttons = ["primary-button", "secondary-button", "accent-button"];
    buttons.map(button => {
        const el = document.querySelector(`#${button}`);
        el.addEventListener("click", setColor);
        el.color = window.getComputedStyle(document.documentElement).getPropertyValue(`--${button}`);
    });
}

/**
 * Used to change the background & text colors of the page.
 * @param event
 */
const setColor = (event) => {
    document.documentElement.style.setProperty('--bckg', `hsl(${event.currentTarget.color}, 100%, 50%)`);
    document.querySelector(":root").style.setProperty('--text-color', `hsl(${event.currentTarget.color - 180}, 100%, 50%)`);
    localStorage.setItem('background-color', event.currentTarget.color);
}

/**
 * Used to extract saved preferences from local storage and set theme.
 */
const setSavedPreferences = () => {
    if (localStorage.getItem('background-color')) {
        // Create an object with event like structure so we can reuse the setColor function.
        const preferredColor = {
            currentTarget: {
                color: localStorage.getItem('background-color')
            }
        };
        setColor(preferredColor);
    }
}