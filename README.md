# Last Words Before the Unplugging

[![make.fun · u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/prosky1/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c-entry/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/prosky1/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c-entry/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

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
