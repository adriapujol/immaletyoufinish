const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleInputs() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(suffix);
}

inputs.forEach(input => input.addEventListener('change', handleInputs));
inputs.forEach(input => input.addEventListener('mousemove', handleInputs));