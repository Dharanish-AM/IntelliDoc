import React from "react";
import {
  TrendingUp,
  Download,
  Users,
  FileText,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Icon,
} from "lucide-react";
import { mockStats } from "../../../data/mockData";

export default function Analytics() {
  const stats = mockStats;

  const MetricCard = ({
    title,
    value,
    icon: Icon,
    color = "blue",
  }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
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
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 flex flex-col p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Document management insights and metrics
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Documents"
          value={stats.totalDocuments.toLocaleString()}
          icon={FileText}
          color="blue"
        />
        <MetricCard
          title="Total Downloads"
          value="15.2K"
          icon={Download}
          color="green"
        />
        <MetricCard
          title="Active Users"
          value={stats.activeUsers.toString()}
          icon={Users}
          color="amber"
        />
        <MetricCard
          title="Storage Used"
          value={stats.totalStorage}
          icon={BarChart3}
          color="purple"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Trend Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Document Uploads
            </h3>
            <Calendar className="h-5 w-5 text-blue-600" />
          </div>

          <div className="space-y-4">
            {stats.uploadTrend.map((day, index) => {
              const maxCount = Math.max(
                ...stats.uploadTrend.map((d) => d.count)
              );
              const percentage = (day.count / maxCount) * 100;

              return (
                <div key={day.date} className="flex items-center space-x-4">
                  <div className="text-sm text-gray-500 w-16">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-sm font-medium text-gray-900 w-8 text-right">
                    {day.count}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Total this week</span>
              <span className="font-medium text-gray-900">
                {stats.uploadTrend.reduce((sum, day) => sum + day.count, 0)}{" "}
                uploads
              </span>
            </div>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Category Distribution
            </h3>
            <PieChart className="h-5 w-5 text-green-600" />
          </div>

          <div className="space-y-4">
            {stats.popularCategories.map((category, index) => {
              const total = stats.popularCategories.reduce(
                (sum, cat) => sum + cat.count,
                0
              );
              const percentage = (category.count / total) * 100;
              const colors = [
                "bg-blue-500",
                "bg-green-500",
                "bg-amber-500",
                "bg-purple-500",
                "bg-red-500",
              ];

              return (
                <div
                  key={category.name}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`w-4 h-4 rounded-full ${
                      colors[index % colors.length]
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          colors[index % colors.length]
                        } transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-12 text-right">
                    {category.count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Activity
          </h3>
          <Activity className="h-5 w-5 text-purple-600" />
        </div>

        <div className="space-y-6">
          {[
            {
              time: "2 hours ago",
              event: "Bulk upload completed",
              user: "Marcus Johnson",
              details: "15 documents uploaded to Finance category",
              type: "upload",
            },
            {
              time: "4 hours ago",
              event: "New user registered",
              user: "Alex Thompson",
              details: "User role assigned, pending approval",
              type: "user",
            },
            {
              time: "6 hours ago",
              event: "Document shared",
              user: "Sarah Chen",
              details: "Q4 Report shared with 12 team members",
              type: "share",
            },
            {
              time: "8 hours ago",
              event: "High download activity",
              user: "System",
              details: "Employee Handbook downloaded 25+ times",
              type: "download",
            },
            {
              time: "1 day ago",
              event: "Category created",
              user: "Admin",
              details: 'New "Legal" category added to system',
              type: "system",
            },
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === "upload"
                    ? "bg-blue-100"
                    : activity.type === "user"
                    ? "bg-green-100"
                    : activity.type === "share"
                    ? "bg-amber-100"
                    : activity.type === "download"
                    ? "bg-purple-100"
                    : "bg-gray-100"
                }`}
              >
                {activity.type === "upload" ? (
                  <FileText className="h-5 w-5 text-blue-600" />
                ) : activity.type === "user" ? (
                  <Users className="h-5 w-5 text-green-600" />
                ) : activity.type === "share" ? (
                  <Users className="h-5 w-5 text-amber-600" />
                ) : activity.type === "download" ? (
                  <Download className="h-5 w-5 text-purple-600" />
                ) : (
                  <Activity className="h-5 w-5 text-gray-500" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">
                    {activity.event}
                  </h4>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  By {activity.user} • {activity.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
