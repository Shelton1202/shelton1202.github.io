// 1. 语言切换逻辑
function setLang(lang) {
    // 获取所有英文和日文的元素
    let enElems = document.querySelectorAll('.lang-en');
    let jaElems = document.querySelectorAll('.lang-ja');
    
    // 获取按钮
    let btnEn = document.getElementById('btn-en');
    let btnJa = document.getElementById('btn-ja');

    if (lang === 'en') {
        // 显示英文，隐藏日文
        enElems.forEach(el => el.style.display = 'inline');
        jaElems.forEach(el => el.style.display = 'none');
        
        // 特殊处理块级元素 (div/p) 防止布局错乱
        document.querySelectorAll('div.lang-en, p.lang-en').forEach(el => el.style.display = 'block');
        
        // 更新按钮状态
        btnEn.classList.add('active');
        btnJa.classList.remove('active');
    } else {
        // 显示日文，隐藏英文
        enElems.forEach(el => el.style.display = 'none');
        jaElems.forEach(el => el.style.display = 'inline');
        
        // 特殊处理块级元素
        document.querySelectorAll('div.lang-ja, p.lang-ja').forEach(el => el.style.display = 'block');

        // 更新按钮状态
        btnJa.classList.add('active');
        btnEn.classList.remove('active');
    }
}

// 2. 论文 BibTeX 展开 / 复制
function toggleBib(btn) {
    let bib = btn.closest('.pub-body').querySelector('.pub-bib');
    bib.hidden = !bib.hidden;
    btn.classList.toggle('active', !bib.hidden);
}

function copyBib(btn) {
    let text = btn.parentElement.querySelector('pre').innerText;
    navigator.clipboard.writeText(text).then(() => {
        btn.innerText = 'Copied!';
        setTimeout(() => { btn.innerText = 'Copy'; }, 1500);
    });
}
