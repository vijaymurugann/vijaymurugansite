export interface WishlistItem {
  /** Display name of the product */
  name: string;
  /** Direct URL to the product image */
  image: string;
  /** Price string (e.g. "₹1,299" or "$49.99") */
  price: string;
  /** Numeric price for sorting (e.g. 7499) */
  priceNumeric: number;
  /** Full product URL (Amazon, Flipkart, etc.) */
  link: string;
}

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  HOW TO ADD A WISHLIST ITEM
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  1. Go to the product page on Amazon / Flipkart
 *  2. Copy the product name, price, and URL
 *  3. Right-click the product image → "Copy image address"
 *  4. Add a new object below following the same shape
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
export const WISHLIST_ITEMS: WishlistItem[] = [
  {
    name: "LG (24-inch) Full HD (1920 x 1080) IPS Monitor",
    image:
      "https://m.media-amazon.com/images/I/71n9u-Tdm3L._SX679_.jpg",
    price: "₹7,499",
    priceNumeric: 7499,
    link: "https://www.amazon.in/LG24U411A-BN-Smartchoice-24-inch-Virtually-Borderless/dp/B0GMQLQGFW/?_encoding=UTF8&pd_rd_w=ag61q&content-id=amzn1.sym.163c611d-45af-44a2-803f-ecf4de66c803%3Aamzn1.symc.b1464ab7-6d6a-4fc8-be8f-f2e9bcc64228&pf_rd_p=163c611d-45af-44a2-803f-ecf4de66c803&pf_rd_r=0YDJ7NH71QGGY2JD3SYJ&pd_rd_wg=CcKgj&pd_rd_r=e00bb6e3-b7a3-4243-b97d-a1be73c40598&ref_=pd_hp_d_btf_ci_mcx_mr_ca_id_hp_d",
  },
  {
    name: "Axor Apex Solid Matt Black Full Face Dual Visor Helmet",
    image:
      "https://m.media-amazon.com/images/I/51z-RSSvYJL._SL1500_.jpg",
    price: "₹4,944",
    priceNumeric: 4944,
    link: "https://www.amazon.in/Axor-Apex-Solid-Black-Helmet-L/dp/B099X1DJDM/?_encoding=UTF8&pd_rd_w=6LUhr&content-id=amzn1.sym.c7856867-7399-4487-8ea1-2895e0decba2%3Aamzn1.symc.96b8365e-3b12-433f-a173-648d41788658&pf_rd_p=c7856867-7399-4487-8ea1-2895e0decba2&pf_rd_r=NJFAPPBZ3HYV9CCRCNVV&pd_rd_wg=qV59p&pd_rd_r=bd910eb7-3cd6-4f32-8330-87b66b538074&ref_=pd_hp_d_btf_ci_mcx_mr_hp_atf_m&th=1",
  },
  {
    name: "Aerolift Solo Gas Spring Monitor Arm",
    image:
      "https://m.media-amazon.com/images/I/61+gT7pYzeL._SL1500_.jpg",
    price: "₹2,000",
    priceNumeric: 2000,
    link: "https://www.amazon.in/gp/product/B0GRHW6JVL/ref=ox_sc_saved_title_2?smid=AJ6SIZC8YQDZX&psc=1",
  },
  {
    name: "Logitech MX Master 3S Bluetooth Edition Wireless Mouse",
    image:
      "https://m.media-amazon.com/images/I/618IJzC-fFL._SL1500_.jpg",
    price: "₹7,995",
    priceNumeric: 7995,
    link: "https://www.amazon.in/dp/B0B172NY1J",
  },
  {
    name: "Apple MacBook Pro M5 Pro - (24 GB/1 TB SSD) 14 inch, Silver",
    image:
      "https://rukminim2.flixcart.com/image/2940/2940/xif0q/computer/i/g/v/-original-imahh84yn37kz3bf.jpeg?q=90",
    price: "₹2,49,900",
    priceNumeric: 249900,
    link: "https://www.flipkart.com/apple-macbook-pro-m5-pro-2026-m5-24-gb-1-tb-ssd-tahoe-mgdn4hn-a/p/itma5bb4c395ac4b?pid=COMHH78YCT2QNTTC&lid=LSTCOMHH78YCT2QNTTCGWM32U&marketplace=FLIPKART&q=macbook+pro+m5&store=6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_12_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_12_na_na_na&fm=Search&iid=e771b22e-fe94-4ea2-846a-cdbbe63074a0.COMHH78YCT2QNTTC.SEARCH&ppt=sp&ppn=sp&ssid=7eo7degxgw0000001783698300107&qH=f69bcc142ca51ccb&ov_redirect=true",
  },
  {
    name: "Apple Watch Series 11 GPS 42mm Jet Black Aluminium",
    image:
      "https://rukminim2.flixcart.com/image/2940/2940/xif0q/smartwatch/k/m/r/-original-imahftghtqjhjgjy.jpeg?q=90",
    price: "₹40,999",
    priceNumeric: 40999,
    link: "https://www.flipkart.com/apple-watch-series-11-gps-46mm-jet-black-aluminium-case-sport-band-s-m/p/itm9522a77847251?pid=SMWHFSWRHEN2EHHU&lid=LSTSMWHFSWRHEN2EHHU8FWIYJ&marketplace=FLIPKART&store=ajy&srno=b_1_2&otracker=browse&fm=organic&iid=77b81017-cfaf-4b4a-be06-7ec100a54681.SMWHFSWRHEN2EHHU.SEARCH&ppt=browse&ppn=browse&ssid=sn8trhk6bk0000001783698485685&ov_redirect=true&ov_redirect=true",
  },
  {
    name: "SONY Playstation5 Digital Edition(Slim)",
    image:
      "https://rukminim2.flixcart.com/image/2940/2940/xif0q/gamingconsole/y/o/7/-enriched-transparent-original-imah247tcecptgth.png?q=90",
    price: "₹49,990",
    priceNumeric: 49990,
    link: "https://www.flipkart.com/sony-playstation5-digital-edition-slim-cfi-2008b01x-cfi-2116b01y-1-tb/p/itm6b0a91231fb2f?pid=GMCHDPYPYV5YWUPZ&lid=LSTGMCHDPYPYV5YWUPZPZ01V9&marketplace=FLIPKART&q=playstation+5+slim&store=4rr%2Fx1m%2Fogz&srno=s_1_4&otracker=AS_QueryStore_OrganicAutoSuggest_2_18_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_18_na_na_na&fm=Search&iid=97a99784-04e5-4aed-ba3c-46333f4319a4.GMCHDPYPYV5YWUPZ.SEARCH&ppt=sp&ppn=sp&ssid=tdkt7towf40000001783698648698&qH=21c19b2362c80477&ov_redirect=true&ov_redirect=true",
  },
  {
    name: "DJI Osmo Action Action 4 Standard",
    image: "https://rukminim2.flixcart.com/image/2940/2940/xif0q/sports-action-camera/f/u/m/action-4-standard-combo-osmo-action-2-25-12-ac003-dji-enriched-transparent-original-imagrvgedzwthwjb.png?q=90",
    price: "₹24,990",
    priceNumeric: 24990,
    link: "https://www.flipkart.com/dji-osmo-action-4-standard-combo-sports-camera/p/itmc32cd2451d693?pid=SAYGRVESMZSD48DQ&lid=LSTSAYGRVESMZSD48DQAJ7UXO&marketplace=FLIPKART&store=jek&srno=b_1_1&otracker=browse&fm=organic&iid=c2878ec3-2294-4be2-97a6-959115d69949.SAYGRVESMZSD48DQ.SEARCH&ppt=browse&ppn=browse&ssid=chl5u8phg00000001783698789283&ov_redirect=true&ov_redirect=true",
  },
];
