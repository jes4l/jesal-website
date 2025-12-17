'use client';
import { useState } from 'react';
import Header from '../components/header';
import LaserMusicMachine from '../components/projects/lasermusicmachine';
import AslCore from '../components/projects/aslcore';
import CaveWizard from '../components/projects/cavewizard';
import NirSync from '../components/projects/nirsync';
import ProjectorTshirtMachine from '../components/projects/projectortshirtmachine';
import GeneticTurtle from '../components/projects/geneticturtle';
import Moveable from '../components/moveable';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

export default function Projects() {
  const [items, setItems] = useState(['lasermusicmachine', 'aslcore', 'cavewizard', 'nirsync', 'projectortshirtmachine', 'geneticturtle']);
  const [currentActiveId, setCurrentActiveId] = useState<string | null>(null);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.indexOf(active.id);
        const newIndex = prevItems.indexOf(over.id);
        const newItems = [...prevItems];
        newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, active.id);
        return newItems;
      });
    }
    setCurrentActiveId(null);
  };

  const getComponent = (id: string) => {
    switch (id) {
      case 'lasermusicmachine':
        return LaserMusicMachine;
      case 'aslcore':
        return AslCore;
      case 'cavewizard':
        return CaveWizard;
      case 'nirsync':
        return NirSync;
      case 'projectortshirtmachine':
        return ProjectorTshirtMachine;
      case 'geneticturtle':
        return GeneticTurtle;
      default:
        return () => null;
    }
  };

  return (
    <div className="min-h-screen bg-[#b8c9d9] text-[#304269] flex flex-row justify-center p-4 space-x-4">
      <main className="flex flex-col gap-4 border-2 border-[#304269] p-4 bg-[#A7C7E7] rounded-none shadow-[8px_8px_0px_rgba(48,66,105,1)] w-5xl z-20 relative">
        <Header title="Projects Hall Of Fame" />
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragStart={(event) => {
            setCurrentActiveId(event.active.id as string);
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center align-items-start w-full">
            <SortableContext items={items} strategy={rectSortingStrategy}>
              {items.map((id) => {
                const Component = getComponent(id);
                return (
                  <Moveable key={id} id={id} movable={false}>
                    <Component />
                  </Moveable>
                );
              })}
            </SortableContext>
          </div>
        </DndContext>
      </main>
      <aside className="flex flex-col space-y-4"></aside>
    </div>
  );
}