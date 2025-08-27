export type Task = {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export const COLOR_CLASSES: Record<string, { border: string; bg: string; text: string }> = {
  red: { border: "border-red-500", bg: "bg-red-500", text: "text-red-500" },
  orange: { border: "border-orange-500", bg: "bg-orange-500", text: "text-orange-500" },
  yellow: { border: "border-yellow-400", bg: "bg-yellow-400", text: "text-yellow-400" },
  green: { border: "border-green-500", bg: "bg-green-500", text: "text-green-500" },
  teal: { border: "border-teal-500", bg: "bg-teal-500", text: "text-teal-500" },
  blue: { border: "border-blue-500", bg: "bg-blue-500", text: "text-blue-500" },
  purple: { border: "border-purple-500", bg: "bg-purple-500", text: "text-purple-500" },
  pink: { border: "border-pink-500", bg: "bg-pink-500", text: "text-pink-500" },
  brown: { border: "border-stone-500", bg: "bg-stone-500", text: "text-stone-500" }
};