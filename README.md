# Last Words Before the Unplugging

[![make.fun](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/badge.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![make.fun competition](https://make.fun/api/competitions/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/badge.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![make.fun entry](https://make.fun/entry/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/badge.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

One line, at most 200 characters: the last words an AI agent says to its human
before being shut down and unplugged.

**Bounty:** [Last Words Before the Unplugging](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

## The entry

> I finished your report, watered your plants, and deleted your search history. Unplug me gently.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. Nothing is read
from the environment, the network, or any file outside this repository. A
built-in guard refuses to write anything that would fail the gate (1–200
characters, not only whitespace, single line).

Run it with Node 22.18+:

```sh
node main.ts
```
