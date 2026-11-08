(() => {
    const header = document.querySelector('header');
    const themeToggle = document.getElementById('themeToggle');
    if (!header || !themeToggle) {
        console.error('Mobile navigation requires a header and theme toggle.');
        return;
    }

    let menuToggle = document.querySelector('[data-mobile-menu-toggle]');
    if (!menuToggle) {
        menuToggle = document.createElement('button');
        menuToggle.type = 'button';
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.setAttribute('data-mobile-menu-toggle', '');
        menuToggle.setAttribute('aria-label', 'Open menu');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-controls', 'site-mobile-menu');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        themeToggle.insertAdjacentElement('afterend', menuToggle);
    }

    const menu = document.createElement('div');
    menu.id = 'site-mobile-menu';
    menu.className = 'mobile-menu-panel';
    menu.hidden = true;
    menu.setAttribute('aria-label', 'Mobile navigation menu');
    menu.innerHTML = `
        <div class="mobile-menu-content">
            <div class="mobile-menu-benefits" aria-label="LiveHandle benefits">
                <div><i class="fa-solid fa-shield" aria-hidden="true"></i><span><strong>Free</strong><small>Always</small></span></div>
                <div><i class="fa-solid fa-bolt" aria-hidden="true"></i><span><strong>Fast</strong><small>Live data</small></span></div>
                <div><i class="fa-solid fa-lock" aria-hidden="true"></i><span><strong>Private</strong><small>Public only</small></span></div>
            </div>
            <p class="mobile-menu-heading"><i class="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i> Tools</p>
            <nav class="mobile-menu-links" aria-label="Tools">
                <a href="index.html"><i class="fa-solid fa-house" aria-hidden="true"></i><span>Home</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                <a href="instagram-analyzer.html"><i class="fa-brands fa-instagram" aria-hidden="true"></i><span>Instagram analyzer</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                <a href="tiktok-analyzer.html"><i class="fa-brands fa-tiktok" aria-hidden="true"></i><span>TikTok analyzer</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                <a href="tiktok-growth.html"><i class="fa-solid fa-chart-line" aria-hidden="true"></i><span>TikTok growth</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                <a href="video-downloader.html"><i class="fa-solid fa-download" aria-hidden="true"></i><span>Video downloader</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                <a href="content-trends.html"><i class="fa-solid fa-fire" aria-hidden="true"></i><span>Trends</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                <a href="instagram-analyzer.html#igForm"><i class="fa-solid fa-heart" aria-hidden="true"></i><span>IG engagement</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
                <a href="tiktok-analyzer.html#engagement-calculator"><i class="fa-solid fa-comment" aria-hidden="true"></i><span>TT engagement</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></a>
            </nav>
            <p class="mobile-menu-heading">More</p>
            <nav class="mobile-menu-secondary" aria-label="More pages">
                <a href="learn.html">Learn</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>`;
    header.insertAdjacentElement('afterend', menu);

    const mobileNav = document.createElement('nav');
    mobileNav.className = 'site-mobile-nav';
    mobileNav.setAttribute('aria-label', 'Mobile navigation');
    mobileNav.innerHTML = `
        <a href="index.html"><span><i class="fa-solid fa-house" aria-hidden="true"></i></span><small>Home</small></a>
        <a href="video-downloader.html"><span><i class="fa-solid fa-download" aria-hidden="true"></i></span><small>Download</small></a>
        <a href="tiktok-growth.html"><span><i class="fa-solid fa-chart-line" aria-hidden="true"></i></span><small>Growth</small></a>
        <a href="content-trends.html"><span><i class="fa-solid fa-fire" aria-hidden="true"></i></span><small>Trends</small></a>`;
    document.body.append(mobileNav);

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    menu.querySelectorAll('a[href]').forEach((link) => {
        if (link.getAttribute('href').split('#')[0] === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    });
    mobileNav.querySelectorAll('a').forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('is-active');
            link.setAttribute('aria-current', 'page');
        }
    });

    function setMenuOpen(open, restoreFocus = false) {
        menu.hidden = !open;
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menuToggle.innerHTML = `<i class="fa-solid ${open ? 'fa-xmark' : 'fa-bars'}" aria-hidden="true"></i>`;
        document.body.classList.toggle('mobile-menu-open', open);
        if (restoreFocus) menuToggle.focus();
    }

    menuToggle.addEventListener('click', () => {
        setMenuOpen(menu.hidden);
    });
    menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !menu.hidden) setMenuOpen(false, true);
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && !menu.hidden) setMenuOpen(false);
    });
})();
