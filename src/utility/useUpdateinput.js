import React from "react";

export default function useUpdateinput(obj) {
    const [target, setTarget] = React.useState(obj)

    function changeInput(e) {
        setTarget(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    
    return [target, changeInput]
}