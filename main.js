const menu = [
  {
    id: 1,
    title: "Antep Sogan Kebabi",
    category: "Guneydogu",
    price: 10.99,
    img: "https://www.neyemekyapsak.com/wp-content/uploads/2017/07/sogan-kebab%C4%B1.jpg",
    desc: `Soğan kebabımızı sıcak lavaş ve buz gibi ayran ile yiyebilirsiniz.
      `,
  },
  {
    id: 2,
    title: "Cartlak Kebabi",
    category: "Guneydogu",
    price: 7.99,
    img: "https://cdn1.neredekal.com/resimler/haber/image/turkey-diyarbakir-lamb-shish-kebab-on-serving-plate-in-restaurant-picture-id1179864169jpg.jpeg",
    desc: `Cartlak kebabı içerisinde kuzu ciğeri, böbrek, dalak gibi farklı sakatatları barındırıyor. `,
  },
  {
    id: 3,
    title: "Cigkofte",
    category: "Guneydogu",
    price: 8.99,
    img: "https://cdn1.neredekal.com/resimler/haber/image/cig-kofte-picture-id1277737744jpg.jpeg",
    desc: `Buradaki çiğ köftelerin en önemli özelliği bulgurla yoğruluyor olması.`,
  },
  {
    id: 4,
    title: "Kayseri Mantisi",
    category: "IcAnadolu",
    price: 5.99,
    img: "https://blog-biletall.mncdn.com/wp-content/uploads/2016/10/manti.jpg",
    desc: `İç harcında kıyma, soğan, karabiber gibi farklı tatlar bulunduran mantı, el ile açılmaktadır. `,
  },
  {
    id: 5,
    title: "Yaglama ",
    category: "IcAnadolu",
    price: 12.99,
    img: "https://blog-biletall.mncdn.com/wp-content/uploads/2016/10/yaglama.jpg",
    desc: `Eritilen yağa kıyma, soğan ve çeşitli baharatlardan oluşan iç harç ince acilmis lavasin uzerinde servis edilir. `,
  },
  {
    id: 6,
    title: "Ankara Tava",
    category: "IcAnadolu",
    price: 9.99,
    img: "https://blog-biletall.mncdn.com/wp-content/uploads/2016/10/ankara-tava.jpg",
    desc: `Bir et yemeği olan Ankara tava, temelde sote etten ve arpa şehriyeden oluşmaktadır. `,
  },
  {
    id: 7,
    title: " Kabak Çiçeği Dolması",
    category: "Ege",
    price: 15.99,
    img: "https://img-s3.onedio.com/id-56c3cbdafbd5d4737f43b575/rev-0/w-635/f-jpg/s-22f97ac1770830a2f1d974bfa90a853cd79b0d8f.jpg",
    desc: `Az bilinir, çok sevilir `,
  },
  {
    id: 8,
    title: "İzmir Köfte",
    category: "Ege",
    price: 12.99,
    img: "https://img-s3.onedio.com/id-56c3cb98730e97837fd92bf5/rev-0/w-635/f-jpg/s-7bb952c7fa12b4aa29f710cebadbbde6c614e785.jpg",
    desc: `Köftenin kıymetlisi`,
  },
  {
    id: 9,
    title: "Ege Usulü Keşkek",
    category: "Ege",
    price: 3.99,
    img: "https://img-s1.onedio.com/id-56c3cd3fd7974cf82026d10c/rev-0/w-635/f-jpg/s-452d76f711d1779c550900dbcb4216eb8fc7f348.jpg",
    desc: `buğday (aşurelik buğday),tavuk veya parça et,tereyağı, tuz, karabiber, kırmızıbiber, nane`,
  },
  {
    id: 10,
    title: "HAMSİLİ PİLAV",
    category: "Karadeniz",
    price: 3.99,
    img: "https://blog-biletall.mncdn.com/wp-content/uploads/2016/11/hamsili-pilav.jpg ",
    desc: `Pilavına pirinç ile beraber dolma fıstığı ve kuş üzümü eklenerek yapılması diğer pilavlardan ayrılmasını sağlamaktadır. `,
  },
  {
    id: 11,
    title: "MIHLAMA",
    category: "Karadeniz",
    price: 3.99,
    img: "https://blog-biletall.mncdn.com/wp-content/uploads/2016/04/mihlama.jpg",
    desc: `Mıhlama, Trabzon iline ait peynir ve mısır unu ile yapılan bir yemektir.`,
  },
];
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
