export const mockUsers = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@sakthiauto.com",
    role: "admin",
    department: "Management",
    address: "123 Main Street, Chennai",
    age: 42,
    mobile: "9876543210",
  },
  {
    id: "2",
    name: "John Staff",
    email: "john@sakthiauto.com",
    role: "staff",
    department: "Engineering",
    address: "45 Industrial Road, Coimbatore",
    age: 35,
    mobile: "9123456780",
  },
  {
    id: "3",
    name: "Jane Doe",
    email: "jane@sakthiauto.com",
    role: "user",
    department: "Quality",
    address: "78 Quality Avenue, Madurai",
    age: 29,
    mobile: "9012345678",
  },
  {
    id: "4",
    name: "Mike Wilson",
    email: "mike@sakthiauto.com",
    role: "staff",
    department: "HR",
    address: "12 HR Lane, Trichy",
    age: 38,
    mobile: "9345678123",
  },
  {
    id: "5",
    name: "Sarah Chen",
    email: "sarah@sakthiauto.com",
    role: "user",
    department: "Logistics",
    address: "56 Logistics Park, Salem",
    age: 31,
    mobile: "9988776655",
  },
];

export const mockDocuments = [
  {
    id: "1",
    title: "Quality Control Standards 2024",
    department: "Quality",
    tags: ["standards", "QC", "procedures"],
    uploadedBy: "John Staff",
    uploadedById: "2",
    date: "2024-01-15",
    status: "pending",
    visibility: "public",
    description: "Updated quality control standards for 2024",
    thumbnail:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    fileName: "QC_Standards_2024.pdf",
    summary:
      "Comprehensive quality control standards document outlining the updated procedures and requirements for maintaining product quality in our manufacturing processes.",
  },
  {
    id: "2",
    title: "Employee Handbook v3.2",
    department: "HR",
    tags: ["handbook", "policies", "employees"],
    uploadedBy: "Mike Wilson",
    image: "https://example.com/employee-handbook-cover.jpg",
    uploadedById: "4",
    date: "2024-01-10",
    thumbnail:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    status: "approved",
    visibility: "public",
    description: "Latest version of employee handbook with updated policies",
    fileName: "Employee_Handbook_v3.2.pdf",
    summary:
      "Complete employee handbook covering company policies, procedures, benefits, and guidelines for all staff members.",
  },
  {
    id: "3",
    title: "Safety Protocol Updates",
    department: "Engineering",
    tags: ["safety", "protocols", "manufacturing"],
    uploadedBy: "John Staff",
    uploadedById: "2",
    date: "2024-01-12",
    status: "approved",
    visibility: "public",
    thumbnail:
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    description: "Updated safety protocols for manufacturing floor",
    fileName: "Safety_Protocols_2024.pdf",
    summary:
      "Updated safety protocols and procedures for manufacturing operations, including new equipment guidelines and emergency procedures.",
  },
  {
    id: "4",
    title: "Logistics Optimization Report",
    department: "Logistics",
    tags: ["logistics", "optimization", "report"],
    uploadedBy: "John Staff",
    uploadedById: "2",
    date: "2024-01-08",
    status: "pending",
    thumbnail:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    visibility: "private",
    description: "Internal report on logistics optimization strategies",
    fileName: "Logistics_Report_Q1.pdf",
    summary:
      "Detailed analysis of current logistics operations with recommendations for optimization and cost reduction strategies.",
  },
];

export const mockStats = {
  totalDocuments: 1247,
  totalStorage: "45.2 GB",
  recentUploads: 23,
  activeUsers: 89,
  popularCategories: [
    { name: "Finance", count: 234 },
    { name: "HR", count: 187 },
    { name: "Marketing", count: 156 },
    { name: "Technical", count: 145 },
    { name: "Strategy", count: 98 },
  ],
  uploadTrend: [
    { date: "2024-01-01", count: 12 },
    { date: "2024-01-02", count: 18 },
    { date: "2024-01-03", count: 15 },
    { date: "2024-01-04", count: 22 },
    { date: "2024-01-05", count: 19 },
    { date: "2024-01-06", count: 25 },
    { date: "2024-01-07", count: 21 },
  ],
};

export const departments = ["Quality", "HR", "Engineering", "Logistics"];
