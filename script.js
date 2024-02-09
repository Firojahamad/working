document.addEventListener("DOMContentLoaded", function () {
    updateProgressBar();
});

function updateProgressBar() {
    const userProgress = localStorage.getItem('userProgress');
    const progressBar = document.getElementById('progress-bar');
    
    if (userProgress) {
        const progressPercentage = parseInt(userProgress, 10);
        progressBar.style.width = `${progressPercentage}%`;
    }
}

function markUnitComplete(unitNumber) {
    const userProgress = localStorage.getItem('userProgress') || 0;
    const updatedProgress = Math.min(parseInt(userProgress, 10) + 10, 100);

    localStorage.setItem('userProgress', updatedProgress);
    updateProgressBar();

    // Additional actions when a unit is completed
    console.log(`Unit ${unitNumber} marked as complete.`);
}
