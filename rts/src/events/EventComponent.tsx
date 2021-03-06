import React from 'react';

const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
        console.log(event)
    }

    return (
        <div>
            <input
                onChange={onChange}
            />
            <div draggable onDragStart={onDragStart}>
                Drag me!
            </div>
        </div>
    );
};

export default EventComponent;