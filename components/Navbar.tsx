import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-8 border-b border-neutral-200 dark:border-neutral-800">
      <span className="text-2xl font-bold tracking-tight">Minimal Blog</span>
      <ThemeToggle />
    </nav>
  );
} 