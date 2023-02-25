// Function to change the background color of the target element
function changeBackgroundColor() {


    try {
        // Find the element you want to change the background color of 
        var targetElement = document.querySelector('.tr8V5eHsUaIkOYVw7eSG');

        // Get all the colors from the div element
        var activeColor = getComputedStyle(targetElement).getPropertyValue('--lyrics-color-active');
        var inactiveColor = getComputedStyle(targetElement).getPropertyValue('--lyrics-color-inactive');
        var passedColor = getComputedStyle(targetElement).getPropertyValue('--lyrics-color-passed');
        var backgroundColor = getComputedStyle(targetElement).getPropertyValue('--lyrics-color-background');
        var messagingColor = getComputedStyle(targetElement).getPropertyValue('--lyrics-color-messaging');

        // Set the color of the target element to the backgound color
        /*
        var BackgoundColor = getComputedStyle(targetElement).getPropertyValue('--lyrics-color-background');
        targetElement.style.setProperty('--lyrics-color-inactive', BackgoundColor);
        */

        // Find the element you want to change the background color of - 
        var targetDiv = document.querySelector('.L9xhJOJnV2OL5Chm3Jew');

        // Check if there is a lyrics element on the page 

        if (!(activeColor == '#ffffff' && inactiveColor == '#000000' && passedColor == '#000000' && messagingColor == '#ffffff')) {
            // Set the background color of the target element to the messaging color 
            targetDiv.style.backgroundColor = messagingColor;
        }

        // Set the font family of the target element to none - لو عايز تشيل الفونت بتاع الليركس
        /*
        targetElement.style.fontFamily = 'none';
        */

    } catch (e) {
        console.log(e);
    }

}


// Watch for changes to the DOM tree using a MutationObserver
var observer = new MutationObserver(function(mutations) {
    // Check each mutation for added or removed nodes
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
            // If a node was added, run the script to change the background color
            changeBackgroundColor();
        }
    });
});

// Start observing the target node for changes
var targetNode = document.body;
observer.observe(targetNode, { childList: true, subtree: true });