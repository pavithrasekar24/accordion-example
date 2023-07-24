let accordionDetails = [
  {
    id: 1,
    title: 'Filler text',
    content:
      'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.',
  },
  {
    id: 2,
    title: 'Handy tool',
    content:
      'This handy tool helps you create dummy text for all your layout needs. We are gradually adding new functionality and we welcome your suggestions and feedback.',
  },
  {
    id: 3,
    title: 'Publishing and graphic design',
    content:
      ' In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying',
  },
];

let main = document.querySelector('main');

accordionDetails.forEach((item, i) => {
  let accordion = document.createElement('div');
  accordion.className = 'accordion';
  accordion.id = `accordion${i + 1}`;

  let header = document.createElement('h3');
  let arrowIcon = document.createElement('i');
  arrowIcon.className = 'fa fa-arrow-down';

  header.innerHTML = item.title;
  header.className = 'title';
  header.append(arrowIcon);

  let accordionContent = document.createElement('div');
  accordionContent.className = 'accordion-content';
  accordionContent.innerText = item.content;

  accordion.append(header);
  accordion.append(accordionContent);
  accordion.addEventListener('click', () => handleExpandCollapse(i));
  main.append(accordion);
});

// let upIcon = <i class="fa fa-arrow-up"></i>;
// let downIcon = <i class="fa fa-arrow-down"></i>;

let handleExpandCollapse = (i) => {
  console.log('hi', i);
  let selectedIcon = document.querySelector(`#accordion${i + 1} i`);
  console.log(selectedIcon);

  let selectedContent = document.querySelector(
    `#accordion${i + 1} .accordion-content`
  );

  if (selectedIcon.className == 'fa fa-arrow-down') {
    selectedIcon.className = 'fa fa-arrow-up';
    selectedContent.style.display = 'block';
  } else {
    selectedIcon.className = 'fa fa-arrow-down';
    selectedContent.style.display = 'none';
  }
};
