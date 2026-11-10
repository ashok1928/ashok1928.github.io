/*
  PUBLICATION EDITING GUIDE
  1. Add a new object to the publications array.
  2. type must be "journal" or "conference".
  3. Optionally provide a real article URL in the `url` property.
     If omitted, the website links to a Google Scholar title search.
  4. Update the counts in index.html when you add publications.
*/
const publications = [
  {
    year: 2026, type: 'journal',
    title: 'Autonomous Pipeline Inspection Using Lightweight Vision-Based UAV Tracking',
    authors: 'N. Pandya, Surya Prakash SK, A. Gupta, A. K. Sivarathri, J. Rachapudi, P. Singh, P. Hambarde & A. Shukla',
    venue: 'IEEE Transactions on Artificial Intelligence'
  },
  {
    year: 2025, type: 'journal',
    title: 'Toward effective collaboration and tracking strategy for ground robot to assist longer missions of aerial robot',
    authors: 'A. K. Sivarathri & A. Shukla',
    venue: 'International Journal of Advanced Robotic Systems, 22(2)'
  },
  {
    year: 2025, type: 'journal',
    title: 'Autonomous Non-Communicative Navigation Assistance to the Ground Vehicle by an Aerial Vehicle',
    authors: 'A. K. Sivarathri & A. Shukla',
    venue: 'Machines, 13(2), 152'
  },
  {
    year: 2025, type: 'journal',
    title: 'Autonomous reactive obstacle avoidance for ground vehicle by tracking the motion of aerial vehicle',
    authors: 'A. K. Sivarathri & A. Shukla',
    venue: 'International Journal of Intelligent Robotics and Applications'
  },
  {
    year: 2024, type: 'conference',
    title: 'Autonomous Vision-based Tracking of UAV by a Flexible AGV',
    authors: 'A. K. Sivarathri, A. Shukla & P. Kumar',
    venue: 'IEEE/ASME International Conference on Mechatronic and Embedded Systems and Applications (MESA)'
  },
  {
    year: 2024, type: 'conference',
    title: 'Autonomous Navigation of AGV by Tracking the Motion of UAV',
    authors: 'A. K. Sivarathri & A. Shukla',
    venue: 'IEEE/ASME International Conference on Mechatronic and Embedded Systems and Applications (MESA)'
  },
  {
    year: 2024, type: 'conference',
    title: 'Waypoint Navigation in the Image Plane for Autonomous Navigation of UAV in Vision-Based UAV-AGV System',
    authors: 'A. K. Sivarathri, A. Shukla & A. Gupta',
    venue: 'IEEE/ASME International Conference on Mechatronic and Embedded Systems and Applications (MESA)'
  },
  {
    year: 2024, type: 'conference',
    title: 'Autonomous Non-communicative and Vision-based Control Strategy for AGV to Track UAV',
    authors: 'A. K. Sivarathri & A. Shukla',
    venue: 'International Conference on Control, Automation and Systems (ICCAS)'
  },
  {
    year: 2024, type: 'conference',
    title: 'Using Quadcopter for Vision-based Tracking of High-Rise Vertical Structure',
    authors: 'A. Gupta, A. Shukla, A. K. Sivarathri & N. Pandya',
    venue: 'IEEE/ASME International Conference on Mechatronic and Embedded Systems and Applications (MESA)'
  },
  {
    year: 2024, type: 'conference',
    title: 'Vision-Based Autonomous Tracking of High-Rise Vertical Structure Using a Quadcopter',
    authors: 'A. Gupta, A. Shukla, A. K. Sivarathri & N. Pandya',
    venue: 'International Conference on Computer and Automation Engineering (ICCAE)'
  },
  {
    year: 2023, type: 'journal',
    title: 'Kinematic modes of vision-based heterogeneous UAV-AGV system',
    authors: 'A. K. Sivarathri, A. Shukla & A. Gupta',
    venue: 'Array, 17, 100269'
  },
  {
    year: 2023, type: 'conference',
    title: '3-D Trajectory Tracking in the Image Plane for Autonomous Navigation of UAV in UAV-AGV System',
    authors: 'A. K. Sivarathri, A. Shukla & A. Gupta',
    venue: 'International Conference on Automation, Robotics and Applications (ICARA)'
  },
  {
    year: 2022, type: 'conference',
    title: 'Trajectory Tracking in the Image Frame for Autonomous UAV Navigation in UAV - AGV Multi-Agent System',
    authors: 'A. K. Sivarathri, A. Shukla, A. Gupta & A. Kumar',
    venue: 'ASME International Mechanical Engineering Congress & Exposition (IMECE)'
  },
  {
    year: 2022, type: 'conference',
    title: 'Vision Based Autonomous Inspection of the Vertical Structure Using Unmanned Aerial Vehicle (UAV)',
    authors: 'A. Gupta, A. Shukla, A. K. Sivarathri & A. Kumar',
    venue: 'ASME International Mechanical Engineering Congress & Exposition (IMECE)'
  },
  {
    year: 2022, type: 'conference',
    title: 'Vision-Based Autonomous Inspection of Horizontal Structures Using Unmanned Aerial Vehicle',
    authors: 'A. Kumar, A. Shukla, A. Gupta & A. K. Sivarathri',
    venue: 'ASME International Mechanical Engineering Congress & Exposition (IMECE)'
  },
  {
    year: 2020, type: 'journal',
    title: 'Effect of high temperature and poling on the wireless signal detection from soft and hard PZT',
    authors: 'S. K. Sharma, A. K. Sivarathri & V. S. Chauhan',
    venue: 'Journal of Materials Science: Materials in Electronics, 31, 20168–20180'
  },
  {
    year: 2020, type: 'conference',
    title: 'Detection of Velocity Based on Change in the Apparent Size',
    authors: 'A. K. Sivarathri, A. Mohammad & P. P. Shitole',
    venue: 'Engineering Proceedings, 2(1), 27'
  },
  {
    year: 2018, type: 'journal',
    title: 'Effect of low temperature on electromagnetic radiation from soft PZT SP-5A under impact loading',
    authors: 'S. K. Sharma, A. K. Sivarathri, V. S. Chauhan & M. Sinapius',
    venue: 'Journal of Electronic Materials, 47(10), 5930–5938'
  }
];

const list = document.getElementById('publication-list');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const searchInput = document.getElementById('publication-search');
const showButton = document.getElementById('show-publications');
const publicationStatus = document.getElementById('publication-status');
let currentFilter = 'all';
let showAll = false;
const INITIAL_LIMIT = 6;

function makeTextElement(tagName, className, content) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = content;
  return element;
}

function renderPublications() {
  const searchTerm = searchInput.value.toLocaleLowerCase().trim();
  const matching = publications.filter((pub) => {
    const filterMatches = currentFilter === 'all' || currentFilter === pub.type;
    const queryMatches = `${pub.title} ${pub.authors} ${pub.venue} ${pub.year}`.toLocaleLowerCase().includes(searchTerm);
    return filterMatches && queryMatches;
  });
  const expanded = showAll || searchTerm.length > 0;
  const visible = expanded ? matching : matching.slice(0, INITIAL_LIMIT);
  const fragment = document.createDocumentFragment();

  visible.forEach((pub) => {
    const row = makeTextElement('article', 'publication-item', '');
    row.appendChild(makeTextElement('span', 'publication-year', String(pub.year)));
    const details = makeTextElement('div', 'publication-details', '');
    details.appendChild(makeTextElement('span', 'publication-type', pub.type === 'journal' ? 'JOURNAL ARTICLE' : 'CONFERENCE PAPER'));
    details.appendChild(makeTextElement('h3', '', pub.title));
    details.appendChild(makeTextElement('p', 'publication-authors', pub.authors));
    details.appendChild(makeTextElement('p', 'publication-venue', pub.venue));
    row.appendChild(details);
    const link = document.createElement('a');
    link.className = 'pub-link';
    link.href = pub.url || `https://scholar.google.com/scholar?q=${encodeURIComponent('"' + pub.title + '"')}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = pub.url ? 'Open paper ↗' : 'Find paper ↗';
    link.setAttribute('aria-label', `${pub.url ? 'Open' : 'Search for'} ${pub.title} in a new tab`);
    row.appendChild(link);
    fragment.appendChild(row);
  });

  if (!matching.length) fragment.appendChild(makeTextElement('p', 'no-results', 'No matching publications. Try another keyword.'));
  list.replaceChildren(fragment);
  showButton.hidden = expanded || matching.length <= INITIAL_LIMIT;
  publicationStatus.textContent = `Showing ${visible.length} of ${matching.length} matching publications`;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    showAll = false;
    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle('active', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });
    renderPublications();
  });
});
searchInput.addEventListener('input', renderPublications);
showButton.addEventListener('click', () => { showAll = true; renderPublications(); });
renderPublications();

// Mobile menu
const toggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() {
  mobileNav.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');
  document.body.classList.remove('menu-open');
}
toggle.addEventListener('click', () => {
  const willOpen = mobileNav.hidden;
  mobileNav.hidden = !willOpen;
  toggle.setAttribute('aria-expanded', String(willOpen));
  toggle.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
  document.body.classList.toggle('menu-open', willOpen);
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 951px)').addEventListener('change', (event) => { if (event.matches) closeMenu(); });

// Highlight current section in desktop navigation.
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.desktop-nav a')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach((section) => observer.observe(section));
}
document.getElementById('year').textContent = new Date().getFullYear();
