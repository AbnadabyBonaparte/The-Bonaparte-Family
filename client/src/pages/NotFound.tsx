import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-lg border-border bg-card">
        <CardContent className="py-10 text-center">
          <AlertCircle className="mx-auto h-14 w-14 text-accent" />
          <h1 className="mt-5 text-5xl">404</h1>
          <h2 className="mt-2 text-xl">Page Not Found</h2>
          <p className="mt-4 text-muted-foreground">
            A página que você tentou acessar não está disponível no momento.
          </p>
          <Button onClick={() => setLocation("/")} className="mt-8 min-h-11 px-6">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
