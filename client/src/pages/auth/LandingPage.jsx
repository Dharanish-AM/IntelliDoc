import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Brain, 
  Search, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  Sparkles,
  Eye,
  Tag
} from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Automate OCR extraction and AI classification to streamline document workflows across admin, staff, and user roles.'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Advanced search with tagging and metadata to quickly locate documents while maintaining secure role-based access.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Comprehensive audit logging and role-based permissions ensure your documents are protected and access is controlled.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Accelerate processing with real-time synchronization and automated workflows tailored for your team’s roles.'
    }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: 'Document Preview',
      description: 'Interactive previews with detailed metadata enable quick reviews without compromising security.'
    },
    {
      icon: Tag,
      title: 'Smart Tagging',
      description: 'Manage tags efficiently to categorize documents automatically and support streamlined retrieval.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Role-based access controls empower admins, staff, and users to collaborate securely and effectively.'
    },
    {
      icon: Sparkles,
      title: 'AI Insights',
      description: 'Extract key information automatically to enhance decision-making and reduce manual effort.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IntelliDoc
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/auth" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8 border border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Document Intelligence
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Smart & Secure
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent block">
                Document Control
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Empower admins, staff, and users with automated workflows, secure access, and intelligent document organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/dashboard"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center"
              >
                Explore IntelliDoc
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 relative">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-2 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 shadow-inner">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Document Preview */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-gray-900">Document Preview</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Title:</strong> Financial Report Q2</p>
                      <p><strong>Uploaded by:</strong> Staff_AuditDept</p>
                      <p><strong>Tags:</strong> #Finance #Quarterly #Internal</p>
                      <p><strong>Date:</strong> July 15, 2025</p>
                    </div>
                  </div>

                  {/* AI Analysis */}
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-center mb-4">
                      <Brain className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-900">AI Analysis</span>
                    </div>
                    <div className="space-y-3 text-sm text-gray-700">
                      <p>✅ OCR Extracted: "Q2 profits increased by 17%..."</p>
                      <p>🏷️ Auto-Tagged: Finance, Reports, Q2</p>
                      <p>📝 Summary: This document outlines quarterly revenue growth and key financial metrics for strategic review.</p>
                    </div>
                  </div>

                  {/* Smart Search */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Search className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-gray-900">Smart Search</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>
                        <strong>Search:</strong> “Audit 2024”
                      </div>
                      <div className="mt-2">
                        <p>1. <strong>Document:</strong> Audit_Team_Review.pdf</p>
                        <p className="text-xs text-gray-500">Tags: #Audit #Compliance</p>
                      </div>
                      <div>
                        <p>2. <strong>Document:</strong> 2024_Financial_Audit.docx</p>
                        <p className="text-xs text-gray-500">Tags: #Finance #Audit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Document Control & Security
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate workflows, maintain audit trails, and secure documents with AI-driven tagging and role-based management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/60">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{capability.title}</h4>
                  <p className="text-sm text-gray-600">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Intelligent Document Organization?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join teams leveraging AI to automate workflows and collaborate securely across roles.
          </p>
          <Link 
            to="/dashboard"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            Start Using IntelliDoc
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                IntelliDoc
              </span>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              AI-Powered Workflow, Simplified Document Management.
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">&copy; 2025 IntelliDoc. Intelligent document management reimagined.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;