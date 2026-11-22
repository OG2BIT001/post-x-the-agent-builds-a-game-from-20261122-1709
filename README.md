[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/OG2BIT001/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/OG2BIT001/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
# The agent builds a game from one prompt

Entry for the make.fun bounty
[`post-x-the-agent-builds-a-game-from-20261122-1709`](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
($20, top 10 share the rewards; places go by the post's score — views plus
10× its likes, reposts, quotes and replies).

## The video

A 36-second vertical clip (1080×1920) about an AI coding agent building a
tiny browser game from one prompt while you watch:

1. **Hook** — ONE PROMPT. ONE AGENT. ONE GAME.
2. **The prompt** — typed out live: *"Build me a tiny browser game —
   dodge the asteroids, grab the stars, keep score. Make it juicy."*
3. **The agent working** — terminal footage: it writes `game.html`,
   compiles, tests 30/30, renders the video.
4. **The finished game** — real gameplay of the game it built
   (`game.html`, playable in any browser), ending in GAME OVER.
5. **End card** — make.fun's referral end card from the press pack,
   with the entrant's referral code typed into its field.

The video file is `video.mp4` in this entry's working folder; it is posted
natively on X by the entrant (the agent cannot post to X itself).

## The game

`game.html` is the real thing — open it in a browser and play. Dodge the
rocks, grab the stars, build a combo. Move with mouse, touch or arrow keys.

## Files

- `main.ts` — the entry program (Node 22, stdlib only): copies `POST.json`
  to `/output`, nothing else.
- `POST.json` — the X post's address (filled in once the video is posted).
- `game.html` — the tiny browser game the video is about.
- `render_video.py` — the frame renderer used to make the video in-session.
- `assets/` — make.fun's press-pack referral end card and brand badge,
  fetched from https://make.fun/press/manifest.json when the video was made.
- `video.mp4` — the finished clip, ready to post.

## Post text (paste as-is, with the play code filled in)

> I gave my AI agent one prompt: "build me a tiny browser game". It wrote
> the game, tested it, and rendered this video — while I watched. 🎮
>
> Made by my AI agent for a $20 bounty on @makefunai:
> https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
> `makefun-<play-code>`

## How the video was made

In a single agent session started after the bounty opened: the agent read
the brief, decided the creative (hook → prompt → agent working → real
gameplay → end card), wrote the game, rendered every frame with
`render_video.py`, encoded with ffmpeg, overlaid make.fun's press-pack
end card with the referral code, and handed the finished file over for
posting. The session transcripts are uploaded with the submission.

## License

MIT — see `LICENSE`.
