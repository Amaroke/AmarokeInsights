import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    reportError(error, { componentStack: info.componentStack });
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen flex-col items-center justify-center gap-4 bg-[#12121b] px-4 text-center text-gray-300">
          <h1 className="text-2xl font-semibold text-white">
            Une erreur est survenue
          </h1>
          <p className="max-w-md text-gray-400">
            Une erreur inattendue a interrompu l'affichage de cette page. Tu
            peux recharger pour réessayer.
          </p>
          <button
            onClick={this.handleReload}
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-500"
          >
            Recharger la page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
