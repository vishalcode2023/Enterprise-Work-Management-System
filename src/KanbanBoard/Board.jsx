// src/KanbanBoard/Board.jsx
import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const columnsOrder = ["To Do", "In Progress", "Completed"];

const Board = ({ tasks, setTasks }) => {
  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const sourceTasks = Array.from(tasks[sourceCol]);
    const destTasks = Array.from(tasks[destCol]);

    const [moved] = sourceTasks.splice(source.index, 1);

    if (sourceCol === destCol) {
      sourceTasks.splice(destination.index, 0, moved);
      setTasks({ ...tasks, [sourceCol]: sourceTasks });
    } else {
      destTasks.splice(destination.index, 0, moved);
      setTasks({
        ...tasks,
        [sourceCol]: sourceTasks,
        [destCol]: destTasks
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columnsOrder.map((col) => (
          <Droppable droppableId={col} key={col}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-100 p-4 rounded shadow min-h-[300px]"
              >
                <h3 className="text-lg font-bold mb-3">{col}</h3>
                {tasks[col]?.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-3 rounded shadow mb-2"
                      >
                        <p className="font-medium">{task.title}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
