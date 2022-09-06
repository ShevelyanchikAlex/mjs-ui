'use strict';

//Sample Data items (Certificates) for Main Page
const FLYING_ITEM = `<div class="element-item">
        <div class="card">
            <img class="card-image"
                 src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/298/2016/01/18/569cca9b733ec.jpg"
                 alt="Denim Jeans">
            <h1 class="card-name">Flying at the controls of Flight Simulator</h1>
            <p class="card-price">$50.99</p>
            <p class="card-description">Have you been afraid of airplanes all your life and prefer to travel by train?
                You have a truly unique opportunity to try yourself as an aircraft captain and make sure that modern
                technology is safe. All this can be done without leaving the ground.</p>
            <p>
                <button class="card-button-detail" onclick="window.location.href='itemDetailsPage.html'">Detail</button>
            </p>
            <p>
                <button class="card-button-add">Add to Cart</button>
            </p>
        </div>
    </div>`;


const DOLPHIN_DIVING_ITEM = `<div class="element-item">
            <div class="card">
                <img class="card-image"
                     src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/47/2015/12/14/566e5fa2d2b35.jpg"
                     alt="Nike Air Jordan III, 1988" style="width:100%">
                <h1 class="card-name">Diving with dolphins</h1>
                <p class="card-price">$200.99</p>
                <p class="card-description">Dolphin Diving Certificate is a unique opportunity to interact with amazing
                    marine life in their natural environment. You can pet bottlenose dolphins, play with them and even hear
                    how they communicate with each other in the pool of the Minsk Dolphinarium. These feelings cannot be
                    compared with anything, and pleasant memories will warm you for a very long time!</p>
                <p>
                    <button class="card-button-detail" onclick="window.location.href='itemDetailsPage.html'">Detail</button>
                </p>
                <p>
                    <button class="card-button-add">Add to Cart</button>
                </p>
            </div>
        </div>`;
const RENT_ATV_ITEM = `<div class="element-item">
            <div class="card">
                <img class="card-image"
                     src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5003567/2022/07/19/62d6fadb4ef3a.jpg"
                     alt="Adidas x Run–DMC 25th Anniversary Superstar, 2011" style="width:100%">
                <h1 class="card-name">Rent and rental of ATVs</h1>
                <p class="card-price">$300.99</p>
                <p class="card-description">Quad biking on forest trails and abandoned camps. With Kvadro.minsk you can also
                    ride at night! Nobody will remain indifferent!</p>
                <p>
                    <button class="card-button-detail" onclick="window.location.href='itemDetailsPage.html'">Detail</button>
                </p>
                <p>
                    <button class="card-button-add">Add to Cart</button>
                </p>
            </div>
        </div>`;
const SUP_SURFING_ITEM = `<div class="element-item">
            <div class="card">
                <img class="card-image"
                     src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5003428/2021/08/14/61181e38be854.jpg"
                     alt="Denim Jeans" style="width:100%">
                <h1 class="card-name">Rent and rent SUPBOARDS</h1>
                <p class="card-price">$20</p>
                <p class="card-description">Supsurfing is a water sport, a kind of surfing in which a surfer, standing on a
                    board, rides the waves and at the same time rows with an oar, and not with his hands, as in classic
                    surfing!</p>
                <p>
                    <button class="card-button-detail" onclick="window.location.href='itemDetailsPage.html'">Detail</button>
                </p>
                <p>
                    <button class="card-button-add">Add to Cart</button>
                </p>
            </div>
        </div>`;

const YACHTING_ITEM = `<div class="element-item">
            <div class="card">
                <img class="card-image"
                     src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5002432/2018/06/27/5b339e13bfa2f.jpg"
                     alt="Nike Air Jordan III, 1988" style="width:100%">
                <h1 class="card-name">Private yachting training</h1>
                <p class="card-price">$805.99</p>
                <p class="card-description">Have you dreamed of becoming a captain since childhood? In YachtMinsk you will
                    be taught how to sail a yacht anywhere in the world. You will learn the basics of sailing, navigation
                    and everything you need to captain a yacht on a cruise.</p>
                <p>
                    <button class="card-button-detail" onclick="window.location.href='itemDetailsPage.html'">Detail</button>
                </p>
                <p>
                    <button class="card-button-add">Add to Cart</button>
                </p>
            </div>
        </div>`;

const HOT_AIR_BALLOON_ITEM = `<div class="element-item">
            <div class="card">
                <img class="card-image"
                     src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productpricebanner/5001818/2016/08/31/57c6dab586d6e.jpg"
                     alt="Adidas x Run–DMC 25th Anniversary Superstar, 2011" style="width:100%">
                <h1 class="card-name">Hot air balloon flight</h1>
                <p class="card-price">$2000.99</p>
                <p class="card-description">Hundreds of hours spent in the clouds allow us to say that the impressions
                    received during the first flight remain with you forever. Want to make sure?</p>
                <p>
                    <button class="card-button-detail" onclick="window.location.href='itemDetailsPage.html'">Detail</button>
                </p>
                <p>
                    <button class="card-button-add">Add to Cart</button>
                </p>
            </div>
        </div>`;

const HORSE_RIDING_ITEM = `<div class="element-item">
            <div class="card">
                <img class="card-image"
                     src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5001382/2017/06/12/593e634727f0e.jpg"
                     alt="Denim Jeans" style="width:100%">
                <h1 class="card-name">Horseback riding</h1>
                <p class="card-price">$40.5</p>
                <p class="card-description">Dreaming of a horseback ride? Are you afraid to learn it on your own? The Minsk
                    Zoo has what you need - horse riding training, which is designed for one person. Therefore, enjoy the
                    company of an instructor and a horse, or give certificates to friends - share these emotions with
                    them!</p>
                <p>
                    <button class="card-button-detail" onclick="window.location.href='itemDetailsPage.html'">Detail</button>
                </p>
                <p>
                    <button class="card-button-add">Add to Cart</button>
                </p>
            </div>
        </div>`;

const WATER_PARK_ITEM = `       <div class="element-item">
            <div class="card">
                <img class="card-image"
                     src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5002894/2019/07/24/5d385e008a42d.jpg"
                     alt="Nike Air Jordan III, 1988" style="width:100%">
                <h1 class="card-name">Fun at the water park</h1>
                <p class="card-price">$5.99</p>
                <p class="card-description">Forget about business and go with your loved ones to a real tropical paradise,
                    located under a sparkling dome! A gift certificate for water activities in the aqua zone of the
                    Freestyle water park in Minsk will take you to a place where joy and delight do not end. Ride extreme
                    and calmer slides, have fun in the pool and enjoy relaxation in the infrared sauna. In the Freestyle
                    water park, everyone will find something to their liking.</p>
                <p>
                    <button class="card-button-detail" onclick="window.location.href='itemDetailsPage.html'">Detail</button>
                </p>
                <p>
                    <button class="card-button-add">Add to Cart</button>
                </p>
            </div>
        </div>`;

const DIVING_ITEM = `<div class="element-item">
            <div class="card">
                <img class="card-image"
                     src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/38/2015/12/11/566a8f04709b6.jpg"
                     alt="Adidas x Run–DMC 25th Anniversary Superstar, 2011" style="width:100%">
                <h1 class="card-name">Diving training</h1>
                <p class="card-price">$300.99</p>
                <p class="card-description">A gift for those who are going to go to the seaside and want to save a lot on
                    the services of barker instructors who stand near the hotels. The gift makes it possible to receive a
                    CMAS certificate with one star, which is enough for renting equipment on your own and diving in the
                    presence of an experienced diver.</p>
                <p>
                    <button class="card-button-detail" onclick="window.location.href='itemDetailsPage.html'">Detail</button>
                </p>
                <p>
                    <button class="card-button-add">Add to Cart</button>
                </p>
            </div>
        </div>`;

const BOTTOM_OFFSET = 5;
const DEFAULT_ELEMENTS_LOAD_COUNT = 15;

let itemsMap = new Map();
itemsMap.set(1, FLYING_ITEM);
itemsMap.set(2, DOLPHIN_DIVING_ITEM);
itemsMap.set(3, RENT_ATV_ITEM);
itemsMap.set(4, SUP_SURFING_ITEM);
itemsMap.set(5, YACHTING_ITEM);
itemsMap.set(6, HOT_AIR_BALLOON_ITEM);
itemsMap.set(7, HORSE_RIDING_ITEM);
itemsMap.set(8, WATER_PARK_ITEM);
itemsMap.set(9, DIVING_ITEM);

let itemsGridView = document.querySelector('#items-grid-view');

let loadNextElements = function (count) {
    for (let i = 0; i < count; i++) {
        let item = document.createElement('div');
        item.innerHTML = itemsMap.get(Math.floor(Math.random() * 9) + 1);
        itemsGridView.appendChild(item);
    }
}

itemsGridView.addEventListener('scroll', function () {
    if (itemsGridView.scrollTop + itemsGridView.clientHeight + BOTTOM_OFFSET >= itemsGridView.scrollHeight) {
        loadNextElements(DEFAULT_ELEMENTS_LOAD_COUNT);
    }
});

loadNextElements(DEFAULT_ELEMENTS_LOAD_COUNT);