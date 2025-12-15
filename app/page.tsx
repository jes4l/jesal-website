'use client';
import { useState } from 'react';
import Links from './components/links';
import Header from './components/header';
import AboutMe from './components/aboutme';
import EightBall from './components/8ball';
import Guestbook from './components/guestbook';
import Moveable from './components/moveable';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

export default function Home() {
  const [items, setItems] = useState(['links', 'about', '8ball', 'guestbook']);
  const [currentActiveId, setCurrentActiveId] = useState<string | null>(null);
  const [shakeCount, setShakeCount] = useState(0);
  const [lastX, setLastX] = useState<number | null>(null);
  const [lastY, setLastY] = useState<number | null>(null);
  const [directionX, setDirectionX] = useState(0);
  const [directionY, setDirectionY] = useState(0);
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
    if (event.active.id === '8ball') {
      setShakeCount(0);
      setLastX(null);
      setLastY(null);
      setDirectionX(0);
      setDirectionY(0);
    }
  };
  return (
    <div className="min-h-screen bg-[#b8c9d9] text-[#304269] flex flex-row justify-center p-4 space-x-4">
      <main className="flex flex-col gap-4 border-2 border-[#304269] p-4 bg-[#A7C7E7] rounded-none shadow-[8px_8px_0px_rgba(48,66,105,1)] w-5xl z-20 relative">
        <Header />
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragStart={(event) => {
            setCurrentActiveId(event.active.id as string);
            if (event.active.id === '8ball') {
              const x = event.active.rect.current.translated?.left ?? 0;
              const y = event.active.rect.current.translated?.top ?? 0;
              setLastX(x);
              setLastY(y);
              setDirectionX(0);
              setDirectionY(0);
              setShakeCount(0);
            }
          }}
          onDragMove={(event) => {
            if (event.active.id === '8ball') {
              const x = event.active.rect.current.translated?.left ?? 0;
              const y = event.active.rect.current.translated?.top ?? 0;
          
              const deltaX = x - (lastX ?? x);
              const deltaY = y - (lastY ?? y);
          
              const newDirX = deltaX > 0 ? 1 : (deltaX < 0 ? -1 : 0);
              const newDirY = deltaY > 0 ? 1 : (deltaY < 0 ? -1 : 0);
          
              if (Math.abs(deltaX) > 2 && newDirX !== 0 && newDirX !== directionX) {
                setShakeCount((prev) => prev + 1);
              }
              if (Math.abs(deltaY) > 2 && newDirY !== 0 && newDirY !== directionY) {
                setShakeCount((prev) => prev + 1);
              }
          
              setDirectionX(newDirX);
              setDirectionY(newDirY);
              setLastX(x);
              setLastY(y);
            }
          }}
        >
          <div className="flex flex-wrap gap-4 items-start justify-start w-full">
            <SortableContext items={items} strategy={rectSortingStrategy}>
              {items.map((id) => (
                <Moveable key={id} id={id} movable={true}>
                  {id === 'links' ? (
                    <Links />
                  ) : id === 'about' ? (
                    <AboutMe />
                  ) : id === 'guestbook' ? <Guestbook /> : (
                    <EightBall shakeCount={shakeCount} isDragging={currentActiveId === id} directionX={directionX} directionY={directionY} />
                  )}
                </Moveable>
              ))}
            </SortableContext>
          </div>
        </DndContext>
      </main>
      <aside className="flex flex-col space-y-4"></aside>
    </div>
  );
}