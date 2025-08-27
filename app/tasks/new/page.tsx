import TaskForm from "@/components/TaskForm";
import Link from "next/link";

export default function NewTaskPage() {
  return (
    <div className="space-y-6">
      <Link href="/" className="text-2xl">&larr;</Link>
      <TaskForm />
    </div>
  );
}
