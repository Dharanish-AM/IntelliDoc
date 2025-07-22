import React from "react";

export default function DocumentModal({ doc, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{doc.description}</p>
        {doc.thumbnail && (
          <img
            src={doc.thumbnail}
            alt={doc.title}
            className="w-full h-60 object-cover rounded mb-4"
          />
        )}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
         <div>
            <strong>Status:</strong>{" "}
            <span
              className={`text-[12px] py-1 px-3 rounded-2xl capitalize ${
                doc.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : doc.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {doc.status}
            </span>
          </div>
          <div>
            <strong>Visibility:</strong> <span className="capitalize">{doc.visibility} </span>
          </div>
          <div>
            <strong>Department:</strong> {doc.department}
          </div>
          <div>
            <strong>Date:</strong> {doc.date}
          </div>
          <div className="col-span-2">
            <strong>Tags:</strong>{" "}
            {doc.tags?.map((tag, i) => (
              <span
                key={i}
                className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="col-span-2">
            <strong>File Name:</strong> {doc.fileName}
          </div>
          <div className="col-span-2 mt-2">
            <strong>Summary:</strong>
            <p className="text-sm text-gray-600 mt-1">{doc.summary}</p>
          </div>
          <div className="col-span-2 mt-6 flex justify-end gap-3">
            <a
              href={doc.fileUrl || "#"}
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Download
            </a>
            <button
              onClick={() => {
                // Add your delete logic here
                alert("Delete functionality to be implemented.");
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
