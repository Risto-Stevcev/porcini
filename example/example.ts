import { async } from 'hyphae'
import { div, br, span, stream } from '..'

const { pipe, interval, map } = async

const clock = pipe(
  interval(1000),
  map(() => span(new Date().toString())),
  stream
)

document.body.appendChild(
  div([
    span('The time is:'),
    br(),
    clock
  ])
)
