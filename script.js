(() => {
  'use strict';

  const searchInput = document.getElementById('service-search');
  const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
  const cards = Array.from(document.querySelectorAll('.service-card'));
  const sections = Array.from(document.querySelectorAll('.service-section'));
  const resultCount = document.getElementById('result-count');
  const noResults = document.getElementById('no-results');
  const resetButton = document.getElementById('reset-search');

  if (!searchInput || !cards.length) return;

  let activeFilter = 'all';

  const updateResults = () => {
    const query = searchInput.value.trim().toLocaleLowerCase('ru');
    let visibleCount = 0;

    cards.forEach((card) => {
      const categoryMatches = activeFilter === 'all' || card.dataset.category === activeFilter;
      const textMatches = card.textContent.toLocaleLowerCase('ru').includes(query);
      const isVisible = categoryMatches && textMatches;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    sections.forEach((section) => {
      const hasVisibleCard = section.querySelector('.service-card:not([hidden])');
      section.hidden = !hasVisibleCard;
    });

    resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'сервис' : visibleCount > 1 && visibleCount < 5 ? 'сервиса' : 'сервисов'}`;
    noResults.hidden = visibleCount !== 0;
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });
      updateResults();
    });
  });

  searchInput.addEventListener('input', updateResults);
  resetButton?.addEventListener('click', () => {
    searchInput.value = '';
    activeFilter = 'all';
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === 'all';
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    updateResults();
    searchInput.focus();
  });

  // Быстрый переход к поиску по клавише "/", кроме случаев ввода текста в поле.
  document.addEventListener('keydown', (event) => {
    const target = event.target;
    const isTyping = target instanceof HTMLElement && (
      target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
    );
    if (event.key === '/' && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  updateResults();
})();
