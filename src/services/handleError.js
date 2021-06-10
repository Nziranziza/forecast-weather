export default function handleError(error) {
    const code = (error && error.response && error.response.status) || 404
    const message =
      error?.response?.data?.error || error?.message || 'Oops! Something went wrong...'
    const err = {
      message,
      code
    }
    throw err
  }