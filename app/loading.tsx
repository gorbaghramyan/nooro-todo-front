export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div role="status" aria-live="polite">
        <svg
          aria-hidden="true"
          className="h-8 w-8 animate-spin text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
