import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const IPDisplay = () => {
  const { toast } = useToast();

  const { data: ip, isLoading, error } = useQuery({
    queryKey: ["ip"],
    queryFn: async () => {
      const response = await fetch("https://api.ipify.org?format=json");
      if (!response.ok) {
        throw new Error("Failed to fetch IP address");
      }
      const data = await response.json();
      return data.ip;
    },
    retry: 1,
    meta: {
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to fetch IP address. Please try again later.",
          variant: "destructive",
        });
      },
    },
  });

  return (
    <div className="glass-card rounded-xl p-8 w-full max-w-md mx-auto fade-in">
      <h2 className="text-xl font-medium mb-4 text-foreground/80">Your Public IP Address</h2>
      <div className="flex items-center justify-center h-20">
        {isLoading ? (
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        ) : error ? (
          <p className="text-destructive">Unable to fetch IP</p>
        ) : (
          <p className="text-3xl font-bold text-foreground break-all">{ip}</p>
        )}
      </div>
    </div>
  );
};

export default IPDisplay;