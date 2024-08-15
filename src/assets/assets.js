import navlogo from './nav.png'
import  cart from './cart.png';
import  search from './search.png';
import star from './star.jpg'
import addBlack from './addw.png'
import addGreen from './addGreen.png'
import remove from './remove.png'
import cross from './cross.png'


import whatsapp from './wp.jpeg'
import facebook from './fb.png'
import instgram from './insta.jpeg'
import play from './play.png'
import app from './app.png'


import menu_1 from './babycare.jpg';
import menu_2 from './beverages.jpg';
import menu_3 from './chilld&dairyfoods.jpg';
import menu_4 from './cleaning needs.jpg'
import menu_5 from './creams&lotions.jpg' 
import menu_6 from './feminine care.jpg'


import pro_1 from './baby foods.jpg'
import pro_2 from './ready to eat.jpg'

export const assets ={
navlogo,
cart,
search,
star,
addBlack,
addGreen,
remove,

whatsapp,
facebook,
instgram,
play,
app,
cross

}
export const menu_list =[
    {
        menu_name:"Baby Care",
        Menu_image: menu_1
    },
    {
        menu_name:"beverages",
        Menu_image: menu_2
    },
    {
        menu_name:"chilld & dairyfoods",
        Menu_image:menu_3
    },
    {
        menu_name:"cleaning needs",
        Menu_image:menu_4
    },
    {
        menu_name:"Creams & Lotions",
        Menu_image:menu_5
    },{
        menu_name:"Feminine Care",
        Menu_image:menu_6
    }
]

export const product_list=[
    {
        id:"1",
        name:"baby food",
        image:pro_1,
        price:250,
        description:"baby food products",
        category:"Baby Care"
    },
    {
        id:"2",
        name:"beverages",
        image:pro_2,
        price:350,
        description:"beverages",
        category:"beverages"
    },
    {
        id:"3",
        name:"chilld & dairyfoods",
        image:pro_2,
        price:350,
        description:"chilld & dairyfoods",
        category:"chilld & dairyfoods"
    }, {
        id:"4",
        name:"cleaning needs",
        image:pro_2,
        price:350,
        description:"cleaning needs",
        category:"cleaning needs"
    }, {
        id:"5",
        name:"Creams & Lotions",
        image:pro_2,
        price:350,
        description:"Creams & Lotions",
        category:"Creams & Lotions"
    }
]