
import React from "react";
import { toast } from "@/hooks/use-toast";
import { CircleCheck, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ToastDemoButton() {
  return (
    <div className="flex gap-4 mt-6">
      <Button
        onClick={() =>
          toast({
            title: (
              <span className="flex items-center gap-2 text-green-600">
                <CircleCheck className="h-5 w-5" /> Success
              </span>
            ),
            description: "Your action was successful!",
            duration: 2500,
          })
        }
        variant="default"
      >
        Show Success Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: (
              <span className="flex items-center gap-2 text-red-600">
                <CircleX className="h-5 w-5" /> Error
              </span>
            ),
            description: "Something went wrong.",
            variant: "destructive",
            duration: 3000,
          })
        }
        variant="destructive"
      >
        Show Error Toast
      </Button>
    </div>
  );
}
