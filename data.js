// import Colombia from "./assets/Coffee_bag_Colombia.png";
// import CostaRica from "./assets/Coffee_bag_Costa_Rica.png";
// import Laos from "./assets/Coffee_bag_Laos.png";
// import Etiopia from "./assets/Coffee_bag_Etiopia.png";
// import Kenia from "./assets/Coffee_bag_Kenia.png";
// import EtiopiaSidamo from "./assets/Coffee_bag_Etiopia_Sidamo.png";
// import CostaRicaMonteBello from "./assets/Coffee_bag_Costa_Rica_Monte_Bello.png";
// import ColombiaLaCasita from "./assets/Coffee_bag_Colombia_LaCasita.png";

export const coffeeData = [
    {
    "id": "08a2b01071f7418b84ce1dcac4933a21",
    "productName": "Costa Rica Tarrazú",
    "isAvailable": true,
    "coffeePrice": 9,
    "img": "../assets/Coffee_bag_Costa_Rica.png"
    },


    {
    "id": "08a2b01071f7418b84ce1dcac4933a22",
    "productName": "Colombia Los Naranjos",
    "isAvailable": true,
    "coffeePrice": 9,
    "img": "../assets/Coffee_bag_Colombia.png"
    },

    {
        "id": "08a2b01071f7418b84ce1dcac4933a23",
        "productName": "Laos Amanecer",
        "isAvailable": true,
        "coffeePrice": 9,
        "img": ""
    
    },

    {
        "id": "08a2b01071f7418b84ce1dcac4933a24",
        "productName": "Etiopía Yrgacheff",
        "isAvailable": true,
        "coffeePrice": 9,
        "img": ""
    
    },

    {
        "id": "08a2b01071f7418b84ce1dcac4933a25",
        "productName": "Kenia Ndunduri",
        "isAvailable": true,
        "coffeePrice": 15,
        "img": ""
    
    },

    {
        "id": "08a2b01071f7418b84ce1dcac4933a26",
        "productName": "Etiopía Sidamo",
        "isAvailable": true,
        "coffeePrice": 17,
        "img": ""
    
    },

    {
        "id": "08a2b01071f7418b84ce1dcac4933a27",
        "productName": "Costa Rica Monte Bello",
        "isAvailable": true,
        "coffeePrice": 12,
        "img": ""
    
    },

    {
        "id": "08a2b01071f7418b84ce1dcac4933a28",
        "productName": "Colombia La Casita",
        "isAvailable": false,
        "coffeePrice": 9,
        "img": ""
    
    },
]
    // console.log(coffeeData);
                        
    
    localStorage.setItem("dataStorage",JSON.stringify(coffeeData));
    const coffeeDataJson = JSON.parse(localStorage.getItem("dataStorage"));

    sessionStorage.setItem("dataSessionStorage",JSON.stringify(coffeeData));
    const coffeeDataJsonSession = JSON.parse(sessionStorage.getItem("dataStorage"));
 
console.log(coffeeDataJson);