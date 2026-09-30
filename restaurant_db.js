/**
 * FINE DINING LAB — 大数据库 (Curated Real-World Database)
 * ============================================================
 * 数据来源:全球顶级 fine dining 餐厅公开菜式 + 经典风味搭配学 + 现代/分子烹饪技法。
 * 所有搭配、技法、名菜均有现实依据。创新在依据之上,不做无据乱搭。
 *
 * 覆盖:Noma/Geranium/Alchemist/Frantzén(北欧) · El Celler de Can Roca/Disfrutar/
 * Mugaritz/elBulli(西班牙前卫) · Arpège/Mirazur/Guy Savoy/Le Bernardin(法) ·
 * Osteria Francescana/Le Calandre(意) · Sushi Saito/Den/Narisawa/RyuGin(日) ·
 * Central/Maido(秘鲁) · The French Laundry/Eleven Madison Park/Atelier Crenn(美) ·
 * Ultraviolet/The Chairman(中)。
 */

/* ============ 1. 食材库 INGREDIENTS ============
   cat: seafood/meat/vegetable/fungi/fruit/acid/dairy/sauce/spice/grain/garnish/texture
   season: spring/summer/autumn/winter/all | tier: common/premium/rare
   texture[] flavor[] | color:3D建模用色 | ref:现实出处 */
export const INGREDIENTS = [
  // —— 海鲜 SEAFOOD ——
  {id:"scallop",name:"带子 Scallop",cat:"seafood",season:"winter",tier:"premium",texture:["柔嫩","丝滑"],flavor:["清甜","奶香","海洋"],color:"#e6d3bd",ref:"The French Laundry 生食薄切；日式昆布〆"},
  {id:"langoustine",name:"挪威海螯虾 Langoustine",cat:"seafood",season:"all",tier:"premium",texture:["柔嫩","弹"],flavor:["鲜甜","碘香"],color:"#e88a7a",ref:"Le Bernardin / Frantzén 生食或极短炙"},
  {id:"uni",name:"北海道海胆 Uni",cat:"seafood",season:"autumn",tier:"rare",texture:["绵密","即化"],flavor:["浓鲜","海洋甜","奶油"],color:"#e8934a",ref:"Sushi Saito 军舰；Den 冷前菜"},
  {id:"oyster",name:"生蚝 Oyster",cat:"seafood",season:"winter",tier:"premium",texture:["滑","juicy"],flavor:["矿物","海洋","金属清冽"],color:"#c8d0c0",ref:"EMP 苹果雪葩配蚝；Noma 佐酸模"},
  {id:"turbot",name:"多宝鱼 Turbot",cat:"seafood",season:"all",tier:"premium",texture:["紧实","丰腴"],flavor:["清雅","坚果尾"],color:"#f0e8dc",ref:"Le Bernardin 招牌黄油慢煎"},
  {id:"king_crab",name:"帝王蟹 King Crab",cat:"seafood",season:"winter",tier:"premium",texture:["纤维","弹"],flavor:["清甜","海洋"],color:"#f0b8a0",ref:"北欧冬季主角"},
  {id:"caviar",name:"鱼子酱 Caviar",cat:"garnish",season:"all",tier:"rare",texture:["爆珠","滑"],flavor:["咸鲜","坚果","海洋"],color:"#1a1618",ref:"全球通用点睛；Petrossian 级"},
  {id:"abalone",name:"鲍鱼 Abalone",cat:"seafood",season:"all",tier:"rare",texture:["弹韧","丰腴"],flavor:["浓鲜","海洋"],color:"#b0a088",ref:"日料/粤菜高端；The Chairman"},
  {id:"amaebi",name:"甜虾 Amaebi",cat:"seafood",season:"winter",tier:"premium",texture:["黏糯","滑"],flavor:["浓甜","海洋"],color:"#f0a898",ref:"江户前寿司生食"},
  {id:"eel_unagi",name:"鳗鱼 Unagi",cat:"seafood",season:"summer",tier:"premium",texture:["肥润","软"],flavor:["脂甜","焦香"],color:"#4a2f1a",ref:"日式蒲烧；Den 演绎"},
  {id:"squid",name:"墨鱼 Squid",cat:"seafood",season:"all",tier:"common",texture:["脆弹","滑"],flavor:["清甜","海洋"],color:"#f2e8e0",ref:"地中海/日式生食切丝"},
  {id:"sea_bream",name:"真鲷 Sea Bream",cat:"seafood",season:"spring",tier:"premium",texture:["紧实","清爽"],flavor:["清雅","淡甜"],color:"#f0dcd0",ref:"日料春季昆布〆"},
  {id:"anchovy",name:"凤尾鱼 Anchovy",cat:"seafood",season:"all",tier:"common",texture:["软","油润"],flavor:["浓咸鲜","发酵"],color:"#8a6a4a",ref:"西班牙/意式咸鲜基底"},

  // —— 肉类/禽/野味 MEAT ——
  {id:"wagyu",name:"A5 和牛 Wagyu",cat:"meat",season:"all",tier:"rare",texture:["即化","油脂丰盈"],flavor:["浓郁","牛油香","鲜"],color:"#a94a4a",ref:"日式炭烤；Ultraviolet 分子演绎"},
  {id:"squab",name:"乳鸽 Squab",cat:"meat",season:"autumn",tier:"premium",texture:["嫩","略韧"],flavor:["野味","铁质","浓香"],color:"#7a3a3a",ref:"Guy Savoy 玫瑰乳鸽"},
  {id:"iberico",name:"伊比利亚黑猪 Ibérico",cat:"meat",season:"all",tier:"premium",texture:["油润","丝滑"],flavor:["坚果","橡果甜","咸鲜"],color:"#a05848",ref:"A Casa do Porco；西班牙火腿"},
  {id:"lamb",name:"羔羊 Lamb",cat:"meat",season:"spring",tier:"premium",texture:["嫩","juicy"],flavor:["草本","脂香","微膻"],color:"#9a4a42",ref:"Mirazur 春季；地中海"},
  {id:"foie_gras",name:"鹅肝 Foie Gras",cat:"meat",season:"winter",tier:"rare",texture:["绵密","即化"],flavor:["浓郁","黄油","矿物"],color:"#d8b878",ref:"法餐殿堂；常配甜酸"},
  {id:"duck",name:"鸭 Duck",cat:"meat",season:"autumn",tier:"premium",texture:["嫩","脂厚"],flavor:["野味","脂香"],color:"#6a3a2a",ref:"法式熟成鸭胸；北京烤鸭改良"},
  {id:"veal_sweetbread",name:"小牛胸腺 Sweetbread",cat:"meat",season:"all",tier:"premium",texture:["外脆内嫩"],flavor:["奶香","矿物"],color:"#d8c0a0",ref:"法餐经典煎黄油"},
  {id:"venison",name:"鹿肉 Venison",cat:"meat",season:"autumn",tier:"premium",texture:["紧实","嫩"],flavor:["浓野味","铁质"],color:"#6a2a2a",ref:"北欧秋冬野味；配浆果"},
  {id:"beef_tartare",name:"生牛肉 Beef Tartare",cat:"meat",season:"all",tier:"premium",texture:["软糯","细"],flavor:["鲜","矿物"],color:"#b04838",ref:"法式经典；现代餐厅演绎"},

  // —— 蔬菜/根茎 VEGETABLE ——
  {id:"white_asparagus",name:"白芦笋 White Asparagus",cat:"vegetable",season:"spring",tier:"premium",texture:["脆嫩","多汁"],flavor:["清甜","微苦","草本"],color:"#f0e8d0",ref:"Arpège 蔬食主义；欧洲春季限定"},
  {id:"heirloom_tomato",name:"传家宝番茄 Heirloom Tomato",cat:"vegetable",season:"summer",tier:"common",texture:["多汁","果肉"],flavor:["酸甜","鲜","日晒香"],color:"#d84838",ref:"Osteria Francescana 夏季"},
  {id:"beetroot",name:"甜菜根 Beetroot",cat:"vegetable",season:"autumn",tier:"common",texture:["脆","粉糯"],flavor:["泥土甜","矿物"],color:"#8a1a3a",ref:"Alchemist；北欧烤盐焗；EMP 名菜"},
  {id:"green_pea",name:"青豌豆 Green Pea",cat:"vegetable",season:"spring",tier:"common",texture:["爆汁","粉"],flavor:["清甜","草本"],color:"#6a9a3a",ref:"春季 amuse;泥/慕斯"},
  {id:"celeriac",name:"根芹 Celeriac",cat:"vegetable",season:"winter",tier:"common",texture:["脆","粉"],flavor:["坚果","清香"],color:"#e0d8c0",ref:"北欧整颗盐焗当主菜"},
  {id:"carrot",name:"胡萝卜 Carrot",cat:"vegetable",season:"all",tier:"common",texture:["脆","粉甜"],flavor:["清甜","泥土"],color:"#e07a20",ref:"Arpège 焦糖胡萝卜；EMP 鞑靼"},
  {id:"corn",name:"玉米 Corn",cat:"vegetable",season:"summer",tier:"common",texture:["爆汁","脆"],flavor:["清甜","奶香"],color:"#f0c840",ref:"秘鲁/美式;Central 高原玉米"},
  {id:"potato",name:"马铃薯 Potato",cat:"vegetable",season:"all",tier:"common",texture:["粉糯","脆(炸)"],flavor:["淀粉甜","泥土"],color:"#e8d8a8",ref:"法式土豆泥;Robuchon 级"},
  {id:"cauliflower",name:"花椰菜 Cauliflower",cat:"vegetable",season:"winter",tier:"common",texture:["脆","软(烤)"],flavor:["坚果","清香"],color:"#f0ece0",ref:"现代整颗炭烤当主角"},
  {id:"cabbage",name:"卷心菜 Cabbage",cat:"vegetable",season:"winter",tier:"common",texture:["脆","软糯"],flavor:["清甜","焦香"],color:"#b8c89a",ref:"北欧炭烤焦叶;Frantzén"},

  // —— 菌菇 FUNGI ——
  {id:"black_truffle",name:"黑松露 Black Truffle",cat:"garnish",season:"winter",tier:"rare",texture:["脆","颗粒"],flavor:["浓菌香","泥土","麝香"],color:"#2a1a12",ref:"冬季白盘点睛;意/法通用"},
  {id:"white_truffle",name:"白松露 White Truffle",cat:"garnish",season:"autumn",tier:"rare",texture:["薄脆"],flavor:["浓烈蒜香","菌","气体感"],color:"#d8c8a0",ref:"阿尔巴白松露;意餐刨片"},
  {id:"matsutake",name:"松茸 Matsutake",cat:"fungi",season:"autumn",tier:"rare",texture:["脆","纤维"],flavor:["松木香","泥土","鲜"],color:"#c8a878",ref:"RyuGin 土瓶蒸;怀石秋主角"},
  {id:"porcini",name:"牛肝菌 Porcini",cat:"fungi",season:"autumn",tier:"premium",texture:["肥厚","滑"],flavor:["坚果","浓菌","泥土"],color:"#8a6038",ref:"意/法秋季;煎或生刨"},
  {id:"morel",name:"羊肚菌 Morel",cat:"fungi",season:"spring",tier:"premium",texture:["海绵","弹"],flavor:["浓菌","烟熏感"],color:"#6a4a2a",ref:"法餐春季;常填酿"},
  {id:"chanterelle",name:"鸡油菌 Chanterelle",cat:"fungi",season:"autumn",tier:"premium",texture:["脆","滑"],flavor:["杏香","胡椒","菌"],color:"#e0a030",ref:"北欧/法秋季森林"},

  // —— 水果/酸源 FRUIT & ACID ——
  {id:"yuzu",name:"柚子 Yuzu",cat:"acid",season:"winter",tier:"premium",texture:["汁"],flavor:["清冽酸","花香","柑橘"],color:"#e8d84a",ref:"日料点睛;现代西餐酸源新宠"},
  {id:"green_apple",name:"青苹果 Green Apple",cat:"acid",season:"autumn",tier:"common",texture:["脆","汁"],flavor:["清爽酸","果香"],color:"#a8d84a",ref:"EMP 生蚝配苹果雪葩"},
  {id:"rhubarb",name:"大黄 Rhubarb",cat:"acid",season:"spring",tier:"common",texture:["纤维","汁"],flavor:["尖锐酸","青草"],color:"#d84868",ref:"北欧春季;发酵/腌渍"},
  {id:"sea_buckthorn",name:"沙棘 Sea Buckthorn",cat:"acid",season:"autumn",tier:"premium",texture:["泥","汁"],flavor:["强酸","热带果","涩"],color:"#f0a020",ref:"Noma 标志北欧酸源"},
  {id:"lime",name:"青柠 Lime",cat:"acid",season:"all",tier:"common",texture:["汁"],flavor:["尖酸","柑橘"],color:"#a8d020",ref:"秘鲁 ceviche;Maido 酸橘汁"},
  {id:"passion_fruit",name:"百香果 Passion Fruit",cat:"fruit",season:"summer",tier:"premium",texture:["爆浆","籽脆"],flavor:["强酸","热带香"],color:"#e0a828",ref:"南美/热带;Central"},
  {id:"strawberry",name:"草莓 Strawberry",cat:"fruit",season:"spring",tier:"common",texture:["多汁","软"],flavor:["酸甜","果香"],color:"#d83048",ref:"Osteria 'Oops' 甜点解构"},
  {id:"cherry",name:"樱桃 Cherry",cat:"fruit",season:"summer",tier:"premium",texture:["多汁","脆"],flavor:["酸甜","浓果"],color:"#8a1a2a",ref:"配野味/鸭;北欧樱桃"},
  {id:"fig",name:"无花果 Fig",cat:"fruit",season:"autumn",tier:"premium",texture:["软糯","籽脆"],flavor:["蜜甜","果香"],color:"#7a3a5a",ref:"地中海;配火腿/鹅肝"},
  {id:"grape",name:"葡萄 Grape",cat:"fruit",season:"autumn",tier:"common",texture:["爆汁","脆"],flavor:["清甜","微酸"],color:"#5a7a3a",ref:"西班牙 gazpacho;El Celler"},

  // —— 乳制品/蛋 DAIRY ——
  {id:"parmesan",name:"帕玛森 Parmigiano",cat:"dairy",season:"all",tier:"premium",texture:["脆","颗粒"],flavor:["浓鲜","坚果","咸"],color:"#e8d8a0",ref:"Osteria '五种熟成帕玛森'"},
  {id:"burrata",name:"布拉塔 Burrata",cat:"dairy",season:"summer",tier:"premium",texture:["流心","奶滑"],flavor:["奶香","清甜"],color:"#f4efe0",ref:"意式;配番茄/桃"},
  {id:"egg_yolk",name:"蛋黄 Egg Yolk",cat:"dairy",season:"all",tier:"common",texture:["流心","绵"],flavor:["浓郁","奶脂"],color:"#e8a020",ref:"63°C 温泉蛋;分子低温"},
  {id:"goat_cheese",name:"山羊奶酪 Goat Cheese",cat:"dairy",season:"all",tier:"common",texture:["绵","碎"],flavor:["酸鲜","草本"],color:"#f0ece2",ref:"法式;配甜菜"},

  // —— 谷物/淀粉 GRAIN ——
  {id:"risotto_rice",name:"意大利米 Risotto Rice",cat:"grain",season:"all",tier:"common",texture:["弹糯","浓稠"],flavor:["淀粉甜","奶香"],color:"#f0ead8",ref:"Le Calandre 藏红花米;Osteria"},
  {id:"buckwheat",name:"荞麦 Buckwheat",cat:"grain",season:"all",tier:"common",texture:["脆","颗粒"],flavor:["坚果","焙香"],color:"#8a6a3a",ref:"北欧脆度层/粥"},
  {id:"koji_rice",name:"米曲 Koji",cat:"grain",season:"all",tier:"premium",texture:["软","糊"],flavor:["甜鲜","发酵"],color:"#e8dcc0",ref:"日式发酵;Noma 发酵实验室"},

  // —— 香料/香草 SPICE & HERB ——
  {id:"saffron",name:"藏红花 Saffron",cat:"spice",season:"all",tier:"rare",texture:["丝"],flavor:["蜜香","泥土","苦韵"],color:"#e07018",ref:"西班牙/意式;米饭点睛"},
  {id:"vanilla",name:"香草 Vanilla",cat:"spice",season:"all",tier:"premium",texture:["籽"],flavor:["甜香","奶油"],color:"#3a2a1a",ref:"甜品/白酱;也入咸鲜创新"},
  {id:"dill",name:"莳萝 Dill",cat:"garnish",season:"spring",tier:"common",texture:["羽叶"],flavor:["清香","茴香"],color:"#5a8a3a",ref:"北欧腌鱼标配"},
  {id:"basil",name:"罗勒 Basil",cat:"garnish",season:"summer",tier:"common",texture:["柔叶"],flavor:["清香","茴香甜"],color:"#3a7a2a",ref:"意式;配番茄/burrata"},

  // —— 酱汁/基底 SAUCE ——
  {id:"kombu_dashi",name:"昆布高汤 Kombu Dashi",cat:"sauce",season:"all",tier:"common",texture:["清澈液"],flavor:["鲜(umami)","海洋","干净"],color:"#8a8a5a",ref:"日料鲜味基底;现代西餐借用"},
  {id:"brown_butter",name:"焦化黄油 Brown Butter",cat:"sauce",season:"all",tier:"common",texture:["油润"],flavor:["坚果","焦香","奶香"],color:"#c89858",ref:"法餐万能基底"},
  {id:"beurre_blanc",name:"白黄油酱 Beurre Blanc",cat:"sauce",season:"all",tier:"common",texture:["乳化丝滑"],flavor:["奶香","酸","丰腴"],color:"#f0e8d8",ref:"法餐经典配鱼"},
  {id:"jus",name:"浓缩肉汁 Jus",cat:"sauce",season:"all",tier:"premium",texture:["浓稠亮"],flavor:["浓肉鲜","焦糖"],color:"#3a2012",ref:"法餐红肉收尾"},
  {id:"salsa_verde",name:"青酱 Salsa Verde",cat:"sauce",season:"summer",tier:"common",texture:["粗粒"],flavor:["香草","酸","清爽"],color:"#4a7a2a",ref:"意/南美;配烤肉海鲜"},
  {id:"ponzu",name:"橙醋 Ponzu",cat:"sauce",season:"all",tier:"common",texture:["清液"],flavor:["酸鲜","柑橘"],color:"#6a4a1a",ref:"日式;生食蘸汁"},
  {id:"mole",name:"墨西哥 Mole",cat:"sauce",season:"all",tier:"premium",texture:["浓稠"],flavor:["巧克力","辣","复杂香料"],color:"#3a1a10",ref:"墨西哥;Pujol 千日 mole"},
  {id:"tigers_milk",name:"虎奶 Leche de Tigre",cat:"sauce",season:"summer",tier:"premium",texture:["清液"],flavor:["强酸","辣","海鲜鲜"],color:"#f0ead0",ref:"秘鲁 ceviche 灵魂;Central/Maido"},

  // —— 质地/点缀 TEXTURE & GARNISH ——
  {id:"buckwheat_crisp",name:"荞麦脆片 Buckwheat Crisp",cat:"texture",season:"all",tier:"common",texture:["脆","碎"],flavor:["坚果","焙香"],color:"#7c5320",ref:"北欧脆度层"},
  {id:"tuile",name:"薄脆瓦片 Tuile",cat:"texture",season:"all",tier:"common",texture:["极脆","薄"],flavor:["焙香","微甜"],color:"#d8a860",ref:"法式装饰脆片"},
  {id:"edible_flower",name:"可食用花 Edible Flowers",cat:"garnish",season:"spring",tier:"premium",texture:["轻脆","柔"],flavor:["清香","微苦","花蜜"],color:"#d85a92",ref:"Mirazur/Noma 摆盘点睛"},
  {id:"nasturtium",name:"旱金莲叶 Nasturtium",cat:"garnish",season:"summer",tier:"premium",texture:["柔","脆"],flavor:["辛辣","胡椒","青草"],color:"#3a7a2a",ref:"现代香辛叶片"},
  {id:"micro_herb",name:"微型香草 Micro Herbs",cat:"garnish",season:"all",tier:"common",texture:["嫩芽"],flavor:["浓缩清香"],color:"#4a8a3a",ref:"现代摆盘通用"},
  {id:"gold_leaf",name:"金箔 Gold Leaf",cat:"garnish",season:"all",tier:"rare",texture:["极薄"],flavor:["无味(视觉)"],color:"#f0c840",ref:"奢华点睛;和牛/甜品"},
  {id:"nori_powder",name:"海苔粉 Nori Powder",cat:"texture",season:"all",tier:"common",texture:["粉","脆"],flavor:["海洋鲜","矿物"],color:"#1a2a1a",ref:"日式增鲜撒粉"},
  {id:"charcoal_oil",name:"炭烧油 Charcoal Oil",cat:"garnish",season:"all",tier:"premium",texture:["油滴"],flavor:["烟熏","焦香"],color:"#1a1a1a",ref:"现代烟熏点缀"},
];

/* ============ 2. 技法库 TECHNIQUES ============ */
export const TECHNIQUES = [
  {id:"sous_vide",name:"低温慢煮 Sous-vide",intensity:"gentle",effect:"极致嫩度、精准熟度",good_for:["meat","seafood","vegetable"],ref:"现代西厨标配"},
  {id:"smoke",name:"冷/热烟熏 Smoking",intensity:"aromatic",effect:"木质烟香、复杂层次",good_for:["meat","seafood","vegetable"],ref:"北欧/美式现代"},
  {id:"ferment",name:"发酵 Fermentation",intensity:"transform",effect:"增鲜、酸度、深度",good_for:["vegetable","acid","grain","sauce"],ref:"Noma 发酵实验室核心"},
  {id:"cure",name:"腌渍/盐渍 Curing",intensity:"gentle",effect:"紧实质地、浓缩风味",good_for:["seafood","meat"],ref:"北欧/日式〆"},
  {id:"spherify",name:"球化 Spherification",intensity:"molecular",effect:"爆珠、液体封装",good_for:["acid","sauce","fruit","garnish"],ref:"elBulli 发明遗产"},
  {id:"foam",name:"泡沫/慕斯 Espuma",intensity:"molecular",effect:"轻盈空气感风味",good_for:["sauce","vegetable","dairy","fruit"],ref:"elBulli;现代通用"},
  {id:"clarify",name:"澄清 Clarification",intensity:"molecular",effect:"清澈却浓郁的液体",good_for:["sauce"],ref:"现代高汤/鸡尾酒"},
  {id:"torch",name:"喷枪炙烤 Torch/Aburi",intensity:"aromatic",effect:"表面焦香、内部生嫩",good_for:["seafood","meat"],ref:"日式炙寿司"},
  {id:"char",name:"炭火直烤 Charcoal Grill",intensity:"intense",effect:"烟火气、美拉德焦香",good_for:["meat","seafood","vegetable","fungi"],ref:"Etxebarri/日式炭烤"},
  {id:"dehydrate",name:"脱水制脆 Dehydration",intensity:"transform",effect:"浓缩风味、脆质地",good_for:["vegetable","fruit","texture","garnish"],ref:"现代脆片/粉末"},
  {id:"confit",name:"油封 Confit",intensity:"gentle",effect:"柔嫩浸润、浓香",good_for:["meat","vegetable"],ref:"法餐鸭腿油封经典"},
  {id:"pickle",name:"快速腌渍 Pickling",intensity:"gentle",effect:"酸爽脆、平衡油腻",good_for:["vegetable","fruit"],ref:"北欧/现代解腻"},
  {id:"caramelize",name:"焦糖化 Caramelize",intensity:"aromatic",effect:"甜焦香、深色泽",good_for:["vegetable","fruit","dairy"],ref:"Arpège 焦糖胡萝卜"},
  {id:"emulsify",name:"乳化 Emulsion",intensity:"gentle",effect:"顺滑酱体、油水交融",good_for:["sauce","dairy"],ref:"法餐酱汁基础"},
  {id:"freeze_dry",name:"冷冻干燥 Freeze-dry",intensity:"molecular",effect:"保色保形的酥脆粉末",good_for:["fruit","vegetable","garnish"],ref:"现代/分子"},
  {id:"nitro",name:"液氮急冻 Liquid Nitrogen",intensity:"molecular",effect:"瞬间冷冻、烟雾戏剧",good_for:["dairy","fruit","sauce"],ref:"elBulli/Ultraviolet 表演"},
  {id:"ash",name:"灰烬/炭化 Ashing",intensity:"intense",effect:"焦黑外壳、烟苦香",good_for:["vegetable"],ref:"Alchemist/北欧韭葱灰"},
  {id:"cure_gravlax",name:"渍腌三文鱼式 Gravlax",intensity:"gentle",effect:"盐糖香草渍,半生质地",good_for:["seafood"],ref:"北欧经典腌鱼"},
  {id:"tempura",name:"天妇罗 Tempura",intensity:"aromatic",effect:"极薄脆壳、锁鲜",good_for:["seafood","vegetable"],ref:"日式;现代西餐借用"},
  {id:"glaze",name:"上釉/淋汁 Glazing",intensity:"gentle",effect:"光亮外层、浓味附着",good_for:["meat","vegetable"],ref:"法餐淋 jus/焦糖"},
];

/* ============ 3. 器皿库 VESSELS(多种,非仅盘碟) ============ */
export const VESSELS = [
  {id:"slate",name:"黑石板 Slate",material:"石",mood:"极简暗调",ref:"北欧/现代暗色衬底",plate3d:{shape:"flat",color:"#1a1a1e",rough:0.9}},
  {id:"raw_ceramic",name:"手作粗陶 Raw Ceramic",material:"陶",mood:"自然质朴",ref:"Noma/Frantzén 匠人器皿",plate3d:{shape:"bowl",color:"#2a2622",rough:0.7}},
  {id:"white_porcelain",name:"极简白瓷 White Porcelain",material:"瓷",mood:"纯净留白",ref:"法餐经典留白",plate3d:{shape:"flat",color:"#e8e4dc",rough:0.3}},
  {id:"black_glaze",name:"黑釉深盘 Black Glaze",material:"瓷",mood:"戏剧暗黑",ref:"现代暗调摆盘",plate3d:{shape:"deep",color:"#0e0d10",rough:0.25}},
  {id:"glass_cloche",name:"玻璃烟熏罩 Glass Cloche",material:"玻璃",mood:"戏剧揭盖",ref:"烟熏上桌仪式",plate3d:{shape:"dome",color:"#cfe0e8",rough:0.05}},
  {id:"stone_vessel",name:"天然石凹器 Stone Vessel",material:"石",mood:"原始有机",ref:"Central 高山主题",plate3d:{shape:"organic",color:"#5a564e",rough:0.95}},
  {id:"mirror_tray",name:"镜面托盘 Mirror Tray",material:"金属",mood:"倒影华丽",ref:"分子料理展示",plate3d:{shape:"flat",color:"#c8ccce",rough:0.02,metal:1}},
  {id:"ice_plate",name:"冰盘 Ice Plate",material:"冰",mood:"冷冽通透",ref:"生食海鲜冷盘",plate3d:{shape:"flat",color:"#dceef4",rough:0.1}},
  {id:"wood_board",name:"原木板 Wood Board",material:"木",mood:"温润乡野",ref:"火腿/面包/野味",plate3d:{shape:"flat",color:"#6a4a2a",rough:0.8}},
  {id:"volcanic_rock",name:"火山岩 Volcanic Rock",material:"石",mood:"粗犷炽热",ref:"炭烤上桌;Central 安第斯",plate3d:{shape:"organic",color:"#2a2626",rough:1.0}},
  {id:"copper_pot",name:"迷你铜锅 Copper Pot",material:"金属",mood:"复古暖光",ref:"法式小份炖物",plate3d:{shape:"bowl",color:"#b87333",rough:0.3,metal:1}},
  {id:"seashell",name:"贝壳器 Seashell",material:"自然",mood:"海洋叙事",ref:"生蚝/海胆盛器",plate3d:{shape:"organic",color:"#e8dcc8",rough:0.4}},
  {id:"lacquer_bowl",name:"漆器碗 Lacquer Bowl",material:"漆",mood:"东方沉静",ref:"怀石汤物;RyuGin",plate3d:{shape:"bowl",color:"#3a0a0a",rough:0.1}},
  {id:"clay_pot",name:"陶土瓶 Clay Pot",material:"陶",mood:"质朴土瓶",ref:"松茸土瓶蒸",plate3d:{shape:"deep",color:"#7a5a3a",rough:0.85}},
  {id:"black_stone_slab",name:"黑曜石板 Obsidian Slab",material:"石",mood:"深邃奢华",ref:"和牛/生食呈现",plate3d:{shape:"flat",color:"#0a0a0c",rough:0.15}},
  {id:"nest_vessel",name:"鸟巢器 Nest",material:"自然",mood:"森林叙事",ref:"北欧森林主题;Noma",plate3d:{shape:"organic",color:"#5a4a2a",rough:0.9}},
  {id:"smoke_box",name:"烟熏木盒 Smoke Box",material:"木",mood:"揭盖烟雾",ref:"烟熏戏剧上桌",plate3d:{shape:"box",color:"#4a3a2a",rough:0.75}},
  {id:"paper_edible",name:"可食纸托 Edible Paper",material:"可食",mood:"极简先锋",ref:"Mugaritz 可食器皿",plate3d:{shape:"flat",color:"#e0d8c4",rough:0.6}},
];

/* ============ 4. 经典搭配 PAIRINGS(有据强搭配,加分)============ */
export const PAIRINGS = [
  ["scallop","yuzu","带子清甜×柚子清酸,日料/现代西餐经典提亮"],
  ["oyster","green_apple","EMP 名菜:生蚝矿物味配青苹果雪葩解腻"],
  ["langoustine","brown_butter","海螯虾鲜甜×焦化黄油坚果香,法餐经典"],
  ["wagyu","black_truffle","和牛油脂×黑松露菌香,奢华叠加公认经典"],
  ["foie_gras","rhubarb","鹅肝浓腻×大黄尖酸,甜酸解腻法餐逻辑"],
  ["turbot","beurre_blanc","多宝鱼丰腴×白黄油乳化,Le Bernardin 式"],
  ["scallop","caviar","带子×鱼子酱,双重海洋鲜高级叠加"],
  ["uni","kombu_dashi","海胆浓鲜×昆布高汤,日式 umami 协同"],
  ["heirloom_tomato","burrata","番茄×布拉塔,意式夏日黄金组合"],
  ["heirloom_tomato","basil","番茄×罗勒,地中海经典三位一体"],
  ["beetroot","goat_cheese","甜菜土壤甜×山羊奶酪酸鲜,法式经典"],
  ["beetroot","black_truffle","甜菜土壤甜×松露泥土香,同调呼应"],
  ["matsutake","kombu_dashi","松茸松木香×昆布高汤,土瓶蒸经典"],
  ["lamb","edible_flower","春羔羊草本×春花,Mirazur 季节呼应"],
  ["squab","cherry","乳鸽野味×樱桃酸甜,法餐野味配核果"],
  ["king_crab","yuzu","帝王蟹清甜×柚子酸,冬季海鲜提亮"],
  ["iberico","fig","伊比利亚脂香×无花果蜜甜,西班牙经典"],
  ["uni","caviar","海胆×鱼子酱,海洋鲜极致叠加"],
  ["white_asparagus","brown_butter","白芦笋×焦化黄油,欧洲春季黄金"],
  ["green_pea","micro_herb","青豌豆清甜×微香草,春季 amuse"],
  ["duck","fig","鸭脂香×无花果蜜甜,法式秋季"],
  ["duck","cherry","鸭×樱桃,野味配酸甜核果经典"],
  ["risotto_rice","saffron","米×藏红花,米兰烩饭;Le Calandre"],
  ["risotto_rice","parmesan","烩饭×帕玛森,意式浓鲜奶香"],
  ["sea_bream","yuzu","真鲷清雅×柚子,日式春季昆布〆"],
  ["amaebi","caviar","甜虾浓甜×鱼子酱,寿司高级叠加"],
  ["squid","salsa_verde","墨鱼清甜×青酱,地中海清爽"],
  ["corn","tigers_milk","玉米清甜×虎奶酸辣,秘鲁风"],
  ["potato","caviar","土豆泥×鱼子酱,朴素×奢华经典对比"],
  ["cauliflower","brown_butter","花椰菜坚果味×焦化黄油,同调加深"],
  ["scallop","charcoal_oil","带子×炭烧油,烟熏点缀提升复杂度"],
  ["venison","cherry","鹿肉浓野味×樱桃,北欧秋冬配浆果"],
  ["egg_yolk","black_truffle","溏心蛋黄×黑松露,浓郁奢华早午餐式"],
  ["foie_gras","fig","鹅肝×无花果,浓脂配蜜甜经典"],
  ["oyster","kombu_dashi","生蚝×昆布高汤,海洋鲜叠加干净收尾"],
  ["morel","brown_butter","羊肚菌×焦化黄油,法餐春季经典"],
  ["porcini","parmesan","牛肝菌浓菌×帕玛森,意式秋季"],
  ["strawberry","basil","草莓×罗勒,甜品解构的清香反差"],
  ["abalone","kombu_dashi","鲍鱼浓鲜×昆布高汤,东方 umami"],
  ["beef_tartare","egg_yolk","生牛肉×蛋黄,法式鞑靼经典"],
  ["lamb","salsa_verde","羔羊×青酱,地中海去膻提鲜"],
  ["passion_fruit","chanterelle","百香果酸×鸡油菌杏香,南美创新"],
];

/* ============ 5. 搭配禁忌 TABOOS(乱搭/科学禁忌,扣分)============ */
export const TABOOS = [
  {pair:["oyster","brown_butter"],level:"warn",why:"生蚝清冽矿物味被焦化黄油厚重坚果味压盖,浪费蚝的细腻"},
  {pair:["caviar","sea_buckthorn"],level:"warn",why:"鱼子酱娇贵咸鲜×沙棘强酸涩,酸度会毁掉鱼子酱层次"},
  {pair:["black_truffle","yuzu"],level:"warn",why:"黑松露幽微菌香极易被柚子高亢花酸盖掉,松露白搭"},
  {pair:["wagyu","sea_buckthorn"],level:"warn",why:"和牛细腻油脂遇沙棘尖锐强酸,风味打架而非平衡"},
  {pair:["foie_gras","kombu_dashi"],level:"warn",why:"鹅肝西式浓脂与昆布日式清鲜体系冲突,缺桥接显突兀"},
  {pair:["uni","brown_butter"],level:"avoid",why:"海胆入口即化的绵密海洋甜被焦化黄油完全掩盖,浪费顶级食材"},
  {pair:["matsutake","caviar"],level:"warn",why:"松茸幽香与鱼子酱咸鲜互不相衬,两种主角互相干扰"},
  {pair:["vanilla","anchovy"],level:"avoid",why:"香草甜香×凤尾鱼浓咸鲜,甜咸体系剧烈冲突"},
  {pair:["white_truffle","charcoal_oil"],level:"avoid",why:"白松露挥发性蒜香会被炭烧烟味彻底吞没"},
  {pair:["burrata","jus"],level:"warn",why:"清新奶香布拉塔配浓重红肉汁,清浊失衡"},
  {pair:["mole","caviar"],level:"warn",why:"复杂厚重 mole 会淹没鱼子酱的精细,主次错乱"},
  {pair:["ice_vessel_note","hot_note"],level:"warn",why:"冰盘上放热菜会迅速化水毁摆盘——冷器配冷食"},
  {pair:["saffron","black_truffle"],level:"warn",why:"藏红花蜜香与松露麝香两种昂贵主香互抢,难调和"},
  {pair:["strawberry","anchovy"],level:"avoid",why:"草莓果甜×凤尾鱼咸腥,无桥接的生硬冲突"},
  {pair:["passion_fruit","wagyu"],level:"warn",why:"百香果强酸热带香会切碎和牛细腻脂香"},
  {pair:["vanilla","black_truffle"],level:"warn",why:"香草与松露两种浓郁香气叠加过载,彼此模糊"},
  // 规则类
  {pair:["__rule_delicate_seafood","__rule_heavy_smoke"],level:"warn",why:"娇嫩生食海鲜(海胆/带子/生蚝/甜虾)遇重烟熏,烟味盖过海洋细腻"},
];

/* ============ 6. 真实名菜库 SIGNATURE_DISHES(供匹配 + 讲故事)============
   key_ingredients/techniques/vessel 引用上方 id。story 为真实菜品的故事/灵感(基于公开报道)。 */
export const SIGNATURE_DISHES = [
  {id:"noma_ants",name:"活蚂蚁与牛肉鞑靼",restaurant:"Noma",chef:"René Redzepi",city:"哥本哈根",cuisine:"北欧新派",
   key_ingredients:["beef_tartare","micro_herb"],techniques:["cure"],vessel:"slate",
   story:"Redzepi 用当地采集的活蚂蚁点缀生牛肉,蚂蚁体内的蚁酸提供天然柠檬般的酸香——'风土'哲学的极致:不用进口柑橘,用森林本身的味道。",image_hint:"暗石板上生牛肉,活蚂蚁与嫩芽"},
  {id:"noma_veg_flower",name:"植物王国·可食之花",restaurant:"Noma",chef:"René Redzepi",city:"哥本哈根",cuisine:"北欧新派",
   key_ingredients:["edible_flower","micro_herb","koji_rice"],techniques:["ferment"],vessel:"raw_ceramic",
   story:"Noma 蔬食季的招牌:蜂花粉做金色触角,各色花瓣作翅,发酵浆果醋膏黏合——把一朵'花'做成可食艺术品,颠覆'蔬食朴素'的成见。",image_hint:"粗陶上花瓣拼成的蝴蝶/花"},
  {id:"emp_beet",name:"甜菜根鞑靼(变装)",restaurant:"Eleven Madison Park",chef:"Daniel Humm",city:"纽约",cuisine:"美式现代",
   key_ingredients:["beetroot","goat_cheese"],techniques:["cure","dehydrate"],vessel:"white_porcelain",
   story:"EMP 名菜:整颗甜菜在盐壳与老式绞肉机前桌处理,呈现得像一份生牛肉鞑靼,却全素——一场关于'期待与真实'的餐桌魔术。",image_hint:"白瓷上鲜红甜菜碎似鞑靼"},
  {id:"emp_oyster_apple",name:"生蚝与青苹果",restaurant:"Eleven Madison Park",chef:"Daniel Humm",city:"纽约",cuisine:"美式现代",
   key_ingredients:["oyster","green_apple"],techniques:["spherify"],vessel:"ice_plate",
   story:"生蚝的矿物海洋味遇上青苹果雪葩的清冽酸甜,冰盘冷冽收束——极简三元素,却是解腻与提鲜的教科书。",image_hint:"冰盘上生蚝配绿色苹果雪葩"},
  {id:"celler_bombon",name:"焦糖橄榄糖球",restaurant:"El Celler de Can Roca",chef:"Joan Roca",city:"赫罗纳",cuisine:"西班牙前卫",
   key_ingredients:["edible_flower"],techniques:["spherify"],vessel:"mirror_tray",
   story:"Roca 兄弟把整颗橄榄的味道封进液态球化的糖球,悬于小盆景枝头——一口咬破,童年橄榄的记忆瞬间迸发,elBulli 球化技法的诗意延续。",image_hint:"镜面/枝头悬挂的橄榄液态糖球"},
  {id:"disfrutar_macaroni",name:"帕玛森通心粉(空心球化)",restaurant:"Disfrutar",chef:"Oriol Castro 等",city:"巴塞罗那",cuisine:"西班牙前卫",
   key_ingredients:["parmesan"],techniques:["spherify","foam"],vessel:"black_glaze",
   story:"世界第一的 Disfrutar 招牌:用球化技法做出'空心通心粉',内里是纯帕玛森奶油——形似 pasta,却全无面粉,是 elBulli 血脉的技术炫技。",image_hint:"黑盘上透明空心通心粉状球体"},
  {id:"arpege_carrot",name:"焦糖胡萝卜",restaurant:"Arpège",chef:"Alain Passard",city:"巴黎",cuisine:"法餐现代",
   key_ingredients:["carrot"],techniques:["caramelize","glaze"],vessel:"copper_pot",
   story:"Passard 在三星餐厅把蔬菜捧上主角:一根来自自家菜园的胡萝卜,慢火焦糖化到极致,证明最朴素的根菜也能有'肉'的深度。",image_hint:"铜锅中油亮焦糖胡萝卜"},
  {id:"lebernardin_turbot",name:"多宝鱼配白黄油",restaurant:"Le Bernardin",chef:"Éric Ripert",city:"纽约",cuisine:"法餐现代",
   key_ingredients:["turbot","beurre_blanc"],techniques:["sous_vide"],vessel:"white_porcelain",
   story:"Ripert 的海鲜殿堂信条:'鱼是主角'。多宝鱼精准低温煎至丰腴,白黄油酱以酸提亮,极简却是对食材本味的至高敬意。",image_hint:"白瓷上丰腴白鱼淋亮酱"},
  {id:"ryugin_matsutake",name:"松茸土瓶蒸",restaurant:"RyuGin",chef:"Seiji Yamamoto",city:"东京",cuisine:"日本料理",
   key_ingredients:["matsutake","kombu_dashi"],techniques:["clarify","char"],vessel:"clay_pot",
   story:"山本征治以科学精度重构怀石:炭火轻炙松茸逼出松木香,澄清昆布高汤托底 umami,揭开土瓶盖那一刻,整个秋天的森林扑面而来。",image_hint:"陶土瓶中松茸清汤,揭盖蒸汽"},
  {id:"saito_uni",name:"海胆军舰",restaurant:"Sushi Saito",chef:"Takashi Saito",city:"东京",cuisine:"江户前寿司",
   key_ingredients:["uni","caviar"],techniques:["cure"],vessel:"lacquer_bowl",
   story:"三星寿司之神斋藤孝司:北海道海胆的绵密海洋甜,叠上一点鱼子酱,醋饭温度与握力毫厘不差——极简里的极致,一贯定生死。",image_hint:"漆器上海胆军舰配鱼子酱"},
  {id:"den_salad",name:"Dentucky 炸鸡与花园沙拉",restaurant:"Den",chef:"Zaiyu Hasegawa",city:"东京",cuisine:"日本创意",
   key_ingredients:["micro_herb","edible_flower","carrot"],techniques:["tempura"],vessel:"wood_board",
   story:"长谷川在里以幽默解构高级料理:20+ 种时蔬做成一座'可食花园',配一只戏仿快餐盒的招牌炸鸡——顶级料理也可以让人会心一笑。",image_hint:"木板上繁盛的迷你花园沙拉"},
  {id:"central_altitude",name:"海拔之食(安第斯高原)",restaurant:"Central",chef:"Virgilio Martínez",city:"利马",cuisine:"秘鲁现代",
   key_ingredients:["corn","potato","tigers_milk"],techniques:["ferment","dehydrate"],vessel:"stone_vessel",
   story:"Martínez 按'海拔'编排菜单:一道菜只用某一高度带的原生食材(高原玉米、上百种土豆),把秘鲁的垂直生态搬上石器餐盘——吃的是一片土地的经纬。",image_hint:"天然石凹器上高原玉米土豆"},
  {id:"maido_ceviche",name:"日秘 Nikkei 酸橘汁腌鱼",restaurant:"Maido",chef:"Mitsuharu Tsumura",city:"利马",cuisine:"日秘融合",
   key_ingredients:["sea_bream","tigers_milk","lime"],techniques:["cure_gravlax"],vessel:"seashell",
   story:"Tsumura 融合日本刀工与秘鲁 ceviche:鲜鱼以虎奶(青柠辣椒海鲜汁)瞬渍,盛于贝壳——两种海洋文明在一勺酸辣里相遇。",image_hint:"贝壳器中生鱼片浸乳白虎奶"},
  {id:"osteria_parmesan",name:"帕玛森的五种熟成五种质地",restaurant:"Osteria Francescana",chef:"Massimo Bottura",city:"摩德纳",cuisine:"意餐现代",
   key_ingredients:["parmesan"],techniques:["foam","dehydrate"],vessel:"white_porcelain",
   story:"Bottura 用一种奶酪讲一个时间的故事:同款帕玛森的 24/30/36/40/50 月熟成,分别做成泡沫、脆片、空气、酱、雪——一口尝尽岁月。",image_hint:"白瓷上五种形态的帕玛森"},
  {id:"osteria_oops",name:"'哎呀我打翻了柠檬挞'",restaurant:"Osteria Francescana",chef:"Massimo Bottura",city:"摩德纳",cuisine:"意餐现代",
   key_ingredients:["strawberry","vanilla"],techniques:["freeze_dry"],vessel:"black_glaze",
   story:"源于副厨真的失手打碎了甜点,Bottura 却将'破碎'定格成菜:柠檬挞碎裂散落如意外之美——不完美里藏着最动人的故事。",image_hint:"黑盘上'打翻'散落的甜点碎"},
  {id:"crenn_seafood",name:"海洋的诗(Le Jardin/海鲜拼贴)",restaurant:"Atelier Crenn",chef:"Dominique Crenn",city:"旧金山",cuisine:"法式艺术",
   key_ingredients:["scallop","caviar","edible_flower"],techniques:["cure","spherify"],vessel:"black_stone_slab",
   story:"Crenn 以诗代替菜单,每道菜是一行诗句:带子、鱼子酱与花瓣在黑石上如海浪拼贴,把一片海岸的记忆写成可食的诗。",image_hint:"黑石板上海鲜与花的海浪拼贴"},
  {id:"tfl_oysters_pearls",name:"生蚝与珍珠(Oysters and Pearls)",restaurant:"The French Laundry",chef:"Thomas Keller",city:"扬特维尔",cuisine:"美式法餐",
   key_ingredients:["oyster","caviar","potato"],techniques:["emulsify"],vessel:"white_porcelain",
   story:"Keller 的传奇招牌:珍珠般的珍珠麦布丁(tapioca)、生蚝、一撮鱼子酱——奢华与朴素在一勺里达成完美平衡,几十年不下菜单。",image_hint:"白瓷小盅珍珠麦布丁配蚝与鱼子酱"},
  {id:"mirazur_garden",name:"花园的礼物(Mirazur 春季)",restaurant:"Mirazur",chef:"Mauro Colagreco",city:"芒通",cuisine:"地中海现代",
   key_ingredients:["lamb","edible_flower","micro_herb"],techniques:["char","glaze"],vessel:"stone_vessel",
   story:"Colagreco 按月亮历种植与烹饪,菜单随花园与潮汐变化:春季羔羊配自家花园此刻正开的花——盘中是这一天、这片山海的当下切片。",image_hint:"石器上羔羊配缤纷春花"},
  {id:"uv_wagyu",name:"和牛的多重感官(Ultraviolet)",restaurant:"Ultraviolet",chef:"Paul Pairet",city:"上海",cuisine:"中式先锋",
   key_ingredients:["wagyu","black_truffle","gold_leaf"],techniques:["char","nitro"],vessel:"black_stone_slab",
   story:"Pairet 的沉浸式剧场餐厅:一块和牛上桌时,灯光、气味、音乐同步切换成对应的场景——不只吃味道,而是吃一整套被编导的感官体验。",image_hint:"黑石板上炙和牛配松露金箔,戏剧灯光"},
  {id:"chairman_crab",name:"花雕蒸血蚶/招牌蒸蟹",restaurant:"The Chairman",chef:"Kwok Keung Tung",city:"香港",cuisine:"粤菜现代",
   key_ingredients:["king_crab","abalone"],techniques:["glaze"],vessel:"lacquer_bowl",
   story:"亚洲第一的 The Chairman 坚持本地渔获与自酿酱料:陈年花雕与鸡油慢蒸海鲜,把粤菜'镬气'与时令海鲜的鲜甜发挥到极致。",image_hint:"漆碗中花雕蒸蟹/海鲜"},
  {id:"frantzen_scallop",name:"炭烤带子与冬味",restaurant:"Frantzén",chef:"Björn Frantzén",city:"斯德哥尔摩",cuisine:"北欧法式",
   key_ingredients:["scallop","brown_butter","charcoal_oil"],techniques:["char","torch"],vessel:"raw_ceramic",
   story:"Frantzén 融合北欧食材与日式精度:炭火炙带子,焦化黄油与一滴炭烧油勾出烟火气,盛于匠人手作陶器——冬日海洋的浓缩。",image_hint:"粗陶上炭烤带子淋亮油"},
  {id:"alchemist_beet",name:"记忆·甜菜与血(Alchemist)",restaurant:"Alchemist",chef:"Rasmus Munk",city:"哥本哈根",cuisine:"整体烹饪",
   key_ingredients:["beetroot"],techniques:["ash","ferment"],vessel:"stone_vessel",
   story:"Munk 的'整体烹饪'常借菜发声:一道以甜菜拟血、探讨器官捐献或食物伦理的作品,在穹顶剧场下,一道菜就是一场关于社会议题的沉浸对话。",image_hint:"石器上血红甜菜,戏剧氛围"},
];

/* ============ 7. 季节/天气 灵感线索 CONTEXT ============ */
export const CONTEXT = {
  seasons:{
    spring:{mood:"清新回暖",palette:["嫩绿","粉白"],hero:["white_asparagus","lamb","green_pea","rhubarb","morel","strawberry","sea_bream"]},
    summer:{mood:"明亮丰盈",palette:["番茄红","阳光黄"],hero:["heirloom_tomato","burrata","basil","corn","passion_fruit","eel_unagi","squid"]},
    autumn:{mood:"沉稳丰收",palette:["琥珀","栗棕"],hero:["matsutake","uni","beetroot","sea_buckthorn","green_apple","porcini","chanterelle","duck","venison","fig","white_truffle"]},
    winter:{mood:"内敛醇厚",palette:["雪白","深灰","金"],hero:["scallop","oyster","black_truffle","king_crab","foie_gras","yuzu","celeriac","cauliflower"]},
  },
  weather:{
    sunny:"明亮天气 → 提亮酸度、清爽脆度、鲜艳花卉(柚子/青柠/花)",
    rainy:"阴雨 → 温暖高汤、烟熏、发酵深度、慰藉感(昆布高汤/烟熏)",
    snowy:"雪天 → 醇厚油脂(鹅肝/和牛)、暖汤、根菜甜",
    foggy:"雾天 → 澄清汤、幽微菌香、朦胧摆盘(松茸/澄清)",
  },
};
