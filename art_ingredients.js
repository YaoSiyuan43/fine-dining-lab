/* =====================================================================
   Fine Dining Lab — Ingredient art library (halftone screen-print)
   One draw fn per ingredient id. Each returns an SVG <g> string, drawn
   from the ingredient's REAL fine-dining reference (form / cut / colour),
   centred at (0,0) in a ~ -60..60 local box; the page scales & places it.
   Requires FDL_ART.
   ===================================================================== */
(function (root) {
  'use strict';
  const A = root.FDL_ART;
  const { ell, path, circle, hi } = A._h;
  const scatter = A._h.scatter;
  const H = A.halftone, INK = A.INK;
  const FINE = A.fine, MICRO = A.micro;

  function screen(d, fill, dot, size, angle, extra='') {
    return path(d, H(fill, dot, size, angle).url, extra);
  }
  function screenEll(cx,cy,rx,ry, fill,dot,size,angle, extra=''){
    return ell(cx,cy,rx,ry, H(fill,dot,size,angle).url, extra);
  }
  const g = (inner, tf='') => `<g ${tf?`transform="${tf}"`:''}>${inner}</g>`;

  /* ---------- shared shape helpers ---------- */
  function leaf(cx,cy,w,h,rot,inkName){
    return g(screen(`M0 ${h/2} Q${-w/2} 0 0 ${-h/2} Q${w/2} 0 0 ${h/2} Z`,inkName,'greenDot',4,20)+
             path(`M0 ${h/2} L0 ${-h/2}`,'#2a4a24','stroke-width="1" opacity=".5"'),`translate(${cx} ${cy}) rotate(${rot})`);
  }
  function leafSpray(fill,n,scale){
    let s=`<path d="M0 20 Q2 0 0 -18" stroke="#2a4a24" stroke-width="1.5" fill="none" opacity=".6"/>`;
    for(let i=0;i<n;i++){const side=i%2?1:-1,y=16-i*(30/n),len=10*scale;
      s+=`<path d="M0 ${y} q${side*len} ${-len*0.6} ${side*len*1.3} ${-len}" stroke="${fill}" stroke-width="2" fill="none" opacity=".8"/>`;}
    return s;
  }
  function flower(petal,center){
    let s=''; for(let i=0;i<6;i++){const a=i*60;
      s+=g(ell(0,-14,8,13,H('rose','roseDot',3,15).url,'opacity=".95"')+ell(0,-14,8,13,petal,'opacity=".35"'),`rotate(${a})`);}
    return g(s+circle(0,0,6,center)+scatter(0,0,4,4,6,1,'#8a6a10',3));
  }

  const ART = {};

  /* ---------------- SEAFOOD ---------------- */
  ART.scallop = () => g(
    ell(2,10,44,20,'#0c0a08','opacity=".5"') +
    screenEll(0,4,46,20,'cream','creamDot',6,15) +
    screenEll(0,-8,42,15,'sear','searDot',5,15) +
    ell(0,-9,38,11,A.fine('sear','searDot',20).url,'opacity=".55"') +
    hi(-8,-12,26,0.55) +
    path('M-30 -8 Q0 -16 30 -8','#4a2810','stroke-width="2" fill="none" opacity=".5"') +
    path('M-24 -3 Q0 -9 24 -3','#5e3414','stroke-width="1.4" fill="none" opacity=".4"')
  );
  ART.oyster = () => g(
    path('M-52 6 Q-58 -20 -20 -26 Q40 -32 52 -4 Q56 16 20 22 Q-38 28 -52 6 Z','#0c0a08','opacity=".45" transform="translate(3 6)"') +
    screen('M-52 4 Q-58 -22 -20 -28 Q40 -34 52 -6 Q56 14 20 20 Q-38 26 -52 4 Z','ivory','ivoryDot',7,10) +
    screenEll(2,-2,34,15,'cream','creamDot',5,10) +
    screenEll(6,-2,20,10,'flesh','fleshDot',4,10) +
    hi(-2,-8,16,0.5)
  );
  ART.uni = () => {
    let t='';
    const tongues=[[-22,0,-12],[-2,-4,4],[18,2,16],[6,10,-6]];
    for(const[tx,ty,rot] of tongues){
      t+=g(screen('M-14 0 Q-16 -12 0 -16 Q16 -12 14 0 Q10 8 0 9 Q-10 8 -14 0 Z','orange','orangeDot',4,15)+hi(-3,-8,8,0.5),`translate(${tx} ${ty}) rotate(${rot})`);
    }
    return g(ell(0,8,40,10,'#141210')+screenEll(0,7,38,9,'ink','inkDot',6,0)+t);
  };
  ART.langoustine = () => {
    let seg='';
    for(let i=0;i<6;i++){const a=-0.5+i*0.28,cx=Math.cos(a)*36,cy=-16+Math.sin(a)*30;
      seg+=g(screenEll(0,0,13-i,9-i*0.6,'coral','coralDot',4,20)+hi(-2,-3,7,0.4),`translate(${cx} ${cy}) rotate(${a*57})`);}
    return g(seg+path('M28 -44 q18 -10 26 4','#a24634','stroke-width="3" fill="none" opacity=".6"'));
  };
  ART.turbot = () => g(
    ell(2,8,46,14,'#0c0a08','opacity=".4"') +
    screen('M-48 2 Q-40 -14 0 -14 Q46 -14 48 2 Q44 12 0 12 Q-44 12 -48 2 Z','ivory','ivoryDot',6,0) +
    path('M-36 -2 Q0 -6 40 -2','#cfc6b2','stroke-width="1.4" fill="none" opacity=".5"') +
    path('M-30 4 Q0 1 34 4','#cfc6b2','stroke-width="1.2" fill="none" opacity=".4"') + hi(-6,-8,22,0.4)
  );
  ART.king_crab = () => {
    let s=''; for(let i=0;i<4;i++){const x=-30+i*20;
      s+=screenEll(x,0,11,20,'crimson','crimsonDot',5,80)+ell(x+10,0,3,18,'#e8d8c0','opacity=".5"');}
    return g(s+hi(-20,-12,28,0.35));
  };
  ART.abalone = () => g(
    // squarish muscle block with wavy frilled skirt + cross-hatch score on top face
    path('M-34 12 Q-38 -6 -30 -14 Q-10 -20 8 -18 Q30 -16 36 -4 Q40 10 30 16 Q10 22 -12 20 Q-30 18 -34 12 Z','#0c0a08','opacity=".4" transform="translate(3 6)"')+
    screen('M-34 10 Q-40 -2 -34 -12 L-24 -16 Q-22 -12 -14 -15 Q-6 -18 2 -15 Q10 -18 18 -14 Q26 -17 30 -12 L36 -6 Q40 6 32 14 Q10 20 -12 18 Q-30 16 -34 10 Z','ivory','ivoryDot',6,20)+
    path('M-20 -8 L-8 12 M-6 -12 L4 12 M10 -11 L18 10 M-30 0 L34 -2','#8a7a4a','stroke-width="1" opacity=".55" fill="none"')+ // cross score + grain
    hi(-8,-8,20,0.4)
  );
  ART.amaebi = () => {
    // curled hook body, segmented, tapering head end + tail fan
    let seg='';
    for(let i=0;i<7;i++){const a=-1.1+i*0.32, cx=Math.cos(a)*30, cy=8-Math.sin(a)*30;
      const rr=11-i*1.1;
      seg+=g(screenEll(0,0,rr,rr*0.78,'rose','roseDot',3,20)+
             path(`M${-rr} 0 Q0 ${-rr*0.5} ${rr} 0`,'#b06a72','stroke-width="0.8" fill="none" opacity=".5"'),
             `translate(${cx} ${cy}) rotate(${a*57})`);}
    // tail fan at last segment (top), tapering tip head at bottom
    return g(seg+
      path('M20 -30 l10 -12 l4 10 l8 -6 l-2 12 Z','#e79aa4','opacity=".9"')+ // tail fan
      circle(-22,32,2,'#3a2020')+ // eye/head tip
      hi(-6,4,14,0.5));
  };
  ART.eel_unagi = () => g(
    // lacquered kabayaki bar — rectangular fillet, rounded ends, char grill lines
    screen('M-48 -9 Q-52 -9 -52 -3 L-52 3 Q-52 9 -46 9 L46 9 Q52 9 52 3 L52 -3 Q52 -9 46 -9 Z','amber','amberDot',5,8)+
    path('M-38 -9 L-34 9 M-24 -9 L-20 9 M-10 -9 L-6 9 M4 -9 L8 9 M18 -9 L22 9 M32 -9 L36 9','#3a1e08','stroke-width="2" opacity=".55"')+ // grill char
    hi(-14,-5,26,0.4)
  );
  ART.squid = () => g(
    // open calamari ring — thick annulus, scored surface, gap at one side
    screen('M-28 0 A28 15 0 1 1 26 -6 L18 -3 A20 10 0 1 0 -20 0 Z','ivory','ivoryDot',5,0)+
    path('M-24 -6 L-20 -1 M-10 -9 L-8 -3 M4 -9 L4 -3 M16 -7 L14 -2','#cfc6b2','stroke-width="1" opacity=".5"')+
    hi(-8,-6,16,0.4)
  );
  ART.sea_bream = () => g(
    // angled sashimi slice — trapezoid, thick end to thin edge, silver skin line
    screen('M-42 8 L-30 -12 Q0 -14 40 -8 L34 10 Q-6 14 -42 8 Z','flesh','fleshDot',5,0)+
    path('M-30 -12 Q0 -14 40 -8','#c8d0d8','stroke-width="2.5" fill="none" opacity=".65"')+ // silver skin
    path('M-24 0 Q6 -3 30 1','#d8b0a0','stroke-width="1" fill="none" opacity=".5"')+ // muscle line
    hi(-10,-4,20,0.4)
  );
  ART.anchovy = () => g(
    // slim curved fillet strip — wide head end tapering to tail point, spine line
    screen('M-42 2 Q-44 -4 -36 -6 Q-10 -9 26 -6 Q44 -4 48 2 Q30 5 -6 5 Q-38 6 -42 2 Z','ivory','ivoryDot',4,8)+
    path('M-38 -4 Q-6 -7 44 0','#8fa0b0','stroke-width="1.6" fill="none" opacity=".6"')+ // silver back
    path('M-34 1 L44 1','#5a6a30','stroke-width="1" opacity=".5"')+ // marinade line
    circle(-36,-1,1.6,'#3a3a30')
  );

  /* ---------------- GARNISH ---------------- */
  ART.caviar = () => g(
    ell(0,4,34,15,'#141216') +
    ell(0,3,32,13,MICRO('ink','inkDot',0).url,'opacity=".7"') +
    scatter(0,0,32,13,46,3.4,H('ink','inkDot',5,15).url,3) +
    scatter(-2,-3,24,9,26,3.2,'#1a1a20',7) +
    scatter(-4,-4,22,8,14,1.1,'#fffbe8',11)
  );
  ART.black_truffle = () => g(
    screenEll(0,0,26,24,'ink','inkDot',5,15)+
    path('M-16 -8 Q0 0 16 -6 M-12 6 Q2 10 14 4','#4a4038','stroke-width="1" opacity=".5" fill="none"')+
    scatter(0,0,22,20,30,1,'#3a3228',5)+hi(-8,-10,14,0.3)
  );
  ART.white_truffle = () => g(
    screen('M-26 4 Q-30 -16 -6 -20 Q22 -24 28 -4 Q30 14 6 18 Q-20 22 -26 4 Z','ivory','ivoryDot',5,20)+
    scatter(0,-2,22,16,24,1.2,'#c8bfa8',9)+hi(-8,-8,16,0.4)
  );
  ART.dill = () => g( leafSpray('#3f6f3a',10,0.9) );
  ART.basil = () => g( leaf(0,0,16,22,-10,'green')+leaf(-12,4,13,18,-40,'green')+leaf(12,2,13,18,20,'green') );
  ART.edible_flower = () => flower('#d98cae','#f2d24a');
  ART.nasturtium = () => flower('#e07a2a','#e5c07a');
  ART.micro_herb = () => g( leafSpray('#4a7a3a',6,0.6) );
  ART.gold_leaf = () => g(
    screen('M-20 -8 L-4 -14 L18 -6 L14 10 L-8 14 L-22 4 Z','gold','goldDot',3,15)+
    path('M-20 -8 L18 -6 L14 10 L-22 4 Z','none',`fill="${FINE('gold','goldDot',40).url}" opacity=".6"`)+
    path('M-20 -8 L14 10 M-4 -14 L-8 14','#fff2c0','stroke-width="1" opacity=".7"')+hi(-6,-6,14,0.7)
  );
  ART.charcoal_oil = () => g( scatter(0,0,30,12,10,4,'#0a0a0c',3)+scatter(0,0,26,10,10,1,'#3a3a44',7) );

  /* ---------------- MEAT ---------------- */
  ART.wagyu = () => g(
    ell(2,8,44,14,'#0c0a08','opacity=".4"')+
    screen('M-46 2 Q-40 -14 0 -14 Q46 -14 46 2 Q40 12 0 12 Q-42 12 -46 2 Z','crimson','crimsonDot',5,0)+
    path('M-38 -6 Q-10 -10 30 -4 M-30 4 Q0 0 34 6 M-20 -2 Q6 -4 24 0','#e8dcc8','stroke-width="1.4" fill="none" opacity=".7"')+
    path('M-46 2 Q-40 -14 0 -14','#3a1810','stroke-width="3" fill="none" opacity=".6"')+hi(-8,-8,22,0.35)
  );
  ART.squab = () => g(
    screen('M-40 2 Q-34 -14 0 -14 Q40 -12 42 4 Q34 12 0 12 Q-36 12 -40 2 Z','rose','roseDot',5,0)+
    path('M-40 2 Q-34 -14 0 -14 Q40 -12 42 4','#7a3020','stroke-width="3" fill="none" opacity=".55"')+hi(-8,-6,20,0.4)
  );
  ART.iberico = () => g(
    screen('M-46 0 Q-20 -12 20 -10 Q46 -8 44 6 Q10 14 -30 12 Q-48 10 -46 0 Z','crimson','crimsonDot',4,0)+
    path('M-38 -2 Q0 -6 38 0 M-30 6 Q4 2 36 8','#f0e4d0','stroke-width="1.6" fill="none" opacity=".7"')
  );
  ART.lamb = () => g(
    screenEll(0,0,40,17,'rose','roseDot',5,0)+
    ell(0,0,40,17,'none','stroke="#7a3020" stroke-width="3" opacity=".5"')+hi(-8,-6,20,0.4)
  );
  ART.foie_gras = () => g(
    ell(2,8,40,14,'#0c0a08','opacity=".4"')+
    screen('M-42 4 Q-38 -14 0 -14 Q42 -12 42 4 Q36 14 0 14 Q-40 14 -42 4 Z','gold','goldDot',5,10)+
    screenEll(0,-6,34,9,'sear','searDot',4,10)+hi(-8,-10,22,0.5)+
    path('M-30 -8 Q0 -14 30 -8','#5e3212','stroke-width="1.6" fill="none" opacity=".5"')
  );
  ART.duck = () => g(
    screen('M-42 4 Q-36 -12 0 -12 Q42 -10 42 6 Q34 14 0 14 Q-38 14 -42 4 Z','rose','roseDot',5,0)+
    ell(0,-8,40,6,H('amber','amberDot',4,10).url)+
    path('M-24 -10 L-20 -6 M-8 -11 L-4 -7 M8 -11 L12 -7 M22 -10 L26 -6','#6a4010','stroke-width="1.2" opacity=".6"')
  );
  ART.veal_sweetbread = () => g(
    screen('M-30 6 Q-34 -14 -6 -18 Q26 -22 32 -2 Q34 16 4 18 Q-24 20 -30 6 Z','sear','searDot',5,15)+
    scatter(0,-2,24,14,18,1.2,'#3a1e08',5)+hi(-8,-8,16,0.5)
  );
  ART.venison = () => g(
    screenEll(0,0,40,16,'beet','beetDot',5,0)+ell(0,0,40,16,'none','stroke="#2a0e18" stroke-width="3" opacity=".5"')+hi(-8,-6,18,0.35)
  );
  ART.beef_tartare = () => g(
    scatter(0,0,30,14,20,4.5,H('crimson','crimsonDot',4,0).url,3)+
    scatter(0,-2,24,10,10,3,'#7a1e2a',7)
  );

  /* ---------------- VEGETABLE (each a real silhouette) ---------------- */
  ART.white_asparagus = () => g( // long pale spear, pointed bud tip, faint scales
    screen('M-4 40 L-4 -30 Q-4 -42 0 -44 Q4 -42 4 -30 L4 40 Z','ivory','ivoryDot',4,90)+
    path('M-4 -30 Q0 -34 4 -30 M-4 -22 Q0 -26 4 -22 M-4 -14 Q0 -18 4 -14','#c8bfa0','stroke-width="1" fill="none" opacity=".6"')+
    path('M0 40 L0 -30','#e8e0cc','stroke-width="1" opacity=".4"')+hi(-2,-20,4,0.5)
  );
  ART.heirloom_tomato = () => g( // round fluted tomato with stem star
    screenEll(0,2,34,30,'crimson','crimsonDot',5,0)+
    path('M-30 0 Q-24 -14 -30 -24 M-14 -8 Q-12 -22 -18 -30 M2 -10 Q4 -24 0 -32 M18 -8 Q22 -22 16 -28 M30 0 Q28 -14 32 -24','#8a1e2a','stroke-width="1" fill="none" opacity=".35"')+ // flutes
    g('<path d="M-6 -28 l-8 -6 M0 -30 l0 -9 M6 -28 l8 -6 M-3 -29 l-3 -8 M3 -29 l4 -7" stroke="#4a6a2a" stroke-width="2" fill="none"/>','')+ // stem star
    hi(-10,-12,16,0.5)
  );
  ART.beetroot = () => g( // round bulb, dark ruby, taproot + rings
    screen('M-28 4 Q-32 -18 -8 -24 Q22 -30 30 -6 Q34 16 8 22 Q-22 26 -28 4 Z','beet','beetDot',5,0)+
    path('M8 22 q2 12 -2 20','#6a2a44','stroke-width="2" fill="none" opacity=".6"')+ // taproot
    path('M-18 0 Q0 -6 20 -2','#4a1226','stroke-width="1" fill="none" opacity=".4"')+hi(-8,-8,14,0.4)
  );
  ART.green_pea = () => g( // cluster of small bright spheres in a pod hint
    (function(){let s='';const pos=[[-16,4],[-4,-2],[8,2],[18,6],[-8,10],[4,12]];
      for(const[x,y] of pos)s+=screenEll(x,y,8,8,'olive','oliveDot',3,0)+circle(x-2,y-2,2,'#c8e88a','opacity=".6"');
      return s+path('M-24 8 Q0 -14 26 10','#4a5a1a','stroke-width="2" fill="none" opacity=".5"');})()
  );
  ART.celeriac = () => g( // knobbly pale root ball
    screen('M-28 6 Q-34 -14 -12 -22 Q16 -30 30 -10 Q38 12 14 22 Q-18 28 -28 6 Z','ivory','ivoryDot',5,20)+
    A._h.scatter(0,0,24,18,18,1.4,'#b8ae90',5)+
    path('M-20 -6 Q0 2 22 -6','#a89a78','stroke-width="1" fill="none" opacity=".4"')+hi(-8,-8,16,0.4)
  );
  ART.carrot = () => g( // tapered heirloom carrot, ridged, green top hint
    screen('M-6 -34 Q-8 10 -2 38 Q2 42 6 38 Q10 8 6 -34 Q0 -40 -6 -34 Z','orange','orangeDot',4,80)+
    path('M-4 -20 Q0 -18 4 -20 M-4 -6 Q0 -4 4 -6 M-3 8 Q0 10 3 8 M-3 22 Q0 24 3 22','#9a4a12','stroke-width="1" fill="none" opacity=".5"')+
    path('M0 -34 l-6 -10 M0 -34 l0 -12 M0 -34 l6 -10','#4a6a2a','stroke-width="2" fill="none"')+hi(-3,-10,4,0.4)
  );
  ART.corn = () => g( // grilled corn kernels in rows on cob segment
    screen('M-14 34 Q-18 -30 0 -36 Q18 -30 14 34 Q0 40 -14 34 Z','amber','amberDot',3,0)+
    (function(){let s='';for(let r=0;r<7;r++)for(let c=-2;c<=2;c++){const y=-28+r*9,x=c*6.5;
      s+=circle(x,y,2.6,'#e0b048','opacity=".8"')+circle(x-0.6,y-0.6,0.9,'#fff0c0','opacity=".5"');}return s;})()
  );
  ART.potato = () => g( // fondant potato — cylindrical, browned top/bottom edges
    screen('M-26 -12 Q-28 -16 -22 -16 L22 -16 Q28 -16 26 -12 L26 12 Q28 16 22 16 L-22 16 Q-28 16 -26 12 Z','cream','creamDot',5,0)+
    ell(0,-14,24,4,H('sear','searDot',3,10).url)+ell(0,14,24,4,H('sear','searDot',3,10).url,'opacity=".7"')+hi(-8,-6,18,0.4)
  );
  ART.cauliflower = () => g( // roasted floret — bumpy dome on stalk
    A._h.scatter(0,-4,28,20,40,4.5,H('cream','creamDot',3,0).url,4)+
    A._h.scatter(0,-6,22,14,20,3,'#e8dcc0',8)+
    path('M-6 16 L-4 30 M6 16 L4 30','#c8bfa0','stroke-width="3" opacity=".6"')+ // stalk
    ell(0,-6,10,7,'#f0e8d0','opacity=".3"')
  );
  ART.cabbage = () => g( // charred hispi wedge — layered leaves, dark grilled edge
    screen('M-30 16 L-8 -20 Q0 -24 8 -20 L30 16 Q0 24 -30 16 Z','olive','oliveDot',5,10)+
    path('M-8 -20 L-2 14 M0 -22 L0 16 M8 -20 L2 14 M-18 0 L-6 12 M18 0 L6 12','#3a4a1a','stroke-width="1.2" fill="none" opacity=".6"')+
    path('M-30 16 Q0 24 30 16','#1a2a0a','stroke-width="3" fill="none" opacity=".6"')+hi(-8,-8,16,0.35)
  );

  /* ---------------- FUNGI ---------------- */
  ART.matsutake = () => g( // distinct cap + thick stem, sliced lengthwise
    screen('M-22 -8 Q-24 -22 0 -24 Q24 -22 22 -8 Q0 -2 -22 -8 Z','sear','searDot',4,10)+ // cap
    screen('M-8 -6 L-10 30 Q0 34 10 30 L8 -6 Q0 -2 -8 -6 Z','cream','creamDot',4,90)+ // stem
    path('M-8 6 Q0 8 8 6 M-9 18 Q0 20 9 18','#c8bfa0','stroke-width="1" fill="none" opacity=".5"')+hi(-8,-16,14,0.4)
  );
  ART.porcini = () => g( // fat domed brown cap + bulbous pale stem
    screen('M-26 -6 Q-28 -24 0 -26 Q28 -24 26 -6 Q0 2 -26 -6 Z','sear','searDot',5,10)+
    screen('M-12 -4 Q-16 24 -6 30 Q0 32 6 30 Q16 24 12 -4 Q0 2 -12 -4 Z','cream','creamDot',5,90)+
    hi(-10,-16,16,0.5)
  );
  ART.morel = () => g( // conical honeycomb-pitted cap on short stem
    screen('M-14 -6 Q-18 -34 0 -38 Q18 -34 14 -6 Q0 0 -14 -6 Z','sear','searDot',3,0)+
    (function(){let s='';for(let r=0;r<6;r++)for(let c=-2;c<=2;c++){const y=-34+r*6,x=c*5*(1-r*0.08);
      s+=`<path d="M${x} ${y} l3 2 l-1 4 l-4 0 l-1 -4 Z" fill="#2a1808" opacity=".5"/>`;}return s;})()+
    screen('M-6 -6 L-7 12 Q0 16 7 12 L6 -6 Z','ivory','ivoryDot',3,90)
  );
  ART.chanterelle = () => g( // trumpet — flaring wavy funnel, golden
    screen('M-18 -18 Q-22 -20 -16 -22 Q0 -26 16 -22 Q22 -20 18 -18 Q10 -14 12 8 Q6 30 0 32 Q-6 30 -12 8 Q-10 -14 -18 -18 Z','amber','amberDot',4,10)+
    path('M-14 -18 Q0 -10 14 -18 M-8 0 L-6 24 M8 0 L6 24','#8a5a1a','stroke-width="1" fill="none" opacity=".5"')+hi(-8,-16,14,0.4)
  );

  /* ---------------- ACID ---------------- */
  ART.yuzu = () => g( // knobbly citrus with dimpled skin + stem leaf
    screen('M-26 6 Q-30 -16 -6 -22 Q22 -28 30 -4 Q34 18 8 24 Q-20 28 -26 6 Z','gold','goldDot',4,10)+
    A._h.scatter(0,0,24,18,30,0.9,'#b8901f',5)+ // dimples
    path('M14 -20 q10 -8 4 -16','#4a6a2a','stroke-width="2" fill="none"')+hi(-8,-8,14,0.5)
  );
  ART.green_apple = () => g( // classic apple silhouette with dimple top+stem
    screen('M0 -22 Q-22 -26 -26 -2 Q-30 20 -10 26 Q0 28 10 26 Q30 20 26 -2 Q22 -26 0 -22 Z','olive','oliveDot',5,0)+
    path('M0 -22 Q-2 -28 -6 -30 M0 -22 Q2 -30 0 -34','#5a3a12','stroke-width="2" fill="none"')+ // stem
    hi(-10,-10,16,0.55)
  );
  ART.rhubarb = () => g( // long pink-red stalk, fibrous, cut ends
    screen('M-6 -34 L-6 34 Q0 38 6 34 L6 -34 Q0 -38 -6 -34 Z','coral','coralDot',4,90)+
    path('M0 -34 L0 34','#a24634','stroke-width="1" opacity=".5"')+
    path('M-4 -32 Q0 -30 4 -32','#7a2a20','stroke-width="1.5" fill="none" opacity=".6"')+hi(-3,-10,4,0.4)
  );
  ART.sea_buckthorn = () => g( // cluster of tiny bright orange berries
    (function(){let s='';const pos=[[-14,2],[-4,-6],[6,0],[16,6],[-8,10],[4,10],[12,-6],[0,6]];
      for(const[x,y] of pos)s+=screenEll(x,y,6,6,'orange','orangeDot',2,0)+circle(x-1.5,y-1.5,1.5,'#ffd070','opacity=".7"');return s;})()
  );
  ART.lime = () => g( // half lime — wheel with segments
    screenEll(0,0,26,26,'olive','oliveDot',4,0)+
    ell(0,0,22,22,'#d8e8b0','opacity=".25"')+
    (function(){let s='';for(let i=0;i<8;i++)s+=`<path d="M0 0 L${Math.cos(i*45*Math.PI/180)*20} ${Math.sin(i*45*Math.PI/180)*20}" stroke="#e8f0c8" stroke-width="1.5" opacity=".5"/>`;return s;})()+
    circle(0,0,3,'#c8d8a0')+hi(-8,-8,12,0.4)
  );

  /* ---------------- FRUIT ---------------- */
  ART.passion_fruit = () => g( // halved — purple shell, golden seedy pulp
    screenEll(0,0,26,24,'violet','violetDot',4,0)+
    screenEll(0,0,20,18,'amber','amberDot',3,0)+
    A._h.scatter(0,0,16,14,16,2,'#2a2010',5)+ // dark seeds
    ell(0,0,20,18,'none','stroke="#3a2450" stroke-width="3" opacity=".6"')+hi(-8,-8,12,0.4)
  );
  ART.strawberry = () => g( // classic heart-cone with seed dots + calyx
    screen('M0 30 Q-22 20 -20 -6 Q-18 -20 0 -22 Q18 -20 20 -6 Q22 20 0 30 Z','crimson','crimsonDot',4,0)+
    A._h.scatter(0,0,16,20,20,1,'#f0e0a0',5)+ // seeds
    g('<path d="M-10 -20 l-8 -6 M0 -22 l0 -9 M10 -20 l8 -6 M-4 -21 l-3 -8 M4 -21 l4 -7" stroke="#4a6a2a" stroke-width="2.5" fill="none"/>')+hi(-8,-8,14,0.5)
  );
  ART.cherry = () => g( // two round cherries on stems
    screenEll(-10,6,14,14,'crimson','crimsonDot',4,0)+screenEll(12,10,13,13,'crimson','crimsonDot',4,0)+
    path('M-10 -8 Q-4 -22 4 -26 M12 -3 Q8 -20 4 -26','#5a3a12','stroke-width="1.5" fill="none"')+
    circle(-14,2,3,'#f0b0b0','opacity=".6"')+circle(8,6,3,'#f0b0b0','opacity=".6"')
  );
  ART.fig = () => g( // halved fig — teardrop, pink seedy center, purple skin
    screen('M0 -26 Q-20 -22 -22 2 Q-24 22 0 30 Q24 22 22 2 Q20 -22 0 -26 Z','violet','violetDot',4,0)+
    screen('M0 -18 Q-12 -14 -13 4 Q-14 18 0 24 Q14 18 13 4 Q12 -14 0 -18 Z','rose','roseDot',3,0)+
    A._h.scatter(0,2,10,12,20,1,'#b04a5a',5)+hi(-8,-10,12,0.4)
  );
  ART.grape = () => g( // small cluster of dusty spheres
    (function(){let s='';const pos=[[0,-14],[-10,-4],[10,-4],[-6,6],[6,6],[0,-2],[-2,16],[8,14]];
      for(const[x,y] of pos)s+=screenEll(x,y,8,8,'violet','violetDot',3,0)+circle(x-2,y-2,2,'#b0a0c8','opacity=".5"');return s;})()
  );

  /* ---------------- DAIRY ---------------- */
  ART.parmesan = () => g( // triangular wedge, granular pale gold
    screen('M-28 16 L20 -18 Q26 -20 26 -12 L10 18 Q-28 22 -28 16 Z','cream','creamDot',4,10)+
    A._h.scatter(-2,4,20,10,24,0.8,'#c8b888',5)+
    path('M-28 16 L20 -18','#a89a68','stroke-width="1.5" fill="none" opacity=".4"')+hi(-6,-4,14,0.4)
  );
  ART.burrata = () => g( // soft white ball with torn creamy top
    screenEll(0,2,28,26,'ivory','ivoryDot',6,0)+
    path('M-14 -12 Q0 -22 14 -12 Q8 -6 0 -8 Q-8 -6 -14 -12 Z','#f6f0e2','opacity=".7"')+ // torn opening
    ell(0,-14,12,5,'#f0e8d8','opacity=".5"')+hi(-10,-8,18,0.6)
  );
  ART.egg_yolk = () => g( // glossy orange dome yolk
    screenEll(0,0,22,20,'orange','orangeDot',4,0)+
    ell(-6,-6,10,8,'#ffd86a','opacity=".6"')+circle(-8,-8,4,'#fff0c0','opacity=".7"')
  );
  ART.goat_cheese = () => g( // cylindrical log slice, chalky white, rind edge
    screen('M-24 -14 Q-26 -16 -20 -16 L20 -16 Q26 -16 24 -14 L24 14 Q26 16 20 16 L-20 16 Q-26 16 -24 14 Z','ivory','ivoryDot',5,0)+
    path('M-24 -14 L-24 14 M24 -14 L24 14','#d8cfb8','stroke-width="2" opacity=".5"')+
    ell(0,0,18,12,'#f0ead8','opacity=".3"')+hi(-8,-6,16,0.4)
  );

  /* ---------------- GRAIN ---------------- */
  ART.risotto_rice = () => g( // creamy mound of short grains
    ell(0,4,32,16,'#0c0a08','opacity=".3"')+
    screenEll(0,0,32,18,'cream','creamDot',4,0)+
    (function(){let s='';const seed=3;let x=seed*9301+49297;const rnd=()=>{x=(x*9301+49297)%233280;return x/233280;};
      for(let i=0;i<40;i++){const a=rnd()*6.28,rr=Math.sqrt(rnd());const px=Math.cos(a)*28*rr,py=Math.sin(a)*14*rr;
      s+=`<ellipse cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" rx="3" ry="1.6" transform="rotate(${(rnd()*180).toFixed(0)} ${px.toFixed(1)} ${py.toFixed(1)})" fill="#e8dcc0" opacity=".7"/>`;}return s;})()
  );
  ART.buckwheat = () => g( // scatter of dark angular groats
    ell(0,3,30,14,'#0c0a08','opacity=".3"')+
    (function(){let s='';let x=7*9301+49297;const rnd=()=>{x=(x*9301+49297)%233280;return x/233280;};
      for(let i=0;i<34;i++){const a=rnd()*6.28,rr=Math.sqrt(rnd());const px=Math.cos(a)*28*rr,py=Math.sin(a)*13*rr;
      s+=`<path d="M${px} ${py} l3 1 l-1 3 l-3 -1 Z" fill="#6a5230" opacity=".85"/>`;}return s;})()
  );
  ART.koji_rice = () => g( // fluffy pale cultured rice clump, downy
    screenEll(0,0,30,18,'ivory','ivoryDot',5,0)+
    A._h.scatter(0,0,26,14,30,1.4,'#f0ead6',5)+
    A._h.scatter(0,-3,20,9,14,0.9,'#fffaf0',9)+hi(-8,-6,16,0.4)
  );

  /* ---------------- SPICE ---------------- */
  ART.saffron = () => g( // few crimson thread strands
    path('M-18 -12 Q-6 0 -14 16 M-2 -16 Q6 -2 -2 18 M12 -14 Q4 2 16 14','#b5384a','stroke-width="2.5" fill="none" opacity=".9" stroke-linecap="round"')+
    path('M-18 -12 Q-6 0 -14 16 M-2 -16 Q6 -2 -2 18','#e0704a','stroke-width="1" fill="none" opacity=".6" stroke-linecap="round"')
  );
  ART.vanilla = () => g( // split pod — long dark bean, tiny seed specks
    screen('M-34 -5 Q-38 -6 -34 -8 Q0 -12 34 -8 Q38 -6 34 -5 Q0 0 -34 -5 Z','ink','inkDot',3,6)+
    path('M-30 -6 Q0 -9 30 -6','#4a3020','stroke-width="3" fill="none" opacity=".7"')+ // split
    A._h.scatter(0,-6,28,2,30,0.6,'#050505',5)+hi(-10,-7,20,0.3)
  );

  /* ---------------- SAUCE (organic pools / swooshes) ---------------- */
  function swoosh(fill,dot,size,angle){
    return screen('M-46 6 C -30 20, 30 20, 48 -2 C 30 14, -20 16, -40 8 Z',fill,dot,size,angle)+
           path('M-44 6 C -28 18, 28 18, 46 -2','#000','stroke-width="0" fill="none"');
  }
  ART.kombu_dashi = () => g( swoosh('teal','tealDot',6,10)+ell(-6,4,30,6,'#3f6f66','opacity=".2"') );
  ART.brown_butter = () => g( swoosh('amber','amberDot',5,10)+A._h.scatter(0,4,34,6,14,1,'#6a4010',5) );
  ART.beurre_blanc = () => g( swoosh('cream','creamDot',5,10)+ell(-4,4,32,6,'#f0e8d0','opacity=".3"') );
  ART.jus = () => g( swoosh('beet','beetDot',5,10)+path('M-40 6 C -24 16, 30 16, 44 -1','#2a0e18','stroke-width="1" fill="none" opacity=".4"') );
  ART.salsa_verde = () => g( swoosh('olive','oliveDot',4,10)+A._h.scatter(0,4,34,6,16,1.2,'#2a4a1a',5)+A._h.scatter(0,3,28,5,8,1.4,'#8aca4a',9) );
  ART.ponzu = () => g( swoosh('amber','amberDot',4,10)+ell(-4,4,30,5,'#5a3a10','opacity=".3"') );
  ART.mole = () => g( swoosh('sear','searDot',5,10)+A._h.scatter(0,4,32,6,12,1,'#2a1808',5) );
  ART.tigers_milk = () => g( swoosh('ivory','ivoryDot',4,10)+A._h.scatter(0,3,30,5,10,1.2,'#d8e0d0',7) );

  /* ---------------- TEXTURE (crisps / powders) ---------------- */
  ART.buckwheat_crisp = () => g( // irregular shard with holes
    screen('M-30 8 L-22 -14 L4 -18 L26 -8 L20 14 L-8 18 Z','sear','searDot',4,15)+
    circle(-6,0,3,'#161310')+circle(8,-4,2.4,'#161310')+circle(2,8,2,'#161310')+ // air holes
    path('M-30 8 L-22 -14 L4 -18','#3a2410','stroke-width="1" fill="none" opacity=".5"')
  );
  ART.tuile = () => g( // thin curved wafer, translucent, ridged
    screen('M-38 10 Q0 -22 38 8 Q0 2 -38 10 Z','cream','creamDot',3,10)+
    path('M-34 8 Q0 -16 34 7','#d8c8a0','stroke-width="1" fill="none" opacity=".5"')+
    path('M-20 4 Q0 -8 20 4','#c8b888','stroke-width="0.8" fill="none" opacity=".4"')+hi(-10,-4,18,0.5)
  );
  ART.nori_powder = () => g( // dark green-black dusting
    (function(){let s='';let x=5*9301+49297;const rnd=()=>{x=(x*9301+49297)%233280;return x/233280;};
      for(let i=0;i<60;i++){const a=rnd()*6.28,rr=Math.sqrt(rnd());const px=Math.cos(a)*30*rr,py=Math.sin(a)*10*rr;
      s+=circle(px.toFixed(1),py.toFixed(1),(0.6+rnd()*1.2).toFixed(1),i%3?'#1a2a1a':'#2a3a20');}return s;})()
  );

  ART.short_rib = () => g(
    ell(2,10,42,14,'#0c0a08','opacity=".45"')+
    screen('M-42 -12 Q-46 -16 -40 -16 L40 -16 Q46 -16 42 -12 L42 12 Q46 16 40 16 L-40 16 Q-46 16 -42 12 Z','beet','beetDot',5,0)+
    path('M-36 -8 Q0 -12 36 -6 M-34 0 Q0 -4 34 2 M-30 8 Q0 4 32 10','#3a1210','stroke-width="1.4" fill="none" opacity=".55"')+
    ell(0,-14,40,5,H('sear','searDot',3,10).url)+hi(-10,-8,22,0.4)
  );
  ART.suckling_pig = () => g(
    ell(2,10,40,13,'#0c0a08','opacity=".4"')+
    screen('M-40 8 Q-42 -14 -30 -16 L30 -16 Q42 -14 40 8 Q0 16 -40 8 Z','cream','creamDot',5,0)+
    screen('M-40 -8 Q-42 -18 -30 -18 L30 -18 Q42 -18 40 -8 Q0 -4 -40 -8 Z','sear','searDot',3,10)+
    scatter(0,-13,34,4,26,1.1,'#3a1e08',5)+hi(-10,-14,20,0.5)
  );
  ART.quail = () => g(
    screen('M-30 6 Q-34 -14 -8 -18 Q22 -22 30 -4 Q32 14 6 18 Q-24 20 -30 6 Z','sear','searDot',5,10)+
    path('M-20 -6 Q0 -12 22 -4','#5e3212','stroke-width="1.6" fill="none" opacity=".5"')+
    path('M18 8 l14 8 M22 4 l16 4','#c8a878','stroke-width="3" fill="none" opacity=".6"')+
    hi(-8,-8,18,0.5)
  );
  ART.rabbit = () => g(
    screenEll(0,0,34,30,'flesh','fleshDot',5,0)+
    path('M0 0 m-22 0 a22 20 0 1 0 44 0 a22 20 0 1 0 -44 0','none','stroke="#c88a6a" stroke-width="2" opacity=".4"')+
    path('M0 0 m-12 0 a12 11 0 1 0 24 0 a12 11 0 1 0 -24 0','none','stroke="#a86a4a" stroke-width="2" opacity=".4"')+
    circle(0,0,4,'#8a4a34')+hi(-8,-8,16,0.45)
  );
  ART.bone_marrow = () => g(
    screen('M-44 -10 Q-48 -16 -40 -16 L40 -16 Q48 -16 44 -10 L40 12 Q0 20 -40 12 Z','ivory','ivoryDot',6,0)+
    screenEll(0,-2,34,9,'cream','creamDot',4,0)+
    ell(-6,-4,20,5,'#f0e6cc','opacity=".5"')+hi(-10,-8,22,0.5)
  );
  ART.pork_jowl = () => g(
    screen('M-42 -12 L42 -12 L42 12 L-42 12 Z','coral','coralDot',5,0)+
    path('M-42 -6 L42 -6 M-42 0 L42 0 M-42 6 L42 6','#f0e0d0','stroke-width="3" opacity=".7"')+
    path('M-42 -9 L42 -9 M-42 3 L42 3','#a2483a','stroke-width="2" opacity=".5"')+hi(-10,-6,22,0.4)
  );

  root.FDL_ING_ART = ART;
})(typeof window !== 'undefined' ? window : globalThis);
