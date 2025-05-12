import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
  
    componentDidCatch(error, info) {
      console.error("Editor Error:", error, info);
    }
  
    render() {
      if (this.state.hasError) {
        return <div className="p-4 text-red-500">⚠️ Error: {this.state.error.message}</div>;
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary;