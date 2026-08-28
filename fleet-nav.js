/* ============================================================================
   fleet-nav.js · THE ONE SOURCE OF NAVIGATION
   ----------------------------------------------------------------------------
   Every pane in the fleet loads this ONE file. The navigation bar is built from
   the PANES list below — it is not copied into any page.
       TO ADD A PANE:      add one line to PANES. Every page updates.
       TO RENAME / REORDER: edit PANES. One file. Never eight.
       TO REMOVE A PANE:    delete its line.
   This is the fleet's oldest law applied to navigation: ONE SOURCE OF TRUTH,
   and every surface is a VIEW of it — never a copy. The captain edits one file,
   not the whole fleet.
   Each page needs only, in its <body>:
       <div id="fleet-nav"></div>
       <script src="fleet-nav.js"></script>
   The current page highlights itself automatically (matched by filename), so
   there is no per-page "on" class to maintain either.
   ========================================================================== */
(function () {
  'use strict';
  /* ── THE REGISTRY ── the single list of every pane in the fleet ──────────
     file  : the page's filename
     label : what shows in the nav bar
     (add here; the whole fleet follows) */
  const PANES = [
    { file: 'index.html',          label: 'HARBOR'       },
    { file: 'ships-manifest.html', label: 'MANIFEST'     },
    { file: 'engine-room.html',    label: 'ENGINE ROOM'  },
    { file: 'terminal.html',       label: 'THE TERMINAL' },
    { file: 'sonar.html',          label: 'THE SONAR'    },
    { file: 'broadcast.html',      label: 'THE BROADCAST'},
    { file: 'watch.html',          label: 'THE WATCH'    },
    { file: 'ordnance.html',       label: 'ORDNANCE BAY' },
    { file: 'command.html',        label: 'COMMAND VIEW' },
    { file: 'ocean.html',          label: 'OCEAN VIEW'   },
    { file: 'probe-corps.html',    label: 'PROBE CORPS'  },
    /* 16 Aug 2026 — the twelfth pane. Reads img/PLATES.json, which the plate
       register writes by walking img/ and the Glass Gate copies into the
       mirror. Art placement, the naming grammar, and what the register can
       and cannot judge. */
    { file: 'plate-deck.html',     label: 'PLATE DECK'   },
    /* 17 Aug 2026 — the thirteenth. Traces one soul from a bare name to a row,
       a room, a face and a docket, naming what each gate refuses. Isaac Newton
       is the worked example. */
    { file: 'onboarding.html',     label: 'ONBOARDING'   },
    /* 17 Aug 2026 — the fourteenth. Reads WORKERS.json, pulled from
       Cloudflare's API by mirror.yml and carried here by the Glass Gate.
       Crons, bindings, and the names of every secret a restore would need. */
    { file: 'workers.html',        label: 'WORKERS'      },
    /* 18 Aug 2026 — the fifteenth. Reads KEYS.json: every key the ship uses
       and whether it reaches one soul, none, or several. Built because
       `caesar` was correct for months and became ambiguous the day Augustus
       came aboard, and nothing was watching the shape of the names. */
    { file: 'keyring.html',        label: 'KEYRING'      },
    /* 20 Aug 2026 — the sixteenth. Reads PRODUCTION.json: the book measured
       against BOOK.json, and the day each chapter actually landed. Every
       register watches the ship; nothing watched the work. */
    { file: 'production.html',     label: 'PRODUCTION'   },
    /* 26 Aug 2026 — the seventeenth. Reads SOURCES.json and renders one anchor
       per reachable document. Built because the index has carried its own
       complaint for weeks — 41 briefs, 8 of them linked anywhere — and because
       a file nothing links to is unreachable to a reader AND to any machine
       that can only follow links. The doors are the register, made walkable. */
    { file: 'doors.html',          label: 'THE DOORS'    },
    /* 28 Aug 2026 — the eighteenth. Reads SURFACES.json: every place a person
       can act on this system, and what reaches each one. Built because every
       register on this ship mapped the MACHINERY and none mapped the PLACES —
       and on 27 Aug the same gap was found nine times in one day, each time by
       tripping over it. A surface is a user interface point: hall.html is a
       page, the Ask box is the surface. This pane is itself a surface and
       appears in the register it renders. */
    { file: 'surfaces.html',       label: 'SURFACES'     },
  ];
  /* which page are we on? match the last path segment, default to index.html */
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase()
               || 'index.html';
  /* build the nav */
  const nav = document.createElement('nav');
  nav.className = 'fleet-nav';
  PANES.forEach(p => {
    const a = document.createElement('a');
    a.href = p.file;
    a.textContent = p.label;
    if (p.file.toLowerCase() === here) a.className = 'on';
    nav.appendChild(a);
  });
  /* inject the nav's CSS ONCE, so a page needs no nav styling of its own.
     Uses the fleet's :root vars when present; falls back to literals so the
     bar still looks right on a page that hasn't defined them. */
  if (!document.getElementById('fleet-nav-css')) {
    const css = document.createElement('style');
    css.id = 'fleet-nav-css';
    css.textContent =
      '.fleet-nav{position:sticky;top:0;z-index:90;display:flex;flex-wrap:wrap;' +
      'gap:2px;padding:0 24px;background:rgba(10,10,15,.94);backdrop-filter:blur(8px);' +
      'border-bottom:1px solid var(--slate,#2a2a38);margin:0 0 8px}' +
      '.fleet-nav a{font-family:var(--mono,"Share Tech Mono",monospace);font-size:11px;' +
      'letter-spacing:.08em;color:var(--dim,#a4a4b8);text-decoration:none;' +
      'padding:13px 9px;border-bottom:2px solid transparent;transition:.2s;white-space:nowrap}' +
      '.fleet-nav a:hover{color:var(--gold-bright,#f5c542);background:rgba(212,160,23,.06)}' +
      '.fleet-nav a.on{color:var(--neon,#00ffe0);border-bottom-color:var(--neon,#00ffe0)}';
    document.head.appendChild(css);
  }
  /* place it: into #fleet-nav if the page provides that mount point, else at the
     very top of <body> so even a page that forgot the div still gets the nav. */
  function mount() {
    const slot = document.getElementById('fleet-nav');
    if (slot) { slot.replaceWith(nav); }
    else { document.body.insertBefore(nav, document.body.firstChild); }
  }
  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
