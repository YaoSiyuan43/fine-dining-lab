/**
 * FINE DINING LAB — 策展知识库 (Curated Knowledge Base)
 * ------------------------------------------------------------------
 * 数据来源：全球顶级 fine dining 餐厅公开的经典菜式、风味搭配学原理、
 * 分子/现代烹饪技法。所有搭配与技法均有现实依据；创新在依据之上进行，
 * 不做无据乱搭。禁忌规则来自经典风味搭配学与食品科学。
 *
 * 覆盖菜系/餐厅（示例，非穷举）：
 *   北欧新派   — Noma (哥本哈根), Geranium, Alchemist, Frantzén
 *   西班牙前卫 — El Celler de Can Roca, Disfrutar, Mugaritz, elBulli 遗产
 *   法餐现代   — Arpège, Mirazur, Guy Savoy, Le Bernardin
 *   意餐现代   — Osteria Francescana, Le Calandre
 *   日料/怀石 — Sushi Saito, Den, Narisawa, RyuGin
 *   秘鲁/南美 — Central, Maido, A Casa do Porco
 *   美式现代   — The French Laundry, Eleven Madison Park, Atelier Crenn
 *   中餐现代   — Ultraviolet (上海), The Chairman (香港)
 * ------------------------------------------------------------------
 */

/* ========== 1. 食材库 INGREDIENTS ========== */
/* season: spring/summer/autumn/winter/all  |  tier: common/premium/rare
   texture: 主要口感  |  flavor: 主要风味标签  |  ref: 现实出处线索 */
export const INGREDIENTS = [
  // —— 海鲜 SEAFOOD ——
  { id: "langoustine", name: "挪威海螯虾 Langoustine", cat: "protein", season: "all", tier: "premium",
    texture: ["柔嫩","弹","juicy"], flavor: ["鲜甜","海洋","碘香"],
    ref: "Le Bernardin / Frantzén 常用生食或极短暂炙烤" },
  { id: "scallop", name: "带子 Scallop", cat: "protein", season: "winter", tier: "premium",
    texture: ["柔嫩","丝滑"], flavor: ["清甜","奶香","海洋"],
    ref: "The French Laundry 生食薄切；日料昆布〆" },
  { id: "hokkaido_uni", name: "北海道海胆 Uni", cat: "protein", season: "autumn", tier: "rare",
    texture: ["绵密","入口即化"], flavor: ["浓鲜","海洋甜","奶油感"],
    ref: "Sushi Saito 军舰；Den 创意冷前菜" },
  { id: "turbot", name: "多宝鱼 Turbot", cat: "protein", season: "all", tier: "premium",
    texture: ["紧实","丰腴"], flavor: ["清雅","坚果尾韵"],
    ref: "Le Bernardin 招牌；黄油慢煎" },
  { id: "oyster", name: "生蚝 Oyster", cat: "protein", season: "winter", tier: "premium",
    texture: ["滑","juicy"], flavor: ["矿物","海洋","金属清冽"],
    ref: "Noma 佐酸模；EMP 苹果雪葩配蚝" },
  { id: "caviar", name: "鱼子酱 Caviar", cat: "garnish", season: "all", tier: "rare",
    texture: ["爆珠","滑"], flavor: ["咸鲜","坚果","海洋"],
    ref: "全球高级餐厅通用点睛；Petrossian 级" },
  { id: "king_crab", name: "帝王蟹 King Crab", cat: "protein", season: "winter", tier: "premium",
    texture: ["纤维","弹"], flavor: ["清甜","海洋"],
    ref: "北欧餐厅冬季主角" },

  // —— 肉类 MEAT ——
  { id: "wagyu_a5", name: "A5 和牛 Wagyu", cat: "protein", season: "all", tier: "rare",
    texture: ["入口即化","油脂丰盈"], flavor: ["浓郁","牛油香","鲜"],
    ref: "日式炭烤；Ultraviolet 分子演绎" },
  { id: "squab", name: "乳鸽 Squab", cat: "protein", season: "autumn", tier: "premium",
    texture: ["嫩","略韧"], flavor: ["野味","铁质","浓香"],
    ref: "法餐经典；Guy Savoy 玫瑰乳鸽" },
  { id: "iberico", name: "伊比利亚黑猪 Ibérico", cat: "protein", season: "all", tier: "premium",
    texture: ["油润","丝滑"], flavor: ["坚果","橡果甜","咸鲜"],
    ref: "西班牙餐厅核心；A Casa do Porco" },
  { id: "lamb", name: "羔羊 Lamb", cat: "protein", season: "spring", tier: "premium",
    texture: ["嫩","juicy"], flavor: ["草本","脂香","微膻"],
    ref: "Mirazur 春季；地中海料理" },
  { id: "foie_gras", name: "鹅肝 Foie Gras", cat: "protein", season: "winter", tier: "rare",
    texture: ["绵密","入口即化"], flavor: ["浓郁","黄油","矿物"],
    ref: "法餐殿堂；常配甜酸果冻" },

  // —— 蔬菜/菌菇 VEG & FUNGI ——
  { id: "white_asparagus", name: "白芦笋 White Asparagus", cat: "vegetable", season: "spring", tier: "premium",
    texture: ["脆嫩","多汁"], flavor: ["清甜","微苦","草本"],
    ref: "欧洲春季限定；Arpège 蔬食主义" },
  { id: "heirloom_tomato", name: "传家宝番茄 Heirloom Tomato", cat: "vegetable", season: "summer", tier: "common",
    texture: ["多汁","果肉感"], flavor: ["酸甜","鲜","日晒香"],
    ref: "Osteria Francescana；夏季核心" },
  { id: "beetroot", name: "甜菜根 Beetroot", cat: "vegetable", season: "autumn", tier: "common",
    texture: ["脆","粉糯"], flavor: ["泥土甜","矿物"],
    ref: "北欧发酵/烤盐焗；Alchemist 演绎" },
  { id: "black_truffle", name: "黑松露 Black Truffle", cat: "garnish", season: "winter", tier: "rare",
    texture: ["脆","颗粒"], flavor: ["浓郁菌香","泥土","麝香"],
    ref: "冬季白盘点睛；意/法通用" },
  { id: "matsutake", name: "松茸 Matsutake", cat: "vegetable", season: "autumn", tier: "rare",
    texture: ["脆","纤维"], flavor: ["松木香","泥土","鲜"],
    ref: "怀石秋季主角；RyuGin 土瓶蒸" },
  { id: "green_pea", name: "青豌豆 Green Pea", cat: "vegetable", season: "spring", tier: "common",
    texture: ["爆汁","粉"], flavor: ["清甜","草本"],
    ref: "春季 amuse；泥/慕斯常见" },

  // —— 果实/酸源 FRUIT & ACID ——
  { id: "yuzu", name: "柚子 Yuzu", cat: "acid", season: "winter", tier: "premium",
    texture: ["汁"], flavor: ["清冽酸","花香","柑橘"],
    ref: "日料点睛；现代西餐酸源新宠" },
  { id: "green_apple", name: "青苹果 Green Apple", cat: "acid", season: "autumn", tier: "common",
    texture: ["脆","汁"], flavor: ["清爽酸","果香"],
    ref: "EMP 生蚝配苹果雪葩" },
  { id: "rhubarb", name: "大黄 Rhubarb", cat: "acid", season: "spring", tier: "common",
    texture: ["纤维","汁"], flavor: ["尖锐酸","青草"],
    ref: "北欧春季；发酵/腌渍" },
  { id: "sea_buckthorn", name: "沙棘 Sea Buckthorn", cat: "acid", season: "autumn", tier: "premium",
    texture: ["泥","汁"], flavor: ["强酸","热带果香","涩"],
    ref: "Noma 标志性北欧酸源" },

  // —— 质地/点缀 TEXTURE & FINISH ——
  { id: "buckwheat_crisp", name: "荞麦脆片 Buckwheat Crisp", cat: "texture", season: "all", tier: "common",
    texture: ["脆","碎"], flavor: ["坚果","焙香"],
    ref: "北欧提供脆度层" },
  { id: "edible_flower", name: "可食用花 Edible Flowers", cat: "garnish", season: "spring", tier: "premium",
    texture: ["轻脆","柔"], flavor: ["清香","微苦","花蜜"],
    ref: "Mirazur/Noma 摆盘点睛" },
  { id: "nasturtium", name: "旱金莲叶 Nasturtium", cat: "garnish", season: "summer", tier: "premium",
    texture: ["柔","脆"], flavor: ["辛辣","胡椒感","青草"],
    ref: "现代餐厅香辛叶片" },
  { id: "kombu_dashi", name: "昆布高汤 Kombu Dashi", cat: "sauce", season: "all", tier: "common",
    texture: ["清澈液"], flavor: ["鲜(umami)","海洋","干净"],
    ref: "日料鲜味基底；现代西餐借用" },
  { id: "brown_butter", name: "焦化黄油 Brown Butter", cat: "sauce", season: "all", tier: "common",
    texture: ["油润"], flavor: ["坚果","焦香","奶香"],
    ref: "法餐万能酱汁基底" },
  { id: "beurre_blanc", name: "白黄油酱 Beurre Blanc", cat: "sauce", season: "all", tier: "common",
    texture: ["乳化丝滑"], flavor: ["奶香","酸","丰腴"],
    ref: "法餐经典配鱼" },
];

/* ========== 2. 烹饪技法库 TECHNIQUES ========== */
export const TECHNIQUES = [
  { id: "sous_vide", name: "低温慢煮 Sous-vide", intensity: "gentle",
    effect: "极致嫩度、精准熟度", ref: "现代西厨标配", good_for: ["protein"] },
  { id: "smoke", name: "冷/热烟熏 Smoking", intensity: "aromatic",
    effect: "木质烟香、复杂层次", ref: "北欧/美式现代", good_for: ["protein","vegetable"] },
  { id: "ferment", name: "发酵 Fermentation", intensity: "transform",
    effect: "增鲜、酸度、深度", ref: "Noma 发酵实验室核心", good_for: ["vegetable","acid"] },
  { id: "cure", name: "腌渍/盐渍 Curing", intensity: "gentle",
    effect: "紧实质地、浓缩风味", ref: "北欧/日式〆", good_for: ["protein"] },
  { id: "spherify", name: "球化 Spherification", intensity: "molecular",
    effect: "爆珠、液体封装", ref: "elBulli 发明遗产", good_for: ["acid","sauce","garnish"] },
  { id: "foam", name: "泡沫/慕斯 Espuma", intensity: "molecular",
    effect: "轻盈空气感风味", ref: "elBulli；现代通用", good_for: ["sauce","vegetable"] },
  { id: "clarify", name: "澄清 Clarification", intensity: "molecular",
    effect: "清澈却浓郁的液体", ref: "现代高汤/鸡尾酒技法", good_for: ["sauce"] },
  { id: "torch", name: "喷枪炙烤 Torch/Aburi", intensity: "aromatic",
    effect: "表面焦香、内部生嫩", ref: "日式炙寿司", good_for: ["protein"] },
  { id: "char", name: "炭火直烤 Charcoal Grill", intensity: "intense",
    effect: "烟火气、美拉德焦香", ref: "Etxebarri/日式炭烤", good_for: ["protein","vegetable"] },
  { id: "dehydrate", name: "脱水制脆 Dehydration", intensity: "transform",
    effect: "浓缩风味、脆质地", ref: "现代脆片/粉末", good_for: ["vegetable","texture","garnish"] },
];

/* ========== 3. 器皿库 VESSELS ========== */
export const VESSELS = [
  { id: "slate", name: "黑石板 Slate", mood: "极简暗调", ref: "北欧/现代常用暗色衬底" },
  { id: "ceramic_raw", name: "手作粗陶 Raw Ceramic", mood: "自然质朴", ref: "Noma/Frantzén 匠人器皿" },
  { id: "porcelain_white", name: "极简白瓷 White Porcelain", mood: "纯净留白", ref: "法餐经典留白美学" },
  { id: "glass_dome", name: "玻璃烟熏罩 Glass Cloche", mood: "戏剧揭盖", ref: "烟熏上桌仪式感" },
  { id: "stone_bowl", name: "天然石凹器 Stone Vessel", mood: "原始有机", ref: "Central 高山主题" },
  { id: "mirror_tray", name: "镜面托盘 Mirror Tray", mood: "倒影华丽", ref: "分子料理展示" },
  { id: "ice_plate", name: "冰盘 Ice Plate", mood: "冷冽通透", ref: "生食海鲜冷盘" },
];

/* ========== 4. 经典风味搭配 PAIRINGS（有据的强搭配，加分项）========== */
/* 每条：两个 ingredient id + 依据说明 */
export const PAIRINGS = [
  ["scallop","yuzu","带子清甜 × 柚子清酸，日料/现代西餐经典提亮"],
  ["oyster","green_apple","EMP 名菜：生蚝的矿物海洋味配青苹果雪葩解腻"],
  ["langoustine","brown_butter","海螯虾鲜甜 × 焦化黄油坚果香，法餐经典"],
  ["wagyu_a5","black_truffle","和牛油脂 × 黑松露菌香，奢华叠加公认经典"],
  ["foie_gras","rhubarb","鹅肝浓腻 × 大黄尖酸，甜酸解腻法餐逻辑"],
  ["turbot","beurre_blanc","多宝鱼丰腴 × 白黄油酸乳化，Le Bernardin 式"],
  ["scallop","caviar","带子 × 鱼子酱，双重海洋鲜的高级叠加"],
  ["uni","kombu_dashi","海胆浓鲜 × 昆布高汤，日式 umami 协同"],
  ["heirloom_tomato","edible_flower","夏季番茄 × 花卉，Osteria 夏日盘面"],
  ["beetroot","black_truffle","甜菜土壤甜 × 松露泥土香，同调呼应"],
  ["matsutake","kombu_dashi","松茸松木香 × 昆布高汤，土瓶蒸经典"],
  ["lamb","edible_flower","春羔羊草本 × 春花，Mirazur 季节呼应"],
  ["squab","beetroot","乳鸽铁质 × 甜菜矿物甜，法餐野味配根菜"],
  ["king_crab","yuzu","帝王蟹清甜 × 柚子酸，冬季海鲜提亮"],
  ["iberico","sea_buckthorn","伊比利亚脂香 × 沙棘强酸解腻"],
  ["hokkaido_uni","caviar","海胆 × 鱼子酱，海洋鲜味的极致叠加"],
  ["white_asparagus","brown_butter","白芦笋 × 焦化黄油，欧洲春季黄金组合"],
  ["green_pea","edible_flower","青豌豆清甜 × 春花，春季 amuse"],
];

/* ========== 5. 搭配禁忌 TABOOS（乱搭/科学禁忌，扣分或警告）========== */
export const TABOOS = [
  { pair: ["oyster","brown_butter"], level: "warn",
    why: "生蚝清冽矿物味被焦化黄油厚重坚果味压盖，浪费蚝的细腻——极少这样搭" },
  { pair: ["caviar","sea_buckthorn"], level: "warn",
    why: "鱼子酱娇贵咸鲜 × 沙棘强酸涩，酸度会毁掉鱼子酱的层次" },
  { pair: ["black_truffle","yuzu"], level: "warn",
    why: "黑松露幽微菌香极易被柚子高亢花酸盖掉，松露白搭" },
  { pair: ["wagyu_a5","sea_buckthorn"], level: "warn",
    why: "和牛细腻油脂遇沙棘尖锐强酸,风味打架而非平衡" },
  { pair: ["foie_gras","kombu_dashi"], level: "warn",
    why: "鹅肝西式浓脂与昆布日式清鲜体系冲突，缺乏桥接易显突兀" },
  { pair: ["hokkaido_uni","brown_butter"], level: "avoid",
    why: "海胆入口即化的绵密海洋甜被焦化黄油完全掩盖，属浪费顶级食材" },
  { pair: ["matsutake","caviar"], level: "warn",
    why: "松茸幽香与鱼子酱咸鲜互不相衬，两种主角互相干扰" },
  // 通用规则类禁忌
  { pair: ["__rule_delicate_seafood","__rule_heavy_smoke"], level: "warn",
    why: "娇嫩生食海鲜(海胆/带子/生蚝)+ 重烟熏：烟味会盖过海洋细腻，慎用" },
];

/* ========== 6. 季节 / 天气 灵感线索 CONTEXT CUES ========== */
export const CONTEXT = {
  seasons: {
    spring: { mood:"清新回暖", palette:["嫩绿","粉白"], hero:["white_asparagus","lamb","green_pea","rhubarb"] },
    summer: { mood:"明亮丰盈", palette:["番茄红","阳光黄"], hero:["heirloom_tomato","nasturtium"] },
    autumn: { mood:"沉稳丰收", palette:["琥珀","栗棕"], hero:["matsutake","hokkaido_uni","beetroot","sea_buckthorn","green_apple"] },
    winter: { mood:"内敛醇厚", palette:["雪白","深灰","金"], hero:["scallop","oyster","black_truffle","king_crab","foie_gras","yuzu"] },
  },
  weather: {
    sunny:   "明亮天气 → 提亮酸度、清爽脆度、鲜艳花卉",
    rainy:   "阴雨 → 温暖高汤、烟熏、发酵深度、慰藉感",
    snowy:   "雪天 → 醇厚油脂(鹅肝/和牛)、暖汤、根菜甜",
    foggy:   "雾天 → 澄清汤、幽微菌香、朦胧摆盘",
  },
};

/* ========== 7. 名厨示范菜 SIGNATURE DEMOS（可一键体验）========== */
export const DEMOS = [
  { name:"冬之海 · 带子柚香", season:"winter", vessel:"ice_plate",
    layers:[
      {ing:"scallop", tech:"cure"},
      {ing:"yuzu", tech:"spherify"},
      {ing:"caviar", tech:null},
      {ing:"edible_flower", tech:null},
    ],
    story:"冬季生食带子经短暂盐渍紧实，柚子球化爆珠点亮清酸，鱼子酱叠加海洋鲜，花卉收尾。灵感承 Frantzén 生食美学 + 日式〆。" },
  { name:"秋之林 · 松茸土瓶", season:"autumn", vessel:"ceramic_raw",
    layers:[
      {ing:"matsutake", tech:"char"},
      {ing:"kombu_dashi", tech:"clarify"},
      {ing:"hokkaido_uni", tech:null},
    ],
    story:"炭火轻炙松茸逼出松木香，澄清昆布高汤托底 umami，海胆增绵密。致敬 RyuGin 秋季土瓶蒸。" },
  { name:"法式经典 · 鹅肝大黄", season:"winter", vessel:"porcelain_white",
    layers:[
      {ing:"foie_gras", tech:"torch"},
      {ing:"rhubarb", tech:"ferment"},
      {ing:"buckwheat_crisp", tech:null},
    ],
    story:"喷枪炙鹅肝外焦内融，发酵大黄提供尖酸解腻，荞麦脆补脆度。法餐甜酸平衡的教科书逻辑。" },
];
