import { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    // requests para logs aqui
  }

  render () {
    return this.props.children(this.state.hasError)
  }
}

export default ErrorBoundary