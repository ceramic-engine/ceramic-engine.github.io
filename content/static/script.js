
document.addEventListener("DOMContentLoaded", function(e) {

    // Hamburger menu toggle
    var hamburger = document.querySelector('.hamburger');
    var nav = document.getElementById('site-navigation');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('menu-open');
            document.body.classList.toggle('menu-open');
        });
    }

    // Detect if sidebar is missing or empty and add centering class
    var sidebarLeft = document.querySelector('.page-standard .page-container .sidebar-left');
    var pageContainer = document.querySelector('.page-standard .page-container');

    if (pageContainer) {
        if (!sidebarLeft || !sidebarLeft.querySelector('.sidebar') || !sidebarLeft.querySelector('.sidebar').hasChildNodes()) {
            pageContainer.classList.add('no-sidebar');
        }
    }

    var iframes = document.querySelectorAll('.page-standard .page-container .content-right iframe');
    layoutIframes(iframes);

    function layoutIframes() {
        // Ensures iframes keep their aspect ratio when scaled from CSS
        for (var iframe of iframes) {
            var offsetWidth = iframe.offsetWidth;
            var attrWidth = parseInt(iframe.getAttribute('width'));
            var attrHeight = parseInt(iframe.getAttribute('height'));
            if (!isNaN(attrWidth) && !isNaN(attrHeight) && attrWidth > 0 && attrHeight > 0) {
                iframe.style.height = (offsetWidth * attrHeight / attrWidth) + 'px';
            }
        }
    }

    function layout() {
        layoutIframes();
    }

    window.addEventListener("resize", function(e) {
        layout();
    });

    var menus = document.querySelectorAll('.page-standard .page-container .sidebar-left li.menu-title');
    bindMenus(menus);

    function bindMenus(menus) {

        for (var menu of menus) {
            if (menu.classList.contains('menu-title')) {
                menu.addEventListener('click', function(e) {
                    for (var m of menus) {
                        if (m == e.currentTarget) {
                            if (m.classList.contains('selected')) {
                                m.classList.remove('selected');
                                console.log(m.nextSibling);
                                m.nextElementSibling.classList.remove('expanded');
                            }
                            else {
                                m.classList.add('selected');
                                console.log(m.nextSibling);
                                m.nextElementSibling.classList.add('expanded');
                            }
                        }
                    }
                });
            }
        }
    }

    // Clone sidebar into hamburger menu for mobile
    var sidebar = document.querySelector('.page-standard .page-container .sidebar-left .sidebar');

    if (sidebar && nav) {
        var sidebarMobile = document.createElement('div');
        sidebarMobile.className = 'sidebar-mobile';
        sidebarMobile.innerHTML = sidebar.innerHTML;
        nav.appendChild(sidebarMobile);

        // Bind menu toggle to mobile sidebar menu titles
        var mobileMenus = sidebarMobile.querySelectorAll('li.menu-title');
        bindMenus(mobileMenus);
    }

    var didLike = false;
    bindLikeCounter();

    function bindLikeCounter() {
        var likeCounters = document.querySelectorAll('.page-standard .page-container .content-right main #like-counter');

        var len = 0;
        for (var likeCounter of likeCounters) {
            len++;
        }

        if (len > 0) {
            var uri = window.location.pathname;
            if (!uri.startsWith('/'))
                uri = '/' + uri;

            var script = document.createElement("script");
            var callback = "jsonp" + new Date().getTime();
            var counterUrl = "https://api.ceramic-engine.com/like-counter" + uri + "?jsonp=" + callback;
            window[callback] = function(count) {
                document.body.removeChild(script);
                script = null;

                for (var likeCounter of likeCounters) {
                    likeCounter.innerHTML = [
                        '<div class="like-counter-button"><span class="like-counter-heart"></span> <span class="like-counter-count">+' + (count + 1) + '</span></div>'
                    ].join('\n');

                    likeCounter.addEventListener('click', function(e) {
                        if (!didLike)
                            addOneLike();
                    });
                }
            };
            script.src = counterUrl;
            document.body.appendChild(script);
        }
    }

    function addOneLike() {

        didLike = true;

        var likeCounters = document.querySelectorAll('.page-standard .page-container .content-right main #like-counter');

        for (var likeCounter of likeCounters) {
            likeCounter.classList.add('like-counter-liked');
        }

        var likeCounts = document.querySelectorAll('.page-standard .page-container .content-right main #like-counter .like-counter-count');

        var uri = window.location.pathname;
        if (!uri.startsWith('/'))
            uri = '/' + uri;

        var script = document.createElement("script");
        var callback = "jsonp" + new Date().getTime();
        var counterUrl = "https://api.ceramic-engine.com/like-counter" + uri + "?plus-one=1&jsonp=" + callback;
        window[callback] = function(count) {
            document.body.removeChild(script);
            script = null;

            for (var likeCount of likeCounts) {
                likeCount.innerHTML = '+' + (count + 1);
            }
        };
        script.src = counterUrl;
        document.body.appendChild(script);

    }

    function focusSampleIframe() {

        // Timing is a bit arbitrary but that seems to work well enough
        var iframe = document.querySelector('.page-standard .page-container .content-right main .ceramic-sample-iframe');
        if (iframe != null) {
            if (iframe.contentWindow != null)
                iframe.contentWindow.focus();
            var intervalId = setInterval(function() {
                if (iframe.contentWindow != null)
                    iframe.contentWindow.focus();
            }, 100);
            setTimeout(function() {
                clearInterval(intervalId);
            }, 5000);
        }

    }

    window.focusSampleIframe = focusSampleIframe();

    // API Docs search filter
    initApiDocsSearch();

    function initApiDocsSearch() {
        var body = document.body;
        if (!body.classList.contains('page-api-docs-index')) return;

        var main = document.querySelector('.page-standard .page-container .content-right main');
        if (!main) return;

        var tables = main.querySelectorAll('table');
        if (tables.length === 0) return;

        // Build search index from all tables, grouped by category
        var categories = [];
        for (var i = 0; i < tables.length; i++) {
            var table = tables[i];
            var rows = table.querySelectorAll('tbody tr');
            var categoryData = {
                table: table,
                header: null,
                rows: []
            };

            // Find the h2 header before this table
            var prev = table.previousElementSibling;
            while (prev) {
                if (prev.tagName === 'H2') {
                    categoryData.header = prev;
                    break;
                }
                prev = prev.previousElementSibling;
            }

            for (var j = 0; j < rows.length; j++) {
                var row = rows[j];
                var firstCell = row.querySelector('td:first-child');
                if (firstCell) {
                    var link = firstCell.querySelector('a');
                    var typeName = link ? link.textContent : firstCell.textContent;
                    categoryData.rows.push({
                        row: row,
                        typeName: typeName.toLowerCase()
                    });
                }
            }

            categories.push(categoryData);
        }

        // Create search input
        var searchContainer = document.createElement('div');
        searchContainer.className = 'api-search-container';
        searchContainer.innerHTML = '<input type="text" class="api-search-input" placeholder="Search a type..." />';

        // Insert before first h2 (after intro)
        var firstH2 = main.querySelector('h2');
        if (firstH2) {
            main.insertBefore(searchContainer, firstH2);
        } else {
            main.insertBefore(searchContainer, main.firstChild);
        }

        var searchInput = searchContainer.querySelector('.api-search-input');

        // Filter function
        searchInput.addEventListener('input', function() {
            var query = this.value.toLowerCase().trim();

            for (var i = 0; i < categories.length; i++) {
                var category = categories[i];
                var visibleCount = 0;

                for (var j = 0; j < category.rows.length; j++) {
                    var item = category.rows[j];
                    if (query === '' || item.typeName.indexOf(query) !== -1) {
                        item.row.style.display = '';
                        visibleCount++;
                    } else {
                        item.row.style.display = 'none';
                    }
                }

                // Hide category header and table if no visible rows
                var showCategory = visibleCount > 0;
                category.table.style.display = showCategory ? '' : 'none';
                if (category.header) {
                    category.header.style.display = showCategory ? '' : 'none';
                }
            }
        });
    }

});
