/**
 * IMKON PLATFORMASI - Kunlik va soatlik yordamchilar ekotizimi
 * Doskadagi yozuvlar asosida:
 * 1. Yordamchi: Vazifasi (tozalaydi, yordam beradi) va necha soat ishlashi aniq belgilangan
 * 2. Ish haqi: Bir kunda 150 ming gacha to'lash kerak (kunbay / soatbay)
 * 3. Qayerga borish: Hudud va aniq manzil (Misol: Farg'ona viloyati ichida)
 */

// 1. DATA STORE
const APP_DATA = {
  // Kunlik va soatlik yordamchi ishlari (Jobs)
  jobs: [
    {
      id: 'job-1',
      title: 'Xonadon va hovlini tozalashga yordamchi',
      category: 'tozalash',
      categoryLabel: 'Tozalash ishlari',
      employer: 'Shaxnoza opa (Xonadon egasi)',
      employerPhone: '+998 90 555-12-34',
      location: 'Farg‘ona viloyati, Farg‘ona shahar',
      addressDetail: 'Sayilgoh ko‘chasi, 24-uy (Mo‘ljal: Viloyat teatri yaqini)',
      hours: '5 soat (13:00 dan 18:00 gacha)',
      hoursCount: 5,
      wage: '150 000 so‘m / kun',
      wageAmount: 150000,
      paymentType: 'Kun yakunida naqd yoki kartaga',
      taskDuty: 'Xonalarni changdan tozalaydi, pol yuvadi, hovlini supurib tartibga keltiradi.',
      requirements: ['Xushmuomala va chaqqon bo‘lish', 'Tozalikni sevish', 'O‘z vaqtida yetib kelish'],
      perks: ['Issiq choy va tushlik beriladi', 'Barcha tozalash vositalari xonadonda bor'],
      posted: '10 daqiqa oldin',
      status: 'Faol'
    },
    {
      id: 'job-2',
      title: 'Do‘konga mahsulotlarni qabul qilish va taxlashga yordamchi',
      category: 'yordamchi',
      categoryLabel: 'Do‘kon yordamchisi',
      employer: '«Baraka» savdo markazi (Azizbek aka)',
      employerPhone: '+998 91 120-44-55',
      location: 'Farg‘ona viloyati, Marg‘ilon shahar',
      addressDetail: 'Mustaqillik ko‘chasi, 8-do‘kon (Mo‘ljal: Yangi bozor ro‘parasida)',
      hours: '6 soat (10:00 dan 16:00 gacha)',
      hoursCount: 6,
      wage: '140 000 so‘m / kun',
      wageAmount: 140000,
      paymentType: 'Ish tugashi bilan darhol to‘lanadi',
      taskDuty: 'Keltirilgan yengil qutilarni tushirish, vitrinaga terish va do‘kon ichini tozalash.',
      requirements: ['Chaqqon va jismoniy baquvvat', 'Mas’uliyatli'],
      perks: ['Do‘kondan kundalik mahsulotlarga chegirma', 'Tushlik beriladi'],
      posted: '25 daqiqa oldin',
      status: 'Faol'
    },
    {
      id: 'job-3',
      title: 'Kvartirani ta’mirlashdan keyin tozalashga 2 nafar yordamchi',
      category: 'tozalash',
      categoryLabel: 'Tozalash ishlari',
      employer: 'Dilshodbek (Kvartira egasi)',
      employerPhone: '+998 93 456-78-90',
      location: 'Farg‘ona viloyati, Qo‘qon shahar',
      addressDetail: 'Temiryo‘lchilar mavzesi, 14-dom (Mo‘ljal: Vokzal yaqini)',
      hours: '7 soat (09:00 dan 16:00 gacha)',
      hoursCount: 7,
      wage: '150 000 so‘m / har biriga',
      wageAmount: 150000,
      paymentType: 'Naqd pulda to‘lanadi',
      taskDuty: 'Remontdan chiqqan derazalar, pollar va changlarni artadi, tozalaydi va chiqindilarni qoplaydi.',
      requirements: ['Deraza va plitkalarni tozalashni bilish', 'Tozalash anjomlari bilan ishlash'],
      perks: ['Tushlik va yo‘lkira xarajati qoplanadi'],
      posted: '1 soat oldin',
      status: 'Faol'
    },
    {
      id: 'job-4',
      title: 'Restoranga idish yuvuvchi va oshxona yordamchisi',
      category: 'oshxona',
      categoryLabel: 'Oshxona yordamchisi',
      employer: '«Ziyofat» restorani ma’muriyati',
      employerPhone: '+998 73 244-11-22',
      location: 'Farg‘ona viloyati, Farg‘ona shahar',
      addressDetail: 'Al-Farg‘oniy ko‘chasi, 67-bino',
      hours: '8 soat (11:00 dan 19:00 gacha)',
      hoursCount: 8,
      wage: '150 000 so‘m / kun',
      wageAmount: 150000,
      paymentType: 'Har kuni soat 19:00 da naqd',
      taskDuty: 'Oshxona idishlarini yuvadi, sabzavotlarni tozalashda oshpazga yordam beradi, oshxonani toza saqlaydi.',
      requirements: ['Ozoda va tartibli bo‘lish', 'Tibbiy daftarcha (bo‘lsa yaxshi)'],
      perks: ['Restoran hisobidan 2 mahal bepul ovqat'],
      posted: '2 soat oldin',
      status: 'Faol'
    },
    {
      id: 'job-5',
      title: 'Bog‘bon yordamchisi: Bog‘ni tozalash va daraxt oqlash',
      category: 'bogbon',
      categoryLabel: 'Hovli va Bog‘',
      employer: 'Mansurbek aka',
      employerPhone: '+998 90 777-33-11',
      location: 'Farg‘ona viloyati, Rishton tumani',
      addressDetail: 'Chinorlar MFY, 42-hovli',
      hours: '6 soat (08:00 dan 14:00 gacha)',
      hoursCount: 6,
      wage: '130 000 so‘m / kun',
      wageAmount: 130000,
      paymentType: 'Karta yoki naqd',
      taskDuty: 'Hovlidagi barg va xazonlarni yig‘adi, daraxtlarni oqlaydi, ariqlarni tozalaydi.',
      requirements: ['Mehnatsevar va chaqqon yigitlar'],
      perks: ['Hovli egasidan issiq ovqat va mevalar'],
      posted: '3 soat oldin',
      status: 'Faol'
    },
    {
      id: 'job-6',
      title: 'Mebel sexiga yuklash va tushirishga yordamchi',
      category: 'yordamchi',
      categoryLabel: 'Usta yordamchisi',
      employer: '«Farg‘ona Mebel Servis»',
      employerPhone: '+998 91 988-77-66',
      location: 'Farg‘ona viloyati, Quvasoy shahar',
      addressDetail: 'Sanoatchilar ko‘chasi, 12-baza',
      hours: '6 soat (13:00 dan 19:00 gacha)',
      hoursCount: 6,
      wage: '150 000 so‘m / kun',
      wageAmount: 150000,
      paymentType: 'Kun oxirida to‘liq hisob-kitob',
      taskDuty: 'Tayyor mebellarni qadoqlaydi, mashinaga ortish va tushirishda yordam beradi.',
      requirements: ['Jismoniy baquvvatlik', 'Ehtiyotkorlik'],
      perks: ['Choyxona tushligi bilan ta’minlanadi'],
      posted: '4 soat oldin',
      status: 'Faol'
    }
  ],

  // Ro'yxatdan o'tgan yordamchilar (Helpers Catalog / Freelancers)
  helpers: [
    {
      id: 'hlp-1',
      name: 'Nodiraxon Karimova',
      role: 'Xonadon va ofis tozalash bo‘yicha tajribali yordamchi',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80',
      location: 'Farg‘ona viloyati, Farg‘ona shahar',
      hoursAvailable: 'Kuniga 4 - 8 soat (Erkin grafik)',
      rateDaily: '150 000 so‘mgacha / kun',
      phone: '+998 90 123-45-01',
      rating: '5.0 (28 ta xonadon minnatdor)',
      skills: ['Uylarni tozalash', 'Deraza yuvish', 'Changlarni artish', 'Dazmol qilish'],
      bio: 'Farg‘ona shahri bo‘yicha xonadonlarni ozoda va sifatli tozalayman. Ishimni mas’uliyat bilan 4-6 soat ichida bajaraman.'
    },
    {
      id: 'hlp-2',
      name: 'Bahodir Yusupov',
      role: 'Usta yordamchisi, yuk tashuvchi va bog‘ ishlari',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80',
      location: 'Farg‘ona viloyati, Marg‘ilon shahar',
      hoursAvailable: 'Kuniga 5 - 8 soat',
      rateDaily: '140 000 - 150 000 so‘m / kun',
      phone: '+998 91 345-67-02',
      rating: '4.95 (34 ta buyurtma)',
      skills: ['Yuk tashish', 'Daraxt oqlash', 'Hovli tozalash', 'Qurilish yordami'],
      bio: 'Marg‘ilon va Farg‘ona shaharlarida istalgan jismoniy yordam, hovli tartibga keltirish va remont yordamchisi ishlarini bajaraman.'
    },
    {
      id: 'hlp-3',
      name: 'Gulnoza Mamajonova',
      role: 'Oshxona va to‘yxona yordamchisi, tozalovchi',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80',
      location: 'Farg‘ona viloyati, Qo‘qon shahar',
      hoursAvailable: 'Kuniga 4 - 7 soat',
      rateDaily: '130 000 - 150 000 so‘m / kun',
      phone: '+998 93 890-12-03',
      rating: '4.9 (19 ta buyurtma)',
      skills: ['Idish-tovoq yuvish', 'Sabzavot tozalash', 'Restoran tozaligi'],
      bio: 'Qo‘qon shahridagi restoran, kafelar va to‘y tadbirlarida oshxona yordamchisi va tozalovchi sifatida sifatli xizmat ko‘rsataman.'
    }
  ],

  // Ta'lim va amaliy qo'llanmalar (Education)
  educationGuides: [
    {
      id: 'edu-guide-1',
      title: 'Xonadon va ofislarni professional tozalash (Cleaning) sirlari',
      provider: 'Imkon Kasb Markazi (Farg‘ona filiali)',
      price: 'Mutlaqo Bepul',
      badge: 'Amaliy Yo‘riqnoma',
      duration: '4 ta video dars',
      description: 'Zamonaviy tozalash vositalaridan to‘g‘ri foydalanish, dog‘larni ketkazish, deraza va plitkalarni iz qoldirmasdan yuvish usullari.',
      actionText: 'Darsni boshlash'
    },
    {
      id: 'edu-guide-2',
      title: 'Mijozlar bilan xushmuomala muloqot va mehnat xavfsizligi',
      provider: 'Imkon Ta’lim Loyihasi',
      price: 'Bepul',
      badge: 'Xulq-atvor & Odob',
      duration: '2 soatlik seminar',
      description: 'Ish beruvchi bilan o‘zaro ishonchli muloqot qurish, narxni kelishish va mehnat jarayonida xavfsizlik qoidalariga rioya qilish.',
      actionText: 'Yo‘riqnomani o‘qish'
    },
    {
      id: 'edu-guide-3',
      title: 'Usta yordamchisi bo‘lish va qurilish asboblari bilan ishlash',
      provider: 'Farg‘ona Texnik Kolleji O‘qituvchilari',
      price: 'Bepul qo‘llanma',
      badge: 'Texnik Ko‘nikma',
      duration: 'Amaliy mashg‘ulot',
      description: 'Perforator, bolgarka va asosiy ta’mirlash uskunalarini xavfsiz ishlatish, qurilishda sifatli yordam ko‘rsatish asoslari.',
      actionText: 'O‘rganish'
    }
  ]
};

// 2. STATE MANAGEMENT
class ImkonState {
  constructor() {
    this.currentTab = 'home';
    this.savedItems = JSON.parse(localStorage.getItem('imkon_saved_items')) || ['job-1', 'job-3'];
    this.applications = JSON.parse(localStorage.getItem('imkon_applications')) || [
      {
        id: 'app-1',
        title: 'Xonadon va hovlini tozalashga yordamchi',
        employer: 'Shaxnoza opa (Farg‘ona)',
        date: 'Bugun, 10:15',
        status: 'Aloqaga chiqildi',
        wage: '150 000 so‘m / kun'
      }
    ];
    this.notifications = [
      {
        id: 'notif-1',
        title: 'Farg‘onada yangi ish e’loni!',
        desc: 'Sayilgoh ko‘chasida tozalashga 150 000 so‘mlik yordamchi kerak.',
        time: '5 daqiqa oldin',
        read: false
      },
      {
        id: 'notif-2',
        title: 'Ish beruvchi raqami saqlandi',
        desc: 'Shaxnoza opa bilan bog‘lanish ma’lumotlari arizalaringizga qo‘shildi.',
        time: '1 soat oldin',
        read: false
      }
    ];
    this.user = {
      name: 'Sherzodbek Qodirov',
      role: 'Yordamchi mutaxassis (Farg‘ona)',
      phone: '+998 90 765-43-21',
      location: 'Farg‘ona viloyati, Farg‘ona shahar',
      hoursPreferred: 'Kuniga 4 - 8 soat',
      expectedWage: 'Kuniga 150 000 so‘m',
      skills: ['Tozalash ishlari', 'Hovli tartibga solish', 'Yuk tashish', 'Do‘kon yordamchisi'],
      bio: 'Farg‘ona viloyati hududida kunlik tozalash, xonadon ishlari va do‘konlarga yordamchilik ishlarini mas’uliyat bilan bajaraman.'
    };
  }

  save() {
    localStorage.setItem('imkon_saved_items', JSON.stringify(this.savedItems));
    localStorage.setItem('imkon_applications', JSON.stringify(this.applications));
  }

  isSaved(id) {
    return this.savedItems.includes(id);
  }

  toggleSave(id) {
    if (this.isSaved(id)) {
      this.savedItems = this.savedItems.filter(item => item !== id);
      showToast('Saqlanganlardan olib tashlandi', 'info');
    } else {
      this.savedItems.push(id);
      showToast('Ish e’loni saqlandi!', 'success');
    }
    this.save();
    updateSavedCounters();
    renderSavedList();
  }

  addApplication(app) {
    this.applications.unshift(app);
    this.save();
    this.notifications.unshift({
      id: 'notif-' + Date.now(),
      title: 'Bog‘lanish so‘rovi yuborildi!',
      desc: `Siz "${app.title}" bo‘yicha ish beruvchiga aloqa qoldirdingiz.`,
      time: 'Hozirgina',
      read: false
    });
    updateNotificationBadges();
    renderNotificationsList();
    renderApplicationsList();
  }
}

const state = new ImkonState();

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSearch();
  initFilters();
  renderHeroStats();
  renderHomeHighlights();
  renderJobsList();
  renderHelpersList();
  renderEducationGuides();
  renderDashboard();
  updateSavedCounters();
  updateNotificationBadges();
  initModals();
});

// Toast notification helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgColors = {
    success: 'bg-emerald-600 text-white',
    info: 'bg-indigo-600 text-white',
    warning: 'bg-amber-600 text-white',
    error: 'bg-rose-600 text-white'
  };

  toast.className = `toast flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl text-xs font-bold transition-all ${bgColors[type] || bgColors.success}`;
  toast.innerHTML = `
    <span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-black">✓</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// 4. NAVIGATION HANDLERS
function initNavigation() {
  document.querySelectorAll('[data-tab-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-tab-target');
      switchTab(targetTab);
    });
  });

  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

function switchTab(tabName) {
  state.currentTab = tabName;

  document.querySelectorAll('[data-tab-target]').forEach(el => {
    if (el.getAttribute('data-tab-target') === tabName) {
      el.classList.add('active', 'text-indigo-600');
      el.classList.remove('text-slate-600');
    } else {
      el.classList.remove('active', 'text-indigo-600');
      el.classList.add('text-slate-600');
    }
  });

  const views = ['home', 'jobs', 'helpers', 'education', 'dashboard'];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === tabName) {
        el.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        el.classList.add('hidden');
      }
    }
  });

  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.add('hidden');

  if (tabName === 'dashboard') {
    renderDashboard();
  }
}

function updateSavedCounters() {
  const count = state.savedItems.length;
  document.querySelectorAll('.saved-counter-badge').forEach(badge => {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  });
}

function updateNotificationBadges() {
  const count = state.notifications.filter(n => !n.read).length;
  document.querySelectorAll('.notif-counter-badge').forEach(badge => {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  });
}

// 5. HERO & STATS
function renderHeroStats() {
  const container = document.getElementById('hero-stats-container');
  if (!container) return;

  const stats = [
    { label: 'Kunlik Ishlar (Farg‘onada)', value: '180+', icon: '🧹', desc: 'Tozalash va yordamchilik' },
    { label: 'Bir kunda Ish haqi', value: '150 000 gacha', icon: '💰', desc: 'Kafolatlangan kunbay to‘lov' },
    { label: 'Ish Vaqti', value: '3 - 8 soat', icon: '⏱️', desc: 'Aniq belgilangan muddat' },
    { label: 'Faol Yordamchilar', value: '1,250+', icon: '👥', desc: 'Farg‘ona viloyati bo‘ylab' }
  ];

  container.innerHTML = stats.map(s => `
    <div class="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-all flex items-center gap-4">
      <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl shadow-inner shrink-0">
        ${s.icon}
      </div>
      <div>
        <p class="text-xl font-black text-slate-800 tracking-tight">${s.value}</p>
        <p class="text-xs font-bold text-indigo-600">${s.label}</p>
        <p class="text-[11px] text-slate-400">${s.desc}</p>
      </div>
    </div>
  `).join('');
}

// 6. HOME HIGHLIGHTS (DOSKADAGI 3 ELEMENT AKSLANTIRILGAN)
function renderHomeHighlights() {
  const container = document.getElementById('home-recent-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.jobs.slice(0, 4).map(job => `
    <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm opportunity-card flex flex-col justify-between">
      <div>
        <!-- Badges: Vazifasi va Soati -->
        <div class="flex items-center justify-between mb-3">
          <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
            🧹 ${job.categoryLabel}
          </span>
          <button onclick="state.toggleSave('${job.id}')" class="p-1.5 rounded-full hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-colors" title="Saqlash">
            <svg class="w-5 h-5 ${state.isSaved(job.id) ? 'fill-rose-500 text-rose-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>

        <h3 class="text-base font-extrabold text-slate-800 mb-2 leading-snug cursor-pointer hover:text-indigo-600 transition-colors" onclick="openJobDetailModal('${job.id}')">
          ${job.title}
        </h3>

        <!-- Doskadagi asosiy 3 ta ustun: -->
        <div class="space-y-2 mb-4 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-100 text-xs">
          <!-- 1. Vazifasi -->
          <div class="flex items-start gap-2">
            <span class="text-indigo-600 font-bold shrink-0">1. Vazifasi:</span>
            <span class="text-slate-700 font-medium">${job.taskDuty}</span>
          </div>
          <!-- 2. Necha soat ishlashi -->
          <div class="flex items-center gap-2">
            <span class="text-indigo-600 font-bold shrink-0">2. Ish vaqti:</span>
            <span class="text-slate-800 font-bold">⏱️ ${job.hours}</span>
          </div>
          <!-- 3. Qayerga borish -->
          <div class="flex items-start gap-2">
            <span class="text-indigo-600 font-bold shrink-0">3. Qayerga:</span>
            <span class="text-slate-700">📍 ${job.location}</span>
          </div>
        </div>
      </div>

      <!-- Footer: Ish haqi (150 ming gacha) va Bog'lanish -->
      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span class="text-[10px] text-slate-400 font-bold block uppercase">Kunlik Ish haqi:</span>
          <span class="text-sm font-black text-emerald-600">${job.wage}</span>
        </div>
        <button onclick="openApplyModal('${job.id}')" class="px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-100">
          Bog‘lanish
        </button>
      </div>
    </div>
  `).join('');
}

// 7. JOBS (VAKANSIYALAR) LIST & FILTERING
let activeJobFilters = {
  city: 'all',        // 'all' | 'Farg‘ona' | 'Marg‘ilon' | 'Qo‘qon' | 'Rishton' | 'Quvasoy'
  category: 'all',    // 'all' | 'tozalash' | 'yordamchi' | 'oshxona' | 'bogbon'
  searchQuery: ''
};

function renderJobsList() {
  const container = document.getElementById('jobs-list-container');
  if (!container) return;

  const filtered = APP_DATA.jobs.filter(job => {
    const matchesSearch = !activeJobFilters.searchQuery || 
      job.title.toLowerCase().includes(activeJobFilters.searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(activeJobFilters.searchQuery.toLowerCase()) ||
      job.taskDuty.toLowerCase().includes(activeJobFilters.searchQuery.toLowerCase());

    const matchesCity = activeJobFilters.city === 'all' || job.location.includes(activeJobFilters.city);
    const matchesCategory = activeJobFilters.category === 'all' || job.category === activeJobFilters.category;

    return matchesSearch && matchesCity && matchesCategory;
  });

  const countBadge = document.getElementById('jobs-total-count');
  if (countBadge) countBadge.textContent = `${filtered.length} ta yordamchilik ishi mavjud`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-3xl p-12 text-center border border-slate-100">
        <div class="text-4xl mb-3">🔍</div>
        <h4 class="text-base font-bold text-slate-800">Ushbu parametrlar bo‘yicha e’lon topilmadi</h4>
        <p class="text-xs text-slate-500 mt-1">Hududni (Farg‘ona viloyati) yoki ish turini o‘zgartirib ko‘ring.</p>
        <button onclick="resetJobFilters()" class="mt-4 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-xs font-bold">Filtrlarni tozalash</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(job => `
    <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm opportunity-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      
      <div class="space-y-3 flex-grow">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
            🧹 ${job.categoryLabel}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
            💰 ${job.wage}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100">
            ⏱️ ${job.hours}
          </span>
        </div>

        <div>
          <h3 class="text-lg font-black text-slate-900 hover:text-indigo-600 cursor-pointer transition-colors" onclick="openJobDetailModal('${job.id}')">
            ${job.title}
          </h3>
          <p class="text-xs text-slate-500 mt-1">👤 <strong>Ish beruvchi:</strong> ${job.employer}</p>
        </div>

        <!-- Doskadagi 3 parametr -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 text-xs">
          <div>
            <span class="text-slate-400 block font-semibold text-[10px] uppercase">1. Vazifasi:</span>
            <span class="text-slate-800 font-bold">${job.taskDuty}</span>
          </div>
          <div>
            <span class="text-slate-400 block font-semibold text-[10px] uppercase">2. Necha soat ishlashi:</span>
            <span class="text-indigo-600 font-black">${job.hours}</span>
          </div>
          <div>
            <span class="text-slate-400 block font-semibold text-[10px] uppercase">3. Qayerga borish:</span>
            <span class="text-slate-800 font-bold">📍 ${job.location}</span>
          </div>
        </div>

        <p class="text-xs text-slate-500">
          📍 <strong>Aniq manzil:</strong> ${job.addressDetail} • <span class="text-emerald-600 font-bold">${job.paymentType}</span>
        </p>
      </div>

      <!-- Bog'lanish harakati -->
      <div class="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 shrink-0">
        <button onclick="state.toggleSave('${job.id}')" class="p-3 rounded-2xl border border-slate-200 hover:bg-rose-50 hover:border-rose-200 text-slate-400 hover:text-rose-500 transition-all" title="Saqlash">
          <svg class="w-5 h-5 ${state.isSaved(job.id) ? 'fill-rose-500 text-rose-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
        <button onclick="openApplyModal('${job.id}')" class="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-100 flex items-center gap-2">
          <span>📞 Bog‘lanish</span>
        </button>
      </div>

    </div>
  `).join('');
}

function initFilters() {
  // City filter buttons
  document.querySelectorAll('[data-city-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeJobFilters.city = btn.getAttribute('data-city-filter');
      document.querySelectorAll('[data-city-filter]').forEach(b => {
        b.className = 'px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-600 hover:border-indigo-400 transition-all';
      });
      btn.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white shadow-sm';
      renderJobsList();
    });
  });

  // Category filter
  document.querySelectorAll('[data-category-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeJobFilters.category = btn.getAttribute('data-category-filter');
      document.querySelectorAll('[data-category-filter]').forEach(b => {
        b.className = 'px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all';
      });
      btn.className = 'px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-white';
      renderJobsList();
    });
  });
}

function resetJobFilters() {
  activeJobFilters = { city: 'all', category: 'all', searchQuery: '' };
  const input = document.getElementById('jobs-search-input');
  if (input) input.value = '';
  renderJobsList();
}

// 8. HELPERS CATALOG
function renderHelpersList() {
  const container = document.getElementById('helpers-grid-container');
  if (!container) return;

  container.innerHTML = APP_DATA.helpers.map(h => `
    <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm opportunity-card flex flex-col justify-between">
      <div>
        <div class="flex items-start gap-4 mb-4">
          <img src="${h.avatar}" alt="${h.name}" class="w-16 h-16 rounded-2xl object-cover ring-4 ring-indigo-50 shadow-md">
          <div>
            <h3 class="text-base font-extrabold text-slate-900">${h.name}</h3>
            <span class="text-xs text-indigo-600 font-bold block">${h.role}</span>
            <span class="text-xs text-amber-500 font-semibold mt-1 block">★ ${h.rating}</span>
          </div>
        </div>

        <div class="space-y-2 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
          <div>
            <span class="text-slate-400 font-semibold">📍 Hududi:</span>
            <span class="text-slate-800 font-bold"> ${h.location}</span>
          </div>
          <div>
            <span class="text-slate-400 font-semibold">⏱️ Ish vaqti:</span>
            <span class="text-slate-800 font-bold"> ${h.hoursAvailable}</span>
          </div>
          <div>
            <span class="text-slate-400 font-semibold">💰 So‘raladigan haq:</span>
            <span class="text-emerald-600 font-extrabold"> ${h.rateDaily}</span>
          </div>
        </div>

        <p class="text-xs text-slate-600 leading-relaxed mb-4">${h.bio}</p>

        <div class="flex flex-wrap gap-1.5 mb-5">
          ${h.skills.map(s => `<span class="bg-white border border-slate-200 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-lg">${s}</span>`).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span class="text-xs font-black text-slate-800">${h.rateDaily}</span>
        <button onclick="openContactHelperModal('${h.name}', '${h.phone}')" class="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-100 flex items-center gap-1.5">
          <span>Chaqirish (Aloqa)</span>
        </button>
      </div>
    </div>
  `).join('');
}

// 9. EDUCATION GUIDES
function renderEducationGuides() {
  const container = document.getElementById('edu-guides-grid');
  if (!container) return;

  container.innerHTML = APP_DATA.educationGuides.map(g => `
    <div class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm opportunity-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">${g.badge}</span>
          <span class="text-xs text-emerald-600 font-bold">${g.price}</span>
        </div>
        <h3 class="text-base font-extrabold text-slate-900 mb-2">${g.title}</h3>
        <p class="text-xs text-indigo-600 font-bold mb-3">🏛️ ${g.provider} • ⏳ ${g.duration}</p>
        <p class="text-xs text-slate-600 leading-relaxed mb-5">${g.description}</p>
      </div>

      <button onclick="showToast('Yo‘riqnoma ochilmoqda...', 'info')" class="w-full py-3 rounded-2xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-all">
        ${g.actionText}
      </button>
    </div>
  `).join('');
}

// 10. DASHBOARD
function renderDashboard() {
  const nameEl = document.getElementById('dash-profile-name');
  const roleEl = document.getElementById('dash-profile-role');
  const phoneEl = document.getElementById('dash-profile-phone');
  const locationEl = document.getElementById('dash-profile-location');
  const wageEl = document.getElementById('dash-profile-wage');
  const hoursEl = document.getElementById('dash-profile-hours');
  const bioEl = document.getElementById('dash-profile-bio');
  const skillsEl = document.getElementById('dash-profile-skills');

  if (nameEl) nameEl.textContent = state.user.name;
  if (roleEl) roleEl.textContent = state.user.role;
  if (phoneEl) phoneEl.textContent = state.user.phone;
  if (locationEl) locationEl.textContent = state.user.location;
  if (wageEl) wageEl.textContent = state.user.expectedWage;
  if (hoursEl) hoursEl.textContent = state.user.hoursPreferred;
  if (bioEl) bioEl.textContent = state.user.bio;

  if (skillsEl) {
    skillsEl.innerHTML = state.user.skills.map(s => `
      <span class="bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs px-3 py-1 rounded-xl font-bold">
        ${s}
      </span>
    `).join('');
  }

  renderSavedList();
  renderApplicationsList();
  renderNotificationsList();
}

function switchDashboardTab(tabName) {
  document.querySelectorAll('[data-dash-tab]').forEach(btn => {
    if (btn.getAttribute('data-dash-tab') === tabName) {
      btn.className = 'px-4 py-2 rounded-2xl font-bold text-xs bg-indigo-600 text-white shadow-sm';
    } else {
      btn.className = 'px-4 py-2 rounded-2xl font-semibold text-xs text-slate-600 hover:bg-slate-100 transition-colors';
    }
  });

  const sections = ['saved', 'applications', 'notifications'];
  sections.forEach(s => {
    const el = document.getElementById(`dash-section-${s}`);
    if (el) el.classList.toggle('hidden', s !== tabName);
  });
}

function renderSavedList() {
  const container = document.getElementById('dash-saved-container');
  if (!container) return;

  if (state.savedItems.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-3xl p-10 text-center border border-slate-100">
        <div class="text-3xl mb-2">🔖</div>
        <p class="text-sm font-bold text-slate-700">Hozircha saqlangan ishlar yo‘q</p>
        <p class="text-xs text-slate-500 mt-1">O‘zingizga ma’qul kelgan ish e’lonlarini yurakcha orqali saqlang.</p>
      </div>
    `;
    return;
  }

  const items = APP_DATA.jobs.filter(j => state.savedItems.includes(j.id));
  container.innerHTML = items.map(job => `
    <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between gap-4 mb-3">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">${job.wage}</span>
          <h4 class="text-sm font-bold text-slate-800">${job.title}</h4>
        </div>
        <p class="text-xs text-slate-500">📍 ${job.location} • ⏱️ ${job.hours} • 👤 ${job.employer}</p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="openApplyModal('${job.id}')" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">
          Bog‘lanish
        </button>
        <button onclick="state.toggleSave('${job.id}')" class="p-2 text-rose-500 hover:bg-rose-50 rounded-xl">✕</button>
      </div>
    </div>
  `).join('');
}

function renderApplicationsList() {
  const container = document.getElementById('dash-applications-container');
  if (!container) return;

  if (state.applications.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-3xl p-10 text-center border border-slate-100">
        <p class="text-sm font-bold text-slate-700">Hozircha bog‘langan ishlar yo‘q</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.applications.map(app => `
    <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center justify-between gap-4 mb-3">
      <div>
        <span class="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">${app.status}</span>
        <h4 class="text-sm font-bold text-slate-800 mt-1">${app.title}</h4>
        <p class="text-xs text-slate-500">👤 ${app.employer} • 📅 ${app.date}</p>
      </div>
      <span class="text-xs font-black text-indigo-600">${app.wage}</span>
    </div>
  `).join('');
}

function renderNotificationsList() {
  const container = document.getElementById('dash-notifications-container');
  if (!container) return;

  container.innerHTML = state.notifications.map(n => `
    <div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-start justify-between gap-3 mb-2.5 ${!n.read ? 'border-l-4 border-l-indigo-600' : ''}">
      <div>
        <h5 class="text-xs font-bold text-slate-800">${n.title}</h5>
        <p class="text-xs text-slate-600 mt-1">${n.desc}</p>
        <span class="text-[10px] text-slate-400 mt-1 block">${n.time}</span>
      </div>
      ${!n.read ? `
        <button onclick="markNotificationAsRead('${n.id}')" class="text-[11px] text-indigo-600 font-bold hover:underline shrink-0">O‘qildi</button>
      ` : ''}
    </div>
  `).join('');
}

function markNotificationAsRead(id) {
  const n = state.notifications.find(item => item.id === id);
  if (n) n.read = true;
  updateNotificationBadges();
  renderNotificationsList();
}

// 11. SEARCH
function initSearch() {
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroCitySelect = document.getElementById('hero-city-select');
  const heroSearchBtn = document.getElementById('hero-search-btn');

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      const q = heroSearchInput ? heroSearchInput.value : '';
      const c = heroCitySelect ? heroCitySelect.value : 'all';
      activeJobFilters.searchQuery = q;
      activeJobFilters.city = c;
      switchTab('jobs');
      renderJobsList();
    });
  }

  const jobInput = document.getElementById('jobs-search-input');
  if (jobInput) {
    jobInput.addEventListener('input', (e) => {
      activeJobFilters.searchQuery = e.target.value;
      renderJobsList();
    });
  }
}

// 12. MODALS
let activeJobItem = null;

function initModals() {
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) modal.classList.add('hidden');
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.add('hidden');
    });
  });

  // Apply form
  const applyForm = document.getElementById('apply-form');
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const applicantName = document.getElementById('apply-name').value;
      const applicantPhone = document.getElementById('apply-phone').value;

      state.addApplication({
        id: 'app-' + Date.now(),
        title: activeJobItem ? activeJobItem.title : 'Yordamchilik ishi',
        employer: activeJobItem ? activeJobItem.employer : 'Ish beruvchi',
        date: 'Bugun, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'Bog‘lanildi',
        wage: activeJobItem ? activeJobItem.wage : '150 000 so‘m'
      });

      document.getElementById('modal-apply').classList.add('hidden');
      showToast('Arizangiz va raqamingiz ish beruvchiga yuborildi!', 'success');
      applyForm.reset();
    });
  }

  // Post Opportunity (Yordamchi qidirish e'loni)
  const postForm = document.getElementById('post-opportunity-form');
  if (postForm) {
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('post-title').value;
      const task = document.getElementById('post-task').value;
      const hours = document.getElementById('post-hours').value;
      const wage = document.getElementById('post-wage').value;
      const location = document.getElementById('post-location').value;
      const phone = document.getElementById('post-phone').value;
      const employer = document.getElementById('post-employer').value;

      APP_DATA.jobs.unshift({
        id: 'job-' + Date.now(),
        title: title,
        category: 'tozalash',
        categoryLabel: 'Yordamchi ishi',
        employer: employer,
        employerPhone: phone,
        location: location,
        addressDetail: location + ' hududida',
        hours: hours,
        hoursCount: 5,
        wage: wage,
        wageAmount: 150000,
        paymentType: 'Kun yakunida darhol to‘lanadi',
        taskDuty: task,
        requirements: ['Mas’uliyatli va chaqqon'],
        perks: ['Tushlik bilan ta’minlanadi'],
        posted: 'Hozirgina',
        status: 'Faol'
      });

      document.getElementById('modal-post-opportunity').classList.add('hidden');
      showToast('E’loningiz muvaffaqiyatli joylashtirildi!', 'success');
      postForm.reset();
      renderJobsList();
      renderHomeHighlights();
      switchTab('jobs');
    });
  }
}

function openApplyModal(jobId) {
  const job = APP_DATA.jobs.find(j => j.id === jobId);
  if (!job) return;
  activeJobItem = job;

  document.getElementById('apply-item-title').textContent = job.title;
  document.getElementById('apply-item-wage').textContent = job.wage;
  document.getElementById('apply-item-hours').textContent = job.hours;
  document.getElementById('apply-item-location').textContent = job.location;
  document.getElementById('apply-item-phone').textContent = job.employerPhone;
  document.getElementById('apply-name').value = state.user.name;
  document.getElementById('apply-phone').value = state.user.phone;

  document.getElementById('modal-apply').classList.remove('hidden');
}

function openJobDetailModal(jobId) {
  const job = APP_DATA.jobs.find(j => j.id === jobId);
  if (!job) return;

  activeJobItem = job;
  const content = document.getElementById('detail-modal-body');
  content.innerHTML = `
    <div class="mb-5">
      <div class="flex items-center gap-2 mb-2">
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700">🧹 ${job.categoryLabel}</span>
        <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700">💰 ${job.wage}</span>
      </div>
      <h3 class="text-xl font-black text-slate-900">${job.title}</h3>
      <p class="text-xs text-slate-500 mt-1">👤 Ish beruvchi: <strong>${job.employer}</strong> (${job.employerPhone})</p>
    </div>

    <!-- Doskadagi 3 ta ustun to'liq ko'rinishi -->
    <div class="space-y-4 mb-6">
      
      <div class="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100">
        <span class="text-xs font-bold text-indigo-700 block uppercase">1. Vazifasi (Nima ish qiladi):</span>
        <p class="text-sm font-extrabold text-slate-900 mt-1">${job.taskDuty}</p>
      </div>

      <div class="bg-amber-50/70 p-4 rounded-2xl border border-amber-100">
        <span class="text-xs font-bold text-amber-700 block uppercase">2. Necha soat ishlashi:</span>
        <p class="text-sm font-extrabold text-slate-900 mt-1">⏱️ ${job.hours}</p>
      </div>

      <div class="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100">
        <span class="text-xs font-bold text-emerald-700 block uppercase">3. Qayerga borish (Manzil):</span>
        <p class="text-sm font-extrabold text-slate-900 mt-1">📍 ${job.location}</p>
        <p class="text-xs text-slate-600 mt-1">Mo‘ljal: ${job.addressDetail}</p>
      </div>

      <div>
        <h4 class="text-xs font-bold text-slate-700 mb-1">Talablar:</h4>
        <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
          ${job.requirements.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 class="text-xs font-bold text-slate-700 mb-1">Qulayliklar:</h4>
        <div class="flex flex-wrap gap-2">
          ${job.perks.map(p => `<span class="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-lg">✓ ${p}</span>`).join('')}
        </div>
      </div>

    </div>

    <div class="pt-5 border-t border-slate-100 flex items-center justify-between">
      <button onclick="state.toggleSave('${job.id}')" class="px-4 py-2.5 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700">
        ${state.isSaved(job.id) ? '❤️ Saqlangan' : '🤍 Saqlash'}
      </button>
      <button onclick="document.getElementById('modal-detail').classList.add('hidden'); openApplyModal('${job.id}');" class="px-6 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-100">
        Telefon qilish va bog‘lanish
      </button>
    </div>
  `;
  document.getElementById('modal-detail').classList.remove('hidden');
}

function openPostOpportunityModal() {
  document.getElementById('modal-post-opportunity').classList.remove('hidden');
}

function openContactHelperModal(name, phone) {
  showToast(`${name} bilan bog‘lanish: ${phone}`, 'info');
}

function openEditProfileModal() {
  showToast('Profilni tahrirlash oynasi ochilmoqda...', 'info');
}
