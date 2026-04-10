// ================================================================
// كوزينتي v5.0 — (النسخة النهائية لربة البيت: بدون صور/وقت، 80%، أندرويد)
// ================================================================

// 1. قاعدة البيانات الشاملة (وصفات، يوتيوب، بدون وقت طهي أو صور)
const recipesDB = [
    // 🥘 وجبات رئيسية
    { id: 1,  name: "طاجين زيتون", category: "meal", youtube: "https://www.youtube.com/results?search_query=طاجين+زيتون+جزائري", ingredients: ["دجاج","زيتون","بصل","زرودية","معدنوس","ليمون مرقد"], instruction: ["قلي الدجاج مع البصل والثوم.","ضيفي الزيتون والزرودية والليمون.","مرقي على نار هادية وتتجمر."] },
    { id: 2,  name: "كسكسي بالخضر", category: "meal", youtube: "https://www.youtube.com/results?search_query=كسكسي+جزائري+بالخضر", ingredients: ["كسكسي","لحم","لفت","قرعة","زرودية","حمص"], instruction: ["فوري الكسكسي 3 مرات.","طيبي المرقة باللحم والخضرة.","قدميها مع المرق جانباً."] },
    { id: 3,  name: "شطيطحة دجاج", category: "meal", youtube: "https://www.youtube.com/results?search_query=شطيطحة+دجاج+عاصمية", ingredients: ["دجاج","ثوم","حمص","طماطم","فلفل حار"], instruction: ["درسي الثوم والفلفل.","قلي الدجاج مع الدرسة.","مرقي وضيفي الحمص وخليه يعقد."] },
    { id: 4,  name: "غراتان بطاطا ودجاج", category: "meal", youtube: "https://www.youtube.com/results?search_query=غراتان+بطاطا+ودجاج", ingredients: ["بطاطا","دجاج","بيض","حليب","فرماج","بصل"], instruction: ["اقلي البطاطا، وطيبي الدجاج مع البصل.","ديريهم في بلا.","فرغي البيض والحليب والفرماج وطيبيهم."] },
    { id: 5,  name: "شربة فريك", category: "meal", youtube: "https://www.youtube.com/results?search_query=شربة+فريك+قسنطينية", ingredients: ["لحم","فريك","طماطم","بصل","حمص","قزبر"], instruction: ["قلي اللحم والبصل والطماطم.","مرقي وضيفي الفريك والحشيش.","خليها تطيب وتخثار."] },
    { id: 6,  name: "بوراك باللحم المفروم", category: "meal", youtube: "https://www.youtube.com/results?search_query=بوراك+جزائري+باللحم", ingredients: ["ديول","لحم مفروم","بصل","بيض","معدنوس","فرماج"], instruction: ["قلي اللحم المفروم مع البصل.","ضيفي المعدنوس والبيض.","احشي الديول واقليهم في الزيت."] },
    { id: 7,  name: "طاجين الجبن", category: "meal", youtube: "https://www.youtube.com/results?search_query=طاجين+الجبن+الجزائري", ingredients: ["لحم مفروم","بيض","فرماج","بصل","معدنوس"], instruction: ["طيبي اللحم المفروم مع البصل.","خلطيه مع البيض وديريه في بلا.","غطيه بطبقة سميكة من الفرماج وحمريه."] },
    { id: 8,  name: "رشتة عاصمية", category: "meal", youtube: "https://www.youtube.com/results?search_query=رشتة+عاصمية", ingredients: ["رشتة","دجاج","لفت","حمص","بصل","قرفة"], instruction: ["طيبي مرقة بيضاء بالدجاج والحمص واللفت.","فوري الرشتة وادهنيها.","اسقيها بالمرقة وقدميها."] },
    { id: 9,  name: "تليتلي", category: "meal", youtube: "https://www.youtube.com/results?search_query=تليتلي+جزائري", ingredients: ["تليتلي","دجاج","حمص","بيض","طماطم","زبدة"], instruction: ["حمسي التليتلي وفوريه.","طيبي مرقة حمراء بالدجاج والحمص.","جمّري التليتلي في المرقة وزينيه بالبيض."] },
    { id: 10, name: "كباب عاصمي", category: "meal", youtube: "https://www.youtube.com/results?search_query=كباب+جزائري+عاصمي", ingredients: ["دجاج","بطاطا","حمص","بصل","بيض","معدنوس","ليمون"], instruction: ["طيبي الدجاج في مرقة بيضاء مع الحمص.","اقلي البطاطا وضيفيها للمرقة تتشرب.","عقديها بالبيض والمعدنوس والليمون."] },
    { id: 11, name: "لوبيا بيضاء باللحم", category: "meal", youtube: "https://www.youtube.com/results?search_query=لوبيا+بيضاء+جزائرية", ingredients: ["لوبيا","لحم","بصل","ثوم","طماطم مصبرة","كمون"], instruction: ["انقعي اللوبيا ليلة كاملة.","طيبيها مع اللحم والبصل والثوم والطماطم."] },
    { id: 12, name: "بطاطا فليو", category: "meal", youtube: "https://www.youtube.com/results?search_query=بطاطا+فليو", ingredients: ["بطاطا","فليو","ثوم","فلفل حار","بيض"], instruction: ["درسي الثوم والفلفل.","طيبي البطاطا دوائر في الدرسة.","ضيفي الفليو وفي الأخير فقسي البيض."] },
    { id: 13, name: "مقرون بالبيشاميل", category: "meal", youtube: "https://www.youtube.com/results?search_query=مقرون+بالبيشاميل", ingredients: ["مقرون","لحم مفروم","فرماج","حليب","فرينة","زبدة"], instruction: ["غلي المقرون وطيبي اللحم.","حضري البيشاميل.","ارصيهم طبقات في بلا وحمريهم في الكوشة."] },
    { id: 14, name: "بيتزا كاري", category: "meal", youtube: "https://www.youtube.com/results?search_query=بيتزا+كاري+جزائرية", ingredients: ["فرينة","طماطم","ثوم","زيتون","زيت","زعتر"], instruction: ["حضري عجينة البيتزا وحليها مربعة.","طيبي لاصوص طومات بالثوم والزعتر.","ديريها تطيب وزينيها بالزيتون والمعدنوس."] },
    { id: 15, name: "طاكوس منزلي", category: "meal", youtube: "https://www.youtube.com/results?search_query=طاكوس+منزلي+بصلصة+الجبن", ingredients: ["دجاج","بطاطا","فرماج","كريمة","خبز تورتيا","بصل"], instruction: ["طيبي الدجاج المتبل.","حضري صلصة الجبن بالكريمة والفرماج.","احشي الخبز بالدجاج والفريت والصلصة وحمريه."] },
    { id: 16, name: "شاورما دجاج", category: "meal", youtube: "https://www.youtube.com/results?search_query=شاورما+دجاج+منزلية", ingredients: ["دجاج","ثوم","خبز عربي","طماطم","كريمة","ليمون"], instruction: ["تبلي الدجاج ببهارات الشاورما والياغورت.","قليه حتى يتحمر.","عمريه في الخبز مع صلصة الثومية."] },
    { id: 17, name: "سباغيتي بولونيز", category: "meal", youtube: "https://www.youtube.com/results?search_query=سباغيتي+بولونيز", ingredients: ["سباغيتي","لحم مفروم","طماطم مصبرة","بصل","ثوم"], instruction: ["طيبي السباغيتي.","قلي اللحم المفروم مع البصل والثوم والطماطم.","قدمي الصلصة فوق السباغيتي."] },
    { id: 18, name: "عدس", category: "meal", youtube: "https://www.youtube.com/results?search_query=عدس+جزائري", ingredients: ["عدس","بصل","زرودية","بطاطا","ثوم","كمون"], instruction: ["قلي الخضار مقطعة مع الثوم.","ضيفي العدس والماء والكمون وخليه يطيب."] },
    { id: 19, name: "طاجين الحلو", category: "meal", youtube: "https://www.youtube.com/results?search_query=طاجين+الحلو+الجزائري", ingredients: ["لحم","برقوق","زبيب","لوز","سكر","قرفة","ماء زهر"], instruction: ["طيبي اللحم مع السكر والقرفة.","ضيفي البرقوق والزبيب وخليه يعقد.","زيني باللوز المحمص."] },
    { id: 20, name: "محاجب", category: "meal", youtube: "https://www.youtube.com/results?search_query=محاجب+جزائرية", ingredients: ["سميد","بصل","طماطم","فلفل","زيت"], instruction: ["اعجني السميد وخليه يرتاح.","طيبي شكشوكة بصل وطماطم.","افتحي العجين، احشيه وطيبيه في الطاجين."] },
    { id: 21, name: "بركوكس", category: "meal", youtube: "https://www.youtube.com/results?search_query=بركوكس+جزائري", ingredients: ["بركوكس","لحم","دجاج","حمص","فول","طماطم مصبرة","قزبر","ثوم"], instruction: ["قلي اللحم والدجاج مع الثوم والطماطم والتوابل.","ضيفي الحمص والفول ومرقي بالماء.","لما يطيب اللحم، ضيفي البركوكس وخليه يتجمر."] },
    { id: 22, name: "زفيطي", category: "meal", youtube: "https://www.youtube.com/results?search_query=زفيطي+بوسعادي", ingredients: ["سميد","طماطم","ثوم","فلفل حار","قزبر","زيت"], instruction: ["طيبي رخساس (كسرة سميد).","اشوي الطماطم والفلفل ودرسيهم مع الثوم.","فتتي الكسرة واهرسيها مع الخليط في المهراس."] },
    { id: 23, name: "دولمة قرنون وجلبانة", category: "meal", youtube: "https://www.youtube.com/results?search_query=دولمة+قرنون+وجلبانة", ingredients: ["قرنون","جلبانة","لحم مفروم","دجاج","بصل","معدنوس","بيض"], instruction: ["نقي القرنون واعصريه بالليمون.","احشيه باللحم المفروم المتبل والملموم بالبيض.","طيبي مرقة بيضاء بالدجاج والجلبانة وضعي حبات القرنون تطيب فيها."] },
    { id: 24, name: "كبدة مشرملة", category: "meal", youtube: "https://www.youtube.com/results?search_query=كبدة+مشرملة+جزائرية", ingredients: ["كبدة","ثوم","طماطم مصبرة","كمون","زيت","خل"], instruction: ["قطعي الكبدة وقلّيها في الزيت ثم انزعيها.","في نفس الزيت، طيبي الثوم المهروس، طماطم، وكمون.","أعيدي الكبدة للصلصة تتجمر مع الخل."] },
    { id: 25, name: "عجة بالمرقاز", category: "meal", youtube: "https://www.youtube.com/results?search_query=عجة+بالمرقاز", ingredients: ["مرقاز","بيض","طماطم","بصل","ثوم","فلفل"], instruction: ["قلي المرقاز قليلاً ثم قطعيه.","حضري صلصة الطماطم والبصل والثوم.","أعيدي المرقاز للصلصة، ثم فقصي البيض من الفوق وخليه يطيب."] },

    // 🧁 تحليات
    { id: 101, name: "محلبي عاصمي", category: "dessert", youtube: "https://www.youtube.com/results?search_query=محلبي+عاصمي", ingredients: ["حليب","أرز مطحون","سكر","ماء زهر","قرفة"], instruction: ["خلطي الحليب، الأرز المطحون والسكر بارد في بارد.","حطيه على النار مع التحريك حتى يعقد.","ضيفي ماء الزهر وزيني بالقرفة."] },
    { id: 102, name: "فلون كراميل", category: "dessert", youtube: "https://www.youtube.com/results?search_query=فلون+كراميل+في+الفرن", ingredients: ["حليب","بيض","سكر","فانيليا"], instruction: ["ذوبي السكر كراميل في المول.","خلطي البيض والحليب والفانيليا وفرغيه فوق الكراميل.","طيبيه في حمام مائي داخل الكوشة."] },
    { id: 103, name: "بسبوسة", category: "dessert", youtube: "https://www.youtube.com/results?search_query=بسبوسة+جزائرية", ingredients: ["سميد","بيض","سكر","زيت","خميرة","ليمون"], instruction: ["خلطي البيض، السكر، الزيت والسميد.","طيبيها في الكوشة.","شربيها بشاربات الليمون باردة فور خروجها."] },
    { id: 104, name: "تيراميسو", category: "dessert", youtube: "https://www.youtube.com/results?search_query=تيراميسو+بدون+بيض", ingredients: ["بسكويت","قهوة","كريمة","كاكاو","فرماج","سكر"], instruction: ["طلعي الكريمة مع الفرماج (ماسكاربون).","غطسي البسكويت في القهوة.","رصي طبقة بسكويت وطبقة كريمة وزيني بالكاكاو."] },
    { id: 105, name: "تشيز كيك بارد", category: "dessert", youtube: "https://www.youtube.com/results?search_query=تشيز+كيك+بارد", ingredients: ["بسكويت","زبدة","فرماج","كريمة","سكر"], instruction: ["ارحي البسكويت وخلطيه مع الزبدة ورصيه كقاعدة.","طلعي الكريمة مع الفرماج والسكر.","فرغيها فوق البسكويت وبرديها 4 ساعات."] },
    { id: 106, name: "موس الشوكولا", category: "dessert", youtube: "https://www.youtube.com/results?search_query=موس+الشوكولا", ingredients: ["شوكولا","بيض","سكر","زبدة"], instruction: ["ذوبي الشوكولا مع الزبدة.","خلطي مع صفار البيض والسكر.","طلعي بياض البيض كالثلج وادمجيه برفق."] },
    { id: 107, name: "مسكوتشو", category: "dessert", youtube: "https://www.youtube.com/results?search_query=مسكوتشو+جزائري", ingredients: ["فرينة","بيض","سكر","زيت","حليب","خميرة"], instruction: ["اخفقي البيض والسكر جيداً.","ضيفي الزيت والحليب ثم الفرينة والخميرة.","طيبيها في الكوشة حتى تنتفخ وتتحمر."] },
    { id: 108, name: "طمينة", category: "dessert", youtube: "https://www.youtube.com/results?search_query=الطمينة+الجزائرية", ingredients: ["سميد","عسل","زبدة","قرفة"], instruction: ["حمسي السميد المتوسط حتى يأخذ لوناً ذهبياً.","ذوبي الزبدة والعسل.","خلطي السميد مع الخليط وزيني بالقرفة."] },
    { id: 109, name: "قلب اللوز", category: "dessert", youtube: "https://www.youtube.com/results?search_query=قلب+اللوز+المحلات", ingredients: ["سميد","سكر","ماء زهر","لوز","زبدة"], instruction: ["خلطي السميد الخشن مع السكر وماء الزهر وخليه يرتاح.","ديريه في السنيوة وطيبيه حتى يحمار.","شربيه مليح بالشاربات."] },
    { id: 110, name: "لي كريب", category: "dessert", youtube: "https://www.youtube.com/results?search_query=لي+كريب+بالشوكولا", ingredients: ["فرينة","حليب","بيض","زبدة","سكر","شوكولا"], instruction: ["خلطي الفرينة، الحليب، البيض والسكر في الخلاط.","طيبي الكريب في مقلاة غير لاصقة.","اطليها بشوكولا الطلاء ولفيها."] },
    { id: 111, name: "بغرير", category: "dessert", youtube: "https://www.youtube.com/results?search_query=بغرير+جزائري+ناجح", ingredients: ["سميد","فرينة","خميرة","ماء","عسل","زبدة"], instruction: ["ارحي المقادير في الخلاط مع الماء الدافئ.","خليه يخمر قليلاً ثم طيبيه في مقلة.","اسقيه بخليط العسل والزبدة."] },
    { id: 112, name: "سلطة فواكه", category: "dessert", youtube: "https://www.youtube.com/results?search_query=سلطة+فواكه+منعشة", ingredients: ["تفاح","بنان","فراولة","برتقال","سكر","ماء زهر"], instruction: ["قطعي الفواكه مربعات صغيرة.","ضيفي لها القليل من السكر وعصير البرتقال وماء الزهر.","قدميها باردة جداً."] }
];

// تصنيف المقادير و الأساسيات
const categorizedMealIngredients = {
    "🥩 لحوم ودواجن": ["دجاج","لحم","لحم مفروم","كبدة","سمك","طون","مرقاز"],
    "🥦 خضر وبقوليات": ["بصل","ثوم","طماطم","طماطم مصبرة","فلفل","فلفل حار","بطاطا","زرودية","قرعة","لفت","زيتون","حمص","عدس","لوبيا","جلبانة","قرنون","بسباس","فول","كرمب","سلق","شامبنيون","ليمون","ليمون مرقد"],
    "🍝 عجائن ومخبوزات": ["فريك","كسكسي","رشتة","تليتلي","مقرون","سباغيتي","بركوكس","ديول","خبز تورتيا","خبز عربي","خبز بانيني","فرينة","سميد"]
};

const categorizedDessertIngredients = {
    "🥛 أساسيات وتحلية": ["حليب","كريمة","شونتيي","سكر","عسل","بيض","زبدة","أرز مطحون","فرينة","سميد","مايزينا","جيلاتين","خميرة","خميرة كيميائية"],
    "🍯 منكهات وإضافات": ["ماء زهر","فانيليا","قرفة","شوكولا","كاكاو","بسكويت","قهوة","فرماج","معجون","غرس"],
    "🍎 فواكه ومكسرات": ["لوز","كاوكاو","جوز","جلجلان","ليمون","برتقال","تفاح","بنان","فراولة","زبيب","برقوق"]
};

// الأساسيات لا تظهر لكن تحسب لرفع النسبة
const pantryStaples = ["زيت", "زبدة", "ملح", "فلفل أسود", "بصل", "ثوم", "طماطم مصبرة", "سكر", "ماء زهر", "خميرة", "قزبر", "معدنوس"];

const ingredientUnits = {
    "دجاج": "دجاجة أو قطع", "لحم": "500غ", "لحم مفروم": "حسب الرغبة", "بصل": "1 كغ", "ثوم": "رأس",
    "طماطم": "1 كغ", "طماطم مصبرة": "علبة", "بطاطا": "1.5 كغ", "زرودية": "1 كغ", "قرعة": "500غ",
    "لفت": "500غ", "زيتون": "500غ", "حمص": "500غ", "عدس": "500غ", "لوبيا": "500غ", "فريك": "500غ",
    "كسكسي": "1 كغ", "مقرون": "كيس 500غ", "سباغيتي": "كيس 500غ", "بيض": "صفيحة",
    "حليب": "2 لتر", "فرماج": "علبة", "كريمة": "علبة صغيرة", "زبدة": "علبة 250غ",
    "زيت": "قارورة", "قزبر": "ربطة", "معدنوس": "ربطة", "سكر": "1 كغ", "سميد": "كيس", "فرينة": "كيس",
    "ديول": "ربطة", "فلفل": "1 كغ", "ليمون": "1 كغ", "قهوة": "علبة", "بسكويت": "علبة", "كاكاو": "علبة",
    "ماء زهر": "قارورة", "طون": "علبتين", "مرقاز": "500غ", "شامبنيون": "علبة", "جلبانة": "1 كغ", "فراولة": "500غ"
};

// ================================================================
// المتغيرات والتهيئة (Splash + Landing)
// ================================================================
let currentMode        = '';
let currentCategory    = '';
let selectedIngredients = [];
let currentPlan        = [];
let catalogFilter      = 'all';

let floatingTimerInterval = null;
let floatingTimerSeconds  = 0;
let isFloatingTimerRunning = false;

window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) themeBtn.innerText = savedTheme === 'dark' ? '☀️' : '🌙';
    
    loadCustomRecipes();

    // 1. إظهار شاشة التحميل (Loading) دائماً وتختفي بعد ثانية ونصف
    const splash = document.getElementById('splash-screen');
    if (splash) {
        setTimeout(() => {
            splash.classList.add('hide');
            setTimeout(() => { splash.remove(); }, 500);
        }, 1500);
    }
    
    // ملاحظة: لم نعد نستخدم الذاكرة لإخفاء واجهة الأندرويد.
    // ستظهر واجهة الأندرويد دائماً كواجهة أولى لأنها تملك كلاس "active" في الـ HTML.
};

function toggleTheme() {
    const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.getElementById('themeBtn').innerText = newTheme === 'dark' ? '☀️' : '🌙';
}

function showToast(msg, type = 'info', duration = 2800) {
    let container = document.getElementById('toast-container');
    const toast = document.createElement('div'); toast.className = `toast ${type}`; toast.textContent = msg;
    toast.style.cssText = "background: #333; color: #fff; padding: 10px 20px; border-radius: 8px; margin-bottom: 10px; text-align: right; box-shadow: 0 4px 10px rgba(0,0,0,0.2);";
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 350); }, duration);
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id); if(target) target.classList.add('active');
    window.scrollTo(0, 0);
}
function goBack(id) { showScreen(id); }

// ================================================================
// اختيار المقادير (التقسيم والمكونات الحرة)
// ================================================================
function setMode(mode, category) {
    currentMode = mode;
    currentCategory = category;
    selectedIngredients = [];
    const title = category === 'meal' ? '🥘 اختاري المقادير (مقسمة لراحتك):' : '🧁 اختاري مقادير التحلية:';
    document.getElementById('ingredientsTitle').innerText = title;
    renderIngredients();
    showScreen('screen-ingredients');
}

function renderIngredients() {
    const list = document.getElementById('ingredientsList');
    list.innerHTML = '';
    const categories = currentCategory === 'meal' ? categorizedMealIngredients : categorizedDessertIngredients;

    for (const [catName, ings] of Object.entries(categories)) {
        const titleDiv = document.createElement('div');
        titleDiv.className = 'ingredient-category-title';
        titleDiv.innerText = catName;
        list.appendChild(titleDiv);

        ings.sort().forEach(ing => {
            const div = document.createElement('div');
            div.className = 'ingredient-item';
            div.innerText = ing;
            div.onclick = () => {
                div.classList.toggle('selected');
                if (selectedIngredients.includes(ing)) selectedIngredients = selectedIngredients.filter(i => i !== ing);
                else selectedIngredients.push(ing);
            };
            list.appendChild(div);
        });
    }
}

function addMainCustomIngredient() {
    const input = document.getElementById('mainCustomIngredientInput');
    const val = input.value.trim();
    if (!val) { showToast('⚠️ اكتبي اسم المكون أولاً', 'error'); return; }
    
    selectedIngredients.push(val);
    const list = document.getElementById('ingredientsList');
    const div = document.createElement('div');
    div.className = 'ingredient-item selected'; 
    div.innerText = val;
    div.onclick = () => {
        div.classList.toggle('selected');
        if (selectedIngredients.includes(val)) selectedIngredients = selectedIngredients.filter(i => i !== val);
        else selectedIngredients.push(val);
    };
    list.insertBefore(div, list.firstChild);
    input.value = '';
    showToast(`✅ تم إضافة "${val}" للمقادير!`, 'success');
}

// ================================================================
// التوليد (تطابق 80%، جدول يبدأ من اليوم، وبدون صور)
// ================================================================
function generatePlan() {
    if (selectedIngredients.length === 0) { showToast('⚠️ اختاري مقدار واحد على الأقل!', 'error'); return; }

    const effectiveIngredients = [...new Set([...selectedIngredients, ...pantryStaples])];

    let scoredRecipes = recipesDB
        .filter(r => r.category === currentCategory)
        .map(r => {
            let matchedIngs = r.ingredients.filter(ing => effectiveIngredients.includes(ing));
            let matchRatio = matchedIngs.length / r.ingredients.length;
            return { ...r, matchRatio };
        })
        .filter(r => r.matchRatio >= 0.8) // نسبة التوافق 80% 
        .sort((a, b) => b.matchRatio - a.matchRatio);

    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';
    currentPlan = [];

    if (scoredRecipes.length === 0) {
        document.getElementById('resultTitle').innerText = 'النتيجة 😕';
        container.innerHTML = `<div class="card" style="text-align:center; padding: 30px;"><h3 style="color:var(--primary);">ماكانش وصفة تطابق مقاديرك بنسبة 80%!</h3><p>زيدي خيري واش عندك في الكوزينة.</p><button class="btn-secondary" onclick="goBack('screen-ingredients')" style="margin-top:20px;">🔙 رجوع</button></div>`;
        document.getElementById('btn-shopping').style.display = 'none';
        showScreen('screen-result'); return;
    }

    scoredRecipes.sort((a, b) => { if (a.matchRatio === b.matchRatio) return Math.random() - 0.5; return 0; });

    if (currentMode === 'daily') {
        window.currentScoredRecipes = scoredRecipes;
        window.currentRecipeIndex = 0;
        renderDailyRecipeCard();
    } else {
        const allDays = ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
        const todayIdx = new Date().getDay();
        const dynamicDays = [...allDays.slice(todayIdx), ...allDays.slice(0, todayIdx)];

        document.getElementById('btn-shopping').style.display = 'block';
        document.getElementById('resultTitle').innerText = 'جدول الأسبوع 📅';
        
        dynamicDays.forEach((day, i) => {
            const recipe = scoredRecipes[i % scoredRecipes.length];
            currentPlan.push(recipe);
            const color = currentCategory === 'meal' ? 'var(--primary)' : 'var(--dessert)';
            container.innerHTML += `
                <div class="weekly-item" style="border-right-color:${color}; padding: 15px;">
                    <div style="flex-grow: 1;">
                        <span class="day-label" style="font-size:12px; display:block; margin-bottom: 5px;">${day}</span>
                        <span class="meal-name" style="font-size:16px; font-weight:bold;">${recipe.name}</span>
                    </div>
                    <button class="btn-small" onclick="showRecipe(${recipe.id})">وصفة</button>
                </div>`;
        });
        showScreen('screen-result');
    }
}

function renderDailyRecipeCard() {
    const container = document.getElementById('resultsContainer');
    const recipe = window.currentScoredRecipes[window.currentRecipeIndex];
    currentPlan = [recipe];
    document.getElementById('btn-shopping').style.display = 'none';
    document.getElementById('resultTitle').innerText = 'اقتراح اليوم 🍽️';
    
    let matchColor = recipe.matchRatio === 1 ? '#2EBB6E' : '#f39c12';
    let skipBtn = window.currentScoredRecipes.length > 1 ? `<button class="btn-skip" onclick="nextDailyRecipe()">⏭️ ماعجبتنيش؟ أعطيني وصفة أخرى</button>` : '';

    container.innerHTML = `
        <div class="card" style="padding: 25px;">
            <h2 style="color:${currentCategory === 'meal' ? 'var(--primary)' : 'var(--dessert)'};font-size:24px;margin-bottom:15px;">${recipe.name}</h2>
            <p style="color: ${matchColor}; font-size: 15px; margin-bottom: 20px; font-weight: bold;">
                نسبة التطابق مع ثلاجتك: ${Math.round(recipe.matchRatio * 100)}%
            </p>
            <button class="btn-primary" onclick="showRecipe(${recipe.id})">طريقة التحضير 🍳</button>
            ${skipBtn}
        </div>`;
    showScreen('screen-result');
}

function nextDailyRecipe() {
    window.currentRecipeIndex = (window.currentRecipeIndex + 1) % window.currentScoredRecipes.length;
    renderDailyRecipeCard();
}

// ================================================================
// عرض الوصفة + المؤقت العائم
// ================================================================
function showRecipe(id) {
    const r = recipesDB.find(x => x.id === id);
    if (!r) return;

    document.getElementById('modalTitle').innerText = r.name;
    document.getElementById('modalIngredients').innerText = '🧂 المقادير: ' + r.ingredients.join(' · ');
    
    let stepsHtml = Array.isArray(r.instruction) 
        ? r.instruction.map(step => `<li>${step}</li>`).join('')
        : r.instruction.split('،').filter(s => s.trim() !== '').map(step => `<li>${step.trim()}</li>`).join('');
    
    let youtubeBtn = r.youtube ? `<a href="${r.youtube}" target="_blank" class="btn-youtube" style="display:block; margin-top:20px;">📺 مشاهدة على اليوتيوب</a>` : '';

    document.getElementById('modalBody').innerHTML = `<ol>${stepsHtml}</ol> ${youtubeBtn}`;

    const startBtn = document.querySelector('.timer-start');
    if (startBtn) {
        startBtn.onclick = () => {
            startFloatingTimer(30); // 30 دقيقة افتراضية بما أننا حذفنا الوقت
            closeModal('recipeModal'); 
        };
    }

    document.getElementById('recipeModal').style.display = 'block';
}

function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function handleModalBgClick(e, id) { if (e.target.id === id) closeModal(id); }

function startFloatingTimer(minutes) {
    if (isFloatingTimerRunning) { clearInterval(floatingTimerInterval); }
    floatingTimerSeconds = minutes * 60;
    isFloatingTimerRunning = true;
    document.getElementById('floating-timer').style.display = 'flex';
    updateFloatingTimerDisplay();

    floatingTimerInterval = setInterval(() => {
        floatingTimerSeconds--;
        updateFloatingTimerDisplay();
        if (floatingTimerSeconds <= 0) {
            clearInterval(floatingTimerInterval);
            isFloatingTimerRunning = false;
            document.getElementById('floatingTimerDisplay').innerText = '00:00';
            showToast('⏰ راهو طاب الأكل يا مرا!', 'success', 5000);
            let audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.play().catch(e=>console.log(e));
        }
    }, 1000);
}

function updateFloatingTimerDisplay() {
    const m = Math.floor(floatingTimerSeconds / 60); const s = floatingTimerSeconds % 60;
    document.getElementById('floatingTimerDisplay').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function stopFloatingTimer() {
    clearInterval(floatingTimerInterval);
    isFloatingTimerRunning = false;
    document.getElementById('floating-timer').style.display = 'none';
}

// ================================================================
// قائمة القضيان 
// ================================================================
function generateShoppingList() {
    const all = []; currentPlan.forEach(r => { if (r.ingredients) all.push(...r.ingredients); }); 
    const unique = [...new Set(all)];
    const container = document.getElementById('shoppingListItems'); if(!container) return;
    
    container.innerHTML = unique.map(ing => {
        const unit = ingredientUnits[ing] || 'حسب الحاجة';
        return `<li class="shopping-item" onclick="this.classList.toggle('bought')" style="margin-bottom:8px; padding:10px; background:#f9f9f9; border-radius:8px; display:flex; align-items:center; gap:10px;">
                    <span class="checkbox-circle" style="width:20px; height:20px; border:2px solid var(--primary); border-radius:50%;"></span>
                    <span style="font-weight:bold; font-size:16px;">${ing}</span>
                    <span style="color:var(--text-muted); font-size:12px; margin-right:auto;">(${unit})</span>
                </li>`;
    }).join('');
    document.getElementById('shoppingModal').style.display = 'block';
}

// ================================================================
// الحفظ والمشاركة والطباعة
// ================================================================
function saveCurrentPlan() {
    if (!currentPlan.length) return;
    let saved = JSON.parse(localStorage.getItem('myPlans') || '[]');
    saved.push({ type: currentMode, category: currentCategory, date: new Date().toLocaleDateString('ar-DZ'), items: currentPlan.map(p => p.name) });
    localStorage.setItem('myPlans', JSON.stringify(saved)); showToast('✅ تم حفظ الجدول بنجاح!', 'success'); setTimeout(() => showScreen('screen-welcome'), 1500);
}

function showSavedMenus() {
    const saved = JSON.parse(localStorage.getItem('myPlans') || '[]'); const list = document.getElementById('savedList'); list.innerHTML = '';
    if (!saved.length) { list.innerHTML = `<p style="padding:20px; text-align:center;">ماكانش جداول محفوظة بعد</p>`; showScreen('screen-saved'); return; }
    for (let i = saved.length - 1; i >= 0; i--) {
        const plan = saved[i]; const isMeal = plan.category === 'meal'; const borderColor = isMeal ? 'var(--primary)' : 'var(--dessert)';
        let itemsHtml = plan.type === 'daily' ? `<div style="margin-top:6px;color:${borderColor};font-weight:bold;">${plan.items[0]}</div>` : `<ul style="font-size:14px; margin-top:5px; padding-right:20px;">${plan.items.slice(0,3).map(item => `<li>${item}</li>`).join('')}</ul>`;
        const li = document.createElement('li'); li.style.borderRight = `5px solid ${borderColor}`; li.style.background = "var(--card-bg)"; li.style.margin = "10px 0"; li.style.padding = "15px"; li.style.borderRadius = "10px"; li.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
        li.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:flex-start;"><div><strong>${plan.type === 'daily' ? 'يومي' : 'أسبوعي'} - ${plan.date}</strong></div><div style="display:flex; gap:5px;"><button class="btn-small" style="background:#25D366" onclick="shareSavedPlan(${i})">📲</button><button class="btn-small" style="background:var(--primary);opacity:0.8" onclick="confirmDeletePlan(${i})">🗑️</button></div></div>${itemsHtml}`;
        list.appendChild(li);
    }
    showScreen('screen-saved');
}

function confirmDeletePlan(index) { let saved = JSON.parse(localStorage.getItem('myPlans') || '[]'); saved.splice(index, 1); localStorage.setItem('myPlans', JSON.stringify(saved)); showToast('🗑️ تم حذف الجدول', 'info'); showSavedMenus(); }
function shareSavedPlan(index) { const saved = JSON.parse(localStorage.getItem('myPlans') || '[]'); const target = saved[index]; if (!target) return; const enriched = target.items.map(name => recipesDB.find(r => r.name === name) || { name, ingredients: [] }); performShare(enriched, `جدول محفوظ (${target.category === 'meal' ? 'وجبات' : 'تحليات'})`); }
function shareCurrentPlan() { performShare(currentPlan, `جدول كوزينتي (${currentCategory === 'meal' ? 'وجبات' : 'تحليات'})`); }
function performShare(planList, title) { let text = `👩‍🍳 *${title}*\n\n`; planList.forEach((r, i) => { text += `*${r.name}*\n`; }); text += `\n❤️ بصحتكم ولهنا! — كوزينتي`; if (navigator.share) navigator.share({ title: 'كوزينتي', text }).catch(() => {}); else window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank'); }
function printCurrentPlan() { preparePrintTable(currentPlan, `جدول كوزينتي — ${new Date().toLocaleDateString('ar-DZ')}`); handlePrint(); }
function preparePrintTable(list, title) { const tbody = document.getElementById('printTableBody'); if(!tbody) return; tbody.innerHTML = ''; const dateEl = document.getElementById('printDate'); if(dateEl) dateEl.innerText = title; list.forEach((r, i) => { tbody.innerHTML += `<tr><td style="text-align:center;">يوم ${i+1}</td><td style="font-weight:bold">${r.name}</td><td>${r.ingredients ? r.ingredients.join('، ') : ''}</td></tr>`; }); }
function handlePrint() { document.body.classList.add('printing-mode'); setTimeout(() => { window.print(); setTimeout(() => document.body.classList.remove('printing-mode'), 1000); }, 100); }

// ================================================================
// الكتالوج وإضافة الوصفات 
// ================================================================
function showAllRecipes() { catalogFilter = 'all'; renderCatalog(); showScreen('screen-catalog'); }
function filterCatalog(cat, btn) { catalogFilter = cat; document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); renderCatalog(); }
function searchCatalog() { renderCatalog(); }
function renderCatalog() {
    const query = (document.getElementById('searchBox')?.value || '').trim().toLowerCase();
    const filtered = recipesDB.filter(r => { const matchCat = catalogFilter === 'all' || r.category === catalogFilter; const matchSearch = !query || r.name.includes(query) || r.ingredients.some(i => i.includes(query)); return matchCat && matchSearch; });
    const container = document.getElementById('catalogContainer'); if(!container) return;
    if (!filtered.length) { container.innerHTML = `<p style="text-align:center; padding:20px;">ما لقيناش وصفة مناسبة</p>`; return; }
    container.innerHTML = filtered.map(r => { const isDessert = r.category === 'dessert'; return `<div class="catalog-card ${isDessert ? 'dessert-card' : ''}" onclick="showRecipe(${r.id})" style="border: 1px solid var(--border); padding:15px; border-radius:10px; margin-bottom:10px; background: var(--card-bg); cursor:pointer;"><div style="font-weight:bold; font-size:16px; margin-bottom:8px;">${isDessert ? '🧁' : '🥘'} ${r.name}</div><div style="font-size:12px; color:var(--text-muted);">${r.ingredients.slice(0, 4).join(' · ')}</div></div>`; }).join('');
}

function showAddRecipeScreen() {
    document.getElementById('newRecipeName').value = ''; document.getElementById('newRecipeInstructions').value = ''; document.getElementById('newRecipeCategory').value = 'meal';
    updateNewRecipeIngredients(); showScreen('screen-add');
}

function addCustomIngredientToForm() {
    const input = document.getElementById('customIngredientInput'); const val = input.value.trim();
    if (!val) { showToast('⚠️ اكتبي اسم المكون أولاً', 'error'); return; }
    const grid = document.getElementById('newRecipeIngredients'); const div = document.createElement('div'); div.className = 'ingredient-item selected'; div.innerText = val; div.onclick = () => div.classList.toggle('selected'); grid.insertBefore(div, grid.firstChild); input.value = '';
}

function updateNewRecipeIngredients() {
    const cat = document.getElementById('newRecipeCategory').value; let flatList = []; const sourceObj = cat === 'meal' ? categorizedMealIngredients : categorizedDessertIngredients; Object.values(sourceObj).forEach(arr => flatList.push(...arr));
    const grid = document.getElementById('newRecipeIngredients'); grid.innerHTML = ''; flatList.sort().forEach(ing => { const div = document.createElement('div'); div.className = 'ingredient-item'; div.innerText = ing; div.onclick = () => div.classList.toggle('selected'); grid.appendChild(div); });
}

function addNewRecipe() {
    const name = document.getElementById('newRecipeName').value.trim(); const category = document.getElementById('newRecipeCategory').value;
    const instruction = document.getElementById('newRecipeInstructions').value.trim(); const selected = [...document.querySelectorAll('#newRecipeIngredients .ingredient-item.selected')].map(el => el.innerText);
    if (!name || !instruction || !selected.length) { showToast('⚠️ يرجى إكمال كل البيانات واختيار المقادير!', 'error'); return; }
    const customs = JSON.parse(localStorage.getItem('customRecipes') || '[]'); const newId = Date.now();
    // 🔴 إزالة الـ cookTime من هنا تماماً
    const newRecipe = { id: newId, name, category, ingredients: selected, instruction: instruction.split('\n') };
    customs.push(newRecipe); localStorage.setItem('customRecipes', JSON.stringify(customs)); recipesDB.push(newRecipe);
    showToast(`✅ تم حفظ الوصفة!`, 'success'); showScreen('screen-welcome');
}

function loadCustomRecipes() {
    const customs = JSON.parse(localStorage.getItem('customRecipes') || '[]');
    customs.forEach(cr => { if (!recipesDB.find(r => r.id === cr.id)) recipesDB.push(cr); });
}
function downloadAndroidApp() {
    // ضع رابط جوجل درايف الخاص بك هنا
    const googleDriveLink = "https://drive.google.com/file/d/1Ra1K62QTAOobr5u8GAiuWRtiwaeN_ym2/view?usp=drive_link";

    // إظهار رسالة تنبيه طمأنة للمستخدم قبل التوجه للرابط
    showToast("جاري توجيهك لصفحة التحميل الآمنة عبر Google Drive...", "info", 5000);

    // فتح الرابط في نافذة جديدة
    setTimeout(() => {
        window.open(googleDriveLink, "_blank");
    }, 1500);
}
// الكشف عن نوع الجهاز (ايفون أو أندرويد)
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const androidZone = document.getElementById('android-download-zone');
const iosZone = document.getElementById('ios-instructions-zone');

if (isIOS) {
    if (androidZone) androidZone.style.display = 'none';
    if (iosZone) iosZone.style.display = 'block';
}