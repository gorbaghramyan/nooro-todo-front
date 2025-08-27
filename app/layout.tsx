import "./globals.css";
import RocketIcon from "@/components/icons/RocketIcon";

export const metadata = { title: "Todo App", description: "Nooro Take-Home" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#1a1a1a] text-gray-100">
        <header className="bg-[#0D0D0D] py-14">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-2">
            <RocketIcon />
            <h1 className="text-4xl font-bold">
              <span className="text-[#4EA8DE]">Todo</span>{" "}
              <span className="text-[#5e60ce]">App</span>
            </h1>
          </div>
        </header>
        <main className="mx-auto max-w-3xl p-6">{children}</main>
      </body>
    </html>
  );
}
