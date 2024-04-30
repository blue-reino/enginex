import b58 from '../images/b58.jpg'
import s58 from '../images/s58.jpg'
import n55 from '../images/n55.jpg'
import s55 from '../images/s55.jpg'
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
        quickstats: ["BMW", "2015-Present"]
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
        quickstats: ["BMW", "2019-Present"]

    },
    {
      id: 3,
      name: "N55",
      image: n55,
      manufacturer : "BMW",
      production: "2009–2019",
      cars:["F10/F11/F07 535i",
      "E90/E91/E92/E93 335i",
      "E82/E88 135i",
      "F25 X3 xDrive35i",
      "E70 X5 xDrive 35i",
      "F30/F31 335i",
      "E71 X6 xDrive 35i",
      "E84 X1 xDrive35i",
      "F32/F33/F36 435i",
      "F15 X5 xDrive 35i",
      "F16 X6 xDrive35i",
      "F26 X4 xDrive 35i",
      "F06/F12/F13 640i",
      "E82/E88 135is",
      "F20/F21 M135i",
      "F01/F02 740i/Li",
      "F22/F23 M235i",
      "F20/F21 M135i LCI",
      "F30 ActiveHybrid 3",
      "F10 ActiveHybrid 5",
      "F87 M2",
      "F26 X4 M40i"],
      horsepowertorque: ["302–365 HP","295-369 LB-FT"],
      configuration: "Straight-Six",
      turbocharger: "Single BorgWarner twin-scroll with Intercooler",
      quickstats: ["BMW", "2009-2019"],
    },
      {
        id: 4,
        name: "S55",
        image: s55,
        manufacturer: "BMW",
        production: "2014-2021",
        cars: [
            "F80 M3",
            "F82 M4",
            "F83 M4",
            "F87 M2 Competition",
            "F82 M4 CS",
            "F83 M4 CS",
            "F80 M3 CS",
            "F82 M4 GTS",
            "F82 M4 CS",
            "F83 M4 CS"
        ],
        horsepowertorque: ["317–368 kW (431–500 HP)", "406–550 N⋅m (299–406 LB-FT)"],
        configuration: "Straight-Six",
        turbocharger: "Twin-Turbo",
        quickstats: ["BMW", "2014-2021"]
    }
    

];

export default motors;