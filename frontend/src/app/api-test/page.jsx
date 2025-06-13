'use client';

// API Test Page Component
// File: frontend/src/app/api-test/page.jsx

import { testApiConnections, testSingleEndpoint } from '@/lib/test-api';
import { useState } from 'react';

export default function ApiTestPage() {
    const [testResults, setTestResults] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [selectedTest, setSelectedTest] = useState('all');

    const runTests = async () => {
        setIsRunning(true);
        setTestResults(null);

        try {
            if (selectedTest === 'all') {
                const results = await testApiConnections();
                setTestResults(results);
            } else {
                const result = await testSingleEndpoint(selectedTest);
                setTestResults([{
                    name: selectedTest,
                    success: true,
                    data: result
                }]);
            }
        } catch (error) {
            setTestResults([{
                name: selectedTest,
                success: false,
                error: error.message
            }]);
        } finally {
            setIsRunning(false);
        }
    };

    const getStatusColor = (success) => {
        return success ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50';
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    API Connection Test
                </h1>

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Test Configuration</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Test:
                        </label>
                        <select
                            value={selectedTest}
                            onChange={(e) => setSelectedTest(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="all">All APIs</option>
                            <option value="health">Health Check</option>
                            <option value="company">Company Info</option>
                            <option value="homepage">Homepage Settings</option>
                            <option value="banners">Public Banners</option>
                            <option value="header">Header Info</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <p className="text-sm text-gray-600">
                            <strong>Backend URL:</strong> {process.env.NEXT_PUBLIC_API_URL || 'Not configured'}
                        </p>
                    </div>

                    <button
                        onClick={runTests}
                        disabled={isRunning}
                        className={`px-6 py-2 rounded-md font-medium ${isRunning
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                            } text-white transition-colors`}
                    >
                        {isRunning ? 'Running Tests...' : 'Run Tests'}
                    </button>
                </div>

                {/* Test Results */}
                {testResults && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Test Results</h2>

                        <div className="space-y-4">
                            {testResults.map((result, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-lg border ${result.success ? 'border-green-200' : 'border-red-200'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-medium text-gray-900">
                                            {result.name}
                                        </h3>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                result.success
                                            )}`}
                                        >
                                            {result.success ? 'SUCCESS' : 'FAILED'}
                                        </span>
                                    </div>

                                    {result.endpoint && (
                                        <p className="text-sm text-gray-600 mb-2">
                                            <strong>Endpoint:</strong> {result.endpoint}
                                        </p>
                                    )}

                                    {result.responseTime && (
                                        <p className="text-sm text-gray-600 mb-2">
                                            <strong>Response Time:</strong> {result.responseTime}ms
                                        </p>
                                    )}

                                    {result.error && (
                                        <div className="text-sm text-red-600 mb-2">
                                            <strong>Error:</strong> {result.error}
                                        </div>
                                    )}

                                    {result.status && (
                                        <p className="text-sm text-gray-600 mb-2">
                                            <strong>Status:</strong> {result.status}
                                        </p>
                                    )}

                                    {result.data && (
                                        <details className="mt-2">
                                            <summary className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-800">
                                                View Response Data
                                            </summary>
                                            <pre className="mt-2 p-2 bg-gray-50 rounded text-xs overflow-auto max-h-40">
                                                {JSON.stringify(result.data, null, 2)}
                                            </pre>
                                        </details>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Instructions */}
                <div className="mt-8 bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        Instructions
                    </h3>
                    <div className="text-blue-800 space-y-2">
                        <p>1. Make sure your backend server is running on port 3000</p>
                        <p>2. Check that MongoDB is connected</p>
                        <p>3. Verify CORS settings allow frontend origin</p>
                        <p>4. Run tests to check API connectivity</p>
                    </div>
                </div>

                {/* Troubleshooting */}
                <div className="mt-6 bg-yellow-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                        Common Issues
                    </h3>
                    <div className="text-yellow-800 space-y-2">
                        <p><strong>CORS Error:</strong> Check backend CORS configuration</p>
                        <p><strong>Connection Refused:</strong> Ensure backend is running</p>
                        <p><strong>404 Errors:</strong> Check API endpoint exists in backend</p>
                        <p><strong>500 Errors:</strong> Check backend logs and database connection</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
