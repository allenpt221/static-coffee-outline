// import image for the coffees
import Espresso from '/image/HotCoffee/Espresso.webp'
import Americano from '/image/HotCoffee/Americano.webp'
import Latte from '/image/HotCoffee/Latte.webp'
import Cappuccino from '/image/HotCoffee/Cappuccino.webp'
import FlatWhite from '/image/HotCoffee/FlatWhite.webp'
import Macchiato from '/image/HotCoffee/Macchiato.webp'
import Mocha from '/image/HotCoffee/Mocha.webp'
import Turkish from '/image/HotCoffee/Turkish.webp'
import Irish from '/image/HotCoffee/Irish.webp'

// import image for the ice cafe
import IceAmericano from '/image/IceCafe/Americano.webp'
import IceLatte from '/image/IceCafe/IceLatte.webp'
import IceMocha from '/image/IceCafe/IceMocha.webp'
import IceMacchiato from '/image/IceCafe/IceMacchiato.webp'
import SweetCream from '/image/IceCafe/SweetCream.webp'
import EspressoTonic from '/image/IceCafe/EspressoTonic.webp'
import Vietnamese from '/image/IceCafe/Vietnamese.webp'
import BrownSugarShaken from '/image/IceCafe/BrownSugarShaken.webp'
import MatchaLatte from '/image/IceCafe/MatchaLatte.webp'
import DirtyMatcha from '/image/IceCafe/DirtyMatcha.webp'


// import image for the pastry
import Croissant from '/image/Pastry/Croissant.webp'
import DanishPastry from '/image/Pastry/DanishPastry.webp'
import PainAuChocolat from '/image/Pastry/PainAuChocolat.webp'
import CinnamonRolls from '/image/Pastry/CinnamonRolls.webp'
import PortugesePastel from '/image/Pastry/PortugesePastel.webp'
import Eclair from '/image/Pastry/Eclair.webp'


// Exporting arrays of coffee items and their details for use in a React application
export const hotcoffees = [
    { id: 0, image: Espresso, text: 'Espresso' },
    { id: 1, image: Americano, text: 'Americano' },
    { id: 2, image: Latte, text: 'Latte' },
    { id: 3, image: Cappuccino, text: 'Cappuccino' },
    { id: 4, image: FlatWhite, text: 'Flat White' },
    { id: 5, image: Macchiato, text: 'Macchiato' },
    { id: 6, image: Mocha, text: 'Mocha' },
    { id: 7, image: Turkish, text: 'Turkish Coffee' },
    { id: 8, image: Irish, text: 'Irish Coffee' }
];
// Exporting arrays of iced coffee items and their details for use in a React application
export const Icecoffees = [
    { id: 0, image: IceAmericano, text: 'Iced Americano' },
    { id: 1, image: IceLatte, text: 'Iced Latte' },
    { id: 2, image: IceMocha, text: 'Iced Mocha' },
    { id: 3, image: IceMacchiato, text: 'Iced Caramel Macchiato' },
    { id: 4, image: SweetCream, text: 'Iced Coffee With Sweet cream' },
    { id: 5, image: EspressoTonic, text: 'Iced Espresso Tonic' },
    { id: 6, image: Vietnamese, text: 'Vietnamese Iced Coffee' },
    { id: 7, image: BrownSugarShaken, text: 'Iced Brown Sugar Shaken Espresso' },
    { id: 8, image: MatchaLatte, text: 'Iced Matcha Latte' },
    { id: 9, image: DirtyMatcha, text: 'Iced Matcha Espresso Fusion' }
];

// exporting arrays of Hotcoffee items and their details for use in the modal
export const ModalMenus = [
    {
        image: Espresso,
        title: 'Espresso',
        descrp: 'Espresso is a concentrated coffee beverage brewed by forcing hot water through finely-ground coffee beans. It serves as the base for many coffee drinks.',
        healthBene: 'Strong, Bold, Energizing'
    },
    {
        image: Americano,
        title: 'Americano',
        descrp: 'Americano is a coffee drink made by diluting espresso with hot water, resulting in a similar strength to brewed coffee but with a different flavor profile.',
        healthBene: 'Rich, Smooth, Bold'
    },
    {
        image: Latte,
        title: 'Latte',
        descrp: 'Latte is a coffee drink made with espresso and steamed milk, topped with a small amount of milk foam. It has a creamy texture and is often flavored with syrups.',
        healthBene: 'Creamy, Velvety, Smooth'
    },
    {
        image: Cappuccino,
        title: 'Cappuccino',
        descrp: 'Cappuccino is made with espresso, hot milk, and a layer of foamed milk, creating a creamy texture and a balance between the strength of coffee and milk.',
        healthBene: 'Frothy, Balanced, Creamy'
    },{
        image: FlatWhite,
        title: 'Flat White',
        descrp: 'Flat White is a coffee drink made with espresso and microfoam (steamed milk with small, fine bubbles), resulting in a velvety texture and strong coffee flavor.',
        healthBene: 'Smooth, Creamy, Rich'

    },{
        image: Macchiato,
        title: 'Macchiato',
        descrp: 'Macchiato is an espresso-based drink with a small amount of steamed milk or foam, allowing the espresso flavor to shine through.',
        healthBene: 'Velvety, Smooth, Creamy'
    },{
        image: Mocha,
        title: 'Mocha',
        descrp: 'Mocha is a chocolate-flavored variant of a latte, made with espresso, steamed milk, and chocolate syrup or cocoa powder.',
        healthBene: 'Bold, Strong, Layered'
    },{
        image: Turkish,
        title: 'Turkish Coffee',
        descrp: 'Turkish Coffee is a strong, unfiltered brew made in a small pot called a cezve, using very finely ground coffee. It has a thick, rich texture and bold flavor, often served sweet and in small cups. Traditionally enjoyed slowly, it’s both a cultural ritual and a symbol of hospitality—sometimes even followed by fortune-telling from the coffee grounds.',
        healthBene: 'Rich, Spicy, Intense'
    },{
        image: Irish,
        title: 'Irish Coffee',
        descrp: 'Irish Coffee is a cocktail made with hot coffee, Irish whiskey, sugar, and topped with cream. It is often enjoyed as a dessert drink.',
        healthBene: 'Warm, Spiked, Smooth'
    }
];


// exporting arrays of Icecoffee items and their details for use in the modal
export const ModalMenusIce = [
    {
        image: IceAmericano,
        title: 'Iced Americano',
        descrp: 'Iced Americano is a refreshing coffee drink made by diluting espresso with cold water and ice, resulting in a smooth and bold flavor.',
        healthBene: 'Refreshing, Bold, Smooth'
    },{
        image: IceLatte,
        title: 'Iced Latte',
        descrp: 'Iced Latte is a cold coffee drink made with espresso and chilled milk, served over ice. It has a creamy texture and can be flavored with syrups.',
        healthBene: 'Creamy, Smooth, Refreshing'
    },{
        image: IceMocha,
        title: 'Iced Mocha',
        descrp: 'Iced Mocha is a cold coffee drink made with espresso, chocolate syrup, and milk, served over ice. It has a rich chocolate flavor and is often topped with whipped cream.',
        healthBene: 'Rich, Creamy, Sweet'
    },{
        image: IceMacchiato,
        title: 'Iced Caramel Macchiato',
        descrp: 'Iced Caramel Macchiato is a cold coffee drink made with espresso, milk, and caramel syrup, served over ice. It has a sweet and creamy flavor.',
        healthBene: 'Sweet, Creamy, Refreshing'
    }, {
        image: SweetCream,
        title: 'Iced Coffee With Sweet cream',
        descrp: 'Iced Coffee with Sweet Cream is a cold coffee drink made with brewed coffee, ice, and sweet cream. It has a rich and creamy flavor.',
        healthBene: 'Rich, Creamy, Sweet'
    }, {
        image: EspressoTonic,
        title: 'Iced Espresso Tonic',
        descrp: 'Iced Espresso Tonic is a refreshing coffee drink made with espresso, tonic water, and ice. It has a unique flavor profile that combines the bitterness of coffee with the effervescence of tonic.',
        healthBene: 'Refreshing, Unique, Bold'
    }, {
        image: Vietnamese,
        title: 'Vietnamese Iced Coffee',
        descrp: 'Vietnamese Iced Coffee is a strong coffee drink made with dark roast coffee, sweetened condensed milk, and ice. It has a rich and sweet flavor.',
        healthBene: 'Rich, Sweet, Bold'
    },{
        image : BrownSugarShaken,
        title: 'Iced Brown Sugar Shaken Espresso',
        descrp: 'Iced Brown Sugar Shaken Espresso is a cold coffee drink made with espresso, brown sugar, and ice, shaken to create a frothy texture.',
        healthBene: 'Sweet, Bold, Refreshing'
    },{
        image: MatchaLatte,
        title: 'Iced Matcha Latte',
        descrp: 'Iced Matcha Latte is a cold drink made with matcha green tea powder, milk, and ice. It has a unique flavor and is often sweetened.',
        healthBene: 'Unique, Creamy, Refreshing'
    }, {
        image: DirtyMatcha,
        title: 'Iced Matcha Espresso Fusion',
        descrp: 'Iced Matcha Espresso Fusion is a cold drink made with matcha green tea powder, espresso, milk, and ice. It has a unique flavor and is often sweetened.',
        healthBene: 'Unique, Creamy, Refreshing'
    }
];




export const pastryMenu = [
    { id: 0, image: Croissant, text: 'Croissant'},
    { id: 1, image: DanishPastry, text: 'Danish Pastry'},
    { id: 2, image: PainAuChocolat, text: 'Pain Au Chocolat'},
    { id: 3, image: CinnamonRolls, text: 'Cinnamon Roll'},
    { id: 4, image: PortugesePastel, text: 'Portuguese Pastel De Nata'},
    { id: 5, image: Eclair, text: 'Éclair'}
];

export const ModalPastry = [
    {
        image: Croissant,
        title: 'Croissant',
        descrp: 'A buttery, golden crescent-shaped pastry made from layers of delicate, flaky dough. The croissant is the crown jewel of French baking light, airy, and crisp with a rich, melt-in-your-mouth texture.',
        healthBene: 'Mood-boosting carbs'

    },{
        image: DanishPastry,
        title: 'Danish Parsty',
        descrp: 'A sweet, laminated pastry that’s as beautiful as it is delicious. With its tender, golden layers and fruit or custard-filled center, the Danish is a versatile treat that can be topped with berries, cream cheese, or drizzled glaze.',
        healthBene: 'Fruity antioxidant boost'
    },{
        image: PainAuChocolat,
        title: 'Pain Au Chocolat',
        descrp: 'Think croissant meets chocolate bar. Pain au chocolat is made from the same flaky dough but folded around two bars of dark, silky chocolate. Baked to golden perfection',
        healthBene: 'Dark chocolate antioxidants'
    },{
        image: CinnamonRolls,
        title: 'Cinnamon Roll',
        descrp: 'A cozy swirl of soft, yeasted dough rolled with buttery cinnamon sugar and often topped with a sweet glaze or cream cheese frosting. Warm, spiced, and gooey in the best way, the cinnamon roll is a comfort classic',
        healthBene: 'Cinnamon aids digestion'
    }, {
        image: PortugesePastel,
        title: 'Portuguese Pastel De Nata',
        descrp: 'A small yet mighty custard tart with a flaky, caramelized crust and a creamy, slightly brûléed filling. Served warm and dusted with cinnamon, this Portuguese delight balances crispy and silky textures with just the right amount of sweetness.',
        healthBene: 'Protein from eggs'
    },{
        image: Eclair,
        title: 'Portuguese Pastel De Nata',
        descrp: 'A long, elegant French pastry made from airy choux dough, filled with silky pastry cream and topped with a glossy chocolate glaze.',
        healthBene: 'Energy-boosting carbs'
    }
]