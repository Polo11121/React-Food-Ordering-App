import { Loader2 } from "lucide-react";

export const LoadingScreen = () => (
  <div className="flex justify-center items-center h-screen flex-1">
    <Loader2 className="w-20 h-20 text-orange-500 animate-spin" />
  </div>
);
