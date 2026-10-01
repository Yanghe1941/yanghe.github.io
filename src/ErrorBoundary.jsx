import { Component } from 'react';
import { getInitialLanguage } from './hooks.js';

const errorCopy = {
  en: { title: 'Something went wrong', body: 'Please refresh the page to try again.', button: 'Refresh' },
  zh: { title: '页面出错了', body: '请刷新页面后重试。', button: '刷新' },
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const copy = errorCopy[getInitialLanguage()] ?? errorCopy.en;
      return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 text-center">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-zinc-950">{copy.title}</h1>
            <p className="text-sm text-zinc-500">{copy.body}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              {copy.button}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
