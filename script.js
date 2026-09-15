// महाराष्ट्रातील सर्व ३६ जिल्हे आणि त्यांचे अधिकृत तालुके (LGD मानकांनुसार)
const maharashtraDistrictsWithTalukas = {
  "अहमदनगर": ["अहमदनगर", "शेवगाव", "पाथर्डी", "पारनेर", "संगमनेर", "कोपरगाव", "अकोले", "श्रीरामपूर", "नेवासा", "राहाता", "राहुरी", "श्रीगोंदा", "कर्जत", "जामखेड"],
  "अकोला": ["अकोला", "मुर्तिजापूर", "अकोट", "बाळापूर", "बार्शीटाकळी", "पातूर", "तेल्हारा"],
  "अमरावती": ["अमरावती", "भातकुली", "नांदगाव खंडेश्वर", "धारणी", "चिखलदरा", "अचलपूर", "चांदूरबाजार", "मोर्शी", "वरुड", "दर्यापूर", "अंजनगाव सुर्जी", "चांदूर रेल्वे", "धामणगाव रेल्वे", "तिवसा"],
  "छत्रपती संभाजीनगर": ["छत्रपती संभाजीनगर", "कन्नड", "सोयगाव", "सिल्लोड", "फुलंब्री", "बीडकीन", "पैठण", "गंगापूर", "वैजापूर", "खुलताबाद"],
  "बीड": ["बीड", "गेवराई", "माजलगाव", "अंबाजोगाई", "परळी वैजनाथ", "केज", "धारूर", "वडवणी", "आष्टी", "पाटोदा", "शिरूर कासार"],
  "भंडारा": ["भंडारा", "साकोली", "लाखनी", "लाखांदूर", "तुमसर", "मोहाडी", "पवनी"],
  "बुलढाणा": ["बुलढाणा", "चिखली", "देऊळगाव राजा", "जळगाव जामोद", "संग्रामपूर", "खामगाव", "शेगाव", "मलकापूर", "मोताळा", "नांदुरा", "मेहकर", "सिंदखेड राजा", "लोणार"],
  "चंद्रपूर": ["चंद्रपूर", "भद्रावती", "वरोरा", "चिमूर", "नागभीड", "ब्रह्मपुरी", "सिंदेवाही", "मूल", "सावली", "पोंभुर्णा", "बल्लारपूर", "कोरपना", "राजुरा", "गोंडपिपरी", "जिवती"],
  "धुळे": ["धुळे", "साक्री", "शिंदखेडा", "शिरपूर"],
  "गडचिरोली": ["गडचिरोली", "धानोरा", "चामोर्शी", "मुलचेरा", "अहेरी", "एटापल्ली", "भामरागड", "सिरोंचा", "आरमोरी", "देसाईगंज (वडसा)", "कुरखेडा", "कोरची"],
  "गोंदिया": ["गोंदिया", "गोरेगाव", "तिरोडा", "तिरोडी", "अर्जुनी मोरगाव", "देवरी", "सडक अर्जुनी", "सालेकसा"],
  "हिंगोली": ["हिंगोली", "कळमनुरी", "वसमत", "औंढा नागनाथ", "सेनगाव"],
  "जळगाव": ["जळगाव", "भुसावळ", "यावल", "रावेर", "मुक्ताईनगर", "बोदवड", "एरंडोल", "धरणगाव", "अमळनेर", "पारोळा", "चाळीसगाव", "जामनेर", "पाचोरा", "भडगाव", "चोपडा"],
  "जालना": ["जालना", "बदनापूर", "भोकरदन", "जाफ्राबाद", "परतूर", "मंठा", "अंबड", "घनसावंगी"],
  "कोल्हापूर": ["करवीर", "कागल", "पन्हाळा", "शाहूवाडी", "शिरोळ", "हातकणंगले", "राधानगरी", "गगनबावडा", "भुदरगड", "गडहिंग्लज", "आजरा", "चंदगड"],
  "लातूर": ["लातूर", "औसा", "रेणापूर", "अहमदपूर", "चाकूर", "शिरूर अनंतपाळ", "निलंगा", "देवणी", "शिरूर (उदगीर)", "उदगीर", "जळकोट"],
  "मुंबई शहर": ["मुंबई शहर"],
  "मुंबई उपनगर": ["कुर्ला", "अंधेरी", "बोरिवली"],
  "नागपूर": ["नागपूर शहर", "नागपूर ग्रामीण", "काटोल", "नरखेड", "सावनेर", "कळमेश्वर", "रामटेक", "पारशिवनी", "मौदा", "कामठी", "उमरेड", "भिवापूर", "कुही", "हिंगणा"],
  "नांदेड": ["नांदेड", "अर्धापूर", "मुदखेड", "भोकर", "उमरी", "लोहा", "कंधार", "किनवट", "हिमायतनगर", "हदगाव", "माहूर", "बिलोली", "धर्माबाद", "नायगाव (खैरगाव)", "मुखेड", "देगलूर"],
  "नंदुरबार": ["नंदुरबार", "नवापूर", "शहादा", "तळोदा", "अक्कलकुवा", "अक्राणी (धडगाव)"],
  "नाशिक": ["नाशिक", "इगतपुरी", "दिंडोरी", "पेठ", "त्र्यंबकेश्वर", "कळवण", "देवळा", "सुरगाणा", "सिन्नर", "निफाड", "चांदवड", "नांदगाव", "येवला", "मालेगाव", "बागलाण (सटाणा)"],
  "धाराशिव (उस्मानाबाद)": ["धाराशिव", "तुळजापूर", "उमरगा", "लोहारा", "कळंब", "भूम", "परांडा", "वाशी"],
  "पालघर": ["पालघर", "वाडा", "विक्रमगड", "जव्हार", "मोखाडा", "दहाणू", "तलासरी", "वसई"],
  "परभणी": ["परभणी", "जिंतूर", "सेलू", "मानवत", "पाथरी", "सोनपेठ", "गंगाखेड", "पालम", "पूर्णा"],
  "पुणे": ["हवेली", "पुणे शहर", "मावळ", "मुळशी", "शिरूर", "बारामती", "इंदापूर", "दौंड", "पुरंदर", "भोर", "वेल्हे", "जुन्नर", "आंबेगाव", "खेड"],
  "रायगड": ["अलिबाग", "पेण", "मुरुड", "रोहा", "पनवेल", "उरण", "कर्जत", "खालापूर", "माणगाव", "माणगाव", "तळा", "रोहा", "सुधागड (पाली)", "महाड", "पोलादपूर", "श्रीवर्धन", "म्हसळा"],
  "रत्नागिरी": ["रत्नागिरी", "चिपळूण", "गुहागर", "खेड", "दापोली", "मंडणगड", "संगमेश्वर", "लांजा", "राजापूर"],
  "सांगली": ["मिरज", "जत", "खानापूर (विटा)", "वाळवा (इस्लामपूर)", "तासगाव", "शिराळा", "आटपाडी", "कवठे महांकाळ", "पलूस", "कडेगाव"],
  "सातारा": ["सातारा", "कराड", "वाई", "महाबळेश्वर", "जावळी (मेढा)", "पाटण", "कोरेगाव", "खटाव (वडूज)", "माण (दहीवडी)", "फलटण", "खंडाळा"],
  "सिंधुदुर्ग": ["कुडाळ", "कणकवली", "सावंतवाडी", "मालवण", "वेंगुर्ला", "देवगड", "वैभववाडी", "दोडामार्ग"],
  "सोलापूर": ["उत्तर सोलापूर", "दक्षिण सोलापूर", "बार्शी", "अक्कलकोट", "मोहोळ", "माढा", "करमाळा", "पंढरपूर", "सांगोला", "माळशिरस", "मंगळवेढा"],
  "ठाणे": ["ठाणे", "कल्याण", "मुरबाड", "भिवंडी", "शहापूर", "उल्हासनगर", "अंबरनाथ"],
  "वर्धा": ["वर्धा", "देवळी", "सेलू", "आर्वी", "आष्टी", "कारंजा", "हिंगणघाट", "समुद्रपूर"],
  "वाशिम": ["वाशिम", "मालेगाव", "रिसोड", "मंगरुळपीर", "कारंजा", "मानोरा"],
  "यवतमाळ": ["यवतमाळ", "बाभूळगाव", "कळंब", "दारव्हा", "दिग्रस", "नेर", "पुसद", "उमरखेड", "महागाव", "वणी", "मारेगाव", "झरी जामणी", "केळापूर (पांढरकवडा)", "घाटंजी", "राळेगाव", "आर्णी"]
};

// सुरुवातीचा डेमो डेटा
const defaultAnimals = [
  {
    id: 1,
    category: "गाय",
    breed: "खिलार गाय",
    age: "४ वर्षे (४ दाती)",
    lactation: "दुसरे वेत",
    milkCapacity: "८ लिटर/दिवस",
    price: 48000,
    district: "धुळे",
    taluka: "शिंदखेडा",
    village: "दोंडाईचा",
    sellerName: "सचिन पाटील",
    sellerPhone: "9876543210",
    image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=700&q=80",
    dateAdded: Date.now() - 1000000,
    isSold: false
  },
  {
    id: 2,
    category: "म्हैस",
    breed: "मुऱ्हा म्हैस",
    age: "५ वर्षे",
    lactation: "तिसरे वेत",
    milkCapacity: "१४ लिटर/दिवस",
    price: 75000,
    district: "कोल्हापूर",
    taluka: "शिरोळ",
    village: "जयसिंगपूर",
    sellerName: "तानाजी पाटील",
    sellerPhone: "9822334455",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=700&q=80",
    dateAdded: Date.now() - 2000000,
    isSold: false
  },
  {
    id: 3,
    category: "बैल",
    breed: "खिलार बैल जोडी",
    age: "६ वर्षे",
    lactation: null,
    milkCapacity: null,
    price: 95000,
    district: "धुळे",
    taluka: "साक्री",
    village: "पिंपळनेर",
    sellerName: "बाबुराव शिंदे",
    sellerPhone: "9733221100",
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=700&q=80",
    dateAdded: Date.now() - 3000000,
    isSold: false
  }
];

// डेटा लोड करणे
let animalsData = [];
try {
  const saved = localStorage.getItem('pashudhan_animals_v3');
  animalsData = saved ? JSON.parse(saved) : defaultAnimals;
} catch (e) {
  animalsData = defaultAnimals;
}

let activeCategory = 'all';
let uploadedImageData = "";

// संपूर्ण DOM तयार झाल्यावरच काम सुरू होईल (कोणतीही एरर न येण्यासाठी)
document.addEventListener('DOMContentLoaded', () => {

  // १. DOM घटक
  const searchInput = document.getElementById('searchInput');
  const districtFilter = document.getElementById('districtFilter');
  const talukaFilter = document.getElementById('talukaFilter');
  const priceFilter = document.getElementById('priceFilter');
  const statusFilter = document.getElementById('statusFilter');
  const categoryPills = document.querySelectorAll('.pill');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  const postModal = document.getElementById('postModal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelModalBtn = document.getElementById('cancelModalBtn');
  const addAnimalForm = document.getElementById('addAnimalForm');
  const modalCategory = document.getElementById('modalCategory');
  const modalDistrict = document.getElementById('modalDistrict');
  const modalTaluka = document.getElementById('modalTaluka');
  const modalVillage = document.getElementById('modalVillage');
  const lactationGroup = document.getElementById('lactationGroup');
  const milkGroup = document.getElementById('milkGroup');
  const modalImageFile = document.getElementById('modalImageFile');
  const imagePreviewBox = document.getElementById('imagePreviewBox');
  const previewImg = document.getElementById('previewImg');
  const removePhotoBtn = document.getElementById('removePhotoBtn');

  const animalsContainer = document.getElementById('animalsContainer');
  const resultsCount = document.getElementById('resultsCount');
  const emptyState = document.getElementById('emptyState');

  // २. जिल्हा ➔ तालुका कॅस्केडिंग फंक्शन (३६ जिल्हे व ३५८ तालुके)
  function setupDistrictTalukaDropdown(distEl, talEl, isFilter = false) {
    if (!distEl || !talEl) return;

    // सर्व ३६ जिल्हे जोडणे
    Object.keys(maharashtraDistrictsWithTalukas).forEach(district => {
      const opt = document.createElement('option');
      opt.value = district;
      opt.textContent = district;
      distEl.appendChild(opt);
    });

    // जिल्हा बदलल्यावर तालुके लोड करणे
    distEl.addEventListener('change', () => {
      const selectedDist = distEl.value;
      talEl.innerHTML = isFilter ? '<option value="all">सर्व तालुके</option>' : '<option value="">तालुका निवडा</option>';

      if (selectedDist && selectedDist !== 'all' && maharashtraDistrictsWithTalukas[selectedDist]) {
        talEl.disabled = false;
        maharashtraDistrictsWithTalukas[selectedDist].forEach(taluka => {
          const opt = document.createElement('option');
          opt.value = taluka;
          opt.textContent = taluka;
          talEl.appendChild(opt);
        });
      } else {
        talEl.disabled = true;
      }

      if (isFilter) renderAnimals();
    });

    if (isFilter) {
      talEl.addEventListener('change', renderAnimals);
    }
  }

  // ३. 'बैल' असल्यास दूध व वेत लपवणे
  if (modalCategory && lactationGroup && milkGroup) {
    modalCategory.addEventListener('change', (e) => {
      const selected = e.target.value;
      if (selected === 'बैल') {
        lactationGroup.classList.add('hidden');
        milkGroup.classList.add('hidden');
      } else {
        lactationGroup.classList.remove('hidden');
        milkGroup.classList.remove('hidden');
      }
    });
  }

  // ४. गॅलरी फोटो निवडणे व प्रिव्ह्यू
  if (modalImageFile && previewImg && imagePreviewBox) {
    modalImageFile.addEventListener('change', function(e) {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          uploadedImageData = event.target.result;
          previewImg.src = uploadedImageData;
          imagePreviewBox.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (removePhotoBtn && modalImageFile && imagePreviewBox) {
    removePhotoBtn.addEventListener('click', () => {
      modalImageFile.value = "";
      uploadedImageData = "";
      imagePreviewBox.classList.add('hidden');
    });
  }

  // ५. कार्ड्स रेंडर करण्याचे फंक्शन
  function renderAnimals() {
    if (!animalsContainer) return;

    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selDist = districtFilter ? districtFilter.value : 'all';
    const selTal = talukaFilter ? talukaFilter.value : 'all';
    const selPrice = priceFilter ? priceFilter.value : 'all';
    const selStatus = statusFilter ? statusFilter.value : 'available';

    let filtered = animalsData.filter(item => {
      const matchCategory = (activeCategory === 'all') || (item.category === activeCategory);
      
      const matchSearch = (item.breed && item.breed.toLowerCase().includes(searchTerm)) ||
                          (item.sellerName && item.sellerName.toLowerCase().includes(searchTerm)) ||
                          (item.district && item.district.toLowerCase().includes(searchTerm)) ||
                          (item.taluka && item.taluka.toLowerCase().includes(searchTerm)) ||
                          (item.village && item.village.toLowerCase().includes(searchTerm));

      const matchDist = (selDist === 'all') || (item.district === selDist);
      const matchTal = (selTal === 'all') || (item.taluka === selTal);

      // किंमत फिल्टर
      let matchPrice = true;
      if (selPrice === 'under25k') matchPrice = item.price < 25000;
      else if (selPrice === '25k-60k') matchPrice = item.price >= 25000 && item.price <= 60000;
      else if (selPrice === 'above60k') matchPrice = item.price > 60000;

      // स्टेटस फिल्टर
      let matchStatus = true;
      if (selStatus === 'available') matchStatus = !item.isSold;
      else if (selStatus === 'sold') matchStatus = item.isSold;

      return matchCategory && matchSearch && matchDist && matchTal && matchPrice && matchStatus;
    });

    if (resultsCount) resultsCount.textContent = filtered.length;

    if (filtered.length === 0) {
      animalsContainer.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    animalsContainer.innerHTML = filtered.map(item => {
      const formattedPrice = Number(item.price || 0).toLocaleString('en-IN');
      const isBull = item.category === 'बैल';
      
      const waMessage = encodeURIComponent(
        `नमस्कार ${item.sellerName}जी, मी तुमची 'पशुधन बाजार' वरील जाहिरात पाहिली. मला आपल्याकडील ${item.breed} (किंमत ₹${formattedPrice}, गाव: ${item.village || ''}, ता. ${item.taluka || ''}, जि. ${item.district || ''}) बाबत विचारणा करायची आहे.`
      );

      return `
        <div class="animal-card ${item.isSold ? 'is-sold' : ''}">
          <div class="card-img-wrapper">
            <img src="${item.image}" alt="${item.breed}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=700&q=80'">
            <span class="category-tag">${item.category}</span>
            ${item.isSold ? `<div class="sold-badge">विकले गेले (SOLD)</div>` : ''}
          </div>
          
          <div class="card-content">
            <div class="card-top">
              <h3 class="card-title">${item.breed}</h3>
              <span class="card-price">₹ ${formattedPrice}</span>
            </div>
            
            <div class="card-location">
              <i class="fa-solid fa-location-dot"></i>
              <span>${item.village || '-'}, ता. ${item.taluka || '-'}, जि. ${item.district || '-'}</span>
            </div>

            <div class="specs-grid">
              <div class="spec-item">
                <span class="spec-label">वय / दात</span>
                <span class="spec-value">${item.age || '-'}</span>
              </div>
              ${!isBull ? `
              <div class="spec-item">
                <span class="spec-label">वेत</span>
                <span class="spec-value">${item.lactation || 'लागू नाही'}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">दूध क्षमता</span>
                <span class="spec-value">${item.milkCapacity || '-'}</span>
              </div>` : `
              <div class="spec-item">
                <span class="spec-label">वापर</span>
                <span class="spec-value">शेतीकाम / ओढकाम</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">प्रकार</span>
                <span class="spec-value">बैल जोडी / एकटा</span>
              </div>`}
              <div class="spec-item">
                <span class="spec-label">स्थिती</span>
                <span class="spec-value" style="color:${item.isSold ? '#dc2626' : '#15803d'};">
                  <i class="fa-solid ${item.isSold ? 'fa-circle-xmark' : 'fa-circle-check'}"></i> ${item.isSold ? 'विकले गेले' : 'उपलब्ध'}
                </span>
              </div>
            </div>

            <div class="card-seller">
              <i class="fa-solid fa-user"></i> शेतकरी: <strong>${item.sellerName}</strong>
            </div>

            <div class="card-actions">
              ${!item.isSold ? `
                <a href="tel:${item.sellerPhone}" class="btn btn-secondary">
                  <i class="fa-solid fa-phone"></i> कॉल करा
                </a>
                <a href="https://wa.me/91${item.sellerPhone}?text=${waMessage}" target="_blank" class="btn btn-whatsapp">
                  <i class="fa-brands fa-whatsapp"></i> व्हॉट्सअ‍ॅप
                </a>
              ` : `
                <button class="btn btn-outline" style="grid-column: span 2;" disabled>
                  <i class="fa-solid fa-lock"></i> विक्री पूर्ण झाली आहे
                </button>
              `}
            </div>

            <div class="card-manage-bar">
              <button type="button" class="btn btn-outline btn-sm" data-action="toggle-sold" data-id="${item.id}">
                <i class="fa-solid ${item.isSold ? 'fa-rotate-left' : 'fa-check'}"></i> ${item.isSold ? 'पुन्हा उपलब्ध करा' : 'विकले गेले मार्क करा'}
              </button>
              <button type="button" class="btn btn-danger btn-sm" data-action="delete-ad" data-id="${item.id}">
                <i class="fa-solid fa-trash"></i> जाहिरात हटवा
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ६. सुरक्षित Event Delegation (विकले गेले व Delete बटणासाठी)
  if (animalsContainer) {
    animalsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;

      const action = btn.getAttribute('data-action');
      const id = Number(btn.getAttribute('data-id'));

      if (action === 'delete-ad') {
        const confirmDelete = confirm("तुम्हाला ही जाहिरात कायमस्वरूपी काढून टाकायची आहे का?");
        if (confirmDelete) {
          animalsData = animalsData.filter(item => item.id !== id);
          saveAndRefresh();
        }
      } else if (action === 'toggle-sold') {
        animalsData = animalsData.map(item => {
          if (item.id === id) {
            return { ...item, isSold: !item.isSold };
          }
          return item;
        });
        saveAndRefresh();
      }
    });
  }

  function saveAndRefresh() {
    try {
      localStorage.setItem('pashudhan_animals_v3', JSON.stringify(animalsData));
    } catch (err) {
      console.warn("Storage quota:", err);
    }
    renderAnimals();
  }

  // ७. फिल्टर इव्हेंट्स
  if (searchInput) searchInput.addEventListener('input', renderAnimals);
  if (priceFilter) priceFilter.addEventListener('change', renderAnimals);
  if (statusFilter) statusFilter.addEventListener('change', renderAnimals);

  if (categoryPills && categoryPills.length > 0) {
    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-category') || 'all';
        renderAnimals();
      });
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (districtFilter) districtFilter.value = 'all';
      if (talukaFilter) {
        talukaFilter.innerHTML = '<option value="all">सर्व तालुके</option>';
        talukaFilter.disabled = true;
      }
      if (priceFilter) priceFilter.value = 'all';
      if (statusFilter) statusFilter.value = 'available';
      activeCategory = 'all';
      if (categoryPills) {
        categoryPills.forEach(p => p.classList.remove('active'));
        if (categoryPills[0]) categoryPills[0].classList.add('active');
      }
      renderAnimals();
    });
  }

  // ८. Modal Open/Close नियंत्रणे
  function openModal() {
    if (postModal) {
      postModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (postModal) {
      postModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
    if (addAnimalForm) addAnimalForm.reset();
    uploadedImageData = "";
    if (imagePreviewBox) imagePreviewBox.classList.add('hidden');
    if (lactationGroup) lactationGroup.classList.remove('hidden');
    if (milkGroup) milkGroup.classList.remove('hidden');
    if (modalTaluka) {
      modalTaluka.innerHTML = '<option value="">आधी जिल्हा निवडा</option>';
      modalTaluka.disabled = true;
    }
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

  if (postModal) {
    postModal.addEventListener('click', (e) => {
      if (e.target === postModal) closeModal();
    });
  }

  // ९. नवीन जनावराचा फॉर्म सबमिट करणे
  if (addAnimalForm) {
    addAnimalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const categoryVal = modalCategory ? modalCategory.value : 'गाय';
      const isBull = categoryVal === 'बैल';

      let defaultImg = "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=700&q=80";
      if (categoryVal === 'म्हैस') defaultImg = "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=700&q=80";
      else if (categoryVal === 'शेळी/मेंढी') defaultImg = "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=700&q=80";
      else if (isBull) defaultImg = "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=700&q=80";

      const breedInput = document.getElementById('modalBreed');
      const ageInput = document.getElementById('modalAge');
      const lactInput = document.getElementById('modalLactation');
      const milkInput = document.getElementById('modalMilk');
      const priceInput = document.getElementById('modalPrice');
      const sellerInput = document.getElementById('modalSeller');
      const phoneInput = document.getElementById('modalPhone');

      const newAnimal = {
        id: Date.now(),
        category: categoryVal,
        breed: breedInput ? breedInput.value.trim() : '',
        age: ageInput ? ageInput.value.trim() : '',
        lactation: isBull ? null : (lactInput && lactInput.value.trim() ? lactInput.value.trim() : "लागू नाही"),
        milkCapacity: isBull ? null : (milkInput && milkInput.value.trim() ? milkInput.value.trim() : "लागू नाही"),
        price: priceInput ? Number(priceInput.value) : 0,
        district: modalDistrict ? modalDistrict.value : '',
        taluka: modalTaluka ? modalTaluka.value : '',
        village: modalVillage ? modalVillage.value.trim() : '',
        sellerName: sellerInput ? sellerInput.value.trim() : '',
        sellerPhone: phoneInput ? phoneInput.value.trim() : '',
        image: uploadedImageData || defaultImg,
        dateAdded: Date.now(),
        isSold: false
      };

      animalsData.unshift(newAnimal);
      saveAndRefresh();

      closeModal();
      alert("जनावराची मोफत जाहिरात यशस्वीरित्या प्रकाशित झाली आहे!");
    });
  }

  // १०. सुरुवातीचे इनिशियलायझेशन
  setupDistrictTalukaDropdown(districtFilter, talukaFilter, true);
  setupDistrictTalukaDropdown(modalDistrict, modalTaluka, false);
  renderAnimals();

});