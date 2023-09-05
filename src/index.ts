export function test() {
  return "works!";
}

import type { Context } from 'aws-lambda'

export const halo = (e?: any, c?: Context) => { return {} as any}

console.log({hi: halo})