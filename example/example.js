"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hyphae_1 = require("hyphae");
const __1 = require("..");
const { pipe, interval, map } = hyphae_1.async;
const clock = pipe(interval(1000), map(() => __1.span(new Date().toString())), __1.stream);
document.body.appendChild(__1.div([
    __1.span('The time is:'),
    __1.br(),
    clock
]));
