// BOQ Utility functions and constants

export const SUPPORTED_FILE_FORMATS = ".pdf,.png,.jpg,.jpeg,.dwg,.dxf";

export const SUPPORTED_FILE_TYPES = ["PDF", "PNG", "JPG", "JPEG", "DWG", "DXF"];

export const API_ENDPOINT =
  "https://nnnlnhxhyr4zd74guusgqb6wrm.srv.us/api/v1/boq/workflow";

// Generate unique user ID
export const generateUserId = (): string =>
  `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Generate unique session ID
export const generateSessionId = (): string =>
  `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Format file size in MB
export const formatFileSize = (bytes: number): string =>
  (bytes / 1024 / 1024).toFixed(2);

// Validate form inputs
export const validateForm = (
  userInput: string,
  files: FileList | null
): string | null => {
  if (!userInput.trim()) {
    return "Please enter your requirements";
  }

  if (!files || files.length === 0) {
    return "Please upload at least one file";
  }

  return null;
};

// Create FormData for API request
export const createFormData = (
  userInput: string,
  files: FileList
): FormData => {
  const formData = new FormData();
  formData.append("user_input", userInput);
  formData.append("user_id", generateUserId());
  formData.append("session_id", generateSessionId());

  // Append all files
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  return formData;
};

// Download JSON data
export const downloadJSON = (
  data: any,
  filename: string = `boq-analysis-${Date.now()}.json`
) => {
  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

// Copy to clipboard
export const copyToClipboard = (data: any) => {
  navigator.clipboard.writeText(JSON.stringify(data, null, 2));
};
