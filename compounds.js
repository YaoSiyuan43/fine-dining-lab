/* =====================================================================
   Fine Dining Lab — Flavor-Compound Model (food-pairing hypothesis)
   ---------------------------------------------------------------------
   Grounded in the "flavor network" work (Ahn, Ahnert, Bagrow, Barabási,
   Scientific Reports 2011) and Foodpairing's aroma-molecule approach:
   ~80% of flavor is volatile aroma; two ingredients tend to pair when they
   SHARE characteristic aroma-compound families (Western logic), and can also
   pair by deliberate CONTRAST (East-Asian logic).

   We model each ingredient with a small set of aroma-compound FAMILIES.
   Affinity(a,b) = weighted overlap of their families -> an explainable,
   data-driven pairing score over ALL 81 ingredients (not a hand list).
   Curated, not lab-measured — but every family assignment is defensible
   from the ingredient's real aroma profile.
   ===================================================================== */
(function (root) {
  'use strict';

  // aroma-compound families: id -> {label, note (what it smells/tastes of)}
  const FAMILIES = {
    pyrazine:  {label:'吡嗪·烘烤', note:'烘烤/坚果/焦香 — 美拉德与焙炒产生'},
    lactone:   {label:'内酯·奶脂', note:'奶油/椰香/桃李 — 乳脂与熟果'},
    terpene:   {label:'萜烯·柑橘草本', note:'柑橘/松脂/草本清香'},
    ester:     {label:'酯·果香', note:'水果甜香 — 熟果与发酵'},
    aldehyde:  {label:'醛·青鲜', note:'青草/黄瓜/脂青 — 清新脂感'},
    sulfur:    {label:'含硫·葱蒜海洋', note:'葱蒜/海洋/熟蛋 — 硫化物'},
    phenol:    {label:'酚·烟熏', note:'烟熏/丁香/药香'},
    furanone:  {label:'呋喃酮·焦糖', note:'焦糖/枫糖/烤麦 — 甜焦'},
    maritime:  {label:'溴酚·海洋', note:'碘/海藻/贝类的海洋气息'},
    earthy:    {label:'土壤菌香', note:'土臭素/蘑菇醇 — 菌菇泥土'},
    floral:    {label:'花香', note:'紫罗兰/玫瑰/橙花的花香萜'},
    green:     {label:'青叶', note:'割草/叶醛的青绿气'},
    umami:     {label:'谷氨酸·鲜', note:'谷氨酸/核苷酸鲜味(味觉桥)'},
    animalic:  {label:'肉脂·血', note:'烤肉脂香/铁质血味'}
  };

  // ingredient id -> compound families (2-4 each). Curated from real aroma profiles.
  const ING = {
    // seafood
    scallop:['sulfur','lactone','umami','maritime'],
    langoustine:['maritime','sulfur','umami'],
    uni:['maritime','umami','lactone'],
    oyster:['maritime','sulfur','umami'],
    turbot:['maritime','lactone','umami'],
    king_crab:['maritime','umami','sulfur'],
    caviar:['maritime','umami','sulfur'],
    abalone:['maritime','umami','earthy'],
    amaebi:['maritime','lactone','umami'],
    eel_unagi:['furanone','phenol','animalic','umami'],
    squid:['maritime','umami'],
    sea_bream:['maritime','aldehyde','umami'],
    anchovy:['umami','sulfur','maritime'],
    // meat
    wagyu:['animalic','lactone','furanone','umami'],
    squab:['animalic','pyrazine','earthy'],
    iberico:['animalic','pyrazine','lactone','umami'],
    lamb:['animalic','terpene','phenol'],
    foie_gras:['lactone','animalic','furanone'],
    duck:['animalic','furanone','pyrazine'],
    veal_sweetbread:['pyrazine','lactone','animalic'],
    venison:['animalic','earthy','phenol'],
    beef_tartare:['animalic','umami'],
    short_rib:['animalic','furanone','pyrazine','umami'],
    suckling_pig:['pyrazine','furanone','animalic'],
    quail:['animalic','pyrazine','earthy'],
    rabbit:['animalic','green','terpene'],
    bone_marrow:['animalic','lactone','pyrazine'],
    pork_jowl:['animalic','lactone','umami'],
    // vegetable
    white_asparagus:['sulfur','green','earthy'],
    heirloom_tomato:['umami','green','ester'],
    beetroot:['earthy','furanone'],
    green_pea:['green','aldehyde'],
    celeriac:['earthy','terpene','green'],
    carrot:['terpene','furanone','earthy'],
    corn:['furanone','lactone','umami'],
    potato:['pyrazine','earthy','sulfur'],
    cauliflower:['sulfur','pyrazine','green'],
    cabbage:['sulfur','green'],
    // fungi + truffles (garnish cat but fungal)
    black_truffle:['earthy','sulfur','animalic'],
    white_truffle:['sulfur','earthy','animalic'],
    matsutake:['earthy','terpene','umami'],
    porcini:['earthy','pyrazine','umami'],
    morel:['earthy','pyrazine','phenol'],
    chanterelle:['earthy','ester','terpene'],
    // acid + fruit
    yuzu:['terpene','floral','ester'],
    green_apple:['ester','aldehyde','green'],
    rhubarb:['green','ester'],
    sea_buckthorn:['ester','terpene','aldehyde'],
    lime:['terpene','aldehyde'],
    passion_fruit:['ester','sulfur','terpene'],
    strawberry:['ester','furanone','floral'],
    cherry:['ester','lactone','floral'],
    fig:['ester','furanone','green'],
    grape:['ester','terpene','floral'],
    // dairy
    parmesan:['umami','lactone','pyrazine'],
    burrata:['lactone','umami'],
    egg_yolk:['sulfur','lactone','umami'],
    goat_cheese:['lactone','green','sulfur'],
    // grain
    risotto_rice:['furanone','lactone'],
    buckwheat:['pyrazine','furanone'],
    koji_rice:['furanone','umami','ester'],
    // spice/herb
    saffron:['terpene','furanone','floral'],
    vanilla:['lactone','furanone','floral'],
    dill:['terpene','green'],
    basil:['terpene','phenol','floral'],
    // sauce/base
    kombu_dashi:['umami','maritime'],
    brown_butter:['furanone','lactone','pyrazine'],
    beurre_blanc:['lactone','ester'],
    jus:['animalic','furanone','umami'],
    salsa_verde:['terpene','green','sulfur'],
    ponzu:['terpene','umami','maritime'],
    mole:['pyrazine','phenol','furanone'],
    tigers_milk:['terpene','sulfur','umami'],
    // texture / garnish
    buckwheat_crisp:['pyrazine','furanone'],
    tuile:['furanone','pyrazine'],
    edible_flower:['floral','green'],
    nasturtium:['green','sulfur','terpene'],
    micro_herb:['green','terpene'],
    gold_leaf:[],                        // inert — visual only
    nori_powder:['maritime','umami','sulfur'],
    charcoal_oil:['phenol','pyrazine']
  };

  // weight some families higher when shared (they are stronger "bridges")
  const W = { umami:1.4, maritime:1.3, earthy:1.25, animalic:1.2, pyrazine:1.15, furanone:1.15 };
  const wOf = f => W[f] || 1;

  function families(id){ return ING[id] || []; }

  // shared-compound affinity 0..1 (weighted Jaccard-ish over families)
  function affinity(a, b){
    const A = families(a), B = families(b);
    if(!A.length || !B.length) return 0;
    const setB = new Set(B);
    let shareW = 0, sharedList = [];
    A.forEach(f=>{ if(setB.has(f)){ shareW += wOf(f); sharedList.push(f); } });
    const denom = new Set([...A, ...B]).size || 1;
    const score = shareW / denom;                 // 0..~1.4
    return { score: Math.min(1, score * 1.15), shared: sharedList };
  }

  // recommend the top-N ingredients that best bridge with the current set.
  // Blends: shared-aroma affinity (food-pairing hypothesis) + curated classic
  // pairings (contrast/acid-balance knowledge) + a cross-category nudge so a
  // seafood dish isn't only told to add more seafood.
  // opts: {catOf(id)->cat, classicPairs:Set('a|b'), n}
  function recommend(currentIds, allIds, opts={}){
    const n = opts.n || 6;
    const catOf = opts.catOf || (()=> '');
    const classic = opts.classicPairs || new Set();
    const key=(a,b)=>[a,b].sort().join('|');
    const used = new Set(currentIds);
    const usedCats = new Set(currentIds.map(catOf));
    const cand = allIds.filter(id=>!used.has(id) && families(id).length);
    const scored = cand.map(id=>{
      let best=0, bestVia=[], sum=0, cnt=0, isClassic=false;
      currentIds.forEach(cur=>{
        const {score, shared} = affinity(cur, id);
        if(score>best){ best=score; bestVia=shared; }
        sum+=score; cnt++;
        if(classic.has(key(cur,id))) isClassic=true;
      });
      const avg = cnt? sum/cnt : 0;
      let s = best*0.6 + avg*0.25;
      let via = bestVia, kind = 'aroma';
      if(isClassic){ s = Math.max(s, 0.72) + 0.2; kind='classic'; }   // curated classic bridge
      // cross-category nudge: reward a new category (breadth)
      if(!usedCats.has(catOf(id))) s += 0.06;
      return { id, score:s, via, kind };
    }).filter(x=>x.score>0.1);
    scored.sort((a,b)=>b.score-a.score);
    return scored.slice(0,n);
  }

  root.FDL_FLAVOR = { FAMILIES, families, affinity, recommend };
})(typeof window !== 'undefined' ? window : globalThis);
