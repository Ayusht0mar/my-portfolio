"use client"

import React, {
  Dispatch,
  SetStateAction,
  useState,
  DragEvent,
  FormEvent,
} from "react";
import { motion } from "framer-motion";
import { Flame, GripVertical, Plus, Trash } from "lucide-react";

export const KanbanBoard = () => {
  return (
    <div className="bg-zinc-50 w-[90vw] mx-auto p-8 mt-5 border rounded">
      <h1 className="font-semibold text-2xl mb-4">Kanban Board</h1>
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="grid grid-cols-4 gap-2">
      {COLUMNS.map((column) => (
        <Column
          key={column.id}
          title={column.title}
          column={column.id}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

type ColumnProps = {
  title: string;
  cards: CardType[];
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

const Column = ({
  title,
  cards,
  column,
  setCards,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: DragEvent, card: CardType) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(
        `[data-column="${column}"]`
      ) as unknown as HTMLElement[]
    );
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className={`border rounded-lg p-2 ${active ? "bg-white" : "bg-white"}`}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[#171717]">{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className="h-full w-full transition-colors"
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

interface CardProps extends CardType {
  handleDragStart: (e: DragEvent, card: CardType) => void;
}

const Card = ({ title, id, column, handleDragStart }: CardProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="false"
        className="relative group rounded border bg-zinc-50 p-3 active:cursor-grabbing "
      >
        <p>{title}</p>
        <motion.div 
                draggable="true"
                onDragStart={(e) => handleDragStart(e as unknown as DragEvent, { title, id, column })}
                className="cursor-grab absolute right-0 top-2 hidden group-hover:block text-zinc-400"
        >
          <div className="p-1 pr-2">
            <GripVertical/> 
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-zinc-500 opacity-0"
    />
  );
};

const BurnBarrel = ({
  setCards,
}: {
  setCards: Dispatch<SetStateAction<CardType[]>>;
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-4 grid h-16 col-span-4 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : " bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <Flame className="animate-bounce" /> : <Trash />}
    </div>
  );
};

type AddCardProps = {
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

const AddCard = ({ column, setCards }: AddCardProps) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border  bg-zinc-300 p-3 text-sm text-neutral-600 placeholder-neutral-600 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400  transition-colors hover:text-neutral-800"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 border transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <Plus size={14} />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center justify-center gap-1.5 px-3 py-1.5 text-neutral-400  border rounded transition-colors"
        >
          <Plus size={16}/>
          <span>Add card</span>
        </motion.button>
      )}
    </>
  );
};

const COLUMNS = [
  { id: "backlog", title: "Backlog",},
  { id: "sunday", title: "Sunday"},
  { id: "monday", title: "Monday"},
  { id: "tuesday", title: "Tuesday" },
  { id: "wednesday", title: "Wednesday"},
  { id: "thursday", title: "Thusrday" },
  { id: "friday", title: "Friday" },
  { id: "saturday", title: "Satuday"},
] as const;

type ColumnType = "backlog" | "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" ;

type CardType = {
  title: string;
  id: string;
  column: ColumnType;
};

const DEFAULT_CARDS: CardType[] = [
  // BACKLOG
  { title: "Light stretching or relaxation", id: "1", column: "backlog" },
  { title: "Family/friends time or relax", id: "2", column: "backlog" },
  { title: "Enjoy a hobby or personal time", id: "3", column: "backlog" },
  { title: "Dinner with family or friends", id: "4", column: "backlog" },
 
  // SUNDAY
  {
    title: "Review calendar and prioritize tasks",
    id: "5",
    column: "sunday",
  },
  { title: "Respond to emails and messages", id: "6", column: "sunday" },
  { title: "Organize workspace", id: "7", column: "sunday" },

  // DOING
  {
    title: "Research and brainstorm new ideas",
    id: "8",
    column: "monday",
  },
  { title: "Review important reports or documents", id: "9", column: "monday" },
  // DONE
  {
    title: "Check-in with colleagues or clients",
    id: "10",
    column: "tuesday",
  },
];