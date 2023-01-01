import React from "react";

export default async function useGetCamera() {
    const host = await document.querySelector("video#host");
    const userMedia = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    host.srcObject = userMedia
    
    return userMedia
}