
import React from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export function ToastDemoButton() {
  return (
    <div className="flex gap-4 mt-6">
      <Button
        onClick={() =>
          toast({
            title: "Success",
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
            title: "Error",
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
