import React from "react";

export function useToggleState(value) {
    const [toggle, setToggle] = React.useState(value)

    function switchState() {
        setToggle(prev => !prev)
    }

    return [toggle, switchState]
}