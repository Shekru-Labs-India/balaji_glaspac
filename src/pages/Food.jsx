import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import CatalogueNav from './CatalogueNav';

const Food = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState('Beer');

  const cards = [
    
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
  <p className="mb-0 fw-bold">200 results with your filter setting</p>
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

export default Food