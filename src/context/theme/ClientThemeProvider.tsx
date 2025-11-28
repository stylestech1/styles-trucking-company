"use client";
import { ThemeProvider } from "./ThemeProvider";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
}