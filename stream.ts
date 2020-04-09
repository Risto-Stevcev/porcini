import { async as hyphae } from 'hyphae'
import morphdom from 'morphdom'

class Stream extends HTMLElement {
  private _stream: hyphae.Stream<HTMLElement>

  constructor() {
    super()
  }

  connectedCallback() {
    if (this.stream) {
      const { input } = this.stream
      input(node => {
        if (node instanceof HTMLElement) {
          if (this.children.length === 0) this.appendChild(node)
          else
            window.requestAnimationFrame(() => {
              morphdom(this.children[0], node)
            })
        }
      })
    }
  }

  disconnectedCallback() {
    if (this.stream) {
      const { output } = this.stream
      if (output) output()
    }

    window.requestAnimationFrame(() => {
      while (this.firstChild) this.removeChild(this.firstChild)
    })
  }

  get stream() {
    return this._stream
  }

  set stream(stream: hyphae.Stream<HTMLElement>) {
    this._stream = stream
  }
}

if (!customElements.get('x-stream')) customElements.define('x-stream', Stream)

const stream = (stream: hyphae.Stream<HTMLElement>) => {
  const element = <Stream>document.createElement('x-stream')
  element.stream = stream
  return element
}

export default stream
