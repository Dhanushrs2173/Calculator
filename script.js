function redirectToPage(formula) {
    window.location.href = `formula.html?formula=${formula}`;
}

const formulaParams = new URLSearchParams(window.location.search);
    const formula = formulaParams.get('formula');

    const formulaForm = document.getElementById('formulaForm');
    const resultDiv = document.getElementById('result');
    const resultValueSpan = document.getElementById('resultValue');

    formulaForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const input1 = parseFloat(document.getElementById('input1').value);
        const input2 = parseFloat(document.getElementById('input2').value);

        let result;

        switch (formula) {
            case 'rectangle':
                result = input1 * input2; // Calculate the result for the area of rectangle
                break;
            case 'triangle':
                result = 0.5 * input1 * input2; // Calculate the result for the area of triangle
                break;
            case 'circle':
                result = Math.PI * input1 * input1; // Calculate the result for the area of circle
                break;
            case 'quadratic':
                // Assuming inputs are a, b, and c
                result = solveQuadratic(input1, input2, parseFloat(document.getElementById('input3').value));
                break;
            case 'trigonometry':
                // Assuming inputs are angle in degrees
                result = calculateTrigonometricRatios(input1);
                break;

            default:
                result = 'Invalid formula';
        }

        resultValueSpan.textContent = result;
        resultDiv.style.backgroundColor = '#3498db'; // Change color to blue (you can use any valid color code)
    });

    function changeColor() {
        resultDiv.style.backgroundColor = '#e74c3c'; // Change color to red when result is clicked
    }

    // Function to solve quadratic equation
    function solveQuadratic(a, b, c) {
        const discriminant = b ** 2 - 4 * a * c;

        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return `Roots: ${root1}, ${root2}`;
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            return `Double root: ${root}`;
        } else {
            return 'Complex roots';
        }
    }

    // Function to calculate trigonometric ratios
    function calculateTrigonometricRatios(angle) {
        const radianAngle = (angle * Math.PI) / 180;
        return {
            sine: Math.sin(radianAngle),
            cosine: Math.cos(radianAngle),
            tangent: Math.tan(radianAngle),
        };
    }


