import { async as hyphae } from 'hyphae';
declare class Stream extends HTMLElement {
    private _stream;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    get stream(): hyphae.Stream<HTMLElement>;
    set stream(stream: hyphae.Stream<HTMLElement>);
}
declare const stream: (stream: hyphae.Stream<HTMLElement>) => Stream;
export default stream;
