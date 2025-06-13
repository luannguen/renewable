'use client';

import { useState } from 'react';

export default function DebugAPI() {
    const [logs, setLogs] = useState([]);
    const [companyInfo, setCompanyInfo] = useState(null);
    const [headerInfo, setHeaderInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    const log = (message) => {
        console.log(message);
        setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    const testCompanyInfoAPI = async () => {
        setLoading(true);
        log('Testing Company Info API...');

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            log(`API URL: ${apiUrl}`);

            const url = `${apiUrl}/api/company-info`;
            log(`Full URL: ${url}`);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

            log(`Response status: ${response.status}`);
            log(`Response ok: ${response.ok}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            log(`Response data: ${JSON.stringify(data, null, 2)}`);
            setCompanyInfo(data);

        } catch (error) {
            log(`Error: ${error.message}`);
            console.error('Company Info API Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const testHeaderInfoAPI = async () => {
        setLoading(true);
        log('Testing Header Info API...');

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const url = `${apiUrl}/api/header-info`;
            log(`Full URL: ${url}`);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

            log(`Response status: ${response.status}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            log(`Response data: ${JSON.stringify(data, null, 2)}`);
            setHeaderInfo(data);

        } catch (error) {
            log(`Error: ${error.message}`);
            console.error('Header Info API Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const clearLogs = () => {
        setLogs([]);
        setCompanyInfo(null);
        setHeaderInfo(null);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">API Debug Page</h1>

            <div className="mb-6 space-x-4">
                <button
                    onClick={testCompanyInfoAPI}
                    disabled={loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Test Company Info API
                </button>

                <button
                    onClick={testHeaderInfoAPI}
                    disabled={loading}
                    className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Test Header Info API
                </button>

                <button
                    onClick={clearLogs}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Clear Logs
                </button>
            </div>

            {loading && <p className="text-blue-600">Loading...</p>}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Logs</h2>
                    <div className="bg-gray-100 p-4 rounded max-h-96 overflow-y-auto">
                        {logs.length === 0 ? (
                            <p className="text-gray-500">No logs yet. Click a button to test APIs.</p>
                        ) : (
                            logs.map((log, index) => (
                                <div key={index} className="mb-1 text-sm font-mono">
                                    {log}
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">API Responses</h2>

                    {companyInfo && (
                        <div className="mb-4">
                            <h3 className="font-semibold">Company Info:</h3>
                            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                                {JSON.stringify(companyInfo, null, 2)}
                            </pre>
                        </div>
                    )}

                    {headerInfo && (
                        <div>
                            <h3 className="font-semibold">Header Info:</h3>
                            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                                {JSON.stringify(headerInfo, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
                <div className="bg-gray-100 p-4 rounded">
                    <p><strong>NEXT_PUBLIC_API_URL:</strong> {process.env.NEXT_PUBLIC_API_URL}</p>
                    <p><strong>NEXT_PUBLIC_API_KEY:</strong> {process.env.NEXT_PUBLIC_API_KEY ? '***' + process.env.NEXT_PUBLIC_API_KEY.slice(-4) : 'Not set'}</p>
                </div>
            </div>
        </div>
    );
}
