# THE STANDING SLIP
**The yard's open work · Ingram Manor LLC · opened 24 August 2026**

Every other slipway plans one build. This one holds the work that is not yet a
build — the loose items, the recorded-not-chased, the things a session
discovers and the next session must not rediscover by accident. It is a slipway,
so it obeys the slipway's law:

> **A MOVE IS NOT DONE WHEN THE FILE IS UPLOADED. IT IS DONE WHEN ITS
> ACCEPTANCE TEST PASSES.**

This is the durable home for open items. When an item grows large enough to need
its own phases, it graduates to its own slipway and leaves here. Until then it
lives here, stated as a move — what it is, what it unblocks, and how you will
know it is done. **The chat is not enough; this file is the memory the chat
cannot keep.**

Kept by hand. Reviewed at the top of a session, not the bottom.

---

## THE HONEST CONSTRAINT

The same one every slipway names: the captain deploys, uploads, runs SQL, sets
secrets, and verifies by opening. The assistant reads, reasons, and writes files
but cannot reach, push, or see the result. So every move below ends in a check
**the captain can perform by opening something** — not a claim the assistant
can make alone.

---

## THE STANDING WORK — stated as moves

Ordered by how much it hurts to leave undone.

### 1 · Wire `probe-ordnance` to read `fleet.json`
**The keystone of the autonomy step.** The probe still carries its tube cadences
hardcoded in its own body; `fleet.json` now holds the same declaration as a
register. Until the probe reads the register, the two agree only because one was
copied from the other, and they will drift.
- **Unblocks:** changing the fleet becomes editing one declaration; the checker
  and the window both follow. The ship keeps its own schedule honest.
- **Acceptance test:** edit a cadence or state in `fleet.json` alone, run the
  probe, and see the probe's output change to match — with no edit to the probe.

### 2 · Wire THE WEEK's cron
The one red card on the fleet status. Content is loaded in the hold (6 issues);
the tube has fired zero times, almost certainly because the `[triggers]` cron
block was never registered in the Worker's `wrangler.toml`. Diagnosed 13 July,
again 24 Aug.
- **Unblocks:** the weekly issue actually publishes; the first act of resumption.
- **Acceptance test:** dry-run once by hand, confirm the ledger, then arm the
  cron; the following Sunday, `fleet-status.html` shows THE WEEK green.

### 3 · Fix the Amenti Dispatch date sensor
It reports a last-fired date in the future (negative age), which passes a
`< threshold` test and shows green — a broken sensor behind a green lamp. Must be
fixed **without touching the `dailyplanet:` mechanism name** (see
RULING-THE-DISPATCH-TWO-NAMES).
- **Unblocks:** the Dispatch's status can be trusted.
- **Acceptance test:** the probe reports a real, non-negative age for the
  Dispatch, and `fleet-status.html` shows it accordingly.

### 4 · Finish the `SOURCES.semantics.json` upload
The 123-entry version describing `fleet.json` and `fleet-status.html` has not
landed — repeated uploads kept committing the old 121-entry copy. Until it does,
the `:22` walk reports two files unindexed.
- **Unblocks:** clean drift report; the two fleet files described.
- **Acceptance test:** the source index run reports `unindexed: 0`, and the file
  on GitHub shows 123 entries / contains `fleet-status`.

### 5 · Restore the hall's brief-quoting, correctly
The hall cites but does not quote, because the proxy's `SYSTEM_CHARS` is 20000
by policy and the two 6 KB slices overran it. To restore quoting, do **not**
raise the wall — send one short slice (≤ ~2000 chars) only when a question needs
it. (`MAX_BRIEFS` 0 → 1, `BRIEF_SLICE` → ~2000.)
- **Unblocks:** the hall answers with a passage, not just a pointer, staying
  under the wall.
- **Acceptance test:** ask the hall a question that needs a brief; it quotes a
  short passage; the proxy does not 413.

### 6 · Teach an instrument to walk the Docket
`probe-ordnance` does not walk the mint tube. The first case-set closed 13 July
with zero arguments submitted — learned because a human read a date, not because
anything watched. A silent court should be seen by an instrument.
- **Unblocks:** the Docket's silence becomes a reading, not a surprise.
- **Acceptance test:** the probe (or a sibling) reports the Docket's real state
  from the mint, and `fleet-status.html` shows it instead of "not walked yet."

### 7 · Verify Amenti Studios Phase One
The podcast tube is marked `planned`. Studios (source material, not spec) says
the keystone — `/speak` content-addressed R2 caching — was "buildable, status
unconfirmed." Confirm whether it ever shipped before treating the tube as live.
- **Unblocks:** the podcast tube's true state is known, not assumed.
- **Acceptance test:** a read of the Worker confirms whether `/speak` persists
  to R2; `fleet.json`'s podcast state is updated to match reality.

### 8 · The deck-card crops
Several cards on the arena deck read too tight — Bram Stoker, Helen Keller,
Seneca named so far. The crop rule (`object-fit:cover; object-position:50% 20%`)
suits most cards; a few need per-card overrides or `contain`. The captain will
**walk the deck and bring the list** rather than change the global rule.
- **Unblocks:** the deck reads right without disturbing the 48 cards that are fine.
- **Acceptance test:** the named cards show their subject fully; the rest are
  unchanged.

### 9 · The churn signal (idea, not yet a build)
`SOURCES.semantics.json` has been edited often lately. Raw edit-counts are
vanity — git already has them. The *useful* form is a finding: a small probe
reads git's own history and flags files churning unusually for their kind, the
way the drift report flags unindexed files. **Recorded as an idea; not worth
building over higher-value work.** Promote to its own slipway if it earns it.
- **Unblocks:** nothing yet — held in reserve.
- **Acceptance test:** n/a until adopted.

---

### 10 · Decide the direct-push workflow (PROPOSED — see its own brief)
The download-edit-upload loop is a tax on every session, and hand-editing is off
the table. A full proposal exists: `BRIEF-THE-DIRECT-PUSH-QUESTION.md` — the
assistant commits to the repo directly via a fine-grained GitHub token, with
safety rails (branch-not-main, diff-then-approve, revert, start-small). NOT
adopted. The captain flagged the real risk: a faster workflow carries faster
mistakes, and the manual slowness has been an unplanned checkpoint the whole
history of the project. Rejected along the way: breaking up Page1 (the monolith
is a VIRTUE in an already-fragmented system — do not fragment the one coherent
artifact). Move: read the brief, decide adopt-or-keep-manual, and if adopt, pick
the rail and the Phase-1 file. The manual road stays open until then.

### 11 · Close the card-originals exposure (DECISION PENDING — the last known hole)
The deck cards and terminal plates on the site (`img/{key}-card.jpg`,
`-terminal.jpg`, `-thumb.jpg`) are baked DISPLAY versions. The ORIGINALS —
full-res source images before cropping — live ONLY on the captain's hard drive.
One copy, one disk, nothing watching it. A true single-point-of-failure, and the
last known hole after the library was closed.

WHAT WE KNOW (read 25 Aug):
- `img/MANIFEST.json` records each image's provenance — `source` (original
  filename, e.g. `openart-sample_…jpg`), `crop` (e.g. "trimmed 16px to 0.571"),
  `prompt_file`, `seed`, `note`. So the RECIPE is known and in the repo.
- But the original FILES are referenced by name only — they are NOT in any repo.
- The crop is lossy: display versions cannot rebuild the originals.

OPTIONS (weighed, not chosen):
- A · private `Amenti-Originals` repo — rides the ARK (add it to the Ark's repo
  list → daily verified off-provider backup automatically); instrumentable later.
  RECOMMENDED fit for this ship. Caveat: full-res images can make a repo heavy.
- B · R2 — cheaper for large binaries, but not versioned and needs its own upload
  path.
- C · external/cloud drive — simple, but uninstrumented (Silent Signature: nothing
  would know or verify it happened).

STANDING RULES: do NOT put originals in the PUBLIC `img/` (masters ≠ display, and
they'd bloat the site). Do NOT delete from the hard drive — add copies, never move.
If a repo is chosen, the ARK's repo list must be extended to include it (it bundles
six today).

Captain not ready to decide (25 Aug) — correctly deferred; moving irreplaceable
source files deserves fresh eyes, not the end of a long session. Move: pick the
home (A/B/C), get the originals off the single drive, confirm the Ark covers it,
then (later) instrument it against the MANIFEST so you can SEE which originals are
safely stored.

## THE CRITICAL PATH — what gates what

| # | Move | Unblocks |
|---|---|---|
| 1 | Finish the semantics upload (#4) | clean drift; the register honest |
| 2 | Wire `probe-ordnance` to `fleet.json` (#1) | the autonomy loop closes |
| 3 | Wire THE WEEK's cron (#2) | resumption begins; a press fires |
| 4 | Fix the Dispatch sensor (#3) | the fleet status can be trusted |
| 5 | Walk the Docket + Studios (#6, #7) | the last two tubes become readings |

Items 5, 8, 9 are independent — do them when they surface, not in sequence.

---

## DECISIONS THE ASSISTANT SHOULD NOT MAKE ALONE

- **Arming THE WEEK's cron** — it touches the Worker that handles publishing.
  Dry-run, confirm, then the captain arms it.
- **Any change to the `dailyplanet:` mechanism** — the name is legally and
  structurally load-bearing. Surface-only, always.
- **Which deck cards are wrong** — the captain walks the deck; the eye is the
  instrument here.
- **Where the card originals live / moving the source files** — irreplaceable
  art, real storage decision (repo vs R2 vs drive), possibly a new repo + the
  Ark's repo list. The captain decides the home; don't move files without it.
- **Adopting direct push / creating a write-token** — it changes how the whole
  ship is built and can reach the live flagship in one motion. The captain
  decides if and when, and it stages in (see the brief). Never push to `main` on
  `Page1.html` unattended.

---

*Opened 24 Aug 2026, seeded from the fleet-legible session and its briefs. Add
a move when a session surfaces one; close it when its test passes; graduate it
to its own slipway when it grows phases. Read this at the top of a session — it
is the yard's memory between the tides.*
