"use client"

import { useEffect, useRef } from "react";
import './FloatingAvatar.scss';

export default function FloatingAvatar(props: any) {
    const avatarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!avatarRef.current) return;
        const avatar = avatarRef.current;
        avatar.style.left = `${props.left}%`;
        avatar.style.marginTop = `${props.marginTop}%`;
    }, [])

    useEffect(() => {
        if (!avatarRef.current) return;


        const startX = -20 + Math.random() * 40;
        const startY = -20 + Math.random() * 40;
        const startRotate = -10 + Math.random() * 20;


        const avatar = avatarRef.current;
        avatar.style.transform = `translate3d(${startX}px, ${startY}px, 0) rotate(${startRotate}deg)`;


        const animateAvatar = () => {
            const newX = -20 + Math.random() * 40;
            const newY = -20 + Math.random() * 40;
            const newRotate = -10 + Math.random() * 20;
            const duration = 2 + Math.random() * 3;

            avatar.style.transition = `transform ${duration}s ease-in-out`;
            avatar.style.transform = `translate3d(${newX}px, ${newY}px, 0) rotate(${newRotate}deg)`;


            setTimeout(animateAvatar, duration * 1000);
        };


        const timeout = setTimeout(animateAvatar, props.delay);

        return () => clearTimeout(timeout);
    }, [props.delay]);

    return (
        <div className={"avatarWrapper"} ref={avatarRef}>
            <img
                src={props.src}
                className={"avatar"}
            />
        </div>
    );
};
