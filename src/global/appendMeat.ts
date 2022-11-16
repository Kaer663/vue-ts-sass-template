export default function globalMeat() {
  if (process.env.NODE_ENV === 'production') {
    const meat = document.createElement('meta')
    meat.setAttribute('content', 'upgrade-insecure-requests')
    meat.setAttribute('http-equiv', 'Content-Security-Policy')
    document.head.appendChild(meat)
  }
}
