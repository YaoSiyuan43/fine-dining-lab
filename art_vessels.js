/* =====================================================================
   Fine Dining Lab — Vessel art library v3 (felt refinement pass)
   Goal: detail that READS at plate scale under food + vignette.
   Every round vessel gets a depth kit:
     - thick bright rim arc (top) + dark cast arc (bottom) = real thickness
     - deep inner well shadow = the food sits INSIDE, not on a decal
     - broad soft specular reflection (light upper-left)
     - a high-opacity MATERIAL SIGNATURE (hammer/glaze/ribs/pores/crackle)
     - contact ambient occlusion ring where food meets the surface
   Local frame: plate centred at (0,0), roughly -150..150 wide.
   ===================================================================== */
(function (root) {
  'use strict';
  const A = root.FDL_ART;
  const { ell, path, circle, hi } = A._h;
  const scatter = A._h.scatter;
  const H = A.halftone;
  function screen(d, fill, dot, size, angle, extra=''){ return path(d,H(fill,dot,size,angle).url,extra); }
  function screenEll(cx,cy,rx,ry,fill,dot,size,angle,extra=''){ return ell(cx,cy,rx,ry,H(fill,dot,size,angle).url,extra); }
  const g=(inner)=>`<g>${inner}</g>`;
  const shadow=(rx,ry)=>ell(10,ry*0.38+12,rx*1.04,ry*0.4,'#000','opacity=".6"');

  // --- depth kit pieces (stronger, meant to be visible) ---
  // bright raised rim: a wide top highlight + a dark under-edge that reads as thickness
  const rimLight=(rx,ry,light,dark)=>
    `<path d="M${-rx} 0 A${rx} ${ry} 0 0 1 ${rx} 0" fill="none" stroke="${light}" stroke-width="4.5" opacity=".7"/>`+
    `<path d="M${-rx} 2 A${rx} ${ry} 0 0 0 ${rx} 2" fill="none" stroke="${dark}" stroke-width="5" opacity=".55"/>`+
    `<path d="M${-rx*0.9} -1 A${rx*0.9} ${ry*0.9} 0 0 1 ${rx*0.9} -1" fill="none" stroke="#ffffff" stroke-width="1.6" opacity=".45"/>`;
  // deep well so food sits inside
  const well=(rx,ry,depth=0.34)=>ell(0,ry*0.14,rx*0.84,ry*0.78,'#000',`opacity="${depth}"`);
  // broad soft reflection
  const sheen=(rx,ry)=>ell(-rx*0.28,-ry*0.34,rx*0.5,ry*0.24,'#ffffff','opacity=".14"');
  // occlusion ring where plated food meets the surface
  const contact=(rx,ry)=>ell(0,ry*0.06,rx*0.5,ry*0.34,'#000','opacity=".22"');

  const V = {};

  // slate — honed dark stone rect, mineral speckle + sheen band + bevel
  V.slate = () => g(shadow(150,70)+
    screen('M-150 -46 Q-152 -50 -146 -50 L146 -50 Q152 -50 150 -46 L150 46 Q152 50 146 50 L-146 50 Q-152 50 -150 46 Z','ink','inkDot',7,0)+
    scatter(0,0,140,44,90,1.0,'#3a3a42',5)+scatter(0,0,120,38,34,0.6,'#5a5a64',9)+
    path('M-146 -40 L146 -40','#6a6a76','stroke-width="2.5" fill="none" opacity=".4"')+ // top bevel light
    path('M-146 44 L146 44','#000','stroke-width="3" fill="none" opacity=".5"')+
    path('M-120 -22 Q0 -30 120 -22','#7a7a86','stroke-width="3" fill="none" opacity=".22"'));

  // raw_ceramic — hand-thrown warm clay, throwing rings, glaze pool
  V.raw_ceramic = () => g(shadow(140,132)+
    screenEll(0,0,140,66,'cream','creamDot',8,0)+ well(120,54,0.3)+
    (function(){let s='';for(let i=1;i<=4;i++)s+=`<ellipse cx="0" cy="2" rx="${28*i}" ry="${13*i}" fill="none" stroke="#a89878" stroke-width="1.4" opacity=".28"/>`;return s;})()+
    scatter(0,0,132,60,54,1.0,'#c8b898',5)+ contact(120,54)+ rimLight(140,66,'#f6ecd6','#6a5c44')+ sheen(140,66));

  // white_porcelain — pristine glossy, double rim, mirror reflection
  V.white_porcelain = () => g(shadow(140,132)+
    screenEll(0,0,140,66,'ivory','ivoryDot',9,0)+ well(118,54,0.26)+
    ell(0,0,116,54,'none','stroke="#d8d2c2" stroke-width="1.8" opacity=".7"')+ contact(116,54)+
    rimLight(140,66,'#ffffff','#8a8474')+ ell(-34,-16,80,28,'#ffffff','opacity=".2"')+ sheen(140,66));

  // black_glaze — dark reflective glaze, strong specular streak
  V.black_glaze = () => g(shadow(140,132)+
    screenEll(0,0,140,66,'ink','inkDot',8,0)+ well(120,56,0.4)+
    rimLight(140,66,'#6a6a78','#050508')+
    path('M-78 -24 Q0 -38 84 -20','#a8a8b6','stroke-width="5" fill="none" opacity=".5"')+
    path('M-54 -14 Q0 -24 60 -12','#c8c8d4','stroke-width="2" fill="none" opacity=".3"')+
    ell(-28,-12,72,24,'#5a5a68','opacity=".26"'));

  // glass_cloche — clear dome, layered reflections
  V.glass_cloche = () => g(shadow(120,110)+
    screenEll(0,10,120,52,'ivory','ivoryDot',8,0)+ contact(110,50)+
    path('M-92 6 Q-92 -80 0 -82 Q92 -80 92 6 Z','#2a3038','opacity=".16"')+
    path('M-92 6 Q-92 -80 0 -82 Q92 -80 92 6','#bcc8d0','stroke-width="2.5" fill="none" opacity=".6"')+
    path('M-60 -30 Q-42 -70 -6 -76','#f2f8fc','stroke-width="5" fill="none" opacity=".5"')+
    path('M-40 -20 Q-28 -50 -2 -58','#f2f8fc','stroke-width="2.5" fill="none" opacity=".34"')+
    ell(0,4,80,16,'#000','opacity=".24"')+ circle(0,-86,7,'#d8e0e4','opacity=".8"'));

  // stone_vessel — thick craggy bowl, deep well
  V.stone_vessel = () => g(shadow(140,120)+
    screen('M-136 -6 Q-140 -42 -80 -50 Q0 -58 80 -50 Q140 -42 136 -6 Q120 42 0 54 Q-120 42 -136 -6 Z','ink','inkDot',7,0)+
    scatter(0,-4,128,46,78,1.2,'#3a3630',5)+scatter(0,-2,110,40,30,0.7,'#5a544c',9)+
    ell(0,0,104,40,'#000','opacity=".42"')+ // deep well
    path('M-116 -12 Q0 -26 116 -12','#6a645c','stroke-width="3" fill="none" opacity=".36"')+
    path('M-112 -14 Q0 -28 112 -14','#8a847c','stroke-width="1.4" fill="none" opacity=".3"')+ hi(-32,-24,60,0.22));

  // mirror_tray — polished metal, sharp multi-band reflections
  V.mirror_tray = () => g(shadow(140,120)+
    screenEll(0,0,138,62,'ivory','ivoryDot',10,0)+
    ell(0,0,138,62,'#9aa2aa','opacity=".5"')+ well(120,54,0.18)+
    path('M-96 -24 Q0 -38 96 -20','#ffffff','stroke-width="7" fill="none" opacity=".6"')+
    path('M-74 6 Q0 -6 74 10','#ffffff','stroke-width="3.5" fill="none" opacity=".36"')+
    path('M-42 22 Q0 14 46 26','#ffffff','stroke-width="2" fill="none" opacity=".24"')+
    rimLight(138,62,'#f2f6fa','#5a626a'));

  // ice_plate — frosted translucent slab, cracks + frozen speckle
  V.ice_plate = () => g(shadow(140,120)+
    screenEll(0,0,138,62,'ivory','ivoryDot',9,0)+
    ell(0,0,138,62,'#cfe0e8','opacity=".36"')+ well(118,52,0.16)+
    path('M-46 -32 L-12 2 L-34 34 M22 -32 L46 12 M2 -12 L66 -22 M-62 6 L-20 18 M40 20 L58 -6','#ffffff','stroke-width="1.8" fill="none" opacity=".7"')+
    scatter(0,0,120,50,46,1.4,'#f2f8fc',5)+ rimLight(138,62,'#ffffff','#7a95a2')+ sheen(138,62));

  // wood_board — warm plank, grain + knots + bevel
  V.wood_board = () => g(shadow(150,70)+
    screen('M-150 -44 L150 -44 L150 44 L-150 44 Z','amber','amberDot',7,0)+
    (function(){let s='';for(let i=-3;i<=3;i++)s+=`<path d="M-150 ${i*13} Q0 ${i*13-6} 150 ${i*13}" stroke="#7a4e16" stroke-width="1.6" fill="none" opacity=".48"/>`;return s;})()+
    circle(-70,10,8,'#6a4212','opacity=".55"')+circle(-70,10,3.4,'#4a2e08','opacity=".65"')+
    circle(64,-14,5.4,'#6a4212','opacity=".5"')+
    path('M-150 -44 L150 -44','#e8b878','stroke-width="2.5" opacity=".45"')+
    path('M-150 44 L150 44','#000','stroke-width="3" opacity=".4"')+ scatter(0,0,140,38,24,0.9,'#a9711f',7));

  // volcanic_rock — porous basalt, dense pores + ember glow
  V.volcanic_rock = () => g(shadow(144,120)+
    screen('M-140 -4 Q-144 -40 -70 -48 Q0 -54 70 -48 Q144 -40 140 -4 Q124 44 0 52 Q-124 44 -140 -4 Z','ink','inkDot',6,0)+
    scatter(0,0,130,46,140,1.9,'#080808',5)+scatter(0,0,120,42,56,0.9,'#4a4a4e',9)+
    scatter(0,8,86,28,16,1.5,'#9a4418',13)+ scatter(0,10,70,22,7,1.0,'#e06a20',17)+ // embers glow
    ell(0,2,104,38,'#000','opacity=".34"')+ hi(-32,-18,52,0.16));

  // copper_pot — warm metal, hammered facets, bright rim + reflection
  V.copper_pot = () => g(shadow(130,120)+
    screen('M-120 -8 Q-124 26 -60 42 Q0 52 60 42 Q124 26 120 -8 Q118 -32 0 -36 Q-118 -32 -120 -8 Z','amber','amberDot',7,0)+
    (function(){let s='';for(let r=0;r<5;r++)for(let cc=-4;cc<=4;cc++){const x=cc*24+(r%2?12:0),y=-6+r*11;s+=`<circle cx="${x}" cy="${y}" r="6" fill="none" stroke="#f0c070" stroke-width="1" opacity=".38"/><circle cx="${x-1.5}" cy="${y-1.5}" r="2.2" fill="#ffe6b0" opacity=".4"/>`;}return s;})()+ // hammered dimples
    ell(0,-8,120,30,'none','stroke="#ffcf7a" stroke-width="4" opacity=".8"')+
    path('M-84 -4 Q0 -14 84 2','#fff0c8','stroke-width="6" fill="none" opacity=".55"')+
    ell(0,-6,110,24,'#5a2e0a','opacity=".34"'));

  // seashell — fan shell, radiating ribs + growth lines + pearl sheen
  V.seashell = () => g(shadow(140,120)+
    screen('M0 52 Q-140 30 -120 -30 Q-80 -50 0 -52 Q80 -50 120 -30 Q140 30 0 52 Z','cream','creamDot',7,0)+
    (function(){let s='';for(let i=-7;i<=7;i++){const a=i*11*Math.PI/180;s+=`<path d="M0 48 Q${Math.sin(a)*70} ${-12-Math.abs(i)*3} ${Math.sin(a)*124} -34" stroke="#b8a480" stroke-width="2" fill="none" opacity=".55"/>`;}return s;})()+
    (function(){let s='';for(let r=1;r<=4;r++)s+=`<path d="M${-34*r} ${22-r*4} Q0 ${46-r*8} ${34*r} ${22-r*4}" stroke="#ece0c4" stroke-width="1.2" fill="none" opacity=".34"/>`;return s;})()+
    ell(-28,-4,56,22,'#fff','opacity=".18"')+ ell(24,-10,30,12,'#ffd0e0','opacity=".12"')+ hi(-30,0,52,0.4));

  // lacquer_bowl — deep glossy red-black, mirror interior
  V.lacquer_bowl = () => g(shadow(126,120)+
    screen('M-120 -6 Q-124 28 -60 44 Q0 54 60 44 Q124 28 120 -6 Q118 -30 0 -34 Q-118 -30 -120 -6 Z','crimson','crimsonDot',7,0)+
    ell(0,-6,120,28,'none','stroke="#ff7a64" stroke-width="3" opacity=".7"')+
    ell(0,-4,108,24,'#160606','opacity=".55"')+ // deep dark interior
    path('M-76 -10 Q0 -20 76 -6','#ffc0a8','stroke-width="5" fill="none" opacity=".5"')+
    path('M-44 4 Q0 -2 48 6','#ff9a80','stroke-width="2.5" fill="none" opacity=".34"'));

  // clay_pot — rustic terracotta, matte thumb-thrown texture
  V.clay_pot = () => g(shadow(130,120)+
    screen('M-124 -6 Q-128 28 -62 44 Q0 54 62 44 Q128 28 124 -6 Q120 -32 0 -36 Q-120 -32 -124 -6 Z','coral','coralDot',7,0)+
    ell(0,-6,124,30,'none','stroke="#b0604a" stroke-width="3.5" opacity=".6"')+
    ell(0,-4,108,26,'#341612','opacity=".36"')+
    scatter(0,6,110,36,46,1.1,'#a24634',5)+
    (function(){let s='';for(let i=1;i<=4;i++)s+=`<ellipse cx="0" cy="8" rx="${26*i}" ry="${8*i}" fill="none" stroke="#7a3828" stroke-width="1.2" opacity=".24"/>`;return s;})()+ hi(-30,-14,52,0.22));

  // black_stone_slab — long polished obsidian, wet sheen
  V.black_stone_slab = () => g(shadow(150,54)+
    screen('M-150 -32 Q-152 -36 -146 -36 L146 -36 Q152 -36 150 -32 L150 32 Q152 36 146 36 L-146 36 Q-152 36 -150 32 Z','ink','inkDot',6,0)+
    scatter(0,0,140,28,46,0.8,'#2a2a32',5)+
    path('M-150 -26 L150 -26','#6a6a76','stroke-width="3" fill="none" opacity=".34"')+ // sheen
    path('M-130 -22 Q0 -28 130 -22','#8a8a96','stroke-width="1.6" fill="none" opacity=".24"')+
    path('M-146 32 L146 32','#000','stroke-width="3" opacity=".5"'));

  // nest_vessel — woven twigs, dark hollow
  V.nest_vessel = () => g(shadow(138,120)+
    screenEll(0,0,136,60,'sear','searDot',5,0)+
    (function(){let s='';for(let i=0;i<30;i++){const a=i*12*Math.PI/180;const rx=Math.cos(a),ry=Math.sin(a);
      s+=`<path d="M${rx*34} ${ry*15} Q${rx*88} ${ry*40} ${rx*132} ${ry*56}" stroke="${i%2?'#5a3a1a':'#8a5e30'}" stroke-width="${1.8+i%3*0.7}" fill="none" opacity=".75"/>`;}return s;})()+
    ell(0,0,84,36,'#100a04','opacity=".58"')+ hi(-30,-8,42,0.24));

  // smoke_box — dark wooden box, grain + lid seam + smoke wisps
  V.smoke_box = () => g(shadow(130,64)+
    screen('M-124 -36 L124 -36 L124 36 L-124 36 Z','sear','searDot',6,0)+
    (function(){let s='';for(let i=-2;i<=2;i++)s+=`<path d="M-124 ${i*13} L124 ${i*13}" stroke="#4a3018" stroke-width="1.3" opacity=".4"/>`;return s;})()+
    path('M-124 -36 L124 -36','#e0b070','stroke-width="2.5" opacity=".4"')+ // top edge light
    path('M-124 -30 L124 -30','#2a1808','stroke-width="4" opacity=".6"')+ // lid seam
    path('M36 -36 Q52 -70 36 -98 Q26 -118 46 -138','#d8dce0','stroke-width="8" fill="none" opacity=".34" stroke-linecap="round"')+
    path('M58 -36 Q72 -64 60 -90 Q52 -106 66 -122','#d8dce0','stroke-width="4.5" fill="none" opacity=".24" stroke-linecap="round"')+
    path('M14 -36 Q22 -58 14 -78','#d8dce0','stroke-width="3" fill="none" opacity=".16" stroke-linecap="round"'));

  // paper_edible — translucent curled sheet, fibre texture
  V.paper_edible = () => g(shadow(140,60)+
    screen('M-138 30 Q-140 -36 -120 -38 Q0 -32 130 -38 Q142 -32 138 34 Q0 26 -138 30 Z','ivory','ivoryDot',5,0,'opacity=".92"')+
    path('M-120 -38 Q0 -32 130 -38','#f0eadd','stroke-width="1.8" fill="none" opacity=".55"')+
    path('M-100 10 Q0 4 110 10','#d8d0bc','stroke-width="1.2" fill="none" opacity=".4"')+
    (function(){let s='';for(let i=-2;i<=2;i++)s+=`<path d="M${-120} ${i*10} Q0 ${i*10-3} 128 ${i*10}" stroke="#d0c8b2" stroke-width="0.7" fill="none" opacity=".28"/>`;return s;})()+
    hi(-30,-8,52,0.32));

  root.FDL_VESSEL_ART = V;
})(typeof window !== 'undefined' ? window : globalThis);
