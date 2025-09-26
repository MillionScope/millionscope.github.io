"use client"

import React, { Component } from "react"
import { Callout } from "@/nextra"
import { CenteredLayout } from "@/lib/components/layout"
import { cn } from "@/lib/utils"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasError: false, 
      errorMessage: "",
      errorDetails: null
    }
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true,
      errorMessage: error.message
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error)
    console.error("Error info:", errorInfo)
    
    this.setState({ 
      errorMessage: error.message,
      errorDetails: errorInfo
    })

    // You could send error to error reporting service here
    // reportError(error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      errorMessage: "",
      errorDetails: null
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <CenteredLayout className="bg-gray-50 dark:bg-gray-900">
          <div className="max-w-md w-full mx-4">
            <Callout type="error">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Something went wrong</h2>
                
                <div className="space-y-2">
                  <p className="text-sm">
                    We apologize for the inconvenience. Please try refreshing the page or visit our{" "}
                    <a 
                      className="text-blue-600 hover:text-blue-800 underline font-medium" 
                      href="https://millionscope.github.io"
                    >
                      homepage
                    </a>.
                  </p>
                  
                  {this.state.errorMessage && (
                    <details className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                      <summary className="cursor-pointer font-medium">Error details</summary>
                      <pre className="mt-2 whitespace-pre-wrap break-words">
                        {this.state.errorMessage}
                      </pre>
                    </details>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={this.handleRetry}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md",
                      "bg-blue-600 text-white hover:bg-blue-700",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                      "transition-colors duration-200"
                    )}
                  >
                    Try Again
                  </button>
                  
                  <button
                    onClick={() => window.location.reload()}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md border",
                      "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                      "transition-colors duration-200"
                    )}
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
            </Callout>
          </div>
        </CenteredLayout>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
