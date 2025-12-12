import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Moveable({ id, children, movable = true }: { id: string; children: React.ReactNode; movable?: boolean }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id, disabled: !movable });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`shrink-0 ${movable ? 'cursor-grab' : ''}`}>
      {children}
    </div>
  );
}