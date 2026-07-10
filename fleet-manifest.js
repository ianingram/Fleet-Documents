// ============================================================
//  FLEET MANIFEST — the MOTHER SHIP.
//  The single source of truth for the Amenti fleet: every actor's
//  identity, role, real repo path, security status, AND its layout
//  (board coords for the 3D view, grid coords for the bird's-eye) and
//  color. Every document in the repo feeds off THIS file.
//
//  Usage:  <script src="fleet-manifest.js"></script>
//          then read  window.FLEET_MANIFEST
//
//  Coordinate systems carried per actor:
//    board:  {col,row}  — 8x8 board, used by the 3D command view
//    grid:   {gx,gy}    — center-relative units, used by the 2D bird's-eye
//    sky:    {x,y,z}    — 3D world position, used for overhead satellites
//    corner: 'tl|tr|br|bl' — screen corner, used for sentries in bird's-eye
//  color:  hex — the actor's accent/identity color (shared by all views)
//  Built from the real repo: ianingram/Amenti.live
// ============================================================
window.FLEET_MANIFEST = {

  meta: {
    repo:   'ianingram/Amenti.live',
    live:   'https://ianingram.github.io/Amenti.live/',
    domain: 'amenti.ai',
  },

  // ---- SHIPS: the HTML pages (back row of the board) ----
  ships: [
    { id:'Page1 · Codex', file:'Page1.html', flag:true, color:0x00ff66,
      role:'Flagship — the Codex hub: legends, terminal, newsletter signup',
      type:'page', size:'1.57 MB',
      board:{col:4,row:0}, grid:{gx:0,gy:-1.2} },
    { id:'Court',    file:'court.html',    color:0xf5d76e, role:'The Cosmic Court view',
      type:'page', size:'67 KB',  board:{col:0,row:0}, grid:{gx:-1.6,gy:0} },
    { id:'docket',   file:'docket.html',   color:0xf5d76e, role:'The Docket',
      type:'page', size:'62 KB',  board:{col:1,row:0}, grid:{gx:-1.1,gy:1.4} },
    { id:'Weighing', file:'weighing.html', color:0xf5d76e, role:'The Weighing of the Heart',
      type:'page', size:'102 KB', board:{col:2,row:0}, grid:{gx:-2.7,gy:0.9} },
    { id:'Page2',    file:'Page2.html',    color:0xf5d76e, role:'Angels / Sovereigns view',
      type:'page', size:'1.50 MB',board:{col:3,row:0}, grid:{gx:1.6,gy:0} },
    { id:'Page3',    file:'Page3.html',    color:0xf5d76e, role:'Page 3',
      type:'page', size:'39 KB',  board:{col:5,row:0}, grid:{gx:2.7,gy:0.9} },
    { id:'game01',   file:'game01.html',   color:0xf5d76e, role:'The 3D chess/naval game',
      type:'page', size:'1.53 MB',board:{col:6,row:0}, grid:{gx:1.1,gy:1.4} },
    { id:'Atlantica',file:'\u2014',        color:0xf5d76e, role:'Reserved berth',
      type:'page', size:'\u2014', board:{col:7,row:0}, grid:{gx:0,gy:0} },
  ],

  // ---- CREW: the JS files (row 2 pawns) ----
  crew: [
    { id:'config.js',            color:0xffaa00, role:'Runtime config (worker URLs, keys)', type:'js', board:{col:0,row:2} },
    { id:'amenti-auth.js',       color:0xffaa00, role:'Sign-in + Emerald Token balance (Supabase auth)', type:'js', board:{col:1,row:2}, calls:['subscribers'] },
    { id:'library.js',           color:0xffaa00, role:'Shared Reading Room renderer', type:'js', board:{col:2,row:2} },
    { id:'amenti-quiz.js',       color:0xffcc00, role:'Quiz client — drives the Mint Worker', type:'js', board:{col:3,row:2}, calls:['/quiz/start','/quiz/submit'] },
    { id:'amenti-leaderboard.js',color:0xffaa00, role:"This Week's Pool standings + spiral coin", type:'js', board:{col:4,row:2}, calls:['/pool/leaderboard'] },
    { id:'amenti-throttle.js',   color:0x00ccff, role:'Chunked-streaming cache for reads (calls Proxy)', type:'js', board:{col:5,row:2}, calls:['/speak'] },
    { id:'amenti-chat.js',       color:0xffaa00, role:'The conversation core', type:'js', board:{col:6,row:2}, calls:['/generate'] },
    { id:'voiceprofiles.js',     color:0xffaa00, role:'Per-figure voice profiles', type:'js', board:{col:7,row:2} },
  ],

  // ---- SATELLITES: off-repo services (overhead / offshore) ----
  satellites: [
    { id:'Mint',     service:'amenti-mint Worker', url:'amenti-mint.ingram-ian.workers.dev', type:'worker', color:0x2bff77,
      role:'The token economy — quiz scoring + emerald minting',
      endpoints:['/quiz/start','/quiz/submit','/pool/leaderboard','/arguments/vote','/arguments/feed'],
      sky:{x:-34,y:70,z:-34}, grid:{gx:-3.4,gy:-2.2} },
    { id:'Proxy',    service:'amenti-proxy Worker', url:'amenti-proxy.ingram-ian.workers.dev', type:'worker', color:0x2bff77,
      role:'AI proxy — chat, voice, transcription',
      endpoints:['/speak','/generate','/listen'],
      sky:{x:0,y:78,z:-46}, grid:{gx:0,gy:-3.2} },
    { id:'Supabase', service:'Supabase', url:'bhgnkfsatmcnhqksybpa.supabase.co', type:'db', color:0x2bff77,
      role:'Backend — Postgres DB, auth, auto REST API, RLS',
      tables:['subscribers','emerald_balance','argument_reports'],
      sky:{x:34,y:70,z:-34}, grid:{gx:3.4,gy:-2.2} },
    { id:'CF Email', service:'Cloudflare Email', url:'(Workers Paid)', type:'email', color:0x2bff77,
      role:'Newsletter delivery (VAL\u00b7HAL\u00b7LA / Valhalla Chronicles)',
      status:'pending — send pipe not yet wired',
      sky:{x:0,y:64,z:46}, grid:{gx:0,gy:3.4} },
  ],

  // ---- SENTRIES: the four watches (board edges / screen corners) ----
  sentries: [
    { id:'TREASURY WATCH', color:0x57b6ff, corner:'tl', board:{edge:'front'},
      guards:'Mint Worker + emerald_balance',
      threat:'Forged /quiz/submit minting emeralds without earning them',
      status:'probe written — client validates server-side (strong); server confirm pending' },
    { id:'COST WATCH', color:0x57b6ff, corner:'tr', board:{edge:'right'},
      guards:'Proxy Worker (/speak, /generate)',
      threat:'Looping the open AI endpoints to run up the bill',
      status:'spec\u2019d — rate limit + spend alert to add' },
    { id:'DATA WATCH', color:0x57b6ff, corner:'bl', board:{edge:'left'},
      guards:'Supabase tables + RLS',
      threat:'Public key reading private subscriber data',
      status:'verified \u2713 — anon reads blocked, signup works' },
    { id:'HULL WATCH', color:0x57b6ff, corner:'br', board:{edge:'far'},
      guards:'File integrity (pages + crew)',
      threat:'Tampering / defacement / malicious commit',
      status:'built \u2713 — baseline of 20 files + probe' },
  ],

  // ---- helper: look up any actor by id, across all groups ----
  find(id){
    for(const g of ['ships','crew','satellites','sentries'])
      for(const a of this[g]) if(a.id===id) return Object.assign({group:g}, a);
    return null;
  },
};
