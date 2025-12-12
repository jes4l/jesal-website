import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

interface DraggableProps {
  dragListeners?: any;
}

export default function Moveable({ id, children, movable = true }: { id: string; children: React.ReactElement<DraggableProps>; movable?: boolean }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id, disabled: !movable });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} className="shrink-0 cursor-default">
      {React.cloneElement(children, { dragListeners: movable ? listeners : undefined })}
    </div>
  );
}