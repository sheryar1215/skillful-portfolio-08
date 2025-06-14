
import React from "react";
import { cn } from "@/lib/utils";

type Category = "frontend" | "backend" | "fullstack" | "all";

export const CategoryTag = ({ category, className }: { category: Category, className?: string }) => {
  const colorMap: Record<Category, string> = {
    frontend: "bg-blue-100 text-blue-700",
    backend: "bg-green-100 text-green-700",
    fullstack: "bg-purple-100 text-purple-700",
    all: "bg-gray-100 text-gray-700"
  };
  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-xs font-semibold tracking-wide pointer-events-none select-none shadow-sm",
        colorMap[category as Category], className
      )}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  );
};
