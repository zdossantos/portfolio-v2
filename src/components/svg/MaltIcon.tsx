import React from "react";

export type MaltIconProps = React.SVGAttributes<SVGElement> & { size?: number };

export const MaltIcon = ({ size = 24, ...props }: MaltIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width="100" height="100" rx="16" fill="#FC4B08" />
        <path
            d="M75.7 24.3a8.3 8.3 0 0 0-11.7 0L50 38.3 36 24.3a8.3 8.3 0 0 0-11.7 11.7L38.3 50 24.3 64a8.3 8.3 0 0 0 11.7 11.7L50 61.7l14 14A8.3 8.3 0 0 0 75.7 64L61.7 50l14-14a8.3 8.3 0 0 0 0-11.7z"
            fill="#fff"
        />
    </svg>
);
