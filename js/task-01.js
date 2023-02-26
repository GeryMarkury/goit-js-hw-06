const mainListEl = document.querySelector('#categories');

const numberOfCategories = mainListEl.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

const itemEl = document.querySelectorAll('.item');

itemEl.forEach(item => {
    const nameOfCategory = item.firstElementChild.textContent;

    console.log(`Category: ${nameOfCategory}`);

    const numberOfElements = item.querySelectorAll('li').length;

    console.log(`Elements: ${numberOfElements}`);
});


