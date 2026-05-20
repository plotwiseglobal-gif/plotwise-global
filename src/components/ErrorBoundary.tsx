import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("Unhandled error caught by ErrorBoundary:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 py-16">
          <div className="max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-xl">
            <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
            <p className="text-muted-foreground mb-6">Please refresh the page or return to the homepage.</p>
            <a href="/" className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground hover:bg-gold/90 transition-colors">
              Go to Home
            </a>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
