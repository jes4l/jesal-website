'use client';
import { useState } from 'react';
import Links from './components/links';
import Header from './components/header';
import AboutMe from './components/aboutme';
import Moveable from './components/moveable';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

export default function Home() {
  const [items, setItems] = useState(['links', 'about']);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.indexOf(active.id);
        const newIndex = prevItems.indexOf(over.id);
        const newItems = [...prevItems];
        newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, active.id);
        return newItems;
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#D9E8F5] text-[#304269] flex flex-row justify-center p-4 space-x-4">
      {}
      <main className="flex flex-col gap-4 border border-[#304269] p-4 bg-white rounded-xl shadow-lg w-5xl">
        <Header />
        
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          {}
          <div className="flex flex-wrap gap-4 items-start justify-start w-full">
            <SortableContext items={items} strategy={rectSortingStrategy}>
              {items.map((id) => (
                <Moveable key={id} id={id} movable={true}>
                  {id === 'links' ? <Links /> : <AboutMe />}
                </Moveable>
              ))}
            </SortableContext>
          </div>
        </DndContext>
      </main>
      
      <aside className="flex flex-col space-y-4">
        {}
      </aside>
    </div>
  );
}