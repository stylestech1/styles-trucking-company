"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  return <Header cdlDriverJobs={pathname === "/cdl-driver-jobs"} />;
}
