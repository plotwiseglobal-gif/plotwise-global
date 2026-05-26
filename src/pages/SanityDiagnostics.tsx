import React, { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';

const QUERY = '*[_type == "blog"][0...5]';

const Badge = ({ children, color = 'bg-gray-100 text-gray-800' }: any) => (
  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${color}`}>{children}</span>
);

const Field = ({ label, children }: any) => (
  <div className="sm:flex sm:items-start sm:justify-between py-2 border-b last:border-b-0">
    <div className="text-sm text-gray-600 sm:w-1/3">{label}</div>
    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3">{children}</div>
  </div>
);

const SanityDiagnostics: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('import.meta.env', import.meta.env);

    const run = async () => {
      try {
        const res = await client.fetch(QUERY);
        if (Array.isArray(res)) setCount(res.length);
        else setCount(0);
        setError(null);
      } catch (err: any) {
        console.error('Sanity fetch error', err);
        setError(err?.message ?? String(err));
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  const projectId = String(import.meta.env.VITE_SANITY_PROJECT_ID ?? '');
  const dataset = String(import.meta.env.VITE_SANITY_DATASET ?? '');
  const apiVersion = String(import.meta.env.VITE_SANITY_API_VERSION ?? '');
  const useCdn = String(import.meta.env.VITE_SANITY_USE_CDN ?? 'false');

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Sanity Diagnostics</h1>

        <div className="mb-4">
          <Badge color={error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}>
            {loading ? 'Checking…' : error ? '❌ Connection Failed' : '✅ Connected Successfully'}
          </Badge>
        </div>

        <div className="space-y-2">
          <Field label="projectId">{projectId || <span className="text-gray-400">(not set)</span>}</Field>
          <Field label="dataset">{dataset || <span className="text-gray-400">(not set)</span>}</Field>
          <Field label="apiVersion">{apiVersion || <span className="text-gray-400">(not set)</span>}</Field>
          <Field label="useCdn">{useCdn}</Field>
          <Field label="Last fetch status">{loading ? 'Loading…' : error ? <span className="text-red-600">{error}</span> : 'Success'}</Field>
          <Field label="Fetched document count">{loading ? '—' : count}</Field>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <div className="font-medium">Dev debug</div>
          <pre className="mt-2 bg-gray-100 p-3 rounded overflow-auto text-xs">{JSON.stringify({ env: import.meta.env }, null, 2)}</pre>
        </div>

        <div className="mt-6 text-right">
          <a href="/" className="text-sm text-blue-600 hover:underline">Back to site</a>
        </div>
      </div>
    </div>
  );
};

export default SanityDiagnostics;
