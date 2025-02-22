// import React from 'react';
// import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';

// const Task = ({ id, title }) => {
//     const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

// const style={
//     transition,transform:CSS.Transform.toString(transform)
// };

//     return (
//         <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="flex items-center gap-2 p-3 bg-white shadow-md rounded-lg border border-gray-200">
//             <input type="checkbox" className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400" />
//             <span className="text-gray-700 text-lg font-medium">{title}</span>
//         </div>
//     );
// };

// export default Task;




















import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Task = ({ id, title, category,description }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transition,
        transform: transform ? CSS.Transform.toString(transform) : undefined,
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="flex items-center gap-2 p-3 bg-white shadow-md rounded-lg border border-gray-200"
        >
            <input
                type="checkbox"
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400 pointer-events-none"
            />
            <div className="flex flex-col">
                <span className="text-gray-700 text-lg font-medium">{title}</span>
                <span>{description}</span>
                <span className="text-gray-500 text-sm">{category}</span> {/* Display category */}
            </div>
        </div>
    );
};

export default Task;
