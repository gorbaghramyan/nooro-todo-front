import TaskForm from "@/components/TaskForm";
import { getTask } from "@/lib/api";
import Link from "next/link";

type Props = { params: { id: string } };

export default async function EditTaskPage({ params }: Props) {
  const id = Number(params.id);
  const task = await getTask(id);
  if (!task) return <div className="text-red-600">Task not found.</div>;

  return (
    <div className="space-y-6">
      <Link href="/" className="text-2xl">&larr;</Link>
      <TaskForm task={task} />
    </div>
  );
}
