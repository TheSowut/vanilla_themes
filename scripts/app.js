window.onload = () => {
    addSubscriptions();
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
}