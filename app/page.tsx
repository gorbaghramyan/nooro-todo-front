import { listTasks } from "@/lib/api";
import Link from "next/link";
import TaskList from "@/components/TaskList";
import PlusIcon from "@/components/icons/PlusIcon";
 
export default async function Page() {
  const tasks = await listTasks();
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div>
      <Link
        href="/tasks/new"
        className="relative -mt-11 flex w-full items-center justify-center gap-2 rounded-md bg-[#1e6f9f] py-2 font-medium text-white hover:bg-[#1e6f9f]/90"
      >
        <span>Create Task</span>
        <PlusIcon />
      </Link>
      <div className="mt-8">
        <div className="flex justify-between text-sm font-medium text-gray-400">
          <span>Tasks: {total}</span>
          <span>Completed: {completed} of {total}</span>
        </div>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
