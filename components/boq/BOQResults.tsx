import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { downloadJSON, copyToClipboard } from "@/lib/boq-utils";

interface BOQResultsProps {
  response: any;
}

export function BOQResults({ response }: BOQResultsProps) {
  const analysisData = response.analysis_data || response;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-600" />
          Analysis Results
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-sm text-green-800 dark:text-green-200 mb-2">
              ✅ BOQ analysis completed successfully
            </p>
          </div>

          {/* Display the analysis data */}
          <div>
            <h3 className="font-semibold mb-2">Analysis Data:</h3>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm whitespace-pre-wrap overflow-auto max-h-96">
                {JSON.stringify(analysisData, null, 2)}
              </pre>
            </div>
          </div>

          {/* Download/Export Options */}
          <div className="flex gap-2 pt-4 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={() => downloadJSON(analysisData)}
            >
              Download JSON
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(analysisData)}
            >
              Copy to Clipboard
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
