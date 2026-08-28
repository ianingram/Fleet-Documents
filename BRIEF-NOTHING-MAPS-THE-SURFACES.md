# BRIEF — NOTHING MAPS THE SURFACES
### Ingram Manor LLC · 27 August 2026 · a gap, found by tripping over it six times in one day

Every register on this ship maps the MACHINERY.

```
  SOURCES.json      147 documents          what exists, and whether it 200s
  FLEET_MANIFEST     7 ships, 14 crew      what each FILE declares, and its drift
  PANES.json        17 panes               the Fleet-Documents pages
  KEYS.json          1,011 keys            which key reaches which soul
  PLATES.json                              what art exists
  WORKERS.json       6 workers             crons, bindings, secret names
```

**Nothing maps the places a person can BE.**

Not one file in the fleet can answer *how many surfaces does Amenti have*, and
neither could the assistant that wrote this, after a full day inside the code.

---

## 1 · HOW IT WAS FOUND

Not by looking. By tripping over it, six times, in a single session — and every
time the same shape: a thing was built, and then somebody asked whether it
reached a surface nobody had listed.

| | |
|---|---|
| the dial | wired to `toggle()`. Does it fire on **counsel**? Nobody had a list. |
| figure memory | works on the full prompt. **The lean prompt took the parameter and never rendered it** — memory would have worked on one path and vanished on the other, with nothing to say which path a reader was on. Caught by a test, not by a map. |
| the visit reading | measures the terminal. Not counsel, not the library, not the quiz. Discovered *after* it was built and wired. |
| the hall | its own surface, in its own file, on its own page. |
| the doors pane | whitelists two repos of four. `Fleet-Documents` and `Gameroom0.0` are listed as unconfirmed because nobody had confirmed them. |
| **the chess game** | **lives in a seventh repo.** It is a tab on the nav bar. |
| **the hall** | `hall.html`. **NO REGISTER CONTAINS IT.** `SOURCES.json` holds `HALL.md`, `HALL-STATE.json` and `probe-hall.mjs` — its meaning, its counts, its instrument, all three undescribed — and not the page. The manifest names no such ship. It is on real glass, it answers questions, it carries a QR code. |
| **Page2.html** | linked from the flagship, with its OWN microphone, its own chunker (`MAX_CHARS = 1100`, cited in the proxy's cost caps) and its own generation path. Read about a dozen times in one day — as a constant in a cap, as "the client in Page2" in a contract — and **never once registered as a place a reader can go.** |

Seven discoveries, one cause. **This is not carelessness. It is the absence of a
register doing what absent registers do** — the same fault as the Harbor
`index.html` replaced for twelve hours, the same fault as the unversioned store,
the same fault as a brief nobody had written a sentence about.

---

## 2 · WHY THE MANIFEST CANNOT ANSWER THIS

The obvious objection is that `FLEET_MANIFEST` already does this. It does not,
and the reason is precise rather than territorial.

**A ship is a FILE.** Read 27 Aug, `ships[0]`:

```json
{ "file": "Page1.html", "name": "The Stardust Engine", "bytes": 525513,
  "sha256": "09af71283b9fc495",
  "declares": ["AMENTI_CHARS","AMENTI_VOICE","Amenti.terminal","AmentiCost", …23] }
```

That is an excellent reading of a file. It is not a reading of a place.

**Page1.html is ONE ship containing SIX surfaces** — `data-page` attributes for
arena, codex, counsel, terminal, timeline and bookstore. The manifest has no key
for any of them. The words *terminal* and *counsel* appear in it only inside
prose descriptions of ships and engines; there is no list, nothing enumerates
them, and no question of the form *is counsel measured* can be asked of it.

And the nav bar carries **eleven tabs** against six `data-page` sections. The
difference is unaccounted for by any file.

```
  FLEET_MANIFEST    what the ship is MADE OF      files · globals · drift
  [ nothing ]       where a person can BE         and what happens there
```

**The manifest proves the gap by its own standard.** Its health block counts 30
UNDECLARED — files nothing claims. There is no equivalent count for surfaces,
because there is no claim for a surface to be undeclared against.

---

## 3 · THE ONE THE INDEX ALREADY KNEW

`SOURCES.json`, on `Gameroom0.0`:

> **game01** — *The gameroom. Linked from Page1's nav as GAMEROOM.*

The source index has known for weeks that a surface lives in a seventh repo and
is linked from the flagship's navigation. The manifest does not name it. The
panes register does not contain it. `doors.html`, built the same day as this
brief, leaves it UNLINKED because its Pages site was never confirmed.

**Three registers, an eleven-tab navigation bar, and a whole game nobody's map
can see.**

### The hall: known by NOBODY

Worse than the gameroom, and worse than Page2, because at least those are half
held somewhere.

`hall.html` is a live surface. It answers questions from `HALL.md`, it cites
documents, it carries a QR code and the copyright line, and a reader arrives at
it by name.

**No register in the fleet contains it.**

```
  SOURCES.json     HALL.md · HALL-STATE.json · probe-hall.mjs   (all undescribed)
                   hall.html                                     ABSENT
  FLEET_MANIFEST   no such ship
```

Three files ABOUT the hall are indexed. The place itself is not. The meaning is
registered, the counts are registered, the instrument that reads it is
registered — and the door a person walks through is in nobody's map.

**It is also the surface this session opened on**, and it took a day and a
direct question from the captain to notice it was missing.

### And the second application, half-known by both

`Page2.html` shows the split from the other side. The manifest HAS it — a named
ship, *The Sovereign Instrument*. **`SOURCES.json` does not have it at all**:
zero entries, in the register that walks the repos and verifies every path by
HTTP status, for a file the flagship links to.

So one register holds the file and cannot call it a place; the other maps places
a reader reads and has never seen it. **Each holds half, and the halves have
never been put together** — which is the whole of this brief in one file.

The gloss beside it is the other half of the point:

> **chess-test-client** — *development scaffolding, NOT A SURFACE THE READER
> MEETS.*

Somebody already had to make that distinction by hand, in prose, in a register
built for something else — because there was nowhere to record it as a fact.

---

## 4 · WHAT A SURFACE IS

The definition matters more than the file, because a bad one produces a register
that argues with the four that exist.

**A surface is a place a PERSON can be.** Not a file, not a route, not a
component. If somebody can arrive at it and something happens, it is one.

### AUDIENCE FIRST — and this is the cut that does the work

Ruled 27 Aug: **Admin and Fleet-Documents are for administrative persons.**

That is not a detail. It means the seventeen panes are NOT reader surfaces. A
stranger never sees the Harbor, the Keyring, the Plate Deck. They are the
captain's instruments, and they are surfaces — somebody stands there and reads
them — but not the same KIND.

```
  READER SURFACES     what a stranger can reach
                      the flagship's six sections · the hall · Page2
                      the gameroom · the reading vaults · the briefs

  OPERATOR SURFACES   what the captain reaches
                      the seventeen panes · Admin · what the probes write
```

**The split earns its place because the QUESTIONS DIFFER.** They are not two
labels on one field list:

| of a reader surface | of an operator surface |
|---|---|
| is it counted? | is it accurate? |
| does memory reach it? | when was it last read? |
| does the dial fire there? | does it fail loudly, or go quiet? |
| can a stranger get there, and from where? | does it disagree with its register? |

One field list serving both would be wrong for each, which is how a register
starts collecting columns that are blank for half its rows.

### It also corrects something built the same day

`doors.html` was written this afternoon with a reader half in mind — which is
why it whitelists only repos whose Pages sites were confirmed to serve, and
leaves `Fleet-Documents` and `Gameroom0.0` NAMED BUT UNLINKED.

**If it is an operator pane, that is the wrong rule.** The captain wants to know
a thing exists whether or not it serves; an unreachable door is a finding, not
something to hide. The audience decides the behaviour, and nobody had named the
audience.

### What a surface is NOT

Not a probe, a register, a worker, a test client, or any file the person never
meets. `chess-test-client` is the worked example and is already correctly
excluded — in prose, in a register built for something else:

> *A test client for the chess referee. Development scaffolding, NOT A SURFACE
> THE READER MEETS.*

Somebody had to make that distinction by hand because there was nowhere to
record it as a fact.

## 5 · WHAT THE REGISTER MUST CARRY

The point is not an inventory. An inventory answers *what exists*, which
`SOURCES.json` already does. **This has to answer what reaches each surface**,
because that is the question that was asked six times in one day and could not
be answered once.

For each surface, ON TOP of what audience it serves (§4) — a reader field is
not asked of an operator surface and the reverse:

| field | the question it answers |
|---|---|
| where it lives | file, repo, and the URL a reader arrives at |
| what engine it speaks through | `Amenti.chat`? an inline fallback? nothing? |
| what it costs | Anthropic · Gemini · both · nothing |
| is it counted | does `AmentiVisits` see it? |
| does memory reach it | is `AmentiMemory.load` called there? |
| does the dial reach it | is `AmentiDial.place` called there? |
| is it linked | can a reader actually GET there, from where? |
| is it a reader surface | or scaffolding, like the chess test client |

With that, *is counsel measured* is a lookup. Today it is an argument, and it
was one this afternoon.

---

## 6 · IT MUST BE A RECONCILIATION, NOT A LIST

A hand-kept list of surfaces would be stale within a fortnight. This yard has
been bitten by that repeatedly, and `SOURCES.json` carries the scar in its own
header: *it was the one register maintained BY HAND, in a project whose law is
that registers are never edited by hand.*

**`tools/merge.js` already does the right thing for ships:** authored claims in
`fleet-semantics.js`, walked against a real reading in `fleet-structure.json`,
merged with the disagreements stamped ADRIFT and UNDECLARED. That machinery
exists, it works, and it is the pattern.

So: **claims authored, surfaces walked, drift reported.** The walk can find real
things without being told —

- `data-page="…"` sections in any served HTML
- the `PANES` list in `fleet-nav.js`
- nav-bar anchors, including the ones that leave the repo
- whether `AmentiVisits`, `AmentiMemory` or `AmentiDial` are referenced in the
  file that serves it

— and the stamps write themselves: a surface with no claim is **UNDECLARED**; a
claim with no surface is **ADRIFT**; a reader surface nothing links to is a
**DOOR THAT DOES NOT OPEN**.

### Where the walk must run

**Two of the seven repositories are private.** A walk in a browser cannot reach
`Admin` or `Amenti-Workers`; a walk in Actions can, with a token. Since the
operator surfaces live in exactly those repos, **a browser-side instrument could
only ever map half the subject** — and would report the half it could see as the
whole, which is the fault this brief is about.

It belongs in Actions, beside the probes.

---

## 7 · WHY THIS IS WORTH BUILDING BEFORE THE NEXT FEATURE

Three of tonight's features are already partial and only one of them says so.

**The visit reading measures one surface of eleven.** BRIEF-WHAT-AN-HOUR-COSTS
prices the terminal and calls it Amenti. Every business number in that brief
rests on a denominator nobody has.

**Figure memory reaches the terminal.** The counsel surface, the reading vault
and the quiz bridge are untouched — not by decision, by omission.

**The dial fires on the speaker toggle.** Whether that is every surface with a
voice is unknown.

None of those is a bug. Each is a feature that stopped where somebody's
attention stopped, and **nothing exists that could have drawn the line
anywhere else.**

---

## 8 · WHAT IT IS NOT

**Not a competitor to the manifest.** If anything, it may belong INSIDE it — a
`surfaces` key beside `ships`, written by the same `tools/merge.js`, stamped the
same way. Two registers describing overlapping things is precisely how a
vendor-risk PDF came to be cited as the authority on who owns Amenti.

**That decision has not been made and should not be made by drafting.** The
question is whether a surface is a kind of ship or a different subject, and it is
the captain's.

---

## 9 · WHAT IS NOT KNOWN

**How many surfaces there are.** This brief cannot say. Six `data-page`
sections, seventeen panes, the hall, Page2, the gameroom, the reading vaults — and eleven
tabs on a navigation bar that has never been reconciled against any of it.

That number is the first thing the register would produce, and not one file in
the fleet can produce it today.

---

*Written 27 August 2026, after a day in which the same gap was found seven times
and named only on the sixth — the seventh arriving from the captain, minutes
after the brief claimed to have listed them all.*

* Nothing built. The definition in §4 and the
placement in §8 come first, and neither should be settled by an assistant.*
