import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-t from-sky-400 to-blue-400">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">Simple authentication service</p>
        <Button variant={"secondary"} size={"lg"}>
          Sign In
        </Button>
      </div>
    </main>
  );
}