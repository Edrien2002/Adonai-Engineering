const EMAILJS_PUBLIC_KEY = "cKr_Ch-9PCarXgI5e"; // Account → General → Public Key
const EMAILJS_SERVICE_ID = "service_if8q58y"; // Email Services → your service
const EMAILJS_TEMPLATE_ID = "template_mldiij9"; // Email Templates → your notification template
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_au2k0co"; // optional — leave as-is to skip

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

    /* ---- Scroll reveal ---- */
    var revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && revealEls.length) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(function(el) { observer.observe(el); });
    } else {
        revealEls.forEach(function(el) { el.classList.add('in'); });
    }

    /* ---- Current year in footer ---- */
    var yearEl = document.getElementById('year');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

    /* ---- EmailJS init ---- */
    if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    /* ---- Contact form ---- */
    var form = document.getElementById('contactForm');
    var status = document.getElementById('formStatus');
    var submitBtn = document.getElementById('submitBtn');

    function setStatus(message, type) {
        if (!status) return;
        status.textContent = message;
        status.classList.remove('success', 'error', 'sending');
        status.classList.add('show', type);
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Honeypot: if this hidden field got filled in, silently drop it —
            // a real visitor never sees or fills it.
            if (form.hp_check && form.hp_check.value) {
                return;
            }

            if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
                setStatus('The contact form is not fully set up yet — add your EmailJS keys in contact.js (see the comment at the top of the file).', 'error');
                return;
            }

            var templateParams = {
                name: form.name.value.trim(),
                phone: form.phone.value.trim(),
                email: form.email.value.trim(),
                service: form.service.value,
                message: form.message.value.trim()
            };

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending…';
            setStatus('Sending your enquiry…', 'sending');

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(function() {
                    setStatus('Thanks. Your enquiry has been sent. We will get back to you by phone or email shortly.', 'success');
                    form.reset();

                    // Best-effort autoreply to the visitor. This never blocks or
                    // overrides the success message above — if it fails (or isn't
                    // configured), the enquiry itself has still gone through.
                    if (EMAILJS_AUTOREPLY_TEMPLATE_ID !== "YOUR_AUTOREPLY_TEMPLATE_ID") {
                        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, templateParams)
                            .catch(function(err) {
                                console.error('EmailJS autoreply error:', err);
                            });
                    }
                })
                .catch(function(err) {
                    console.error('EmailJS error:', err);
                    setStatus('Something went wrong sending your inquiry. Please call or WhatsApp us directly using the provided details.', 'error');
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send enquiry';
                });
        });
    }

});