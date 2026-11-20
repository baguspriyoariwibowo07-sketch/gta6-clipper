# GTA 6 clip — "He Stole an Ambulance at 5 Stars"

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/baguspriyoariwibowo07-sketch/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/baguspriyoariwibowo07-sketch/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)


An entry for [make.fun](https://make.fun)'s **Clip GTA 6 for the most YouTube views**
bounty ([gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01)).

## The clip

One moment from GTA VI gameplay on Vice Beach: at a 5-star wanted level, Jason
drags a paramedic out of his ambulance — *"I kinda need this!"* — while the
paramedic yells *"Someone film this!"* The game then warns him about the new
6-star wanted level ("the cops won't give up until you're hunted down"), and
the stolen ambulance tears across the crowded beach with the police on its
tail and tourists scattering.

Vertical 1080×1920, 53.5 seconds, original game audio with subtitles that
follow the speech, and a closing pitch: viewers can earn money making clips
like this with AI on make.fun.

- Gameplay moment: 6:42–7:36 of "GTA 6 – CRAZY 5-Star Police Chase & Rampage
  at Vice Ocean Beach!" by Champs Network
  (https://www.youtube.com/watch?v=8-DRGbQ1IXc)
- The published video's URL lives in `VIDEO.json`.

## How this entry works

The house runs `node main.ts` from the repository root (Node 22). The program
copies `VIDEO.json` into the output directory; the house reads the YouTube URL
from that file and resolves the video through the YouTube API.

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`MAKEFUN_BOT_DIR` stands in for `/bot` and `MAKEFUN_OUTPUT_DIR` for `/output`,
the paths the grader uses. The program uses only the Node standard library.

## Licence

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=9kfkn4se&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
