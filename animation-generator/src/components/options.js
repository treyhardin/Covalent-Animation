var styleOptions = [
    { value: 'fade', text: 'Fade' },
    { value: 'fade-up', text: 'Fade Up' },
    { 
        value: 'skew-up', 
        text: 'Skew Up',
        style: 'transform: translateY(var(--anim-movement)) skew(var(--anim-skew)); opacity: 1;' 
    }
]

var easingOptions = [
    { value: 'ease-out', text: 'Ease Out' },
    { value: 'cubic-bezier(0.25, 1, 0.5, 1)', text: 'Ease Out Quart' }, 
    { value: 'cubic-bezier(0.22, 1, 0.36, 1)', text: 'Ease Out Quint' },
    { value: 'cubic-bezier(0.16, 1, 0.3, 1)', text: 'Ease Out Exponential' }, 
    { value: 'ease-in-out', text: 'Ease In-Out' },
    { value: 'cubic-bezier(0.76, 0, 0.24, 1)', text: 'Ease In-Out Quart' }, 
    { value: 'cubic-bezier(0.83, 0, 0.17, 1)', text: 'Ease In-Out Quint' },
    { value: 'cubic-bezier(0.87, 0, 0.13, 1)', text: 'Ease In-Out Exponential' },
    { value: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)', text: 'Bounce' }
]

export { styleOptions, easingOptions };