
document.addEventListener('DOMContentLoaded', function() {

    /* ---- Mobile nav ---- */
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            var isOpen = navLinks.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ---- Scroll reveal (re-run below whenever the gallery re-renders) ---- */
    function observeReveals(scope) {
        var revealEls = scope.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window && revealEls.length) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
            revealEls.forEach(function(el) { observer.observe(el); });
        } else {
            revealEls.forEach(function(el) { el.classList.add('in'); });
        }
    }
    observeReveals(document);

    /* ---- Current year in footer ---- */
    var yearEl = document.getElementById('year');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

    /* ---- Project data — edit this array to add your own projects ---- */
    var PROJECTS = [{
            id: "5",
            title: "Kololo Hillside Residence",
            category: "Construction",
            location: "Kololo, Kampala",
            year: "2025",
            description: "Full architectural design and construction supervision for a four-bedroom family home.",
            image: "images/5.jpeg"
        },
        {
            id: "6",
            title: "Kololo Hillside Residence",
            category: "Construction",
            location: "Kololo, Kampala",
            year: "2025",
            description: "Full architectural design and construction supervision for a four-bedroom family home.",
            image: "images/6.jpeg"
        },
        {
            id: "1",
            title: "Mbarara Apartments",
            category: "Construction",
            location: "Mbarara City",
            year: "2024",
            description: "Materials supply and site construction management for a three-storey apartment building.",
            image: "images/1.jpeg"
        },
        {
            id: "2",
            title: "Mbarara Apartments",
            category: "Construction",
            location: "Mbarara City",
            year: "2024",
            description: "Materials supply and site construction management for a three-storey apartment building.",
            image: "images/2.jpeg"
        },
        {
            id: "34",
            title: "Mukono Estate Land Survey",
            category: "Surveying",
            location: "Mukono District",
            year: "2025",
            description: "Land survey of an estate in MUkono for Residential Building",
            image: "images/34.jpg"
        },
        {
            id: "21",
            title: "Wakiso Family House — Electrical Insatllation",
            category: "Electrical Installation",
            location: "Wakiso Town",
            year: "2023",
            description: "Full house wiring.",
            image: "images/21.jpeg"
        },
        {
            id: "24",
            title: "Wakiso Family House — Electrical Insatllation",
            category: "Electrical Installation",
            location: "Wakiso Town",
            year: "2023",
            description: "Full house wiring.",
            image: "images/24.jpeg"
        },
        {
            id: "16",
            title: "Bushenyi Rental Units - Plumbing Works",
            category: "Plumbing Works",
            location: "Bushenyi",
            year: "2023",
            description: "Sanitary installations and pipe work for plumbing of six self-contained rental units.",
            image: "images/16.jpeg"
        },
         {
            id: "17",
            title: "Bushenyi Rental Units - Plumbing Works",
            category: "Plumbing Works",
            location: "Bushenyi",
            year: "2023",
            description: "Sanitary installations and pipe work for plumbing of six self-contained rental units.",
            image: "images/17.jpeg"
        },
         {
            id: "18",
            title: "Bushenyi Rental Units - Plumbing Works",
            category: "Plumbing Works",
            location: "Bushenyi",
            year: "2023",
            description: "Sanitary installations and pipe work for plumbing of six self-contained rental units.",
            image: "images/18.jpeg"
        },
        {
            id: "22",
            title: "Ntinda Apartments — Interior Fit-Out",
            category: "Interior & Exterior",
            location: "Ntinda, Kampala",
            year: "2024",
            description: "Interior finishing, painting and fittings across an eight-unit apartment block.",
            image: "images/22.jpeg"
        },
        {
            id: "24",
            title: "Ntinda Apartments — Interior Fit-Out",
            category: "Interior & Exterior",
            location: "Ntinda, Kampala",
            year: "2024",
            description: "Interior finishing, painting and fittings across an eight-unit apartment block.",
            image: "images/24.jpeg"
        },
        {
            id: "23",
            title: "Ntinda Apartments — Interior Fit-Out",
            category: "Interior & Exterior",
            location: "Ntinda, Kampala",
            year: "2024",
            description: "Interior finishing, painting and fittings across an eight-unit apartment block.",
            image: "images/23.jpeg"
        },
        {
            id: "25",
            title: "Ntinda Apartments — Interior Fit-Out",
            category: "Interior & Exterior",
            location: "Ntinda, Kampala",
            year: "2024",
            description: "Interior finishing, painting and fittings across an eight-unit apartment block.",
            image: "images/25.jpeg"
        },
        {
            id: "25",
            title: "Ntinda Apartments — Interior Fit-Out",
            category: "Interior & Exterior",
            location: "Ntinda, Kampala",
            year: "2024",
            description: "Interior finishing, painting and fittings across an eight-unit apartment block.",
            image: "images/25.jpeg"
        },
        {
            id: "26",
            title: "Ntinda Apartments — Interior Fit-Out",
            category: "Interior & Exterior",
            location: "Ntinda, Kampala",
            year: "2024",
            description: "Interior finishing, painting and fittings across an eight-unit apartment block.",
            image: "images/26.jpeg"
        },
        {
            id: "14",
            title: "Gulu Residential House — Materials Supply",
            category: "Materials Supply",
            location: "Gulu Town",
            year: "2023",
            description: "Supply and delivery of sand, gravel and hardcore for foundation, slab and general construction works.",
            image: "images/14.jpeg"
        },
        {
            id: "15",
            title: "Gulu Residential House — Materials Supply",
            category: "Materials Supply",
            location: "Gulu Town",
            year: "2023",
            description: "Supply and delivery of sand, gravel and hardcore for foundation, slab and general construction works.",
            image: "images/15.jpeg"
        },
        {
            id: "4",
            title: "Gulu Residential House — Materials Supply",
            category: "Materials Supply",
            location: "Gulu Town",
            year: "2023",
            description: "Supply and delivery of sand, gravel and hardcore for foundation, slab and general construction works.",
            image: "images/4.jpeg"
        },
        
        
    ];

    /* ---- Combine entries into projects (same title + category = one project) ---- */
    var EXTRA_FIELDS = ['details', 'scope', 'client', 'duration', 'status'];

    function slugify(text) {
        return String(text).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }

    function buildProjects(raw) {
        var byKey = {};
        var list = [];
        var usedIds = {};

        raw.forEach(function(item) {
            var photos = item.images ? item.images.slice() : (item.image ? [item.image] : []);
            var key = (item.title + '|' + item.category).toLowerCase();
            var project = byKey[key];

            if (!project) {
                project = {
                    title: item.title,
                    category: item.category,
                    location: item.location,
                    year: item.year,
                    description: item.description,
                    images: []
                };
                var id = 'p-' + slugify(item.title + ' ' + item.category);
                var n = 2;
                while (usedIds[id]) { id = 'p-' + slugify(item.title + ' ' + item.category) + '-' + n++; }
                usedIds[id] = true;
                project.id = id;
                byKey[key] = project;
                list.push(project);
            }

            photos.forEach(function(src) {
                if (project.images.indexOf(src) === -1) project.images.push(src);
            });

            EXTRA_FIELDS.forEach(function(field) {
                if (item[field] && !project[field]) project[field] = item[field];
            });
        });

        return list;
    }

    var ALL_PROJECTS = buildProjects(PROJECTS);

    function esc(text) {
        return String(text == null ? '' : text)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    /* ---- Gallery rendering / filtering ---- */
    var grid = document.getElementById('galleryGrid');
    var emptyState = document.getElementById('emptyState');
    var filterBar = document.getElementById('filterBar');

    if (!grid) return;

    var activeFilter = 'All';

    function pinIcon() {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="12" height="12"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.3"/></svg>';
    }

    function photoIcon() {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 16l-5-5-8 8"/></svg>';
    }

    function cardTemplate(project) {
        var article = document.createElement('article');
        article.className = 'project-card reveal';
        article.setAttribute('data-category', project.category);
        article.setAttribute('tabindex', '0');
        article.setAttribute('role', 'button');
        article.setAttribute('aria-label', 'View project: ' + project.title);

        var cover = project.images[0] || '';
        var count = project.images.length;
        var countBadge = '';

        article.innerHTML =
            '<div class="project-thumb">' +
            '<span class="project-tag">' + esc(project.category) + '</span>' +
            countBadge +
            (cover ? '<img src="' + esc(cover) + '" alt="' + esc(project.title) + '" loading="lazy">' : '') +
            '<div class="no-image" ' + (cover ? 'hidden' : '') + '></div>' +
            '</div>' +
            '<div class="project-info">' +
            '<h3>' + esc(project.title) + '</h3>' +
            '<p>' + esc(project.description) + '</p>' +
            '<div class="project-loc">' + pinIcon() + '<span>' + esc(project.location) + ' &middot; ' + esc(project.year) + '</span></div>' +
            '</div>';

        var img = article.querySelector('img');
        var placeholder = article.querySelector('.no-image');
        if (img) {
            img.addEventListener('error', function() {
                img.hidden = true;
                placeholder.hidden = false;
            });
        }

        article.addEventListener('click', function() { openProject(project, article); });
        article.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProject(project, article);
            }
        });

        return article;
    }

    function render() {
        grid.innerHTML = '';
        var list = activeFilter === 'All' ?
            ALL_PROJECTS :
            ALL_PROJECTS.filter(function(p) { return p.category === activeFilter; });

        list.forEach(function(project) {
            grid.appendChild(cardTemplate(project));
        });

        if (emptyState) emptyState.classList.toggle('show', list.length === 0);

        observeReveals(grid);
    }

    /* ---- Project detail view ---- */
    var pd = document.getElementById('projectDetail');
    var pdStage = document.getElementById('pdStage');
    var pdMain = document.getElementById('pdMain');
    var pdPrev = document.getElementById('pdPrev');
    var pdNext = document.getElementById('pdNext');
    var pdCount = document.getElementById('pdCount');
    var pdThumbs = document.getElementById('pdThumbs');
    var pdTag = document.getElementById('pdTag');
    var pdTitle = document.getElementById('pdTitle');
    var pdDesc = document.getElementById('pdDesc');
    var pdDetails = document.getElementById('pdDetails');
    var pdScopeWrap = document.getElementById('pdScopeWrap');
    var pdScope = document.getElementById('pdScope');
    var pdFacts = document.getElementById('pdFacts');
    var pdWhatsapp = document.getElementById('pdWhatsapp');
    var pdClose = document.getElementById('pdClose');

    var current = null;
    var currentIndex = 0;
    var lastFocus = null;

    function isOpen() { return pd && pd.classList.contains('open'); }

    function showPhoto(i) {
        var imgs = current.images;
        if (!imgs.length) {
            pdStage.classList.add('is-empty');
            pdCount.textContent = '';
            return;
        }
        currentIndex = (i + imgs.length) % imgs.length;
        pdMain.src = imgs[currentIndex];
        pdMain.alt = current.title + ' — photo ' + (currentIndex + 1);
        pdCount.textContent = (currentIndex + 1) + ' / ' + imgs.length;

        Array.prototype.forEach.call(pdThumbs.children, function(thumb, n) {
            var active = n === currentIndex;
            thumb.classList.toggle('active', active);
            thumb.setAttribute('aria-current', active ? 'true' : 'false');
        });

        var activeThumb = pdThumbs.children[currentIndex];
        if (activeThumb && pdThumbs.scrollTo) {
            pdThumbs.scrollTo({
                left: activeThumb.offsetLeft - (pdThumbs.clientWidth - activeThumb.clientWidth) / 2,
                behavior: 'smooth'
            });
        }

        // warm the cache for the neighbouring photos
        [1, -1].forEach(function(step) {
            var neighbour = new Image();
            neighbour.src = imgs[(currentIndex + step + imgs.length) % imgs.length];
        });
    }

    function fillDetail(project) {
        current = project;

        pdTag.textContent = project.category;
        pdTitle.textContent = project.title;
        pdDesc.textContent = project.description || '';

        pdDetails.textContent = project.details || '';
        pdDetails.hidden = !project.details;

        pdScope.innerHTML = '';
        var hasScope = project.scope && project.scope.length;
        if (hasScope) {
            project.scope.forEach(function(point) {
                var li = document.createElement('li');
                li.textContent = point;
                pdScope.appendChild(li);
            });
        }
        pdScopeWrap.hidden = !hasScope;

        pdFacts.innerHTML = '';
        [
            ['Category', project.category],
            ['Location', project.location],
            ['Year', project.year],
            ['Client', project.client],
            ['Duration', project.duration],
            ['Status', project.status]
        ].forEach(function(row) {
            if (!row[1]) return;
            var wrap = document.createElement('div');
            var dt = document.createElement('dt');
            var dd = document.createElement('dd');
            dt.textContent = row[0];
            dd.textContent = row[1];
            wrap.appendChild(dt);
            wrap.appendChild(dd);
            pdFacts.appendChild(wrap);
        });

        pdWhatsapp.href = 'https://wa.me/256745649703?text=' + encodeURIComponent(
            'Hello Adonai Engineering, I saw your project "' + project.title + '" on your website and would like to discuss something similar.'
        );

        pdThumbs.innerHTML = '';
        project.images.forEach(function(src, n) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'pd-thumb';
            btn.setAttribute('aria-label', 'Show photo ' + (n + 1));
            var thumbImg = document.createElement('img');
            thumbImg.src = src;
            thumbImg.alt = '';
            thumbImg.loading = 'lazy';
            thumbImg.addEventListener('error', function() { thumbImg.style.visibility = 'hidden'; });
            btn.appendChild(thumbImg);
            btn.addEventListener('click', function() { showPhoto(n); });
            pdThumbs.appendChild(btn);
        });

        pd.classList.toggle('pd-single', project.images.length <= 1);
        pdStage.classList.remove('is-empty');
        showPhoto(0);
    }

    function showDetail(project) {
        fillDetail(project);
        pd.classList.add('open');
        pd.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        pd.scrollTop = 0;
        pdClose.focus();
    }

    function hideDetail() {
        if (!isOpen()) return;
        pd.classList.remove('open');
        pd.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocus && lastFocus.focus) lastFocus.focus();
        lastFocus = null;
    }

    function openProject(project, triggerEl) {
        lastFocus = triggerEl || null;
        // history entry so the phone's Back button closes the project
        history.pushState({ pd: project.id }, '', '#' + project.id);
        showDetail(project);
    }

    function closeProject() {
        if (!isOpen()) return;
        if (history.state && history.state.pd) {
            history.back(); // popstate below does the hiding
        } else {
            hideDetail();
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    }

    function projectFromHash() {
        var id = window.location.hash.replace('#', '');
        if (!id) return null;
        for (var i = 0; i < ALL_PROJECTS.length; i++) {
            if (ALL_PROJECTS[i].id === id) return ALL_PROJECTS[i];
        }
        return null;
    }

    window.addEventListener('popstate', function() {
        var project = projectFromHash();
        if (project) {
            if (!isOpen() || current !== project) showDetail(project);
        } else if (isOpen()) {
            hideDetail();
        }
    });

    if (pd) {
        pdClose.addEventListener('click', closeProject);
        pd.querySelector('.pd-backdrop').addEventListener('click', closeProject);
        pdPrev.addEventListener('click', function() { showPhoto(currentIndex - 1); });
        pdNext.addEventListener('click', function() { showPhoto(currentIndex + 1); });

        pdMain.addEventListener('load', function() { pdStage.classList.remove('is-empty'); });
        pdMain.addEventListener('error', function() { pdStage.classList.add('is-empty'); });

        // swipe left / right on phones
        var touchX = null;
        pdStage.addEventListener('touchstart', function(e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
        pdStage.addEventListener('touchend', function(e) {
            if (touchX === null) return;
            var dx = e.changedTouches[0].clientX - touchX;
            touchX = null;
            if (Math.abs(dx) > 45) showPhoto(currentIndex + (dx < 0 ? 1 : -1));
        }, { passive: true });

        document.addEventListener('keydown', function(e) {
            if (!isOpen()) return;
            if (e.key === 'Escape') { closeProject(); }
            else if (e.key === 'ArrowRight') { showPhoto(currentIndex + 1); }
            else if (e.key === 'ArrowLeft') { showPhoto(currentIndex - 1); }
            else if (e.key === 'Tab') {
                // keep keyboard focus inside the open project
                var focusable = pd.querySelectorAll('button:not([hidden]), a[href]');
                var visible = Array.prototype.filter.call(focusable, function(el) { return el.offsetParent !== null; });
                if (!visible.length) return;
                var first = visible[0];
                var last = visible[visible.length - 1];
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        });
    }

    /* ---- Filter buttons ---- */
    if (filterBar) {
        filterBar.addEventListener('click', function(e) {
            var btn = e.target.closest('.filter-btn');
            if (!btn) return;
            filterBar.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            activeFilter = btn.getAttribute('data-filter');
            render();
        });
    }

    /* ---- Arriving from a home-page tile (projects.html?category=Surveying) ----
       Runs once, before the first render — NOT inside render(), otherwise it
       would re-apply the URL's category every time a filter button is clicked. */
    var wantedCategory = new URLSearchParams(window.location.search).get('category');
    if (wantedCategory && filterBar) {
        filterBar.querySelectorAll('.filter-btn').forEach(function(b) {
            if (b.getAttribute('data-filter') === wantedCategory) {
                filterBar.querySelectorAll('.filter-btn').forEach(function(x) { x.classList.remove('active'); });
                b.classList.add('active');
                activeFilter = wantedCategory;
                filterBar.style.scrollMarginTop = '96px';
                setTimeout(function() { filterBar.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 200);
            }
        });
    }

    render();

    /* ---- Shared link: projects.html#p-some-project opens it directly ---- */
    var linked = projectFromHash();
    if (linked && pd) { showDetail(linked); }
});