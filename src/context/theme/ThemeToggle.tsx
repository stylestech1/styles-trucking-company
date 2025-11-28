"use client";
// importing React-Icons
import { useTheme } from "@/context/theme/ThemeProvider";
import { Moon, SunMedium } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] rounded-full w-6 h-6 md:w-10 md:h-10 flex justify-center items-center cursor-pointer transition-all"
    >
      {theme === "light" ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}