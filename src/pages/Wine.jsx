import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import CatalogueNav from './CatalogueNav';


const Wine = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState('Beer');

  const cards = [

    {
      title: "Bordeaux 440g BV2844 1000ml",
      artNo: "33245",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011678-grid_2.jpg"
    },
    {
      title: "Bord. Grand Cru70 984g BM18,5 750ml",
      artNo: "30164",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009166-grid_2.jpg"
    },
    {
      title: "Bord. Europa55 592g BM17,5 750ml",
      artNo: "23844",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009359-grid_2.jpg"
    },
    {
      title: "Bord. Europa55 592g BM17,5 750ml",
      artNo: "26092",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003288-grid_2.jpg"
    },
    {
      title: "Bord. Europa55 594g OB17,5 750ml",
      artNo: "26093",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1003289-grid_2.jpg"
    },
    {
      title: "Bord. Europa 595g BV2844 750ml",
      artNo: "24098",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009523-grid_2.jpg"
    },
    {
      title: "Bord. Tiffany55 489g BM17,5 750ml",
      artNo: "24099",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009522-grid_2.jpg"
    },
    {
      title: "Bord. Tiffany55 489g BM17,5 750ml",
      artNo: "24735",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009791-grid_2.jpg"
    },
    {
      title: "Bord. Tiffany55 489g OB18,5 750ml",
      artNo: "30293",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1002040-grid_2.jpg"
    },
    {
      title: "BD Tiffany55 472g Vinolok 750ml",
      artNo: "33367",
      description: "750 ml, Vino Lock finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011756-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 550g BM17,5 750ml",
      artNo: "26427",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003395-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 551g OB17,5 750ml",
      artNo: "26429",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1003397-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 551g OB17,5 750ml",
      artNo: "26431",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1003396-grid_2.jpg"
    },
    {
      title: "Bord. Selection 427g BV2844 500ml",
      artNo: "29107",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001646-grid_2.jpg"
    },
    {
      title: "Bord. Selection 427g BV2844 500ml",
      artNo: "25838",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001993-grid_2.jpg"
    },
    {
      title: "Bord. Olivia55 518g OB18,5 750ml",
      artNo: "31057",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001439-grid_2.jpg"
    },
    {
      title: "Bord. Olivia55 518g OB18,5 750ml",
      artNo: "35834",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1009918-grid_2.jpg"
    },
    {
      title: "Bordeaux55 400g BM18,5 750ml",
      artNo: "11164",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001602-grid_2.jpg"
    },
    {
      title: "Bordeaux55 400g BM18,5 750ml",
      artNo: "22016",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001630-grid_2.jpg"
    },
    {
      title: "Bordeaux55 400g BM18,5 750ml",
      artNo: "21468",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006941-grid_2.jpg"
    },
    {
      title: "Bordeaux55 400g BM18,5 750ml",
      artNo: "22022",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001628-grid_2.jpg"
    },
    {
      title: "Bord. Europa55 568g OB17,5 750ml",
      artNo: "26199",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1003368-grid_2.jpg"
    },
    {
      title: "Bord. Tiffany 495g BV2844 750ml",
      artNo: "26834",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001044-grid_2.jpg"
    },
    {
      title: "Bord. Tiffany 495g BV2844 750ml",
      artNo: "26835",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001046-grid_2.jpg"
    },
    {
      title: "Bordeaux Viti 430g BM18,5 750ml",
      artNo: "31390",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001244-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV2844 700ml",
      artNo: "34518",
      description: "700 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012349-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV2844 700ml",
      artNo: "23613",
      description: "700 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009294-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV2844 750ml",
      artNo: "10529",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001618-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV2844 750ml",
      artNo: "17046",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006859-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV2844 750ml",
      artNo: "21520",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001619-grid_2.jpg"
    },
    {
      title: "Bord. Exkl.55 500g BM18,5 750ml",
      artNo: "11212",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003493-grid_2.jpg"
    },
    {
      title: "Bord. Exkl.55 500g BM18,5 750ml",
      artNo: "11214",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001623-grid_2.jpg"
    },
    {
      title: "Bord. Top 50 Ret 368g BV2844 500ml",
      artNo: "35826",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012282-grid_2.jpg"
    },
    {
      title: "Bord. Top 50 Ret 368g BV2844 500ml",
      artNo: "19164",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006854-grid_2.jpg"
    },
    {
      title: "Bord. Top 50 Ret 368g BV2844 500ml",
      artNo: "10581",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001011-grid_2.jpg"
    },
    {
      title: "Bord. Europa 561g BV3060 750ml",
      artNo: "31688",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010976-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV2844 375ml",
      artNo: "31618",
      description: "375 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010937-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV2844 375ml",
      artNo: "31861",
      description: "375 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011058-grid_2.jpg"
    },
    {
      title: "Bordeaux Conica 500g BM17.5 750ml",
      artNo: "31378",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010814-grid_2.jpg"
    },
    {
      title: "Bord. Selection55 420g BM18,5 500ml",
      artNo: "25980",
      description: "500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003192-grid_2.jpg"
    },
    {
      title: "Bord. Selection55 420g BM18,5 500ml",
      artNo: "21444",
      description: "500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006931-grid_2.jpg"
    },
    {
      title: "Bord. Selection55 420g BM18,5 500ml",
      artNo: "21445",
      description: "500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001738-grid_2.jpg"
    },
    {
      title: "Bord. Selection55 421g OB18,5 500ml",
      artNo: "12001",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001938-grid_3.jpg"
    },
    {
      title: "BD Selection55 412g Vinolok 500ml",
      artNo: "33368",
      description: "500 ml, Vino Lock finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011757-grid_2.jpg"
    },
    {
      title: "Bord. Selection60 478g OB18,5 700ml",
      artNo: "21846",
      description: "700 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1008384-grid_2.jpg"
    },
    {
      title: "Bordeaux S15 63 756g BM17,5 750ml",
      artNo: "31676",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010968-grid_2.jpg"
    },
    {
      title: "Bordeaux S15 63 752g BM18,5 750ml",
      artNo: "31859",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011057-grid_2.jpg"
    },
    {
      title: "Bordeaux S15 63 759g OB17,5 750ml",
      artNo: "31677",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010969-grid_2.jpg"
    },
    {
      title: "BD Exklusiv 357g BV3060 500ml",
      artNo: "34049",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012126-grid_2.jpg"
    },
    {
      title: "BD Exklusiv 357g BV3060 500ml",
      artNo: "34098",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012151-grid_2.jpg"
    },
    {
      title: "Bordeaux 209g BV2844 250ml",
      artNo: "31831",
      description: "250 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011044-grid_2.jpg"
    },
    {
      title: "Bord.Exkl.55mm 358g BM18,5 500ml",
      artNo: "34293",
      description: "500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012258-grid_2.jpg"
    },
    {
      title: "Bord.Exkl.55mm 358g BM18,5 500ml",
      artNo: "31348",
      description: "500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1007111-grid_2.jpg"
    },
    {
      title: "Bordeaux 310 58 460g BM18,5 750ml",
      artNo: "16772",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003474-grid_2.jpg"
    },
    {
      title: "Bordeaux 310 58 460g BM18,5 750ml",
      artNo: "22052",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006935-grid_2.jpg"
    },
    {
      title: "Bordeaux 310 58 460g BM18,5 750ml",
      artNo: "15143",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003563-grid_2.jpg"
    },
    {
      title: "Bord.California58 450g RB18,4 750ml",
      artNo: "22512",
      description: "750 ml, Ring cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005977-grid_2.jpg"
    },
    {
      title: "Bord.California58 450g WM18,4 750ml",
      artNo: "26591",
      description: "750 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003407-grid_2.jpg"
    },
    {
      title: "Bord.WinzerExkl69 553g OB17,5 750ml",
      artNo: "26011",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1008343-grid_2.jpg"
    },
    {
      title: "Bord.WinzerExkl69 553g OB17,5 750ml",
      artNo: "20797",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1002969-grid_2.jpg"
    },
    {
      title: "Bordeaux 410 400g BV3060 750ml",
      artNo: "36168",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009312-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV3060 750ml",
      artNo: "23043",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009009-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV3060 750ml",
      artNo: "22867",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1007529-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV3060 750ml",
      artNo: "21945",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1007385-grid_2.jpg"
    },
    {
      title: "Bordeaux 400g BV3060 750ml",
      artNo: "24822",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009601-grid_2.jpg"
    },
    {
      title: "Bord. Selection70 500g BM17,5 750ml",
      artNo: "24334",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009575-grid_2.jpg"
    },
    {
      title: "Bord. Selection 497g MC281G 750ml",
      artNo: "24603",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009685-grid_2.jpg"
    },
    {
      title: "Bord. Selection70 500g OB17,5 750ml",
      artNo: "22202",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1008563-grid_2.jpg"
    },
    {
      title: "Bord. Selection70 500g OB17,5 750ml",
      artNo: "23388",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1007453-grid_2.jpg"
    },
    {
      title: "Bord. Selection70 500g OB17,5 750ml",
      artNo: "31063",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1009678-grid_2.jpg"
    },
    {
      title: "Bordeaux68 400g BM17,5 750ml",
      artNo: "24362",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003265-grid_2.jpg"
    },
    {
      title: "Bordeaux68 400g BM17,5 750ml",
      artNo: "24303",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006401-grid_2.jpg"
    },
    {
      title: "Bordeaux 403g MC281G 750ml",
      artNo: "24378",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009592-grid_2.jpg"
    },
    {
      title: "Bordeaux 403g MC281G 750ml",
      artNo: "24376",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009591-grid_2.jpg"
    },
    {
      title: "Bordeaux USA68 400g WM17,5 750ml",
      artNo: "21615",
      description: "750 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008268-grid_2.jpg"
    },
    {
      title: "Bordeaux70 400g BM17,5 750ml",
      artNo: "30721",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002144-grid_2.jpg"
    },
    {
      title: "Bordeaux70 400g BM17,5 750ml",
      artNo: "28306",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001574-grid_2.jpg"
    },
    {
      title: "Bordeaux70 400g BM17,5 750ml",
      artNo: "24872",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009790-grid_2.jpg"
    },
    {
      title: "Bordeaux70 400g BM17,5 750ml",
      artNo: "30924",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1004005-grid_2.jpg"
    },
    {
      title: "Bord. Selection 500g BV3060 750ml",
      artNo: "30059",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001236-grid_2.jpg"
    },
    {
      title: "Bord. Selection 500g BV3060 750ml",
      artNo: "30614",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008165-grid_2.jpg"
    },
    {
      title: "Bord. Selection 500g BV3060 750ml",
      artNo: "27114",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009061-grid_3.jpg"
    },
    {
      title: "Bordeaux 404g BV3060 750ml",
      artNo: "36630",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001453-grid_2.jpg"
    },
    {
      title: "Bordeaux 404g BV3060 750ml",
      artNo: "26518",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003455-grid_2.jpg"
    },
    {
      title: "Bordeaux 404g BV3060 750ml",
      artNo: "36644",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003453-grid_2.jpg"
    },
    {
      title: "Bordeaux 404g BV3060 750ml",
      artNo: "25644",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008693-grid_2.jpg"
    },
    {
      title: "Bordeaux 404g BV3060 750ml",
      artNo: "36640",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003450-grid_2.jpg"
    },
    {
      title: "Bord. Exkl. 350g BV3060 375ml",
      artNo: "24438",
      description: "375 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009488-grid_2.jpg"
    },
    {
      title: "Bord. Exkl. 500g BV3060 750ml",
      artNo: "26461",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008752-grid_2.jpg"
    },
    {
      title: "Bord. Selection 420g BV3060 500ml",
      artNo: "31809",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009400-grid_2.jpg"
    },
    {
      title: "Bord. Selection 420g BV3060 500ml",
      artNo: "31853",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011055-grid_2.jpg"
    },
    {
      title: "Bordeaux 350g BV3060 750ml",
      artNo: "26647",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003543-grid_2.jpg"
    },
    {
      title: "Bordeaux 350g BV3060 750ml",
      artNo: "26582",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003516-grid_3.jpg"
    },
    {
      title: "Bordeaux 350g BV3060 750ml",
      artNo: "25809",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009835-grid_2.jpg"
    },
    {
      title: "Bordeaux 350g BV3060 750ml",
      artNo: "25328",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009940-grid_2.jpg"
    },
    {
      title: "Bordeaux 350g BV3060 750ml",
      artNo: "26577",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003514-grid_2.jpg"
    },
    {
      title: "Bordeaux 180g KK2615 250ml",
      artNo: "25176",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009892-grid_2.jpg"
    },
    {
      title: "Bordeaux 180g MC287R 250ml",
      artNo: "25315",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009931-grid_2.jpg"
    },
    {
      title: "Bordeaux 180g MC287R 250ml",
      artNo: "25317",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009932-grid_2.jpg"
    },
    {
      title: "Bordeaux 180g MC281R 250ml",
      artNo: "26946",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001112-grid_2.jpg"
    },
    {
      title: "Bordeaux 440g MC281G 1000ml",
      artNo: "26868",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001068-grid_3.jpg"
    },
    {
      title: "Bordeaux EW 440g MC31,5 1000ml",
      artNo: "25430",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001672-grid_2.jpg"
    },
    {
      title: "Bord. Elegance 465g BV3060 750ml",
      artNo: "26585",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003215-grid_3.jpg"
    },
    {
      title: "Bord. Sel.70 ES 509g OB17,5 750ml",
      artNo: "30085",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1003217-grid_2.jpg"
    },
    {
      title: "75cl Bordeaux 308 BV",
      artNo: "33972",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010802-grid_2.jpg"
    },
    {
      title: "Bordeaux 308 450g BV3060 750ml",
      artNo: "30618",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003441-grid_2.jpg"
    },
    {
      title: "Bordeaux 308 450g BV3060 750ml",
      artNo: "30948",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003430-grid_2.jpg"
    },
    {
      title: "Bord 410 lei. 350g BV3060 750ml",
      artNo: "26558",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003503-grid_2.jpg"
    },
    {
      title: "Bordeaux Selection 450 Wine bottle",
      artNo: "26908",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001089-grid_3.jpg"
    },
    {
      title: "Bord. Selection 450g BV3060 750ml",
      artNo: "26900",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001086-grid_2.jpg"
    },
    {
      title: "Bord. Selection 450g BV3060 750ml",
      artNo: "26903",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001088-grid_2.jpg"
    },
    {
      title: "Bord. Selection 450g BV3060 750ml",
      artNo: "27862",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001166-grid_2.jpg"
    },
    {
      title: "Bordeaux 520g BV3060 750ml",
      artNo: "32344",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001421-grid_2.jpg"
    },
    {
      title: "Bordeaux 520g BV3060 750ml",
      artNo: "32424",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001420-grid_2.jpg"
    },
    {
      title: "Bordeaux Exkl. 450g BVS3060 750ml",
      artNo: "28354",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001641-grid_2.jpg"
    },
    {
      title: "Bordeaux BA LP 460g OB 375ml",
      artNo: "31206",
      description: "375 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010744-grid_2.jpg"
    },
    {
      title: "Bordeaux EW 470g MC31,5 1000ml",
      artNo: "36322",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1013296-grid_2.jpg"
    },
    {
      title: "Bord. Füreder 505g KM17,5 1000ml",
      artNo: "22385",
      description: "1000 ml, Combined crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002596-grid_2.jpg"
    },
    {
      title: "Bord. Füreder 505g KM17,5 1000ml",
      artNo: "22386",
      description: "1000 ml, Combined crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002595-grid_3.jpg"
    },
    {
      title: "MOST 850g LM3230 2000ml",
      artNo: "12857",
      description: "2000 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1002825-grid_2.jpg"
    },
    {
      title: "Bord. Exkl.53 350g BM17,5 375ml",
      artNo: "19252",
      description: "375 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006934-grid_2.jpg"
    },
    {
      title: "Bord. Exkl.70 500g BM17,5 750ml",
      artNo: "26475",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003143-grid_2.jpg"
    },
    {
      title: "Bord. Exkl.70 500g BM17,5 750ml",
      artNo: "23240",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008721-grid_3.jpg"
    },
    {
      title: "Bord. Exkl.70 500g OB17,5 750ml",
      artNo: "36459",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1013361-grid_2.jpg"
    },
    {
      title: "Bord. Exkl.70 500g OB17,5 750ml",
      artNo: "24554",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1009677-grid_2.jpg"
    },
    {
      title: "Bordeaux Exklusiv 473g VL18,5 750ml",
      artNo: "27203",
      description: "750 ml, Vino Lock finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001246-grid_2.jpg"
    },
    {
      title: "Bordeaux Top70 495g OB17,5 750ml",
      artNo: "22058",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1008480-grid_2.jpg"
    },
    {
      title: "Bordeaux Top70 495g OB17,5 750ml",
      artNo: "24069",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1009470-grid_2.jpg"
    },
    {
      title: "BORD EXCL63 470g BM18,5 750ml",
      artNo: "33237",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011700-grid_2.jpg"
    },
    {
      title: "BORD EXCL63 470g BM18,5 750ml",
      artNo: "33239",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011702-grid_2.jpg"
    },
    {
      title: "BORD EXCL63 470g BM18,5 750ml",
      artNo: "33240",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011703-grid_2.jpg"
    },
    {
      title: "Bord. Excl.63 470g OB17,5 750ml",
      artNo: "35877",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001100-grid_2.jpg"
    },
    {
      title: "Bord. Excl.63 470g OB17,5 750ml",
      artNo: "32154",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1008663-grid_2.jpg"
    },
    {
      title: "Bordeaux55 VB 460g BM18,4 1000ml",
      artNo: "18452",
      description: "1000 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006350-grid_2.jpg"
    },
    {
      title: "Bordeaux55 VB 460g BM18,4 1000ml",
      artNo: "30311",
      description: "1000 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009305-grid_2.jpg"
    },
    {
      title: "Bordeaux72 Ret 520g BM16,5 1000ml",
      artNo: "12409",
      description: "1000 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002108-grid_2.jpg"
    },
    {
      title: "Bord trendy L 500g BM17,5 750ml",
      artNo: "30391",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001915-grid_2.jpg"
    },
    {
      title: "Bordeaux 308 410g BV3060 750ml",
      artNo: "33259",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011707-grid_2.jpg"
    },
    {
      title: "Bordeaux 308 425g BV3060 750ml",
      artNo: "33805",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012003-grid_2.jpg"
    },
    {
      title: "Bord. Select Heavy 900g BM18 750ml",
      artNo: "31810",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011029-grid_2.jpg"
    },
    {
      title: "Bord. Golia70 575g BM17,5 750ml",
      artNo: "27639",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001318-grid_2.jpg"
    },
    {
      title: "Bord. Golia70 575g BM17,5 750ml",
      artNo: "27201",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001245-grid_2.jpg"
    },
    {
      title: "Bord. Golia70 575g BM17,5 750ml",
      artNo: "27568",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001280-grid_2.jpg"
    },
    {
      title: "Bord. Futura75 600g OB17,5 500ml",
      artNo: "21270",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1004423-grid_2.jpg"
    },
    {
      title: "Bord. Futura75 600g OB17,5 500ml",
      artNo: "14595",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1004254-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 560g BM17,5 750ml",
      artNo: "16787",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006092-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 560g BM17,5 750ml",
      artNo: "23197",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1004162-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 560g BM17,5 750ml",
      artNo: "22962",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008978-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 560g BM17,5 750ml",
      artNo: "23474",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1004287-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 560g OB17,5 750ml",
      artNo: "27156",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001228-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 560g OB17,5 750ml",
      artNo: "21657",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1005979-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 560g OB17,5 750ml",
      artNo: "24488",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1009648-grid_2.jpg"
    },
    {
      title: "Bord. Class70 555g OB17,5 750ml",
      artNo: "20649",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1004499-grid_2.jpg"
    },
    {
      title: "Bord. Clas70 555g OB17,5 750ml",
      artNo: "18001",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1006016-grid_2.jpg"
    },
    {
      title: "Bord. Class70 555g OB17,5 750ml",
      artNo: "30348",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1008824-grid_2.jpg"
    },
    {
      title: "Bord. WinzerExkl. 565g OB17,5 750ml",
      artNo: "23062",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1005717-grid_2.jpg"
    },
    {
      title: "Winzer exklusiv 565g OB17,5 750ml",
      artNo: "28325",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001808-grid_2.jpg"
    },
    {
      title: "Bord. Futura50 500g WM17,5 250ml",
      artNo: "16791",
      description: "250 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005312-grid_2.jpg"
    },
    {
      title: "Bord. Futura68 500g OB17,5 375ml",
      artNo: "23078",
      description: "375 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1006994-grid_2.jpg"
    },
    {
      title: "Bord. Futura68 500g OB17,5 375ml",
      artNo: "19621",
      description: "375 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1007141-grid_2.jpg"
    },
    {
      title: "Bordeaux70 470g BM17,5 1000ml",
      artNo: "20066",
      description: "1000 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1007437-grid_2.jpg"
    },
    {
      title: "Golia extra70 603g OB17,5 750ml",
      artNo: "27142",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001214-grid_3.jpg"
    },
    {
      title: "Golia extra 70 603g OB17,5 750ml",
      artNo: "27640",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001319-grid_3.jpg"
    },
    {
      title: "Golia extra 70 603g OB17,5 750ml",
      artNo: "27638",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001317-grid_3.jpg"
    },
    {
      title: "Bord.ClassExkl.70 560g OB17,5 750ml",
      artNo: "27135",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001211-grid_2.jpg"
    },
    {
      title: "Bord.ClassExkl.70 560g OB17,5 750ml",
      artNo: "27221",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001250-grid_2.jpg"
    },
    {
      title: "Bordeaux 160g MC281G 187ml",
      artNo: "24042",
      description: "187 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009456-grid_2.jpg"
    },
    {
      title: "Bordeaux 429g MC281G 1000ml",
      artNo: "24048",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009461-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 470g BM17,5 750ml",
      artNo: "30186",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001948-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 470g BM17,5 750ml",
      artNo: "26099",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003295-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 470g BM17,5 750ml",
      artNo: "26606",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003525-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 470g OB17,5 750ml",
      artNo: "30187",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001949-grid_2.jpg"
    },
    {
      title: "Bord. Europea70 470g OB17,5 750ml",
      artNo: "27141",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1001213-grid_2.jpg"
    },
    {
      title: "Bordeaux Adria 400g BV3060 1000ml",
      artNo: "27071",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001180-grid_2.jpg"
    },
    {
      title: "Bordeaux Adria 400g BV3060 1000ml",
      artNo: "26542",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003477-grid_2.jpg"
    },
    {
      title: "Bordeaux Adria 400g BV3060 1000ml",
      artNo: "26537",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003469-grid_2.jpg"
    },
    {
      title: "Bordeaux Adria 400g BV3060 1000ml",
      artNo: "26652",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003546-grid_2.jpg"
    },
    {
      title: "Bordeaux Adria 392g KK2618 1000ml",
      artNo: "26636",
      description: "1000 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003533-grid_2.jpg"
    },
    {
      title: "Bordeaux Adria 392g KK2618 1000ml",
      artNo: "27185",
      description: "1000 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001239-grid_2.jpg"
    },
    {
      title: "Bordeaux Adria 396g MC281G 1000ml",
      artNo: "26640",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1003535-grid_2.jpg"
    },
    {
      title: "Bordeaux Adria 396g MC281G 1000ml",
      artNo: "26637",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1003534-grid_2.jpg"
    },
    {
      title: "Bordeaux Adria 396g MC281G 1000ml",
      artNo: "30208",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001999-grid_2.jpg"
    },
    {
      title: "Glass bottle Bord.Eco Adria 750 ml",
      artNo: "30779",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003015-grid_2.jpg"
    },
    {
      title: "Bord. Eco Adria70 365g BM17,5 750ml",
      artNo: "26828",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001039-grid_2.jpg"
    },
    {
      title: "Bord. Eco Adria30 365g BV3060 750ml",
      artNo: "27742",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001069-grid_2.jpg"
    },
    {
      title: "Bordeaux 164g BV2844 187ml",
      artNo: "27738",
      description: "187 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001337-grid_2.jpg"
    },
    {
      title: "Bordeaux 164g BV2844 187ml",
      artNo: "27816",
      description: "187 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001406-grid_2.jpg"
    },
    {
      title: "Bordeaux 165g MC281G 187ml",
      artNo: "27775",
      description: "187 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001385-grid_2.jpg"
    },
    {
      title: "Bordeaux 165g MC281G 187ml",
      artNo: "27892",
      description: "187 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001440-grid_2.jpg"
    },
    {
      title: "Bordeaux CET65 412g BM18,4 750ml",
      artNo: "22441",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008702-grid_2.jpg"
    },
    {
      title: "Bord. VIP 70 460g BM17,5 750ml",
      artNo: "23667",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009286-grid_2.jpg"
    },
    {
      title: "Bord. Futura 330 500g OB17,5 500ml",
      artNo: "25095",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1009866-grid_2.jpg"
    },
    {
      title: "BDM IT wine bottle",
      artNo: "28037",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001501-grid_2.jpg"
    },
    {
      title: "Bordeaux FF 470g BV3060 1000ml",
      artNo: "27776",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001386-grid_3.jpg"
    },
    {
      title: "Bordeaux FF 470g BV3060 1000ml",
      artNo: "28110",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001526-grid_2.jpg"
    },
    {
      title: "Bordeaux FF 470g BV3060 1000ml",
      artNo: "28111",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001527-grid_2.jpg"
    },
    {
      title: "Bottle VIP 750 ml",
      artNo: "31401",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010825-grid_2.jpg"
    },
    {
      title: "Glass bottle VIP 750ml",
      artNo: "30690",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1003291-grid_2.jpg"
    },
    {
      title: "Glass bottle Bordolesse light BP1 750 ml",
      artNo: "30310",
      description: "750 ml, Special finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002255-grid_2.jpg"
    },
    {
      title: "Glass bottle Bordolesse light BP1 750 ml",
      artNo: "30261",
      description: "750 ml, Special finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002249-grid_2.jpg"
    },
    {
      title: "Glass bottle Bordo classic 750 ml",
      artNo: "30982",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003078-grid_2.jpg"
    },
    {
      title: "Bordo classic BM1 750 ml",
      artNo: "32596",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011394-grid_2.jpg"
    },
    {
      title: "Golia 750ml",
      artNo: "30606",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002303-grid_2.jpg"
    },
    {
      title: "Glass bottle Golia 750ml",
      artNo: "30829",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002149-grid_2.jpg"
    },
    {
      title: "Glass bottle Bord Vip Italia 750ml",
      artNo: "30723",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003017-grid_3.jpg"
    },
    {
      title: "Bordolesse 750ml",
      artNo: "32614",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1011404-grid_3.jpg"
    },
    {
      title: "Bordolesse 750ml",
      artNo: "32613",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1011403-grid_2.jpg"
    },
    {
      title: "Bottle Golia light 750ml",
      artNo: "34294",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012259-grid_2.jpg"
    },
    {
      title: "Bordolese Golia70 750g BM17,5 750ml",
      artNo: "28811",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010413-grid_4.jpg"
    },
    {
      title: "Bord.Decò Smart63 650g BM17,5 750ml",
      artNo: "28971",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010496-grid_2.jpg"
    },
    {
      title: "Bord.Decò Smart63 650g OB17,5 750ml",
      artNo: "32090",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1011138-grid_2.jpg"
    },
    {
      title: "Bord. Antica70 700g BM17,5 750ml",
      artNo: "28757",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010384-grid_2.jpg"
    },
    {
      title: "Bordolese -G-70 500g BM17,5 500ml",
      artNo: "28656",
      description: "500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010340-grid_2.jpg"
    },
    {
      title: "Bord. Cilindr.80 700g BM17,5 1000ml",
      artNo: "28810",
      description: "1000 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010412-grid_2.jpg"
    },
    {
      title: "Bord. Terza70 600g BM17,5 750ml",
      artNo: "28550",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010280-grid_2.jpg"
    },
    {
      title: "Bordeaux Selene70 500g BM17,5 750ml",
      artNo: "28759",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010386-grid_2.jpg"
    },
    {
      title: "Bordeaux Selene70 500g OB17,5 750ml",
      artNo: "28808",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010410-grid_3.jpg"
    },
    {
      title: "Bord. Ansi70 700g BM17,5 750ml",
      artNo: "28573",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010294-grid_4.jpg"
    },
    {
      title: "Bord._G_Europea70 550g BM17,5 750ml",
      artNo: "28740",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010377-grid_2.jpg"
    },
    {
      title: "Bord._G_Europea70 550g BM17,5 750ml",
      artNo: "28553",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010281-grid_2.jpg"
    },
    {
      title: "Bord -G-Europea70 550g OB17,5 750ml",
      artNo: "28576",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010297-grid_2.jpg"
    },
    {
      title: "Bord._G_Europea70 550g OB17,5 750ml",
      artNo: "28580",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010298-grid_3.jpg"
    },
    {
      title: "CONCEPT EMB-BD_G_An.FL 550g 750ml",
      artNo: "28512",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010257-grid_2.jpg"
    },
    {
      title: "Bord. Conica80 600g BM17,5 750ml",
      artNo: "28814",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010416-grid_3.jpg"
    },
    {
      title: "Bord. Vinaria70 400g OB17,5 375ml",
      artNo: "28663",
      description: "375 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010346-grid_2.jpg"
    },
    {
      title: "Bord. Topazio70 650g BM17,5 750ml",
      artNo: "28601",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010307-grid_4.jpg"
    },
    {
      title: "BD Seconda70 C_T 700g BM17,5 750ml",
      artNo: "28541",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010274-grid_4.jpg"
    },
    {
      title: "BD Deco Trendy70 550g BM17,5 750ml",
      artNo: "30068",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001397-grid_2.jpg"
    },
    {
      title: "Bord. Conica90 1300g BM18,5 1500ml",
      artNo: "28685",
      description: "1500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010359-grid_2.jpg"
    },
    {
      title: "Bord. Cilindr90 1300g BM18,5 1500ml",
      artNo: "28701",
      description: "1500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010364-grid_5.jpg"
    },
    {
      title: "Bord. Tuscany70 550g BM17,5 750ml",
      artNo: "28953",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010487-grid_2.jpg"
    },
    {
      title: "BD Decò Heavy75 1K2 BM17,5 750ml",
      artNo: "28732",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010372-grid_2.jpg"
    },
    {
      title: "Bord. Reale75 1200g BM18,5 750ml",
      artNo: "28408",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010203-grid_3.jpg"
    },
    {
      title: "BD DecòMedium2 75 850g BM17,5 750ml",
      artNo: "28938",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010478-grid_4.jpg"
    },
    {
      title: "Bord. _Z_ 70 600g BM17,5 750ml",
      artNo: "28737",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010375-grid_2.jpg"
    },
    {
      title: "Bord.Iris Image70 600g OB16,5 750ml",
      artNo: "28770",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010390-grid_3.jpg"
    },
    {
      title: "BD ZetaPl C/Bol 70 850g BM17,5 750ml",
      artNo: "28964",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010494-grid_2.jpg"
    },
    {
      title: "BD ZetaPl CB3/4 70 850g BM17,5 750ml",
      artNo: "28771",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010391-grid_3.jpg"
    },
    {
      title: "Bord. Bassa90 1300g BM24 3000ml",
      artNo: "28568",
      description: "3000 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010290-grid_2.jpg"
    },
    {
      title: "Bord.Futura Plus75 850gOB18,5 750ml",
      artNo: "28803",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010407-grid_2.jpg"
    },
    {
      title: "Bord. Vinaria70 500g OB17,5 500ml",
      artNo: "28599",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010306-grid_2.jpg"
    },
    {
      title: "Bord. Vinaria70 500g OB17,5 500ml",
      artNo: "28945",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010481-grid_4.jpg"
    },
    {
      title: "Bord. Antica70 350g BM17,5 375ml",
      artNo: "28603",
      description: "375 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010308-grid_2.jpg"
    },
    {
      title: "Bord. S15 Cil.60 500g BM17,5 375ml",
      artNo: "28622",
      description: "375 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010323-grid_2.jpg"
    },
    {
      title: "Bord. Italiana90 850g BM18,5 1500ml",
      artNo: "28839",
      description: "1500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010423-grid_4.jpg"
    },
    {
      title: "Bordeaux Alfa 2 550g OB18,5 750ml",
      artNo: "31801",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010337-grid_2.jpg"
    },
    {
      title: "Bord. Alfa 2 82 550g OB18,5 500ml",
      artNo: "28655",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010339-grid_2.jpg"
    },
    {
      title: "BD Vittoria80 610g BM18,5 500ml",
      artNo: "30654",
      description: "500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010348-grid_3.jpg"
    },
    {
      title: "Bord. Deco C_T 550g BV3060 750ml",
      artNo: "30533",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010682-grid_2.jpg"
    },
    {
      title: "BD ItaliaPlus90 1750g BM24 3000ml",
      artNo: "31898",
      description: "3000 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011077-grid_2.jpg"
    },
    {
      title: "Bord DecoLight70 500g BV3060 750ml",
      artNo: "33555",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011873-grid_2.jpg"
    },
    {
      title: "Bord DecoLight70 500g BV3060 750ml",
      artNo: "33548",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011864-grid_2.jpg"
    },
    {
      title: "Storica Elite 850g BM17,5 750ml",
      artNo: "35003",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012602-grid_2.jpg"
    },
    {
      title: "Europea 500g BM18,5 750ml",
      artNo: "35034",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012624-grid_2.jpg"
    },
    {
      title: "Europea 500g BM18,5 750ml",
      artNo: "35030",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012623-grid_2.jpg"
    },
    {
      title: "Europea VIP 500g OB17,5 750ml",
      artNo: "35037",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012626-grid_2.jpg"
    },
    {
      title: "Europea VIP 500g OB17,5 750ml",
      artNo: "35036",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012625-grid_2.jpg"
    },
    {
      title: "Bordo IT 440g BM17,5 750ml",
      artNo: "35076",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012654-grid_2.jpg"
    },
    {
      title: "Bordolesa S 690g BM18,5 1500ml",
      artNo: "35134",
      description: "1500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012698-grid_2.jpg"
    },
    {
      title: "Bordolesa S 690g BM18,5 1500ml",
      artNo: "35130",
      description: "1500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012696-grid_2.jpg"
    },
    {
      title: "Bordolesa VIP-S 470g BM18,5 750ml",
      artNo: "35202",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012742-grid_2.jpg"
    },
    {
      title: "Bordolesa VIP-S 470g BM18,5 750ml",
      artNo: "35200",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012741-grid_2.jpg"
    },
    {
      title: "Bordolesa VIP 480g OB18,5 750ml",
      artNo: "35618",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012700-grid_2.jpg"
    },
    {
      title: "Bordolesa VIP 480g OB18,5 750ml",
      artNo: "35571",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012979-grid_2.jpg"
    },
    {
      title: "Bordolesa VIP 480g OB18,5 750ml",
      artNo: "35570",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012986-grid_2.jpg"
    },
    {
      title: "Bordo Selection S 535g BM17,5 750ml",
      artNo: "35204",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012744-grid_2.jpg"
    },
    {
      title: "Conica Std 470g BM18,5 750ml",
      artNo: "35220",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012755-grid_2.jpg"
    },
    {
      title: "Conica Std 470g BM18,5 750ml",
      artNo: "35218",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012753-grid_2.jpg"
    },
    {
      title: "Legera 425g BM18,5 750ml",
      artNo: "35616",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012670-grid_2.jpg"
    },
    {
      title: "Legera 425g BM18,5 750ml",
      artNo: "35279",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012800-grid_2.jpg"
    },
    {
      title: "Legera 425g BM18,5 750ml",
      artNo: "35277",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012799-grid_2.jpg"
    },
    {
      title: "Legera 415g BV3060 750ml",
      artNo: "35284",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012805-grid_2.jpg"
    },
    {
      title: "Legera 415g BV3060 750ml",
      artNo: "35532",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012965-grid_2.jpg"
    },
    {
      title: "Bordolese Storica 600g BM18,5 750ml",
      artNo: "35324",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012833-grid_2.jpg"
    },
    {
      title: "Bordolesa Class VIP 480g OB18,5 750ml",
      artNo: "35326",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012835-grid_2.jpg"
    },
    {
      title: "Storica VIP 800g BM17,5 750ml",
      artNo: "35347",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012850-grid_2.jpg"
    },
    {
      title: "Bordolesa 450g BV3060 750ml",
      artNo: "35441",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012905-grid_2.jpg"
    },
    {
      title: "Bordolesa 450g BV3060 750ml",
      artNo: "35439",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012904-grid_2.jpg"
    },
    {
      title: "Vermut 465g PP3144 1000ml",
      artNo: "35444",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012907-grid_2.jpg"
    },
    {
      title: "Super Vip 460g BM18,5 1000ml",
      artNo: "35447",
      description: "1000 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012908-grid_2.jpg"
    },
    {
      title: "Bourgogne55 373g BM18,5 375ml",
      artNo: "19902",
      description: "375 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1007332-grid_2.jpg"
    },
    {
      title: "Burgunder Ret 548g KK2918 1000ml",
      artNo: "33769",
      description: "1000 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011982-grid_2.jpg"
    },
    {
      title: "Burg. Evolution 465g BV3060 750ml",
      artNo: "22613",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008819-grid_3.jpg"
    },
    {
      title: "Burg. Evolution 465g BV3060 750ml",
      artNo: "26073",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003278-grid_3.jpg"
    },
    {
      title: "Burg. Tradition63 564g BM18,5 750ml",
      artNo: "24469",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008975-grid_2.jpg"
    },
    {
      title: "Burg. Eco Evol.55 395g BM18,5 750ml",
      artNo: "33943",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012076-grid_2.jpg"
    },
    {
      title: "Burg. Eco Evol.55 395g BM18,5 750ml",
      artNo: "24471",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009641-grid_2.jpg"
    },
    {
      title: "Burg. St-Prex63 542g BM18,5 750ml",
      artNo: "25307",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009926-grid_2.jpg"
    },
    {
      title: "Burg. St-Prex63 523g WM18,5 750ml",
      artNo: "36092",
      description: "750 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013141-grid_2.jpg"
    },
    {
      title: "Burg. Tradition70 557g BM17,5 750ml",
      artNo: "25948",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003095-grid_2.jpg"
    },
    {
      title: "Burgunder55 400g BM18,5 750ml",
      artNo: "21438",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001060-grid_2.jpg"
    },
    {
      title: "Burgunder 400g BV2844 750ml",
      artNo: "15663",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001346-grid_2.jpg"
    },
    {
      title: "Burgunder 400g BV2844 750ml",
      artNo: "26079",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001142-grid_2.jpg"
    },
    {
      title: "Burg. Carrée63 586g BM18,5 750ml",
      artNo: "28203",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001369-grid_2.jpg"
    },
    {
      title: "Burg.Eco Evolut 395g BV3060 750ml",
      artNo: "30319",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002010-grid_2.jpg"
    },
    {
      title: "Burg. Eco Evolut. 395g BV3060 750ml",
      artNo: "28064",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001498-grid_2.jpg"
    },
    {
      title: "Burg Eco Evolut 395g BV3060 750ml",
      artNo: "35885",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013043-grid_1.jpg"
    },
    {
      title: "Burg. St-Prex Carrée63 590g BM18,5 750ml",
      artNo: "30676",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003042-grid_2.jpg"
    },
    {
      title: "Burgunder 140g BP2516 187ml",
      artNo: "11412",
      description: "187 ml, BVP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001361-grid_2.jpg"
    },
    {
      title: "Burg. Tradition55 573g BM18,5 750ml",
      artNo: "17312",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005671-grid_2.jpg"
    },
    {
      title: "Burg. Tradition55 573g BM18,5 750ml",
      artNo: "17311",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005654-grid_2.jpg"
    },
    {
      title: "Bourg.ST-PREX 571g BVS3060 750ml",
      artNo: "34138",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012171-grid_2.jpg"
    },
    {
      title: "Bourg. StPrex 571g BVS3060 750ml",
      artNo: "36008",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013125-grid_2.jpg"
    },
    {
      title: "Bourg. StPrex 466g BV3060 500ml",
      artNo: "35830",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013024-grid_2.jpg"
    },
    {
      title: "Bourg. StPrex 465g BM18,5 500ml",
      artNo: "35851",
      description: "500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013030-grid_3.jpg"
    },
    {
      title: "L BG StPrex NE 461g RB18,5 500ml",
      artNo: "35839",
      description: "500 ml, Ring cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013008-grid_2.jpg"
    },
    {
      title: "Bourg. StPrex 452g WM18,5 500ml",
      artNo: "36081",
      description: "500 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013140-grid_3.jpg"
    },
    {
      title: "L BG StPrex NE 545g RB18,5 750ml",
      artNo: "35837",
      description: "750 ml, Ring cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013007-grid_2.jpg"
    },
    {
      title: "Bourg. StPrex 360g BVS3060 375ml",
      artNo: "36007",
      description: "375 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013124-grid_2.jpg"
    },
    {
      title: "Burg. Evolution55 440g BM18,5 750ml",
      artNo: "22788",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008896-grid_2.jpg"
    },
    {
      title: "Burg. Evolution55 440g BM18,5 750ml",
      artNo: "11853",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001848-grid_2.jpg"
    },
    {
      title: "Burg. Evolution55 440g BM18,5 750ml",
      artNo: "31741",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1004010-grid_2.jpg"
    },
    {
      title: "Burg. Evolution55 440g BM18,5 750ml",
      artNo: "30769",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001962-grid_2.jpg"
    },
    {
      title: "L Burgonde63 976g BM18,5 750ml",
      artNo: "13971",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003452-grid_2.jpg"
    },
    {
      title: "Burg. Exklusiv60 500g BM17,5 750ml",
      artNo: "21377",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008136-grid_2.jpg"
    },
    {
      title: "Burg. Exklusiv 490g BV3060 750ml",
      artNo: "24520",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008342-grid_2.jpg"
    },
    {
      title: "Burg. Exklusiv 490g BV3060 750ml",
      artNo: "27747",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001374-grid_2.jpg"
    },
    {
      title: "Burgunder Alta70 550g BM17,5 750ml",
      artNo: "26861",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001062-grid_2.jpg"
    },
    {
      title: "Burgunder Alta70 550g BM17,5 750ml",
      artNo: "25208",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009902-grid_2.jpg"
    },
    {
      title: "Burgunder Alta70 550g BM17,5 750ml",
      artNo: "25177",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009891-grid_2.jpg"
    },
    {
      title: "Burgunder Alta 550g BV3060 750ml",
      artNo: "25073",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009861-grid_2.jpg"
    },
    {
      title: "Burgunder Alta 550g BV3060 750ml",
      artNo: "25074",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009862-grid_2.jpg"
    },
    {
      title: "BURGUNDER FF 46 470g BV3044 1000ml",
      artNo: "35880",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013037-grid_2.jpg"
    },
    {
      title: "BURGUNDER FF 46 470g BV3044 1000ml",
      artNo: "28358",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001642-grid_3.jpg"
    },
    {
      title: "Burgunder FF46 470g BV3044 1000ml",
      artNo: "28200",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001582-grid_2.jpg"
    },
    {
      title: "Burgunder Heavy70 970g BM18 750ml",
      artNo: "31811",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011030-grid_2.jpg"
    },
    {
      title: "Burg. Exklusiv55 515g WM17,5 750ml",
      artNo: "25040",
      description: "750 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1004498-grid_2.jpg"
    },
    {
      title: "Burgunder TOP72 OB17,5 750ml",
      artNo: "23418",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1009179-grid_2.jpg"
    },
    {
      title: "Oreanda 500g BP3028 700ml",
      artNo: "30733",
      description: "700 ml, BVP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002127-grid_2.jpg"
    },
    {
      title: "Borg. Francese 650g BM18,5 750ml",
      artNo: "32439",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011331-grid_2.jpg"
    },
    {
      title: "Espanola 550g OB18,5 750ml",
      artNo: "35049",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012636-grid_2.jpg"
    },
    {
      title: "Espanola 550g OB18,5 750ml",
      artNo: "35050",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012635-grid_2.jpg"
    },
    {
      title: "Burgundi 670g BM18,5 1500ml",
      artNo: "35186",
      description: "1500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012733-grid_2.jpg"
    },
    {
      title: "Burgundi 670g BM18,5 1500ml",
      artNo: "35184",
      description: "1500 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012732-grid_2.jpg"
    },
    {
      title: "Burgundia Regina 800g BM18,5 750ml",
      artNo: "35275",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012797-grid_2.jpg"
    },
    {
      title: "Burgundia Regina 800g BM18,5 750ml",
      artNo: "35531",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012964-grid_2.jpg"
    },
    {
      title: "Burgundia BVS 440g BV3060 750ml",
      artNo: "35297",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012814-grid_2.jpg"
    },
    {
      title: "Burgundia BVS 440g BV3060 750ml",
      artNo: "35296",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012813-grid_2.jpg"
    },
    {
      title: "BRG CETIE light 530g BM18,5 750ml",
      artNo: "35400",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012876-grid_2.jpg"
    },
    {
      title: "BRG CETIE light 530g BM18,5 750ml",
      artNo: "35399",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012875-grid_2.jpg"
    },
    {
      title: "Borgona 435g BM18,5 750ml",
      artNo: "35421",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012891-grid_2.jpg"
    },
    {
      title: "Borgona 435g BM18,5 750ml",
      artNo: "35565",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012973-grid_2.jpg"
    },
    {
      title: "BRG Sorgente 550g OB17,5 750ml",
      artNo: "35426",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012894-grid_2.jpg"
    },
    {
      title: "L REVENU-Dardagny 645g BM18,5 700ml",
      artNo: "24880",
      description: "700 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009793-grid_2.jpg"
    },
    {
      title: "L REVENU-Dardagny 645g BM18,5 700ml",
      artNo: "30845",
      description: "700 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002152-grid_2.jpg"
    },
    {
      title: "Port Sherry 420g MC31,5 750ml",
      artNo: "25021",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1002798-grid_2.jpg"
    },
    {
      title: "Kurzhals 395g MC287R 1000ml",
      artNo: "27180",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001234-grid_2.jpg"
    },
    {
      title: "Kurzhals 395g MC287R 1000ml",
      artNo: "33872",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1012040-grid_2.jpg"
    },
    {
      title: "MOSTGALERIE-Most Ret MC281G 1000ml",
      artNo: "36592",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1011304-grid_2.jpg"
    },
    {
      title: "Krugflasche 985g SM18,5 2000ml",
      artNo: "19730",
      description: "2000 ml, Special finish",
      img: "https://katalog.vetropack.com/static_cache/img/1007194-grid_2.jpg"
    },
    {
      title: "Glass bottle Perfetta 700ml",
      artNo: "26234",
      description: "700 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010147-grid_2.jpg"
    },
    {
      title: "Glass bottle Kraft Wine 375 ml",
      artNo: "30403",
      description: "375 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1002076-grid_2.jpg"
    },
    {
      title: "Bottle Wine VPG 375 ml",
      artNo: "28245",
      description: "375 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001601-grid_2.jpg"
    },
    {
      title: "L VD Bar. Dézaley 518g SB18,5 700ml",
      artNo: "24179",
      description: "700 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009531-grid_2.jpg"
    },
    {
      title: "Vaud. Dionys 322g BV2844 500ml",
      artNo: "24803",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009795-grid_2.jpg"
    },
    {
      title: "Vaud. Dionys 380g BV2844 700ml",
      artNo: "24804",
      description: "700 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009798-grid_2.jpg"
    },
    {
      title: "Vaud. Dionys55 380g SB18,5 700ml",
      artNo: "24806",
      description: "700 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009799-grid_2.jpg"
    },
    {
      title: "Vaud. Dionys55 380g SB18,5 750ml",
      artNo: "24807",
      description: "750 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009796-grid_2.jpg"
    },
    {
      title: "L VD Artevitis 579g RB18,5 750ml",
      artNo: "25839",
      description: "750 ml, Ring cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001994-grid_2.jpg"
    },
    {
      title: "Vaudoise 336g BV2844 350ml",
      artNo: "19159",
      description: "350 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006869-grid_2.jpg"
    },
    {
      title: "Vaudoise 340g BV2844 375ml",
      artNo: "26206",
      description: "375 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003374-grid_2.jpg"
    },
    {
      title: "Vaudoise 400g BV2844 750ml",
      artNo: "26071",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001597-grid_2.jpg"
    },
    {
      title: "Vaudoise 400g BV2844 750ml",
      artNo: "21465",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001340-grid_2.jpg"
    },
    {
      title: "Vaudoise 400g BV2844 750ml",
      artNo: "21467",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006874-grid_2.jpg"
    },
    {
      title: "VETRUM-Vigneronne 490g SB18,5 700 ml",
      artNo: "32398",
      description: "700 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011309-grid_2.jpg"
    },
    {
      title: "VETRUM-Vigneronne490g SB18,5 700ml",
      artNo: "30111",
      description: "700 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009960-grid_2.jpg"
    },
    {
      title: "L Vaud.Vigneronne490g SB18,5 700ml",
      artNo: "34896",
      description: "700 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012537-grid_2.jpg"
    },
    {
      title: "VETRUM-Vigneronne490g SB18,5 750ml",
      artNo: "30933",
      description: "750 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009965-grid_2.jpg"
    },
    {
      title: "VETRUM-Vigneronne492g BV2844 700ml",
      artNo: "30113",
      description: "700 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009962-grid_2.jpg"
    },
    {
      title: "VETRUM-Vigneronne492g BV2844 750ml",
      artNo: "31032",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009966-grid_2.jpg"
    },
    {
      title: "VETRUM-Vigneronne492g BV2844 750ml",
      artNo: "30735",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009964-grid_2.jpg"
    },
    {
      title: "VETRUM-Vigneronne467g BV3060 750ml",
      artNo: "31479",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010864-grid_2.jpg"
    },
    {
      title: "L Bernoise 600g SB18,5 750ml",
      artNo: "32199",
      description: "750 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011190-grid_2.jpg"
    },
    {
      title: "VETRUM-Vigneronne467g BV3060 700ml",
      artNo: "32651",
      description: "700 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011423-grid_2.jpg"
    },
    {
      title: "L Vaudoise Chardonne SB18,5 700ml",
      artNo: "36520",
      description: "700 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013396-grid_2.jpg"
    },
    {
      title: "Vaudoise 365g BVS3060 375ml",
      artNo: "35895",
      description: "375 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013041-grid_2.jpg"
    },
    {
      title: "L VD Le Pot 908g SB18,5 1400ml",
      artNo: "19684",
      description: "1400 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1007171-grid_2.jpg"
    },
    {
      title: "L VD Picholette 468g SB18,5 350ml",
      artNo: "33736",
      description: "350 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011966-grid_2.jpg"
    },
    {
      title: "L VD La Vaud.1822 602g SB18,5 700ml",
      artNo: "33697",
      description: "700 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011943-grid_2.jpg"
    },
    {
      title: "L VD La Vaud.1822 602g SB18,5 700ml",
      artNo: "33694",
      description: "700 ml, High cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011941-grid_3.jpg"
    },
    {
      title: "L Steiermark 480g BV3060 750ml",
      artNo: "33988",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009668-grid_2.jpg"
    },
    {
      title: "Styria light wine bottle",
      artNo: "24519",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009666-grid_2.jpg"
    },
    {
      title: "L Steiermark 480g BV3060 750ml",
      artNo: "33359",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009667-grid_2.jpg"
    },
    {
      title: "Rheinwein55 450g BM18,5 700ml",
      artNo: "22425",
      description: "700 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008703-grid_2.jpg"
    },
    {
      title: "Anjou63 485g BM18,5 750ml",
      artNo: "25919",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003075-grid_2.jpg"
    },
    {
      title: "Rheinwein 445g BV2844 500ml",
      artNo: "19186",
      description: "500 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006878-grid_2.jpg"
    },
    {
      title: "Rheinwein 480g BV2844 700ml",
      artNo: "10069",
      description: "700 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001053-grid_2.jpg"
    },
    {
      title: "Rheinwein 480g BV2844 700ml",
      artNo: "22430",
      description: "700 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001096-grid_2.jpg"
    },
    {
      title: "Rheinwein 480g BV2844 700ml",
      artNo: "23721",
      description: "700 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009323-grid_2.jpg"
    },
    {
      title: "L Rheinw. Nêuch.55 494gRB18,5 750ml",
      artNo: "22582",
      description: "750 ml, Ring cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001818-grid_2.jpg"
    },
    {
      title: "Rheinwein 355g BV2844 375ml",
      artNo: "10363",
      description: "375 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001313-grid_2.jpg"
    },
    {
      title: "Rheinwein Exkl.70 500g BM17,5 750ml",
      artNo: "13791",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003140-grid_2.jpg"
    },
    {
      title: "Rheinwein Exkl.70 500g BM17,5 750ml",
      artNo: "13790",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003139-grid_2.jpg"
    },
    {
      title: "Rheinwein Exkl. 480g VL18,5 750ml",
      artNo: "27532",
      description: "750 ml, Vino Lock finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001257-grid_2.jpg"
    },
    {
      title: "Rheinwein 545g KK2618 1000ml",
      artNo: "12861",
      description: "1000 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002832-grid_2.jpg"
    },
    {
      title: "Rheinw. Schlegel 380g MC287R 1000ml",
      artNo: "18071",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1005732-grid_2.jpg"
    },
    {
      title: "Rheinwein Exkl. 500g BV3060 750ml",
      artNo: "21243",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008046-grid_2.jpg"
    },
    {
      title: "Rheinwein Exkl. 500g BV3060 750ml",
      artNo: "23394",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008306-grid_2.jpg"
    },
    {
      title: "Rheinwein Exkl. 500g BV3060 750ml",
      artNo: "22232",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008578-grid_2.jpg"
    },
    {
      title: "Rheinwein 330 410g BV3060 750ml",
      artNo: "25887",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002234-grid_2.jpg"
    },
    {
      title: "Rheinwein 330 410g BV3060 750ml",
      artNo: "31864",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011059-grid_2.jpg"
    },
    {
      title: "Rheinwein 330 410g BV3060 750ml",
      artNo: "26135",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003309-grid_2.jpg"
    },
    {
      title: "Rheinwein 330 410g BV3060 750ml",
      artNo: "26608",
      description: "750 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003526-grid_2.jpg"
    },
    {
      title: "Rheinw. Schlegel 380g BV3060 1000ml",
      artNo: "27668",
      description: "1000 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001345-grid_2.jpg"
    },
    {
      title: "Rheinwein 330 440g BM17,5 750ml",
      artNo: "31399",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010824-grid_2.jpg"
    },
    {
      title: "Rheinwein 330 440g OB17,5 750ml",
      artNo: "31447",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1010849-grid_2.jpg"
    },
    {
      title: "Rheinwein 330 428g VL18,5 750ml",
      artNo: "31449",
      description: "750 ml, Vino Lock finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010851-grid_2.jpg"
    },
    {
      title: "RHEINWEIN55 505g BM18,5 750ml",
      artNo: "33251",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011704-grid_2.jpg"
    },
    {
      title: "Rheinwein LP 68 440g BM17,5 750ml",
      artNo: "30516",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002103-grid_2.jpg"
    },
    {
      title: "But. Prestige62 550g BM17,5 750ml",
      artNo: "15353",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1004551-grid_2.jpg"
    },
    {
      title: "RW Butelja 440g MC281G 1000ml",
      artNo: "23377",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1004572-grid_2.jpg"
    },
    {
      title: "Renana Futura50 500g WM17,5 250ml",
      artNo: "16792",
      description: "250 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005313-grid_2.jpg"
    },
    {
      title: "Rheinwein60 450g BM17,5 750ml",
      artNo: "18846",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006606-grid_2.jpg"
    },
    {
      title: "Renana Breganza60 500g OB17,5 750ml",
      artNo: "17366",
      description: "750 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1005694-grid_2.jpg"
    },
    {
      title: "Renana Belvedere70 OB17,5 500ml",
      artNo: "21622",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1002935-grid_2.jpg"
    },
    {
      title: "Rein 435g BM18,5 750ml",
      artNo: "35336",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012843-grid_2.jpg"
    },
    {
      title: "Rein VIP 500g BM18,5 750ml",
      artNo: "35344",
      description: "750 ml, Cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012848-grid_2.jpg"
    }
  
  

  ]


  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.artNo.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    
   <>
   <Header/>

<div className="container-fluid mt-4"  >

 
<div className="container-fluid mt-4 mb-5">
<div className="row align-items-center " style={{ marginTop: "150px" }}>
{/* Search field on the left */}
<div className="col-md-4 mb-3 mb-md-0 ">
  <label className="form-label fw-bold">Search</label>
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      placeholder="Article name or number"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button className="btn btn-outline-secondary" type="button">
      <i className="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</div>

{/* Results text aligned beside search field */}
<div className="col-md-4 offset-md-4 text-center text-md-start">
  <p className="mb-0 fw-bold">419 results with your filter setting</p>
</div>
</div>
</div>

<CatalogueNav/>
 

  <div className="row mb-3">

    

    
  <div className="col-md-12">
<div className="row g-4">
{filteredCards.map((card, index) => (
  <div className="col-12 col-md-3" key={index}>
    <div className={`card h-100 p-3 ${index === 1 ? "border-primary" : ""}`}>
      <h6
        className="fw-bold text-truncate-2"
        style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", WebkitLineClamp: 2 }}
      >
        {card.title}
      </h6>
      <div className="d-flex">
        <img
          src={card.img}
          style={{ width: "98px", height: "175px" }}
          className="img-fluid mb-3 me-3"
          alt={card.title}
        />
        <div className="d-flex flex-column justify-content-center">
          <p className="text-muted mb-1">
            <strong>Art. No. {card.artNo}</strong>
          </p>
          <p className="mb-1">{card.description}</p>
          
        </div>
      </div>
    </div>
  </div>
))}
{filteredCards.length === 0 && (
  <div className="col-12">
    <p>No results found for "{searchQuery}"</p>
  </div>
)}
</div>
</div>


    
  </div>
</div>

<Footer/>
   </>

  )
}

export default Wine