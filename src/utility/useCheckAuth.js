import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function useCheckAuth() {
    const navigate = useNavigate();

    React.useEffect(() => {
        axios.get("auth/verify")
            .then(res => {
                if (res.data === "not authorized") {
                    navigate("/login")
                }
            })
            .catch(err => console.log(err))
    }, [])
}