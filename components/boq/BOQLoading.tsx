import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export function BOQLoading() {
  return (
    <Card>
      <CardContent className="p-8 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
        <h3 className="font-semibold mb-2">Processing Your Files</h3>
        <p className="text-muted-foreground">
          Analyzing your technical plans and extracting BOQ data...
        </p>
      </CardContent>
    </Card>
  );
}
