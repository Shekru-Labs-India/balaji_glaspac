import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CatalogueNav from './CatalogueNav';

const All = () => {
     
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeItem, setActiveItem] = useState('Beer');

    const cards = [

        
  {
    title: "Ale Premium Ret 285g KK2618 330ml",
    artNo: "19437",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1006476-grid_2.jpg"
  },
  {
    title: "Ale Premium RET 285g KK2618 330ml",
    artNo: "30268",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001248-grid_2.jpg"
  },
  {
    title: "A Bier 175g DK2613 330ml",
    artNo: "25681",
    description: "330 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1001855-grid_2.jpg"
  },
  {
    title: "A Bier 194g KK2613 330ml",
    artNo: "26415",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003383-grid_2.jpg"
  },
  {
    title: "Ale ET 217H 195g DK2613 330ml",
    artNo: "25695",
    description: "330 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1001866-grid_2.jpg"
  },
  {
    title: "Ale ET 217H 195g 330ml",
    artNo: "31529",
    description: "330 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1001821-grid_2.jpg"
  },
  {
    title: "Ale ET 217H 195g DK2613 330ml",
    artNo: "25620",
    description: "330 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1001822-grid_3.jpg"
  },
  {
    title: "Ale ET 217H 195g DK2613 330ml",
    artNo: "25690",
    description: "330 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1001862-grid_2.jpg"
  },
  {
    title: "Ale ET 217H 195g KK2613 330ml",
    artNo: "24366",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009600-grid_2.jpg"
  },
  {
    title: "Ale ET 217H 195g KK2613 330ml",
    artNo: "33169",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003237-grid_2.jpg"
  },
  {
    title: "Ale ET 217H 195g KK2613 330ml",
    artNo: "24370",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009588-grid_2.jpg"
  },
  {
    title: "Ale ET 219H 199g MC281G 330ml",
    artNo: "34025",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1009590-grid_2.jpg"
  },
  {
    title: "Ale ET 219H 199g MC281G 330ml",
    artNo: "27196",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001243-grid_2.jpg"
  },
  {
    title: "Ale ET 219H 199g MC281G 330ml",
    artNo: "34883",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1012507-grid_2.jpg"
  },
  {
    title: "Ale 205H 185g KK2618 250ml",
    artNo: "25109",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009869-grid_2.jpg"
  },
  {
    title: "Ale 205H 185g KK2618 250ml",
    artNo: "25107",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009868-grid_2.jpg"
  },
  {
    title: "Ale 201H 170g DK2613 330ml",
    artNo: "26138",
    description: "330 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1001779-grid_2.jpg"
  },
  {
    title: "Glass bottle 33cl Ale leicht-170g",
    artNo: "31744",
    description: "330 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1001458-grid_2.jpg"
  },
  {
    title: "Longneck Ret 290H 570g KK2917 750ml",
    artNo: "27043",
    description: "750 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001171-grid_2.jpg"
  },
  {
    title: "Longneck Ret 289H 562g KK2616 750ml",
    artNo: "35802",
    description: "750 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1013002-grid_2.jpg"
  },
  {
    title: "Longneck Ret 290H 570g RB18,5 750ml",
    artNo: "27044",
    description: "750 ml, Ring cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001172-grid_2.jpg"
  },
  {
    title: "Longneck 205g KK2618 330ml",
    artNo: "28113",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001523-grid_2.jpg"
  },
  {
    title: "Longneck 205g KK2618 330ml",
    artNo: "32160",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011167-grid_2.jpg"
  },
  {
    title: "Longneck 125g KK2613 150ml",
    artNo: "31563",
    description: "150 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010915-grid_2.jpg"
  },
  {
    title: "Longneck Ret 435g KK2613 330ml",
    artNo: "15871",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002575-grid_2.jpg"
  },
  {
    title: "Ale 264H 260g KK2613 500ml",
    artNo: "18593",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1006471-grid_2.jpg"
  },
  {
    title: "Ale 264H 260g KK2613 500ml",
    artNo: "22916",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1008806-grid_2.jpg"
  },
  {
    title: "Ale 264H 260g KK2613 500ml",
    artNo: "26075",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003279-grid_2.jpg"
  },
  {
    title: "Ale 266H 264g MC281G 500ml",
    artNo: "36604",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1013422-grid_2.jpg"
  },
  {
    title: "Silenus Ale 270g KK2613 500ml",
    artNo: "25013",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009500-grid_2.jpg"
  },
  {
    title: "Silenus Ale 270g KK2613 500ml",
    artNo: "23967",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009413-grid_2.jpg"
  },
  {
    title: "Silenus Ale 205g KK2613 330ml",
    artNo: "24120",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009499-grid_2.jpg"
  },
  {
    title: "Silenus Ale 205g KK2613 330ml",
    artNo: "23965",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009412-grid_2.jpg"
  },
  {
    title: "Standard Ale Ret KK2618 330ml",
    artNo: "26805",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001028-grid_2.jpg"
  },
  {
    title: "Gundola 225g KK2613 330ml",
    artNo: "31806",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011028-grid_2.jpg"
  },
  {
    title: "LONGNECK VA 190g KK2618 330ml",
    artNo: "36950",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1013576-grid_1.jpg"
  },
  {
    title: "Longneck LP 237H 210g KK2618 330ml",
    artNo: "32363",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011290-grid_2.jpg"
  },
  {
    title: "Longneck LP 237H 210g KK2618 330ml",
    artNo: "32364",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011291-grid_2.jpg"
  },
  {
    title: "LN Ret BNR 218H 280g KK2612 330ml",
    artNo: "20793",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1005811-grid_2.jpg"
  },
  {
    title: "LN Ret BNR 218H 280g KK2612 330ml",
    artNo: "22322",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1008636-grid_2.jpg"
  },
  {
    title: "LN Ret BNR 245H 355g KK2618 500ml",
    artNo: "17575",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1005812-grid_2.jpg"
  },
  {
    title: "Ale Ret 238H 310g KK2618 330ml",
    artNo: "30033",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1005952-grid_2.jpg"
  },
  {
    title: "Ale 233H 302g KK2613 330ml",
    artNo: "32339",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011275-grid_1.jpg"
  },
  {
    title: "Ale Ret 238H 310g KK2618 330ml",
    artNo: "33355",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1008923-grid_2.jpg"
  },
  {
    title: "Ale Ret 238H 310g KK2618 330ml",
    artNo: "31434",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009867-grid_2.jpg"
  },
  {
    title: "Ale Ret 270H 385g KK2618 500ml",
    artNo: "23630",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1005951-grid_2.jpg"
  },
  {
    title: "Ale Ret 270H 385g KK2618 500ml",
    artNo: "22870",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1008922-grid_2.jpg"
  },
  {
    title: "Pivo nep. 224H 186g KK2613 330ml",
    artNo: "28114",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001528-grid_2.jpg"
  },
  {
    title: "Pivo nep. 224H 186g KK2613 330ml",
    artNo: "27563",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001275-grid_2.jpg"
  },
  {
    title: "Pivo nep. 224H 186g KK2613 330ml",
    artNo: "30695",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001276-grid_2.jpg"
  },
  {
    title: "Spec. Christmas 166g KK2613 250ml",
    artNo: "30193",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003277-grid_2.jpg"
  },
  {
    title: "Ale Ret 264H 351g KK2612 500ml",
    artNo: "25144",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009039-grid_2.jpg"
  },
  {
    title: "Ale 196H 164g KK2613 250ml",
    artNo: "31270",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001910-grid_2.jpg"
  },
  {
    title: "Ale 195H 167g MC281G 250ml",
    artNo: "30184",
    description: "250 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001704-grid_2.jpg"
  },
  {
    title: "Ale 274H 320g KK2613 660ml",
    artNo: "24058",
    description: "660 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009464-grid_2.jpg"
  },
  {
    title: "Longneck 237H 210g KK2618 330ml",
    artNo: "27552",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001267-grid_2.jpg"
  },
  {
    title: "Glass bottle Beer LN 330 ml",
    artNo: "30419",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002717-grid_2.jpg"
  },
  {
    title: "bottle Beer LM 330 ml",
    artNo: "32013",
    description: "330 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1011119-grid_2.jpg"
  },
  {
    title: "bottle Beer LM 750 ml",
    artNo: "32014",
    description: "750 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1011120-grid_2.jpg"
  },
  {
    title: "CH III 173g DK2613 330ml",
    artNo: "25761",
    description: "330 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1001939-grid_2.jpg"
  },
  {
    title: "Gambrinus Ret 255g KK2618 330ml",
    artNo: "31470",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010861-grid_2.jpg"
  },
  {
    title: "Obus Bier 265g DK2613 500ml",
    artNo: "33363",
    description: "500 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1011755-grid_2.jpg"
  },
  {
    title: "Eva light Bier 130g DK2613 250ml",
    artNo: "31369",
    description: "250 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1010811-grid_2.jpg"
  },
  {
    title: "Euro Ret 345g KK2618 500ml",
    artNo: "16931",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002016-grid_2.jpg"
  },
  {
    title: "EURO RET 345g KK2618 500ml",
    artNo: "30061",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001921-grid_2.jpg"
  },
  {
    title: "Euro Ret 345g KK2618 500ml",
    artNo: "14097",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003293-grid_2.jpg"
  },
  {
    title: "Euro Ret 335g MC287R 500ml",
    artNo: "26700",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001007-grid_2.jpg"
  },
  {
    title: "Gambrinus 180g KK2618 330ml",
    artNo: "27840",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001415-grid_2.jpg"
  },
  {
    title: "Gambrinus AW 225g KK2618 330ml",
    artNo: "30670",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003001-grid_2.jpg"
  },
  {
    title: "Euro pivo 310g KK2618 500ml",
    artNo: "31167",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010729-grid_2.jpg"
  },
  {
    title: "Bottle Evro 2 500 ml",
    artNo: "30545",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002129-grid_2.jpg"
  },
  {
    title: "Glass bottle Baltijos Alus 500 ml",
    artNo: "31053",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001560-grid_2.jpg"
  },
  {
    title: "Tulip light 500ml",
    artNo: "34120",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012161-grid_2.jpg"
  },
  {
    title: "bottle NRW mineral light KK 500 ml",
    artNo: "31782",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011017-grid_2.jpg"
  },
  {
    title: "Tradition 540g LM3131 750ml",
    artNo: "34165",
    description: "750 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1012191-grid_2.jpg"
  },
  {
    title: "Tradition 520g SK17,6 750ml",
    artNo: "34342",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1012280-grid_1.jpg"
  },
  {
    title: "Birra BG - B - 56 300g sk17,6 330ml",
    artNo: "28471",
    description: "330 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010241-grid_2.jpg"
  },
  {
    title: "Birra BG - B - 80 600g SK17,6 750ml",
    artNo: "28430",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010213-grid_2.jpg"
  },
  {
    title: "Bügelflasche Ret 485g LM3231 500ml",
    artNo: "19726",
    description: "500 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1007193-grid_2.jpg"
  },
  {
    title: "Bügelbier Ret 320g LM3232 330ml",
    artNo: "31309",
    description: "330 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1010785-grid_2.jpg"
  },
  {
    title: "Vichy Ret 320g LM 330ml",
    artNo: "31662",
    description: "330 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1010956-grid_2.jpg"
  },
  {
    title: "Vichy Ret 375g LM 500ml",
    artNo: "31663",
    description: "500 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1010957-grid_2.jpg"
  },
  {
    title: "Bügelbier Ret 390g LM3232 500ml",
    artNo: "26076",
    description: "500 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1003631-grid_3.jpg"
  },
  {
    title: "Bottle Beer LM 500 ml",
    artNo: "26821",
    description: "500 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1001034-grid_4.jpg"
  },
  {
    title: "Bottle Litva 2 1000 ml",
    artNo: "26935",
    description: "1000 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1001106-grid_2.jpg"
  },
  {
    title: "Glas bottle Litva 2 1000ml",
    artNo: "32369",
    description: "1000 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1011296-grid_2.jpg"
  },
  {
    title: "Bottle Litva 2 1000 ml",
    artNo: "26812",
    description: "1000 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1001029-grid_2.jpg"
  },
  {
    title: "SBV Bier Ret 500g KK2618 580ml",
    artNo: "26197",
    description: "580 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003360-grid_2.jpg"
  },
  {
    title: "Vichy 175g KK2613 250ml",
    artNo: "31658",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010954-grid_2.jpg"
  },
  {
    title: "Vichy 220g KK2618 330ml",
    artNo: "31659",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010955-grid_2.jpg"
  },
  {
    title: "NRW Ret 380g KK2618 500ml",
    artNo: "13691",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002066-grid_2.jpg"
  },
  {
    title: "Vichy Ret 320g KK2618 330ml",
    artNo: "12398",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002104-grid_2.jpg"
  },
  {
    title: "Vichy light 260g KK2613 500ml",
    artNo: "30525",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002115-grid_3.jpg"
  },
  {
    title: "Deva 155g PT51MP 250ml",
    artNo: "23871",
    description: "250 ml, Press Twist",
    img: "https://katalog.vetropack.com/static_cache/img/1009370-grid_2.jpg"
  },
  {
    title: "Sirius LP 95g PT51MP 145 ml",
    artNo: "30996",
    description: "145 ml, Press Twist",
    img: "https://katalog.vetropack.com/static_cache/img/1002500-grid_2.jpg"
  },
  {
    title: "Sirius LP 100g TO53RH 150ml",
    artNo: "34666",
    description: "150 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002501-grid_2.jpg"
  },
  {
    title: "Sirius LP 118g PT51MP 210 ml",
    artNo: "30281",
    description: "210 ml, Press Twist",
    img: "https://katalog.vetropack.com/static_cache/img/1002702-grid_2.jpg"
  },
  {
    title: "Sirius LP 122g TO53RH 213 ml",
    artNo: "30280",
    description: "213 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002701-grid_2.jpg"
  },
  {
    title: "Deva 120g TO66RH 212ml",
    artNo: "20584",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007545-grid_2.jpg"
  },
  {
    title: "CH Joghurtglas 225g SM68 535ml",
    artNo: "32105",
    description: "535 ml, Special finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011139-grid_2.jpg"
  },
  {
    title: "CH Joghurtglas 115g SM55 174ml",
    artNo: "17921",
    description: "174 ml, Special finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001613-grid_2.jpg"
  },
  {
    title: "Alva 135g TO53RH 215ml",
    artNo: "24175",
    description: "215 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009527-grid_2.jpg"
  },
  {
    title: "Amfora 105g TO53RH 145ml",
    artNo: "26540",
    description: "145 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003476-grid_2.jpg"
  },
  {
    title: "bottle III-48-500 ml",
    artNo: "26973",
    description: "500 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001133-grid_2.jpg"
  },
  {
    title: "Jar III-63-350 ml",
    artNo: "26707",
    description: "350 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003577-grid_2.jpg"
  },
  {
    title: "Glass bottle III-48-800",
    artNo: "30224",
    description: "800 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002018-grid_2.jpg"
  },
  {
    title: "Gewürzglas 106g SM38 100ml",
    artNo: "17732",
    description: "100 ml, Special finish",
    img: "https://katalog.vetropack.com/static_cache/img/1005653-grid_2.jpg"
  },
  {
    title: "Lunch 240g TO82RH 440ml",
    artNo: "24410",
    description: "440 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009612-grid_2.jpg"
  },
  {
    title: "Amfora 280g TO82RH 520ml",
    artNo: "18458",
    description: "520 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1006356-grid_2.jpg"
  },
  {
    title: "Faceta 158g TO82RH 210ml",
    artNo: "25927",
    description: "210 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003080-grid_2.jpg"
  },
  {
    title: "Staklenka Terrine 198g TO89RH 370ml",
    artNo: "27065",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003369-grid_3.jpg"
  },
  {
    title: "JC 140g TO82RH 200ml",
    artNo: "30959",
    description: "200 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002308-grid_2.jpg"
  },
  {
    title: "Universal glas 132g TO63RH 228ml",
    artNo: "30370",
    description: "228 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002328-grid_2.jpg"
  },
  {
    title: "Gurken Tönnchen 257g TO82RH 580ml",
    artNo: "30936",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1005303-grid_2.jpg"
  },
  {
    title: "Gurkenglas rund 203g TO82RH 425ml",
    artNo: "23790",
    description: "425 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001108-grid_2.jpg"
  },
  {
    title: "Gurken Tönnchen 430g TO100 1062ml",
    artNo: "25782",
    description: "1062 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001943-grid_2.jpg"
  },
  {
    title: "Vorratsglas 440g TO100 1000ml",
    artNo: "25252",
    description: "1062 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009316-grid_2.jpg"
  },
  {
    title: "Konservenglas 288g TO82RH 720ml",
    artNo: "31055",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001537-grid_2.jpg"
  },
  {
    title: "Konservenglas 177g TO66RH 370ml",
    artNo: "31210",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010746-grid_2.jpg"
  },
  {
    title: "Sturzglas 99g TO66RH 125ml",
    artNo: "33921",
    description: "125 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012064-grid_3.jpg"
  },
  {
    title: "Sturzglas 125g TO66RH 165ml",
    artNo: "33834",
    description: "165 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012019-grid_3.jpg"
  },
  {
    title: "Sturzglas 150g TO66RH 212ml",
    artNo: "32224",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011213-grid_3.jpg"
  },
  {
    title: "Sturzglas 175g TO66RH 277ml",
    artNo: "32225",
    description: "277 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011214-grid_3.jpg"
  },
  {
    title: "Sturzglas 222g TO70RH 340ml",
    artNo: "33920",
    description: "340 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012063-grid_3.jpg"
  },
  {
    title: "Facettenglas 290g TO82RH 720ml",
    artNo: "24275",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003154-grid_2.jpg"
  },
  {
    title: "Facettenglas 640g TO89RH 1700ml",
    artNo: "24277",
    description: "1700 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009555-grid_2.jpg"
  },
  {
    title: "Konservenglas 1380g TO110 4250ml",
    artNo: "25743",
    description: "4250 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001897-grid_2.jpg"
  },
  {
    title: "Konservenglas 1050g TO100 3400ml",
    artNo: "31642",
    description: "3400 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009552-grid_2.jpg"
  },
  {
    title: "Sloik 115g TO53RH 190ml",
    artNo: "19757",
    description: "190 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007218-grid_2.jpg"
  },
  {
    title: "Adriatic 210g TO82RH 370ml",
    artNo: "28023",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002159-grid_2.jpg"
  },
  {
    title: "Christel 300g TO82RH 720ml",
    artNo: "33470",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1008061-grid_2.jpg"
  },
  {
    title: "Orion 1040g WR103 3680ml",
    artNo: "12148",
    description: "3680 ml, Beaded edge finishes",
    img: "https://katalog.vetropack.com/static_cache/img/1002125-grid_2.jpg"
  },
  {
    title: "Faceta Extra 325g TO66RH 720ml",
    artNo: "27982",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009698-grid_2.jpg"
  },
  {
    title: "Stako OPL 182g TO66RH 280ml",
    artNo: "36036",
    description: "280 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003346-grid_2.jpg"
  },
  {
    title: "Orion 1100g TO100 3720ml",
    artNo: "21783",
    description: "3720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002126-grid_2.jpg"
  },
  {
    title: "Faceta 270g TO82RH 580ml",
    artNo: "23636",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009296-grid_2.jpg"
  },
  {
    title: "Faceta 305g TO82RH 720ml",
    artNo: "23177",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009084-grid_2.jpg"
  },
  {
    title: "Sloik 385g TO82RH 900ml",
    artNo: "18466",
    description: "900 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1006363-grid_2.jpg"
  },
  {
    title: "Subra 210g WR68 370ml",
    artNo: "12131",
    description: "370 ml, Beaded edge finishes",
    img: "https://katalog.vetropack.com/static_cache/img/1002116-grid_2.jpg"
  },
  {
    title: "Subra 215g TO66RH 375ml",
    artNo: "12134",
    description: "375 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002117-grid_2.jpg"
  },
  {
    title: "Standex VA 220g TO63RH 370ml",
    artNo: "25699",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001871-grid_2.jpg"
  },
  {
    title: "Moravia 265g TO82RH 580ml",
    artNo: "28013",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1005301-grid_2.jpg"
  },
  {
    title: "MORAVIA VA 190 g TO66 377 ml",
    artNo: "32024",
    description: "377 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011122-grid_2.jpg"
  },
  {
    title: "Franko Deep 310g TO82DH 720ml",
    artNo: "31460",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010857-grid_2.jpg"
  },
  {
    title: "Staklenka visoka 190g TO66RH 370ml",
    artNo: "22720",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1004013-grid_2.jpg"
  },
  {
    title: "Staklenka niska 200g TO82RH 370ml",
    artNo: "25157",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1008019-grid_2.jpg"
  },
  {
    title: "Staklenka 290g TO82RH 720ml",
    artNo: "26126",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003308-grid_2.jpg"
  },
  {
    title: "Staklenka 335g TO82RH 750ml",
    artNo: "28192",
    description: "750 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001540-grid_2.jpg"
  },
  {
    title: "Staklenka 620g TO100 1500ml",
    artNo: "25625",
    description: "1500 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001825-grid_2.jpg"
  },
  {
    title: "Staklenka 700g TO100 2000ml",
    artNo: "24197",
    description: "2000 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009533-grid_2.jpg"
  },
  {
    title: "Staklenka 800g TO100 2500ml",
    artNo: "25788",
    description: "2500 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003870-grid_2.jpg"
  },
  {
    title: "Staklenka 430g TO82RH 1062ml",
    artNo: "20735",
    description: "1062 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1004049-grid_2.jpg"
  },
  {
    title: "Amfora 260g TO82RH 580ml",
    artNo: "30434",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002092-grid_2.jpg"
  },
  {
    title: "Elegant 130g TO58RH 212ml",
    artNo: "31936",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011090-grid_2.jpg"
  },
  {
    title: "ELEGANT 170g TO66RH 314ml",
    artNo: "33641",
    description: "314 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011921-grid_2.jpg"
  },
  {
    title: "ELEGANT 200g TO66DH 314ml",
    artNo: "33704",
    description: "314 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011946-grid_2.jpg"
  },
  {
    title: "ELEGANT 180g TO66RH 370ml",
    artNo: "31356",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010803-grid_2.jpg"
  },
  {
    title: "ELEGANT 262g TO82RH 580ml",
    artNo: "33642",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011922-grid_2.jpg"
  },
  {
    title: "Elegant 320g TO82RH 720ml",
    artNo: "32236",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1013133-grid_2.jpg"
  },
  {
    title: "Staklenka 160g TO82RH 300ml",
    artNo: "34143",
    description: "300 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012176-grid_2.jpg"
  },
  {
    title: "Venecija 175g TO66RH 370ml",
    artNo: "24582",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1006772-grid_2.jpg"
  },
  {
    title: "Venecija 300g TO82RH 720ml Glass jar",
    artNo: "27537",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001258-grid_2.jpg"
  },
  {
    title: "Šampinjoni 190g TO63RH 314ml",
    artNo: "14440",
    description: "314 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1004099-grid_2.jpg"
  },
  {
    title: "Šampinjoni 335g TO70RH 580ml",
    artNo: "24534",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1004105-grid_2.jpg"
  },
  {
    title: "Amfora 135g TO63RH 212ml",
    artNo: "25196",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009896-grid_2.jpg"
  },
  {
    title: "Venecija 190g TO63RH 314ml",
    artNo: "16532",
    description: "314 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1005164-grid_2.jpg"
  },
  {
    title: "Venecija 125g TO58RH 212ml",
    artNo: "27630",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001315-grid_2.jpg"
  },
  {
    title: "Venecija 650g TO100 1700ml",
    artNo: "21501",
    description: "1700 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1008192-grid_2.jpg"
  },
  {
    title: "Venecija 800g TO100 2650ml",
    artNo: "21502",
    description: "2650 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1008193-grid_2.jpg"
  },
  {
    title: "Staklenka 360g TO82RH 850ml",
    artNo: "23900",
    description: "850 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009382-grid_2.jpg"
  },
  {
    title: "Staklenka 280g TO82RH 720ml",
    artNo: "24176",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009528-grid_2.jpg"
  },
  {
    title: "Staklenka S 180g TO66RH 370ml",
    artNo: "26539",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003475-grid_2.jpg"
  },
  {
    title: "Andre 120g TO63RH 212ml",
    artNo: "20583",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007544-grid_2.jpg"
  },
  {
    title: "Andre 120g TO63RH 212ml",
    artNo: "33737",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011969-grid_2.jpg"
  },
  {
    title: "Faceta 130g TO53RH 212ml",
    artNo: "20587",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007550-grid_2.jpg"
  },
  {
    title: "Faceta 180g TO66RH 370ml",
    artNo: "21099",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007888-grid_2.jpg"
  },
  {
    title: "Legina 90g TO53RH 130ml",
    artNo: "19709",
    description: "130 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007562-grid_2.jpg"
  },
  {
    title: "Simone 145g TO63RH 212ml",
    artNo: "24789",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007572-grid_2.jpg"
  },
  {
    title: "Vesna 150g TO63RH 314ml",
    artNo: "23808",
    description: "314 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007574-grid_2.jpg"
  },
  {
    title: "Helos 250g TO82RH 580ml",
    artNo: "20598",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007559-grid_2.jpg"
  },
  {
    title: "Faceta Extra 185g TO66RH 370ml",
    artNo: "25269",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1008359-grid_2.jpg"
  },
  {
    title: "Odin 275g TO70RH 580ml",
    artNo: "24313",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009567-grid_2.jpg"
  },
  {
    title: "Franko 290g WR83 710ml",
    artNo: "22779",
    description: "710 ml, Beaded edge finishes",
    img: "https://katalog.vetropack.com/static_cache/img/1008887-grid_2.jpg"
  },
  {
    title: "Franko 290g TO82RH 720ml",
    artNo: "22799",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007555-grid_2.jpg"
  },
  {
    title: "Glass jar III-82-450",
    artNo: "27984",
    description: "450 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001468-grid_2.jpg"
  },
  {
    title: "JC 230g TO82RH 460ml",
    artNo: "33840",
    description: "460 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012020-grid_2.jpg"
  },
  {
    title: "Vaso Miele Alvea2 325g TO82RH 780ml",
    artNo: "31878",
    description: "785 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011069-grid_2.jpg"
  },
  {
    title: "Vaso CEE 140g TO63 212ml",
    artNo: "33364",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011184-grid_2.jpg"
  },
  {
    title: "Vaso colonna 275g TO70 580ml",
    artNo: "28969",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010467-grid_3.jpg"
  },
  {
    title: "Vaso fresco 245g TO82 580ml",
    artNo: "28929",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010473-grid_2.jpg"
  },
  {
    title: "Vaso CEE 83g TO53 106ml",
    artNo: "28829",
    description: "100 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010421-grid_2.jpg"
  },
  {
    title: "Vaso CEE 113g TO53 156ml",
    artNo: "28836",
    description: "156 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010422-grid_2.jpg"
  },
  {
    title: "Vaso Colonna Et 117g TO53RH 212ml",
    artNo: "30438",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002070-grid_3.jpg"
  },
  {
    title: "Vaso America 173g TO70 314ml",
    artNo: "28683",
    description: "313 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010357-grid_2.jpg"
  },
  {
    title: "Vaso Colonna 117g TO53 212ml",
    artNo: "28531",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010266-grid_2.jpg"
  },
  {
    title: "Vaso CEE Label Prot. 92g TO48 106ml",
    artNo: "28721",
    description: "106 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010369-grid_2.jpg"
  },
  {
    title: "Vaso Natura c/man. 210g TO63 314ml",
    artNo: "28624",
    description: "314 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010324-grid_2.jpg"
  },
  {
    title: "JC CEE LP TO63 155g 314ml",
    artNo: "35899",
    description: "314 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001788-grid_4.jpg"
  },
  {
    title: "Jar Std 180g TO63RH 370ml",
    artNo: "24220",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009543-grid_2.jpg"
  },
  {
    title: "Vaso liscio 170g TO70 390ml",
    artNo: "36299",
    description: "390 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1013282-grid_3.jpg"
  },
  {
    title: "Borcan 380g TO82RH 1030ml",
    artNo: "35349",
    description: "1030 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012852-grid_2.jpg"
  },
  {
    title: "Borcan 305g TO82RH 720ml",
    artNo: "35354",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012853-grid_2.jpg"
  },
  {
    title: "Faseta 190g TO66RH 370ml",
    artNo: "35365",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012857-grid_2.jpg"
  },
  {
    title: "JC Classic 290g TO82 720ml*",
    artNo: "34527",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012859-grid_2.jpg"
  },
  {
    title: "Borcan 180g TO63RH 314ml",
    artNo: "35392",
    description: "314 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012868-grid_2.jpg"
  },
  {
    title: "Borcan 180g TO63RH 370ml",
    artNo: "35403",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012879-grid_2.jpg"
  },
  {
    title: "Sugoglas 210g TO63RH 450ml",
    artNo: "24992",
    description: "450 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007797-grid_2.jpg"
  },
  {
    title: "Gourmetglas 220g TO63RH 446ml",
    artNo: "31887",
    description: "446 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1008713-grid_2.jpg"
  },
  {
    title: "Sugoglas 125g TO53RH 215ml",
    artNo: "24154",
    description: "215 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009520-grid_2.jpg"
  },
  {
    title: "Lucida Lunt 185g TO43RH 300ml",
    artNo: "23075",
    description: "300 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009019-grid_2.jpg"
  },
  {
    title: "Lucida Lunt 285g TO43RH 500ml",
    artNo: "25207",
    description: "500 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009901-grid_2.jpg"
  },
  {
    title: "Poma 160g TO82RH 265ml",
    artNo: "27183",
    description: "265 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001238-grid_2.jpg"
  },
  {
    title: "Neco 250g TO66RH 500ml",
    artNo: "24509",
    description: "500 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003673-grid_2.jpg"
  },
  {
    title: "Vega 115g TO53RH 212ml",
    artNo: "32647",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011420-grid_2.jpg"
  },
  {
    title: "Mayo 160g TO58RH 269ml",
    artNo: "22038",
    description: "269 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003567-grid_2.jpg"
  },
  {
    title: "Elegant 115g TO58DH 156ml",
    artNo: "31342",
    description: "156 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010797-grid_2.jpg"
  },
  {
    title: "Vajol 170g TO66RH 315ml",
    artNo: "23615",
    description: "315 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007577-grid_2.jpg"
  },
  {
    title: "Boneco 145g TO58RH 250ml",
    artNo: "22041",
    description: "250 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002163-grid_2.jpg"
  },
  {
    title: "JC Glas 65g TO43 65ml",
    artNo: "31344",
    description: "65 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010798-grid_2.jpg"
  },
  {
    title: "Honigglas 210g TO82RH 410ml",
    artNo: "34376",
    description: "410 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012291-grid_2.jpg"
  },
  {
    title: "Sechseckglas 195g TO63RH 278ml",
    artNo: "21647",
    description: "278 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1004793-grid_2.jpg"
  },
  {
    title: "Honigglas 310g TO82RH 770ml",
    artNo: "23701",
    description: "770 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009319-grid_2.jpg"
  },
  {
    title: "IB-Honig F0,25kg 145g TO70RH 212ml",
    artNo: "26574",
    description: "212 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003509-grid_2.jpg"
  },
  {
    title: "IB-Honig F 0,5kg 220g TO82RH 410ml",
    artNo: "21774",
    description: "410 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1008347-grid_2.jpg"
  },
  {
    title: "IB-Honig F1,0kg 330g TO82RH 770ml",
    artNo: "21421",
    description: "770 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003051-grid_2.jpg"
  },
  {
    title: "Sechseckglas 110g TO48RA 116ml",
    artNo: "23201",
    description: "116 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1008368-grid_2.jpg"
  },
  {
    title: "Sechseckglas 165g TO58RH 195ml",
    artNo: "24952",
    description: "195 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009825-grid_2.jpg"
  },
  {
    title: "Europaglas 180g TO70RH 390ml",
    artNo: "17707",
    description: "390 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1005894-grid_2.jpg"
  },
  {
    title: "Fruta 210g TO66RH 375ml",
    artNo: "30551",
    description: "375 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002172-grid_2.jpg"
  },
  {
    title: "Atlas 230g TO66RH 375ml",
    artNo: "16267",
    description: "375 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1005002-grid_2.jpg"
  },
  {
    title: "Atria 125g TO58DH 140ml",
    artNo: "30661",
    description: "140 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003082-grid_2.jpg"
  },
  {
    title: "Fruta Deep 140g TO58DH 226ml",
    artNo: "32158",
    description: "226 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011165-grid_2.jpg"
  },
  {
    title: "Interchamp 185g TO63RH 315ml",
    artNo: "25411",
    description: "315 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1008820-grid_2.jpg"
  },
  {
    title: "Sagitta 200g TO66DH 315ml",
    artNo: "30493",
    description: "315 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002156-grid_2.jpg"
  },
  {
    title: "Stako OPL 135g TO66RH 210ml",
    artNo: "31041",
    description: "210 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1004021-grid_2.jpg"
  },
  {
    title: "Melbrosin 125g TO66RH 210ml",
    artNo: "22715",
    description: "210 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003872-grid_2.jpg"
  },
  {
    title: "Staklenka 210g TO66DH 390ml",
    artNo: "34945",
    description: "390 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012563-grid_2.jpg"
  },
  {
    title: "Staklenka za kreme205g TO66RH 370ml",
    artNo: "27536",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1004300-grid_2.jpg"
  },
  {
    title: "Staklenka za kreme222g TO70RH 450ml",
    artNo: "25581",
    description: "450 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001793-grid_2.jpg"
  },
  {
    title: "Staklenka za kreme355g TO82RH 720ml",
    artNo: "23861",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009198-grid_2.jpg"
  },
  {
    title: "Elegant 210g TO66DH 370ml",
    artNo: "31784",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011019-grid_2.jpg"
  },
  {
    title: "ELEGANT 316g TO82DH 580ml",
    artNo: "33647",
    description: "580 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011923-grid_2.jpg"
  },
  {
    title: "Elegant 364g TO82DH 720ml",
    artNo: "32240",
    description: "720 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011221-grid_2.jpg"
  },
  {
    title: "Staklenka 360g TO82RH 850ml",
    artNo: "33291",
    description: "850 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011722-grid_2.jpg"
  },
  {
    title: "Staklenka za džem 200g TO66DH 390ml",
    artNo: "24384",
    description: "390 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009594-grid_2.jpg"
  },
  {
    title: "JC Holland Glass 165g TO63RH 290ml",
    artNo: "31433",
    description: "290 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1010839-grid_2.jpg"
  },
  {
    title: "Haute 210g TO63RH 370ml",
    artNo: "20596",
    description: "370 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1007558-grid_2.jpg"
  },
  {
    title: "Vaso miele Alvea 170g TO70 390ml",
    artNo: "36324",
    description: "390 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1013299-grid_2.jpg"
  },
  {
    title: "Essigflasche 359g IACT 700ml",
    artNo: "11347",
    description: "700 ml, Special finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001679-grid_2.jpg"
  },
  {
    title: "Ölflasche 260g MC281G 500ml",
    artNo: "13301",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1002697-grid_3.jpg"
  },
  {
    title: "Marasca 384g PP3115 500ml",
    artNo: "26195",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003358-grid_2.jpg"
  },
  {
    title: "Marasca 385g PP3115 500ml",
    artNo: "31622",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009768-grid_2.jpg"
  },
  {
    title: "Marasca 384g PP3115 500ml",
    artNo: "26100",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003296-grid_2.jpg"
  },
  {
    title: "L St Kürbiskernöl 213g PP3144 250 ml",
    artNo: "34007",
    description: "250 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012106-grid_2.jpg"
  },
  {
    title: "L St.Kürbiskernöl 341g PP3144 500ml",
    artNo: "34028",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012112-grid_2.jpg"
  },
  {
    title: "Essig und Oel 445g SM29 1000ml",
    artNo: "23129",
    description: "1000 ml, Special finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009056-grid_2.jpg"
  },
  {
    title: "Oliva 265g PP31 250ml",
    artNo: "28255",
    description: "250 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001589-grid_2.jpg"
  },
  {
    title: "Olio Square 520g PP3515 1000ml",
    artNo: "31623",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003036-grid_2.jpg"
  },
  {
    title: "Staklenka 210g TO82RH 390ml",
    artNo: "34441",
    description: "390 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012318-grid_2.jpg"
  },
  {
    title: "Mediteran 529g PP3115 500ml",
    artNo: "14476",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1004135-grid_2.jpg"
  },
  {
    title: "Maslinovo ulje 440g PP3515 1000ml",
    artNo: "25692",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001864-grid_2.jpg"
  },
  {
    title: "Oliva 265g PP3115 250ml",
    artNo: "24417",
    description: "250 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009617-grid_2.jpg"
  },
  {
    title: "Oliva 265g PP3115 250ml",
    artNo: "23410",
    description: "250 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1004593-grid_2.jpg"
  },
  {
    title: "Oliva 400g PP3115 500ml",
    artNo: "15394",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1004592-grid_2.jpg"
  },
  {
    title: "Oliva 400g PP3115 500ml",
    artNo: "25514",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009907-grid_2.jpg"
  },
  {
    title: "Oliva 400g PP31 500ml",
    artNo: "31549",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1005772-grid_2.jpg"
  },
  {
    title: "Boca za ulje 331g PP3115 500ml",
    artNo: "24612",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009690-grid_2.jpg"
  },
  {
    title: "Boca za ulje 436g PP3115 750ml",
    artNo: "24613",
    description: "750 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009691-grid_2.jpg"
  },
  {
    title: "Boca za ulje 524g PP3115 1000ml",
    artNo: "24614",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009692-grid_2.jpg"
  },
  {
    title: "Aceto Balsamico 320g PP3115 500ml",
    artNo: "24955",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009782-grid_2.jpg"
  },
  {
    title: "Aceto Balsamico 320g PP3115 500ml",
    artNo: "25201",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009898-grid_2.jpg"
  },
  {
    title: "Bordolese Aceto 320g BM17,5 500ml",
    artNo: "27557",
    description: "500 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001271-grid_2.jpg"
  },
  {
    title: "Bordolese Aceto 320g PP3115 500ml",
    artNo: "25367",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009952-grid_2.jpg"
  },
  {
    title: "BORDOLESE ACETO 320g PP3115 500ml",
    artNo: "28174",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001575-grid_2.jpg"
  },
  {
    title: "Bordolese Aceto 320g PP3115 500ml",
    artNo: "25366",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009951-grid_2.jpg"
  },
  {
    title: "Olio Far 575g LM3531 1000ml",
    artNo: "28905",
    description: "1000 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1010460-grid_2.jpg"
  },
  {
    title: "Bott. Olio 575g LM3531 1000ml",
    artNo: "30738",
    description: "1000 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1002145-grid_2.jpg"
  },
  {
    title: "Costolata 570g LM3531 1000ml",
    artNo: "28542",
    description: "1000 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1010275-grid_2.jpg"
  },
  {
    title: "Costolata trattata400g LM3531 500ml",
    artNo: "28470",
    description: "500 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1010240-grid_2.jpg"
  },
  {
    title: "Bott. Olio 400gr LM3531 500ml",
    artNo: "28537",
    description: "500 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1010271-grid_2.jpg"
  },
  {
    title: "Alma VAE 650g PP3516 1000ml",
    artNo: "28843",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010426-grid_2.jpg"
  },
  {
    title: "Cilindrica55 550g PP3138 750ml",
    artNo: "28780",
    description: "750 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010398-grid_3.jpg"
  },
  {
    title: "Alma 450g PP3138 500ml",
    artNo: "28652",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010336-grid_3.jpg"
  },
  {
    title: "Gallone 550g PP3115 1000ml",
    artNo: "30625",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1004960-grid_2.jpg"
  },
  {
    title: "Gallone 550g PP3115 1000ml",
    artNo: "28518",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010261-grid_2.jpg"
  },
  {
    title: "Costolata 500g LM3531 750ml",
    artNo: "30442",
    description: "750 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1002071-grid_3.jpg"
  },
  {
    title: "Dorica 400g PP3138 500ml",
    artNo: "28840",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010424-grid_2.jpg"
  },
  {
    title: "Dorica 380g PP3100 500ml",
    artNo: "35144",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012708-grid_2.jpg"
  },
  {
    title: "Dorica 380g PP3100 500ml",
    artNo: "35143",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012707-grid_2.jpg"
  },
  {
    title: "Maraska 240g PP3115 250ml",
    artNo: "35343",
    description: "250 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012847-grid_2.jpg"
  },
  {
    title: "Maraska 390g PP3115 500ml",
    artNo: "35338",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012844-grid_2.jpg"
  },
  {
    title: "Maraska 460g PP3115 750ml",
    artNo: "35342",
    description: "750 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012846-grid_2.jpg"
  },
  {
    title: "Maraska 460g PP3115 750ml",
    artNo: "35339",
    description: "750 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012845-grid_2.jpg"
  },
  {
    title: "Süssmost 540g LM3232 900ml",
    artNo: "31915",
    description: "900 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1011084-grid_2.jpg"
  },
  {
    title: "Bordeaux Fruchts.440g MC281G 1000ml",
    artNo: "30342",
    description: "1000 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1002053-grid_2.jpg"
  },
  {
    title: "Bordeaux Fruchtsaft 375g 750ml",
    artNo: "33819",
    description: "750 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1012014-grid_2.jpg"
  },
  {
    title: "Bordeaux Fruchtsaft 375g 750ml",
    artNo: "33818",
    description: "750 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1012013-grid_2.jpg"
  },
  {
    title: "Fruchtsaft Pinta 400g 500ml",
    artNo: "33966",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1012091-grid_2.jpg"
  },
  {
    title: "Bord. Fruchts.Ret550g MC281G 1000ml",
    artNo: "13775",
    description: "1000 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1003119-grid_2.jpg"
  },
  {
    title: "Sirup 400g MC31,5 700ml",
    artNo: "27064",
    description: "700 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001177-grid_2.jpg"
  },
  {
    title: "Dječji sok 90g SM26 125ml",
    artNo: "30613",
    description: "125 ml, Special finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009328-grid_2.jpg"
  },
  {
    title: "Sirupflasche 365g MC281G 1000ml",
    artNo: "25866",
    description: "1000 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1002221-grid_2.jpg"
  },
  {
    title: "Vichy Fruchtsaft 390g MC281G 750ml",
    artNo: "20147",
    description: "750 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1007470-grid_2.jpg"
  },
  {
    title: "Bord. Fruchts. Ret 230g KK26 330ml",
    artNo: "13772",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003116-grid_2.jpg"
  },
  {
    title: "Bord. Fruchts. Ret 300g MC281G 500ml",
    artNo: "23799",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1005092-grid_2.jpg"
  },
  {
    title: "L Fruchtsaft 160g TO38RA 250ml",
    artNo: "32580",
    description: "250 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1011389-grid_2.jpg"
  },
  {
    title: "Juice Fruchtsaft 160g TO53RH 250ml",
    artNo: "18216",
    description: "250 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003146-grid_2.jpg"
  },
  {
    title: "Juice Fruchtsaft 275g TO53RH 500ml",
    artNo: "18217",
    description: "500 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003016-grid_2.jpg"
  },
  {
    title: "Juice Fruchtsaft 400g TO53RH 1000ml",
    artNo: "18232",
    description: "1000 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003018-grid_2.jpg"
  },
  {
    title: "Gourmet Fruchts. 128g TO38RA 200ml",
    artNo: "32702",
    description: "200 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003302-grid_2.jpg"
  },
  {
    title: "Gourmet Fruchts. 128g TO38RA 200ml",
    artNo: "32703",
    description: "200 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1005898-grid_2.jpg"
  },
  {
    title: "Gourmet Fruchts. 128g TO38RA 200ml",
    artNo: "20898",
    description: "200 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1004974-grid_2.jpg"
  },
  {
    title: "Sok 330g TO43RH 750ml",
    artNo: "26050",
    description: "750 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1006352-grid_2.jpg"
  },
  {
    title: "Fruct 180g TO43RH 300ml",
    artNo: "25312",
    description: "300 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009930-grid_2.jpg"
  },
  {
    title: "Fruct 330g TO43RH 700ml",
    artNo: "25373",
    description: "700 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001001-grid_2.jpg"
  },
  {
    title: "Fruct 420g TO43RH 1000ml",
    artNo: "25375",
    description: "1000 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001002-grid_2.jpg"
  },
  {
    title: "Soczek 160g TO43RH 330ml",
    artNo: "28017",
    description: "330 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001480-grid_2.jpg"
  },
  {
    title: "Juice Jumbo 440g TO53RH 1000ml",
    artNo: "28039",
    description: "1000 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1001503-grid_2.jpg"
  },
  {
    title: "Juice 135g TO43RH 200ml",
    artNo: "31078",
    description: "200 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1005347-grid_2.jpg"
  },
  {
    title: "Juice 135g TO43RH 200ml",
    artNo: "23683",
    description: "200 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1004297-grid_2.jpg"
  },
  {
    title: "Juice Premium 389g TO43RH 750ml",
    artNo: "26433",
    description: "750 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1003398-grid_2.jpg"
  },
  {
    title: "Juice 360g TO43RH 1000ml",
    artNo: "23531",
    description: "1000 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009232-grid_2.jpg"
  },
  {
    title: "Juice 320g TO53RH 700ml",
    artNo: "25499",
    description: "700 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1009775-grid_2.jpg"
  },
  {
    title: "Gourmet Fruchts. 170g TO38RA 330ml",
    artNo: "13153",
    description: "330 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1002714-grid_2.jpg"
  },
  {
    title: "Sticla 400g TO53RH 1000ml",
    artNo: "35005",
    description: "1000 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012604-grid_2.jpg"
  },
  {
    title: "Sticla 320g TO53RH 700ml",
    artNo: "35379",
    description: "700 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012863-grid_2.jpg"
  },
  {
    title: "Sticla 320g TO53RH 750ml",
    artNo: "35378",
    description: "750 ml, Twist Off",
    img: "https://katalog.vetropack.com/static_cache/img/1012862-grid_2.jpg"
  },
  {
    title: "Lekovka 195g PP2815 300ml",
    artNo: "23950",
    description: "300 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009406-grid_2.jpg"
  },
  {
    title: "Lekovka 280g PP2815 500ml",
    artNo: "23949",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009404-grid_2.jpg"
  },
  {
    title: "Lekovka 515g PP2815 1000ml",
    artNo: "23952",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009407-grid_2.jpg"
  },
  {
    title: "Keule Softdrink 150g DK2615 250ml",
    artNo: "24984",
    description: "250 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1006559-grid_2.jpg"
  },
  {
    title: "Keule softdrink bottle",
    artNo: "17793",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003782-grid_2.jpg"
  },
  {
    title: "Keule Softdrink 150g KK2615 250ml",
    artNo: "28079",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001514-grid_2.jpg"
  },
  {
    title: "Keule Softdrink 150g MC281G 250ml",
    artNo: "27909",
    description: "250 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001448-grid_2.jpg"
  },
  {
    title: "Keule Softdrink 150g MC281G 250ml",
    artNo: "27910",
    description: "250 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001449-grid_2.jpg"
  },
  {
    title: "Keule Softdrink 150g MC281G 250ml",
    artNo: "27908",
    description: "250 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001447-grid_2.jpg"
  },
  {
    title: "Keule Softdrink 205g MC281G 330ml",
    artNo: "22008",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1008455-grid_2.jpg"
  },
  {
    title: "Keule Softdrink 265g MC287R 500ml",
    artNo: "34085",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1012145-grid_2.jpg"
  },
  {
    title: "Keule Softdrink 265g MC287R 500ml",
    artNo: "33832",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1012018-grid_2.jpg"
  },
  {
    title: "Keule Softdrink 265g MC287R 500ml",
    artNo: "28080",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001515-grid_2.jpg"
  },
  {
    title: "Keule Saftflasche 190g KK 330ml",
    artNo: "37134",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1013356-grid_1.jpg"
  },
  {
    title: "Keule Saftflasche 190g MC287R 330ml",
    artNo: "34060",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1010816-grid_2.jpg"
  },
  {
    title: "Tropical Tonic 140g KK 200ml",
    artNo: "32111",
    description: "200 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011141-grid_2.jpg"
  },
  {
    title: "Tropical Tonic 140g MCA28 200ml",
    artNo: "34886",
    description: "200 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1012379-grid_2.jpg"
  },
  {
    title: "Ale 177g KK2615 250ml",
    artNo: "33485",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011841-grid_2.jpg"
  },
  {
    title: "Vichy Limo 390g MC281G 750ml",
    artNo: "36350",
    description: "750 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1013307-grid_2.jpg"
  },
  {
    title: "L AF Norm Ret 640g MC281G 1000ml",
    artNo: "13069",
    description: "1000 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1002610-grid_2.jpg"
  },
  {
    title: "Universal Softdr.500g MC281G 1000ml",
    artNo: "18767",
    description: "1000 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1006560-grid_2.jpg"
  },
  {
    title: "Kurzhals Ret 610g LM3231 1000ml",
    artNo: "24352",
    description: "1000 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1009582-grid_2.jpg"
  },
  {
    title: "Einheit Softdr. 500g MC281G 1000ml",
    artNo: "19404",
    description: "1000 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1007024-grid_2.jpg"
  },
  {
    title: "Limo 365g MC287R Ret 500ml",
    artNo: "27086",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001187-grid_2.jpg"
  },
  {
    title: "L AF Norm Ret 310g KK2618 350ml",
    artNo: "13066",
    description: "350 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002608-grid_2.jpg"
  },
  {
    title: "LN LAD 210g DK2618 330ml",
    artNo: "31300",
    description: "330 ml, Twist crown",
    img: "https://katalog.vetropack.com/static_cache/img/1002252-grid_2.jpg"
  },
  {
    title: "Mineral Most Ret 355g KK2613 500ml",
    artNo: "10193",
    description: "500 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001160-grid_2.jpg"
  },
  {
    title: "Mineral Norm Ret 292g KK2613 330ml",
    artNo: "10514",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001430-grid_2.jpg"
  },
  {
    title: "Einwegflasche 150g MC281G 330ml",
    artNo: "28072",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1002635-grid_2.jpg"
  },
  {
    title: "Einwegflasche 160g MC287R 330ml",
    artNo: "34451",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1012178-grid_2.jpg"
  },
  {
    title: "Einwegflasche 160g MC287R 330 ml",
    artNo: "33744",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1010808-grid_2.jpg"
  },
  {
    title: "L AF Norm Ret 640g MC281G 1000ml",
    artNo: "27591",
    description: "1000 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1002611-grid_2.jpg"
  },
  {
    title: "Kropfhals 270g MC281G 250ml",
    artNo: "25968",
    description: "250 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1003183-grid_2.jpg"
  },
  {
    title: "OSTROM VA 190g MC281G 300ml",
    artNo: "30167",
    description: "300 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1009735-grid_2.jpg"
  },
  {
    title: "ZDROJ 190g MC281G 300ml",
    artNo: "31320",
    description: "300 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1010788-grid_2.jpg"
  },
  {
    title: "Radka 345g MC281G 700ml",
    artNo: "27052",
    description: "700 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001174-grid_2.jpg"
  },
  {
    title: "Radka 345g MC281G 700ml",
    artNo: "30745",
    description: "700 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1003025-grid_2.jpg"
  },
  {
    title: "RADKA 345g MC281G 700ml",
    artNo: "28241",
    description: "700 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1001175-grid_2.jpg"
  },
  {
    title: "OBUS VA 225g KK2612 330ml",
    artNo: "30137",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001912-grid_2.jpg"
  },
  {
    title: "Mineralka 145g MC281G 250ml",
    artNo: "36886",
    description: "250 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1013548-grid_1.jpg"
  },
  {
    title: "Mineralka 145g MC281G 250ml",
    artNo: "36785",
    description: "250 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1013462-grid_2.jpg"
  },
  {
    title: "Mineralka 148g KK2613 250ml",
    artNo: "36263",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1013243-grid_2.jpg"
  },
  {
    title: "Mineralka 148g KK2613 250ml",
    artNo: "26124",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003306-grid_2.jpg"
  },
  {
    title: "Mineralka 148g KK2613 250ml",
    artNo: "26123",
    description: "250 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003305-grid_2.jpg"
  },
  {
    title: "Mineralka 151g MC281G 250ml",
    artNo: "33236",
    description: "250 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1011425-grid_2.jpg"
  },
  {
    title: "Mineralka 151g MC281G 250ml",
    artNo: "32659",
    description: "250 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1011426-grid_2.jpg"
  },
  {
    title: "Mineralka 374g MC281G 750ml",
    artNo: "33541",
    description: "750 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1011861-grid_2.jpg"
  },
  {
    title: "Mineralka 374g MC281G 750ml",
    artNo: "25895",
    description: "750 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1002237-grid_2.jpg"
  },
  {
    title: "L AF Norm Ret 310g KK2618 350ml",
    artNo: "13067",
    description: "350 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002609-grid_2.jpg"
  },
  {
    title: "Aura 280g MC31,5 330ml",
    artNo: "31547",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1010911-grid_2.jpg"
  },
  {
    title: "Aura 280g PP3115 330ml",
    artNo: "31240",
    description: "330 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003043-grid_2.jpg"
  },
  {
    title: "Aura 465g MC31,5 750ml",
    artNo: "32645",
    description: "750 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1011418-grid_2.jpg"
  },
  {
    title: "Nela 190g MC281G 330ml",
    artNo: "21802",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1008356-grid_2.jpg"
  },
  {
    title: "Nela 190g MC281G 330ml",
    artNo: "31208",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1010745-grid_2.jpg"
  },
  {
    title: "Radka 190g KK2612 330ml",
    artNo: "23675",
    description: "330 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009307-grid_2.jpg"
  },
  {
    title: "RADKA F1 190g MC281G 330ml",
    artNo: "28240",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1009426-grid_2.jpg"
  },
  {
    title: "Radka 190g MC281G 330ml",
    artNo: "30744",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1003024-grid_2.jpg"
  },
  {
    title: "Radka 190g MC281G 330ml",
    artNo: "26002",
    description: "330 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1003202-grid_2.jpg"
  },
  {
    title: "Glass bottle Euro 2 BP 500 ml",
    artNo: "30249",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1002239-grid_2.jpg"
  },
  {
    title: "Glass bottle Euro 2 BP 500 ml",
    artNo: "32551",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1011378-grid_2.jpg"
  },
  {
    title: "Glass bottle NRW mineral light 500ml",
    artNo: "31143",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1010877-grid_2.jpg"
  },
  {
    title: "NRW mineral light 500ml",
    artNo: "31130",
    description: "500 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1010878-grid_2.jpg"
  },
  {
    title: "Flask Tafla 430g PP2815 500ml",
    artNo: "12620",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002283-grid_2.jpg"
  },
  {
    title: "Flask Tafla 620g PP2815 1000ml",
    artNo: "26552",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1008383-grid_2.jpg"
  },
  {
    title: "Flask Meinl 400g PP3121 500ml",
    artNo: "21407",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003898-grid_2.jpg"
  },
  {
    title: "Flask Meinl 630g PP3121 1000ml",
    artNo: "22001",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003900-grid_2.jpg"
  },
  {
    title: "Flask 185g PP2815 200ml",
    artNo: "26610",
    description: "200 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003527-grid_2.jpg"
  },
  {
    title: "Flask 490g BP3121 700ml",
    artNo: "26066",
    description: "700 ml, BVP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003276-grid_2.jpg"
  },
  {
    title: "Flyaga 500ml",
    artNo: "34627",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001460-grid_2.jpg"
  },
  {
    title: "Glass bottle Flask VPG PP 200 ml",
    artNo: "31777",
    description: "200 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011011-grid_2.jpg"
  },
  {
    title: "Vodka 210g PP3032 200ml",
    artNo: "35478",
    description: "200 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012928-grid_2.jpg"
  },
  {
    title: "Whisky Vierkant 566g PP3032 700ml",
    artNo: "26111",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003298-grid_2.jpg"
  },
  {
    title: "Sparflasche 605g BP3121 500ml",
    artNo: "10988",
    description: "500 ml, BVP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001080-grid_2.jpg"
  },
  {
    title: "Luccia 426g RB18 500ml",
    artNo: "31136",
    description: "500 ml, Ring cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010714-grid_2.jpg"
  },
  {
    title: "Cutura 675g PP3121 700ml",
    artNo: "24317",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009570-grid_2.jpg"
  },
  {
    title: "Čutura 675g PP3121 750ml",
    artNo: "14421",
    description: "750 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1004080-grid_3.jpg"
  },
  {
    title: "Cristalina 60mm 525g OB18,1 500ml",
    artNo: "15812",
    description: "500 ml, Top cork",
    img: "https://katalog.vetropack.com/static_cache/img/1005542-grid_2.jpg"
  },
  {
    title: "Triangule 480g WM17,5 200ml",
    artNo: "20212",
    description: "200 ml, Preson finish",
    img: "https://katalog.vetropack.com/static_cache/img/1006235-grid_2.jpg"
  },
  {
    title: "Brandy 545g PP3121 1000ml",
    artNo: "24908",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009809-grid_2.jpg"
  },
  {
    title: "Lavina Cognac 450g OB16 500ml",
    artNo: "35254",
    description: "500 ml, Top cork",
    img: "https://katalog.vetropack.com/static_cache/img/1012781-grid_2.jpg"
  },
  {
    title: "Bottle VP spirit 500 ml",
    artNo: "31508",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002173-grid_2.jpg"
  },
  {
    title: "Brandy 350g PP2800 500ml",
    artNo: "35459",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012914-grid_2.jpg"
  },
  {
    title: "Brandy 450g BV3000 700ml",
    artNo: "35456",
    description: "700 ml, BVS finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012912-grid_2.jpg"
  },
  {
    title: "Spirituosen rund 250g BP3121 350ml",
    artNo: "26549",
    description: "350 ml, BVP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001223-grid_2.jpg"
  },
  {
    title: "Spirituosen rund 300g BP3121 500ml",
    artNo: "24538",
    description: "500 ml, BVP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001371-grid_2.jpg"
  },
  {
    title: "Spirituosen rund 425g BP3121 700ml",
    artNo: "10264",
    description: "700 ml, BVP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001224-grid_2.jpg"
  },
  {
    title: "Spirituosen rund 550g BP3121 1000ml",
    artNo: "10050",
    description: "1000 ml, BVP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001043-grid_2.jpg"
  },
  {
    title: "Vermouth 509g BP3121 1000ml",
    artNo: "33285",
    description: "1000 ml, BVP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011710-grid_2.jpg"
  },
  {
    title: "Whisky rund 431g PP3121 700ml",
    artNo: "36212",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1013222-grid_2.jpg"
  },
  {
    title: "Alexander 435g PP3115 1000ml",
    artNo: "33820",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1005892-grid_2.jpg"
  },
  {
    title: "Alexander 320g PP3115 700ml",
    artNo: "23127",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009055-grid_2.jpg"
  },
  {
    title: "Eco Gin 500g OB18,2 500ml",
    artNo: "33220",
    description: "500 ml, Ring cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011691-grid_2.jpg"
  },
  {
    title: "Eco Gin 550g OB18,2 700ml",
    artNo: "33221",
    description: "700 ml, Ring cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011694-grid_2.jpg"
  },
  {
    title: "Vodka 638g PP3121 1000ml",
    artNo: "27548",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001266-grid_2.jpg"
  },
  {
    title: "Lemon 555g PP3121 1000ml",
    artNo: "19541",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1007091-grid_2.jpg"
  },
  {
    title: "MÜLLER-Platin WM10 100ml",
    artNo: "36613",
    description: "100 ml, Preson finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002774-grid_2.jpg"
  },
  {
    title: "MÜLLER-Platin WM10 100ml",
    artNo: "26009",
    description: "100 ml, Preson finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002773-grid_2.jpg"
  },
  {
    title: "Platin WM16,5 200ml",
    artNo: "22434",
    description: "200 ml, Preson finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002777-grid_2.jpg"
  },
  {
    title: "Platin WM16,5 500ml",
    artNo: "36577",
    description: "500 ml, Preson finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003479-grid_2.jpg"
  },
  {
    title: "Weinbrand 580g PP2815 1000ml",
    artNo: "25632",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001830-grid_2.jpg"
  },
  {
    title: "Henkel 270g LM3132 200ml",
    artNo: "25878",
    description: "200 ml, Swing closer",
    img: "https://katalog.vetropack.com/static_cache/img/1002231-grid_2.jpg"
  },
  {
    title: "Symphonie63 455g OB16,5 350ml",
    artNo: "12809",
    description: "350 ml, Top cork",
    img: "https://katalog.vetropack.com/static_cache/img/1002923-grid_2.jpg"
  },
  {
    title: "Symphonie60 500g OB17,5 500ml",
    artNo: "12935",
    description: "500 ml, Top cork",
    img: "https://katalog.vetropack.com/static_cache/img/1002928-grid_2.jpg"
  },
  {
    title: "Nashorn 240g PP2815 350ml",
    artNo: "23868",
    description: "350 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002302-grid_2.jpg"
  },
  {
    title: "Napoleon 370g PP2860 500ml",
    artNo: "21807",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1008358-grid_2.jpg"
  },
  {
    title: "VERSUS 360g PP3144 500ml",
    artNo: "31363",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010807-grid_2.jpg"
  },
  {
    title: "VERSUS 448g PP3144 700ml",
    artNo: "31362",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010806-grid_2.jpg"
  },
  {
    title: "VERSUS 546g PP3144 1000ml",
    artNo: "33311",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011742-grid_2.jpg"
  },
  {
    title: "VERSUS 546g PP3144 1000ml",
    artNo: "31581",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010805-grid_2.jpg"
  },
  {
    title: "LIKER 452g PP3144 700ml",
    artNo: "33212",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011685-grid_2.jpg"
  },
  {
    title: "LIKER 480g PP3144 1000ml",
    artNo: "33214",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011686-grid_2.jpg"
  },
  {
    title: "Konjak 350g PP3121 500ml",
    artNo: "14257",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003914-grid_2.jpg"
  },
  {
    title: "Konjak 350g PP3121 500ml",
    artNo: "30233",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003911-grid_2.jpg"
  },
  {
    title: "Konjak 500g PP3121 1000ml",
    artNo: "15324",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1004522-grid_2.jpg"
  },
  {
    title: "Konjak 500g PP3121 1000ml",
    artNo: "34644",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012386-grid_2.jpg"
  },
  {
    title: "Konjak 500g PP3121 1000ml",
    artNo: "30165",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1004514-grid_2.jpg"
  },
  {
    title: "Bordo 95g SM2012 100ml",
    artNo: "24802",
    description: "100 ml, Special finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003917-grid_2.jpg"
  },
  {
    title: "Bordo 175g PP2815 200ml",
    artNo: "24017",
    description: "200 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009448-grid_2.jpg"
  },
  {
    title: "Bordeaux Spirit. 695g PP3115 2000ml",
    artNo: "13138",
    description: "2000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002689-grid_2.jpg"
  },
  {
    title: "Feine Brände PP3121 700ml",
    artNo: "24030",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002822-grid_2.jpg"
  },
  {
    title: "Linda 300g PP2815 500ml",
    artNo: "21083",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1007955-grid_2.jpg"
  },
  {
    title: "Lark 420g PP3121 700ml",
    artNo: "22170",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1008348-grid_2.jpg"
  },
  {
    title: "Lark 420g PP3121 700ml",
    artNo: "27088",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001193-grid_2.jpg"
  },
  {
    title: "Lieh 270g PP2815 500ml",
    artNo: "25032",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1009849-grid_2.jpg"
  },
  {
    title: "Lieh 425g PP2815 700ml",
    artNo: "26155",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003319-grid_3.jpg"
  },
  {
    title: "Lieh 490g MC281G 1000ml",
    artNo: "32080",
    description: "1000 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1011134-grid_2.jpg"
  },
  {
    title: "Lieh 490g PP2815 1000ml",
    artNo: "26156",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1003320-grid_2.jpg"
  },
  {
    title: "Bordolese Magia70 475g WM18 700ml",
    artNo: "28870",
    description: "700 ml, Preson finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010443-grid_2.jpg"
  },
  {
    title: "Bordolese Magia70 475g WM18 700ml",
    artNo: "28872",
    description: "700 ml, Preson finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010444-grid_2.jpg"
  },
  {
    title: "Vodka 750g PP3144 2000ml",
    artNo: "35012",
    description: "2000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012609-grid_2.jpg"
  },
  {
    title: "Vodka 310g PP2800 500ml",
    artNo: "35462",
    description: "500 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012916-grid_2.jpg"
  },
  {
    title: "Zlata 450g PP3144 700ml",
    artNo: "35476",
    description: "700 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012927-grid_2.jpg"
  },
  {
    title: "Zlata 560g PP3144 1000ml",
    artNo: "35482",
    description: "1000 ml, PP finish",
    img: "https://katalog.vetropack.com/static_cache/img/1012930-grid_2.jpg"
  },
  {
    title: "Frizzante Burgunder BV3060 750ml",
    artNo: "26801",
    description: "750 ml, BVS finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001023-grid_2.jpg"
  },
  {
    title: "Collio 720g SK17,5 750ml",
    artNo: "30067",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1001399-grid_2.jpg"
  },
  {
    title: "Emiliana 480g BM17,6 750ml",
    artNo: "22346",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1004367-grid_2.jpg"
  },
  {
    title: "Emiliana 480g BM17,6 750ml",
    artNo: "22347",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1004404-grid_2.jpg"
  },
  {
    title: "Glass bottle Dorato 750ml",
    artNo: "32133",
    description: "750 ml, Combined crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011152-grid_2.jpg"
  },
  {
    title: "Glass bottle Dorato 750ml",
    artNo: "32132",
    description: "750 ml, Combined crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011151-grid_2.jpg"
  },
  {
    title: "Glass bottle Dorato 750ml",
    artNo: "32134",
    description: "750 ml, Combined crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1011153-grid_2.jpg"
  },
  {
    title: "Frizz. BG Antea70 700g BM17,5 750ml",
    artNo: "28767",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010388-grid_3.jpg"
  },
  {
    title: "Frizz. BG Nuova70 550g BM17,5 750ml",
    artNo: "28778",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010396-grid_3.jpg"
  },
  {
    title: "Frizz. BG Nuova70 550g BM17,5 750ml",
    artNo: "28851",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010428-grid_2.jpg"
  },
  {
    title: "Frizz. BG Sole70 600g BM17,5 750ml",
    artNo: "28657",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010341-grid_2.jpg"
  },
  {
    title: "Frizz.Ren.Nouv.70 550g BM17,5 750ml",
    artNo: "28852",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010429-grid_2.jpg"
  },
  {
    title: "Frizz.Ren.Nouv.70 550g OB17,5 750ml",
    artNo: "28403",
    description: "750 ml, Top cork",
    img: "https://katalog.vetropack.com/static_cache/img/1010201-grid_2.jpg"
  },
  {
    title: "Frizz. BG Nuova70 400g BM17,5 375ml",
    artNo: "28421",
    description: "375 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010208-grid_2.jpg"
  },
  {
    title: "FrizzBG Cantina70 550g BM17,5 750ml",
    artNo: "28538",
    description: "750 ml, Top cork",
    img: "https://katalog.vetropack.com/static_cache/img/1010272-grid_3.jpg"
  },
  {
    title: "FZ BG Trad.55 550g BM17,5 750ml",
    artNo: "28714",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010367-grid_3.jpg"
  },
  {
    title: "FZ BG Fashion PK80 550gSK17,6 750ml",
    artNo: "28619",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010320-grid_2.jpg"
  },
  {
    title: "FrizzBG pesante65 1200g BM17,5 750ml",
    artNo: "28734",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010373-grid_2.jpg"
  },
  {
    title: "FrizzBG Supreme90 600g BM17,5 750ml",
    artNo: "28614",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010317-grid_2.jpg"
  },
  {
    title: "Frizz.Ren.Punto70 700g OB17,5 750ml",
    artNo: "28548",
    description: "750 ml, Top cork",
    img: "https://katalog.vetropack.com/static_cache/img/1010278-grid_2.jpg"
  },
  {
    title: "CH TOSCA LEG90 640g SK17,6 750ml",
    artNo: "36452",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1013359-grid_2.jpg"
  },
  {
    title: "SP BACCO NEW90 600g SK17,6 750ml",
    artNo: "36416",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1013343-grid_2.jpg"
  },
  {
    title: "SP Collio Leg90 600g SK17,6 750ml",
    artNo: "36401",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1013337-grid_3.jpg"
  },
  {
    title: "Sekt 550g KK2918 700ml",
    artNo: "18389",
    description: "700 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001215-grid_2.jpg"
  },
  {
    title: "Sekt 550g KK2918 700ml",
    artNo: "36129",
    description: "700 ml, Crown finish",
    img: "https://katalog.vetropack.com/static_cache/img/1013188-grid_2.jpg"
  },
  {
    title: "Sekt ES 610g SK18 750ml",
    artNo: "35913",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1009463-grid_2.jpg"
  },
  {
    title: "Sekt ES 610g SK18 750ml",
    artNo: "22466",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1008728-grid_2.jpg"
  },
  {
    title: "Sekt ES 610g SK18 750ml",
    artNo: "23836",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1009350-grid_2.jpg"
  },
  {
    title: "Sekt Meth. Trad. 775g SK17.5 750ml",
    artNo: "26980",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1003206-grid_2.jpg"
  },
  {
    title: "Frizzante Sektfl. 610g BVS 750ml",
    artNo: "30347",
    description: "750 ml, BVS finish",
    img: "https://katalog.vetropack.com/static_cache/img/1002064-grid_2.jpg"
  },
  {
    title: "Sekt 206g MC281G 200ml",
    artNo: "36020",
    description: "200 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1013111-grid_2.jpg"
  },
  {
    title: "Sekt 206g MC281G 200ml",
    artNo: "31482",
    description: "200 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1003325-grid_2.jpg"
  },
  {
    title: "Sekt 206g MC281G 200ml",
    artNo: "33356",
    description: "200 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1003431-grid_2.jpg"
  },
  {
    title: "Sekt Magnum 1500g SK18 1500ml",
    artNo: "22174",
    description: "1500 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1005243-grid_2.jpg"
  },
  {
    title: "SP Collio Light 600g SK17,6 750ml",
    artNo: "28050",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1001509-grid_2.jpg"
  },
  {
    title: "SP Flute sekt bottle 750g 750ml",
    artNo: "28049",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1001508-grid_2.jpg"
  },
  {
    title: "Mols 580g MC281G 750ml",
    artNo: "30633",
    description: "750 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1003342-grid_2.jpg"
  },
  {
    title: "SPUMANTE RUSCO 750g BM17,6 750ml",
    artNo: "28284",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1001290-grid_2.jpg"
  },
  {
    title: "SPUMANTE RUSCO 750g BM17,6 750ml",
    artNo: "31254",
    description: "750 ml, Cork finish",
    img: "https://katalog.vetropack.com/static_cache/img/1010774-grid_4.jpg"
  },
  {
    title: "Spumante Club 600g SK18 750ml",
    artNo: "26190",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1003348-grid_2.jpg"
  },
  {
    title: "Spumante Club 600g SK18 750ml",
    artNo: "26459",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1003426-grid_2.jpg"
  },
  {
    title: "Spumante Club 600g SK18 750ml",
    artNo: "27655",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1001302-grid_2.jpg"
  },
  {
    title: "Spumante Club 600g SK18 750ml",
    artNo: "27075",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1001183-grid_2.jpg"
  },
  {
    title: "Sparkling avia 200ml",
    artNo: "32370",
    description: "200 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1002183-grid_2.jpg"
  },
  {
    title: "Glass botlle Sparkling avia 200 ml",
    artNo: "30156",
    description: "200 ml, MCA",
    img: "https://katalog.vetropack.com/static_cache/img/1010052-grid_2.jpg"
  },
  {
    title: "Glass bottle Raud sparkling SK 750ml",
    artNo: "31660",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010914-grid_2.jpg"
  },
  {
    title: "Bottle Raud sparkling 750 ml",
    artNo: "30963",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1002348-grid_3.jpg"
  },
  {
    title: "Glass bottle Raud sparkling 750 ml",
    artNo: "27547",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1001265-grid_2.jpg"
  },
  {
    title: "Spum.Norma90 RP40 750g SK17,6 750ml",
    artNo: "28864",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010439-grid_2.jpg"
  },
  {
    title: "Spum Enovitis 700g SK17,5 750ml",
    artNo: "28569",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010291-grid_2.jpg"
  },
  {
    title: "Spumante Tosca80 750g OB18,5 750ml",
    artNo: "30427",
    description: "750 ml, Top cork",
    img: "https://katalog.vetropack.com/static_cache/img/1002069-grid_2.jpg"
  },
  {
    title: "Spum.Tosca80 RP40 750g SK17,6 750ml",
    artNo: "28473",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010243-grid_2.jpg"
  },
  {
    title: "Spumante Tosca80 750g SK17,6 750ml",
    artNo: "30424",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010465-grid_4.jpg"
  },
  {
    title: "Spumante Collina80 750gKM17,6 750ml",
    artNo: "28774",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010393-grid_2.jpg"
  },
  {
    title: "Spum. Artu Legg 750g SK17,6 750ml",
    artNo: "32291",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1011248-grid_2.jpg"
  },
  {
    title: "Spum. Artu Legg 750g SK17,6 750ml",
    artNo: "32292",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1011249-grid_2.jpg"
  },
  {
    title: "Sparkling 600g SK17,5 750ml",
    artNo: "35095",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1012667-grid_2.jpg"
  },
  {
    title: "Sparkling 600g SK17,5 750ml",
    artNo: "35094",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1012666-grid_2.jpg"
  },
  {
    title: "Champagne COLLIO 700g SK17,6 750ml",
    artNo: "35113",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1012682-grid_2.jpg"
  },
  {
    title: "Champagne COLLIO 700g SK17,5 750ml",
    artNo: "35114",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1012681-grid_2.jpg"
  },
  {
    title: "Champagne 680g SK17,5 750ml",
    artNo: "35118",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1012686-grid_2.jpg"
  },
  {
    title: "Champagne 680g SK17,5 750ml",
    artNo: "35117",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1012685-grid_2.jpg"
  },
  {
    title: "Sekt 800g SK17,6 750ml",
    artNo: "36056",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1013143-grid_2.jpg"
  },
  {
    title: "Sekt 800g SK17,6 750ml",
    artNo: "31578",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1009349-grid_3.jpg"
  },
  {
    title: "Sekt 800g SK17,6 750ml",
    artNo: "23906",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1002830-grid_2.jpg"
  },
  {
    title: "Sekt 800g SK17,6 750ml",
    artNo: "21308",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1002829-grid_2.jpg"
  },
  {
    title: "Sekt 1700g SK17,6 1500ml",
    artNo: "23000",
    description: "1500 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1002945-grid_2.jpg"
  },
  {
    title: "Šampanija classic 835g SK17,6 750ml",
    artNo: "26535",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1003467-grid_2.jpg"
  },
  {
    title: "Šampanija classic 835g SK17,6 750ml",
    artNo: "26536",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1003468-grid_2.jpg"
  },
  {
    title: "Penina 900g SK17,6 750ml",
    artNo: "23473",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1006492-grid_2.jpg"
  },
  {
    title: "Penina 900g SK17,6 750ml",
    artNo: "25598",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1001811-grid_2.jpg"
  },
  {
    title: "Sekt 480g SK17,6 375ml",
    artNo: "20902",
    description: "375 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1005231-grid_2.jpg"
  },
  {
    title: "Spumante AIDA 900g SK17,6 750ml",
    artNo: "28662",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010345-grid_4.jpg"
  },
  {
    title: "Spum. Aida90 1750g SK17,6 1500ml",
    artNo: "28696",
    description: "1500 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010361-grid_2.jpg"
  },
  {
    title: "Spum. Nizza100 900g SK17,6 750ml",
    artNo: "29274",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010397-grid_3.jpg"
  },
  {
    title: "Spumante Artù90 900g SK17,6 750ml",
    artNo: "28809",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010411-grid_3.jpg"
  },
  {
    title: "Spum. Artù90 CT 900g SK17,6 750ml",
    artNo: "28514",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010259-grid_2.jpg"
  },
  {
    title: "Spum. Magnum90 1750g SK17,6 1500ml",
    artNo: "31927",
    description: "1500 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010289-grid_2.jpg"
  },
  {
    title: "Spumante Artù70 500g SK17,6 375ml",
    artNo: "28932",
    description: "375 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1010475-grid_3.jpg"
  },
  {
    title: "Champagne 835g SK17,6 750ml",
    artNo: "36283",
    description: "750 ml, Crown finish spumante",
    img: "https://katalog.vetropack.com/static_cache/img/1013240-grid_2.jpg"
  },
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


    ];

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
      <p className="mb-0 fw-bold">963 results with your filter setting</p>
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

export default All
