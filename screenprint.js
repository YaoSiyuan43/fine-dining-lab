/* =====================================================================
   Fine Dining Lab — Screen-Print (halftone) art engine
   Pure SVG-string generators. No canvas, no 3D. Every ingredient / vessel
   returns an SVG <g> group of layered Ben-Day halftone screens, so the same
   code renders the widget previews AND the final page.

   Design language (approved sample):
   - dark Michelin background, spotlight + focus vignette
   - visible halftone dots; tone encoded by dot radius per screen
   - limited elegant palette, off-register overprint, registration marks
   ===================================================================== */
(function (root) {
  'use strict';

  // ---- palette (screen-print inks) ----
  const INK = {
    paper:'#161310', plate:'#2a2622', plateWell:'#1b1815',
    cream:'#efe3cf', creamDot:'#d8b98a',
    gold:'#e5c07a',  goldDot:'#a9711f',
    sear:'#c58a3a',  searDot:'#5e3212',
    flesh:'#f0d9c4', fleshDot:'#c98f6a',
    coral:'#e8927a', coralDot:'#a24634',
    rose:'#e7b6bd',  roseDot:'#b06a72',
    crimson:'#b5384a',crimsonDot:'#6e1622',
    teal:'#2f5b52',  tealDot:'#4f8f82',
    green:'#3f6f3a', greenDot:'#6aa martial',
    olive:'#7a8a3a', oliveDot:'#4a5a1a',
    ink:'#26262b',   inkDot:'#050506',
    ivory:'#e8e2d2', ivoryDot:'#b8b09a',
    amber:'#d8a24a', amberDot:'#8a5a1a',
    beet:'#7a2a44',  beetDot:'#4a1226',
    orange:'#e08840',orangeDot:'#9a4a12',
    violet:'#6a4a7a', violetDot:'#3a2450'
  };
  // fix a typo-safe green dot
  INK.greenDot = '#6aa84a';

  // ---- halftone pattern registry: one <pattern> per (fill,dot,size,angle) ----
  let _patSeq = 0;
  const _patCache = new Map();
  function halftone(fill, dot, size, angle) {
    // resolve palette key names (e.g. 'cream','creamDot') to hex; pass through literal colors
    fill = INK[fill] || fill;
    dot  = INK[dot]  || dot;
    const kkey = fill + '|' + dot + '|' + size + '|' + angle;
    if (_patCache.has(kkey)) return _patCache.get(kkey);
    const id = 'ht' + (_patSeq++);
    const r = (size * 0.5 * 0.92).toFixed(2);
    const c = (size / 2).toFixed(2);
    const def =
      `<pattern id="${id}" width="${size}" height="${size}" patternUnits="userSpaceOnUse" patternTransform="rotate(${angle})">` +
      `<rect width="${size}" height="${size}" fill="${fill}"/>` +
      `<circle cx="${c}" cy="${c}" r="${r}" fill="${dot}"/></pattern>`;
    const rec = { id, def, url: `url(#${id})` };
    _patCache.set(kkey, rec);
    return rec;
  }

  // Collect all defs emitted so far (patterns + gradients + filters)
  const _extraDefs = [];
  function pushDef(s){ _extraDefs.push(s); }
  function collectDefs() {
    const pats = Array.from(_patCache.values()).map(p => p.def).join('');
    return pats + _extraDefs.join('');
  }
  function resetDefs(){ _patCache.clear(); _extraDefs.length = 0; _patSeq = 0; }

  // ---- helpers ----
  // If `extra` already carries a fill= (e.g. stroke-only paths passing fill="none"),
  // DON'T also emit the positional fill — a duplicate `fill` attribute makes strict
  // SVG parsers reject the document, which breaks <img>/canvas export in the browser.
  function _fillAttr(fill, extra){ return /(^|\s)fill\s*=/.test(extra) ? '' : `fill="${fill}"`; }
  function ell(cx,cy,rx,ry,fill,extra=''){ return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" ${_fillAttr(fill,extra)} ${extra}/>`; }
  function path(d,fill,extra=''){ return `<path d="${d}" ${_fillAttr(fill,extra)} ${extra}/>`; }
  function circle(cx,cy,r,fill,extra=''){ return `<circle cx="${cx}" cy="${cy}" r="${r}" ${_fillAttr(fill,extra)} ${extra}/>`; }
  // specular highlight arc, light from upper-left
  function hi(cx,cy,rx,op=0.5){ return `<path d="M${cx-rx} ${cy} Q${cx} ${cy-rx*0.5} ${cx+rx} ${cy}" stroke="#fff5df" stroke-width="3" fill="none" opacity="${op}" stroke-linecap="round"/>`; }
  // scatter of small filled dots (for grain / caviar sparkle / seeds)
  function scatter(cx,cy,rx,ry,n,r,fill,seed=1){
    let s=''; let x=seed*9301+49297;
    const rnd=()=>{x=(x*9301+49297)%233280; return x/233280;};
    for(let i=0;i<n;i++){const a=rnd()*6.283,rr=Math.sqrt(rnd());
      const px=cx+Math.cos(a)*rx*rr, py=cy+Math.sin(a)*ry*rr;
      s+=circle(px.toFixed(1),py.toFixed(1),(r*(0.7+rnd()*0.6)).toFixed(1),fill);}
    return s;
  }

  root.FDL_ART = {
    INK, halftone, collectDefs, resetDefs, pushDef,
    _h:{ell,path,circle,hi,scatter}
  };
})(typeof window !== 'undefined' ? window : globalThis);
