"use client";
export default function Error({ error }: { error: Error }) {
  return <div className="text-red-600">Error: {error.message}</div>;
}
