// 縣市對應的地區
const areas = {
    新北市: ['板橋區','三重區','中和區','永和區','新莊區','新店區','樹林區','鶯歌區','三峽區','淡水區',
                 '汐止區','瑞芳區','土城區','蘆洲區','五股區','泰山區','林口區','深坑區','石碇區','坪林區',
                 '三芝區','石門區','八里區','平溪區','雙溪區','貢寮區','金山區','萬里區','烏來區'],
    臺北市: ['松山區','信義區','大安區','中山區','中正區','大同區','萬華區','文山區','南港區','內湖區','士林區','北投區'],
    桃園市: ['桃園區','中壢區','大溪區','楊梅區','蘆竹區','大園區','龜山區','八德區','龍潭區','平鎮區', '新屋區','觀音區','復興區'],
    臺中市: ['中區','東區','南區','西區','北區','西屯區','南屯區','北屯區','豐原區','東勢區',
                  '大甲區','清水區','沙鹿區','梧棲區','后里區','神岡區','潭子區','大雅區','新社區','石岡區',
                  '外埔區','大安區','烏日區','大肚區','龍井區','霧峰區','太平區','大里區','和平區'],
    臺南市: ['新營區', '鹽水區', '白河區', '柳營區', '後壁區', '東山區', '麻豆區', '下營區', '六甲區', '官田區', 
                  '大內區', '佳里區', '學甲區', '西港區', '七股區', '將軍區', '北門區', '新化區', '善化區', '新市區', 
                  '安定區', '山上區', '玉井區', '楠西區', '南化區', '左鎮區', '仁德區', '歸仁區', '關廟區', '龍崎區', 
                  '永康區', '東區', '南區', '北區', '安南區', '安平區', '中西區'],
    高雄市: ['鹽埕區', '鼓山區', '左營區', '楠梓區', '三民區', '新興區', '前金區', '苓雅區', '前鎮區', '旗津區',
                  '小港區', '鳳山區', '林園區', '大寮區', '大樹區', '大社區', '仁武區', '鳥松區', '岡山區', '橋頭區',
                  '燕巢區', '田寮區', '阿蓮區', '路竹區', '湖內區', '茄萣區', '永安區', '彌陀區', '梓官區', '旗山區',
                  '美濃區', '六龜區', '甲仙區', '杉林區', '內門區', '茂林區', '桃源區', '那瑪夏區'],
    基隆市: ['中正區', '七堵區', '暖暖區', '仁愛區', '中山區', '安樂區', '信義區'],
    新竹市: ['東區', '北區', '香山區'],
    嘉義市: ['東區', '西區'],
    宜蘭縣: ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
    新竹縣: ['竹北市', '關西鎮', '新埔鎮', '竹東鎮', '湖口鄉', '橫山鄉', '新豐鄉', '芎林鄉', '寶山鄉', '北埔鄉', '峨眉鄉', '尖石鄉', '五峰鄉'],
    苗栗縣: ['苗栗市', '頭份市', '苑裡鎮', '通霄鎮', '竹南鎮', '後龍鎮', '卓蘭鎮', '大湖鄉', '公館鄉', '銅鑼鄉', '南庄鄉', '頭屋鄉', '三義鄉', '西湖鄉', '造橋鄉', '三灣鄉', '獅潭鄉', '泰安鄉'],
    彰化縣: ['彰化市', '員林市', '鹿港鎮', '和美鎮', '北斗鎮', '溪湖鎮', '田中鎮', '二林鎮', '線西鄉', '伸港鄉', 
        '福興鄉', '秀水鄉', '花壇鄉', '芬園鄉', '大村鄉', '埔鹽鄉', '埔心鄉', '永靖鄉', '社頭鄉', '二水鄉', 
        '田尾鄉', '埤頭鄉', '芳苑鄉', '大城鄉', '竹塘鄉', '溪州鄉'],
    南投縣: ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', 
        '水里鄉', '信義鄉', '仁愛鄉'],
    雲林縣: ['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '古坑鄉', '大埤鄉', '莿桐鄉', '林內鄉', 
        '二崙鄉', '崙背鄉', '麥寮鄉', '東勢鄉', '褒忠鄉', '臺西鄉', '元長鄉', '四湖鄉', '口湖鄉', '水林鄉'],
    嘉義縣: ['太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', 
        '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'],
    屏東縣: ['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉',
        '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉',
        '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '三地門鄉', '霧臺鄉', '瑪家鄉', '泰武鄉', '來義鄉',
        '春日鄉', '獅子鄉', '牡丹鄉'],
    臺東縣: ['臺東市', '成功鎮', '關山鎮', '卑南鄉', '大武鄉', '太麻里鄉', '東河鄉', '長濱鄉', '鹿野鄉', '池上鄉',
        '綠島鄉', '延平鄉', '海端鄉', '達仁鄉', '金峰鄉', '蘭嶼鄉'],
    花蓮縣: ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '富里鄉',
        '秀林鄉', '萬榮鄉', '卓溪鄉'],
    澎湖縣: ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],
    金門縣: ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],
    連江縣: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉']
};

// 更新地區選單
function updateAreaOptions() {
    const citySelect = document.getElementById('city');
    const areaSelect = document.getElementById('area');
    
    // 清空地區選單
    areaSelect.innerHTML = '<option value="">請選擇地區</option>';
    
    const selectedCity = citySelect.value;
    
    if (selectedCity && areas[selectedCity]) {
        areas[selectedCity].forEach(area => {
            const option = document.createElement('option');
            option.value = area;
            option.textContent = area;
            areaSelect.appendChild(option);
        });
    }
    
    // 清空後續選項
    document.getElementById('place').innerHTML = '<option value="">請選擇類別</option>';
    document.getElementById('location').innerHTML = '<option value="">請選擇詳細地點</option>';
}

// 更新類別選單
function updatePlaceOptions() {
    const citySelect = document.getElementById('city');
    const areaSelect = document.getElementById('area');
    const placeSelect = document.getElementById('place');
    
    // 清空類別選單
    placeSelect.innerHTML = '<option value="">請選擇類別</option>';
    
    const selectedCity = citySelect.value;
    const selectedArea = areaSelect.value;
    
    if (selectedCity && selectedArea && places[selectedCity] && places[selectedCity][selectedArea]) {
        places[selectedCity][selectedArea].forEach(place => {
            const option = document.createElement('option');
            option.value = place;
            option.textContent = place;
            placeSelect.appendChild(option);
        });
    }
    
    // 清空後續選項
    document.getElementById('location').innerHTML = '<option value="">請選擇詳細地點</option>';
}

// 更新詳細地點選單
function updateLocationOptions() {
    const citySelect = document.getElementById('city');
    const areaSelect = document.getElementById('area');
    const placeSelect = document.getElementById('place');
    const locationSelect = document.getElementById('location');
    
    // 清空詳細地點選單
    locationSelect.innerHTML = '<option value="">請選擇詳細地點</option>';
    
    const selectedCity = citySelect.value;
    const selectedArea = areaSelect.value;
    const selectedPlace = placeSelect.value;
    
    if (selectedCity && selectedArea && selectedPlace && locations[selectedCity] && locations[selectedCity][selectedArea] && locations[selectedCity][selectedArea][selectedPlace]) {
        locations[selectedCity][selectedArea][selectedPlace].forEach(location => {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            locationSelect.appendChild(option);
        });
    }
}

// 切換「其他」輸入框與下拉選單
function toggleOtherInput() {
    const otherCheckbox = document.getElementById('other');
    const otherInput = document.getElementById('input-other');
    const placeSelect = document.getElementById('place');
    const locationSelect = document.getElementById('location'); // 操作整個 <select>

    if (otherCheckbox.checked) {
        // 勾選「其他」時
        otherInput.style.display = "block"; // 顯示輸入框
        otherInput.disabled = false; // 啟用輸入框
        placeSelect.disabled = true; // 禁用類別下拉選單
        locationSelect.disabled = true; // 禁用詳細地點下拉選單
    } else {
        // 取消勾選「其他」時
        otherInput.style.display = "none"; // 隱藏輸入框
        otherInput.value = ""; // 清空輸入框
        otherInput.disabled = true; // 禁用輸入框
        placeSelect.disabled = false; // 啟用類別下拉選單
        locationSelect.disabled = false; // 啟用詳細地點下拉選單
    }
}

const dateInput = document.getElementById('dateInput');
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // 格式化為 YYYY-MM-DD
    dateInput.value = formattedDate;

    // 如果需要強制顯示 YYYY/MM/DD，則監聽輸入框變化
    dateInput.addEventListener('change', (event) => {
        const selectedDate = new Date(event.target.value);
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // 月份補零
        const day = String(selectedDate.getDate()).padStart(2, '0'); // 日期補零
    });