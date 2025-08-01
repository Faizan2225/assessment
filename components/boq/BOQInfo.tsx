import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BOQInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About BOQ Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">What we analyze:</h4>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Floor plans and architectural drawings</li>
            <li>• CAD layouts and technical blueprints</li>
            <li>• Construction and engineering plans</li>
            <li>• Electrical and mechanical drawings</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">What you get:</h4>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Detailed Bill of Quantities (BOQ)</li>
            <li>• Material Take-Off (MTO) data</li>
            <li>• Structured quantity estimates</li>
            <li>• Cost analysis components</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
