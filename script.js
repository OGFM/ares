let target = 'google'; // Default target

function setTarget(site) {
  target = site;
}

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') return;
  
  let url = '';

  switch(target) {
    case 'google':
      url = `https://www.google.com/results?search_query=${encodeURIComponent(query)}`;
      break;
    case 'wikipedia':
      url = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`;
      break;
    case 'youtube':
      url = `https://www.youtube.com/search?q=${encodeURIComponent(query)}`;
      break;
  }

  window.open(url, '_blank');
});
