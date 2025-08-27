'use client';
import { useState, useTransition } from 'react';
import DeleteTaskModal from './DeleteTaskModal';
import TrashIcon from '@/components/icons/TrashIcon';

export default function DeleteTaskButton({ action }: { action: () => Promise<void> }) {
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        disabled={pending}
        className="hover:opacity-80"
      >
        <TrashIcon />
      </button>
      <DeleteTaskModal
        isOpen={open}
        message="Delete this task?"
        onConfirm={() => {
          startTransition(() => action());
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}

