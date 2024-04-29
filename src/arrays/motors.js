import b58 from '../images/b58.jpg'
import s58 from '../images/s58.jpg'


const motors = [
    {
        id: 1,
        name: "B58",
        image: b58,
        manufacturer : "BMW",
        production: "2015-Present",
        cars:["F30/F31/F34 340i", "F32/F33/F36 440i", "G11/G12 740i/Li"], 
        horsepowertorque: ["322–382 HP","332–369 LB-FT"],
        configuration: "Straight-Six",
        turbocharger: "Single twin-scroll turbocharger with air-to-liquid intercooler",
        quickstats: {
          manufacturer: "BMW",
          production: "2015-Present",
        }
    },
    {
        id: 2,
        name: "S58",
        image: s58,
        manufacturer : "BMW",
        production: "2019-Present",
        cars:["G87 M2",
        "G80 M3",
        "G82 M4",
        "G20 Alpina B3",
        "F97 X3 M",
        "F98 X4 M",
        "G20 Alpina B3",
        "G26 Alpina B4 Gran Coupe",
        "G80 M3 Competition",
        "G82 M4 Competition",
        "G81 M3 Competition Touring",
        "G82 M4 CSL",
        "G80 M3 CS",
        "G82 BMW 3.0 CSL"],
        horsepowertorque: ["453–503 HP","406–479 LB-FT"],
        configuration: "Straight-Six",
        turbocharger: "Twin-Turbo with air-to-liquid intercooler",
        quickstats: {
          manufacturer: "BMW",
          production: "2019-Present",
        }
    }
];

export default motors;