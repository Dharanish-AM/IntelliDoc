import { UploadCloud } from "lucide-react";

export default function Upload() {
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-2xl font-bold text-gray-900">Upload Documents</h1>
      <p className="text-gray-600 mt-1">
        Add new files with automatic AI tagging and categorization
      </p>

      <div className="border-2 border-dashed border-gray-300 mt-6 rounded-xl p-12 text-center bg-white">
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 p-4 rounded-full">
            <UploadCloud className="h-8 w-8 text-gray-500" />
          </div>
        </div>
        <h2 className="text-lg font-medium text-gray-800">
          Drop files here or click to browse
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Support for PDF, Word, Excel, PowerPoint, and image files up to 50MB
        </p>
        <div className="mt-6">
          <label className="inline-block cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium">
            <input type="file" className="hidden" />
            Choose Files
          </label>
        </div>
      </div>
    </div>
  );
}
