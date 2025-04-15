document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('grade-form');
    const modal = document.getElementById('grade-modal');
    const gradeOutput = document.getElementById('grade-output');
    const restartButton = document.getElementById('restart-button');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get exam scores from input fields
        const exam1 = parseFloat(document.getElementById('exam1').value);
        const exam2 = parseFloat(document.getElementById('exam2').value);
        const exam3 = parseFloat(document.getElementById('exam3').value);

        // Validate input
        if (isNaN(exam1) || isNaN(exam2) || isNaN(exam3) || exam1 < 0 || exam1 > 100 || exam2 < 0 || exam2 > 100 || exam3 < 0 || exam3 > 100) {
            alert('Please enter valid scores between 0 and 100 for all exams.');
            return;
        }

        // Calculate average score
        const average = ((exam1 + exam2 + exam3) / 3).toFixed(2);

        // Determine final grade
        let grade;
        if (average >= 90) {
            grade = 'A';
        } else if (average >= 80) {
            grade = 'B';
        } else if (average >= 70) {
            grade = 'C';
        } else if (average >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        // Display the result in the modal
        gradeOutput.textContent = `Your average score is ${average}. Your final grade is ${grade}.`;
        modal.classList.remove('hidden');
    });

    // Restart button functionality
    restartButton.addEventListener('click', () => {
        modal.classList.add('hidden'); // Hide the modal
        form.reset(); // Reset the form
    });
});