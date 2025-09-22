import sweets_logo from './sweets_logo.png'
import add_icon from './add_icon.png'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import order_icon from './order_icon.png'
import profile_icon from './profile_icon.png'
import upload_area from './upload_area.png'
import parcel_icon from './parcel_icon.png'
import search_icon from './search_icon.png'
import basket_icon from './basket_icon.png'
import sweets_shop_bg from './sweets_shop_bg.png'
import menu_1 from './flat_lay_indian_dessert_arrangement.jpg'
import menu_2 from './from_assorted_baked_with_baklava_baklava_sheki_flowers_smoked_fish.jpg'
import menu_3 from './tasty_turkish_delight_isolated_white.jpg'
import menu_4 from './orange_roll_barfee_barfi_sweet_mitlai.jpg'
import menu_5 from './browen_jammu.png'
import menu_6 from './color_sweets.jpg'
import menu_7 from './all_sweets.png'
import menu_8 from './color_sweets_two.jpg'
import rating_starts from './rating_starts.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import linkedin_icon from './linkedin_icon.png'
import play_store from './play_store.png'
import app_store from './app_store.png'
import cross_icon from './cross_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'

export const assets ={
    sweets_logo,
    add_icon,
    add_icon_white,
    add_icon_green,
    remove_icon_red,
    order_icon,
    profile_icon,
    upload_area,
    parcel_icon,
    search_icon,
    basket_icon,
    sweets_shop_bg,
    menu_1,
    menu_2,
    menu_3,
    menu_4,
    menu_5,
    menu_6,
    menu_7,
    menu_8,
    rating_starts,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    play_store,
    app_store,
    cross_icon,
    bag_icon,
    logout_icon
}

export const menu_list = [
    {
        menu_name: "flat_lay_indian_sweets",
        menu_image: menu_1
    },
    {
        menu_name: "assorted_baked_sweets",
        menu_image: menu_2
    },
    {
        menu_name: "tasty_turkish_delight",
        menu_image: menu_3
    },
    {
        menu_name: "orange_roll_barfee",
        menu_image: menu_4
    },
    {
        menu_name: "browen_jammu",
        menu_image: menu_5
    },
    {
        menu_name: "color_sweets",
        menu_image: menu_6
    },
    {
        menu_name: "all_sweets",
        menu_image: menu_7
    },
    {
        menu_name: "color_sweets_two",
        menu_image: menu_8
    }
]

export const sweet_list = [
    {
        _id: "1",
        name: "Gulab Jamun",
        image: menu_1,
        price: 50,
        category: "flat_lay_indian_sweets",
        description: "Soft and spongy dumplings soaked in fragrant sugar syrup, a classic Indian dessert."
    },
    {
        _id: "2",
        name: "Rasgulla",
        image: menu_2,
        price: 40,
        category: "assorted_baked_sweets",
        description: "Spongy cheese balls soaked in light sugar syrup, a popular Bengali sweet."
    },
    {
        _id: "3",
        name: "Kaju Katli",
        image: menu_3,
        price: 150,
        category: "tasty_turkish_delight",
        description: "Smooth and creamy cashew fudge, often garnished with edible silver leaf."
    },
    {
        _id: "4",
        name: "Barfi",
        image: menu_4,
        price: 120,
        category: "orange_roll_barfee",
        description: "Dense milk-based sweet, available in various flavors like coconut, pistachio, and chocolate."
    },
    {
        _id: "5",
        name: "Jalebi",
        image: menu_5,
        price: 60,
        category: "browen_jammu",
        description: "Crispy, spiral-shaped sweet soaked in saffron-infused sugar syrup, best enjoyed warm."
    },
    {
        _id: "6",
        name: "Ladoo",
        image: menu_6,
        price: 70,
        category: "color_sweets",
        description: "Round, ball-shaped sweets made from flour, ghee, and sugar, often flavored with cardamom or nuts."
    },
    {
        _id: "7",
        name: "Peda",
        image: menu_7,
        price: 80,
        category: "all_sweets",
        description: "Soft, thick milk fudge, typically flavored with cardamom and garnished with nuts."
    },
    {
        _id: "8",
        name: "Rasmalai",
        image: menu_8,
        price: 100,
        category: "color_sweets_two",
        description: "Soft paneer balls soaked in sweetened, thickened milk flavored with saffron and cardamom."
    }
]



export const url = 'http://localhost:4000'