import { useEffect } from 'react'
import html from './scene.html?raw'
import { init } from './experience.js'

export default function App() {
  useEffect(() => init(), [])
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
