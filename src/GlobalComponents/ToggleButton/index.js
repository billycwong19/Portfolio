import React from "react";
import { ToggleContainer, Toggler } from './ToggleButton.style';

export default function ToggleButton({ toggle, isChecked }) {
    return (
        <ToggleContainer>
            <input type='checkbox' onClick={() => toggle()} checked={isChecked()} />
            <Toggler></Toggler>
        </ToggleContainer>
    )
}