import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Loader2, AlertCircle } from "lucide-react";
import { SUPPORTED_FILE_FORMATS, formatFileSize } from "@/lib/boq-utils";

interface BOQFormProps {
  userInput: string;
  setUserInput: (value: string) => void;
  files: FileList | null;
  setFiles: (files: FileList | null) => void;
  isLoading: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
  showReset: boolean;
}

export function BOQForm({
  userInput,
  setUserInput,
  files,
  setFiles,
  isLoading,
  error,
  onSubmit,
  onReset,
  showReset,
}: BOQFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          BOQ Analysis Request
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          {/* User Input Field */}
          <div>
            <label
              htmlFor="userInput"
              className="block text-sm font-medium mb-2"
            >
              Analysis Requirements
            </label>
            <textarea
              id="userInput"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Describe what you need from the analysis (e.g., 'Extract material quantities for construction', 'Generate detailed BOQ for electrical components', etc.)"
              className="w-full min-h-[100px] px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring resize-y"
              disabled={isLoading}
            />
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="files" className="block text-sm font-medium mb-2">
              Upload Technical Plans
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-ring transition-colors">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Upload floor plans, CAD layouts, or architectural blueprints
                </p>
                <p className="text-xs text-muted-foreground">
                  Supported formats: PDF, PNG, JPG, JPEG, DWG, DXF
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                id="files"
                multiple
                accept={SUPPORTED_FILE_FORMATS}
                onChange={handleFileChange}
                className="hidden"
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="outline"
                className="mt-4"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
              >
                Choose Files
              </Button>
            </div>

            {/* Display selected files */}
            {files && files.length > 0 && (
              <div className="mt-3 space-y-2">
                <p className="text-sm font-medium">Selected files:</p>
                {Array.from(files).map((file, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>{file.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {formatFileSize(file.size)} MB
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Error Display */}
          {error && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3">
            <Button
              type="submit"
              disabled={
                isLoading || !userInput.trim() || !files || files.length === 0
              }
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  Generate BOQ Analysis
                </>
              )}
            </Button>

            {showReset && (
              <Button type="button" variant="outline" onClick={onReset}>
                Reset
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
