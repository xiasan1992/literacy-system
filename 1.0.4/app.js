// 预设汉字集
const presets = {
    // ===== 新增：三字经、百家姓、千字文（完整收录，保留重复字，按原文顺序） =====
    sanzijing: "人之初性本善性相近习相远苟不教性乃迁教之道贵以专昔孟母择邻处子不学断机杼窦燕山有义方教五子名俱扬养不教父之过教不严师之惰子不学非所宜幼不学老何为玉不琢不成器人不学不知义为人子方少时亲师友习礼仪香九龄能温席孝于亲所当执融四岁能让梨弟于长宜先知首孝悌次见闻知某数识某文一而十十而百百而千千而万三才者天地人三光者日月星三纲者君臣义父子亲夫妇顺曰春夏曰秋冬此四时运不穷曰南北曰西东此四方应乎中曰水火木金土此五行本乎数曰仁义礼智信此五常不容紊稻粱菽麦黍稷此六谷人所食马牛羊鸡犬豕此六畜人所饲曰喜怒曰哀惧爱恶欲七情具匏土革木石金丝与竹乃八音高曾祖父而身身而子子而孙自子孙至玄曾乃九族人之伦父子恩夫妇从兄则友弟则恭长幼序友与朋君则敬臣则忠此十义人所同凡训蒙须讲究详训诂明句读为学者必有初小学终至四书论语者二十篇群弟子记善言孟子者七篇止讲道德说仁义作中庸子思笔中不偏庸不易作大学乃曾子自修齐至平治孝经通四书熟如六经始可读诗书易礼春秋号六经当讲求有连山有归藏有周易三易详有典谟有训诰有誓命书之奥我周公作周礼著六官存治体大小戴注礼记述圣言礼乐备曰国风曰雅颂号四诗当讽咏诗既亡春秋作寓褒贬别善恶三传者有公羊有左氏有谷梁经既明方读子撮其要记其事五子者有荀扬文中子及老庄经子通读诸史考世系知终始自羲农至黄帝号三皇居上世唐有虞号二帝相揖逊称盛世夏有禹商有汤周文武称三王夏传子家天下四百载迁夏社汤伐夏国号商六百载至纣亡周武王始诛纣八百载最长久周辙东王纲坠逞干戈尚游说始春秋终战国五霸强七雄出嬴秦氏始兼并传二世楚汉争高祖兴汉业建至孝平王莽篡光武兴为东汉四百年终于献魏蜀吴争汉鼎号三国迄两晋宋齐继梁陈承为南朝都金陵北元魏分东西宇文周与高齐迨至隋一土宇不再传失统绪唐高祖起义师除隋乱创国基二十传三百载梁灭之国乃改梁唐晋及汉周称五代皆有由炎宋兴受周禅十八传南北混辽与金帝号纷迨灭辽宋犹存至元兴金绪歇有宋世一同灭并中国兼戎狄明太祖久亲师传建文方四嗣迁北京永乐嗣迨崇祯煤山逝清太祖膺景命靖四方克大定廿一史全在兹载治乱知兴亡读史者考实录通古今若亲目口而诵心而维朝于斯夕于斯昔仲尼师项橐古圣贤尚勤学赵中令读鲁论彼既仕学且勤披蒲编削竹简彼无书且知勉头悬梁锥刺股彼不教自勤苦如囊萤如映雪家虽贫学不辍如负薪如挂角身虽劳犹苦卓苏老泉二十七始发愤读书籍彼既老犹悔迟尔小生宜早思若梁灏八十二对大廷魁多士彼既成众称异尔小生宜立志莹八岁能咏诗泌七岁能赋棋彼颖悟人称奇尔幼学当效之蔡文姬能辨琴谢道韫能咏吟彼女子且聪敏尔男子当自警唐刘晏方七岁举神童作正字彼虽幼身已仕尔幼学勉而致有为者亦若是犬守夜鸡司晨苟不学曷为人蚕吐丝蜂酿蜜人不学不如物幼而学壮而行上致君下泽民扬名声显父母光于前裕于后人遗子金满籯我教子惟一经勤有功戏无益戒之哉宜勉力",
    
    baijiaxing: "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄曲家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘斜厉戎祖武符刘景詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阴郁胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍却璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇广禄阙东欧殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后荆红游竺权逯盖益桓公万俟司马上官欧阳夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于单于太叔申屠公孙仲孙轩辕令狐钟离宇文长孙慕容鲜于闾丘司徒司空亓官司寇仉督子车颛孙端木巫马公西漆雕乐正壤驷公良拓跋夹谷宰父谷粱晋楚闫法汝鄢涂钦段干百里东郭南门呼延归海羊舌微生岳帅缑亢况后有琴梁丘左丘东门西门商牟佘佴伯赏南宫墨哈谯笪年爱阳佟第五言福百家姓终",
    
    qianziwen: "天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐吊民伐罪周发殷汤坐朝问道垂拱平章爱育黎首臣伏戎羌遐迩一体率宾归王鸣凤在竹白驹食场化被草木赖及万方盖此身发四大五常恭惟鞠养岂敢毁伤女慕贞洁男效才良知过必改得能莫忘罔谈彼短靡恃己长信使可覆器欲难量墨悲丝染诗赞羔羊景行维贤克念作圣德建名立形端表正空谷传声虚堂习听祸因恶积福缘善庆尺璧非宝寸阴是竞资父事君曰严与敬孝当竭力忠则尽命临深履薄夙兴温凊似兰斯馨如松之盛川流不息渊澄取映容止若思言辞安定笃初诚美慎终宜令荣业所基籍甚无竟学优登仕摄职从政存以甘棠去而益咏乐殊贵贱礼别尊卑上和下睦夫唱妇随外受傅训入奉母仪诸姑伯叔犹子比儿孔怀兄弟同气连枝交友投分切磨箴规仁慈隐恻造次弗离节义廉退颠沛匪亏性静情逸心动神疲守真志满逐物意移坚持雅操好爵自縻都邑华夏东西二京背邙面洛浮渭据泾宫殿盘郁楼观飞惊图写禽兽画彩仙灵丙舍傍启甲帐对楹肆筵设席鼓瑟吹笙升阶纳陛弁转疑星右通广内左达承明既集坟典亦聚群英杜稿钟隶漆书壁经府罗将相路侠槐卿户封八县家给千兵高冠陪辇驱毂振缨世禄侈富车驾肥轻策功茂实勒碑刻铭磻溪伊尹佐时阿衡奄宅曲阜微旦孰营桓公匡合济弱扶倾绮回汉惠说感武丁俊乂密勿多士实宁晋楚更霸赵魏困横假途灭虢践土会盟何遵约法韩弊烦刑起翦颇牧用军最精宣威沙漠驰誉丹青九州禹迹百郡秦并岳宗泰岱禅主云亭雁门紫塞鸡田赤城昆池碣石巨野洞庭旷远绵邈岩岫杳冥治本于农务兹稼穑俶载南亩我艺黍稷税熟贡新劝赏黜陟孟轲敦素史鱼秉直庶几中庸劳谦谨敕聆音察理鉴貌辨色贻厥嘉猷勉其祗植省躬讥诫宠增抗极殆辱近耻林皋幸即两疏见机解组谁逼索居闲处沉默寂寥求古寻论散虑逍遥欣奏累遣戚谢欢招渠荷的历园莽抽条枇杷晚翠梧桐蚤凋陈根委翳落叶飘摇游鹍独运凌摩绛霄耽读玩市寓目囊箱易輶攸畏属耳垣墙具膳餐饭适口充肠饱饫烹宰饥厌糟糠亲戚故旧老少异粮妾御绩纺侍巾帷房纨扇圆絜银烛炜煌昼眠夕寐蓝笋象床弦歌酒宴接杯举觞矫手顿足悦豫且康嫡后嗣续祭祀烝尝稽颡再拜悚惧恐惶笺牒简要顾答审详骸垢想浴执热愿凉驴骡犊特骇跃超骧诛斩贼盗捕获叛亡布射僚丸嵇琴阮啸恬笔伦纸钧巧任钓释纷利俗并皆佳妙毛施淑姿工颦妍笑年矢每催曦晖朗曜璇玑悬斡晦魄环照指薪修祜永绥吉劭矩步引领俯仰廊庙束带矜庄徘徊瞻眺孤陋寡闻愚蒙等诮谓语助者焉哉乎也",
    
    // ===== 原有预设 =====
    xiaoyang: "一 二 三 四 五 六 七 八 九 十 两 只 头 又 了 不 大 小 上 下 多 少 白 天 云 山 太 阳 月 亮 星 马 牛 羊 兔 虫 鸟 花 草 树 地 吃 看 走 笑 来 飞 爱 是 跑 跳 高 兴 快 乐 好 的 爸 妈 我",
    xiaoyang2: "人 儿 子 口 几 个 中 牙 门 手 心 什 么 开 可 回 出 去 里 床 车 家 爷 奶 你 水 饭 有 找 坐 听 玩 哭 起 喝 到 河 海 风 雨 雪 春 夏 秋 冬 鱼 狼 猫 狗 蝴 蝶 蜜 蜂 睡 红 蓝 绿 美 丽",
    xiaoyang3: "木 王 日 百 千 万 公 主 生 长 见 女 在 早 叶 森 林 书 画 学 习 对 没 老 师 他 们 前 后 哥 姐 弟 妹 国 衣 服 幼 园 校 爬 藏 说 觉 打 写 做 穿 要 想 黄 黑 很 再 把 和 得 着 方 直 竹",
    xiaoyang4: "土 火 光 力 气 午 发 电 宝 贝 自 己 身 今 年 岁 米 面 包 瓜 果 点 字 话 机 船 菜 孩 为 比 会 站 行 叫 过 关 喜 欢 怕 给 跟 进 干 杯 青 明 晚 真 饱 错 东 西 外 每 这 她 也 还 以 呢",
    xiaoyang5: "工 方 文 本 石 金 朋 友 叔 娃 婆 医 耳 眼 睛 蛙 鸡 鸭 苹 桃 球 笔 灯 语 课 歌 声 音 边 时 体 样 分 问 变 成 用 加 买 当 动 作 住 放 读 转 唱 停 游 数 像 反 正 同 空 新 片 半 朵 条 北 南 那 谁 才 更 都 从 向 就 辫 布 猜 层 低 第 掉 翻 环 救",
    xiaoyang6: "皮 毛 目 田 尺 业 句 台 众 江 伞 肉 第 名 色 足 肚 乌 鸦 蝌 蚪 尾 巴 芽 杏 柳 莲 步 诗 词 桥 洞 影 院 彩 旗 种 棋 桌 昨 夜 梦 候 班 路 物 雷 办 法 采 升 闪 挂 活 许 参 练 算 念 摇 摘 落 无 全 久 近 远 冷 热 暖 短 最 难 处 群 左 右 旁 它 呀",
    basic: "一 二 三 四 五 六 七 八 九 十",
    nature: "日 月 水 火 山 石 田 土 风 雨",
    body: "人 口 手 足 目 耳 头 发 心 牙",
    family: "爸 妈 爷 奶 哥 姐 弟 妹 叔 婶",
    animals: "猫 狗 鸡 鸭 鱼 牛 马 羊 虎 龙",
    colors: "红 黄 蓝 绿 白 黑 大 小 多 少"
};

// 数据状态
let charsData = JSON.parse(localStorage.getItem('charsData')) || {};
let currentQuizList = [];
let originalQuizList = []; // 保存最开始的乱序列表，便于再测一次
let currentIdx = 0;
let quizResult = { correct: 0, wrong: 0 };
let isReviewMode = false;
let quizStartTime = 0; // 新增：记录测试开始时间

// DOM元素缓存
const DOMElements = {
    pages: document.querySelectorAll('.page'),
    navBtns: document.querySelectorAll('.nav-btn'),
    
    // Home
    charInput: document.getElementById('char-input'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),
    btnReviewSpecific: document.getElementById('btn-review-specific'),
    btnAutoRecommend: document.getElementById('btn-auto-recommend'), // 新增
    btnLoadPreset: document.getElementById('btn-load-preset'),
    presetPanel: document.getElementById('preset-panel'),
    presetBtns: document.querySelectorAll('.preset-btn'),
    
    // Quiz & Review
    quizProgress: document.getElementById('quiz-progress'),
    quizProgressText: document.getElementById('quiz-progress-text'),
    charDisplay: document.getElementById('char-display'),
    charDisplayArea: document.getElementById('char-display-area'),
    charCorrectCount: document.getElementById('char-correct-count'),
    charWrongCount: document.getElementById('char-wrong-count'),
    btnCorrect: document.getElementById('btn-correct'),
    btnWrong: document.getElementById('btn-wrong'),

    revProgress: document.getElementById('review-progress'),
    revProgressText: document.getElementById('review-progress-text'),
    revDisplay: document.getElementById('review-char-display'),
    revDisplayArea: document.getElementById('review-display-area'),
    revCorrectCount: document.getElementById('review-correct-count'),
    revWrongCount: document.getElementById('review-wrong-count'),
    btnRevCorrect: document.getElementById('btn-review-correct'),
    btnRevWrong: document.getElementById('btn-review-wrong'),
    noWrongChars: document.getElementById('no-wrong-chars'),
    reviewContent: document.getElementById('review-content'),
    
    // Stats
    totalLearned: document.getElementById('total-learned'),
    totalCorrectScore: document.getElementById('total-correct'),
    totalWrongScore: document.getElementById('total-wrong'),
    accuracyRate: document.getElementById('accuracy-rate'),
    statsGrid: document.getElementById('char-stats-grid'),
    statsEmpty: document.getElementById('stats-empty'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    
    // Modals
    quizCompleteModal: document.getElementById('quiz-complete-modal'),
    modalCorrect: document.getElementById('modal-correct'),
    modalWrong: document.getElementById('modal-wrong'),
    modalAccuracy: document.getElementById('modal-accuracy'),
    modalTime: document.getElementById('modal-time'), // 新增
    btnModalReview: document.getElementById('btn-modal-review'),
    btnModalRetry: document.getElementById('btn-modal-retry'),
    btnModalHome: document.getElementById('btn-modal-home'),
    
    clearConfirmModal: document.getElementById('clear-confirm-modal'),
    btnCancelClear: document.getElementById('btn-cancel-clear'),
    btnConfirmClear: document.getElementById('btn-confirm-clear'),

    // 新增：保留重复复选框
    keepDuplicates: document.getElementById('keep-duplicates')
};

// 初始化
function init() {
    bindEvents();
    updateHomeStats();
    updatePresetUI();
    initParticleBackground();
}

// 绑定事件
function bindEvents() {
    // 导航
    DOMElements.navBtns.forEach(btn => {
        btn.addEventListener('click', () => switchPage(btn.dataset.page));
    });

    // 预设面板切换
    DOMElements.btnLoadPreset.addEventListener('click', () => {
        DOMElements.presetPanel.classList.toggle('hidden');
    });

    // 选择预设
    DOMElements.presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const presetId = btn.dataset.preset;
            DOMElements.charInput.value = presets[presetId];
            DOMElements.presetPanel.classList.add('hidden');
        });
    });

    // 开始测试
    DOMElements.btnStartQuiz.addEventListener('click', startQuiz);
    DOMElements.btnReviewSpecific.addEventListener('click', startSpecificReview);

    // 新增：智能推荐历史错字
    DOMElements.btnAutoRecommend.addEventListener('click', () => {
        const unmastered = Object.keys(charsData).filter(char => 
            !isMastered(char) && charsData[char].wrong > 0
        );
        
        if (unmastered.length === 0) {
            alert("太棒了！当前没有任何历史错字需要复习。");
            return;
        }
        
        // 推荐算法：按错误次数从高到低排序
        unmastered.sort((a, b) => charsData[b].wrong - charsData[a].wrong);
        
        // 截取前 30 个最易错的字填入输入框
        const recommendList = unmastered.slice(0, 30);
        DOMElements.charInput.value = recommendList.join(' ');
        alert(`已为您自动填入 ${recommendList.length} 个历史高频错字，点击“开始测试”即可复习！`);
    });

    // 答题按钮
    DOMElements.btnCorrect.addEventListener('click', () => handleAnswer(true));
    DOMElements.btnWrong.addEventListener('click', () => handleAnswer(false));
    DOMElements.btnRevCorrect.addEventListener('click', () => handleAnswer(true));
    DOMElements.btnRevWrong.addEventListener('click', () => handleAnswer(false));

    // 模态框按钮
    DOMElements.btnModalHome.addEventListener('click', () => {
        hideModal(DOMElements.quizCompleteModal);
        switchPage('home');
    });
    DOMElements.btnModalRetry.addEventListener('click', () => {
        hideModal(DOMElements.quizCompleteModal);
        retryQuiz();
    });
    DOMElements.btnModalReview.addEventListener('click', () => {
        hideModal(DOMElements.quizCompleteModal);
        startReview();
    });

    // 统计和清除
    DOMElements.filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            if (filter === 'clear') {
                showModal(DOMElements.clearConfirmModal);
            } else {
                DOMElements.filterBtns.forEach(b => {
                    if (b.dataset.filter !== 'clear') b.classList.remove('active');
                });
                e.target.classList.add('active');
                renderStatsGrid(filter);
            }
        });
    });

    DOMElements.btnCancelClear.addEventListener('click', () => hideModal(DOMElements.clearConfirmModal));
    DOMElements.btnConfirmClear.addEventListener('click', () => {
        charsData = {};
        saveData();
        hideModal(DOMElements.clearConfirmModal);
        updateHomeStats();
        renderStatsGrid('all');
    });
}

// 页面切换
function switchPage(pageId) {
    if (pageId === 'quiz') {
        if (currentQuizList.length === 0) {
            alert('请先在首页输入汉字并开始测试哦！');
            pageId = 'home';
        }
    } else if (pageId === 'review') {
        startReview();
    } else if (pageId === 'stats') {
        renderStatsGrid('all');
        DOMElements.filterBtns.forEach(b => {
            if (b.dataset.filter !== 'clear') {
                b.classList.toggle('active', b.dataset.filter === 'all');
            }
        });
    }

    DOMElements.pages.forEach(p => p.classList.remove('active'));
    DOMElements.navBtns.forEach(b => b.classList.remove('active'));

    document.getElementById(`page-${pageId}`).classList.add('active');
    document.getElementById(`nav-${pageId}`).classList.add('active');
}
window.switchPage = switchPage;

// ========== 核心逻辑 ==========

/**
 * 解析输入字符串，提取汉字字符
 * @param {string} input - 用户输入的字符串
 * @param {boolean} keepDuplicates - 是否保留重复字符，默认 false（去重）
 * @returns {string[]} 汉字数组
 */
function parseChars(input, keepDuplicates = false) {
    const chars = input.replace(/[^\u4e00-\u9fa5]/g, '').split('');
    if (!keepDuplicates) {
        return Array.from(new Set(chars));
    }
    return chars;
}

function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function startQuiz() {
    const input = DOMElements.charInput.value;
    const keepDuplicates = DOMElements.keepDuplicates.checked;
    const chars = parseChars(input, keepDuplicates);
    if (chars.length === 0) {
        alert("请输入至少一个有效的汉字！");
        return;
    }

    chars.forEach(char => {
        if (!charsData[char]) {
            charsData[char] = { correct: 0, wrong: 0, streak: 0 };
        } else if (charsData[char].streak === undefined) {
            charsData[char].streak = 0;
        }
    });
    saveData();

    const orderMode = document.querySelector('input[name="order-mode"]:checked')?.value || 'random';
    originalQuizList = orderMode === 'random' ? shuffleArray(chars) : [...chars];
    currentQuizList = [...originalQuizList];
    currentIdx = 0;
    quizResult = { correct: 0, wrong: 0 };
    isReviewMode = false;

    quizStartTime = Date.now(); // 记录开始时间
    switchPage('quiz');
    showCurrentChar();
}

function retryQuiz() {
    if (originalQuizList.length === 0) return;
    const orderMode = document.querySelector('input[name="order-mode"]:checked')?.value || 'random';
    currentQuizList = orderMode === 'random' ? shuffleArray([...originalQuizList]) : [...originalQuizList];
    currentIdx = 0;
    quizResult = { correct: 0, wrong: 0 };
    isReviewMode = false;
    
    quizStartTime = Date.now(); // 记录开始时间
    switchPage('quiz');
    showCurrentChar();
}

function startSpecificReview() {
    const input = DOMElements.charInput.value;
    const keepDuplicates = DOMElements.keepDuplicates.checked;
    const chars = parseChars(input, keepDuplicates);
    if (chars.length === 0) {
        alert("请输入或者选择一组有效汉字后再复习错字！");
        return;
    }

    const reviewList = chars.filter(char => charsData[char] && !isMastered(char) && (charsData[char].correct + charsData[char].wrong > 0));
    
    if (reviewList.length === 0) {
        alert("太棒了！这组汉字中目前没有发现您答错过哦。");
        return;
    }

    const orderMode = document.querySelector('input[name="order-mode"]:checked')?.value || 'random';
    currentQuizList = orderMode === 'random' ? shuffleArray(reviewList) : [...reviewList];
    originalQuizList = []; 
    
    currentIdx = 0;
    quizResult = { correct: 0, wrong: 0 };
    isReviewMode = true;

    DOMElements.noWrongChars.classList.add('hidden');
    DOMElements.reviewContent.classList.remove('hidden');

    DOMElements.pages.forEach(p => p.classList.remove('active'));
    DOMElements.navBtns.forEach(b => b.classList.remove('active'));
    document.getElementById('page-review').classList.add('active');
    document.getElementById('nav-review').classList.add('active');

    quizStartTime = Date.now(); // 记录开始时间
    showCurrentChar();
}

function startReview() {
    const reviewList = Object.keys(charsData).filter(char => !isMastered(char) && (charsData[char].correct + charsData[char].wrong > 0));
    
    if (reviewList.length === 0) {
        DOMElements.noWrongChars.classList.remove('hidden');
        DOMElements.reviewContent.classList.add('hidden');
    } else {
        DOMElements.noWrongChars.classList.add('hidden');
        DOMElements.reviewContent.classList.remove('hidden');
        
        currentQuizList = shuffleArray(reviewList);
        if (currentQuizList.length > 20) currentQuizList = currentQuizList.slice(0, 20);
        originalQuizList = []; 
        
        currentIdx = 0;
        quizResult = { correct: 0, wrong: 0 };
        isReviewMode = true;
        
        quizStartTime = Date.now(); // 记录开始时间
        showCurrentChar();
    }
    
    DOMElements.pages.forEach(p => p.classList.remove('active'));
    DOMElements.navBtns.forEach(b => b.classList.remove('active'));
    document.getElementById('page-review').classList.add('active');
    document.getElementById('nav-review').classList.add('active');
}

function showCurrentChar() {
    if (currentIdx >= currentQuizList.length) {
        finishQuiz();
        return;
    }

    const char = currentQuizList[currentIdx];
    const data = charsData[char];
    
    const displayElement = isReviewMode ? DOMElements.revDisplay : DOMElements.charDisplay;
    const progressTextElement = isReviewMode ? DOMElements.revProgressText : DOMElements.quizProgressText;
    const progressBarElement = isReviewMode ? DOMElements.revProgress : DOMElements.quizProgress;
    const correctCountElement = isReviewMode ? DOMElements.revCorrectCount : DOMElements.charCorrectCount;
    const wrongCountElement = isReviewMode ? DOMElements.revWrongCount : DOMElements.charWrongCount;
    
    displayElement.classList.remove('char-enter');
    void displayElement.offsetWidth;
    displayElement.textContent = char;
    displayElement.classList.add('char-enter');
    
    progressTextElement.textContent = `${currentIdx + 1} / ${currentQuizList.length}`;
    progressBarElement.style.width = `${((currentIdx) / currentQuizList.length) * 100}%`;
    
    correctCountElement.textContent = `✔ ${data.correct}`;
    wrongCountElement.textContent = `✘ ${data.wrong}`;
}

function handleAnswer(isCorrect) {
    if (currentIdx >= currentQuizList.length) return;
    
    const char = currentQuizList[currentIdx];
    
    if (isCorrect) {
        charsData[char].correct++;
        charsData[char].streak = (charsData[char].streak || 0) + 1;
        quizResult.correct++;
        feedbackAnimation(true);
    } else {
        charsData[char].wrong++;
        charsData[char].streak = 0;
        quizResult.wrong++;
        feedbackAnimation(false);
    }
    
    saveData();
    currentIdx++;
    
    setTimeout(() => {
        showCurrentChar();
    }, 400);
}

function feedbackAnimation(isCorrect) {
    const area = isReviewMode ? DOMElements.revDisplayArea : DOMElements.charDisplayArea;
    
    area.style.transform = 'scale(1.05)';
    area.style.boxShadow = isCorrect ? '0 0 40px rgba(46, 204, 113, 0.4)' : '0 0 40px rgba(231, 76, 60, 0.4)';
    
    setTimeout(() => {
        area.style.transform = 'scale(1)';
        area.style.boxShadow = 'var(--shadow-lg)';
    }, 300);
}

function finishQuiz() {
    const bar = isReviewMode ? DOMElements.revProgress : DOMElements.quizProgress;
    bar.style.width = '100%';
    
    DOMElements.modalCorrect.textContent = quizResult.correct;
    DOMElements.modalWrong.textContent = quizResult.wrong;
    
    const total = quizResult.correct + quizResult.wrong;
    const acc = total > 0 ? Math.round((quizResult.correct / total) * 100) : 0;
    DOMElements.modalAccuracy.textContent = acc + '%';
    
    // 计算并展示用时
    const timeSec = Math.floor((Date.now() - quizStartTime) / 1000);
    const m = Math.floor(timeSec / 60);
    const s = timeSec % 60;
    DOMElements.modalTime.textContent = m > 0 ? `${m}分${s}秒` : `${s}秒`;
    
    const needsReviewList = Object.keys(charsData).filter(char => !isMastered(char) && (charsData[char].correct + charsData[char].wrong > 0));
    if (isReviewMode || needsReviewList.length === 0) {
        DOMElements.btnModalReview.style.display = 'none';
        DOMElements.btnModalRetry.style.display = isReviewMode ? 'none' : 'block';
    } else {
        DOMElements.btnModalReview.style.display = 'block';
        DOMElements.btnModalRetry.style.display = 'block';
    }
    
    updateHomeStats();
    updatePresetUI();
    showModal(DOMElements.quizCompleteModal);
}

function isMastered(char) {
    const d = charsData[char];
    if (!d) return false;
    if (d.wrong === 0 && d.correct > 0) return true;
    if (d.streak >= 3) return true;
    if (d.streak === undefined && (d.correct - d.wrong >= 3)) return true;
    return false;
}

function updatePresetUI() {
    DOMElements.presetBtns.forEach(btn => {
        const presetId = btn.dataset.preset;
        if (!presets[presetId]) return;
        // 预设统计始终去重
        const chars = parseChars(presets[presetId], false);
        const total = chars.length;
        
        const unmastered = chars.filter(c => !isMastered(c));
        const masteredCount = total - unmastered.length;
        const accuracy = total > 0 ? Math.round((masteredCount / total) * 100) : 0;
        
        let statsEl = btn.querySelector('.preset-stats');
        if (!statsEl) {
            statsEl = document.createElement('div');
            statsEl.className = 'preset-stats';
            btn.appendChild(statsEl);
        }
        
        statsEl.innerHTML = `
            <div class="preset-progress">掌握率: ${accuracy}% (${masteredCount}/${total})</div>
            ${unmastered.length > 0 ? 
                `<div class="preset-unmastered">未掌握(${unmastered.length}): <span>${unmastered.join(' ')}</span></div>` : 
                `<div class="preset-unmastered all-mastered">🎉 全部掌握！</div>`}
        `;
    });
}

// ========== 数据管理和统计UI ==========

function saveData() {
    localStorage.setItem('charsData', JSON.stringify(charsData));
}

function updateHomeStats() {
    let tChars = 0;
    let tCorrect = 0;
    let tWrong = 0;
    
    for (let char in charsData) {
        tChars++;
        tCorrect += charsData[char].correct;
        tWrong += charsData[char].wrong;
    }
    
    DOMElements.totalLearned.textContent = tChars;
    DOMElements.totalCorrectScore.textContent = tCorrect;
    DOMElements.totalWrongScore.textContent = tWrong;
    
    const totalAns = tCorrect + tWrong;
    DOMElements.accuracyRate.textContent = totalAns > 0 ? Math.round((tCorrect / totalAns) * 100) + '%' : '0%';
}

function renderStatsGrid(filter) {
    DOMElements.statsGrid.innerHTML = '';
    
    const chars = Object.keys(charsData);
    if (chars.length === 0) {
        DOMElements.statsEmpty.classList.remove('hidden');
        DOMElements.statsGrid.classList.add('hidden');
        return;
    } else {
        DOMElements.statsEmpty.classList.add('hidden');
        DOMElements.statsGrid.classList.remove('hidden');
    }
    
    let filteredChars = chars;
    
    if (filter === 'correct') {
        filteredChars = chars.filter(c => isMastered(c));
    } else if (filter === 'wrong') {
        filteredChars = chars.filter(c => !isMastered(c) && (charsData[c].correct + charsData[c].wrong > 0));
    }
    
    filteredChars.sort((a, b) => {
        if (filter === 'wrong') {
             return charsData[b].wrong - charsData[a].wrong;
        }
        const totalB = charsData[b].correct + charsData[b].wrong;
        const totalA = charsData[a].correct + charsData[a].wrong;
        return totalB - totalA;
    });
    
    filteredChars.forEach(char => {
        const d = charsData[char];
        const total = d.correct + d.wrong;
        let masteryClass = 'mastery-low';
        if (total > 0) {
            const acc = d.correct / total;
            if (acc >= 0.8) masteryClass = 'mastery-high';
            else if (acc >= 0.5) masteryClass = 'mastery-med';
        } else if (total === 0) {
            masteryClass = ''; 
        }
        
        const el = document.createElement('div');
        el.className = 'stat-item';
        el.innerHTML = `
            ${masteryClass ? `<div class="stat-mastery ${masteryClass}"></div>` : ''}
            <span class="stat-char">${char}</span>
            <div class="stat-details">
                <span class="stat-c" title="答对">✔ ${d.correct}</span>
                <span class="stat-w" title="答错">✘ ${d.wrong}</span>
            </div>
        `;
        DOMElements.statsGrid.appendChild(el);
    });
}

// ========== 辅助和动效 ==========

function showModal(modal) {
    modal.classList.remove('hidden');
}

function hideModal(modal) {
    modal.classList.add('hidden');
}

function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    
    for(let i=0; i<30; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 4 + 1,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            color: Math.random() > 0.5 ? '#4A90E2' : '#F39C12'
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.2;
            ctx.fill();
        });
        
        requestAnimationFrame(draw);
    }
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    draw();
}

window.addEventListener('DOMContentLoaded', init);
