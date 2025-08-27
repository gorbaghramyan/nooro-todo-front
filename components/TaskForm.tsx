"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Task } from "@/lib/types";
import { createTask, updateTask } from "@/lib/api";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "purple",
  "pink",
  "brown"
];

const COLOR_STYLES: Record<string, string> = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-400",
  green: "bg-green-500",
  teal: "bg-teal-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  brown: "bg-stone-500"
};

const TITLE_MAX_LENGTH = 190;

export default function TaskForm({ task }: { task?: Task }) {
  const router = useRouter();
  const [title, setTitle] = useState(task?.title ?? "");
  const [color, setColor] = useState(task?.color ?? "blue");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!title.trim()) { setErr("Title is required"); return; }
    if (title.length > TITLE_MAX_LENGTH) {
      setErr(`Title must be ${TITLE_MAX_LENGTH} characters or fewer`);
      return;
    }
    setBusy(true);
    try {
      if (task) await updateTask(task.id, { title, color });
      else await createTask({ title, color });
      router.push("/");
      router.refresh();
    } catch (e: any) {
      setErr(e?.message || "Failed to save");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm">Title</label>
        <input
          className="w-full rounded-md bg-gray-800 p-3 text-gray-100 placeholder-gray-500"
          placeholder="Ex. Brush your teeth"
          value={title}
          maxLength={TITLE_MAX_LENGTH}
          onChange={e => setTitle(e.target.value)}
        />
        {err && <p className="text-sm text-red-400">{err}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm">Color</label>
        <div className="flex flex-wrap gap-3">
          {COLORS.map(c => (
            <button
              type="button"
              key={c}
              onClick={() => setColor(c)}
              className={`h-8 w-8 rounded-full ${COLOR_STYLES[c]} ${color === c ? "ring-2 ring-offset-2 ring-white" : ""}`}
            />
          ))}
        </div>
      </div>

      <button
        disabled={busy}
        className="w-full rounded-md bg-[#1e6f9f] py-3 font-medium text-white hover:bg-[#1e6f9f]/90 disabled:opacity-50"
      >
        {task ? (
          <span>
            Save <span className="ml-1">✓</span>
          </span>
        ) : (
          "Add Task"
        )}
      </button>
    </form>
  );
}
