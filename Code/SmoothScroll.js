function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });

        history.pushState(null, '', window.location.pathname);
    }
}