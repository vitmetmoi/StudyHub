"use client"

import { useEffect, useRef } from "react";
import './FloatingAvatar.scss';

const FloatingAvatar = (src: string, delay: number) => {
    const avatarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!avatarRef.current) return;

        // Vị trí ban đầu ngẫu nhiên
        const startX = -20 + Math.random() * 40;
        const startY = -20 + Math.random() * 40;
        const startRotate = -10 + Math.random() * 20;

        // Animation với GSAP hoặc chỉ CSS
        const avatar = avatarRef.current;
        avatar.style.transform = `translate3d(${startX}px, ${startY}px, 0) rotate(${startRotate}deg)`;

        // Tạo animation ngẫu nhiên
        const animateAvatar = () => {
            const newX = -20 + Math.random() * 40;
            const newY = -20 + Math.random() * 40;
            const newRotate = -10 + Math.random() * 20;
            const duration = 2 + Math.random() * 3;

            avatar.style.transition = `transform ${duration}s ease-in-out`;
            avatar.style.transform = `translate3d(${newX}px, ${newY}px, 0) rotate(${newRotate}deg)`;

            // Tiếp tục animation
            setTimeout(animateAvatar, duration * 1000);
        };

        // Bắt đầu animation sau một delay
        const timeout = setTimeout(animateAvatar, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    return (
        <div className={"avatarWrapper"} ref={avatarRef}>
            <img
                src={src}
                className={"avatar"}
            />
        </div>
    );
};


export default FloatingAvatar