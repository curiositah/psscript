// ==UserScript==
// @name         Showdown Translation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  test script
// @author       ceca3
// @match        http://china.psim.us/*
// @match        http://47.94.147.145.psim.us/*
// @grant        none
// @require      https://code.jQuery.com/jquery-2.1.4.min.js
// @run-at       document-end
// ==/UserScript==
var translations={
    "[Gen 7] Random Battle":"[第七世代] 随机对战",
    "Add game":"寻找新对战",
    "Format:":"分级",
    "Team:":"队伍",
    "Battle!":"战斗！",
    "Find a random opponent":"寻找一位随机对手",
    "Teambuilder":"队伍编辑器",
    "Ladder":"排行榜",
    "Watch a battle":"观看对战",
    "Find a user":"查找用户",
    "Choice Scarf":"专爱围巾",
    "Did you have a good day?":"你今天过的还好吗?",
    "Lucario":"路卡利欧",
    "Lucarionite":"M路卡利欧石",
    "Adaptability":"适应力",
    "[Gen 7] OU battle started between":"[第七世代] OU比赛开始：",
    "and":" 和",
    "used":" 使用了",
    "The opposing":"对手的",
    "restored a little HP using its Leftovers!":"通过剩饭恢复了一点HP！",
    "forfeited":"认输了",
    "fainted!":"倒下了！",
    "Random team":"随机队伍",
    
    //Abilities Translation
    
    "Stench":"恶臭",
    "Drizzle":"降雨",
    "Speed Boost":"加速",
    "Battle Armor":"战斗盔甲",
    "Sturdy":"坚硬",
    "Damp":"潮湿",
    "Limber":"柔软",
    "Sand Veil":"沙隐",
    "Static":"静电",
    "Volt Absorb":"蓄电",
    "Water Absorb":"贮水",
    "Oblivious":"钝感",
    "Cloud Nine":"无天气",
    "Compound Eyes":"复眼",
    "Insomnia":"不眠",
    "Color Change":"变色",
    "Immunity":"免疫",
    "Flash Fire":"引火",
    "Shield Dust":"鳞粉",
    "Own Tempo":"自我中心",
    "Suction Cups":"吸盘",
    "Intimidate":"威吓",
    "Shadow Tag":"踩影",
    "Rough Skin":"鲨鱼皮",
    "Wonder Guard":"奇异守护",
    "Levitate":"浮游",
    "Effect Spore":"孢子",
    "Synchronize":"同步率",
    "Clear Body":"净体",
    "Natural Cure":"自然回复",
    "Lightning Rod":"避雷针",
    "Serene Grace":"天之恩惠",
    "Swift Swim":"轻快",
    "Chlorophyll":"叶绿素",
    "Illuminate":"发光",
    "Trace":"复制",
    "Huge Power":"大力士",
    "Poison Point":"毒刺",
    "Inner Focus":"精神力",
    "Magma Armor":"熔岩铠甲",
    "Water Veil":"水之掩护",
    "Magnet Pull":"磁力",
    "Soundproof":"防音",
    "Rain Dish":"接雨盘",
    "Sand Stream":"起沙",
    "Pressure":"压力",
    "Thick Fat":"厚脂肪",
    "Early Bird":"早起",
    "Flame Body":"火焰之躯",
    "Run Away":"逃足",
    "Keen Eye":"锐利目光",
    "Hyper Cutter":"怪力钳",
    "Pickup":"拾取",
    "Truant":"懒惰",
    "Hustle":"紧张",
    "Cute Charm":"魅惑身躯",
    "Plus":"正极",
    "Minus":"负极",
    "Forecast":"气象台",
    "Sticky Hold":"黏着",
    "Shed Skin":"蜕皮",
    "Guts":"根性",
    "Marvel Scale":"神秘鳞片",
    "Liquid Ooze":"毒液",
    "Overgrow":"深绿",
    "Blaze":"猛火",
    "Torrent":"激流",
    "Swarm":"虫之预感",
    "Rock Head":"石脑",
    "Drought":"干旱",
    "Arena Trap":"蚁地狱",
    "Vital Spirit":"干劲",
    "White Smoke":"白烟",
    "Pure Power":"瑜珈之力",
    "Shell Armor":"贝壳盔甲",
    "Air Lock":"天气锁",
    "Tangled Feet":"蹒跚",
    "Motor Drive":"电引擎",
    "Rivalry":"斗争心",
    "Steadfast":"不屈之心",
    "Snow Cloak":"雪隐",
    "Gluttony":"贪吃",
    "Anger Point":"怒穴",
    "Unburden":"轻身",
    "Heatproof":"耐热",
    "Simple":"单纯",
    "Dry Skin":"干燥肌肤",
    "Download":"下载",
    "Iron Fist":"铁拳",
    "Poison Heal":"毒疗",
    "Adaptability":"适应力",
    "Skill Link":"技能连锁",
    "Hydration":"湿润身躯",
    "Solar Power":"太阳力量",
    "Quick Feet":"早足",
    "Normalize":"普通皮肤",
    "Sniper":"狙击手",
    "Magic Guard":"魔法守护",
    "No Guard":"无防御",
    "Stall":"后出",
    "Technician":"技师",
    "Leaf Guard":"绿叶守护",
    "Klutz":"不器用",
    "Mold Breaker":"破格",
    "Super Luck":"强运",
    "Aftermath":"引爆",
    "Anticipation":"危险预知",
    "Forewarn":"预知梦",
    "Unaware":"天然",
    "Tinted Lens":"有色眼镜",
    "Filter":"过滤器",
    "Slow Start":"缓慢启动",
    "Scrappy":"胆气",
    "Storm Drain":"引水",
    "Ice Body":"寒冰身躯",
    "Solid Rock":"坚岩",
    "Snow Warning":"降雪",
    "Honey Gather":"集蜜",
    "Frisk":"洞察",
    "Reckless":"舍身",
    "Multitype":"多重属性",
    "Flower Gift":"花之礼物",
    "Bad Dreams":"梦魇",
    "Pickpocket":"偷盗恶习",
    "Sheer Force":"全力攻击",
    "Contrary":"性情乖僻",
    "Unnerve":"紧张感",
    "Defiant":"不服输",
    "Defeatist":"懦弱",
    "Cursed Body":"诅咒身躯",
    "Healer":"治愈之心",
    "Friend Guard":"队友守护",
    "Weak Armor":"破碎铠甲",
    "Heavy Metal":"重金属",
    "Light Metal":"轻金属",
    "Multiscale":"多重鳞片",
    "Toxic Boost":"毒暴走",
    "Flare Boost":"热暴走",
    "Harvest":"收获",
    "Telepathy":"超感知觉",
    "Moody":"心意不定",
    "Overcoat":"防尘",
    "Poison Touch":"毒手",
    "Regenerator":"再生力",
    "Big Pecks":"胸甲",
    "Sand Rush":"挖沙",
    "Wonder Skin":"奇迹皮肤",
    "Analytic":"分析",
    "Illusion":"幻影",
    "Imposter":"替代物",
    "Infiltrator":"穿透",
    "Mummy":"木乃伊",
    "Moxie":"自信过剩",
    "Justified":"正义之心",
    "Rattled":"颤抖",
    "Magic Bounce":"魔法反射",
    "Sap Sipper":"食草",
    "Prankster":"恶作剧之心",
    "Sand Force":"沙之力量",
    "Iron Barbs":"铁棘",
    "Zen Mode":"不倒翁模式",
    "Victory Star":"胜利之星",
    "Turboblaze":"涡轮火花",
    "Teravolt":"垓级电压",
    "Aerilate":"天空皮肤",
    "Aura Break":"光环破坏",
    "Cheek Pouch":"颊囊",
    "Dark Aura":"黑暗光环",
    "Fairy Aura":"妖精光环",
    "Flower Veil":"鲜花掩护",
    "Fur Coat":"毛皮外衣",
    "Mega Launcher":"超强炮台",
    "Parental Bond":"亲子爱",
    "Pixilate":"妖精皮肤",
    "Protean":"变幻自在",
    "Refrigerate":"冰冻皮肤",
    "Stance Change":"战姿切换",
    "Strong Jaw":"强壮之颚",
    "Sweet Veil":"甜蜜掩护",
    "Tough Claws":"坚硬之爪",
    "Competitive":"争强好胜",
    "Gale Wings":"疾风之翼",
    "Gooey":"黏滑",
    "Aroma Veil":"芳香掩护",
    "Bulletproof":"防弹",
    "Grass Pelt":"绿草毛皮",
    "Magician":"魔术师",
    "Symbiosis":"共生",
    "Desolate Land":"终结之地",
    "Primordial Sea":"始源之海",
    "Delta Stream":"德尔塔气流",
    "Full Metal Body":"金属防护",
    "Shadow Shield":"幻影防守",
    "Comatose":"绝对睡眠",
    "Power Construct":"群聚变形",
    "Soul-Heart":"魂心",
    "Stakeout":"监视",
    "Electric Surge":"电气制造者",
    "Dazzling":"鲜艳之躯",
    "Berserk":"怒火冲天",
    "Battery":"蓄电池",
    "Corrosion":"腐蚀",
    "Disguise":"画皮",
    "Fluffy":"毛茸茸",
    "Stamina":"持久力",
    "Triage":"先行治疗",
    "Wimp Out":"跃跃欲逃",
    "Dancer":"舞者",
    "Shields Down":"界限盾壳",
    "Innards Out":"飞出的内在物",
    "Schooling":"鱼群",
    "Surge Surfer":"冲浪之尾",
    "Water Compaction":"遇水凝固",
    "Queenly Majesty":"女王的威严",
    "Battle Bond":"牵绊变身",
    "Receiver":"接球手",
    "RKS System":"ＡＲ系统",
    "Psychic Surge":"精神制造者",
    "Grassy Surge":"青草制造者",
    "Misty Surge":"薄雾制造者",
    "Slush Rush":"拨雪",
    "Emergency Exit":"危险回避",
    "Merciless":"不仁不义",
    "Water Bubble":"水泡",
    "Steelworker":"钢能力者",
    "Long Reach":"远隔",
    "Liquid Voice":"湿润之声",
    "Galvanize":"电气皮肤",
    "Tangling Hair":"卷发",
    "Power of Alchemy":"化学之力",
    "Beast Boost":"异兽提升",
    "Prism Armor":"棱镜装甲",
    
    // Moves Translation
    
    "Pound":"拍打",
    "Karate Chop":"空手刀",
    "Double Slap":"往复拍打",
    "Comet Punch":"连续拳",
    "Mega Punch":"百万拳击",
    "Pay Day":"招财猫",
    "Fire Punch":"火焰拳",
    "Ice Punch":"冷冻拳",
    "Thunder Punch":"雷电拳",
    "Scratch":"抓",
    "Vice Grip":"夹",
    "Guillotine":"剪刀断头台",
    "Razor Wind":"镰鼬风",
    "Swords Dance":"剑之舞",
    "Cut":"居合斩",
    "Gust":"起风",
    "Wing Attack":"翅膀拍击",
    "Whirlwind":"吹飞",
    "Fly":"飞空",
    "Bind":"勒住",
    "Slam":"打倒",
    "Vine Whip":"藤鞭",
    "Stomp":"践踏",
    "Double Kick":"连环踢",
    "Mega Kick":"百万腿踢",
    "Jump Kick":"飞踢",
    "Rolling Kick":"回旋踢",
    "Sand Attack":"扔沙",
    "Headbutt":"头槌",
    "Horn Attack":"角突",
    "Fury Attack":"乱突",
    "Horn Drill":"尖角钻",
    "Tackle":"撞击",
    "Body Slam":"压制",
    "Wrap":"卷紧",
    "Take Down":"突进",
    "Thrash":"暴走",
    "Double-Edge":"舍身撞",
    "Tail Whip":"甩尾",
    "Poison Sting":"毒针",
    "Twineedle":"双针",
    "Pin Missile":"导弹针",
    "Leer":"瞪眼",
    "Bite":"啃咬",
    "Growl":"叫声",
    "Roar":"吼叫",
    "Sing":"歌唱",
    "Supersonic":"超音波",
    "Sonic Boom":"音波爆",
    "Disable":"束缚",
    "Acid":"溶解液",
    "Ember":"火苗",
    "Flamethrower":"火焰放射",
    "Mist":"白雾",
    "Water Gun":"水枪",
    "Hydro Pump":"水压",
    "Surf":"冲浪",
    "Ice Beam":"冷冻光线",
    "Blizzard":"暴风雪",
    "Psybeam":"精神光线",
    "Bubble Beam":"泡沫光线",
    "Aurora Beam":"极光光线",
    "Hyper Beam":"破坏光线",
    "Peck":"啄",
    "Drill Peck":"钻孔啄",
    "Submission":"地狱车",
    "Low Kick":"过肩摔",
    "Counter":"反击",
    "Seismic Toss":"地球投",
    "Strength":"怪力",
    "Absorb":"吸取",
    "Mega Drain":"百万吸取",
    "Leech Seed":"寄生种子",
    "Growth":"成长",
    "Razor Leaf":"飞叶斩",
    "Solar Beam":"太阳光线",
    "Poison Powder":"毒粉",
    "Stun Spore":"麻痹粉",
    "Sleep Powder":"催眠粉",
    "Petal Dance":"花瓣舞",
    "String Shot":"吐丝",
    "Dragon Rage":"龙之怒",
    "Fire Spin":"火旋涡",
    "Thunder Shock":"电击",
    "Thunderbolt":"十万伏特",
    "Thunder Wave":"电磁波",
    "Thunder":"雷电",
    "Rock Throw":"落石",
    "Earthquake":"地震",
    "Fissure":"地裂",
    "Dig":"挖洞",
    "Toxic":"剧毒",
    "Confusion":"念力",
    "Psychic":"精神干扰",
    "Hypnosis":"催眠术",
    "Meditate":"瑜珈之形",
    "Agility":"高速移动",
    "Quick Attack":"电光石火",
    "Rage":"愤怒",
    "Teleport":"瞬间移动",
    "Night Shade":"黑夜魔影",
    "Mimic":"模仿",
    "Screech":"噪音",
    "Double Team":"影分身",
    "Recover":"自我再生",
    "Harden":"变硬",
    "Minimize":"变小",
    "Smokescreen":"烟幕",
    "Confuse Ray":"怪异光线",
    "Withdraw":"躲进贝壳",
    "Defense Curl":"变圆",
    "Barrier":"栅栏",
    "Light Screen":"光之壁",
    "Haze":"黑雾",
    "Reflect":"反射盾",
    "Focus Energy":"蓄气",
    "Bide":"克制",
    "Metronome":"摇手指",
    "Mirror Move":"鹦鹉学舌",
    "Self-Destruct":"自爆",
    "Egg Bomb":"蛋蛋爆弹",
    "Lick":"舌舔",
    "Smog":"毒雾",
    "Sludge":"淤泥攻击",
    "Bone Club":"骨头棍",
    "Fire Blast":"大字火",
    "Waterfall":"登瀑",
    "Clamp":"贝壳夹",
    "Swift":"迅星",
    "Skull Bash":"火箭头槌",
    "Spike Cannon":"尖刺加农炮",
    "Constrict":"缠绕",
    "Amnesia":"超级健忘",
    "Kinesis":"弄弯匙子",
    "Soft-Boiled":"生蛋",
    "High Jump Kick":"飞膝踢",
    "Glare":"蛇瞪眼",
    "Dream Eater":"食梦",
    "Poison Gas":"毒瓦斯",
    "Barrage":"扔蛋",
    "Leech Life":"吸血",
    "Lovely Kiss":"恶魔之吻",
    "Sky Attack":"神鸟",
    "Transform":"变身",
    "Bubble":"水泡",
    "Dizzy Punch":"飘飘拳",
    "Spore":"蘑菇孢子",
    "Flash":"闪光",
    "Psywave":"精神波动",
    "Splash":"弹跳",
    "Acid Armor":"溶化",
    "Crabhammer":"蟹钳锤",
    "Explosion":"大爆炸",
    "Fury Swipes":"乱抓",
    "Bonemerang":"骨头回旋镖",
    "Rest":"睡眠",
    "Rock Slide":"岩崩",
    "Hyper Fang":"必杀门牙",
    "Sharpen":"变方",
    "Conversion":"属性切换",
    "Tri Attack":"三角攻击",
    "Super Fang":"愤怒门牙",
    "Slash":"切裂",
    "Substitute":"替身",
    "Struggle":"拼命",
    "Sketch":"素描",
    "Triple Kick":"三连踢",
    "Thief":"偷盗",
    "Spider Web":"蜘蛛网",
    "Mind Reader":"心眼",
    "Nightmare":"噩梦",
    "Flame Wheel":"火焰车",
    "Snore":"鼾声",
    "Curse":"诅咒",
    "Flail":"垂死挣扎",
    "Conversion 2":"属性切换２",
    "Aeroblast":"空中爆破",
    "Cotton Spore":"棉花孢子",
    "Reversal":"起死回生",
    "Spite":"恨",
    "Powder Snow":"细雪",
    "Protect":"保护",
    "Mach Punch":"音速拳",
    "Scary Face":"恐惧颜",
    "Feint Attack":"暗算",
    "Sweet Kiss":"天使之吻",
    "Belly Drum":"腹鼓",
    "Sludge Bomb":"淤泥爆弹",
    "Mud-Slap":"扔泥",
    "Octazooka":"墨汁炮",
    "Spikes":"撒菱",
    "Zap Cannon":"电磁炮",
    "Foresight":"识破",
    "Destiny Bond":"同旅",
    "Perish Song":"灭亡之歌",
    "Icy Wind":"冰冻之风",
    "Detect":"见切",
    "Bone Rush":"骨头冲锋",
    "Lock-On":"锁定",
    "Outrage":"逆鳞",
    "Sandstorm":"沙暴",
    "Giga Drain":"亿万吸取",
    "Endure":"忍耐",
    "Charm":"撒娇",
    "Rollout":"滚动",
    "False Swipe":"刀背打",
    "Swagger":"虚张声势",
    "Milk Drink":"饮奶",
    "Spark":"电火花",
    "Fury Cutter":"连续切",
    "Steel Wing":"钢之翼",
    "Mean Look":"黑眼神",
    "Attract":"着迷",
    "Sleep Talk":"梦话",
    "Heal Bell":"治愈之铃",
    "Return":"报恩",
    "Present":"礼物",
    "Frustration":"撒气",
    "Safeguard":"神秘守护",
    "Pain Split":"痛苦平分",
    "Sacred Fire":"神圣火焰",
    "Magnitude":"震级变化",
    "Dynamic Punch":"爆裂拳",
    "Megahorn":"百万角击",
    "Dragon Breath":"龙之吐息",
    "Baton Pass":"接力棒",
    "Encore":"鼓掌",
    "Pursuit":"追击",
    "Rapid Spin":"高速旋转",
    "Sweet Scent":"香甜气息",
    "Iron Tail":"铁尾",
    "Metal Claw":"金属爪",
    "Vital Throw":"当身投",
    "Morning Sun":"朝之阳",
    "Synthesis":"光合作用",
    "Moonlight":"月之光",
    "Hidden Power":"觉醒力量",
    "Cross Chop":"十字切",
    "Twister":"龙卷风",
    "Rain Dance":"祈雨",
    "Sunny Day":"放晴",
    "Crunch":"咬碎",
    "Mirror Coat":"镜面反射",
    "Psych Up":"自我暗示",
    "Extreme Speed":"神速",
    "Ancient Power":"原始力量",
    "Shadow Ball":"阴影球",
    "Future Sight":"预知未来",
    "Rock Smash":"碎岩",
    "Whirlpool":"漩涡",
    "Beat Up":"围攻",
    "Fake Out":"下马威",
    "Uproar":"吵闹",
    "Stockpile":"能量储存",
    "Spit Up":"能量释放",
    "Swallow":"能量吸入",
    "Heat Wave":"热风",
    "Hail":"冰雹",
    "Torment":"寻衅",
    "Flatter":"煽动",
    "Will-O-Wisp":"鬼火",
    "Memento":"临别礼物",
    "Facade":"空元气",
    "Focus Punch":"气合拳",
    "Smelling Salts":"清醒",
    "Follow Me":"跟我来",
    "Nature Power":"自然力量",
    "Charge":"充电",
    "Taunt":"挑拨",
    "Helping Hand":"帮手",
    "Trick":"戏法",
    "Role Play":"换装",
    "Wish":"许愿",
    "Assist":"猫之手",
    "Ingrain":"扎根",
    "Superpower":"蛮力",
    "Magic Coat":"魔装反射",
    "Recycle":"道具回收",
    "Revenge":"复仇",
    "Brick Break":"瓦割",
    "Yawn":"哈欠",
    "Knock Off":"打落",
    "Endeavor":"莽撞",
    "Eruption":"喷火",
    "Skill Swap":"特性交换",
    "Imprison":"封印",
    "Refresh":"精神回复",
    "Grudge":"怨念",
    "Snatch":"抢夺",
    "Secret Power":"秘密力量",
    "Dive":"潜水",
    "Arm Thrust":"突张",
    "Camouflage":"保护色",
    "Tail Glow":"萤火",
    "Luster Purge":"光栅净化",
    "Mist Ball":"迷雾球",
    "Feather Dance":"羽毛舞",
    "Teeter Dance":"草裙舞",
    "Blaze Kick":"火花踢",
    "Mud Sport":"玩泥",
    "Ice Ball":"冰球",
    "Needle Arm":"针刺臂膀",
    "Slack Off":"偷懒",
    "Hyper Voice":"高级噪音",
    "Poison Fang":"剧毒之牙",
    "Crush Claw":"崩击之爪",
    "Blast Burn":"爆裂燃烧",
    "Hydro Cannon":"水压加农",
    "Meteor Mash":"彗星拳",
    "Astonish":"恐吓",
    "Weather Ball":"气象球",
    "Aromatherapy":"芳香疗法",
    "Fake Tears":"假哭",
    "Air Cutter":"空气刃",
    "Overheat":"燃烧殆尽",
    "Odor Sleuth":"嗅觉",
    "Rock Tomb":"岩石封",
    "Silver Wind":"银色之风",
    "Metal Sound":"金属音",
    "Grass Whistle":"草笛",
    "Tickle":"挠痒",
    "Cosmic Power":"宇宙力量",
    "Water Spout":"喷水",
    "Signal Beam":"信号光线",
    "Shadow Punch":"暗影拳",
    "Extrasensory":"神通力",
    "Sky Uppercut":"升空拳",
    "Sand Tomb":"沙地狱",
    "Sheer Cold":"绝对零度",
    "Muddy Water":"浊流",
    "Bullet Seed":"种子机枪",
    "Aerial Ace":"燕返",
    "Icicle Spear":"冰柱针",
    "Iron Defense":"铁壁",
    "Block":"禁止通行",
    "Howl":"远吠",
    "Dragon Claw":"龙之爪",
    "Frenzy Plant":"硬化植物",
    "Bulk Up":"巨大化",
    "Bounce":"飞跃",
    "Mud Shot":"泥浆喷射",
    "Poison Tail":"毒尾",
    "Covet":"索要",
    "Volt Tackle":"高压电击",
    "Magical Leaf":"魔叶斩",
    "Water Sport":"玩水",
    "Calm Mind":"冥想",
    "Leaf Blade":"刃叶斩",
    "Dragon Dance":"龙之舞",
    "Rock Blast":"岩石爆破",
    "Shock Wave":"电击波",
    "Water Pulse":"水之波动",
    "Doom Desire":"破灭之愿",
    "Psycho Boost":"精神增压",
    "Roost":"羽栖",
    "Gravity":"重力",
    "Miracle Eye":"奇迹之眼",
    "Wake-Up Slap":"清醒拍打",
    "Hammer Arm":"臂锤",
    "Gyro Ball":"螺旋球",
    "Healing Wish":"治愈之愿",
    "Brine":"潮水",
    "Natural Gift":"自然恩惠",
    "Feint":"佯攻",
    "Pluck":"啄食",
    "Tailwind":"顺风",
    "Acupressure":"点穴",
    "Metal Burst":"金属爆破",
    "U-turn":"蜻蜓回转",
    "Close Combat":"近战",
    "Payback":"报复",
    "Assurance":"连打",
    "Embargo":"扣押",
    "Fling":"投掷",
    "Psycho Shift":"精神转移",
    "Trump Card":"王牌",
    "Heal Block":"回复封印",
    "Wring Out":"绞紧",
    "Power Trick":"力量戏法",
    "Gastro Acid":"胃液",
    "Lucky Chant":"咒语",
    "Me First":"先取",
    "Copycat":"效仿",
    "Power Swap":"力量交换",
    "Guard Swap":"防御交换",
    "Punishment":"惩罚",
    "Last Resort":"最终手段",
    "Worry Seed":"烦恼种子",
    "Sucker Punch":"偷袭",
    "Toxic Spikes":"毒菱",
    "Heart Swap":"心灵交换",
    "Aqua Ring":"液态圈",
    "Magnet Rise":"电磁浮游",
    "Flare Blitz":"火焰驱进",
    "Force Palm":"发劲",
    "Aura Sphere":"波导弹",
    "Rock Polish":"岩切",
    "Poison Jab":"毒突",
    "Dark Pulse":"恶之波动",
    "Night Slash":"试刀",
    "Aqua Tail":"水之尾",
    "Seed Bomb":"种子爆弹",
    "Air Slash":"空气切割",
    "X-Scissor":"十字剪",
    "Bug Buzz":"虫鸣",
    "Dragon Pulse":"龙之波动",
    "Dragon Rush":"龙之冲锋",
    "Power Gem":"力量宝石",
    "Drain Punch":"吸取拳",
    "Vacuum Wave":"真空波",
    "Focus Blast":"气合弹",
    "Energy Ball":"能量球",
    "Brave Bird":"勇鸟",
    "Earth Power":"大地之力",
    "Switcheroo":"偷换",
    "Giga Impact":"亿万冲击",
    "Nasty Plot":"阴谋",
    "Bullet Punch":"子弹拳",
    "Avalanche":"雪崩",
    "Ice Shard":"冰之砾",
    "Shadow Claw":"阴影爪",
    "Thunder Fang":"雷之牙",
    "Ice Fang":"冰之牙",
    "Fire Fang":"火之牙",
    "Shadow Sneak":"影击",
    "Mud Bomb":"泥爆弹",
    "Psycho Cut":"精神切割",
    "Zen Headbutt":"思念头槌",
    "Mirror Shot":"镜面射击",
    "Flash Cannon":"光栅加农",
    "Rock Climb":"攀岩",
    "Defog":"除雾",
    "Trick Room":"欺骗空间",
    "Draco Meteor":"龙星群",
    "Discharge":"放电",
    "Lava Plume":"喷烟",
    "Leaf Storm":"飞叶风暴",
    "Power Whip":"强力鞭挞",
    "Rock Wrecker":"岩石炮",
    "Cross Poison":"毒十字",
    "Gunk Shot":"粉尘射击",
    "Iron Head":"铁头槌",
    "Magnet Bomb":"磁体炸弹",
    "Stone Edge":"石刃",
    "Captivate":"诱惑",
    "Stealth Rock":"秘密岩石",
    "Grass Knot":"草绳结",
    "Chatter":"喋喋不休",
    "Judgment":"制裁之砾",
    "Bug Bite":"虫食",
    "Charge Beam":"充电光线",
    "Wood Hammer":"木锤",
    "Aqua Jet":"水流喷射",
    "Attack Order":"攻击指令",
    "Defend Order":"防御指令",
    "Heal Order":"回复指令",
    "Head Smash":"双刃头槌",
    "Double Hit":"双重攻击",
    "Roar of Time":"时之咆哮",
    "Spacial Rend":"亚空切断",
    "Lunar Dance":"新月之舞",
    "Crush Grip":"捏碎",
    "Magma Storm":"熔岩风暴",
    "Dark Void":"黑洞",
    "Seed Flare":"闪耀种子",
    "Ominous Wind":"妖风",
    "Shadow Force":"影袭",
    "Hone Claws":"磨爪",
    "Wide Guard":"广域防御",
    "Guard Split":"防御平分",
    "Power Split":"力量平分",
    "Wonder Room":"神奇空间",
    "Psyshock":"精神冲击",
    "Venoshock":"毒液冲击",
    "Autotomize":"身体净化",
    "Rage Powder":"愤怒之粉",
    "Telekinesis":"念动力",
    "Magic Room":"魔术空间",
    "Smack Down":"击坠",
    "Storm Throw":"山岚",
    "Flame Burst":"爆裂火焰",
    "Sludge Wave":"淤泥波",
    "Quiver Dance":"蝶之舞",
    "Heavy Slam":"重量炸弹",
    "Synchronoise":"同调噪音",
    "Electro Ball":"电球",
    "Soak":"浸水",
    "Flame Charge":"硝化冲锋",
    "Coil":"盘蜷",
    "Low Sweep":"下旋",
    "Acid Spray":"酸性炸弹",
    "Foul Play":"诈骗",
    "Simple Beam":"单纯光线",
    "Entrainment":"变为同伴",
    "After You":"您先请",
    "Round":"轮唱",
    "Echoed Voice":"回音",
    "Chip Away":"循序渐进",
    "Clear Smog":"净化之雾",
    "Stored Power":"援助力量",
    "Quick Guard":"快速防御",
    "Ally Switch":"位置交换",
    "Scald":"沸水",
    "Shell Smash":"破壳而出",
    "Heal Pulse":"治愈波动",
    "Hex":"厄运",
    "Sky Drop":"自由下落",
    "Shift Gear":"齿轮变换",
    "Circle Throw":"仰投",
    "Incinerate":"燃尽",
    "Quash":"押后",
    "Acrobatics":"杂耍",
    "Reflect Type":"镜面属性",
    "Retaliate":"报仇",
    "Final Gambit":"豁命攻击",
    "Bestow":"传递礼物",
    "Inferno":"炼狱",
    "Water Pledge":"水之誓",
    "Fire Pledge":"火之誓",
    "Grass Pledge":"草之誓",
    "Volt Switch":"闪电交替",
    "Struggle Bug":"虫之抵抗",
    "Bulldoze":"压路",
    "Frost Breath":"冰之吐息",
    "Dragon Tail":"龙之尾",
    "Work Up":"鼓舞士气",
    "Electroweb":"电网",
    "Wild Charge":"野性电击",
    "Drill Run":"钻头直击",
    "Dual Chop":"连环切击",
    "Heart Stamp":"心灵压迫",
    "Horn Leech":"木角",
    "Sacred Sword":"神圣之剑",
    "Razor Shell":"贝壳刃",
    "Heat Crash":"热践踏",
    "Leaf Tornado":"草旋风",
    "Steamroller":"坚硬滚动",
    "Cotton Guard":"棉花防御",
    "Night Daze":"暗夜爆破",
    "Psystrike":"精神破坏",
    "Tail Slap":"扫荡拍打",
    "Hurricane":"暴风",
    "Head Charge":"阿弗罗撞击",
    "Gear Grind":"齿轮飞盘",
    "Searing Shot":"火焰弹",
    "Techno Blast":"科技爆破",
    "Relic Song":"古代之歌",
    "Secret Sword":"神秘之剑",
    "Glaciate":"冰封世界",
    "Bolt Strike":"雷击",
    "Blue Flare":"青色火焰",
    "Fiery Dance":"火焰之舞",
    "Freeze Shock":"冰结电击",
    "Ice Burn":"冰冷闪光",
    "Snarl":"大喊",
    "Icicle Crash":"冰柱坠落",
    "V-create":"创造胜利",
    "Fusion Flare":"交织火焰",
    "Fusion Bolt":"交织闪电",
    "Baby-Doll Eyes":"可爱目光",
    "Boomburst":"爆音波",
    "Crafty Shield":"欺诈防御",
    "Dazzling Gleam":"魔法闪光",
    "Draining Kiss":"吸收之吻",
    "Fairy Wind":"妖精之风",
    "Flying Press":"飞行压制",
    "Forest's Curse":"森林诅咒",
    "Freeze-Dry":"冷冻干燥",
    "Geomancy":"大地控制",
    "Petal Blizzard":"花吹雪",
    "Infestation":"缠身",
    "Moonblast":"月爆",
    "Mystical Fire":"魔法火焰",
    "Noble Roar":"咆哮",
    "Nuzzle":"脸颊磨蹭",
    "Oblivion Wing":"死亡之翼",
    "Parabolic Charge":"抛物式充电",
    "Phantom Force":"幽灵潜袭",
    "Play Rough":"嬉闹",
    "Play Nice":"好好相处",
    "Trick-or-Treat":"万圣节捣蛋",
    "Water Shuriken":"水之手里剑",
    "Aromatic Mist":"芳香迷雾",
    "Belch":"打嗝",
    "Confide":"私密话",
    "Disarming Voice":"魅力声音",
    "Eerie Impulse":"怪电波",
    "Electric Terrain":"电流场地",
    "Electrify":"送电",
    "Fairy Lock":"妖精之锁",
    "Fell Stinger":"终结针刺",
    "Flower Shield":"鲜花防御",
    "Grassy Terrain":"绿草场地",
    "Ion Deluge":"等离子倾泻",
    "King's Shield":"王者之盾",
    "Land's Wrath":"大地原力",
    "Magnetic Flux":"磁场操作",
    "Mat Block":"叠返",
    "Misty Terrain":"迷雾场地",
    "Parting Shot":"退场台词",
    "Powder":"粉尘",
    "Power-Up Punch":"增强拳",
    "Rototiller":"耕地",
    "Spiky Shield":"棘刺防御",
    "Sticky Web":"黏网",
    "Topsy-Turvy":"翻转",
    "Venom Drench":"毒液陷阱",
    "Happy Hour":"开心时间",
    "Celebrate":"庆祝",
    "Hold Back":"手下留情",
    "Diamond Storm":"钻石风暴 ",
    "Light of Ruin":"破灭之光",
    "Steam Eruption":"蒸汽喷发",
    "Hyperspace Hole":"異次元蟲洞",
    "Hold Hands":"手牵手",
    "Thousand Arrows":"萬箭齊發",
    "Thousand Waves":"萬波激震",
    "Origin Pulse":"根源波动",
    "Precipice Blades":"断崖之剑",
    "Dragon Ascent":"画龙点睛",
    "Hyperspace Fury":"异次元暴怒",
    "Core Enforcer":"核心惩罚者",
    "Fleur Cannon":"花朵加农炮",
    "High Horsepower":"十万马力",
    "Leafage":"树叶",
    "Moongeist Beam":"暗影之光",
    "Nature's Madness":"自然之怒",
    "Revelation Dance":"觉醒之舞",
    "Shell Trap":"陷阱甲壳",
    "Solar Blade":"日光刃",
    "Sunsteel Strike":"流星闪冲",
    "Accelerock":"冲岩",
    "Psychic Terrain":"精神场地",
    "Throat Chop":"地狱突刺",
    "Aurora Veil":"极光幕",
    "Laser Focus":"磨砺",
    "Clanging Scales":"鳞片噪音",
    "Multi-Attack":"多属性攻击",
    "Trop Kick":"热带踢",
    "Dragon Hammer":"龙锤",
    "Instruct":"号令",
    "Spirit Shackle":"缝影",
    "Darkest Lariat":"ＤＤ金勾臂",
    "Sparkling Aria":"泡影的咏叹",
    "Shore Up":"集沙",
    "First Impression":"迎头一击",
    "Baneful Bunker":"碉堡",
    "Ice Hammer":"冰锤",
    "Floral Healing":"花疗",
    "Strength Sap":"吸取力量",
    "Spotlight":"聚光灯",
    "Toxic Thread":"毒丝",
    "Gear Up":"辅助齿轮",
    "Pollen Puff":"花粉团",
    "Anchor Shot":"掷锚",
    "Lunge":"猛扑",
    "Fire Lash":"火焰鞭",
    "Power Trip":"嚣张",
    "Burn Up":"燃尽",
    "Speed Swap":"速度互换",
    "Smart Strike":"修长之角",
    "Purify":"净化",
    "Beak Blast":"鸟嘴加农炮",
    "Brutal Swing":"狂舞挥打",
    "Psychic Fangs":"精神之牙",
    "Stomping Tantrum":"跺脚",
    "Shadow Bone":"暗影之骨",
    "Liquidation":"水流裂破",
    "Prismatic Laser":"棱镜镭射",
    "Spectral Thief":"暗影偷盗",
    "Tearful Look":"泪眼汪汪",
    "Zing Zap":"麻麻刺刺",
    "Breakneck Blitz":"究极无敌大冲撞",
    "All-Out Pummeling":"全力无双激烈拳",
    "Supersonic Skystrike":"极速俯冲轰烈撞",
    "Acid Downpour":"强酸剧毒灭绝雨",
    "Tectonic Rage":"地隆啸天大终结",
    "Continental Crush":"毁天灭地巨岩坠",
    "Savage Spin-out":"绝对捕食回旋斩",
    "Never-Ending Nightmare":"无尽暗夜之诱惑",
    "Corkscrew Crash":"超绝螺旋连击",
    "Inferno Overdrive":"超强极限爆焰弹",
    "Hydro Vortex":"超级水流大漩涡",
    "Bloom Doom":"绚烂缤纷花怒放",
    "Gigavolt Havoc":"终极伏特狂雷闪",
    "Shattered Psyche":"至高精神破坏波",
    "Subzero Slammer":"激狂大地万里冰",
    "Devastating Drake":"究极巨龙震天地",
    "Black Hole Eclipse":"黑洞吞噬万物灭",
    "Twinkle Tackle":"可爱星星飞天撞",
    "Catastropika":"皮卡皮卡必杀击",
    "Stoked Sparksurfer":"驾雷驭电戏冲浪",
    "Extreme Evoboost":"九彩升华齐聚顶",
    "Pulverizing Pancake":"认真起来大爆击",
    "Genesis Supernova":"起源超新星大爆炸",
    "Guardian of Alola":"巨人卫士-阿罗拉",
    "Sinister Arrow Raid":"遮天蔽日暗影箭",
    "Malicious Moonsault":"极恶飞跃粉碎击",
    "Oceanic Operetta":"海神庄严交响乐",
    "Soul-Stealing 7-Star Strike":"七星夺魂腿",
    "10,000,Volt Thunderbolt":"千万伏特",


};
var QQ=$.noConflict();
function translate(originalStr){
    var tmp=originalStr.trim();
    console.log(tmp);
    if(translations[tmp])
        return translations[tmp];
    else 
        return originalStr;
        
}
function test(){
    console.log("123");
}
function translateElement(element){
    var elTW = document.createTreeWalker(element, NodeFilter.SHOW_Element, null, false);
    var node=null;
    while((node=elTW.nextNode())!=null){
        if(node.nodeValue){
            node.nodeValue=translate(node.nodeValue);
            //node=elTW.previousNode();
            //QQ(t).remove();
        }
    }
}
(function() {
    'use strict';
    translateElement(document.getElementById('room-'));
    QQ(document).on('DOMNodeInserted',function(e){
        translateElement(e.target);
    });
    // Your code here...
})();
