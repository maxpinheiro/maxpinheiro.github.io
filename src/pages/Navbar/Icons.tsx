import React from "react";

export const MLogo: React.FC<{color: string}> = ({color}) => {
    const foreColor = color.includes("white") ? "#FFFFFF" : "#000000";
    const backColor = color.includes ("white") ? "#BBBBBB" : "#222222";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.89 24" preserveAspectRatio="xMidYMid" style={{height: 20}}>
            <polygon fill={backColor} points="0.69 23.7 0.69 0.48 5.15 0.48 14.08 17.45 22.72 0.77 26.89 0.77 26.89 23.11 23.02 23.11 22.72 4.94 13.79 24 12.6 24 3.07 5.54 3.37 23.7 0.69 23.7"/>
            <polygon fill={foreColor} points="0 23.23 0 0 4.47 0 13.4 16.97 22.04 0.3 26.2 0.3 26.2 22.63 22.33 22.63 22.04 4.47 13.1 23.52 11.91 23.52 2.38 5.06 2.68 23.23 0 23.23"/>
        </svg>
    );
}

export const CloseIcon: React.FC<{color: string}> = ({color}) => (
    <div className="close-icon">
        <div className={`close-bar ${color}`} />
        <div className={`close-bar ${color}`} />
    </div>
);
