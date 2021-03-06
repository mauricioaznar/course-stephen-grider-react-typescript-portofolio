import React from 'react';

interface ChildProps {
    color: string;
    onClick: () => void
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>
                Click me
            </button>
        </div>
    );
};

export const ChildAdFc: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        {color}
        <button onClick={onClick}>
            Click me
        </button>
        {
            children
        }
    </div>
}


ChildAdFc.displayName = ''