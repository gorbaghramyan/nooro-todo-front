import Link from "next/link";
import TaskCard from "./TaskCard";
import ClipboardIcon from "./icons/ClipboardIcon";
import type { Task } from "@/lib/types";
type Props = { tasks: Task[]; tab: "pending" | "completed" };

export default function TaskTabs({ tasks, tab }: Props) {
  const pending = tasks.filter(t => !t.completed);
  const done = tasks.filter(t => t.completed);
  const list = tab === "pending" ? pending : done;
  const empty = list.length === 0;

  return (
    <div>
      <div className="flex justify-center gap-8 text-sm">
        <Link
          href="/?tab=pending"
          className={`flex items-center gap-1 rounded-full px-2 py-1 font-medium ${tab === "pending" ? "text-blue-400" : "text-gray-400"}`}
        >
          Tasks
          <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs">{pending.length}</span>
        </Link>
        <Link
          href="/?tab=completed"
          className={`flex items-center gap-1 rounded-full px-2 py-1 font-medium ${tab === "completed" ? "text-blue-400" : "text-gray-400"}`}
        >
          Completed
          <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs">{done.length}</span>
        </Link>
      </div>

      {empty ? (
        <div className="mt-16 text-center text-gray-500">
          <ClipboardIcon className="mx-auto mb-4" />
          <p className="font-bold">You don't have any tasks registered yet.</p>
          <p>Create tasks and organize your to-do items.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {list.map(t => (
            <TaskCard key={t.id} task={t} />
          ))}
        </div>
      )}
    </div>
  );
}

