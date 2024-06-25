import { useState } from "react";

export default function Slider({ sliderValue, onSliderChange, min, max, step }) {
    const [localSliderValue, setLocalSliderValue] = useState(sliderValue);

    const handleChange = (event) => {
        const newValue = parseFloat(event.target.value);
        setLocalSliderValue(newValue);
        onSliderChange(newValue);
    };

    return (
        <input
            className="sliderComponent"
            type="range"
            min={min}
            max={max}
            step={step}
            value={localSliderValue}
            onChange={handleChange}
        />
    );
}
