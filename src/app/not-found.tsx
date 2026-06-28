import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center">
        <h1 className="font-heading text-7xl md:text-9xl font-bold text-foreground mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="whiteDarkText" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
