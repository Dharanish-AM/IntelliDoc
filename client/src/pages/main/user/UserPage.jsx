import React from "react";
import {
  FileText,
  Search,
  Clock,
  Download,
  Star,
  Filter,
  BookOpen,
  Bookmark,
} from "lucide-react";
import { mockDocuments } from "../../../data/mockData";

export default function UserPage({ user }) {
  const accessibleDocs = mockDocuments.filter((doc) => {
    if (user?.role === "user") return doc.visibility === "public";
    return false;
  });
  const recentDocs = accessibleDocs.slice(0, 4);

  const StatCard = ({ title, value, subtitle, icon: Icon, color = "blue" }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div
          className={`p-3 rounded-lg ${
            color === "blue"
              ? "bg-blue-100"
              : color === "green"
              ? "bg-green-100"
              : color === "amber"
              ? "bg-amber-100"
              : "bg-purple-100"
          }`}
        >
          <Icon
            className={`h-6 w-6 ${
              color === "blue"
                ? "text-blue-600"
                : color === "green"
                ? "text-green-600"
                : color === "amber"
                ? "text-amber-600"
                : "text-purple-600"
            }`}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Access and discover shared documents
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-6 text-left transition-all duration-200 transform hover:scale-105">
          <Search className="h-8 w-8 mb-3" />
          <h3 className="text-lg font-semibold mb-1">Search Documents</h3>
          <p className="text-blue-100 text-sm">Find documents quickly</p>
        </button>

        <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl p-6 text-left transition-all duration-200 transform hover:scale-105">
          <BookOpen className="h-8 w-8 mb-3" />
          <h3 className="text-lg font-semibold mb-1">Browse Categories</h3>
          <p className="text-green-100 text-sm">Explore by topic</p>
        </button>

        <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl p-6 text-left transition-all duration-200 transform hover:scale-105">
          <Bookmark className="h-8 w-8 mb-3" />
          <h3 className="text-lg font-semibold mb-1">My Bookmarks</h3>
          <p className="text-purple-100 text-sm">Saved documents</p>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Available Documents"
          value={accessibleDocs.length.toString()}
          subtitle="You can access"
          icon={FileText}
          color="blue"
        />
        <StatCard
          title="Categories"
          value={new Set(
            accessibleDocs.map((doc) => doc.category)
          ).size.toString()}
          subtitle="Different topics"
          icon={Filter}
          color="green"
        />
        <StatCard
          title="Recent Downloads"
          value="12"
          subtitle="This month"
          icon={Download}
          color="amber"
        />
        <StatCard
          title="Bookmarked"
          value="8"
          subtitle="Saved for later"
          icon={Bookmark}
          color="purple"
        />
      </div>

      {/* Recent and Popular Documents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Documents */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Documents
            </h3>
            <Clock className="h-5 w-5 text-blue-600" />
          </div>

          <div className="space-y-4">
            {recentDocs.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex-shrink-0">
                  {doc.thumbnail ? (
                    <img
                      src={doc.thumbnail}
                      alt={doc.title}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-gray-500 truncate mt-1">
                    {doc.description}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      {doc.department}
                    </span>
                    <span className="text-xs text-gray-500">
                      {doc.fileName}
                    </span>
                  </div>
                  {/*TAGS */}
                  <div className="flex items-center space-x-2 mt-2">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Download className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Star className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Documents */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Most Popular
            </h3>
            <Star className="h-5 w-5 text-amber-500" />
          </div>

          <div className="space-y-4">
            {accessibleDocs
              .sort((a, b) => b.downloadCount - a.downloadCount)
              .slice(0, 4)
              .map((doc, index) => (
                <div
                  key={doc.id}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0
                          ? "bg-yellow-100 text-yellow-600"
                          : index === 1
                          ? "bg-gray-100 text-gray-600"
                          : index === 2
                          ? "bg-orange-100 text-orange-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {doc.downloadCount} downloads
                    </p>
                  </div>

                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {doc.category}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
