import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Show scrollbar only while scrolling: toggle `scrolling` class on <html>
{
  // Minimal overlay scrollbar implementation (no layout shift)
  const createScrollbar = () => {
    const el = document.createElement('div');
    el.className = 'custom-scrollbar';
    el.innerHTML = '<div class="track"></div><div class="thumb"></div>';
    document.body.appendChild(el);
    return el;
  };

  const scrollbar = createScrollbar();
  const thumb = scrollbar.querySelector('.thumb');

  let hideTimeout = null;

  const updateThumb = () => {
    const doc = document.documentElement;
    const winH = window.innerHeight;
    const docH = Math.max(doc.scrollHeight, doc.offsetHeight);
    const scrollTop = window.scrollY || window.pageYOffset;

    if (docH <= winH) {
      // No scrolling needed
      scrollbar.style.display = 'none';
      return;
    }

    scrollbar.style.display = 'block';

    const trackHeight = scrollbar.clientHeight; // respects top/bottom padding set in CSS
    const thumbHeight = Math.max((winH / docH) * trackHeight, 24); // minimum thumb
    const maxThumbTop = trackHeight - thumbHeight;
    const thumbTop = (scrollTop / (docH - winH)) * maxThumbTop;

    thumb.style.height = thumbHeight + 'px';
    thumb.style.transform = `translateY(${thumbTop}px)`;
  };

  const showScrollbar = () => {
    scrollbar.classList.add('visible');
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      scrollbar.classList.remove('visible');
    }, 700);
  };

  const onScroll = () => {
    updateThumb();
    showScrollbar();
  };

  window.addEventListener('scroll', onScroll, {passive: true});
  window.addEventListener('resize', () => updateThumb());

  // initialize
  updateThumb();
}