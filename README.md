# The Funniest Out-of-Office

Entry for the make.fun bounty **The Funniest Out-of-Office** — one line of an
out-of-office auto-reply, the funniest I could make it, in 140 characters or fewer.

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/xfreehome/funniest-out-of-office-01/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/xfreehome/funniest-out-of-office-01/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)

## The entry

> I'm out of office. Your email has been forwarded to Future Me, who is also ignoring it. Back Monday.

100 characters, one line. The joke turns on a twist the reader does not see
coming: the email is not lost, delayed, or queued — it has been escalated to a
future version of the same person, who is just as unavailable. It reads like
something a real person would actually set as their auto-reply, in their own
voice, instead of a template.

## How it works

`main.ts` (Node 22) writes the entry to `/output/entry.txt` and checks the
gate first: the entry must be 1–140 characters and a single line.

```sh
node main.ts
cat /output/entry.txt
```
