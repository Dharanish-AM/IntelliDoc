import React from "react";
import {
  FileText,
  Upload,
  Share2,
  Clock,
  Tag,
  TrendingUp,
  FolderOpen,
  Star,
  Icon,
} from "lucide-react";
import { mockDocuments } from "../../../data/mockData";

export default function StaffPage({ user }) {
  const myDocuments = mockDocuments.filter(
    (doc) => doc.uploadedBy === user?.name
  );
  const recentDocuments = myDocuments.slice(0, 3);

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
    <div className="space-y-6 flex flex-col p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Staff Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Manage your documents and track performance
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="My Documents"
          value={myDocuments.length.toString()}
          subtitle="Total uploaded"
          icon={FileText}
          color="blue"
        />
        <StatCard
          title="Total Downloads"
          value={
            isNaN(myDocuments.reduce((sum, doc) => sum + doc.downloadCount, 0))
              ? "0"
              : myDocuments
                  .reduce((sum, doc) => sum + doc.downloadCount, 0)
                  .toString()
          }
          subtitle="Across all documents"
          icon={TrendingUp}
          color="green"
        />
        <StatCard
          title="Categories"
          value={new Set(
            myDocuments?.map((doc) => doc.category)
          ).size.toString()}
          subtitle="Different categories"
          icon={Tag}
          color="purple"
        />
      </div>

      {/* Recent Documents */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Documents
          </h3>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {recentDocuments?.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
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

              <div className="flex-1 relative min-w-0">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {doc.title}
                  </h4>
                  {doc.isShared && (
                    <Share2 className="h-4 w-4 text-green-500" />
                  )}
                </div>
                <p className="text-xs text-gray-500 truncate mt-1">
                  {doc.description}
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-xs text-gray-500 flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{new Date(doc.date).toLocaleDateString()}</span>
                  </span>
                </div>
                <span className="text-xs bg-pink-100 w-fit px-2 py-1 rounded-2xl flex mt-2 text-gray-500">
                  Department: {doc.department}
                </span>
                <span
                  className={`text-xs absolute top-0 right-2 font-medium px-2 py-1 rounded-full w-fit mt-2 ${
                    doc.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : doc.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                </span>
                <div className="flex mt-4 flex-wrap gap-1">
                  {doc.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-100 capitalize text-blue-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Star className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
