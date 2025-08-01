import { useState } from "react";
import { API_ENDPOINT, validateForm, createFormData } from "@/lib/boq-utils";

export function useBOQ() {
  const [userInput, setUserInput] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponse(null);

    // Validate form inputs
    const validationError = validateForm(userInput, files);
    if (validationError) {
      setError(validationError);
      setIsLoading(false);
      return;
    }

    try {
      const formData = createFormData(userInput, files!);

      const apiResponse = await fetch(API_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (!apiResponse.ok) {
        throw new Error(
          `API Error: ${apiResponse.status} ${apiResponse.statusText}`
        );
      }

      const data = await apiResponse.json();
      setResponse(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while processing your request"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setUserInput("");
    setFiles(null);
    setResponse(null);
    setError(null);
  };

  return {
    userInput,
    setUserInput,
    files,
    setFiles,
    isLoading,
    response,
    error,
    handleSubmit,
    resetForm,
  };
}
