import React, { useState } from "react";
import {
  Search,
  Filter,
  CalendarDays,
  Eye,
  X,
  List,
  Grid3X3,
} from "lucide-react";
import { mockDocuments as documents } from "../../../data/mockData";
import DocumentModal from "../../../components/DocumentModal";

// ...Keep TagChip and DocumentModal same

const StaffDocs = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid"); // 'grid' or 'list'

  const filterDocuments = (docs, term) => {
    if (!term.trim()) return docs;
    const words = term.toLowerCase().split(/\s+/).filter(Boolean);
    return docs.filter((doc) => {
      const text = (doc.title + " " + doc.description).toLowerCase();
      return words.every((word) => text.includes(word));
    });
  };

  const filteredDocuments = filterDocuments(documents, searchTerm);

  return (
    <div className="space-y-6 flex flex-col p-8">
      {/* Heading and Search */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">All Documents</h1>
        <p className="text-gray-600 mt-1">
          Manage and view all uploaded documents
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center relative">
          <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            className="pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters */}
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
          <option>All Categories</option>
          <option>HR</option>
          <option>Finance</option>
          <option>Engineering</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700">
          <option>Most Recent</option>
          <option>Most Viewed</option>
        </select>
        <button className="flex items-center border px-3 py-2 text-sm rounded-md hover:bg-gray-100 border-gray-300">
          <Filter className="h-4 w-4 mr-1" />
          Advanced
        </button>

        {/* View Toggle */}
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setView("list")}
            className={`p-2 border rounded hover:bg-gray-100 ${
              view === "list"
                ? "text-blue-600 border-blue-600 bg-blue-50"
                : "text-gray-500"
            }`}
          >
            <List className="h-4 w-4" />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 border rounded hover:bg-gray-100 ${
              view === "grid"
                ? "text-blue-600 border-blue-600 bg-blue-50"
                : "text-gray-500"
            }`}
          >
            <Grid3X3 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Display Cards */}
      <div
        className={`${
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }`}
      >
        {filteredDocuments.map((doc) => (
          <div
            key={doc.id}
            onClick={() => setSelectedDoc(doc)}
            className={`relative cursor-pointer bg-white rounded-xl border border-gray-200 transition overflow-hidden ${
              view === "grid"
                ? "hover:shadow-md"
                : "flex items-start gap-4 p-4 hover:bg-gray-50"
            }`}
          >
            {/* Badge & Visibility */}
            <div className="absolute top-2 left-2 z-10">
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium uppercase tracking-wide ${
                  doc.status === "approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {doc.status}
              </span>
            </div>
            <div className="absolute top-2 right-2 z-10">
              {doc.visibility === "private" ? (
                <svg
                  className="w-4 h-4 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10" />
                </svg>
              ) : (
                <Eye className="w-4 h-4 text-blue-400" />
              )}
            </div>

            {/* Grid vs List Layouts */}
            {view === "grid" ? (
              <>
                <img
                  src={doc.thumbnail}
                  alt={doc.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition"
                />
                <div className="p-4 space-y-2">
                  <div className="text-sm font-semibold text-gray-900 line-clamp-1">
                    {doc.title}
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {doc.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {doc.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {doc.tags.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full">
                        +{doc.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mt-3 space-y-1">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {doc.date}
                    </div>
                    <div className="text-[11px] bg-pink-100 w-fit p-1 rounded-lg px-4 text-gray-500">
                      Dept: {doc.department}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <img
                  src={doc.thumbnail}
                  alt={doc.title}
                  className="w-32 h-20 object-cover rounded"
                />
                <div className="space-y-1 flex-1">
                  <div className="font-medium text-sm text-gray-900">
                    {doc.title}
                  </div>
                  <div className="text-xs text-gray-500 line-clamp-2">
                    {doc.description}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {doc.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-500 mt-1">
                    <span>{doc.date}</span>
                    <span>Dept: {doc.department}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDoc && (
        <DocumentModal doc={selectedDoc} onClose={() => setSelectedDoc(null)} />
      )}
    </div>
  );
};

export default StaffDocs;
