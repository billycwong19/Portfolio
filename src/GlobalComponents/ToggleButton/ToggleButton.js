import React from "react";
import { ToggleContainer, Toggler } from './ToggleButton.style';

export default function ToggleButton({ toggle }) {
    return (
        <ToggleContainer>
            <input type='checkbox' onClick={() => toggle()} />
            <Toggler></Toggler>
        </ToggleContainer>
    )
}