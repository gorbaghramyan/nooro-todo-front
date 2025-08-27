import type { Task } from "@/lib/types";

const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

async function json<T>(r: Response): Promise<T> {
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

export async function listTasks(): Promise<Task[]> {
  const r = await fetch(`${BASE}/tasks`, { cache: "no-store" });
  return json<Task[]>(r);
}

export async function getTask(id: number): Promise<Task | null> {
  try {
    const r = await fetch(`${BASE}/tasks`, { cache: "no-store" });
    const tasks = await r.json() as Task[];
    return tasks.find(t => t.id === id) ?? null;
  } catch {
    return null;
  }
}

export async function createTask(data: { title: string; color: string }): Promise<Task> {
  const r = await fetch(`${BASE}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return json<Task>(r);
}

export async function updateTask(id: number, data: Partial<Pick<Task, "title"|"color"|"completed">>): Promise<Task> {
  const r = await fetch(`${BASE}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return json<Task>(r);
}

export async function deleteTask(id: number): Promise<void> {
  const r = await fetch(`${BASE}/tasks/${id}`, { method: "DELETE" });
  if (!r.ok && r.status !== 204) throw new Error(await r.text());
}
