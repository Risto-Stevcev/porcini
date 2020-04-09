"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morphdom_1 = __importDefault(require("morphdom"));
class Stream extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        if (this.stream) {
            const { input } = this.stream;
            input(node => {
                if (node instanceof HTMLElement) {
                    if (this.children.length === 0)
                        this.appendChild(node);
                    else
                        window.requestAnimationFrame(() => {
                            morphdom_1.default(this.children[0], node);
                        });
                }
            });
        }
    }
    disconnectedCallback() {
        if (this.stream) {
            const { output } = this.stream;
            if (output)
                output();
        }
        window.requestAnimationFrame(() => {
            while (this.firstChild)
                this.removeChild(this.firstChild);
        });
    }
    get stream() {
        return this._stream;
    }
    set stream(stream) {
        this._stream = stream;
    }
}
if (!customElements.get('x-stream'))
    customElements.define('x-stream', Stream);
const stream = (stream) => {
    const element = document.createElement('x-stream');
    element.stream = stream;
    return element;
};
exports.default = stream;
