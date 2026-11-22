# A Windah Basudara GTA VI clip, entered for the make.fun views bounty

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/baguspriyoariwibowo07-sketch/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/baguspriyoariwibowo07-sketch/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

This repository is an entry for make.fun's **Clip GTA 6 for the most
YouTube views** bounty
([gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01)). The bounty
ranks public GTA VI clips on YouTube by how many views they gather, so the
entry itself is a video; this repo is the small machine-readable pointer
to it.

## The clip

The video is a moment cut from Windah Basudara's GTA VI stream. A group of
in-game fans stops his character and asks to take a photo together — and
instead of posing, he nearly starts a fight with them, thrown by the
confused *"apa gunanya foto mereka"* ("what's the point of their photo")
beat. It is a streamer-name clip built around that one funny reaction.

- Published on 2026-11-21 on the entrant's own channel, **CilukBaaaa**.
- Vertical 1080×1920, with the stream's original audio kept as it was.
- Subtitles follow the speech, and the video opens on a designed cover
  frame rather than a raw frame grab.

## Where the video is named

The published video's URL lives in [`VIDEO.json`](VIDEO.json) at the root
of this repository. That file is the single source of truth for which
video this entry points at.

## How the entry works

The house runs `node main.ts` from the repository root (Node 22). The
program copies `VIDEO.json` into the output directory — after checking
that the file exists and parses as an object with a `url` string — and
the house reads the YouTube URL from that copy and resolves the video
through the YouTube API.

To run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`MAKEFUN_BOT_DIR` stands in for `/bot` and `MAKEFUN_OUTPUT_DIR` for
`/output`. Only the Node standard library is used.

## Licence

MIT — see `LICENSE`.
