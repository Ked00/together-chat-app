import React from "react";

export default function useToggleState(value) {
    const [toggle, setToggle] = React.useState(value)

    function switchState() {
        setToggle(prev => !prev)
    }

    return [toggle, switchState]
}