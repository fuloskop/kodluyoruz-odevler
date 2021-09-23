const menu = [
    {
        id: 1,
        title: 'Tteokbokki',
        category: 'Korea',
        price: 10.99,
        img: 'https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg',
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: 'Chicken Ramen',
        category: 'Japan',
        price: 7.99,
        img: 'https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg',
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: 'Bibimbap',
        category: 'Korea',
        price: 8.99,
        img: 'https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg',
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: 'Dan Dan Mian',
        category: 'China',
        price: 5.99,
        img: 'https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg',
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: 'Yangzhou Fried Rice',
        category: 'China',
        price: 12.99,
        img: 'https://miro.medium.com/max/690/1*LYeF9eO5T1MrQAGPtGKtrA.jpeg',
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: 'Onigiri',
        category: 'Japan',
        price: 9.99,
        img: 'https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg',
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: 'Jajangmyeon',
        category: 'Korea',
        price: 15.99,
        img: 'https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg',
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: 'Ma Yi Shang Shu',
        category: 'China',
        price: 12.99,
        img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg',
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: 'Doroyaki',
        category: 'Japan',
        price: 3.99,
        img: 'https://www.chopstickchronicles.com/wp-content/uploads/2020/09/Dorayaki-Update-5.jpg',
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

const hamburgerMenu = document.querySelector('.hamburger-menu__container');
const links = document.querySelector('.links');
const header = document.querySelector('.header');
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const btnSecondary = document.querySelectorAll('.btn-secondary');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelectorAll('.js-link');

const showMenu = () => {
    links.classList.toggle('active');
    if (navContainer.style.height == '100%') {
        navContainer.style.height = '7rem';
    } else {
        navContainer.style.height = '100%';
    }
};

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        links.classList.remove('active');
        navContainer.style.height = '7rem';

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop;
        window.scrollTo({
            left: 0,
            top: position - 70,
        });
    });
});

const displayMenuItems = menuItems => {
    let displayMenu = menuItems.map(item => {
        const { title, category, price, img, desc } = item;
        return `
    <figure class="card" style="background-image: url(${img});">
      <div class="content">
        <div class="content-header">
          <p class="card-title">${title}</p>
          <p class="card-price">${price}$</p>
        </div>
        <div class="content-footer">
          <p class="card-description">
            ${desc}
          </p>
        </div>
      </div>
    </figure>
    `;
    });
    displayMenu = displayMenu.join('');
    cardContainer.innerHTML = displayMenu;
};

hamburgerMenu.addEventListener('click', showMenu);

window.addEventListener('DOMContentLoaded', displayMenuItems(menu));

btnSecondary.forEach(btn => {
    btn.addEventListener('click', e => {
        const category = e.currentTarget.dataset.id;

        const menuCategory = menu.filter(menuItem => {
            if (menuItem.category.toLowerCase() === category) {
                return menuItem;
            }
        });

        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});