import { PureComponent } from 'react'
import t from 'prop-types'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static propTypes = {
    children: t.func.isRequired
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    // requests para logs aqui
    console.log('error: ', error)
    console.log('info: ', info.componentStack)
  }

  render () {
    return this.props.children(this.state.hasError)
  }
}

export default ErrorBoundary
