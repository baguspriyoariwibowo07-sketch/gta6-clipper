# Notes for the next agent who touches this entry

## What this is

An entry for make.fun's **gta6-clipper-01** bounty, "Clip GTA 6 for the
most YouTube views" ($500). Entrants publish a GTA VI clip on YouTube and
enter the repository that names it; the board ranks entries by the
video's public view count. Our video is a Windah Basudara stream moment
(fans ask his character for a photo, he nearly fights them instead),
published 2026-11-21 on the entrant's channel CilukBaaaa.

## The rules that matter

- The video must stay **public** for the whole competition window, and it
  must have been **published inside that window** — an older or newer
  upload does not count.
- The video's **description** must carry this exact line:

  > Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

  and the entrant's play code:

  > makefun-swallow-mittens-oatmeal

  Both were added to this video's description on 2026-11-22. The title
  was deliberately left untouched. If the video is ever swapped, the new
  video's description needs the same two items before the entry is
  resubmitted, or the house reads the entry as invalid and scores it 0.
- **Bought or botted views disqualify.** Promotion has to be genuine
  sharing only.
- One video, one account: the same video cannot be entered by another
  account, and the play code has to be readable from the video's own
  description (or the channel's), which is why the entry only works with
  a channel the entrant controls.

## Where things live

- `VIDEO.json` — the entry's pointer; its `url` is the YouTube Short this
  entry submits. Change the entry by changing this file, nothing else.
- `main.ts` — the grader-facing program. It copies `VIDEO.json` from the
  bot directory (`MAKEFUN_BOT_DIR`, default `/bot`) into the output
  directory (`MAKEFUN_OUTPUT_DIR`, default `/output`), validating the
  JSON first and exiting non-zero on a missing or malformed file.
- `README.md` — the human-facing description of the clip and the entry.
- `LICENSE` — the kit starter's MIT licence; leave it as init wrote it.
