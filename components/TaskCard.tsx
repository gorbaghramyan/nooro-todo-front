import Link from "next/link";
import { revalidatePath } from "next/cache";
import { COLOR_CLASSES, type Task } from "@/lib/types";
import { updateTask, deleteTask } from "@/lib/api";
import DeleteTaskButton from "./DeleteTaskButton";

export default function TaskCard({ task }: { task: Task }) {
  const color = COLOR_CLASSES[task.color] ?? COLOR_CLASSES.blue;

  async function toggleCompleted() {
    "use server";
    await updateTask(task.id, { completed: !task.completed });
    revalidatePath("/");
  }

  async function removeTask() {
    "use server";
    await deleteTask(task.id);
    revalidatePath("/");
  }

  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-800 px-4 py-3">
      <form action={toggleCompleted}>
        <button
          type="submit"
          className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${color.border} ${task.completed ? `${color.bg} text-white` : color.text}`}
        >
          {task.completed && <span className="text-xs">✓</span>}
        </button>
      </form>
      <Link
        href={`/tasks/${task.id}`}
        className={`flex-1 px-4 text-sm ${task.completed ? "line-through text-gray-500" : ""}`}
        style={{ wordBreak: "break-word" }}
      >
        {task.title}
      </Link>
      <div className="flex items-center text-lg">
        <DeleteTaskButton action={removeTask} />
      </div>
    </div>
  );
}
