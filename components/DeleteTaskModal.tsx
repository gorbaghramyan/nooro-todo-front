'use client';

interface DeleteTaskModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteTaskModal({
  isOpen,
  message,
  onConfirm,
  onCancel,
}: DeleteTaskModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        role="dialog"
        aria-modal="true"
        className="w-11/12 max-w-sm rounded-lg bg-gray-800 p-6 shadow-lg"
      >
        <p className="mb-4 text-sm text-white">{message}</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded bg-gray-700 px-3 py-1 text-sm text-white hover:bg-gray-600 focus:outline-none"
          >
            Cancel
          </button>
          <button
            autoFocus
            onClick={onConfirm}
            className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-500 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
