import TaskCard from "./TaskCard";
import ClipboardIcon from "./icons/ClipboardIcon";
import type { Task } from "@/lib/types";

type Props = { tasks: Task[] };

export default function TaskList({ tasks }: Props) {
  const empty = tasks.length === 0;

  if (empty) {
    return (
      <div className="mt-16 text-center text-gray-500">
        <ClipboardIcon className="mx-auto mb-4" />
        <p className="font-bold">You don't have any tasks registered yet.</p>
        <p>Create tasks and organize your to-do items.</p>
      </div>
    );
  }

  const ordered = [
    ...tasks.filter(t => !t.completed),
    ...tasks.filter(t => t.completed),
  ];

  return (
    <div className="mt-6 space-y-4">
      {ordered.map(t => (
        <TaskCard key={t.id} task={t} />
      ))}
    </div>
  );
}