let isArabic = true;

// Load saved language from browser
const savedLang = localStorage.getItem("lang");
if (savedLang) {
    isArabic = savedLang === "ar";
}
function t(key) {
    const lang = localStorage.getItem("lang") || "en";
    // Check if the key exists in your translation file, otherwise return the key itself
    return (translations[key] && translations[key][lang]) ? translations[key][lang] : key;
}
function updateLanguage() {
    // Change direction for whole page
    document.body.dir = isArabic ? "rtl" : "ltr";

    // Update all elements
    for (const id in translations) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = isArabic
                ? translations[id].ar
                : translations[id].en;
        }
    }
    for (const id in translations) {
    const el = document.getElementById(id);
    if (el) {// Only if element exists
        el.textContent = isArabic ? translations[id].ar : translations[id].en;
    }
}
    document.querySelectorAll("[data-key]").forEach(input => {
        const key = input.dataset.key;
        if (translations[key]) {
            input.placeholder = isArabic
                ? translations[key].ar
                : translations[key].en;
        }

});
}
// Run automatically when page loads
updateLanguage();
