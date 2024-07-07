import type { Mode } from "../types/osu";

export const catalans: number[] = [
    17018032, // M4rti_
    17897192, // Siirius
    13817790, // -Yasai-
    20661304 // Japii
];

export const modes: { name: string, code: Mode }[] = [
    {
        name: "osu!",
        code: "osu",
    },
    {
        name: "osu!taiko",
        code: "taiko",
    },
    {
        name: "osu!catch",
        code: "fruits",
    },
    {
        name: "osu!mania",
        code: "mania",
    }
];

export type Country = {
    name: string,
    nativeName: string,
    regions: Subdivision[]
};

export type Subdivision = {
    name: string,
    nativeName: string,
    flag: string
};


export type SubdivisionFlags = {
    [countryCode: string]: {
        name: string,
        nativename?: string,
        nativeName: string,
        regions: {
            [regionCode: string]: Subdivision
        }
    }
};

export const subdivisionFlags: SubdivisionFlags = {
    "Unknown": {
        "name": "Unknown",
        "nativeName": "Unknown",
        "regions": {
            "Unknown": {
                "name": "Unknown",
                "nativeName": "Unknown",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png"
            }
        }
    },
    "AL": {
        "name": "Albania",
        "nativeName": "Shqipëria",
        "regions": {
            "AL-01": {
                "name": "Berat County",
                "nativeName": "Qarku i Beratit",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Berat.svg"
            },
            "AL-02": {
                "name": "Durrës County",
                "nativeName": "Qarku i Durrësit",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_Durrës.svg"
            },
        }
    },
    "AD": {
        "name": "Andorra",
        "nativeName": "Andorra",
        "regions": {
            "AD-07": {
                "name": "Andorra la Vella",
                "nativeName": "Andorra la Vella",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Andorra_la_Vella.svg"
            },
            "AD-02": {
                "name": "Canillo",
                "nativeName": "Canillo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_Canillo.svg"
            },
            "AD-03": {
                "name": "Encamp",
                "nativeName": "Encamp",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Encamp.svg"
            },
        }
    },
    "AR": {
        "name": "Argentina",
        "nativeName": "Argentina",
        "regions": {
            "AR-C": {
                "name": "Buenos Aires",
                "nativeName": "Buenos Aires",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bandera_de_la_Ciudad_de_Buenos_Aires.svg//128px-Bandera_de_la_Ciudad_de_Buenos_Aires.svg.png"
            },
            "AR-U": {
                "name": "Chubut Province",
                "nativeName": "Chubut",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandera_de_la_Provincia_del_Chubut.svg"
            },
            "AR-E": {
                "name": "Entre Ríos Province",
                "nativeName": "Entre Ríos",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Bandera_de_la_Provincia_de_Entre_Ríos.svg"
            },
            "AR-Q": {
                "name": "Neuquén Province",
                "nativeName": "Neuquén",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Bandera_de_la_Provincia_de_Neuquén.svg"
            },
            "AR-R": {
                "name": "Río Negro Province",
                "nativeName": "Río Negro",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Bandera_de_la_Provincia_del_Río_Negro.svg"
            },
            "AR-Z": {
                "name": "Santa Cruz Province",
                "nativeName": "Santa Cruz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandera_de_la_Provincia_de_Santa_Cruz.svg"
            },
            "AR-V": {
                "name": "Tierra del Fuego Province",
                "nativeName": "Tierra del Fuego",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/94/Bandera_de_la_Provincia_de_Tierra_del_Fuego.svg"
            },
            "AR-A": {
                "name": "Salta Province",
                "nativeName": "Salta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Bandera_de_la_Provincia_de_Salta.svg"
            },
            "AR-B": {
                "name": "Buenos Aires Province",
                "nativeName": "Buenos Aires",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/15/Bandera_de_la_Provincia_de_Buenos_Aires.svg"
            },
            "AR-D": {
                "name": "San Luis Province",
                "nativeName": "San Luis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bandera_de_la_Provincia_de_San_Luis.svg/128px-Bandera_de_la_Provincia_de_San_Luis.svg.png"
            },
            "AR-F": {
                "name": "La Rioja Province",
                "nativeName": "La Rioja",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/60/Bandera_de_la_Provincia_de_La_Rioja.svg"
            },
            "AR-G": {
                "name": "Santiago del Estero Province",
                "nativeName": "Santiago del Estero",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/07/Bandera_de_la_Provincia_de_Santiago_del_Estero.svg"
            },
            "AR-H": {
                "name": "Chaco Province",
                "nativeName": "Chaco",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandera_de_la_Provincia_del_Chaco.svg"
            },
            "AR-J": {
                "name": "San Juan Province",
                "nativeName": "San Juan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Flag_of_the_San_Juan_Province.svg"
            },
            "AR-K": {
                "name": "Catamarca Province",
                "nativeName": "Catamarca",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Bandera_de_la_Provincia_de_Catamarca.svg"
            },
            "AR-L": {
                "name": "La Pampa Province",
                "nativeName": "La Pampa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bandera_de_la_Provincia_de_La_Pampa.svg/128px-Bandera_de_la_Provincia_de_La_Pampa.svg.png"
            },
            "AR-M": {
                "name": "Mendoza Province",
                "nativeName": "Mendoza",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Bandera_de_la_Provincia_de_Mendoza.svg/128px-Bandera_de_la_Provincia_de_Mendoza.svg.png"
            },
            "AR-N": {
                "name": "Misiones Province",
                "nativeName": "Misiones",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bandera_de_la_Provincia_de_Misiones.svg"
            },
            "AR-P": {
                "name": "Formosa Province",
                "nativeName": "Formosa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/42/Bandera_de_la_Provincia_de_Formosa.svg"
            },
            "AR-S": {
                "name": "Santa Fe Province",
                "nativeName": "Santa Fe",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Bandera_de_la_Provincia_de_Santa_Fe.svg"
            },
            "AR-T": {
                "name": "Tucumán Province",
                "nativeName": "Tucumán",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Bandera_de_la_Provincia_de_Tucumán.svg"
            },
            "AR-W": {
                "name": "Corrientes Province",
                "nativeName": "Corrientes",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bandera_de_la_Provincia_de_Corrientes.svg/128px-Bandera_de_la_Provincia_de_Corrientes.svg.png"
            },
            "AR-X": {
                "name": "Córdoba Province",
                "nativeName": "Córdoba",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Bandera_de_la_Provincia_de_Córdoba_2014.svg"
            },
            "AR-Y": {
                "name": "Jujuy Province",
                "nativeName": "Jujuy",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Bandera_de_la_Provincia_de_Jujuy.svg"
            }
        }
    },
    "AU": {
        "name": "Australia",
        "nativeName": "Australia",
        "regions": {
            "AU-NSW": {
                "name": "New South Wales",
                "nativeName": "New South Wales",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_New_South_Wales.svg"
            },
            "AU-QLD": {
                "name": "Queensland",
                "nativeName": "Queensland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Queensland.svg"
            },
            "AU-SA": {
                "name": "South Australia",
                "nativeName": "South Australia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_South_Australia.svg"
            },
            "AU-TAS": {
                "name": "Tasmania",
                "nativeName": "Tasmania",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Tasmania.svg"
            },
            "AU-VIC": {
                "name": "Victoria",
                "nativeName": "Victoria",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Victoria_(Australia).svg"
            },
            "AU-WA": {
                "name": "Western Australia",
                "nativeName": "Western Australia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_Western_Australia.svg"
            },
            "AU-ACT": {
                "name": "Australian Capital Territory",
                "nativeName": "Australian Capital Territory",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_the_Australian_Capital_Territory.svg"
            },
            "AU-NT": {
                "name": "Northern Territory",
                "nativeName": "Northern Territory",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_the_Northern_Territory.svg"
            }
        }
    },
    "AT": {
        "name": "Austria",
        "nativeName": "Österreich",
        "regions": {
            "AT-1": {
                "name": "Burgenland",
                "nativeName": "Burgenland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flag_of_Burgenland_(state).svg//128px-Flag_of_Burgenland_(state).svg.png"
            },
            "AT-2": {
                "name": "Carinthia",
                "nativeName": "Kärnten",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Carinthia_(state).svg"
            },
            "AT-3": {
                "name": "Lower Austria",
                "nativeName": "Niederösterreich",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Lower_Austria_(state).svg"
            },
            "AT-5": {
                "name": "Salzburg",
                "nativeName": "Salzburg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Salzburg_(state).svg"
            },
            "AT-6": {
                "name": "Styria",
                "nativeName": "Steiermark",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Flag_of_Styria_(state).svg//128px-Flag_of_Styria_(state).svg.png"
            },
            "AT-7": {
                "name": "Tyrol",
                "nativeName": "Tirol",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/25/Flag_of_Tirol_(state).svg"
            },
            "AT-4": {
                "name": "Upper Austria",
                "nativeName": "Oberösterreich",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/58/Flag_of_Upper_Austria_(state).svg"
            },
            "AT-9": {
                "name": "Vienna",
                "nativeName": "Wien",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Vienna_(state).svg"
            },
            "AT-8": {
                "name": "Vorarlberg",
                "nativeName": "Vorarlberg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_Vorarlberg_(state).svg"
            }
        }
    },
    "BH": {
        "name": "Bahrain",
        "nativeName": "البحرينAl-Bahrayn",
        "regions": {
            "BH-13": {
                "name": "Capital",
                "nativeName": "محافظة العاصمة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bahrain_Capital_Governorate_Flag.svg/128px-Bahrain_Capital_Governorate_Flag.svg.png"
            },
            "BH-15": {
                "name": "Muharraq",
                "nativeName": "محافظة المحرق",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Bahrain_Muharraq_Governorate_Flag.svg"
            },
            "BH-14": {
                "name": "Southern Governorate",
                "nativeName": "المحافظة الجنوبية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bahrain_Southern_Governorate_Flag.svg"
            },
            "BH-17": {
                "name": "Northern Governorate",
                "nativeName": "المحافظة الشمالية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Bahrain_Northern_Governorate_Flag.svg"
            }
        }
    },
    "BY": {
        "name": "Belarus",
        "nativeName": "Беларусь",
        "regions": {
            "BY-BR": {
                "name": "Brest Region",
                "nativeName": "Брэсцкая вобласць",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Brest_Voblast,_Belarus.svg"
            },
            "BY-HO": {
                "name": "Gomel Region",
                "nativeName": "Гомельская вобласць",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Homyel_Voblast.svg/128px-Flag_of_Homyel_Voblast.svg.png"
            },
            "BY-HR": {
                "name": "Grodno Region",
                "nativeName": "Гродзенская вобласць",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Hrodna_Voblasts.svg"
            },
            "BY-MI": {
                "name": "Minsk Region",
                "nativeName": "Мінская вобласць",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_Minsk_Voblast.svg//128px-Flag_of_Minsk_Voblast.svg.png"
            },
            "BY-MA": {
                "name": "Mogilev Region",
                "nativeName": "Магілёўская вобласць",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Mahilyow_Voblast.svg"
            },
            "BY-VI": {
                "name": "Vitebsk Region",
                "nativeName": "Віцебская вобласць",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_Vitsebsk_region.svg"
            }
        }
    },
    "BE": {
        "name": "Belgium",
        "nativeName": "België",
        "regions": {
            "BE-VAN": {
                "name": "Antwerp",
                "nativeName": "Antwerpen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Antwerp.svg"
            },
            "BE-BRU": {
                "name": "Brussels-Capital",
                "nativeName": "Gewest",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Brussels-Capital_Region.svg"
            },
            "BE-VOV": {
                "name": "East Flanders",
                "nativeName": "Oost-Vlaanderen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Flag_of_Oost-Vlaanderen.svg"
            },
            "BE-VBR": {
                "name": "Flemish Brabant",
                "nativeName": "Vlaams-Brabant",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Flemish_Brabant.svg"
            },
            "BE-WHT": {
                "name": "Hainaut",
                "nativeName": "Hainaut",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Hainaut.svg"
            },
            "BE-VLI": {
                "name": "Limburg",
                "nativeName": "Limburg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_Limburg_(Belgium).svg"
            },
            "BE-WLG": {
                "name": "Liège",
                "nativeName": "Liège",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Province_of_Liège.svg"
            },
            "BE-WLX": {
                "name": "Luxembourg",
                "nativeName": "Luxembourg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Official_flag_of_the_Province_of_Luxembourg.svg"
            },
            "BE-WNA": {
                "name": "Namur",
                "nativeName": "BE-WNA",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namur_Province.svg"
            },
            "BE-WBR": {
                "name": "Walloon Brabant",
                "nativeName": "Brabant wallon",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/47/Drapeau_Province_BE_Brabant_Wallon.svg"
            },
            "BE-VWV": {
                "name": "West Flanders",
                "nativeName": "West-Vlaanderen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Flag_of_West_Flanders.svg"
            }
        }
    },
    "BO": {
        "name": "Bolivia",
        "nativeName": "Wuliwya",
        "regions": {
            "BO-B": {
                "name": "Beni",
                "nativeName": "Beni",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Beni_Department,_Bolivia.svg"
            },
            "BO-H": {
                "name": "Chuquisaca",
                "nativeName": "Chuquisaca",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_Chuquisaca_&_Sucre.svg"
            },
            "BO-C": {
                "name": "Cochabamba",
                "nativeName": "Cochabamba",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Cochabamba.svg"
            },
            "BO-L": {
                "name": "La Paz",
                "nativeName": "La Paz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_La_paz.svg"
            },
            "BO-O": {
                "name": "Oruro",
                "nativeName": "Oruro",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Oruro.svg"
            },
            "BO-N": {
                "name": "Pando",
                "nativeName": "Pando",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Pando.svg"
            },
            "BO-P": {
                "name": "Potosí",
                "nativeName": "Potosí",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Potosí.svg"
            },
            "BO-S": {
                "name": "Santa Cruz",
                "nativeName": "Santa Cruz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Santa_Cruz.svg"
            },
            "BO-T": {
                "name": "Tarija",
                "nativeName": "Tarija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_Tarija.svg"
            }
        }
    },
    "BA": {
        "name": "Bosnia and Herzegovina",
        "nativeName": "Bosnia I Hercegovína",
        "regions": {
            "BA-SRP": {
                "name": "Republika Srpska",
                "nativeName": "Република Српска ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/61/Flag_of_the_Republika_Srpska.svg"
            },
            "BA-BRC": {
                "name": "Brčko District",
                "nativeName": "Brčko distrikt",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg"
            },
            "BA-BIH": {
                "name": "Federation of Bosnia and Herzegovina",
                "nativeName": "Federacija Bosne i Hercegovine",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_the_Federation_of_Bosnia_and_Herzegovina_(1996–2007).svg"
            }
        }
    },
    "BR": {
        "name": "Brazil",
        "nativeName": "Brasil",
        "regions": {
            "BR-AC": {
                "name": "Acre",
                "nativeName": "Acre",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg"
            },
            "BR-AL": {
                "name": "Alagoas",
                "nativeName": "Alagoas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bandeira_de_Alagoas.svg//128px-Bandeira_de_Alagoas.svg.png"
            },
            "BR-AP": {
                "name": "Amapá",
                "nativeName": "Amapá",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amapá.svg"
            },
            "BR-AM": {
                "name": "Amazonas",
                "nativeName": "Amazonas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg"
            },
            "BR-BA": {
                "name": "Bahia",
                "nativeName": "Bahia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg"
            },
            "BR-CE": {
                "name": "Ceará",
                "nativeName": "Ceará",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Ceará.svg"
            },
            "BR-ES": {
                "name": "Espírito Santo",
                "nativeName": "Espírito Santo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Espírito_Santo.svg"
            },
            "BR-GO": {
                "name": "Goiás",
                "nativeName": "Goiás",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goiás.svg"
            },
            "BR-MA": {
                "name": "Maranhão",
                "nativeName": "Maranhão",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranhão.svg"
            },
            "BR-MT": {
                "name": "Mato Grosso",
                "nativeName": "Mato Grosso",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg"
            },
            "BR-MS": {
                "name": "Mato Grosso do Sul",
                "nativeName": "Mato Grosso do Sul",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg"
            },
            "BR-MG": {
                "name": "Minas Gerais",
                "nativeName": "Minas Gerais",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg"
            },
            "BR-PA": {
                "name": "Pará",
                "nativeName": "Pará",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Pará.svg"
            },
            "BR-PB": {
                "name": "Paraíba",
                "nativeName": "Paraíba",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Paraíba.svg"
            },
            "BR-PR": {
                "name": "Paraná",
                "nativeName": "Paraná",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bandeira_do_Paraná.svg//128px-Bandeira_do_Paraná.svg.png"
            },
            "BR-PE": {
                "name": "Pernambuco",
                "nativeName": "Pernambuco",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg"
            },
            "BR-PI": {
                "name": "Piauí",
                "nativeName": "Piauí",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piauí.svg"
            },
            "BR-RJ": {
                "name": "Rio de Janeiro",
                "nativeName": "Rio de Janeiro",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg//128px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png"
            },
            "BR-RS": {
                "name": "Rio Grande do Sul",
                "nativeName": "Rio Grande do Sul",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandeira_do_Rio_Grande_do_Sul.svg//128px-Bandeira_do_Rio_Grande_do_Sul.svg.png"
            },
            "BR-RO": {
                "name": "Rondônia",
                "nativeName": "Rondônia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rondônia.svg"
            },
            "BR-RR": {
                "name": "Roraima",
                "nativeName": "Roraima",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg"
            },
            "BR-SC": {
                "name": "Santa Catarina",
                "nativeName": "Santa Catarina",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg"
            },
            "BR-SP": {
                "name": "São Paulo",
                "nativeName": "São Paulo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_São_Paulo.svg"
            },
            "BR-SE": {
                "name": "Sergipe",
                "nativeName": "Sergipe",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg"
            },
            "BR-TO": {
                "name": "Tocantins",
                "nativeName": "Tocantins",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg"
            },
            "BR-DF": {
                "name": "Federal District",
                "nativeName": "Distrito Federal",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_(Brasil).svg"
            },
            "BR-RN": {
                "name": "Rio Grande do Norte",
                "nativeName": "Rio Grande do Norte",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandeira_do_Rio_Grande_do_Norte.svg/128px-Bandeira_do_Rio_Grande_do_Norte.svg.png"
            }
        }
    },
    "CA": {
        "name": "Canada",
        "nativeName": "Canada",
        "regions": {
            "CA-AB": {
                "name": "Alberta",
                "nativeName": "Alberta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_Alberta.svg"
            },
            "CA-BC": {
                "name": "British Columbia",
                "nativeName": "British Columbia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_British_Columbia.svg"
            },
            "CA-MB": {
                "name": "Manitoba",
                "nativeName": "Manitoba",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Manitoba.svg"
            },
            "CA-NB": {
                "name": "New Brunswick",
                "nativeName": "Nouveau-Brunswick",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_New_Brunswick.svg"
            },
            "CA-NL": {
                "name": "Newfoundland and Labrador",
                "nativeName": "Newfoundland and Labrador",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Newfoundland_and_Labrador.svg"
            },
            "CA-NS": {
                "name": "Nova Scotia",
                "nativeName": "Nova Scotia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Nova_Scotia.svg"
            },
            "CA-ON": {
                "name": "Ontario",
                "nativeName": "Ontario",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Ontario.svg"
            },
            "CA-PE": {
                "name": "Prince Edward Island",
                "nativeName": "Prince Edward Island",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_Prince_Edward_Island.svg//128px-Flag_of_Prince_Edward_Island.svg.png"
            },
            "CA-QC": {
                "name": "Quebec",
                "nativeName": "Québec",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Quebec.svg"
            },
            "CA-SK": {
                "name": "Saskatchewan",
                "nativeName": "Saskatchewan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_Saskatchewan.svg"
            },
            "CA-NT": {
                "name": "Northwest Territories",
                "nativeName": "Northwest Territories",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_the_Northwest_Territories.svg"
            },
            "CA-NU": {
                "name": "Nunavut",
                "nativeName": "ᓄᓇᕗᑦ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Nunavut.svg"
            },
            "CA-YT": {
                "name": "Yukon",
                "nativeName": "Yukon",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Yukon.svg"
            }
        }
    },
    "CL": {
        "name": "Chile",
        "nativeName": "Chile",
        "regions": {
            "CL-AN": {
                "name": "Antofagasta Region",
                "nativeName": "Región de Antofagasta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Flag_of_Antofagasta_Region,_Chile.svg//128px-Flag_of_Antofagasta_Region,_Chile.svg.png"
            },
            "CL-AR": {
                "name": "Araucanía Region",
                "nativeName": "Región de la Araucanía",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_La_Araucanía_Region.svg//128px-Flag_of_La_Araucanía_Region.svg.png"
            },
            "CL-AT": {
                "name": "Atacama Region",
                "nativeName": "Región de Atacama",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Atacama,_Chile.svg"
            },
            "CL-AI": {
                "name": "Aysén Region",
                "nativeName": "Región Aysén del General Carlos Ibáñez del Campo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Aysen,_Chile.svg"
            },
            "CL-BI": {
                "name": "Biobío Region",
                "nativeName": "Región del Biobío",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Biobío_Region,_Chile.svg//128px-Flag_of_Biobío_Region,_Chile.svg.png"
            },
            "CL-CO": {
                "name": "Coquimbo Region",
                "nativeName": "Región de Coquimbo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Flag_of_Coquimbo_Region,_Chile.svg"
            },
            "CL-LL": {
                "name": "Los Lagos Region",
                "nativeName": "Región de Los Lagos",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/16/Flag_of_Los_Lagos_Region,_Chile.svg"
            },
            "CL-LR": {
                "name": "Los Ríos Region",
                "nativeName": "Región de Los Ríos",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Los_Ríos,_Chile.svg"
            },
            "CL-MA": {
                "name": "Magallanes Region",
                "nativeName": "Región de Magallanes y de la Antártica Chilena",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Magallanes,_Chile.svg"
            },
            "CL-ML": {
                "name": "Maule Region",
                "nativeName": "Región del Maule",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Maule,_Chile.svg"
            },
            "CL-RM": {
                "name": "Santiago Metropolitan Region",
                "nativeName": "Región Metropolitana de Santiago",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_the_Metropolitan_Region,_Chile.svg"
            },
            "CL-NB": {
                "name": "Ñuble Region",
                "nativeName": "Región de Ñuble",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Ñuble_Region,_Chile.svg//128px-Flag_of_Ñuble_Region,_Chile.svg.png"
            },
            "CL-LI": {
                "name": "O'Higgins Region",
                "nativeName": "Región del Libertador General Bernardo O'Higgins",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_O'Higgins_Region,_Chile.svg"
            },
            "CL-TA": {
                "name": "Tarapacá Region",
                "nativeName": "Región de Tarapacá",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_Tarapaca,_Chile.svg//128px-Flag_of_Tarapaca,_Chile.svg.png"
            },
            "CL-VS": {
                "name": "Valparaíso Region",
                "nativeName": "Región de Valparaíso",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Valparaiso_Region,_Chile.svg//128px-Flag_of_Valparaiso_Region,_Chile.svg.png"
            },
            "CL-AP": {
                "name": "Arica and Parinacota Region",
                "nativeName": "Región de Arica y Parinacota",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Arica_y_Parinacota,_Chile.svg"
            }
        }
    },
    "CN": {
        "name": "China",
        "nativeName": "中国",
        "regions": {
            "CN-AH": {
                "name": "Anhui",
                "nativeName": "安徽省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-AH.png"
            },
            "CN-BJ": {
                "name": "Beijing",
                "nativeName": "北京市",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-BJ.png"
            },
            "CN-CQ": {
                "name": "Chongqing",
                "nativeName": "重庆市",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-CQ.png"
            },
            "CN-FJ": {
                "name": "Fujian",
                "nativeName": "福建省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-FJ.png"
            },
            "CN-GS": {
                "name": "Gansu",
                "nativeName": "甘肃省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-GS.png"
            },
            "CN-GD": {
                "name": "Guangdong Province",
                "nativeName": "广东省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-GD.png"
            },
            "CN-GX": {
                "name": "Guangxi",
                "nativeName": "广西壮族自治区",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-GX.png"
            },
            "CN-GZ": {
                "name": "Guizhou",
                "nativeName": "贵州省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-GZ.png"
            },
            "CN-HI": {
                "name": "Hainan Province",
                "nativeName": "海南省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-HI.png"
            },
            "CN-HE": {
                "name": "Hebei",
                "nativeName": "河北省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-HE.png"
            },
            "CN-HL": {
                "name": "Heilongjiang",
                "nativeName": "黑龙江省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-HL.png"
            },
            "CN-HA": {
                "name": "Henan",
                "nativeName": "河南省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-HA.png"
            },
            "CN-HB": {
                "name": "Hubei",
                "nativeName": "湖北省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-HB.png"
            },
            "CN-HN": {
                "name": "Hunan",
                "nativeName": "湖南省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-HN.png"
            },
            "CN-NM": {
                "name": "Inner Mongolia",
                "nativeName": "内蒙古自治区",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-NM.png"
            },
            "CN-JS": {
                "name": "Jiangsu",
                "nativeName": "江苏省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-JS.png"
            },
            "CN-JX": {
                "name": "Jiangxi",
                "nativeName": "江西省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-JX.png"
            },
            "CN-JL": {
                "name": "Jilin",
                "nativeName": "吉林省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-JL.png"
            },
            "CN-LN": {
                "name": "Liaoning",
                "nativeName": "辽宁省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-LN.png"
            },
            "CN-NX": {
                "name": "Ningxia",
                "nativeName": "宁夏回族自治区",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-NX.png"
            },
            "CN-QH": {
                "name": "Qinghai",
                "nativeName": "青海省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-QH.png"
            },
            "CN-SN": {
                "name": "Shaanxi",
                "nativeName": "陕西省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-SN.png"
            },
            "CN-SD": {
                "name": "Shandong",
                "nativeName": "山东省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-SD.png"
            },
            "CN-SH": {
                "name": "Shanghai",
                "nativeName": "上海市",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-SH.png"
            },
            "CN-SX": {
                "name": "Shanxi",
                "nativeName": "山西省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-SX.png"
            },
            "CN-SC": {
                "name": "Sichuan",
                "nativeName": "四川省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-SC.png"
            },
            "CN-TJ": {
                "name": "Tianjin",
                "nativeName": "天津市",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-TJ.png"
            },
            "CN-XZ": {
                "name": "Tibet",
                "nativeName": "西藏自治区",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-XZ.png"
            },
            "CN-XJ": {
                "name": "Xinjiang",
                "nativeName": "新疆维吾尔自治区",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-XJ.png"
            },
            "CN-YN": {
                "name": "Yunnan",
                "nativeName": "云南省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-YN.png"
            },
            "CN-ZJ": {
                "name": "Zhejiang",
                "nativeName": "浙江省",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/cn/CN-ZJ.png"
            }
        }
    },
    "CO": {
        "name": "Colombia",
        "nativeName": "Colombia",
        "regions": {
            "CO-DC": {
                "name": "Bogotá",
                "nativeName": "Bogotá, Distrito Capital",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Bogotá.svg"
            },
            "CO-AMA": {
                "name": "Amazonas",
                "nativeName": "Amazonas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Amazonas_(Colombia).svg"
            },
            "CO-ANT": {
                "name": "Antioquia",
                "nativeName": "Antioquia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/33/Flag_of_Antioquia_Department.svg"
            },
            "CO-ARA": {
                "name": "Arauca",
                "nativeName": "Arauca",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Flag_of_Arauca.svg"
            },
            "CO-ATL": {
                "name": "Atlántico",
                "nativeName": "Atlántico",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Flag_of_Atlántico.svg"
            },
            "CO-BOL": {
                "name": "Bolívar",
                "nativeName": "Bolívar",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Bolívar_(Colombia).svg"
            },
            "CO-BOY": {
                "name": "Boyacá",
                "nativeName": "Boyacá",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Boyacá_Department.svg"
            },
            "CO-CAL": {
                "name": "Caldas",
                "nativeName": "Caldas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_Caldas.svg"
            },
            "CO-CAQ": {
                "name": "Caquetá",
                "nativeName": "Caquetá",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Flag_of_Caquetá.svg"
            },
            "CO-CAS": {
                "name": "Casanare",
                "nativeName": "Casanare",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Casanare.svg"
            },
            "CO-CAU": {
                "name": "Cauca",
                "nativeName": "Cauca",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_Cauca.svg"
            },
            "CO-CES": {
                "name": "Cesar",
                "nativeName": "Cesar",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Cesar.svg"
            },
            "CO-CHO": {
                "name": "Chocó",
                "nativeName": "Chocó",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_Chocó.svg"
            },
            "CO-COR": {
                "name": "Córdoba",
                "nativeName": "Córdoba",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Córdoba.svg"
            },
            "CO-CUN": {
                "name": "Cundinamarca",
                "nativeName": "Cundinamarca",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Cundinamarca.svg/128px-Flag_of_Cundinamarca.svg.png"
            },
            "CO-GUA": {
                "name": "Guainía",
                "nativeName": "Guainía",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Guainía.svg"
            },
            "CO-GUV": {
                "name": "Guaviare",
                "nativeName": "Guaviare",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Guaviare.svg/128px-Flag_of_Guaviare.svg.png"
            },
            "CO-HUI": {
                "name": "Huila",
                "nativeName": "Huila",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Flag_of_Huila.svg"
            },
            "CO-LAG": {
                "name": "La Guajira",
                "nativeName": "La Guajira",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_La_Guajira.svg"
            },
            "CO-MAG": {
                "name": "Magdalena",
                "nativeName": "Magdalena",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/18/Flag_of_Magdalena.svg"
            },
            "CO-MET": {
                "name": "Meta",
                "nativeName": "Meta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_Meta.svg"
            },
            "CO-NAR": {
                "name": "Nariño",
                "nativeName": "Nariño",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_Nariño.svg"
            },
            "CO-NSA": {
                "name": "Norte de Santander",
                "nativeName": "Norte de Santander",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Norte_de_Santander.svg"
            },
            "CO-PUT": {
                "name": "Putumayo",
                "nativeName": "Putumayo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_Putumayo.svg"
            },
            "CO-QUI": {
                "name": "Quindío",
                "nativeName": "Quindío",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Quindío.svg"
            },
            "CO-RIS": {
                "name": "Risaralda",
                "nativeName": "Risaralda",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Risaralda.svg"
            },
            "CO-SAN": {
                "name": "Santander",
                "nativeName": "Santander",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Santander_Department.svg"
            },
            "CO-SAP": {
                "name": "San Andrés and Providencia",
                "nativeName": "Archipelago of Saint Andrew, Providence and Saint Catherine",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_San_Andrés_y_Providencia.svg"
            },
            "CO-SUC": {
                "name": "Sucre",
                "nativeName": "Sucre",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Flag_of_Sucre_(Colombia).svg/128px-Flag_of_Sucre_(Colombia).svg.png"
            },
            "CO-TOL": {
                "name": "Tolima",
                "nativeName": "Tolima",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Tolima.svg"
            },
            "CO-VAC": {
                "name": "Valle del Cauca",
                "nativeName": "Valle del Cauca",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Valle_del_Cauca.svg"
            },
            "CO-VAU": {
                "name": "Vaupés",
                "nativeName": "Vaupés",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Vaupés.svg"
            },
            "CO-VID": {
                "name": "Vichada",
                "nativeName": "Vichada",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Vichada.svg"
            }
        }
    },
    "CR": {
        "name": "Costa Rica",
        "nativeName": "Costa Rica",
        "regions": {
            "CR-A": {
                "name": "Alajuela Province",
                "nativeName": "Provincia Alajuela",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bandera_de_la_Provincia_de_Alajuela.svg/128px-Bandera_de_la_Provincia_de_Alajuela.svg.png"
            },
            "CR-C": {
                "name": "Cartago Province",
                "nativeName": "Provincia Cartago",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Bandera_de_la_Provincia_de_Cartago.svg"
            },
            "CR-H": {
                "name": "Heredia Province",
                "nativeName": "Provincia Heredia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bandera_de_la_Provincia_de_Heredia.svg/128px-Bandera_de_la_Provincia_de_Heredia.svg.png"
            },
            "CR-L": {
                "name": "Limón Province",
                "nativeName": "Provincia Limón",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Bandera_de_la_Provincia_de_Limón.svg"
            },
            "CR-P": {
                "name": "Puntarenas Province",
                "nativeName": "Provincia Puntarenas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Bandera_de_la_Provincia_de_Puntarenas.svg"
            },
            "CR-SJ": {
                "name": "San José Province",
                "nativeName": "Provincia San José",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Bandera_de_la_Provincia_de_San_José.svg"
            },
            "CR-G": {
                "name": "Provincia Guanacaste",
                "nativeName": "Provincia Guanacaste",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/04/Bandera_de_la_Provincia_de_Guanacaste.svg"
            }
        }
    },
    "HR": {
        "name": "Croatia",
        "nativeName": "Hrvatska",
        "regions": {
            "HR-07": {
                "name": "Bjelovar-Bilogora County",
                "nativeName": "Bjelovarsko-bilogorska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Zastava_bjelovarsko_bilogorske_zupanije.gif/200px-Zastava_bjelovarsko_bilogorske_zupanije.gif"
            },
            "HR-12": {
                "name": "Brod-Posavina County",
                "nativeName": "Brodsko-posavska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/25/Flag_of_Brod-Posavina_County.svg"
            },
            "HR-19": {
                "name": "Dubrovnik-Neretva County",
                "nativeName": "Dubrovačko-neretvanska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Flag_of_Dubrovnik-Neretva_County.png/200px-Flag_of_Dubrovnik-Neretva_County.png"
            },
            "HR-18": {
                "name": "Istria County",
                "nativeName": "Istarska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Zastava_Istarske_županije.svg"
            },
            "HR-04": {
                "name": "Karlovac County",
                "nativeName": "Karlovačka županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/44/Flag_of_Karlovac_county.svg"
            },
            "HR-06": {
                "name": "Koprivnica-Križevci County",
                "nativeName": "Koprivničko-križevačka županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Koprivnica-Križevci_County.png/200px-Flag_of_Koprivnica-Križevci_County.png"
            },
            "HR-02": {
                "name": "Krapina-Zagorje County",
                "nativeName": "Krapinsko-zagorska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_Krapina-Zagorje-County.svg"
            },
            "HR-09": {
                "name": "Lika-Senj County",
                "nativeName": "Ličko-senjska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Lika-Senj_County.svg"
            },
            "HR-20": {
                "name": "Međimurje County",
                "nativeName": "Međimurska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flag_of_Medjimurje.svg"
            },
            "HR-14": {
                "name": "Osijek-Baranja County",
                "nativeName": "Osječko-baranjska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Osijek_and_Baranya_County.svg"
            },
            "HR-11": {
                "name": "Požega-Slavonia County",
                "nativeName": "Požeško-slavonska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Požega-Slavonia_County.png/200px-Flag_of_Požega-Slavonia_County.png"
            },
            "HR-08": {
                "name": "Primorje-Gorski Kotar County",
                "nativeName": "Primorsko-goranska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Primorje-Gorski_Kotar_County.png/200px-Flag_of_Primorje-Gorski_Kotar_County.png"
            },
            "HR-03": {
                "name": "Sisak-Moslavina County",
                "nativeName": "Sisačko-moslavačka županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_Sisak-Moslavina_County.png/200px-Flag_of_Sisak-Moslavina_County.png"
            },
            "HR-17": {
                "name": "Split-Dalmatia County",
                "nativeName": "Splitsko-dalmatinska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Flag_of_Split-Dalmatia_County.svg"
            },
            "HR-15": {
                "name": "Šibenik-Knin County",
                "nativeName": "Šibensko-kninska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_Šibenik_County.svg"
            },
            "HR-05": {
                "name": "Varaždin County",
                "nativeName": "Varaždinska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Varaždin_County.png/225px-Flag_of_Varaždin_County.png"
            },
            "HR-10": {
                "name": "Virovitica-Podravina County",
                "nativeName": "Virovitičko-podravska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Virovitica-Podravina_County.png/200px-Flag_of_Virovitica-Podravina_County.png"
            },
            "HR-16": {
                "name": "Vukovar-Srijem County",
                "nativeName": "Vukovarsko-srijemska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Vukovar-Syrmia_County.svg"
            },
            "HR-13": {
                "name": "Zadar County",
                "nativeName": "Zadarska županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Zadar_County.png/200px-Flag_of_Zadar_County.png"
            },
            "HR-01": {
                "name": "Zagreb County",
                "nativeName": "Zagrebačka županija",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Zagreb_County.svg"
            },
            "HR-21": {
                "name": "Zagreb",
                "nativeName": "Grad Zagreb",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_Zagreb.svg"
            }
        }
    },
    "CZ": {
        "name": "Czech Republic",
        "nativeName": "Česko",
        "regions": {
            "CZ-53": {
                "name": "Pardubice",
                "nativeName": "Pardubický kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Pardubice_Region.svg/128px-Flag_of_Pardubice_Region.svg.png"
            },
            "CZ-10": {
                "name": "Prague",
                "nativeName": "Hlavní město Praha",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Prague.svg"
            },
            "CZ-63": {
                "name": "Vysočina",
                "nativeName": "Kraj Vysočina",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Flag_of_Vysocina_Region.svg//128px-Flag_of_Vysocina_Region.svg.png"
            },
            "CZ-72": {
                "name": "Zlín",
                "nativeName": "Zlínský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Zlin_Region.svg"
            },
            "CZ-31": {
                "name": "South Bohemia",
                "nativeName": "Jihočeský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_South_Bohemian_Region.svg/128px-Flag_of_South_Bohemian_Region.svg.png"
            },
            "CZ-64": {
                "name": "South Moravia",
                "nativeName": "Jihomoravský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_South_Moravian_Region.svg/128px-Flag_of_South_Moravian_Region.svg.png"
            },
            "CZ-41": {
                "name": "Karlovy Vary",
                "nativeName": "Karlovarský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Karlovy_Vary_Region.svg/128px-Flag_of_Karlovy_Vary_Region.svg.png"
            },
            "CZ-52": {
                "name": "Hradec Králové",
                "nativeName": "Královéhradecký kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Hradec_Kralove_Region.svg/128px-Flag_of_Hradec_Kralove_Region.svg.png"
            },
            "CZ-51": {
                "name": "Liberec",
                "nativeName": "Liberecký kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Liberec_Region.svg/128px-Flag_of_Liberec_Region.svg.png"
            },
            "CZ-80": {
                "name": "Moravia-Silesia",
                "nativeName": "Moravskoslezský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Moravian-Silesian_Region.svg/128px-Flag_of_Moravian-Silesian_Region.svg.png"
            },
            "CZ-71": {
                "name": "Olomouc",
                "nativeName": "Olomoucký kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Olomouc_Region.svg"
            },
            "CZ-32": {
                "name": "Plzeň",
                "nativeName": "Plzeňský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Plzen_Region.svg/128px-Flag_of_Plzen_Region.svg.png"
            },
            "CZ-20": {
                "name": "Central Bohemia",
                "nativeName": "Středočeský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Central_Bohemian_Region.svg/128px-Flag_of_Central_Bohemian_Region.svg.png"
            },
            "CZ-42": {
                "name": "Ústí nad Labem",
                "nativeName": "Ústecký kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_Usti_nad_Labem_Region.svg/128px-Flag_of_Usti_nad_Labem_Region.svg.png"
            }
        }
    },
    "DK": {
        "name": "Denmark",
        "nativeName": "Danmark",
        "regions": {
            "DK-84": {
                "name": "Capital Region of Denmark",
                "nativeName": "Region Hovedstaden",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_the_Capital_Region_of_Denmark.svg"
            },
            "DK-82": {
                "name": "Central Denmark Region",
                "nativeName": "Region Midtjylland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Region_Midtjylland.svg"
            },
            "DK-81": {
                "name": "North Jutland Region",
                "nativeName": "Region Nordjylland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Region_Nordjylland.svg"
            },
            "DK-85": {
                "name": "Region Zealand",
                "nativeName": "Region Sjælland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_Region_Sjælland.svg"
            },
            "DK-83": {
                "name": "Region of Southern Denmark",
                "nativeName": "Region Syddanmark",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_Region_Syddanmark.svg"
            }
        }
    },
    "EC": {
        "name": "Ecuador",
        "nativeName": "Ecuador",
        "regions": {
            "EC-A": {
                "name": "Azuay",
                "nativeName": "Azuay",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Bandera_Provincia_Azuay.svg"
            },
            "EC-B": {
                "name": "Bolívar",
                "nativeName": "Bolívar",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Bandera_Provincia_Bolívar.svg"
            },
            "EC-F": {
                "name": "Cañar",
                "nativeName": "Cañar",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/85/Bandera_Provincia_Cañar.svg"
            },
            "EC-C": {
                "name": "Carchi",
                "nativeName": "Carchi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/97/Bandera_Provincia_Carchi.svg"
            },
            "EC-H": {
                "name": "Chimborazo",
                "nativeName": "Chimborazo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Bandera_Provincia_Chimborazo.svg//128px-Bandera_Provincia_Chimborazo.svg.png"
            },
            "EC-X": {
                "name": "Cotopaxi",
                "nativeName": "Cotopaxi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/86/Bandera_Provincia_Cotopaxi.svg"
            },
            "EC-O": {
                "name": "El Oro",
                "nativeName": "El Oro",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Bandera_Provincia_El_Oro.svg"
            },
            "EC-E": {
                "name": "Esmeraldas",
                "nativeName": "Esmeraldas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/91/Bandera_Provincia_Esmeraldas.svg"
            },
            "EC-W": {
                "name": "Galápagos",
                "nativeName": "Galápagos",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/19/Bandera_Provincia_Galápagos.svg"
            },
            "EC-G": {
                "name": "Guayas",
                "nativeName": "Guayas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Bandera_Provincia_Guayas.svg"
            },
            "EC-I": {
                "name": "Imbabura",
                "nativeName": "Imbabura",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Bandera_Provincia_Imbabura.svg"
            },
            "EC-L": {
                "name": "Loja",
                "nativeName": "Loja",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/97/Bandera_Provincia_Loja.svg"
            },
            "EC-R": {
                "name": "Los Ríos",
                "nativeName": "Los Ríos",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Bandera_Provincia_Los_Ríos.svg"
            },
            "EC-M": {
                "name": "Manabí",
                "nativeName": "Manabí",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/68/Bandera_Provincia_Manabí.svg"
            },
            "EC-S": {
                "name": "Morona-Santiago",
                "nativeName": "Morona Santiago",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Bandera_Provincia_Morona_Santiago.svg"
            },
            "EC-N": {
                "name": "Napo",
                "nativeName": "Napo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Bandera_Provincia_Napo.svg"
            },
            "EC-D": {
                "name": "Orellana",
                "nativeName": "Orellana",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Bandera_Provincia_Orellana.svg"
            },
            "EC-Y": {
                "name": "Pastaza",
                "nativeName": "Pastaza",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Bandera_Provincia_Pastaza.svg"
            },
            "EC-P": {
                "name": "Pichincha",
                "nativeName": "Pichincha",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bandera_Provincia_Pichincha.svg//128px-Bandera_Provincia_Pichincha.svg.png"
            },
            "EC-SE": {
                "name": "Santa Elena",
                "nativeName": "Santa Elena",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Santa_Elena_flag.png/133px-Santa_Elena_flag.png"
            },
            "EC-SD": {
                "name": "Santo Domingo de los Tsáchilas",
                "nativeName": "Santo Domingo de los Tsáchilas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bandera_Provincia_Santo_Domingo_de_los_Tsáchilas.svg"
            },
            "EC-U": {
                "name": "Sucumbíos",
                "nativeName": "Sucumbíos",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Bandera_Provincia_Sucumbíos.svg"
            },
            "EC-T": {
                "name": "Tungurahua",
                "nativeName": "Tungurahua",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/62/Bandera_Provincia_Tungurahua.svg"
            },
            "EC-Z": {
                "name": "Zamora-Chinchipe",
                "nativeName": "Zamora Chinchipe",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/58/Bandera_Provincia_Zamora_Chinchipe.svg"
            }
        }
    },
    "EG": {
        "name": "Egypt",
        "nativeName": "مصرMisr",
        "regions": {
            "EG-ALX": {
                "name": "Alexandria Governorate",
                "nativeName": "الإسكندرية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alexandria.svg"
            },
            "EG-ASN": {
                "name": "Aswan Governorate",
                "nativeName": "أسوان",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Flag_of_Aswan_Governorate.png/148px-Flag_of_Aswan_Governorate.png"
            },
            "EG-AST": {
                "name": "Asyut Governorate",
                "nativeName": "أسيوط",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Flag_of_Asyut_Governorate.png/150px-Flag_of_Asyut_Governorate.png"
            },
            "EG-BH": {
                "name": "Beheira Governorate",
                "nativeName": "البحيرة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_Behira_Govenorate.svg"
            },
            "EG-BNS": {
                "name": "Beni Suef Governorate",
                "nativeName": "بنى سويف",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/26/Beni_Suef_Governorate_New_Flag.svg"
            },
            "EG-C": {
                "name": "Cairo Governorate",
                "nativeName": "القاهرة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Cairo.svg"
            },
            "EG-DK": {
                "name": "Dakahlia Governorate",
                "nativeName": "الدقهلية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/23/DakahliaFlag.svg"
            },
            "EG-DT": {
                "name": "Damietta Governorate",
                "nativeName": "دمياط",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Damietta_Governorate.svg"
            },
            "EG-FYM": {
                "name": "Faiyum Governorate",
                "nativeName": "الفيوم",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Governadorat_de_Faium.png/150px-Governadorat_de_Faium.png"
            },
            "EG-GH": {
                "name": "Gharbia Governorate",
                "nativeName": "الغربية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Governadorat_de_Gharbiya.png/150px-Governadorat_de_Gharbiya.png"
            },
            "EG-GZ": {
                "name": "Giza Governorate",
                "nativeName": "الجيزة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Giza_Governorate.png/150px-Flag_of_Giza_Governorate.png"
            },
            "EG-IS": {
                "name": "Ismailia Governorate",
                "nativeName": "الإسماعيلية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Governadorat_d'Ismailiya.png/150px-Governadorat_d'Ismailiya.png"
            },
            "EG-KFS": {
                "name": "Kafr El Sheikh Governorate",
                "nativeName": "كفر الشيخ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_Kafr_El-Sheikh_Governorate.svg"
            },
            "EG-LX": {
                "name": "Luxor Governorate",
                "nativeName": "الأقصر",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Eg_luxor1.png/133px-Eg_luxor1.png"
            },
            "EG-MT": {
                "name": "Matrouh Governorate",
                "nativeName": "مطروح",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Matrouh_Governorate-logo.PNG/190px-Matrouh_Governorate-logo.PNG"
            },
            "EG-MN": {
                "name": "Minya Governorate",
                "nativeName": "المنيا",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Minya_Governorate.jpg/160px-Flag_of_Minya_Governorate.jpg"
            },
            "EG-MNF": {
                "name": "Monufia Governorate",
                "nativeName": "المنوفية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Menoufia_Governorate.PNG/156px-Flag_of_Menoufia_Governorate.PNG"
            },
            "EG-WAD": {
                "name": "New Valley Governorate",
                "nativeName": "الوادي الجديد",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_New_Valley_Governorate.png/162px-Flag_of_New_Valley_Governorate.png"
            },
            "EG-SIN": {
                "name": "North Sinai Governorate",
                "nativeName": "شمال سيناء",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/79/North_Sinai_(New_Flag).svg"
            },
            "EG-PTS": {
                "name": "Port Said Governorate",
                "nativeName": "بورسعيد",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Port_Said_Flag_Version_2.svg"
            },
            "EG-KB": {
                "name": "Qalyubiyya Governorate",
                "nativeName": "القليوبية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Governadorat_de_Qalyubiya.png/150px-Governadorat_de_Qalyubiya.png"
            },
            "EG-KN": {
                "name": "Qena Governorate",
                "nativeName": "قنا",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Qena_Governorate.png/162px-Flag_of_Qena_Governorate.png"
            },
            "EG-BA": {
                "name": "Red Sea Governorate",
                "nativeName": "البحر الأحمر",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Red_sea_governorate_flag.png/150px-Red_sea_governorate_flag.png"
            },
            "EG-SHR": {
                "name": "Sharqia Governorate",
                "nativeName": "الشرقية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Ash_Sharqiyah.svg"
            },
            "EG-SHG": {
                "name": "Sohag Governorate",
                "nativeName": "سوهاج",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Governadorat_de_Suhaj.png/150px-Governadorat_de_Suhaj.png"
            },
            "EG-JS": {
                "name": "South Sinai Governorate",
                "nativeName": "جنوب سيناء",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/South_Sinai_Governorate_Flag.svg"
            },
            "EG-SUZ": {
                "name": "Suez Governorate",
                "nativeName": "السويس",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Suez_Governorate.svg"
            }
        }
    },
    "SV": {
        "name": "El Salvador",
        "nativeName": "El Salvador",
        "regions": {
            "SV-AH": {
                "name": "Ahuachapán",
                "nativeName": "Departamento de Ahuachapán",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Bandera_del_Departamento_de_Ahuachapán.PNG"
            },
            "SV-CA": {
                "name": "Cabañas",
                "nativeName": "Departamento de Cabañas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_the_Cabañas_Department.svg"
            },
            "SV-CH": {
                "name": "Chalatenango",
                "nativeName": "Departamento de Chalatenango",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Flag_of_Chalatenango.svg"
            },
            "SV-CU": {
                "name": "Cuscatlán",
                "nativeName": "Departamento de Cuscatlán",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Bandera_del_Departamento_de_Cuscatlán.PNG"
            },
            "SV-MO": {
                "name": "Morazán",
                "nativeName": "Departamento de Morazán",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Morazán_Department.svg"
            },
            "SV-SO": {
                "name": "Sonsonate",
                "nativeName": "Departamento de Sonsonate",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Bandera_Sonsonate_SV.png"
            },
            "SV-US": {
                "name": "Usulután",
                "nativeName": "Departamento de Usulután",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Usulatán_Department.svg"
            },
            "SV-LI": {
                "name": "Departamento de La Libertad",
                "nativeName": "Departamento de La Libertad",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_La_Libertad_Department_(El_Salvador).svg"
            },
            "SV-PA": {
                "name": "Departamento de La Paz",
                "nativeName": "Departamento de La Paz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Bandera_del_Departamento_de_La_Paz.jpg"
            },
            "SV-UN": {
                "name": "Departamento de La Unión",
                "nativeName": "Departamento de La Unión",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Bandera_del_Departamento_de_La_Union_ES.jpg"
            },
            "SV-SM": {
                "name": "Departamento de San Miguel",
                "nativeName": "Departamento de San Miguel",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_San_Miguel_Department.png"
            },
            "SV-SS": {
                "name": "Departamento de San Salvador",
                "nativeName": "Departamento de San Salvador",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/73/San_Salvador_Flag.png"
            },
            "SV-SV": {
                "name": "Departamento de San Vicente",
                "nativeName": "Departamento de San Vicente",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_San_Vicente_Department.svg"
            },
            "SV-SA": {
                "name": "Departamento de Santa Ana",
                "nativeName": "Departamento de Santa Ana",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Santa_Ana_(El_Salvador)_flag.jpg"
            }
        }
    },
    "EE": {
        "name": "Estonia",
        "nativeName": "Eesti",
        "regions": {
            "EE-37": {
                "name": "Harju maakond",
                "nativeName": "Harju maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/23/Et-Harju_maakond-coa.svg"
            },
            "EE-39": {
                "name": "Hiiu maakond",
                "nativeName": "Hiiu maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Hiiumaa_vapp.svg"
            },
            "EE-45": {
                "name": "Ida-Viru maakond",
                "nativeName": "Ida-Viru maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Ida-Virumaa_vapp.svg"
            },
            "EE-50": {
                "name": "Jõgeva maakond",
                "nativeName": "Jõgeva maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/30/Jõgevamaa_vapp.svg"
            },
            "EE-52": {
                "name": "Järva maakond",
                "nativeName": "Järva maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Et-Järva_maakond-coa.svg"
            },
            "EE-56": {
                "name": "Lääne maakond",
                "nativeName": "Lääne maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Läänemaa_vapp.svg"
            },
            "EE-60": {
                "name": "Lääne-Viru maakond",
                "nativeName": "Lääne-Viru maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Lääne-Virumaa_vapp.svg"
            },
            "EE-64": {
                "name": "Põlva maakond",
                "nativeName": "Põlva maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/18/Põlvamaa_vapp.svg"
            },
            "EE-68": {
                "name": "Pärnu maakond",
                "nativeName": "Pärnu maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Et-Pärnu_maakond-coa.svg"
            },
            "EE-71": {
                "name": "Rapla maakond",
                "nativeName": "Rapla maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/68/Raplamaa_vapp.svg"
            },
            "EE-74": {
                "name": "Saare maakond",
                "nativeName": "Saare maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/54/Saaremaa_vapp.svg"
            },
            "EE-79": {
                "name": "Tartu maakond",
                "nativeName": "Tartu maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/30/Tartumaa_vapp.svg"
            },
            "EE-81": {
                "name": "Valga maakond",
                "nativeName": "Valga maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Valgamaa_vapp.svg"
            },
            "EE-84": {
                "name": "Viljandi maakond",
                "nativeName": "Viljandi maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Viljandimaa_vapp.svg"
            },
            "EE-87": {
                "name": "Võru maakond",
                "nativeName": "Võru maakond",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Võrumaa_vapp.svg"
            }
        }
    },
    "FI": {
        "name": "Finland",
        "nativeName": "Suomi",
        "regions": {
            "FI-01": {
                "name": "Åland",
                "nativeName": "Landskapet Åland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Åland.svg"
            },
            "FI-08": {
                "name": "Central Finland",
                "nativeName": "Keski-Suomi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Keski-suomi_lippu.svg"
            },
            "FI-07": {
                "name": "Central Ostrobothnia",
                "nativeName": "Keski-Pohjanmaa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Keski-Pohjanmaa.lippu.svg"
            },
            "FI-05": {
                "name": "Kainuu",
                "nativeName": "Kainuu",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Flag_of_Kainuu.svg"
            },
            "FI-06": {
                "name": "Kanta-Häme",
                "nativeName": "Kanta-Häme",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Tavastia_Proper.svg"
            },
            "FI-13": {
                "name": "North Karelia",
                "nativeName": "Pohjois-Karjala",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e0/North_karelia_flag.svg"
            },
            "FI-15": {
                "name": "North Savo",
                "nativeName": "Pohjois-Savo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Northern_Savonia.svg"
            },
            "FI-16": {
                "name": "Päijät-Häme",
                "nativeName": "Päijät-Häme",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/18/Päijät-Häme.lippu.svg"
            },
            "FI-17": {
                "name": "Satakunta",
                "nativeName": "Satakunta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/78/Satakunta-flag.svg"
            },
            "FI-03": {
                "name": "South Ostrobothnia",
                "nativeName": "Etelä-Pohjanmaa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Southern_Ostrobothnia.svg"
            },
            "FI-04": {
                "name": "South Savo",
                "nativeName": "Etelä-Savo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_South_Savonia.svg"
            },
            "FI-18": {
                "name": "Uusimaa",
                "nativeName": "Uusimaa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Flag_of_Uusimaa.svg"
            },
            "FI-02": {
                "name": "South Karelia",
                "nativeName": "Etelä-Karjala",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/91/Etelä-Karjala.vaakuna.svg"
            },
            "FI-09": {
                "name": "Kymenlaakso",
                "nativeName": "Kymenlaakso",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/70/Kymenlaakson_maakunnan_vaakuna.svg"
            },
            "FI-10": {
                "name": "Lapland",
                "nativeName": "Lappi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Lapin_maakunnan_vaakuna.svg"
            },
            "FI-11": {
                "name": "Pirkanmaa",
                "nativeName": "Pirkanmaa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Pirkanmaa.svg"
            },
            "FI-12": {
                "name": "Ostrobothnia",
                "nativeName": "Österbotten",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Pohjanmaan_maakunnan_vaakuna.svg"
            },
            "FI-14": {
                "name": "North Ostrobothnia",
                "nativeName": "Pohjois-Pohjanmaa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Pohjois-Pohjanmaan_vaakuna.svg"
            },
            "FI-19": {
                "name": "Southwest Finland",
                "nativeName": "Varsinais-Suomi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Varsinais-Suomen.vaakuna.svg"
            }
        }
    },
    "FR": {
        "name": "France",
        "nativeName": "France",
        "regions": {
            "FR-ARA": {
                "name": "Auvergne-Rhône-Alpes",
                "nativeName": "Auvergne-Rhône-Alpes",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_the_region_Auvergne-Rhône-Alpes.svg"
            },
            "FR-BFC": {
                "name": "Bourgogne-Franche-Comté",
                "nativeName": "Bourgogne-Franche-Comté",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_the_region_Bourgogne-Franche-Comté.svg//128px-Flag_of_the_region_Bourgogne-Franche-Comté.svg.png"
            },
            "FR-BRE": {
                "name": "Brittany",
                "nativeName": "Bretagne",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Brittany_(Gwenn_ha_du).svg"
            },
            "FR-CVL": {
                "name": "Centre-Val de Loire",
                "nativeName": "Centre-Val de Loire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Flag_of_Centre-Val_de_Loire.svg"
            },
            "FR-20R": {
                "name": "Corsica",
                "nativeName": "Corse",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Flag_of_Corsica.svg"
            },
            "FR-GES": {
                "name": "Grand Est",
                "nativeName": "Grand Est",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/39/Flag_of_the_Region_of_Grand_Est_(Variant_1).svg"
            },
            "FR-HDF": {
                "name": "Hauts-de-France",
                "nativeName": "Hauts-de-France",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Flag_of_the_Region_of_Hauts-de-France.svg"
            },
            "FR-IDF": {
                "name": "Île-de-France",
                "nativeName": "Île-de-France",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ab/IDF_flag.svg"
            },
            "FR-NOR": {
                "name": "Normandy",
                "nativeName": "Normandie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Normandie.svg"
            },
            "FR-NAQ": {
                "name": "Nouvelle-Aquitaine",
                "nativeName": "Nouvelle-Aquitaine",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Flag_of_Nouvelle-Aquitaine.svg"
            },
            "FR-OCC": {
                "name": "Occitania",
                "nativeName": "Occitanie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Flag_of_Région_Occitanie_(symbol_only).svg"
            },
            "FR-PDL": {
                "name": "Pays de la Loire",
                "nativeName": "Pays de la Loire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Unofficial_flag_of_Pays-de-la-Loire.svg"
            },
            "FR-PAC": {
                "name": "Provence-Alpes-Côte d'Azur",
                "nativeName": "Provence-Alpes-Côte d'Azur",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_Provence-Alpes-Côte_d'Azur.svg"
            }
        }
    },
    "GE": {
        "name": "Georgia",
        "nativeName": "Sak'art'velo საქართველო",
        "regions": {
            "GE-AB": {
                "name": "Abkhazia",
                "nativeName": "Абхазия - Аԥсны",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Abkhazia_(GE).svg"
            },
            "GE-AJ": {
                "name": "Adjara",
                "nativeName": "აჭარის ავტონომიური რესპუბლიკა",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Adjara.svg"
            },
            "GE-TB": {
                "name": "Tbilisi",
                "nativeName": "თბილისი",
                "flag": ""
            },
            "GE-GU": {
                "name": "Guria",
                "nativeName": "გურია",
                "flag": ""
            },
            "GE-IM": {
                "name": "Imereti",
                "nativeName": "იმერეთი",
                "flag": ""
            },
            "GE-KA": {
                "name": "Kakheti",
                "nativeName": "კახეთი",
                "flag": ""
            },
            "GE-KK": {
                "name": "Lower Kartli",
                "nativeName": "ქვემო ქართლი",
                "flag": ""
            },
            "GE-MM": {
                "name": "Mtskheta-Mtianeti",
                "nativeName": "მცხეთა-მთიანეთი",
                "flag": ""
            },
            "GE-RL": {
                "name": "Racha-Lechkhumi and Lower Svaneti",
                "nativeName": "რაჭა-ლეჩხუმი და ქვემო სვანეთი",
                "flag": ""
            },
            "GE-SZ": {
                "name": "Samegrelo-Upper Svaneti",
                "nativeName": "სამეგრელო-ზემო სვანეთი",
                "flag": ""
            },
            "GE-SJ": {
                "name": "Samtskhe-Javakheti",
                "nativeName": "სამცხე-ჯავახეთი",
                "flag": ""
            },
            "GE-SK": {
                "name": "Inner Kartli",
                "nativeName": "შიდა ქართლი",
                "flag": ""
            },
            "GE-SO": {
                "name": "South Ossetia",
                "nativeName": "Хуссар Ирыстон - Южная Осетия",
                "flag": ""
            }
        }
    },
    "DE": {
        "name": "Germany",
        "nativeName": "Deutschland",
        "regions": {
            "DE-BW": {
                "name": "Baden-Württemberg",
                "nativeName": "Baden-Württemberg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Baden-Württemberg.svg"
            },
            "DE-BE": {
                "name": "Berlin",
                "nativeName": "Berlin",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Berlin.svg"
            },
            "DE-BB": {
                "name": "Brandenburg",
                "nativeName": "Brandenburg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Brandenburg.svg"
            },
            "DE-HB": {
                "name": "Bremen",
                "nativeName": "Bremen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_Bremen.svg"
            },
            "DE-HH": {
                "name": "Hamburg",
                "nativeName": "Hamburg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Hamburg.svg"
            },
            "DE-HE": {
                "name": "Hesse",
                "nativeName": "Hessen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Hesse.svg"
            },
            "DE-NI": {
                "name": "Lower Saxony",
                "nativeName": "Niedersachsen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/81/Flag_of_Lower_Saxony.svg"
            },
            "DE-MV": {
                "name": "Mecklenburg-Vorpommern",
                "nativeName": "Mecklenburg-Vorpommern",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Mecklenburg-Western_Pomerania.svg"
            },
            "DE-NW": {
                "name": "North Rhine-Westphalia",
                "nativeName": "Nordrhein-Westfalen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_North_Rhine-Westphalia.svg"
            },
            "DE-RP": {
                "name": "Rhineland-Palatinate",
                "nativeName": "Rheinland-Pfalz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Rhineland-Palatinate.svg"
            },
            "DE-SL": {
                "name": "Saarland",
                "nativeName": "Saarland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Saarland.svg//128px-Flag_of_Saarland.svg.png"
            },
            "DE-SN": {
                "name": "Saxony",
                "nativeName": "Sachsen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Saxony.svg"
            },
            "DE-ST": {
                "name": "Saxony-Anhalt",
                "nativeName": "Sachsen-Anhalt",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Flag_of_Saxony-Anhalt_(state).svg"
            },
            "DE-SH": {
                "name": "Schleswig-Holstein",
                "nativeName": "Schleswig-Holstein",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Schleswig-Holstein.svg"
            },
            "DE-TH": {
                "name": "Thuringia",
                "nativeName": "Thüringen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Thuringia.svg"
            },
            "DE-BY": {
                "name": "Bavaria",
                "nativeName": "Bayern",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_Bavaria_(lozengy).svg"
            }
        }
    },
    "GT": {
        "name": "Guatemala",
        "nativeName": "Guatemala",
        "regions": {
            "GT-16": {
                "name": "Alta Verapaz",
                "nativeName": "Alta Verapaz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Bandera_de_Alta_Verapaz.svg"
            },
            "GT-15": {
                "name": "Baja Verapaz",
                "nativeName": "Baja Verapaz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_of_Baja_Verapaz,_Guatemala.png/166px-Flag_of_Baja_Verapaz,_Guatemala.png"
            },
            "GT-04": {
                "name": "Chimaltenango",
                "nativeName": "Chimaltenango",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Vlagchimaltenango.gif/150px-Vlagchimaltenango.gif"
            },
            "GT-20": {
                "name": "Chiquimula",
                "nativeName": "Chiquimula",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/..Chiquimula_Flag(GUATEMALA).png/166px-..Chiquimula_Flag(GUATEMALA).png"
            },
            "GT-05": {
                "name": "Escuintla",
                "nativeName": "Escuintla",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Escuintla_Department.gif/150px-Flag_of_Escuintla_Department.gif"
            },
            "GT-13": {
                "name": "Huehuetenango",
                "nativeName": "Huehuetenango",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Huehuetenango.gif/158px-Flag_of_Huehuetenango.gif"
            },
            "GT-18": {
                "name": "Izabal",
                "nativeName": "Izabal",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Flag_of_Izabal_Department.gif/150px-Flag_of_Izabal_Department.gif"
            },
            "GT-21": {
                "name": "Jalapa",
                "nativeName": "Jalapa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Jalapa_Department,_Guatemala.svg"
            },
            "GT-22": {
                "name": "Jutiapa",
                "nativeName": "Jutiapa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Vlagjutiapa.gif/150px-Vlagjutiapa.gif"
            },
            "GT-17": {
                "name": "Petén",
                "nativeName": "Petén",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bandera_del_Departamento_El_Petén.png/170px-Bandera_del_Departamento_El_Petén.png"
            },
            "GT-09": {
                "name": "Quetzaltenango",
                "nativeName": "Quetzaltenango",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Vlagquetzaltenango.gif/150px-Vlagquetzaltenango.gif"
            },
            "GT-14": {
                "name": "Quiché",
                "nativeName": "Quiché",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/..El_Quiché_Flag(GUATEMALA).png/172px-..El_Quiché_Flag(GUATEMALA).png"
            },
            "GT-11": {
                "name": "Retalhuleu",
                "nativeName": "Retalhuleu",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Vlagretalhuleu.gif/150px-Vlagretalhuleu.gif"
            },
            "GT-03": {
                "name": "Sacatepéquez",
                "nativeName": "Sacatepéquez",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Bandera_de_Sacatepéquez.svg"
            },
            "GT-12": {
                "name": "San Marcos",
                "nativeName": "San Marcos",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Vlagsanmarcos.gif/150px-Vlagsanmarcos.gif"
            },
            "GT-06": {
                "name": "Santa Rosa",
                "nativeName": "Santa Rosa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_Santa_Rosa_Department.GIF/150px-Flag_of_Santa_Rosa_Department.GIF"
            },
            "GT-07": {
                "name": "Sololá",
                "nativeName": "Sololá",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Sololá_Department.svg"
            },
            "GT-10": {
                "name": "Suchitepéquez",
                "nativeName": "Suchitepéquez",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/..Suchitepéquez_Flag(GUATEMALA).png/159px-..Suchitepéquez_Flag(GUATEMALA).png"
            },
            "GT-08": {
                "name": "Totonicapán",
                "nativeName": "Totonicapán",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Bandera_Totonicapán.svg/128px-Bandera_Totonicapán.svg.png"
            },
            "GT-19": {
                "name": "Zacapa",
                "nativeName": "Zacapa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_Zacapa_Department.GIF/160px-Flag_of_Zacapa_Department.GIF"
            },
            "GT-01": {
                "name": "Guatemala Department",
                "nativeName": "Departamento de Guatemala",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/47/Bandera_del_Departamento_Guatemala.svg"
            },
            "GT-02": {
                "name": "El Progreso",
                "nativeName": "El Progreso",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Bandera_PRO.JPG"
            }
        }
    },
    "HN": {
        "name": "Honduras",
        "nativeName": "Honduras",
        "regions": {
            "HN-AT": {
                "name": "Atlántida",
                "nativeName": "Atlántida",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_Of_Atlantida_Department.png/161px-Flag_Of_Atlantida_Department.png"
            },
            "HN-CL": {
                "name": "Colón",
                "nativeName": "Colón",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Flag_of_Colon_Department_(Honduras).gif/191px-Flag_of_Colon_Department_(Honduras).gif"
            },
            "HN-CM": {
                "name": "Comayagua",
                "nativeName": "Comayagua",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bandera_de_Comayagua.png/166px-Bandera_de_Comayagua.png"
            },
            "HN-FM": {
                "name": "Francisco Morazán",
                "nativeName": "Francisco Morazán",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Tegucigalpa.svg//128px-Flag_of_Tegucigalpa.svg.png"
            },
            "HN-OC": {
                "name": "Ocotepeque",
                "nativeName": "Ocotepeque",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Bandera_de_Ocotepeque.svg"
            },
            "HN-OL": {
                "name": "Olancho",
                "nativeName": "Olancho",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bandera_de_olancho.jpg/164px-Bandera_de_olancho.jpg"
            },
            "HN-SB": {
                "name": "Santa Bárbara",
                "nativeName": "Santa Bárbara",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Bandera_de_Santa_Barbara_Honduras.svg"
            },
            "HN-VA": {
                "name": "Valle",
                "nativeName": "Valle",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_Valle_Department.png/200px-Flag_of_Valle_Department.png"
            },
            "HN-CH": {
                "name": "Choluteca",
                "nativeName": "Choluteca",
                "flag": ""
            },
            "HN-CP": {
                "name": "Copán",
                "nativeName": "Copán",
                "flag": ""
            },
            "HN-CR": {
                "name": "Cortés",
                "nativeName": "Cortés",
                "flag": ""
            },
            "HN-EP": {
                "name": "El Paraíso",
                "nativeName": "El Paraíso",
                "flag": ""
            },
            "HN-GD": {
                "name": "Gracias a Dios",
                "nativeName": "Gracias a Dios",
                "flag": ""
            },
            "HN-IN": {
                "name": "Intibucá",
                "nativeName": "Intibucá",
                "flag": ""
            },
            "HN-IB": {
                "name": "Bay Islands",
                "nativeName": "Islas de la Bahía",
                "flag": ""
            },
            "HN-LP": {
                "name": "La Paz",
                "nativeName": "La Paz",
                "flag": ""
            },
            "HN-LE": {
                "name": "Lempira",
                "nativeName": "Lempira",
                "flag": ""
            },
            "HN-YO": {
                "name": "Yoro",
                "nativeName": "Yoro",
                "flag": ""
            }
        }
    },
    "HU": {
        "name": "Hungary",
        "nativeName": "Magyarország",
        "regions": {
            "HU-BU": {
                "name": "Budapest",
                "nativeName": "Budapest",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_Budapest_(2011-).svg//128px-Flag_of_Budapest_(2011-).svg.png"
            },
            "HU-BA": {
                "name": "Baranya",
                "nativeName": "Baranya vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Baranya_County.svg/128px-Flag_of_Baranya_County.svg.png"
            },
            "HU-BZ": {
                "name": "Borsod-Abaúj-Zemplén",
                "nativeName": "Borsod-Abaúj-Zemplén vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/FLAG-Borsod-Abaúj-Zemplén-megye.svg/128px-FLAG-Borsod-Abaúj-Zemplén-megye.svg.png"
            },
            "HU-BK": {
                "name": "Bács-Kiskun",
                "nativeName": "Bács-Kiskun vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Bács-Kiskun_County.svg"
            },
            "HU-BE": {
                "name": "Békés",
                "nativeName": "Békés vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/FLAG-Békés-megye.svg/128px-FLAG-Békés-megye.svg.png"
            },
            "HU-CS": {
                "name": "Csongrád-Csanád",
                "nativeName": "Csongrád-Csanád vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Flag_of_Csongrad-Csanad_megye.svg/128px-Flag_of_Csongrad-Csanad_megye.svg.png"
            },
            "HU-FE": {
                "name": "Fejér",
                "nativeName": "Fejér vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/FLAG-Fejér-megye.svg/128px-FLAG-Fejér-megye.svg.png"
            },
            "HU-GS": {
                "name": "Győr-Moson-Sopron",
                "nativeName": "Győr-Moson-Sopron vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/FLAG-Gyor-Moson-Sopron-megye.svg/128px-FLAG-Gyor-Moson-Sopron-megye.svg.png"
            },
            "HU-HB": {
                "name": "Hajdú-Bihar",
                "nativeName": "Hajdú-Bihar vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/FLAG-Hajdú-Bihar-megye.svg/128px-FLAG-Hajdú-Bihar-megye.svg.png"
            },
            "HU-HE": {
                "name": "Heves",
                "nativeName": "Heves vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/FLAG-Heves-megye.svg/128px-FLAG-Heves-megye.svg.png"
            },
            "HU-JN": {
                "name": "Jász-Nagykun-Szolnok",
                "nativeName": "Jász-Nagykun-Szolnok vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/FLAG-Jasz-Nagykun-Szolnok.svg/128px-FLAG-Jasz-Nagykun-Szolnok.svg.png"
            },
            "HU-KE": {
                "name": "Komárom-Esztergom",
                "nativeName": "Komárom-Esztergom vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/FLAG-Komárom-Esztergom-megye.svg/128px-FLAG-Komárom-Esztergom-megye.svg.png"
            },
            "HU-NO": {
                "name": "Nógrád",
                "nativeName": "Nógrád vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/FLAG-Nograd.svg/128px-FLAG-Nograd.svg.png"
            },
            "HU-PE": {
                "name": "Pest",
                "nativeName": "Pest vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/FLAG-Pest-megye.svg/128px-FLAG-Pest-megye.svg.png"
            },
            "HU-SO": {
                "name": "Somogy",
                "nativeName": "Somogy vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/FLAG-Somogy-megye.svg/128px-FLAG-Somogy-megye.svg.png"
            },
            "HU-SZ": {
                "name": "Szabolcs-Szatmár-Bereg",
                "nativeName": "Szabolcs-Szatmár-Bereg vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Flag-Szabolcs-Szatmar-Bereg-megye.svg/128px-Flag-Szabolcs-Szatmar-Bereg-megye.svg.png"
            },
            "HU-TO": {
                "name": "Tolna",
                "nativeName": "Tolna vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/FLAG-Tolna-megye.svg/128px-FLAG-Tolna-megye.svg.png"
            },
            "HU-VA": {
                "name": "Vas",
                "nativeName": "Vas vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/FLAG-Vas-megye.svg/128px-FLAG-Vas-megye.svg.png"
            },
            "HU-VE": {
                "name": "Veszprém",
                "nativeName": "Veszprém vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FLAG-Veszprém-megye.svg/128px-FLAG-Veszprém-megye.svg.png"
            },
            "HU-ZA": {
                "name": "Zala",
                "nativeName": "Zala vármegye",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/FLAG-Zala-megye.svg/128px-FLAG-Zala-megye.svg.png"
            }
        }
    },
    "ID": {
        "name": "Indonesia",
        "nativeName": "Indonesia",
        "regions": {
            "ID-AC": {
                "name": "Aceh",
                "nativeName": "Aceh",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Coat_of_arms_of_Aceh.svg/128px-Coat_of_arms_of_Aceh.svg.png"
            },
            "ID-BA": {
                "name": "Bali",
                "nativeName": "Bali",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Coat_of_arms_of_Bali.svg/128px-Coat_of_arms_of_Bali.svg.png"
            },
            "ID-BB": {
                "name": "Bangka Belitung Islands",
                "nativeName": "Kepulauan Bangka Belitung",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/08/Coat_of_arms_of_Bangka_Belitung_Islands.svg"
            },
            "ID-BT": {
                "name": "Banten",
                "nativeName": "Banten",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Coat_of_arms_of_Banten.svg/128px-Coat_of_arms_of_Banten.svg.png"
            },
            "ID-BE": {
                "name": "Bengkulu",
                "nativeName": "Bengkulu",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/54/Coat_of_arms_of_Bengkulu.svg"
            },
            "ID-JT": {
                "name": "Central Java",
                "nativeName": "Jawa Tengah",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_Central_Java.svg/128px-Coat_of_arms_of_Central_Java.svg.png"
            },
            "ID-KT": {
                "name": "Central Kalimantan",
                "nativeName": "Kalimantan Tengah",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Coat_of_arms_of_Central_Kalimantan.svg"
            },
            "ID-PT": {
                "name": "Central Papua",
                "nativeName": "Papua Tengah",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lambang_Papua_Tengah.png/256px-Lambang_Papua_Tengah.png"
            },
            "ID-ST": {
                "name": "Central Sulawesi",
                "nativeName": "Sulawesi Tengah",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/46/Coat_of_arms_of_Central_Sulawesi.svg"
            },
            "ID-JI": {
                "name": "East Java",
                "nativeName": "Jawa Timur",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coat_of_arms_of_East_Java.svg/128px-Coat_of_arms_of_East_Java.svg.png"
            },
            "ID-KI": {
                "name": "East Kalimantan",
                "nativeName": "Kalimantan Timur",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Coat_of_arms_of_East_Kalimantan.svg"
            },
            "ID-NT": {
                "name": "East Nusa Tenggara",
                "nativeName": "Nusa Tenggara Timur",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png/256px-Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png"
            },
            "ID-GO": {
                "name": "Gorontalo",
                "nativeName": "Gorontalo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Coat_of_arms_of_Gorontalo.svg"
            },
            "ID-PE": {
                "name": "Highland Papua",
                "nativeName": "Papua Pegunungan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lambang_Papua_Pegunungan.png/256px-Lambang_Papua_Pegunungan.png"
            },
            "ID-JA": {
                "name": "Jambi",
                "nativeName": "Jambi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Coat_of_arms_of_Jambi.svg"
            },
            "ID-LA": {
                "name": "Lampung",
                "nativeName": "Lampung",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Coat_of_arms_of_Lampung.svg/128px-Coat_of_arms_of_Lampung.svg.png"
            },
            "ID-KU": {
                "name": "North Kalimantan",
                "nativeName": "Kalimantan Utara",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Coat_of_arms_of_North_Kalimantan_(2021_version).svg"
            },
            "ID-MU": {
                "name": "North Maluku",
                "nativeName": "Maluku Utara",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/73/Coat_of_arms_of_North_Maluku.svg"
            },
            "ID-SA": {
                "name": "North Sulawesi",
                "nativeName": "Sulawesi Utara",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Coat_of_arms_of_North_Sulawesi.svg/128px-Coat_of_arms_of_North_Sulawesi.svg.png"
            },
            "ID-SU": {
                "name": "North Sumatra",
                "nativeName": "Sumatera Utara",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Coat_of_arms_of_North_Sumatra.svg/128px-Coat_of_arms_of_North_Sumatra.svg.png"
            },
            "ID-PA": {
                "name": "Papua",
                "nativeName": "Papua",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/98/Coat_of_arms_of_Papua_2.svg"
            },
            "ID-RI": {
                "name": "Riau",
                "nativeName": "Riau",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Coat_of_arms_of_Riau.svg/128px-Coat_of_arms_of_Riau.svg.png"
            },
            "ID-KR": {
                "name": "Riau Islands",
                "nativeName": "Kepulauan Riau",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Coat_of_arms_of_Riau_Islands.svg/128px-Coat_of_arms_of_Riau_Islands.svg.png"
            },
            "ID-SG": {
                "name": "Southeast Sulawesi",
                "nativeName": "Sulawesi Tenggara",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Coat_of_arms_of_Southeast_Sulawesi.svg/128px-Coat_of_arms_of_Southeast_Sulawesi.svg.png"
            },
            "ID-KS": {
                "name": "South Kalimantan",
                "nativeName": "Kalimantan Selatan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Coat_of_arms_of_South_Kalimantan.svg"
            },
            "ID-PS": {
                "name": "South Papua",
                "nativeName": "Papua Selatan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lambang_Papua_Selatan.png/256px-Lambang_Papua_Selatan.png"
            },
            "ID-SN": {
                "name": "South Sulawesi",
                "nativeName": "Sulawesi Selatan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/67/Coat_of_arms_of_South_Sulawesi.svg"
            },
            "ID-SS": {
                "name": "South Sumatra",
                "nativeName": "Sumatera Selatan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Coat_of_arms_of_South_Sumatra.svg"
            },
            "ID-JB": {
                "name": "West Java",
                "nativeName": "Jawa Barat",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/Coat_of_arms_of_West_Java.svg"
            },
            "ID-KB": {
                "name": "West Kalimantan",
                "nativeName": "Kalimantan Barat",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Coat_of_arms_of_West_Kalimantan.svg/128px-Coat_of_arms_of_West_Kalimantan.svg.png"
            },
            "ID-NB": {
                "name": "West Nusa Tenggara",
                "nativeName": "Nusa Tenggara Barat",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Coat_of_arms_of_West_Nusa_Tenggara.svg/128px-Coat_of_arms_of_West_Nusa_Tenggara.svg.png"
            },
            "ID-PB": {
                "name": "West Papua",
                "nativeName": "Papua Barat",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/de/Coat_of_arms_of_West_Papua.svg"
            },
            "ID-SR": {
                "name": "West Sulawesi",
                "nativeName": "Sulawesi Barat",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/95/Flag_of_West_Sulawesi.svg"
            },
            "ID-SB": {
                "name": "West Sumatra",
                "nativeName": "Sumatera Barat",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Coat_of_arms_of_West_Sulawesi.svg"
            },
            "ID-YO": {
                "name": "Special Region of Yogyakarta",
                "nativeName": "Daerah Istimewa Yogyakarta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Coat_of_arms_of_Yogyakarta.svg/128px-Coat_of_arms_of_Yogyakarta.svg.png"
            },
            "ID-JK": {
                "name": "Jakarta",
                "nativeName": "Daerah Khusus Ibukota Jakarta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Jakarta.svg/128px-Coat_of_arms_of_Jakarta.svg.png"
            },
            "ID-MA": {
                "name": "Maluku Islands",
                "nativeName": "Maluku",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/39/Coat_of_arms_of_Maluku.svg"
            },
            "ID-PSW": {
                "name": "Southwest Papua",
                "nativeName": "Papua Barat Daya",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_Papua_Barat_Daya1.png/256px-Logo_Papua_Barat_Daya1.png"
            }
        }
    },
    "IQ": {
        "name": "Iraq",
        "nativeName": "Al-'Iraq العراق",
        "regions": {
            "IQ-AN": {
                "name": "Al Anbar Governorate",
                "nativeName": "محافظة الأنبار",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Al_Anbar_Governorate.png/158px-Flag_of_Al_Anbar_Governorate.png"
            },
            "IQ-BB": {
                "name": "Babil Governorate",
                "nativeName": "محافظة بابل",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_of_Babil_Governorate.png/149px-Flag_of_Babil_Governorate.png"
            },
            "IQ-BA": {
                "name": "Basra Governorate",
                "nativeName": "محافظة البصرة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Basra_Governorate.svg"
            },
            "IQ-DI": {
                "name": "Diyala Governorate",
                "nativeName": "محافظة ديالى",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Flag_of_Diyala_Governorate.png/150px-Flag_of_Diyala_Governorate.png"
            },
            "IQ-KI": {
                "name": "Kirkuk Governorate",
                "nativeName": "محافظة كركوك",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kirkuk_Governorate.png/150px-Flag_of_Kirkuk_Governorate.png"
            },
            "IQ-NI": {
                "name": "Nineveh Governorate",
                "nativeName": "محافظة نینوى",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Nineveh_Governorate.png/145px-Flag_of_Nineveh_Governorate.png"
            },
            "IQ-SD": {
                "name": "Saladin Governorate",
                "nativeName": "محافظة صلاح الدين",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Flag_of_Saladin_Governorate,_Iraq.svg"
            },
            "IQ-MU": {
                "name": "Al-Muthanna Governorate",
                "nativeName": "محافظة المثنى",
                "flag": "https://upload.wikimedia.org/wikipedia/en/e/e5/Flag_of_Muthanna_Governorate.png"
            },
            "IQ-QA": {
                "name": "Al-Qadisiyah Governorate",
                "nativeName": "محافظة القادسية",
                "flag": "https://upload.wikimedia.org/wikipedia/en/7/7c/Seal_of_Al-Qadisiyah_Governorate.png"
            },
            "IQ-NA": {
                "name": "Al-Najaf Governorate",
                "nativeName": "محافظة النجف",
                "flag": "https://upload.wikimedia.org/wikipedia/en/c/cc/Seal_of_Najaf_Governorate.png"
            },
            "IQ-AR": {
                "name": "Erbil Governorate",
                "nativeName": "پارێزگای ھەولێر",
                "flag": "https://upload.wikimedia.org/wikipedia/en/5/57/Seal_of_Erbil_Governorate.png"
            },
            "IQ-SU": {
                "name": "Sulaymaniyah Governorate",
                "nativeName": "پارێزگای سلێمانی",
                "flag": "https://upload.wikimedia.org/wikipedia/en/6/61/Sulaymaniyah_Governorate_logo.png"
            },
            "IQ-KA": {
                "name": "Karbala",
                "nativeName": "محافظة كربلاء",
                "flag": "https://upload.wikimedia.org/wikipedia/en/c/c9/Emblem_of_Karbala_Governorate.png"
            },
            "IQ-MA": {
                "name": "Maysan Governorate",
                "nativeName": "محافظة ميسان",
                "flag": "https://upload.wikimedia.org/wikipedia/en/1/12/Emblem_of_Maysan_Governorate.png"
            },
            "IQ-WA": {
                "name": "Wasit Governorate",
                "nativeName": "محافظة واسط",
                "flag": "https://upload.wikimedia.org/wikipedia/en/0/08/Flag_of_Wasit_Governorate.png"
            },
            "IQ-BG": {
                "name": "Baghdad Governorate",
                "nativeName": "محافظة بغداد",
                "flag": "https://upload.wikimedia.org/wikipedia/en/7/76/Flag_of_Baghdad_Governorate.png"
            },
            "IQ-DA": {
                "name": "Duhok Governorate",
                "nativeName": "پارێزگای دھۆک",
                "flag": ""
            },
            "IQ-DQ": {
                "name": "Dhi Qar Governorate",
                "nativeName": "محافظة ذي قار",
                "flag": "https://upload.wikimedia.org/wikipedia/en/2/2b/Emblem_of_Dhi_Qar_Governorate.png"
            },
            "IQ-HA": {
                "name": "Halabja Governorate",
                "nativeName": "پارێزگای ھەڵەبجە",
                "flag": "https://upload.wikimedia.org/wikipedia/en/8/80/Emblem_of_Halabja_Governorate.png"
            }
        }
    },
    "IE": {
        "name": "Ireland",
        "nativeName": "Ireland",
        "regions": {
            "IE-C": {
                "name": "Connacht",
                "nativeName": "Connacht",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Flag_of_Connacht.svg"
            },
            "IE-L": {
                "name": "Leinster",
                "nativeName": "Leinster",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Leinster.svg"
            },
            "IE-M": {
                "name": "Munster",
                "nativeName": "Munster",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Flag_of_Munster.svg"
            },
            "IE-U": {
                "name": "Ulster",
                "nativeName": "Ulster",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Flag_of_Ulster.svg"
            }
        }
    },
    "IT": {
        "name": "Italy",
        "nativeName": "Italia",
        "regions": {
            "IT-23": {
                "name": "Aosta Valley",
                "nativeName": "Valle d'Aosta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/90/Flag_of_Valle_d'Aosta.svg"
            },
            "IT-36": {
                "name": "Friuli Venezia Giulia",
                "nativeName": "Friuli-Venezia Giulia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_Friuli-Venezia_Giulia.svg//128px-Flag_of_Friuli-Venezia_Giulia.svg.png"
            },
            "IT-88": {
                "name": "Sardinia",
                "nativeName": "Sardegna",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Sardinia,_Italy.svg"
            },
            "IT-82": {
                "name": "Sicily",
                "nativeName": "Sicilia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sicilian_Flag.svg//128px-Sicilian_Flag.svg.png"
            },
            "IT-32": {
                "name": "Trentino-Alto Adige/Südtirol",
                "nativeName": "Trentino-Alto Adige",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Flag_of_Trentino-South_Tyrol.svg"
            },
            "IT-65": {
                "name": "Abruzzo",
                "nativeName": "Abruzzo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Abruzzo.svg"
            },
            "IT-75": {
                "name": "Apulia",
                "nativeName": "Puglia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Apulia.svg"
            },
            "IT-77": {
                "name": "Basilicata",
                "nativeName": "Basilicata",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Basilicata.svg"
            },
            "IT-78": {
                "name": "Calabria",
                "nativeName": "Calabria",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Flag_of_Calabria.svg"
            },
            "IT-72": {
                "name": "Campania",
                "nativeName": "Campania",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Flag_of_Campania.svg"
            },
            "IT-45": {
                "name": "Emilia-Romagna",
                "nativeName": "Emilia-Romagna",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Emilia-Romagna_(de_facto).svg"
            },
            "IT-62": {
                "name": "Lazio",
                "nativeName": "Lazio",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_Lazio.svg//128px-Flag_of_Lazio.svg.png"
            },
            "IT-42": {
                "name": "Liguria",
                "nativeName": "Liguria",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Liguria.svg"
            },
            "IT-25": {
                "name": "Lombardy",
                "nativeName": "Lombardia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Lombardy.svg"
            },
            "IT-57": {
                "name": "Marche",
                "nativeName": "Marche",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Marche.svg"
            },
            "IT-67": {
                "name": "Molise",
                "nativeName": "Molise",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Molise.svg"
            },
            "IT-21": {
                "name": "Piedmont",
                "nativeName": "Piemonte",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Piedmont.svg"
            },
            "IT-52": {
                "name": "Tuscany",
                "nativeName": "Toscana",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Tuscany.svg//128px-Flag_of_Tuscany.svg.png"
            },
            "IT-55": {
                "name": "Umbria",
                "nativeName": "Umbria",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Flag_of_Umbria.svg"
            },
            "IT-34": {
                "name": "Veneto",
                "nativeName": "Veneto",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_Veneto.svg//128px-Flag_of_Veneto.svg.png"
            }
        }
    },
    "JP": {
        "name": "Japan",
        "nativeName": "日本",
        "regions": {
            "JP-23": {
                "name": "Aichi Prefecture",
                "nativeName": "愛知県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Aichi_Prefecture.svg"
            },
            "JP-05": {
                "name": "Akita Prefecture",
                "nativeName": "秋田県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Akita_Prefecture.svg"
            },
            "JP-02": {
                "name": "Aomori Prefecture",
                "nativeName": "青森県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Aomori_Prefecture.svg"
            },
            "JP-12": {
                "name": "Chiba Prefecture",
                "nativeName": "千葉県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Chiba_Prefecture.svg"
            },
            "JP-38": {
                "name": "Ehime Prefecture",
                "nativeName": "愛媛県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_Ehime_Prefecture.svg"
            },
            "JP-18": {
                "name": "Fukui Prefecture",
                "nativeName": "福井県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Fukui_Prefecture.svg"
            },
            "JP-40": {
                "name": "Fukuoka Prefecture",
                "nativeName": "福岡県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Fukuoka_Prefecture.svg"
            },
            "JP-07": {
                "name": "Fukushima Prefecture",
                "nativeName": "福島県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Fukushima_Prefecture.svg"
            },
            "JP-21": {
                "name": "Gifu Prefecture",
                "nativeName": "岐阜県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_Gifu_Prefecture.svg"
            },
            "JP-10": {
                "name": "Gunma Prefecture",
                "nativeName": "群馬県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Gunma_Prefecture.svg"
            },
            "JP-34": {
                "name": "Hiroshima Prefecture",
                "nativeName": "広島県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Hiroshima_Prefecture.svg"
            },
            "JP-01": {
                "name": "Hokkaido",
                "nativeName": "北海道",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/22/Flag_of_Hokkaido_Prefecture.svg"
            },
            "JP-28": {
                "name": "Hyōgo Prefecture",
                "nativeName": "兵庫県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Hyogo_Prefecture.svg"
            },
            "JP-08": {
                "name": "Ibaraki Prefecture",
                "nativeName": "茨城県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Flag_of_Ibaraki_Prefecture.svg"
            },
            "JP-17": {
                "name": "Ishikawa Prefecture",
                "nativeName": "石川県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Ishikawa_Prefecture.svg"
            },
            "JP-03": {
                "name": "Iwate Prefecture",
                "nativeName": "岩手県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Iwate_Prefecture.svg"
            },
            "JP-37": {
                "name": "Kagawa Prefecture",
                "nativeName": "香川県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Kagawa_Prefecture.svg"
            },
            "JP-46": {
                "name": "Kagoshima Prefecture",
                "nativeName": "鹿児島県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Flag_of_Kagoshima_Prefecture.svg"
            },
            "JP-14": {
                "name": "Kanagawa Prefecture",
                "nativeName": "神奈川県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_Kanagawa_Prefecture.svg"
            },
            "JP-39": {
                "name": "Kōchi Prefecture",
                "nativeName": "高知県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Kochi_Prefecture.svg"
            },
            "JP-43": {
                "name": "Kumamoto Prefecture",
                "nativeName": "熊本県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Kumamoto_Prefecture.svg"
            },
            "JP-26": {
                "name": "Kyoto Prefecture",
                "nativeName": "京都府",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Kyoto_Prefecture.svg"
            },
            "JP-24": {
                "name": "Mie Prefecture",
                "nativeName": "三重県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Mie_Prefecture.svg"
            },
            "JP-04": {
                "name": "Miyagi Prefecture",
                "nativeName": "宮城県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Miyagi_Prefecture.svg"
            },
            "JP-45": {
                "name": "Miyazaki Prefecture",
                "nativeName": "宮崎県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Miyazaki_Prefecture.svg"
            },
            "JP-20": {
                "name": "Nagano Prefecture",
                "nativeName": "長野県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Nagano_Prefecture.svg"
            },
            "JP-42": {
                "name": "Nagasaki Prefecture",
                "nativeName": "長崎県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Nagasaki_Prefecture.svg"
            },
            "JP-29": {
                "name": "Nara Prefecture",
                "nativeName": "奈良県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Nara_Prefecture.svg"
            },
            "JP-15": {
                "name": "Niigata Prefecture",
                "nativeName": "新潟県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Niigata_Prefecture.svg"
            },
            "JP-44": {
                "name": "Ōita Prefecture",
                "nativeName": "大分県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Flag_of_Oita_Prefecture.svg"
            },
            "JP-33": {
                "name": "Okayama Prefecture",
                "nativeName": "岡山県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/33/Flag_of_Okayama_Prefecture.svg"
            },
            "JP-47": {
                "name": "Okinawa Prefecture",
                "nativeName": "沖縄県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Okinawa_Prefecture.svg"
            },
            "JP-27": {
                "name": "Osaka Prefecture",
                "nativeName": "大阪府",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Osaka_Prefecture.svg"
            },
            "JP-41": {
                "name": "Saga Prefecture",
                "nativeName": "佐賀県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/18/Flag_of_Saga_Prefecture.svg"
            },
            "JP-11": {
                "name": "Saitama Prefecture",
                "nativeName": "埼玉県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Saitama_Prefecture.svg"
            },
            "JP-25": {
                "name": "Shiga Prefecture",
                "nativeName": "滋賀県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Shiga_Prefecture.svg"
            },
            "JP-32": {
                "name": "Shimane Prefecture",
                "nativeName": "島根県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Shimane_Prefecture.svg"
            },
            "JP-22": {
                "name": "Shizuoka Prefecture",
                "nativeName": "静岡県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Shizuoka_Prefecture.svg"
            },
            "JP-09": {
                "name": "Tochigi Prefecture",
                "nativeName": "栃木県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Flag_of_Tochigi_Prefecture.svg"
            },
            "JP-36": {
                "name": "Tokushima Prefecture",
                "nativeName": "徳島県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Tokushima_Prefecture.svg"
            },
            "JP-13": {
                "name": "Tokyo",
                "nativeName": "東京都",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/15/Flag_of_Tokyo_Metropolis.svg"
            },
            "JP-31": {
                "name": "Tottori Prefecture",
                "nativeName": "鳥取県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Tottori_Prefecture.svg"
            },
            "JP-16": {
                "name": "Toyama Prefecture",
                "nativeName": "富山県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Flag_of_Toyama_Prefecture.svg"
            },
            "JP-30": {
                "name": "Wakayama Prefecture",
                "nativeName": "和歌山県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Wakayama_Prefecture.svg"
            },
            "JP-06": {
                "name": "Yamagata Prefecture",
                "nativeName": "山形県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Flag_of_Yamagata_Prefecture.svg"
            },
            "JP-35": {
                "name": "Yamaguchi Prefecture",
                "nativeName": "山口県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Yamaguchi_Prefecture.svg"
            },
            "JP-19": {
                "name": "Yamanashi Prefecture",
                "nativeName": "山梨県",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Yamanashi_Prefecture.svg"
            }
        }
    },
    "KR": {
        "name": "South Korea",
        "nativeName": "한국",
        "regions": {
            "KR-11": {
                "name": "Seoul",
                "nativeName": "서울특별시",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Seoul.svg"
            },
            "KR-50": {
                "name": "Sejong City",
                "nativeName": "세종특별자치시",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Sejong_City.svg"
            },
            "KR-26": {
                "name": "Busan",
                "nativeName": "부산광역시",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Busan.svg"
            },
            "KR-27": {
                "name": "Daegu",
                "nativeName": "대구광역시",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Daegu.svg"
            },
            "KR-30": {
                "name": "Daejeon",
                "nativeName": "대전",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Daejeon.svg"
            },
            "KR-29": {
                "name": "Gwangju",
                "nativeName": "광주광역시",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Gwangju.svg"
            },
            "KR-28": {
                "name": "Incheon",
                "nativeName": "인천광역시",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Flag_of_Incheon.svg"
            },
            "KR-31": {
                "name": "Ulsan",
                "nativeName": "울산광역시",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Ulsan.svg"
            },
            "KR-44": {
                "name": "South Chungcheong",
                "nativeName": "충청남도",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_South_Chungcheong_Province.svg"
            },
            "KR-41": {
                "name": "Gyeonggi",
                "nativeName": "경기도",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Gyeonggi_Province.svg"
            },
            "KR-47": {
                "name": "North Gyeongsang",
                "nativeName": "경상북도",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_North_Gyeongsang_Province.svg"
            },
            "KR-48": {
                "name": "South Gyeongsang",
                "nativeName": "경상남도",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_South_Gyeongsang_Province.svg"
            },
            "KR-46": {
                "name": "South Jeolla",
                "nativeName": "전라남도",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/58/Flag_of_South_Jeolla_Province.svg"
            },
            "KR-49": {
                "name": "Jeju",
                "nativeName": "제주특별자치도",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Jeju_Province.svg"
            },
            "KR-42": {
                "name": "Gangwon",
                "nativeName": "강원특별자치도",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Flag_of_Gangwon_State.svg"
            },
            "KR-45": {
                "name": "North Jeolla",
                "nativeName": "전북특별자치도",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Jeonbuk_State.svg"
            },
            "KR-43": {
                "name": "North Chungcheong",
                "nativeName": "",
                "flag": ""
            }
        }
    },
    "KW": {
        "name": "Kuwait",
        "nativeName": "Dawlat ul-Kuwayt دولة الكويت",
        "regions": {
            "KW-AH": {
                "name": "Ahmadi Governorate",
                "nativeName": "الاحمدي",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_Ahmadi_Governorate.gif/133px-Flag_of_Ahmadi_Governorate.gif"
            },
            "KW-MU": {
                "name": "Mubarak Al-Kabeer Governorate",
                "nativeName": "مبارك الكبير",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_Of_Mubarak-Al-Kabeer_Governorate.gif/133px-Flag_Of_Mubarak-Al-Kabeer_Governorate.gif"
            },
            "KW-KU": {
                "name": "Al Asimah",
                "nativeName": "العاصمة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/80/Flag_of_Capital_Governorate,_Kuwait.png/revision/latest/scale-to-width-down/1000?cb=20230501122836"
            },
            "KW-FA": {
                "name": "Farwaniya",
                "nativeName": "الفروانية",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/d/df/Flag_of_Farwaniya_Governorate.png/revision/latest?cb=20230501122902"
            },
            "KW-HA": {
                "name": "Hawalli",
                "nativeName": "حولي",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/d/d9/Flag_of_Hawalli_Governorate.png/revision/latest?cb=20230501123123"
            },
            "KW-JA": {
                "name": "Jahra",
                "nativeName": "الجهراء",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/c/cc/Flag_of_Jahra_Governorate.png/revision/latest/scale-to-width-down/1000?cb=20230501123143"
            }
        }
    },
    "KG": {
        "name": "Kyrgyzstan",
        "nativeName": "Kyrgyzstan Кыргызстан",
        "regions": {
            "KG-B": {
                "name": "Batken Region",
                "nativeName": "Баткен облусу",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Batken_obl_flag.svg"
            },
            "KG-C": {
                "name": "Chüy Region",
                "nativeName": "Чүй облусу",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Chuy_Province.svg"
            },
            "KG-Y": {
                "name": "Issyk-Kul Region",
                "nativeName": "Ысык-Көл облусу",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Issyk_kul_obl_flag.svg"
            },
            "KG-J": {
                "name": "Jalal-Abad Region",
                "nativeName": "Жалал-Абад облусу",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Jalal-Abad_region.png/167px-Flag_of_Jalal-Abad_region.png"
            },
            "KG-N": {
                "name": "Naryn Region",
                "nativeName": "Нарын облусу",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/82/Naryn_obl_flag.svg"
            },
            "KG-O": {
                "name": "Osh Region",
                "nativeName": "Ош облусу",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Osh.svg"
            },
            "KG-T": {
                "name": "Talas Region",
                "nativeName": "Талас облусу",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Talas_Province_Kyrgyzstan.svg"
            },
            "KG-GB": {
                "name": "Bishkek",
                "nativeName": "Бишкек шаары",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Bishkek_Kyrgyzstan.svg"
            },
            "KG-GO": {
                "name": "Osh",
                "nativeName": "Ош шаары",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Osh.svg"
            }
        }
    },
    "LV": {
        "name": "Latvia",
        "nativeName": "Latvija",
        "regions": {
            "K": {
                "name": "Courland",
                "nativeName": "Kurzeme",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Courland_(state).svg"
            },
            "L": {
                "name": "Latgale",
                "nativeName": "Latgale",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Official_flag_of_Latgale.svg"
            },
            "V": {
                "name": "Vidzeme",
                "nativeName": "Vidzeme",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_arms_of_Vidzeme.svg/128px-Coat_of_arms_of_Vidzeme.svg.png"
            },
            "Z": {
                "name": "Zemgale",
                "nativeName": "Zemgale",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Coat_of_arms_of_Zemgale.svg"
            }
        }
    },
    "LT": {
        "name": "Lithuania",
        "nativeName": "Lietuva",
        "regions": {
            "LT-AL": {
                "name": "Alytus County",
                "nativeName": "Alytaus apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/33/Alytus_County_flag.svg"
            },
            "LT-KU": {
                "name": "Kaunas County",
                "nativeName": "Kauno apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3d/LTU_Kauno_apskritis_flag.svg"
            },
            "LT-KL": {
                "name": "Klaipėda County",
                "nativeName": "Klaipėdos apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/LTU_Klaipėdos_apskritis_flag.svg"
            },
            "LT-MR": {
                "name": "Marijampolė County",
                "nativeName": "Marijampolės apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Marijampole_County_flag.svg"
            },
            "LT-PN": {
                "name": "Panevėžys County",
                "nativeName": "Panevėžio apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Panevezys_County_flag.svg"
            },
            "LT-SA": {
                "name": "Šiauliai County",
                "nativeName": "Šiaulių apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Siauliai_County_flag.svg"
            },
            "LT-TA": {
                "name": "Tauragė County",
                "nativeName": "Tauragės apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Taurage_County_flag.png/120px-Taurage_County_flag.png"
            },
            "LT-TE": {
                "name": "Telšiai County",
                "nativeName": "Telšių apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Telsiai_County_flag.png/120px-Telsiai_County_flag.png"
            },
            "LT-UT": {
                "name": "Utena County",
                "nativeName": "Utenos apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Utena_County_flag.svg"
            },
            "LT-VL": {
                "name": "Vilnius County",
                "nativeName": "Vilniaus apskritis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Vilnius_County_flag.svg"
            }
        }
    },
    "MY": {
        "name": "Malaysia",
        "nativeName": "Malaysia",
        "regions": {
            "MY-01": {
                "name": "Johor",
                "nativeName": "Johor",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Johor.svg"
            },
            "MY-02": {
                "name": "Kedah",
                "nativeName": "Kedah",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Flag_of_Kedah.svg"
            },
            "MY-03": {
                "name": "Kelantan",
                "nativeName": "Kelantan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/61/Flag_of_Kelantan.svg"
            },
            "MY-04": {
                "name": "Malacca",
                "nativeName": "Melaka",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Malacca.svg"
            },
            "MY-05": {
                "name": "Negeri Sembilan",
                "nativeName": "Negeri Sembilan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Negeri_Sembilan.svg"
            },
            "MY-06": {
                "name": "Pahang",
                "nativeName": "Pahang",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Pahang.svg"
            },
            "MY-07": {
                "name": "Penang",
                "nativeName": "Pulau Pinang",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Penang_(Malaysia).svg"
            },
            "MY-08": {
                "name": "Perak",
                "nativeName": "Perak",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_Perak.svg"
            },
            "MY-09": {
                "name": "Perlis",
                "nativeName": "Perlis",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Perlis.svg"
            },
            "MY-12": {
                "name": "Sabah",
                "nativeName": "Sabah",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Sabah.svg"
            },
            "MY-13": {
                "name": "Sarawak",
                "nativeName": "Sarawak",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Flag_of_Sarawak.svg"
            },
            "MY-10": {
                "name": "Selangor",
                "nativeName": "Selangor",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Flag_of_Selangor.svg"
            },
            "MY-11": {
                "name": "Terengganu",
                "nativeName": "Terengganu",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Flag_of_Terengganu.svg"
            },
            "MY-14": {
                "name": "Kuala Lumpur",
                "nativeName": "Kuala Lumpur",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Kuala_Lumpur,_Malaysia.svg"
            },
            "MY-15": {
                "name": "Labuan",
                "nativeName": "Labuan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Labuan.svg"
            },
            "MY-16": {
                "name": "Putrajaya",
                "nativeName": "Putrajaya",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Putrajaya.svg//128px-Flag_of_Putrajaya.svg.png"
            }
        }
    },
    "MX": {
        "name": "Mexico",
        "nativeName": "México",
        "regions": {
            "MX-AGU": {
                "name": "Aguascalientes",
                "nativeName": "Aguascalientes",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Aguascalientes.svg//128px-Flag_of_Aguascalientes.svg.png"
            },
            "MX-BCN": {
                "name": "Baja California",
                "nativeName": "Baja California",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Baja_California.svg"
            },
            "MX-BCS": {
                "name": "Baja California Sur",
                "nativeName": "Baja California Sur",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Baja_California_Sur.svg"
            },
            "MX-CAM": {
                "name": "Campeche",
                "nativeName": "Campeche",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_Campeche.svg//128px-Flag_of_Campeche.svg.png"
            },
            "MX-CHP": {
                "name": "Chiapas",
                "nativeName": "Chiapas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Chiapas.svg//128px-Flag_of_Chiapas.svg.png"
            },
            "MX-CHH": {
                "name": "Chihuahua",
                "nativeName": "Chihuahua",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Chihuahua.svg//128px-Flag_of_Chihuahua.svg.png"
            },
            "MX-COA": {
                "name": "Coahuila",
                "nativeName": "Coahuila",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Coahuila.svg//128px-Flag_of_Coahuila.svg.png"
            },
            "MX-COL": {
                "name": "Colima",
                "nativeName": "Colima",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_Colima.svg//128px-Flag_of_Colima.svg.png"
            },
            "MX-DUR": {
                "name": "Durango",
                "nativeName": "Durango",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Flag_of_Durango.svg//128px-Flag_of_Durango.svg.png"
            },
            "MX-GUA": {
                "name": "Guanajuato",
                "nativeName": "Guanajuato",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Guanajuato.svg//128px-Flag_of_Guanajuato.svg.png"
            },
            "MX-GRO": {
                "name": "Guerrero",
                "nativeName": "Guerrero",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Guerrero.svg"
            },
            "MX-HID": {
                "name": "Hidalgo",
                "nativeName": "Hidalgo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Hidalgo.svg//128px-Flag_of_Hidalgo.svg.png"
            },
            "MX-JAL": {
                "name": "Jalisco",
                "nativeName": "Jalisco",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_Jalisco.svg"
            },
            "MX-CMX": {
                "name": "Mexico",
                "nativeName": "Ciudad de México",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Coat_of_arms_of_Mexico_City,_Mexico.svg/128px-Coat_of_arms_of_Mexico_City,_Mexico.svg.png"
            },
            "MX-MIC": {
                "name": "Michoacán",
                "nativeName": "Michoacán",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Michoacan.svg//128px-Flag_of_Michoacan.svg.png"
            },
            "MX-MOR": {
                "name": "Morelos",
                "nativeName": "Morelos",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Morelos.svg"
            },
            "MX-NAY": {
                "name": "Nayarit",
                "nativeName": "Nayarit",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Nayarit.svg//128px-Flag_of_Nayarit.svg.png"
            },
            "MX-NLE": {
                "name": "Nuevo León",
                "nativeName": "Nuevo León",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Flag_of_Nuevo_Leon.svg//128px-Flag_of_Nuevo_Leon.svg.png"
            },
            "MX-OAX": {
                "name": "Oaxaca",
                "nativeName": "Oaxaca",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Flag_of_Oaxaca.svg//128px-Flag_of_Oaxaca.svg.png"
            },
            "MX-PUE": {
                "name": "Puebla",
                "nativeName": "Puebla",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Puebla.svg//128px-Flag_of_Puebla.svg.png"
            },
            "MX-QUE": {
                "name": "Querétaro",
                "nativeName": "Querétaro",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_Queretaro.svg//128px-Flag_of_Queretaro.svg.png"
            },
            "MX-ROO": {
                "name": "Quintana Roo",
                "nativeName": "Quintana Roo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Quintana_Roo.svg"
            },
            "MX-SLP": {
                "name": "San Luis Potosí",
                "nativeName": "San Luis Potosí",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_San_Luis_Potosi.svg//128px-Flag_of_San_Luis_Potosi.svg.png"
            },
            "MX-SIN": {
                "name": "Sinaloa",
                "nativeName": "Sinaloa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Flag_of_Sinaloa.svg//128px-Flag_of_Sinaloa.svg.png"
            },
            "MX-SON": {
                "name": "Sonora",
                "nativeName": "Sonora",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Sonora.svg"
            },
            "MX-TAB": {
                "name": "Tabasco",
                "nativeName": "Tabasco",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Flag_of_Tabasco.svg"
            },
            "MX-TAM": {
                "name": "Tamaulipas",
                "nativeName": "Tamaulipas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Tamaulipas.svg//128px-Flag_of_Tamaulipas.svg.png"
            },
            "MX-TLA": {
                "name": "Tlaxcala",
                "nativeName": "Tlaxcala",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_Tlaxcala.svg//128px-Flag_of_Tlaxcala.svg.png"
            },
            "MX-VER": {
                "name": "Veracruz",
                "nativeName": "Veracruz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Veracruz.svg//128px-Flag_of_Veracruz.svg.png"
            },
            "MX-YUC": {
                "name": "Yucatán",
                "nativeName": "Yucatán",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Republic_of_Yucatan.svg"
            },
            "MX-ZAC": {
                "name": "Zacatecas",
                "nativeName": "Zacatecas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Zacatecas.svg//128px-Flag_of_Zacatecas.svg.png"
            },
            "MX-MEX": {
                "name": "State of Mexico",
                "nativeName": "Estado de México",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_the_State_of_Mexico.svg/128px-Flag_of_the_State_of_Mexico.svg.png"
            }
        }
    },
    "MN": {
        "name": "Mongolia",
        "nativeName": "Mongol Uls Монгол Улс",
        "regions": {
            "MN-073": {
                "name": "Arkhangai Province",
                "nativeName": "Архангай ᠠᠷᠤᠬᠠᠩᠭ᠋ᠠᠢ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mn_flag_arkhangai_aimag_2014.png/200px-Mn_flag_arkhangai_aimag_2014.png"
            },
            "MN-071": {
                "name": "Bayan-Ölgii Province",
                "nativeName": "Баян-Өлгий ᠪᠠᠶ᠋ᠠᠨ ᠥᠯᠦᠭᠡᠢ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/44/Mn_flag_bayan_olgiy_aymag.svg"
            },
            "MN-069": {
                "name": "Bayankhongor Province",
                "nativeName": "Баянхонгор ᠪᠠᠶᠠᠨᠬᠣᠩᠭᠣᠷ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Mn_flag_bayankhongor_aymag.png/175px-Mn_flag_bayankhongor_aymag.png"
            },
            "MN-067": {
                "name": "Bulgan Province",
                "nativeName": "Булган ᠪᠤᠯᠠᠭᠠᠨ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Mn_flag_bulgan_aimag.svg"
            },
            "MN-037": {
                "name": "Darkhan-Uul Province",
                "nativeName": "Дархан-Уул ᠳᠠᠷᠬᠠᠨ ᠠᠭᠤᠯᠠ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Mn_flag_darkhan_uul_aymag.svg"
            },
            "MN-061": {
                "name": "Dornod Province",
                "nativeName": "Дорнод ᠳᠣᠷᠤᠨᠠᠳᠤ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Mn_flag_dornod_aimag_2001.svg"
            },
            "MN-063": {
                "name": "Dornogovi Province",
                "nativeName": "Дорноговь ᠳᠣᠷᠤᠨᠠᠭᠣᠪᠢ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Mn_flag_dornogovi_aimag_2011.svg"
            },
            "MN-059": {
                "name": "Dundgobi Province",
                "nativeName": "Дундговь ᠳᠤᠮᠳᠠᠭᠣᠪᠢ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Mn_flag_dundgovi_aimag.svg"
            },
            "MN-065": {
                "name": "Govi-Altai Province",
                "nativeName": "Говь-Алтай ᠭᠣᠪᠢ ᠠᠯᠲᠠᠢ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/51/Mn_flag_govi-altai_aimag_2011.svg"
            },
            "MN-064": {
                "name": "Govisümber Province",
                "nativeName": "Говьсүмбэр ᠭᠣᠪᠢ ᠰᠦᠮᠪᠦᠷ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Mn_flag_govisümber_aimag.svg"
            },
            "MN-039": {
                "name": "Khentii Province",
                "nativeName": "Хэнтий ᠬᠡᠨᠲᠡᠢ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Khentii_aimag_Flag.svg"
            },
            "MN-043": {
                "name": "Khovd Province",
                "nativeName": "Ховд ᠬᠣᠪᠳᠤ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Khovd_Aimag_(since_2014).svg"
            },
            "MN-053": {
                "name": "Ömnögovi Province",
                "nativeName": "Өмнөговь ᠡᠮᠦᠨᠡᠭᠣᠪᠢ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/97/Mn_flag_ömnögovi_aimag_2011.svg"
            },
            "MN-035": {
                "name": "Orkhon Province",
                "nativeName": "Орхон ᠣᠷᠬᠤᠨ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/91/Orkhon_Aimag_Flag.svg"
            },
            "MN-055": {
                "name": "Övörkhangai Province",
                "nativeName": "Өвөрхангай ᠥᠪᠦᠷᠬᠠᠩᠭ᠋ᠠᠢ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Mn_flag_Ovurhangai_aymag.svg"
            },
            "MN-049": {
                "name": "Selenge Province",
                "nativeName": "Сэлэнгэ ᠰᠡᠯᠡᠩᠭᠡ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Mn_flag_selenge_aimag_1999.svg"
            },
            "MN-051": {
                "name": "Sükhbaatar Province",
                "nativeName": "Сүхбаатар ᠰᠦᠬᠡᠪᠠᠭᠠᠲᠤᠷ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mn_flag_sükhbaatar_aimag.svg"
            },
            "MN-047": {
                "name": "Töv Province",
                "nativeName": "Төв ᠲᠥᠪ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Tov_aymag_flag.svg"
            },
            "MN-046": {
                "name": "Uvs Province",
                "nativeName": "Увс ᠤᠪᠰᠤ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Uvs_Aimag_Flag.svg"
            },
            "MN-057": {
                "name": "Zavkhan Province",
                "nativeName": "Завхан ᠵᠠᠪᠬᠠᠨ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mn_flag_zavkhan_aimag.svg"
            },
            "MN-1": {
                "name": "Ulaanbaatar",
                "nativeName": "Улаанбаатар ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_ulaanbaatar.svg"
            },
            "MN-041": {
                "name": "Hovsgel",
                "nativeName": "Хөвсгөл ᠬᠥᠪᠰᠦᠭᠦᠯ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/72/Mn_flag_khövsgöl_aimag_2014.svg"
            }
        }
    },
    "MM": {
        "name": "Myanmar",
        "nativeName": "Myanma မြန်မာ",
        "regions": {
            "MM-07": {
                "name": "Ayeyarwady Region",
                "nativeName": "ဧရာဝတီတိုင်းဒေသကြီး",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Ayeyarwady_Region.svg/128px-Flag_of_Ayeyarwady_Region.svg.png"
            },
            "MM-02": {
                "name": "Bago Region",
                "nativeName": "ပဲခူးတိုင်းဒေသကြီး",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Bago_Region.png/150px-Flag_of_Bago_Region.png"
            },
            "MM-03": {
                "name": "Magway Region",
                "nativeName": "မကွေးတိုင်းဒေသကြီး",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_Magway_Region.svg"
            },
            "MM-04": {
                "name": "Mandalay Region",
                "nativeName": "မန္တလေးတိုင်း",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Mandalay_Region.svg"
            },
            "MM-01": {
                "name": "Sagaing Region",
                "nativeName": "စစ်ကိုင်းတိုင်း",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Sagaing_Region_(2019).svg/128px-Flag_of_Sagaing_Region_(2019).svg.png"
            },
            "MM-05": {
                "name": "Tanintharyi Region",
                "nativeName": "တနင်္သာရီတိုင်း",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Tanintharyi_Division.svg"
            },
            "MM-06": {
                "name": "Yangon Region",
                "nativeName": "ရန်ကုန်တိုင်းဒေသကြီး",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_Yangon_Region.svg/128px-Flag_of_Yangon_Region.svg.png"
            },
            "MM-14": {
                "name": "Chin State",
                "nativeName": "ချင်းပြည်နယ်",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/16/Flag_of_Chin_State.svg"
            },
            "MM-11": {
                "name": "Kachin State",
                "nativeName": "ကချင်ပြည်နယ်",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_Kachin_State.svg/128px-Flag_of_Kachin_State.svg.png"
            },
            "MM-12": {
                "name": "Kayah State",
                "nativeName": "ကယားပြည်နယ်‌",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Kayah_State.svg"
            },
            "MM-13": {
                "name": "Kayin State",
                "nativeName": "ကရင်ပြည်နယ်",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Kayin_State.svg"
            },
            "MM-15": {
                "name": "Mon State",
                "nativeName": "မွန်ပြည်နယ်",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Mon_State_(2018).svg/128px-Flag_of_Mon_State_(2018).svg.png"
            },
            "MM-17": {
                "name": "Shan State",
                "nativeName": "ရှမ်းပြည်နယ်",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Flag_of_the_Shan_State.svg"
            },
            "MM-18": {
                "name": "Naypyidaw Union Territory",
                "nativeName": "နေပြည်တော် ပြည်ထောင်စုနယ်မြ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_Naypyidaw_Union_Territory.svg"
            },
            "MM-16": {
                "name": "Rakhine",
                "nativeName": "ရခိုင်ပြည်နယ်",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Rakhine.svg"
            }
        }
    },
    "NL": {
        "name": "Netherlands",
        "nativeName": "Nederland",
        "regions": {
            "NL-DR": {
                "name": "Drenthe",
                "nativeName": "Drenthe",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Drenthe.svg"
            },
            "NL-FL": {
                "name": "Flevoland",
                "nativeName": "Flevoland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Flevoland.svg"
            },
            "NL-FR": {
                "name": "Friesland",
                "nativeName": "Fryslân",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Frisian_flag.svg"
            },
            "NL-GE": {
                "name": "Gelderland",
                "nativeName": "Gelderland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Gelderland.svg"
            },
            "NL-GR": {
                "name": "Groningen",
                "nativeName": "Groningen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_Groningen.svg"
            },
            "NL-LI": {
                "name": "Limburg",
                "nativeName": "Limburg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Limburg_(Netherlands).svg//128px-Flag_of_Limburg_(Netherlands).svg.png"
            },
            "NL-NB": {
                "name": "North Brabant",
                "nativeName": "Noord-Brabant",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a2/North_Brabant-Flag.svg"
            },
            "NL-NH": {
                "name": "North Holland",
                "nativeName": "Noord-Holland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Holland.svg"
            },
            "NL-OV": {
                "name": "Overijssel",
                "nativeName": "Overijssel",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Overijssel.svg"
            },
            "NL-ZH": {
                "name": "South Holland",
                "nativeName": "Zuid-Holland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Zuid-Holland.svg"
            },
            "NL-UT": {
                "name": "Utrecht",
                "nativeName": "Utrecht",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Utrecht_(province)-Flag.svg"
            },
            "NL-ZE": {
                "name": "Zeeland",
                "nativeName": "Zeeland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Zeeland.svg//128px-Flag_of_Zeeland.svg.png"
            }
        }
    },
    "NZ": {
        "name": "New Zealand",
        "nativeName": "New Zealand",
        "regions": {
            "NZ-CIT": {
                "name": "Chatham Islands",
                "nativeName": "Chatham Islands",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Chatham_Islands.svg"
            },
            "NZ-AUK": {
                "name": "Auckland",
                "nativeName": "Auckland",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/80/Flag_of_Auckland_Region.svg"
            },
            "NZ-BOP": {
                "name": "Bay of Plenty",
                "nativeName": "Bay of Plenty",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/4d/Flag_of_Bay_of_Plenty_Region.svg"
            },
            "NZ-CAN": {
                "name": "Canterbury",
                "nativeName": "Canterbury",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/e/e3/Flag_of_Canterbury_Region.svg"
            },
            "NZ-GIS": {
                "name": "Gisborne",
                "nativeName": "Gisborne",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/e/e4/Flag_of_Gisborne_District.svg"
            },
            "NZ-HKB": {
                "name": "Hawke's Bay",
                "nativeName": "Hawke's Bay",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/c/c0/Flag_of_Hawke's_Bay.svg"
            },
            "NZ-MBH": {
                "name": "Marlborough",
                "nativeName": "Marlborough",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/a/a1/Flag_of_Marlborough_District.svg"
            },
            "NZ-MWT": {
                "name": "Manawatū-Whanganui",
                "nativeName": "Manawatū-Whanganui",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/8a/Flag_of_Manawatū-Whanganui.svg"
            },
            "NZ-NSN": {
                "name": "Nelson",
                "nativeName": "Nelson",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nelson_flag.svg/128px-Nelson_flag.svg.png"
            },
            "NZ-NTL": {
                "name": "Northland",
                "nativeName": "Northland",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/c/c3/Flag_of_Northland_Region.svg"
            },
            "NZ-OTA": {
                "name": "Otago",
                "nativeName": "Otago",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Otago.svg"
            },
            "NZ-STL": {
                "name": "Southland",
                "nativeName": "Southland",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/a/a1/Flag_of_Southland_Region.svg"
            },
            "NZ-TAS": {
                "name": "Tasman",
                "nativeName": "Tasman",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/b/ba/Flag_of_Tasman_District.svg"
            },
            "NZ-TKI": {
                "name": "Taranaki",
                "nativeName": "Taranaki",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/d/db/Flag_of_Taranaki.svg"
            },
            "NZ-WGN": {
                "name": "Wellington",
                "nativeName": "Wellington",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/42/Flag_of_Wellington_Region.svg"
            },
            "NZ-WKO": {
                "name": "Waikato",
                "nativeName": "Waikato",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/1/12/Flag_of_Waikato.svg"
            },
            "NZ-WTC": {
                "name": "West Coast",
                "nativeName": "West Coast",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/6b/Flag_of_West_Coast_Region.svg"
            }
        }
    },
    "NI": {
        "name": "Nicaragua",
        "nativeName": "Nicaragua",
        "regions": {
            "NI-BO": {
                "name": "Boaco",
                "nativeName": "Boaco",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Boaco.svg"
            },
            "NI-CA": {
                "name": "Carazo",
                "nativeName": "Carazo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Jinotepe.svg"
            },
            "NI-CI": {
                "name": "Chinandega",
                "nativeName": "Chinandega",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_Chinandega.svg"
            },
            "NI-CO": {
                "name": "Chontales",
                "nativeName": "Chontales",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Juigalpa.svg//128px-Flag_of_Juigalpa.svg.png"
            },
            "NI-ES": {
                "name": "Estelí",
                "nativeName": "Estelí",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Esteli.svg"
            },
            "NI-GR": {
                "name": "Granada",
                "nativeName": "Granada",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Granada,_Nicaragua.svg//128px-Flag_of_Granada,_Nicaragua.svg.png"
            },
            "NI-JI": {
                "name": "Jinotega",
                "nativeName": "Jinotega",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Jinotega.gif/167px-Flag_of_Jinotega.gif"
            },
            "NI-LE": {
                "name": "León",
                "nativeName": "León",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_Leon,_Nicaragua.svg//128px-Flag_of_Leon,_Nicaragua.svg.png"
            },
            "NI-MD": {
                "name": "Madriz",
                "nativeName": "Madriz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Madriz.svg"
            },
            "NI-MN": {
                "name": "Managua",
                "nativeName": "Managua (Municipio)",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Managua.svg//128px-Flag_of_Managua.svg.png"
            },
            "NI-MS": {
                "name": "Masaya",
                "nativeName": "Masaya",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Flag_of_Masaya.svg//128px-Flag_of_Masaya.svg.png"
            },
            "NI-MT": {
                "name": "Matagalpa",
                "nativeName": "Matagalpa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Matagalpa.svg//128px-Flag_of_Matagalpa.svg.png"
            },
            "NI-NS": {
                "name": "Nueva Segovia",
                "nativeName": "Nueva Segovia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Nueva_Segovia.svg//128px-Flag_of_Nueva_Segovia.svg.png"
            },
            "NI-RI": {
                "name": "Rivas",
                "nativeName": "Rivas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Rivas.svg"
            },
            "NI-SJ": {
                "name": "Rio San Juan",
                "nativeName": "Río San Juan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Flag_of_San_Carlos,_Nicaragua.svg"
            },
            "NI-AN": {
                "name": "North Caribbean Coast",
                "nativeName": "Región Autónoma de la Costa Caribe Norte",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Region_Autonoma_del_Atlantico_Norte.svg//128px-Flag_of_Region_Autonoma_del_Atlantico_Norte.svg.png"
            },
            "NI-AS": {
                "name": "South Caribbean Coast",
                "nativeName": "Región Autónoma de la Costa Caribe Sur",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_Region_Autonoma_Atlantico_Sur.svg"
            }
        }
    },
    "NO": {
        "name": "Norway",
        "nativeName": "Norge",
        "regions": {
            "NO-15": {
                "name": "Møre og Romsdal",
                "nativeName": "Møre og Romsdal",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/db/Møre_og_Romsdal_våpen.svg"
            },
            "NO-18": {
                "name": "Nordland",
                "nativeName": "Nordland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Nordland_våpen.svg"
            },
            "NO-03": {
                "name": "Oslo",
                "nativeName": "Oslo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/da/Oslo_komm.svg"
            },
            "NO-11": {
                "name": "Rogaland",
                "nativeName": "Rogaland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Rogaland_våpen.svg"
            },
            "NO-50": {
                "name": "Trøndelag",
                "nativeName": "Trøndelag",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Trøndelag_våpen.svg"
            },
            "NO-31": {
                "name": "Østfold",
                "nativeName": "Østfold",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Østfold_våpen.svg"
            },
            "NO-32": {
                "name": "Akershus",
                "nativeName": "Akershus",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Akershus_våpen.svg"
            },
            "NO-33": {
                "name": "Buskerud",
                "nativeName": "Buskerud",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Buskerud_våpen.svg"
            },
            "NO-34": {
                "name": "Innlandet",
                "nativeName": "Innlandet",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Innlandet_våpen.svg"
            },
            "NO-39": {
                "name": "Vestfold",
                "nativeName": "Vestfold",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Vestfold_våpen_2024.svg"
            },
            "NO-40": {
                "name": "Telemark",
                "nativeName": "Telemark",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Telemark_våpen_2024.svg"
            },
            "NO-42": {
                "name": "Agder",
                "nativeName": "Agder",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/25/Agder_våpen.svg"
            },
            "NO-46": {
                "name": "Vestland",
                "nativeName": "Vestland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Vestland_våpen.svg"
            },
            "NO-55": {
                "name": "Troms",
                "nativeName": "Troms",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/da/Troms_våpen.svg"
            },
            "NO-56": {
                "name": "Finnmark",
                "nativeName": "Finnmark",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/40/Finnmark_våpen.svg"
            },
            "NO-38": {
                "name": "Vestfold og Telemark",
                "nativeName": "Vestfold og Telemark",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/04/Vestfold_og_Telemark_våpen.svg"
            },
            "NO-30": {
                "name": "Viken",
                "nativeName": "Viken",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Viken_våpen.svg"
            },
            "NO-54": {
                "name": "Troms og Finnmark",
                "nativeName": "Troms og Finnmark",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/03/Troms_og_Finnmark_våpen.svg"
            }
        }
    },
    "PK": {
        "name": "Pakistan",
        "nativeName": "Pākistān پاکستان",
        "regions": {
            "PK-JK": {
                "name": "Azad Kashmir",
                "nativeName": "آزاد کشمیر",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Azad_Kashmir.svg"
            },
            "PK-BA": {
                "name": "Balochistan",
                "nativeName": "بلوچستان",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Balochistan.svg"
            },
            "PK-GB": {
                "name": "Gilgit-Baltistan",
                "nativeName": "گلگت بلتستان",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Gilgit-Baltistan.png"
            },
            "PK-IS": {
                "name": "Islamabad",
                "nativeName": "وفاقی دارالحکومت اسلام آباد",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Proposed_Flag_of_Islamabad_Capital_Territory.svg"
            },
            "PK-KP": {
                "name": "Khyber Pakhtunkhwa",
                "nativeName": "خیبر پختونخوا",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Khyber_Pakhtunkhwa.svg"
            },
            "PK-PB": {
                "name": "Punjab",
                "nativeName": "پنجاب",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_Punjab.svg"
            },
            "PK-SD": {
                "name": "Sindh",
                "nativeName": "سندھ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_Sindh.svg"
            }
        }
    },
    "PY": {
        "name": "Paraguay",
        "nativeName": "Paraguái",
        "regions": {
            "PY-16": {
                "name": "Alto Paraguay",
                "nativeName": "Alto Paraguay",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Alto_Paraguay_Department.svg"
            },
            "PY-10": {
                "name": "Alto Paraná",
                "nativeName": "Alto Paraná",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Alto_Paraná_Department.svg"
            },
            "PY-13": {
                "name": "Amambay",
                "nativeName": "Amambay",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Flag_of_Amambay.svg"
            },
            "PY-ASU": {
                "name": "Asunción",
                "nativeName": "Asunción",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_Asunción.svg//128px-Flag_of_Asunción.svg.png"
            },
            "PY-19": {
                "name": "Boquerón",
                "nativeName": "Boquerón",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Boquerón_Department.svg"
            },
            "PY-5": {
                "name": "Caaguazú",
                "nativeName": "Caaguazú",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Caaguazú_Department.svg"
            },
            "PY-6": {
                "name": "Caazapá",
                "nativeName": "Caazapá",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Caazapá_Department.svg"
            },
            "PY-14": {
                "name": "Canindeyú",
                "nativeName": "Canindeyú",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Canindeyú_Department.svg"
            },
            "PY-11": {
                "name": "Central",
                "nativeName": "Central",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Flag_of_Central_Department,_Paraguay.svg"
            },
            "PY-1": {
                "name": "Concepción",
                "nativeName": "Concepción",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Concepción_Department.svg"
            },
            "PY-3": {
                "name": "Cordillera",
                "nativeName": "Cordillera",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bandera_Dpto_Cordillera.png/192px-Bandera_Dpto_Cordillera.png"
            },
            "PY-4": {
                "name": "Guairá",
                "nativeName": "Guairá",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Guairá_Department.svg"
            },
            "PY-7": {
                "name": "Itapúa",
                "nativeName": "Itapúa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Itapflag.PNG/150px-Itapflag.PNG"
            },
            "PY-8": {
                "name": "Misiones",
                "nativeName": "Misiones",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bandera_del_Departamento_de_Misiones.JPG/149px-Bandera_del_Departamento_de_Misiones.JPG"
            },
            "PY-12": {
                "name": "Ñeembucú",
                "nativeName": "Ñeembucú",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ñeembucú_Department.svg"
            },
            "PY-9": {
                "name": "Paraguarí",
                "nativeName": "Paraguarí",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bandera_del_Departamento_de_Paraguarí.JPG/150px-Bandera_del_Departamento_de_Paraguarí.JPG"
            },
            "PY-15": {
                "name": "Presidente Hayes",
                "nativeName": "Presidente Hayes",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Presidente_Hayes_Department.svg"
            },
            "PY-2": {
                "name": "San Pedro",
                "nativeName": "San Pedro",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bandera_del_Departamento_de_San_Pedro.JPG/161px-Bandera_del_Departamento_de_San_Pedro.JPG"
            }
        }
    },
    "PE": {
        "name": "Peru",
        "nativeName": "Piruw",
        "regions": {
            "PE-AMA": {
                "name": "Department of Amazonas",
                "nativeName": "Amazonas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Amazonas_bandera.png/164px-Amazonas_bandera.png"
            },
            "PE-ANC": {
                "name": "Department of Ancash",
                "nativeName": "Ancash",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bandera_Ancash.png/150px-Bandera_Ancash.png"
            },
            "PE-APU": {
                "name": "Department of Apurímac",
                "nativeName": "Apurímac",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bandera_Región_Apurimac.svg//128px-Bandera_Región_Apurimac.svg.png"
            },
            "PE-ARE": {
                "name": "Department of Arequipa",
                "nativeName": "Arequipa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bandera_de_Arequipa.svg//128px-Bandera_de_Arequipa.svg.png"
            },
            "PE-AYA": {
                "name": "Department of Ayacucho",
                "nativeName": "Ayacucho",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Ayacucho.svg"
            },
            "PE-CAJ": {
                "name": "Department of Cajamarca",
                "nativeName": "Cajamarca",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bandera_de_Cajamarca.svg//128px-Bandera_de_Cajamarca.svg.png"
            },
            "PE-CAL": {
                "name": "Constitutional Province of Callao",
                "nativeName": "Callao",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bandera_del_Callao.svg//128px-Bandera_del_Callao.svg.png"
            },
            "PE-CUS": {
                "name": "Department of Cuzco",
                "nativeName": "Cuzco",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Cusco_(2021).svg"
            },
            "PE-HUV": {
                "name": "Department of Huancavelica",
                "nativeName": "Huancavelica",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Huancavelica.svg"
            },
            "PE-HUC": {
                "name": "Department of Huánuco",
                "nativeName": "Huánuco",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Huánuco.svg"
            },
            "PE-ICA": {
                "name": "Department of Ica",
                "nativeName": "Ica",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bandera_Región_Ica.png/167px-Bandera_Región_Ica.png"
            },
            "PE-JUN": {
                "name": "Department of Junín",
                "nativeName": "Junín",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Junin.svg"
            },
            "PE-LAL": {
                "name": "Department of La Libertad",
                "nativeName": "La Libertad",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bandera_de_La_Libertad_Peru.svg"
            },
            "PE-LAM": {
                "name": "Department of Lambayeque",
                "nativeName": "Lambayeque",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Lambayeque_Department.svg"
            },
            "PE-LIM": {
                "name": "Department of Lima",
                "nativeName": "Lima",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/23/Lima_region_flag.svg"
            },
            "PE-LOR": {
                "name": "Department of Loreto",
                "nativeName": "Loreto",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bandera_Región_Loreto.png/150px-Bandera_Región_Loreto.png"
            },
            "PE-MDD": {
                "name": "Department of Madre de Dios",
                "nativeName": "Madre de Dios",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Madre_de_Dios_Department.svg"
            },
            "PE-MOQ": {
                "name": "Department of Moquegua",
                "nativeName": "Moquegua",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bandera_de_Moquegua.svg"
            },
            "PE-PAS": {
                "name": "Department of Pasco",
                "nativeName": "Pasco",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Flag_of_Pasco_Department.svg"
            },
            "PE-PIU": {
                "name": "Department of Piura",
                "nativeName": "Piura",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Bandera_de_la_región_de_Piura.svg"
            },
            "PE-PUN": {
                "name": "Department of Puno",
                "nativeName": "Puno",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bandera_Región_Puno.png/150px-Bandera_Región_Puno.png"
            },
            "PE-SAM": {
                "name": "Department of San Martín",
                "nativeName": "San Martín",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandera_Región_San_Martín.png/150px-Bandera_Región_San_Martín.png"
            },
            "PE-TAC": {
                "name": "Department of Tacna",
                "nativeName": "Tacna",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Flag_of_Tacna.svg//128px-Flag_of_Tacna.svg.png"
            },
            "PE-TUM": {
                "name": "Department of Tumbes",
                "nativeName": "Tumbes",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/Bandera_de_Tumbes.svg"
            },
            "PE-UCA": {
                "name": "Department of Ucayali",
                "nativeName": "Ucayali",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bandera_de_Ucayali.svg//128px-Bandera_de_Ucayali.svg.png"
            }
        }
    },
    "PH": {
        "name": "Philippines",
        "nativeName": "Pilipinas",
        "regions": {
            "PH-14": {
                "name": "Bangsamoro",
                "nativeName": "Bangsamoro",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/95/Flag_of_Bangsamoro.svg"
            },
            "PH-05": {
                "name": "Bicol Region",
                "nativeName": "Bicol Region",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/PH-CAS_Flag.png/256px-PH-CAS_Flag.png"
            },
            "PH-02": {
                "name": "Cagayan Valley",
                "nativeName": "Cagayan Valley",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Isabela_(province).svg/128px-Flag_of_Isabela_(province).svg.png"
            },
            "PH-40": {
                "name": "Calabarzon",
                "nativeName": "Calabarzon",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/PH-CAV_Flag.png/256px-PH-CAV_Flag.png"
            },
            "PH-13": {
                "name": "Caraga",
                "nativeName": "Caraga",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/PH-AGN_Flag.png/256px-PH-AGN_Flag.png"
            },
            "PH-03": {
                "name": "Central Luzon",
                "nativeName": "Central Luzon",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PH-BUL_Flag.png/256px-PH-BUL_Flag.png"
            },
            "PH-07": {
                "name": "Central Visayas",
                "nativeName": "Central Visayas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Cebu_(province).svg/128px-Flag_of_Cebu_(province).svg.png"
            },
            "PH-15": {
                "name": "Cordillera Administrative Region",
                "nativeName": "Cordillera Administrative Region",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Seal_of_the_Cordillera_Administrative_Region.png"
            },
            "PH-11": {
                "name": "Davao Region",
                "nativeName": "Davao Region",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Vlag_Fil_DavaodelSur.gif"
            },
            "PH-08": {
                "name": "Eastern Visayas",
                "nativeName": "Eastern Visayas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Leyte_Flag.png/256px-Leyte_Flag.png"
            },
            "PH-01": {
                "name": "Ilocos Region",
                "nativeName": "Ilocos Region",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_Pangasinan.svg/128px-Flag_of_Pangasinan.svg.png"
            },
            "PH-00": {
                "name": "Metro Manila",
                "nativeName": "Metro Manila",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_Metro_Manila.png"
            },
            "PH-41": {
                "name": "Mimaropa",
                "nativeName": "Mimaropa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Orien._Mindoro_Flag.png/256px-Orien._Mindoro_Flag.png"
            },
            "PH-10": {
                "name": "Northern Mindanao",
                "nativeName": "Northern Mindanao",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/PH-MSR_Flag.png/256px-PH-MSR_Flag.png"
            },
            "PH-12": {
                "name": "Soccsksargen",
                "nativeName": "Soccsksargen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7f/South_Cotabato_Flag.png"
            },
            "PH-06": {
                "name": "Western Visayas",
                "nativeName": "Western Visayas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/PH-NEC_Flag.png/256px-PH-NEC_Flag.png"
            },
            "PH-09": {
                "name": "Zamboanga Peninsula",
                "nativeName": "Zamboanga Peninsula",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Zamboanga_del_Sur_gov._Flag.png/256px-Zamboanga_del_Sur_gov._Flag.png"
            }
        }
    },
    "PL": {
        "name": "Poland",
        "nativeName": "Polska",
        "regions": {
            "PL-30": {
                "name": "Greater Poland Voivodeship",
                "nativeName": "województwo wielkopolskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9b/POL_województwo_wielkopolskie_flag.svg"
            },
            "PL-04": {
                "name": "Kuyavian-Pomeranian Voivodeship",
                "nativeName": "województwo kujawsko-pomorskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a2/POL_województwo_kujawsko-pomorskie_flag.svg"
            },
            "PL-12": {
                "name": "Lesser Poland Voivodeship",
                "nativeName": "województwo małopolskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/80/POL_województwo_małopolskie_flag.svg"
            },
            "PL-10": {
                "name": "Łódź Voivodeship",
                "nativeName": "województwo łódzkie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5b/POL_województwo_łódzkie_1_flag.svg"
            },
            "PL-02": {
                "name": "Lower Silesian Voivodeship",
                "nativeName": "województwo dolnośląskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/POL_województwo_dolnośląskie_flag.svg"
            },
            "PL-06": {
                "name": "Lublin Voivodeship",
                "nativeName": "województwo lubelskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/70/POL_województwo_lubelskie_flag.svg"
            },
            "PL-08": {
                "name": "Lubusz Voivodeship",
                "nativeName": "województwo lubuskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/POL_województwo_lubuskie_flag.svg"
            },
            "PL-14": {
                "name": "Masovian Voivodeship",
                "nativeName": "województwo mazowieckie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/33/POL_województwo_mazowieckie_flag.svg"
            },
            "PL-16": {
                "name": "Opole Voivodeship",
                "nativeName": "województwo opolskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/POL_województwo_opolskie_flag.svg"
            },
            "PL-20": {
                "name": "Podlaskie Voivodeship",
                "nativeName": "województwo podlaskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/41/POL_województwo_podlaskie_flag.svg"
            },
            "PL-22": {
                "name": "Pomeranian Voivodeship",
                "nativeName": "województwo pomorskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/POL_województwo_pomorskie_flag.svg"
            },
            "PL-24": {
                "name": "Silesian Voivodeship",
                "nativeName": "województwo śląskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5b/POL_województwo_śląskie_flag.svg"
            },
            "PL-18": {
                "name": "Subcarpathian Voivodeship",
                "nativeName": "województwo podkarpackie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/POL_województwo_podkarpackie_flag.svg//128px-POL_województwo_podkarpackie_flag.svg.png"
            },
            "PL-26": {
                "name": "Świętokrzyskie Voivodeship",
                "nativeName": "województwo świętokrzyskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/69/POL_województwo_świętokrzyskie_flag.svg"
            },
            "PL-28": {
                "name": "Warmian-Masurian Voivodeship",
                "nativeName": "województwo warmińsko-mazurskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/de/POL_województwo_warmińsko-mazurskie_flag.svg"
            },
            "PL-32": {
                "name": "West Pomeranian Voivodeship",
                "nativeName": "województwo zachodniopomorskie",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/37/POL_województwo_zachodniopomorskie_flag.svg"
            }
        }
    },
    "PT": {
        "name": "Portugal",
        "nativeName": "Portugal",
        "regions": {
            "PT11": {
                "name": "North Region",
                "nativeName": "Norte",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/pt/PT11.png"
            },
            "PT15": {
                "name": "Algarve",
                "nativeName": "Algarve",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/pt/PT15.png"
            },
            "PT16": {
                "name": "Central Region",
                "nativeName": "Centro",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/pt/PT16.png"
            },
            "PT17": {
                "name": "Lisbon Metropolitan Area",
                "nativeName": "Lisboa e Vale do Tejo",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/pt/PT17.png"
            },
            "PT18": {
                "name": "Alentejo",
                "nativeName": "Alentejo",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/pt/PT18.png"
            },
            "PT20": {
                "name": "Azores",
                "nativeName": "Açores",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Flag_of_the_Azores.svg"
            },
            "PT30": {
                "name": "Madeira",
                "nativeName": "Madeira",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_Madeira.svg"
            }
        }
    },
    "RO": {
        "name": "Romania",
        "nativeName": "România",
        "regions": {
            "RO-B": {
                "name": "Bucharest",
                "nativeName": "București",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/ROU_Bucharest_Flag.svg//128px-ROU_Bucharest_Flag.svg.png"
            },
            "RO-AB": {
                "name": "Alba County",
                "nativeName": "Alba",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/RO_Alba_County_Flag.svg/128px-RO_Alba_County_Flag.svg.png"
            },
            "RO-AR": {
                "name": "Arad County",
                "nativeName": "Arad",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/ROU_AR_Arad_Flag.png/128px-ROU_AR_Arad_Flag.png"
            },
            "RO-AG": {
                "name": "Argeș County",
                "nativeName": "Argeș",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Actual_Argeș_county_CoA.png"
            },
            "RO-BC": {
                "name": "Bacău County",
                "nativeName": "Bacău",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Stema_judetului_Bacau.svg/128px-Stema_judetului_Bacau.svg.png"
            },
            "RO-BH": {
                "name": "Bihor County",
                "nativeName": "Bihor",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Actual_Bihor_county_CoA.svg/128px-Actual_Bihor_county_CoA.svg.png"
            },
            "RO-BN": {
                "name": "Bistrița-Năsăud County",
                "nativeName": "Bistrița-Năsăud",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Stema_Bistrita-Nasaud.svg/128px-Stema_Bistrita-Nasaud.svg.png"
            },
            "RO-BT": {
                "name": "Botoșani County",
                "nativeName": "Botoșani",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stema_judetului_Botosani.svg/128px-Stema_judetului_Botosani.svg.png"
            },
            "RO-BV": {
                "name": "Brașov County",
                "nativeName": "Brașov",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Stema_judetul_brasov_nou.png"
            },
            "RO-BR": {
                "name": "Brăila County",
                "nativeName": "Brăila",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/57/Stema_judetului_Braila.svg"
            },
            "RO-BZ": {
                "name": "Buzău County",
                "nativeName": "Buzău",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/02/Actual_Buzău_county_CoA.png"
            },
            "RO-CS": {
                "name": "Caraș-Severin County",
                "nativeName": "Caraș-Severin",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Actual_Caraș-Severin_county_CoA.png"
            },
            "RO-CJ": {
                "name": "Cluj County",
                "nativeName": "Cluj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Actual_Cluj_county_CoA.svg/128px-Actual_Cluj_county_CoA.svg.png"
            },
            "RO-CT": {
                "name": "Constanța County",
                "nativeName": "Constanța",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Actual_Constanța_county_CoA.png"
            },
            "RO-CV": {
                "name": "Covasna County",
                "nativeName": "Covasna",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Flag_of_Covasna_County,_Romania.svg"
            },
            "RO-CL": {
                "name": "Călărași County",
                "nativeName": "Călărași",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/52/ROU_CL_Calarasi_CoA1.png"
            },
            "RO-DJ": {
                "name": "Dolj County",
                "nativeName": "Dolj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Stema_judetului_Dolj.svg/128px-Stema_judetului_Dolj.svg.png"
            },
            "RO-DB": {
                "name": "Dâmbovița County",
                "nativeName": "Dâmbovița",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Stema_Dambovita.svg/128px-Stema_Dambovita.svg.png"
            },
            "RO-GL": {
                "name": "Galați County",
                "nativeName": "Galați",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/33/Stema_judetului_Galati.svg"
            },
            "RO-GR": {
                "name": "Giurgiu County",
                "nativeName": "Giurgiu",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Giurgiu_County,_Romania.svg"
            },
            "RO-GJ": {
                "name": "Gorj County",
                "nativeName": "Gorj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Stema_Gorj.svg"
            },
            "RO-HR": {
                "name": "Harghita County",
                "nativeName": "Harghita",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Stema_Harghita.svg/128px-Stema_Harghita.svg.png"
            },
            "RO-HD": {
                "name": "Hunedoara County",
                "nativeName": "Hunedoara",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Actual_Hunedoara_county_CoA.svg"
            },
            "RO-IL": {
                "name": "Ialomița County",
                "nativeName": "Ialomița",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Ialomiţa_County,_Romania.svg"
            },
            "RO-IS": {
                "name": "Iași County",
                "nativeName": "Iași",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Actual_Iasi_county_CoA.svg"
            },
            "RO-IF": {
                "name": "Ilfov County",
                "nativeName": "Ilfov",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Actual_Ilfov_county_CoA.png"
            },
            "RO-MM": {
                "name": "Maramureș County",
                "nativeName": "Maramureș",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Maramureș_County.svg"
            },
            "RO-MH": {
                "name": "Mehedinți County",
                "nativeName": "Mehedinți",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Actual_Mehedinți_county_CoA.png"
            },
            "RO-MS": {
                "name": "Mureș County",
                "nativeName": "Mureș",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mures_county_coat_of_arms.svg/128px-Mures_county_coat_of_arms.svg.png"
            },
            "RO-NT": {
                "name": "Neamț County",
                "nativeName": "Neamț",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Stema_Neamt.svg"
            },
            "RO-OT": {
                "name": "Olt County",
                "nativeName": "Olt",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/de/Actual_Olt_county_CoA.png"
            },
            "RO-PH": {
                "name": "Prahova County",
                "nativeName": "Prahova",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Stema_Prahova.svg"
            },
            "RO-SM": {
                "name": "Satu Mare County",
                "nativeName": "Satu Mare",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Satu_Mare_county_CoA.png/256px-Satu_Mare_county_CoA.png"
            },
            "RO-SB": {
                "name": "Sibiu County",
                "nativeName": "Sibiu",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/28/Sibiu_county_coat_of_arms.png"
            },
            "RO-SV": {
                "name": "Suceava County",
                "nativeName": "Suceava",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/61/Actual_Suceava_county_CoA.png"
            },
            "RO-SJ": {
                "name": "Sălaj County",
                "nativeName": "Sălaj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f8/RO_Județul_Sălaj_COA.svg"
            },
            "RO-TR": {
                "name": "Teleorman County",
                "nativeName": "Teleorman",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stema_Teleorman.svg/128px-Stema_Teleorman.svg.png"
            },
            "RO-TM": {
                "name": "Timiș County",
                "nativeName": "Timiș",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Timis_county_coat_of_arms.png"
            },
            "RO-TL": {
                "name": "Tulcea County",
                "nativeName": "Tulcea",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Actual_Tulcea_county_CoA.svg/128px-Actual_Tulcea_county_CoA.svg.png"
            },
            "RO-VS": {
                "name": "Vaslui County",
                "nativeName": "Vaslui",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Stema_Vaslui.svg"
            },
            "RO-VN": {
                "name": "Vrancea County",
                "nativeName": "Vrancea",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Stema_Vrancea.svg/128px-Stema_Vrancea.svg.png"
            },
            "RO-VL": {
                "name": "Vâlcea County",
                "nativeName": "Vâlcea",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Stema_Valcea.svg/128px-Stema_Valcea.svg.png"
            }
        }
    },
    "RU": {
        "name": "Russia",
        "nativeName": "Россия",
        "regions": {
            "RU-AD": {
                "name": "Adygea",
                "nativeName": "Адыгея",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/16/Flag_of_Adygea.svg"
            },
            "RU-AL": {
                "name": "Altai Republic",
                "nativeName": "Республика Алтай",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Altai_Republic.svg"
            },
            "RU-BA": {
                "name": "Bashkortostan",
                "nativeName": "Башкортостан",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_Bashkortostan.svg"
            },
            "RU-BU": {
                "name": "Buryatia",
                "nativeName": "Республика Бурятия",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Buryatia.svg"
            },
            "RU-CE": {
                "name": "Chechnya",
                "nativeName": "Чечня",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/13/Flag_of_the_Chechen_Republic.svg"
            },
            "RU-CU": {
                "name": "Chuvashia",
                "nativeName": "Чувашия",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Flag_of_Chuvashia.svg"
            },
            "RU-DA": {
                "name": "Dagestan",
                "nativeName": "Дагестан",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_Dagestan.svg"
            },
            "RU-IN": {
                "name": "Ingushetia",
                "nativeName": "Ингушетия",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Ingushetia.svg"
            },
            "RU-KB": {
                "name": "Kabardino-Balkaria",
                "nativeName": "Кабардино-Балкария",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Flag_of_Kabardino-Balkaria.svg"
            },
            "RU-KL": {
                "name": "Kalmykia",
                "nativeName": "Калмыкия",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Kalmykia.svg"
            },
            "RU-KC": {
                "name": "Karachay-Cherkessia",
                "nativeName": "Карачаево-Черкесия",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Karachay-Cherkessia.svg"
            },
            "RU-KR": {
                "name": "Republic of Karelia",
                "nativeName": "Республика Карелия",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Karelia.svg"
            },
            "RU-KK": {
                "name": "Khakassia",
                "nativeName": "Республика Хакасия",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Khakassia.svg"
            },
            "RU-KO": {
                "name": "Komi Republic",
                "nativeName": "Республика Коми",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Komi.svg"
            },
            "RU-ME": {
                "name": "Mari El",
                "nativeName": "Марий Эл",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_Mari_El.svg"
            },
            "RU-MO": {
                "name": "Mordovia",
                "nativeName": "Мордовия",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Mordovia.svg"
            },
            "RU-SE": {
                "name": "North Ossetia–Alania",
                "nativeName": "Северная Осетия — Алания",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_North_Ossetia.svg"
            },
            "RU-SA": {
                "name": "Sakha",
                "nativeName": "Республика Саха (Якутия)",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Flag_of_Sakha.svg"
            },
            "RU-TA": {
                "name": "Tatarstan",
                "nativeName": "Татарстан",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Tatarstan.svg"
            },
            "RU-TY": {
                "name": "Tuva",
                "nativeName": "Республика Тыва",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Tuva.svg"
            },
            "RU-UD": {
                "name": "Udmurtia",
                "nativeName": "Удмуртия",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Udmurtia.svg"
            },
            "RU-ALT": {
                "name": "Altai Krai",
                "nativeName": "Алтайский край",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Altai_Krai.svg//128px-Flag_of_Altai_Krai.svg.png"
            },
            "RU-KAM": {
                "name": "Kamchatka Krai",
                "nativeName": "Камчатский край",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_Kamchatka_Krai.svg"
            },
            "RU-KHA": {
                "name": "Khabarovsk Krai",
                "nativeName": "Хабаровский край",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Khabarovsk_Krai.svg"
            },
            "RU-KDA": {
                "name": "Krasnodar Krai",
                "nativeName": "Краснодарский край",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Flag_of_Krasnodar_Krai.svg//128px-Flag_of_Krasnodar_Krai.svg.png"
            },
            "RU-KYA": {
                "name": "Krasnoyarsk Krai",
                "nativeName": "Красноярский край",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_Krasnoyarsk_Krai.svg//128px-Flag_of_Krasnoyarsk_Krai.svg.png"
            },
            "RU-PER": {
                "name": "Perm Krai",
                "nativeName": "Пермский край",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Perm_Krai.svg"
            },
            "RU-PRI": {
                "name": "Primorsky Krai",
                "nativeName": "Приморский край",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Primorsky_Krai.svg"
            },
            "RU-STA": {
                "name": "Stavropol Krai",
                "nativeName": "Ставропольский край",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Stavropol_Krai.svg//128px-Flag_of_Stavropol_Krai.svg.png"
            },
            "RU-ZAB": {
                "name": "Zabaykalsky Krai",
                "nativeName": "Забайкальский край",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Zabaykalsky_Krai.svg"
            },
            "RU-AMU": {
                "name": "Amur Oblast",
                "nativeName": "Амурская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_Amur_Oblast.svg"
            },
            "RU-ARK": {
                "name": "Arkhangelsk Oblast",
                "nativeName": "Архангельская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Flag_of_Arkhangelsk_Oblast.svg//128px-Flag_of_Arkhangelsk_Oblast.svg.png"
            },
            "RU-AST": {
                "name": "Astrakhan Oblast",
                "nativeName": "Астраханская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_Astrakhan_Oblast.svg//128px-Flag_of_Astrakhan_Oblast.svg.png"
            },
            "RU-BEL": {
                "name": "Belgorod Oblast",
                "nativeName": "Белгородская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Flag_of_Belgorod_Oblast.svg//128px-Flag_of_Belgorod_Oblast.svg.png"
            },
            "RU-BRY": {
                "name": "Bryansk Oblast",
                "nativeName": "Брянская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_Bryansk_Oblast.svg"
            },
            "RU-CHE": {
                "name": "Chelyabinsk Oblast",
                "nativeName": "Челябинская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Chelyabinsk_Oblast.svg"
            },
            "RU-IRK": {
                "name": "Irkutsk Oblast",
                "nativeName": "Иркутская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/14/Flag_of_Irkutsk_Oblast.svg"
            },
            "RU-IVA": {
                "name": "Ivanovo Oblast",
                "nativeName": "Ивановская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Ivanovo_Oblast.svg//128px-Flag_of_Ivanovo_Oblast.svg.png"
            },
            "RU-KGD": {
                "name": "Kaliningrad Oblast",
                "nativeName": "Калининградская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_Kaliningrad_Oblast.svg"
            },
            "RU-KLU": {
                "name": "Kaluga Oblast",
                "nativeName": "Калужская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Kaluga_Oblast.svg"
            },
            "RU-KEM": {
                "name": "Kemerovo Oblast",
                "nativeName": "Кемеровская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Kemerovo_Oblast.svg//128px-Flag_of_Kemerovo_Oblast.svg.png"
            },
            "RU-KOS": {
                "name": "Kostroma Oblast",
                "nativeName": "Костромская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Kostroma_Oblast.svg//128px-Flag_of_Kostroma_Oblast.svg.png"
            },
            "RU-KGN": {
                "name": "Kurgan Oblast",
                "nativeName": "Курганская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Kurgan_Oblast.svg"
            },
            "RU-KRS": {
                "name": "Kursk Oblast",
                "nativeName": "Курская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Flag_of_Kursk_Oblast.svg//128px-Flag_of_Kursk_Oblast.svg.png"
            },
            "RU-LEN": {
                "name": "Leningrad Oblast",
                "nativeName": "Ленинградская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Leningrad_Oblast.svg"
            },
            "RU-LIP": {
                "name": "Lipetsk Oblast",
                "nativeName": "Липецкая область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Lipetsk_Oblast.svg"
            },
            "RU-MAG": {
                "name": "Magadan Oblast",
                "nativeName": "Магаданская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Magadan_Oblast.svg"
            },
            "RU-MOS": {
                "name": "Moscow Oblast",
                "nativeName": "Московская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Moscow_oblast.svg//128px-Flag_of_Moscow_oblast.svg.png"
            },
            "RU-MUR": {
                "name": "Murmansk Oblast",
                "nativeName": "Мурманская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Flag_of_Murmansk_Oblast.svg"
            },
            "RU-NIZ": {
                "name": "Nizhny Novgorod Oblast",
                "nativeName": "Нижегородская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Nizhny_Novgorod_Region.svg"
            },
            "RU-NGR": {
                "name": "Novgorod Oblast",
                "nativeName": "Новгородская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Novgorod_Oblast.svg"
            },
            "RU-NVS": {
                "name": "Novosibirsk Oblast",
                "nativeName": "Новосибирская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/39/Flag_of_Novosibirsk_oblast.svg"
            },
            "RU-OMS": {
                "name": "Omsk Oblast",
                "nativeName": "Омская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Omsk_Oblast.svg"
            },
            "RU-ORE": {
                "name": "Orenburg Oblast",
                "nativeName": "Оренбургская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Flag_of_Orenburg_Oblast.svg//128px-Flag_of_Orenburg_Oblast.svg.png"
            },
            "RU-ORL": {
                "name": "Oryol Oblast",
                "nativeName": "Орловская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Oryol_Oblast.svg//128px-Flag_of_Oryol_Oblast.svg.png"
            },
            "RU-PNZ": {
                "name": "Penza Oblast",
                "nativeName": "Пензенская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Penza_Oblast.svg//128px-Flag_of_Penza_Oblast.svg.png"
            },
            "RU-PSK": {
                "name": "Pskov Oblast",
                "nativeName": "Псковская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Pskov_Oblast.svg"
            },
            "RU-ROS": {
                "name": "Rostov Oblast",
                "nativeName": "Ростовская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Rostov_Oblast.svg"
            },
            "RU-RYA": {
                "name": "Ryazan Oblast",
                "nativeName": "Рязанская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Ryazan_Oblast.svg"
            },
            "RU-SAK": {
                "name": "Sakhalin Oblast",
                "nativeName": "Сахалинская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/57/Flag_of_Sakhalin_Oblast.svg"
            },
            "RU-SAM": {
                "name": "Samara Oblast",
                "nativeName": "Самарская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_Samara_Oblast.svg//128px-Flag_of_Samara_Oblast.svg.png"
            },
            "RU-SAR": {
                "name": "Saratov Oblast",
                "nativeName": "Саратовская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_Saratov_Oblast.svg//128px-Flag_of_Saratov_Oblast.svg.png"
            },
            "RU-SMO": {
                "name": "Smolensk Oblast",
                "nativeName": "Смоленская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Smolensk_Oblast.svg"
            },
            "RU-SVE": {
                "name": "Sverdlovsk Oblast",
                "nativeName": "Свердловская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Sverdlovsk_Oblast.svg"
            },
            "RU-TAM": {
                "name": "Tambov Oblast",
                "nativeName": "Тамбовская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Flag_of_Tambov_Oblast.svg//128px-Flag_of_Tambov_Oblast.svg.png"
            },
            "RU-TOM": {
                "name": "Tomsk Oblast",
                "nativeName": "Томская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Tomsk_Oblast.svg//128px-Flag_of_Tomsk_Oblast.svg.png"
            },
            "RU-TUL": {
                "name": "Tula Oblast",
                "nativeName": "Тульская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Tula_Oblast.svg"
            },
            "RU-TVE": {
                "name": "Tver Oblast",
                "nativeName": "Тверская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Tver_Oblast.svg"
            },
            "RU-TYU": {
                "name": "Tyumen Oblast",
                "nativeName": "Тюменская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Tyumen_Oblast.svg"
            },
            "RU-ULY": {
                "name": "Ulyanovsk Oblast",
                "nativeName": "Ульяновская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Flag_of_Ulyanovsk_Oblast.svg"
            },
            "RU-VLA": {
                "name": "Vladimir Oblast",
                "nativeName": "Владимирская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_Vladimir_Oblast.svg"
            },
            "RU-VGG": {
                "name": "Volgograd Oblast",
                "nativeName": "Волгоградская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Volgograd_Oblast.svg"
            },
            "RU-VLG": {
                "name": "Vologda Oblast",
                "nativeName": "Вологодская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_Vologda_oblast.svg//128px-Flag_of_Vologda_oblast.svg.png"
            },
            "RU-VOR": {
                "name": "Voronezh Oblast",
                "nativeName": "Воронежская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Voronezh_Oblast.svg"
            },
            "RU-YAR": {
                "name": "Yaroslavl Oblast",
                "nativeName": "Ярославская область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Yaroslavl_Oblast.svg"
            },
            "RU-YEV": {
                "name": "Jewish Autonomous Oblast",
                "nativeName": "Еврейская автономная область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_the_Jewish_Autonomous_Oblast.svg"
            },
            "RU-CHU": {
                "name": "Chukotka Autonomous Okrug",
                "nativeName": "Чукотский автономный округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Chukotka.svg"
            },
            "RU-KHM": {
                "name": "Khanty-Mansi Autonomous Okrug",
                "nativeName": "Ханты-Мансийский автономный округ — Югра",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_Yugra.svg"
            },
            "RU-NEN": {
                "name": "Nenets Autonomous Okrug",
                "nativeName": "Ненецкий автономный округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/15/Flag_of_Nenets_Autonomous_District.svg"
            },
            "RU-YAN": {
                "name": "Yamalo-Nenets Autonomous Okrug",
                "nativeName": "Ямало-Ненецкий автономный округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Yamal-Nenets_Autonomous_District.svg"
            },
            "RU-KIR": {
                "name": "Kirov Oblast",
                "nativeName": "Кировская область",
                "flag": ""
            }
        }
    },
    "SK": {
        "name": "Slovakia",
        "nativeName": "Slovensko",
        "regions": {
            "SK-NI": {
                "name": "Nitra",
                "nativeName": "Nitriansky kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Nitriansky_vlajka.svg"
            },
            "SK-TC": {
                "name": "Trenčín",
                "nativeName": "Trenčiansky kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/51/Trenciansky_vlajka.svg"
            },
            "SK-ZI": {
                "name": "Žilina",
                "nativeName": "Žilinský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Zilinsky_vlajka.svg"
            },
            "SK-BC": {
                "name": "Region of Banská Bystrica",
                "nativeName": "Banskobystrický kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Banskobystricky_vlajka.svg"
            },
            "SK-BL": {
                "name": "Region of Bratislava",
                "nativeName": "Bratislavský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bratislavsky_vlajka.svg"
            },
            "SK-KI": {
                "name": "Region of Košice",
                "nativeName": "Košický kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/32/Kosicky_vlajka.svg"
            },
            "SK-PV": {
                "name": "Region of Prešov",
                "nativeName": "Prešovský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Presovsky_vlajka.svg"
            },
            "SK-TA": {
                "name": "Region of Trnava",
                "nativeName": "Trnavský kraj",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Trnavsky_vlajka.svg"
            }
        }
    },
    "SO": {
        "name": "Somalia",
        "nativeName": "Soomaaliya",
        "regions": {
            "SO-AW": {
                "name": "Awdal",
                "nativeName": "Awdal",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/7/72/Flag_of_Awdal.svg/revision/latest?cb=20230418220239"
            },
            "SO-BK": {
                "name": "Bakool",
                "nativeName": "Bakool",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/2c/Flag_of_Bakool.svg/revision/latest?cb=20230418233121"
            },
            "SO-BN": {
                "name": "Banaadir",
                "nativeName": "Banaadir",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_of_Mogadishu,_Somalia.svg"
            },
            "SO-BR": {
                "name": "Bari",
                "nativeName": "Bari",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/6c/Flag_of_Bari,_Somalia.svg/revision/latest?cb=20230418234536"
            },
            "SO-BY": {
                "name": "Bay",
                "nativeName": "Bay",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/40/Flag_of_Bay,_Somalia.svg/revision/latest?cb=20230419071220"
            },
            "SO-GA": {
                "name": "Galgaduud",
                "nativeName": "Galgaduud",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/f9/Gedo_Flag.png/revision/latest?cb=20230419100359"
            },
            "SO-GE": {
                "name": "Gedo",
                "nativeName": "Gedo",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/f9/Gedo_Flag.png/revision/latest?cb=20230419100359"
            },
            "SO-HI": {
                "name": "Hiiraan",
                "nativeName": "Hiiraan",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/0/09/Flag_of_Hiran,_Somalia.svg/revision/latest?cb=20230418220123"
            },
            "SO-JD": {
                "name": "Middle Juba",
                "nativeName": "Jubbada Dhexe",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/0/04/Flag_of_Middle_Juba.svg/revision/latest?cb=20230419094837"
            },
            "SO-JH": {
                "name": "Lower Juba",
                "nativeName": "Jubbada Hoose",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/0/08/Flag_of_Lower_Juba.svg/revision/latest?cb=20230419094854"
            },
            "SO-MU": {
                "name": "Mudug",
                "nativeName": "Mudug",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/7/7d/Flag_of_Mudug.svg/revision/latest?cb=20230419071230"
            },
            "SO-NU": {
                "name": "Nugaal",
                "nativeName": "Nugaal",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/c/ca/Flag_of_Nugal,_Somalia.svg/revision/latest?cb=20230419094846"
            },
            "SO-SX": {
                "name": "Sahil",
                "nativeName": "Saaxil",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/9/9d/Flag_of_Sahil,_Somaliland.svg/revision/latest?cb=20230418220250"
            },
            "SO-SA": {
                "name": "Sanaag",
                "nativeName": "Sanaag",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/b/bb/Flag_of_Sanaag.svg/revision/latest?cb=20230418220133"
            },
            "SO-SD": {
                "name": "Middle Shebelle",
                "nativeName": "Shabeellaha Dhexe",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/29/Flag_of_Middle_Shabelle.svg/revision/latest?cb=20230419094827"
            },
            "SO-SH": {
                "name": "Lower Shabelle",
                "nativeName": "Shabeellaha Hoose",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/5/5b/Flag_of_Lower_Shabelle.svg/revision/latest?cb=20230419064948"
            },
            "SO-SO": {
                "name": "Sool",
                "nativeName": "Sool",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/21/Flag_of_Togdheer.svg/revision/latest?cb=20230418220300"
            },
            "SO-TO": {
                "name": "Togdheer",
                "nativeName": "Togdheer",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/21/Flag_of_Togdheer.svg/revision/latest?cb=20230418220300"
            },
            "SO-WO": {
                "name": "Woqooyi Galbeed",
                "nativeName": "Woqooyi Galbeed",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/4d/Flag_of_Somaliland.svg/revision/latest?cb=20200812174501"
            }
        }
    },
    "ZA": {
        "name": "South Africa",
        "nativeName": "Suid-Afrika",
        "regions": {
            "ZA-MP": {
                "name": "Mpumalanga",
                "nativeName": "Mpumalanga",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_Mpumalanga_Province.svg"
            },
            "ZA-EC": {
                "name": "Eastern Cape",
                "nativeName": "Eastern Cape",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Flag_of_the_Eastern_Cape_Province.png"
            },
            "ZA-FS": {
                "name": "Free State",
                "nativeName": "Free State",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Flag_of_the_Free_State_Province.png"
            },
            "ZA-GP": {
                "name": "Gauteng",
                "nativeName": "Gauteng",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_the_Gauteng_Province.png"
            },
            "ZA-KZN": {
                "name": "KwaZulu-Natal",
                "nativeName": "KwaZulu-Natal",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_the_KwaZulu-Natal_Province.png"
            },
            "ZA-LP": {
                "name": "Limpopo",
                "nativeName": "Limpopo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_the_Limpopo_Province.png"
            },
            "ZA-NW": {
                "name": "North West",
                "nativeName": "North West",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_North_West_Province.png"
            },
            "ZA-NC": {
                "name": "Northern Cape",
                "nativeName": "Northern Cape",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_the_Northern_Cape_Province.png"
            },
            "ZA-WC": {
                "name": "Western Cape",
                "nativeName": "Western Cape",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_the_Western_Cape_Province.png"
            }
        }
    },
    "ES": {
        "name": "Spain",
        "nativeName": "Españita",
        "regions": {
            "ES-AN": {
                "name": "Andalusia",
                "nativeName": "Andalucía",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_Andalucía.svg//128px-Flag_of_Andalucía.svg.png"
            },
            "ES-AR": {
                "name": "Aragon",
                "nativeName": "Aragón",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_Aragon.svg//128px-Flag_of_Aragon.svg.png"
            },
            "ES-AS": {
                "name": "Asturias",
                "nativeName": "Asturies",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_Asturias.svg"
            },
            "ES-PV": {
                "name": "Basque Country",
                "nativeName": "Euskadi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_the_Basque_Country.svg"
            },
            "ES-CN": {
                "name": "Canary Islands",
                "nativeName": "Canarias",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Flag_of_the_Canary_Islands.svg//128px-Flag_of_the_Canary_Islands.svg.png"
            },
            "ES-CB": {
                "name": "Cantabria",
                "nativeName": "Cantabria",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Cantabria_(Official).svg/128px-Flag_of_Cantabria_(Official).svg.png"
            },
            "ES-CM": {
                "name": "Castilla–La Mancha",
                "nativeName": "Castilla-La Mancha",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_Castile-La_Mancha.svg"
            },
            "ES-CL": {
                "name": "Castile and León",
                "nativeName": "Castilla y León",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/13/Flag_of_Castile_and_León.svg"
            },
            "ES-CT": {
                "name": "Catalonia",
                "nativeName": "Catalunya",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg"
            },
            "ES-EX": {
                "name": "Extremadura",
                "nativeName": "Extremadura",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_Extremadura,_Spain_(with_coat_of_arms).svg//128px-Flag_of_Extremadura,_Spain_(with_coat_of_arms).svg.png"
            },
            "ES-GA": {
                "name": "Galicia",
                "nativeName": "Galicia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Galicia.svg"
            },
            "ES-MD": {
                "name": "Community of Madrid",
                "nativeName": "Comunidad de Madrid",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_the_Community_of_Madrid.svg"
            },
            "ES-MC": {
                "name": "Region of Murcia",
                "nativeName": "Región de Murcia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_Region_of_Murcia.svg"
            },
            "ES-NC": {
                "name": "Navarre",
                "nativeName": "Nafarroa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bandera_de_Navarra.svg//128px-Bandera_de_Navarra.svg.png"
            },
            "ES-VC": {
                "name": "Valencian Community",
                "nativeName": "Comunitat Valenciana",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/16/Flag_of_the_Valencian_Community_(2x3).svg"
            },
            "ES-CE": {
                "name": "Ceuta",
                "nativeName": "Ceuta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_Ceuta.svg"
            },
            "ES-ML": {
                "name": "Melilla",
                "nativeName": "Melilla",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Melilla.svg//128px-Flag_of_Melilla.svg.png"
            },
            "ES-PM": {
                "name": "Balearic Islands",
                "nativeName": "Illes Balears",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Flag_of_the_Balearic_Islands.svg"
            },
            "ES-RI": {
                "name": "La Rioja",
                "nativeName": "La Rioja",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_La_Rioja_(with_coat_of_arms).svg/128px-Flag_of_La_Rioja_(with_coat_of_arms).svg.png"
            }
        }
    },
    "LK": {
        "name": "Sri Lanka",
        "nativeName": "Sri Lankā ශ්‍රී ලංකාව இலங்கை",
        "regions": {
            "LK-2": {
                "name": "Central Province",
                "nativeName": "Central Province",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Central_Province.png/150px-Central_Province.png"
            },
            "LK-5": {
                "name": "Eastern Province",
                "nativeName": "Eastern Province",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Eastern_Province_Flag_(SRI_LANKA).png/160px-Eastern_Province_Flag_(SRI_LANKA).png"
            },
            "LK-7": {
                "name": "North Central Province",
                "nativeName": "North Central Province",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_North_Central_Province_Sri_Lanka.png/167px-Flag_of_the_North_Central_Province_Sri_Lanka.png"
            },
            "LK-6": {
                "name": "North Western Province",
                "nativeName": "North Western Province",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_the_North_Western_Province_(Sri_Lanka).svg"
            },
            "LK-4": {
                "name": "Northern Province",
                "nativeName": "Northern Province",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_Northern_Province.svg"
            },
            "LK-9": {
                "name": "Sabaragamuwa Province",
                "nativeName": "Sabaragamuwa Province",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_the_Sabaragamuwa_Province_(Sri_Lanka).PNG/160px-Flag_of_the_Sabaragamuwa_Province_(Sri_Lanka).PNG"
            },
            "LK-3": {
                "name": "Southern Province",
                "nativeName": "Southern Province",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_the_Southern_Province_(Sri_Lanka).PNG/167px-Flag_of_the_Southern_Province_(Sri_Lanka).PNG"
            },
            "LK-8": {
                "name": "Uva Province",
                "nativeName": "Uva Province",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_the_Uva_Province_(Sri_Lanka)_SVG.svg//128px-Flag_of_the_Uva_Province_(Sri_Lanka)_SVG.svg.png"
            },
            "LK-1": {
                "name": "Western Province",
                "nativeName": "Western Province",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Western_Province_Flag_(SRI_LANKA).png/213px-Western_Province_Flag_(SRI_LANKA).png"
            }
        }
    },
    "SE": {
        "name": "Sweden",
        "nativeName": "Sverige",
        "regions": {
            "SE-K": {
                "name": "Blekinge County",
                "nativeName": "Blekinge län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Blekinge_län_vapenflagga.svg"
            },
            "SE-W": {
                "name": "Dalarna County",
                "nativeName": "Dalarnas län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Dalarnas_län_vapenflagga.svg"
            },
            "SE-I": {
                "name": "Gotland County",
                "nativeName": "Gotlands län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Gotlands_län_vapenflagga.svg"
            },
            "SE-X": {
                "name": "Gävleborg County",
                "nativeName": "Gävleborgs län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Gävleborgs_län_vapenflagga.svg"
            },
            "SE-N": {
                "name": "Halland County",
                "nativeName": "Hallands län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/25/Hallands_län_vapenflagga.svg"
            },
            "SE-Z": {
                "name": "Jämtland County",
                "nativeName": "Jämtlands län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jämtlands_län_vapenflagga.svg//128px-Jämtlands_län_vapenflagga.svg.png"
            },
            "SE-F": {
                "name": "Jönköping County",
                "nativeName": "Jönköpings län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/05/Jönköpings_län_vapenflagga.svg"
            },
            "SE-H": {
                "name": "Kalmar County",
                "nativeName": "Kalmar län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/67/Kalmar_län_vapenflagga.svg"
            },
            "SE-G": {
                "name": "Kronoberg County",
                "nativeName": "Kronobergs län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Kronobergs_län_vapenflagga.svg"
            },
            "SE-BD": {
                "name": "Norrbotten County",
                "nativeName": "Norrbottens län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/46/Norrbottens_län_vapenflagga.svg"
            },
            "SE-M": {
                "name": "Skåne County",
                "nativeName": "Skåne län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/94/Vapenflagga_för_Skåne_län.svg"
            },
            "SE-AB": {
                "name": "Stockholm County",
                "nativeName": "Stockholms län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Stockholms_län_vapenflagga.svg"
            },
            "SE-D": {
                "name": "Södermanland County",
                "nativeName": "Södermanlands län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/33/Södermanlands_län_vapenflagga.svg"
            },
            "SE-C": {
                "name": "Uppsala County",
                "nativeName": "Uppsala län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Uppsala_län_vapenflagga.svg"
            },
            "SE-S": {
                "name": "Värmland County",
                "nativeName": "Värmlands län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Värmlands_län_vapenflagga.svg"
            },
            "SE-AC": {
                "name": "Västerbotten County",
                "nativeName": "Västerbottens län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/Västerbottens_län_vapenflagga.svg"
            },
            "SE-Y": {
                "name": "Västernorrland County",
                "nativeName": "Västernorrlands län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Västernorrlands_län_vapenflagga.svg"
            },
            "SE-U": {
                "name": "Västmanland County",
                "nativeName": "Västmanlands län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/14/Västmanlands_län_vapenflagga.svg"
            },
            "SE-O": {
                "name": "Västra Götaland County",
                "nativeName": "Västra Götalands län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Västra_Götalands_län_vapenflagga.svg//128px-Västra_Götalands_län_vapenflagga.svg.png"
            },
            "SE-T": {
                "name": "Örebro County",
                "nativeName": "Örebro län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Örebro_län_vapenflagga.svg"
            },
            "SE-E": {
                "name": "Östergötland County",
                "nativeName": "Östergötlands län",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Östergötlands_län_vapenflagga.svg"
            }
        }
    },
    "CH": {
        "name": "Switzerland",
        "nativeName": "Suisse",
        "regions": {
            "CH-AG": {
                "name": "Aargau",
                "nativeName": "Aargau",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_Canton_of_Aargau.svg"
            },
            "CH-AR": {
                "name": "Appenzell Ausserrhoden",
                "nativeName": "Appenzell Ausserrhoden",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Canton_of_Appenzell_Ausserrhoden.svg"
            },
            "CH-AI": {
                "name": "Appenzell Innerrhoden",
                "nativeName": "Appenzell Innerrhoden",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Canton_of_Appenzell_Innerrhoden.svg"
            },
            "CH-BL": {
                "name": "Basel-Landschaft",
                "nativeName": "Basel-Landschaft",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Canton_of_Basel_Land.svg"
            },
            "CH-BS": {
                "name": "Basel-Stadt",
                "nativeName": "Basel-Stadt",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Flag_of_Canton_of_Basel.svg"
            },
            "CH-BE": {
                "name": "Bern",
                "nativeName": "Bern",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Canton_of_Bern.svg"
            },
            "CH-FR": {
                "name": "Fribourg",
                "nativeName": "FFreiburg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Canton_of_Fribourg.svg"
            },
            "CH-GE": {
                "name": "Geneva",
                "nativeName": "Genève",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Canton_of_Geneva.svg"
            },
            "CH-GL": {
                "name": "Glarus",
                "nativeName": "Glarus",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Canton_of_Glarus.svg"
            },
            "CH-GR": {
                "name": "Grisons",
                "nativeName": "Graubünden",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Canton_of_Graubünden.svg"
            },
            "CH-JU": {
                "name": "Jura",
                "nativeName": "Jura",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Canton_of_Jura.svg"
            },
            "CH-LU": {
                "name": "Lucerne",
                "nativeName": "Luzern",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Canton_of_Lucerne.svg"
            },
            "CH-NE": {
                "name": "Neuchâtel",
                "nativeName": "Neuchâtel",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/57/Flag_of_Canton_of_Neuchâtel.svg"
            },
            "CH-NW": {
                "name": "Nidwalden",
                "nativeName": "Nidwalden",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Canton_of_Nidwalden.svg"
            },
            "CH-OW": {
                "name": "Obwalden",
                "nativeName": "Obwalden",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/76/Flag_of_Canton_of_Obwalden.svg"
            },
            "CH-SH": {
                "name": "Schaffhausen",
                "nativeName": "Schaffhausen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Flag_of_Canton_of_Schaffhausen.svg"
            },
            "CH-SZ": {
                "name": "Schwyz",
                "nativeName": "Schwyz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Canton_of_Schwyz.svg"
            },
            "CH-SO": {
                "name": "Solothurn",
                "nativeName": "Solothurn",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Canton_of_Solothurn.svg"
            },
            "CH-SG": {
                "name": "St. Gallen",
                "nativeName": "St. Gallen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Flag_of_Canton_of_Sankt_Gallen.svg"
            },
            "CH-TG": {
                "name": "Thurgau",
                "nativeName": "Thurgau",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/18/Flag_of_Canton_of_Thurgau.svg"
            },
            "CH-TI": {
                "name": "Ticino",
                "nativeName": "Ticino",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Canton_of_Ticino.svg"
            },
            "CH-UR": {
                "name": "Uri",
                "nativeName": "Uri",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Canton_of_Uri.svg"
            },
            "CH-VS": {
                "name": "Valais",
                "nativeName": "Valais",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Canton_of_Valais.svg"
            },
            "CH-VD": {
                "name": "Vaud",
                "nativeName": "Vaud",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Canton_of_Vaud.svg"
            },
            "CH-ZG": {
                "name": "Zug",
                "nativeName": "Zug",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Canton_of_Zug.svg"
            },
            "CH-ZH": {
                "name": "Zürich",
                "nativeName": "Zürich",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Canton_of_Zürich.svg"
            }
        }
    },
    "TH": {
        "name": "Thailand",
        "nativeName": "ประเทศไทย",
        "regions": {
            "TH-37": {
                "name": "Amnat Charoen province",
                "nativeName": "จังหวัดอำนาจเจริญ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_Amnatcharoen_Province.png/150px-Flag_Amnatcharoen_Province.png"
            },
            "TH-15": {
                "name": "Ang Thong province",
                "nativeName": "จังหวัดอ่างทอง",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ang_Thong_Flag.png/151px-Ang_Thong_Flag.png"
            },
            "TH-10": {
                "name": "Bangkok",
                "nativeName": "กรุงเทพมหานคร",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Flag_of_Bangkok.svg//128px-Flag_of_Bangkok.svg.png"
            },
            "TH-38": {
                "name": "Bueng Kan province",
                "nativeName": "จังหวัดบึงกาฬ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Bueng_Kan_Province.png/156px-Flag_of_Bueng_Kan_Province.png"
            },
            "TH-31": {
                "name": "Buriram province",
                "nativeName": "จังหวัดบุรีรัมย์",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_Buriram_Province.png/150px-Flag_Buriram_Province.png"
            },
            "TH-24": {
                "name": "Chachoengsao province",
                "nativeName": "จังหวัดฉะเชิงเทรา",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chachoengsao_Flag.png/151px-Chachoengsao_Flag.png"
            },
            "TH-18": {
                "name": "Chai Nat province",
                "nativeName": "จังหวัดชัยนาท",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Chai_Nat_Flag.png/150px-Chai_Nat_Flag.png"
            },
            "TH-36": {
                "name": "Chaiyaphum province",
                "nativeName": "จังหวัดชัยภูมิ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Chaiyaphum_Flag.png/151px-Chaiyaphum_Flag.png"
            },
            "TH-22": {
                "name": "Chanthaburi province",
                "nativeName": "จังหวัดจันทบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Flag_of_Chanthaburi_Province.jpg/140px-Flag_of_Chanthaburi_Province.jpg"
            },
            "TH-50": {
                "name": "Chiang Mai province",
                "nativeName": "จังหวัดเชียงใหม่",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_Chiang_Mai_Province.png/150px-Flag_Chiang_Mai_Province.png"
            },
            "TH-57": {
                "name": "Chiang Rai province",
                "nativeName": "จังหวัดเชียงราย",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Chiangrai_Flag.png/150px-Chiangrai_Flag.png"
            },
            "TH-20": {
                "name": "Chonburi province",
                "nativeName": "จังหวัดชลบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_Chon_Buri_Province.png/150px-Flag_Chon_Buri_Province.png"
            },
            "TH-86": {
                "name": "Chumphon province",
                "nativeName": "จังหวัดชุมพร",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Chumphon_Flag.png/151px-Chumphon_Flag.png"
            },
            "TH-46": {
                "name": "Kalasin province",
                "nativeName": "จังหวัดกาฬสินธุ์",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_Karasin_Province.png/150px-Flag_Karasin_Province.png"
            },
            "TH-62": {
                "name": "Kamphaeng Phet province",
                "nativeName": "จังหวัดกำแพงเพชร",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_Kamphaeng_Phet_Province.png/150px-Flag_Kamphaeng_Phet_Province.png"
            },
            "TH-71": {
                "name": "Kanchanaburi province",
                "nativeName": "จังหวัดกาญจนบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Kanchanaburi_Flag.png/151px-Kanchanaburi_Flag.png"
            },
            "TH-40": {
                "name": "Khon Kaen province",
                "nativeName": "จังหวัดขอนแก่น",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Khon_Kaen_Flag.png/151px-Khon_Kaen_Flag.png"
            },
            "TH-81": {
                "name": "Krabi province",
                "nativeName": "จังหวัดกระบี่",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/ธงกระบี่.png/150px-ธงกระบี่.png"
            },
            "TH-52": {
                "name": "Lampang province",
                "nativeName": "จังหวัดลำปาง",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Lampang_Province.png/150px-Flag_of_Lampang_Province.png"
            },
            "TH-51": {
                "name": "Lamphun province",
                "nativeName": "จังหวัดลำพูน",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Lamphun_provincial_flag.png/150px-Lamphun_provincial_flag.png"
            },
            "TH-42": {
                "name": "Loei province",
                "nativeName": "จังหวัดเลย",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Loei_Flag.png/151px-Loei_Flag.png"
            },
            "TH-16": {
                "name": "Lopburi province",
                "nativeName": "จังหวัดลพบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_Lop_Buri_Province.png/150px-Flag_Lop_Buri_Province.png"
            },
            "TH-58": {
                "name": "Mae Hong Son province",
                "nativeName": "จังหวัดแม่ฮ่องสอน",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_Mae_Hong_Son_Province.png/150px-Flag_Mae_Hong_Son_Province.png"
            },
            "TH-44": {
                "name": "Maha Sarakham province",
                "nativeName": "จังหวัดมหาสารคาม",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Mahasarakham_PV_Flag.png/150px-Mahasarakham_PV_Flag.png"
            },
            "TH-49": {
                "name": "Mukdahan province",
                "nativeName": "จังหวัดมุกดาหาร",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_Mokdahan_Province.png/150px-Flag_Mokdahan_Province.png"
            },
            "TH-26": {
                "name": "Nakhon Nayok province",
                "nativeName": "จังหวัดนครนายก",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/ธงนครนายก.png/150px-ธงนครนายก.png"
            },
            "TH-73": {
                "name": "Nakhon Pathom province",
                "nativeName": "จังหวัดนครปฐม",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_Nakhon_Pathom_Province.png/150px-Flag_Nakhon_Pathom_Province.png"
            },
            "TH-48": {
                "name": "Nakhon Phanom province",
                "nativeName": "จังหวัดนครพนม",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Flag_of_Nakhon_Phanom_Province.svg//128px-Flag_of_Nakhon_Phanom_Province.svg.png"
            },
            "TH-30": {
                "name": "Nakhon Ratchasima province",
                "nativeName": "จังหวัดนครราชสีมา",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Nakhon_Ratchasima_Flag.png/151px-Nakhon_Ratchasima_Flag.png"
            },
            "TH-60": {
                "name": "Nakhon Sawan province",
                "nativeName": "จังหวัดนครสวรรค์",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Nakhon_Sawan_Flag.png/150px-Nakhon_Sawan_Flag.png"
            },
            "TH-80": {
                "name": "Nakhon Si Thammarat province",
                "nativeName": "จังหวัดนครศรีธรรมราช",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flag_Nakhon_Si_Thammarat_Province.png/150px-Flag_Nakhon_Si_Thammarat_Province.png"
            },
            "TH-55": {
                "name": "Nan province",
                "nativeName": "จังหวัดน่าน",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ธงประจำจังหวัดน่าน.svg//128px-ธงประจำจังหวัดน่าน.svg.png"
            },
            "TH-96": {
                "name": "Narathiwat province",
                "nativeName": "จังหวัดนราธิวาส",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_Naratiwat_Province.png/150px-Flag_Naratiwat_Province.png"
            },
            "TH-39": {
                "name": "Nong Bua Lamphu province",
                "nativeName": "จังหวัดหนองบัวลำภู",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Nong_Bua_Lam_Phu_Flag.png/151px-Nong_Bua_Lam_Phu_Flag.png"
            },
            "TH-43": {
                "name": "Nong Khai province",
                "nativeName": "จังหวัดหนองคาย",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_Nong_Khai_Province.png/150px-Flag_Nong_Khai_Province.png"
            },
            "TH-12": {
                "name": "Nonthaburi province",
                "nativeName": "จังหวัดนนทบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/ธงจังหวัดนนทบุรี.svg//128px-ธงจังหวัดนนทบุรี.svg.png"
            },
            "TH-13": {
                "name": "Pathum Thani province",
                "nativeName": "จังหวัดปทุมธานี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pathum_Thani_Flag.png/151px-Pathum_Thani_Flag.png"
            },
            "TH-94": {
                "name": "Pattani province",
                "nativeName": "จังหวัดปัตตานี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pattani_Flag.png/151px-Pattani_Flag.png"
            },
            "TH-82": {
                "name": "Phang Nga province",
                "nativeName": "จังหวัดพังงา",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Phangnga_Flag.png/150px-Phangnga_Flag.png"
            },
            "TH-93": {
                "name": "Phatthalung province",
                "nativeName": "จังหวัดพัทลุง",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Phatthalung_Flag.png/151px-Phatthalung_Flag.png"
            },
            "TH-56": {
                "name": "Phayao province",
                "nativeName": "จังหวัดพะเยา",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Phayao_flag.svg//128px-Phayao_flag.svg.png"
            },
            "TH-67": {
                "name": "Phetchabun province",
                "nativeName": "จังหวัดเพชรบูรณ์",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_Phetchabun_Province.png/150px-Flag_Phetchabun_Province.png"
            },
            "TH-76": {
                "name": "Phetchaburi province",
                "nativeName": "จังหวัดเพชรบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_Petchaburi_Province.png/150px-Flag_Petchaburi_Province.png"
            },
            "TH-66": {
                "name": "Phichit province",
                "nativeName": "จังหวัดพิจิตร",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Phichit_Flag.png/151px-Phichit_Flag.png"
            },
            "TH-65": {
                "name": "Phitsanulok province",
                "nativeName": "จังหวัดพิษณุโลก",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pitsanulok_flag.svg//128px-Pitsanulok_flag.svg.png"
            },
            "TH-14": {
                "name": "Phra Nakhon Si Ayutthaya province",
                "nativeName": "จังหวัดพระนครศรีอยุธยา",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Phra_Nakhon_Si_Ayutthaya_Province.svg"
            },
            "TH-54": {
                "name": "Phrae province",
                "nativeName": "จังหวัดแพร่",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Phrae_flag.svg//128px-Phrae_flag.svg.png"
            },
            "TH-83": {
                "name": "Phuket province",
                "nativeName": "จังหวัดภูเก็ต",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Phuket_Flag.png/151px-Phuket_Flag.png"
            },
            "TH-25": {
                "name": "Prachinburi province",
                "nativeName": "จังหวัดปราจีนบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Flag_of_Prachin_Buri_Province.jpg/150px-Flag_of_Prachin_Buri_Province.jpg"
            },
            "TH-77": {
                "name": "Prachuap Khiri Khan province",
                "nativeName": "จังหวัดประจวบคีรีขันธ์",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Prachuap_Khiri_Khan_Flag.png/150px-Prachuap_Khiri_Khan_Flag.png"
            },
            "TH-85": {
                "name": "Ranong province",
                "nativeName": "จังหวัดระนอง",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_Ranong_Province.png/150px-Flag_Ranong_Province.png"
            },
            "TH-70": {
                "name": "Ratchaburi province",
                "nativeName": "จังหวัดราชบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ratchaburi_Flag.png/151px-Ratchaburi_Flag.png"
            },
            "TH-21": {
                "name": "Rayong province",
                "nativeName": "จังหวัดระยอง",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rayong_Flag.png/150px-Rayong_Flag.png"
            },
            "TH-45": {
                "name": "Roi Et province",
                "nativeName": "จังหวัดร้อยเอ็ด",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_Roi-Et_Province.png/150px-Flag_Roi-Et_Province.png"
            },
            "TH-27": {
                "name": "Sa Kaeo province",
                "nativeName": "จังหวัดสระแก้ว",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Sa_Kaeo_Flag.png/150px-Sa_Kaeo_Flag.png"
            },
            "TH-47": {
                "name": "Sakon Nakhon province",
                "nativeName": "จังหวัดสกลนคร",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_Sakon_Nakhon_Province.png/150px-Flag_Sakon_Nakhon_Province.png"
            },
            "TH-11": {
                "name": "Samut Prakan province",
                "nativeName": "จังหวัดสมุทรปราการ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_Samut_Prakan_Province.png/150px-Flag_Samut_Prakan_Province.png"
            },
            "TH-74": {
                "name": "Samut Sakhon province",
                "nativeName": "จังหวัดสมุทรสาคร",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_Samut_Sakhon_Province.png/150px-Flag_Samut_Sakhon_Province.png"
            },
            "TH-75": {
                "name": "Samut Songkhram province",
                "nativeName": "จังหวัดสมุทรสงคราม",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_Samut_Songkhram_Province.png/150px-Flag_Samut_Songkhram_Province.png"
            },
            "TH-19": {
                "name": "Saraburi province",
                "nativeName": "จังหวัดสระบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Provincial_Flag_of_Saraburi.svg//128px-Provincial_Flag_of_Saraburi.svg.png"
            },
            "TH-91": {
                "name": "Satun province",
                "nativeName": "จังหวัดสตูล",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Satun_Flag.png/150px-Satun_Flag.png"
            },
            "TH-17": {
                "name": "Sing Buri province",
                "nativeName": "จังหวัดสิงห์บุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Sing_Buri_Province.png/150px-Flag_of_Sing_Buri_Province.png"
            },
            "TH-33": {
                "name": "Sisaket province",
                "nativeName": "จังหวัดศรีสะเกษ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Si_Sa_Ket_Flag.png/150px-Si_Sa_Ket_Flag.png"
            },
            "TH-90": {
                "name": "Songkhla province",
                "nativeName": "จังหวัดสงขลา",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_Songkhla_Province.png/150px-Flag_Songkhla_Province.png"
            },
            "TH-64": {
                "name": "Sukhothai province",
                "nativeName": "จังหวัดสุโขทัย",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Sukhothai_Province.svg//128px-Flag_of_Sukhothai_Province.svg.png"
            },
            "TH-72": {
                "name": "Suphan Buri province",
                "nativeName": "จังหวัดสุพรรณบุรี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_Suphan_Buri_Province.png/150px-Flag_Suphan_Buri_Province.png"
            },
            "TH-84": {
                "name": "Surat Thani province",
                "nativeName": "จังหวัดสุราษฎร์ธานี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Suratthani_provincial_flag.png/150px-Suratthani_provincial_flag.png"
            },
            "TH-32": {
                "name": "Surin province",
                "nativeName": "จังหวัดสุรินทร์",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Surin_Flag.png/151px-Surin_Flag.png"
            },
            "TH-63": {
                "name": "Tak province",
                "nativeName": "จังหวัดตาก",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tak_Flag.png/151px-Tak_Flag.png"
            },
            "TH-92": {
                "name": "Trang province",
                "nativeName": "จังหวัดตรัง",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Trang_Flag.png/151px-Trang_Flag.png"
            },
            "TH-23": {
                "name": "Trat province",
                "nativeName": "จังหวัดตราด",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Trat_Flag.png/151px-Trat_Flag.png"
            },
            "TH-34": {
                "name": "Ubon Ratchathani province",
                "nativeName": "จังหวัดอุบลราชธานี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Ubon_Ratchathani_Province_Flags.svg//128px-Ubon_Ratchathani_Province_Flags.svg.png"
            },
            "TH-41": {
                "name": "Udon Thani province",
                "nativeName": "จังหวัดอุดรธานี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Udon_Thani_Flag.png/151px-Udon_Thani_Flag.png"
            },
            "TH-61": {
                "name": "Uthai Thani province",
                "nativeName": "จังหวัดอุทัยธานี",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Uthai_Thani_Flag.png/150px-Uthai_Thani_Flag.png"
            },
            "TH-53": {
                "name": "Uttaradit province",
                "nativeName": "จังหวัดอุตรดิตถ์",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Flag_Uttaradit_Province.png/150px-Flag_Uttaradit_Province.png"
            },
            "TH-95": {
                "name": "Yala province",
                "nativeName": "จังหวัดยะลา",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yala_Flag_2.png/150px-Yala_Flag_2.png"
            },
            "TH-35": {
                "name": "Yasothon province",
                "nativeName": "จังหวัดยโสธร",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Yasothon_Flag.png/151px-Yasothon_Flag.png"
            }
        }
    },
    "UA": {
        "name": "Ukraine",
        "nativeName": "Україна",
        "regions": {
            "UA-71": {
                "name": "Cherkasy Oblast",
                "nativeName": "Черкаська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Cherkasy_Oblast.svg//128px-Flag_of_Cherkasy_Oblast.svg.png"
            },
            "UA-74": {
                "name": "Chernihiv Oblast",
                "nativeName": "Чернігівська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Chernihiv_Oblast.svg"
            },
            "UA-77": {
                "name": "Chernivtsi Oblast",
                "nativeName": "Чернівецька область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Flag_of_Chernivtsi_Oblast.svg"
            },
            "UA-12": {
                "name": "Dnipropetrovsk Oblast",
                "nativeName": "Дніпропетровська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Dnipropetrovsk_Oblast.svg//128px-Flag_of_Dnipropetrovsk_Oblast.svg.png"
            },
            "UA-14": {
                "name": "Donetsk Oblast",
                "nativeName": "Донецька область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Flag_of_Donetsk_Oblast.svg"
            },
            "UA-26": {
                "name": "Ivano-Frankivsk Oblast",
                "nativeName": "Івано-Франківська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Ivano-Frankivsk_Oblast2.svg"
            },
            "UA-63": {
                "name": "Kharkiv Oblast",
                "nativeName": "Харківська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Kharkiv_Oblast.svg"
            },
            "UA-65": {
                "name": "Kherson Oblast",
                "nativeName": "Херсонська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_Kherson_Oblast.svg"
            },
            "UA-68": {
                "name": "Khmelnytskyi Oblast",
                "nativeName": "Хмельницька область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_of_Khmelnytskyi_Oblast.svg"
            },
            "UA-35": {
                "name": "Kirovohrad Oblast",
                "nativeName": "Кіровоградська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Kirovohrad_Oblast.svg"
            },
            "UA-32": {
                "name": "Kyiv Oblast",
                "nativeName": "Київська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Flag_of_Kyiv_Oblast.svg//128px-Flag_of_Kyiv_Oblast.svg.png"
            },
            "UA-09": {
                "name": "Luhansk Oblast",
                "nativeName": "Луганська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Luhansk_Oblast.svg//128px-Flag_of_Luhansk_Oblast.svg.png"
            },
            "UA-46": {
                "name": "Lviv Oblast",
                "nativeName": "Львівська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Lviv_Oblast.svg"
            },
            "UA-48": {
                "name": "Mykolaiv Oblast",
                "nativeName": "Миколаївська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_Mykolaiv_Oblast.svg//128px-Flag_of_Mykolaiv_Oblast.svg.png"
            },
            "UA-51": {
                "name": "Odesa Oblast",
                "nativeName": "Одеська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Odesa_Oblast.svg"
            },
            "UA-53": {
                "name": "Poltava Oblast",
                "nativeName": "Полтавська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Poltava_Oblast.svg"
            },
            "UA-56": {
                "name": "Rivne Oblast",
                "nativeName": "Рівненська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_Rivne_Oblast.svg"
            },
            "UA-59": {
                "name": "Sumy Oblast",
                "nativeName": "Сумська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Sumy_Oblast.svg"
            },
            "UA-61": {
                "name": "Ternopil Oblast",
                "nativeName": "Тернопільська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Ternopil_Oblast.svg"
            },
            "UA-05": {
                "name": "Vinnytsia Oblast",
                "nativeName": "Вінницька область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Prapor_Vinnytskoyi_oblasti.svg//128px-Prapor_Vinnytskoyi_oblasti.svg.png"
            },
            "UA-07": {
                "name": "Volyn Oblast",
                "nativeName": "Волинська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Volyn_Oblast.svg"
            },
            "UA-21": {
                "name": "Zakarpattia Oblast",
                "nativeName": "Закарпатська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_Transcarpathian_Oblast.svg"
            },
            "UA-18": {
                "name": "Zhytomyr Oblast",
                "nativeName": "Житомирська область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_Zhytomyr_Oblast.svg"
            },
            "UA-43": {
                "name": "Autonomous Republic of Crimea",
                "nativeName": "Автономна Республіка Крим",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Crimea.svg"
            },
            "UA-23": {
                "name": "Zaporizhia Oblast",
                "nativeName": "Запорізька область",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Zaporizhia_Oblast.svg/128px-Flag_of_Zaporizhia_Oblast.svg.png"
            }
        }
    },
    "AE": {
        "name": "United Arab Emirates",
        "nativeName": "Al-’Imārat Al-‘Arabiyyah Al-Muttaḥidah الإمارات العربيّة المتّحدة",
        "regions": {
            "AE-AZ": {
                "name": "Emirate of Abu Dhabi",
                "nativeName": "أبو ظبي",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Flag_of_Abu_Dhabi.svg"
            },
            "AE-AJ": {
                "name": "Emirate of Ajman",
                "nativeName": "إمارة عجمان",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Flag_of_Ajman.svg"
            },
            "AE-FU": {
                "name": "Fujairah Emirate",
                "nativeName": "فجيرة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
            },
            "AE-RK": {
                "name": "Emirate of Ras Al Khaimah",
                "nativeName": "رأس الخيمة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Flag_of_Sharjah_and_Ras_Al_Khaimah.svg"
            },
            "AE-SH": {
                "name": "Emirate of Sharjah",
                "nativeName": "الشارقة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Flag_of_Sharjah_and_Ras_Al_Khaimah.svg"
            },
            "AE-UQ": {
                "name": "Emirate of Umm Al Quwain",
                "nativeName": "أم القيوين",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Umm_al-Qaiwain.svg"
            },
            "AE-DU": {
                "name": "Dubai",
                "nativeName": "دبي",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Dubai.svg"
            }
        }
    },
    "GB": {
        "name": "United Kingdom",
        "nativeName": "United Kingdom",
        "regions": {
            "GB-BDF": {
                "name": "Bedfordshire",
                "nativeName": "Bedfordshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Bedfordshire_County_Flag.svg"
            },
            "GB-BRK": {
                "name": "Berkshire",
                "nativeName": "Berkshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag_of_Berkshire.svg/128px-Flag_of_Berkshire.svg.png"
            },
            "GB-BST": {
                "name": "Bristol",
                "nativeName": "Bristol",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bristol_Flag.jpg/256px-Bristol_Flag.jpg"
            },
            "GB-BKM": {
                "name": "Buckinghamshire",
                "nativeName": "Buckinghamshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Buckinghamshire.svg/128px-Flag_of_Buckinghamshire.svg.png"
            },
            "GB-CAM": {
                "name": "Cambridgeshire",
                "nativeName": "Cambridgeshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Cambridgeshire_Flag.svg"
            },
            "GB-CHS": {
                "name": "Cheshire",
                "nativeName": "Cheshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Cheshire.svg"
            },
            "GB-CON": {
                "name": "Cornwall",
                "nativeName": "Cornwall",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Cornwall.svg"
            },
            "GB-CMA": {
                "name": "Cumbria",
                "nativeName": "Cumbria",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0e/County_Flag_of_Cumbria.svg"
            },
            "GB-DBY": {
                "name": "Derbyshire",
                "nativeName": "Derbyshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Derbyshire_flag.svg"
            },
            "GB-DEV": {
                "name": "Devon",
                "nativeName": "Devon",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Flag_of_Devon.svg"
            },
            "GB-DOR": {
                "name": "Dorset",
                "nativeName": "Dorset",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Dorset.svg"
            },
            "GB-DUR": {
                "name": "Durham",
                "nativeName": "Durham",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_County_Durham.svg"
            },
            "GB-ERY": {
                "name": "East Riding of Yorkshire",
                "nativeName": "East Riding of Yorkshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a2/East_Riding_Of_Yorkshire.svg"
            },
            "GB-ESX": {
                "name": "East Sussex",
                "nativeName": "East Sussex",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Sussex.svg"
            },
            "GB-ESS": {
                "name": "Essex",
                "nativeName": "Essex",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Essex.svg"
            },
            "GB-GLS": {
                "name": "Gloucestershire",
                "nativeName": "Gloucestershire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Severn_Cross.svg"
            },
            "GB-LND": {
                "name": "Greater London",
                "nativeName": "Greater London",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/25/Flag_of_Greater_London.svg"
            },
            "GB-MAN": {
                "name": "Greater Manchester",
                "nativeName": "Manchester",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Unofficial_County_Flag_of_Greater_Manchester.svg"
            },
            "GB-HAM": {
                "name": "Hampshire",
                "nativeName": "Hampshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/County_Flag_of_Hampshire.svg"
            },
            "GB-HEF": {
                "name": "Herefordshire",
                "nativeName": "Herefordshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/79/County_Flag_Of_Herefordshire.svg"
            },
            "GB-HRT": {
                "name": "Hertfordshire",
                "nativeName": "Hertfordshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b8/County_Flag_of_Hertfordshire.svg"
            },
            "GB-IOW": {
                "name": "Isle of Wight",
                "nativeName": "Isle of Wight",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/75/Flag_of_the_Isle_of_Wight.svg"
            },
            "GB-KEN": {
                "name": "Kent",
                "nativeName": "Kent",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/24/FlagOfKent.svg"
            },
            "GB-LAN": {
                "name": "Lancashire",
                "nativeName": "Lancashire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Lancashire_County_Flag.svg"
            },
            "GB-LEC": {
                "name": "Leicestershire",
                "nativeName": "Leicestershire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Leicestershire.svg"
            },
            "GB-LIN": {
                "name": "Lincolnshire",
                "nativeName": "Lincolnshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Flag_of_Lincolnshire.svg"
            },
            "GB-MRS": {
                "name": "Merseyside",
                "nativeName": "Merseyside",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/41/County_Flag_of_Merseyside.svg"
            },
            "GB-NFK": {
                "name": "Norfolk",
                "nativeName": "Norfolk",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Flag_of_Norfolk.svg"
            },
            "GB-NYK": {
                "name": "North Yorkshire",
                "nativeName": "North Yorkshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5b/North-Yorkshire-Flag.svg"
            },
            "GB-NTH": {
                "name": "Northamptonshire",
                "nativeName": "Northamptonshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Northamptonshire.svg"
            },
            "GB-NBL": {
                "name": "Northumberland",
                "nativeName": "Northumberland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/61/Flag_of_Northumberland.svg"
            },
            "GB-NTT": {
                "name": "Nottinghamshire",
                "nativeName": "Nottinghamshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0c/County_Flag_of_Nottinghamshire.svg"
            },
            "GB-OXF": {
                "name": "Oxfordshire",
                "nativeName": "Oxfordshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/39/Flag_of_Oxfordshire.svg"
            },
            "GB-RUT": {
                "name": "Rutland",
                "nativeName": "Rutland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Rutland_County_Flag.svg"
            },
            "GB-SHR": {
                "name": "Shropshire",
                "nativeName": "Shropshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_Shropshire.svg"
            },
            "GB-SOM": {
                "name": "Somerset",
                "nativeName": "Somerset",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/49/Somerset_Flag.svg"
            },
            "GB-SYK": {
                "name": "South Yorkshire",
                "nativeName": "South Yorkshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Unofficial_County_Flag_of_South_Yorkshire.svg"
            },
            "GB-STS": {
                "name": "Staffordshire",
                "nativeName": "Staffordshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Staffordshire_Flag.svg"
            },
            "GB-SFK": {
                "name": "Suffolk",
                "nativeName": "Suffolk",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/County_Flag_of_Suffolk.svg"
            },
            "GB-SRY": {
                "name": "Surrey",
                "nativeName": "Surrey",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Surrey.svg"
            },
            "GB-TYW": {
                "name": "Tyne and Wear",
                "nativeName": "Tyne and Wear",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/County_Flag_of_Tyne_&_Wear.svg"
            },
            "GB-WAR": {
                "name": "Warwickshire",
                "nativeName": "Warwickshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Warwickshire.svg"
            },
            "GB-WML": {
                "name": "West Midlands",
                "nativeName": "West Midlands",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_the_West_Midlands_County.svg"
            },
            "GB-WSX": {
                "name": "West Sussex",
                "nativeName": "West Sussex",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Flag_of_West_Sussex.svg"
            },
            "GB-WYS": {
                "name": "West Yorkshire",
                "nativeName": "West Yorkshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Unofficial_Flag_of_West_Yorkshire.svg"
            },
            "GB-WIL": {
                "name": "Wiltshire",
                "nativeName": "Wiltshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/81/County_Flag_of_Wiltshire.svg"
            },
            "GB-WOR": {
                "name": "Worcestershire",
                "nativeName": "Worcestershire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Worcestershire_flag.svg"
            },
            "GB-SCNW": {
                "name": "North West of Scotland",
                "nativeName": "North West of Scotland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg"
            },
            "GB-SCNE": {
                "name": "North East of Scotland",
                "nativeName": "North East of Scotland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg"
            },
            "GB-SCSW": {
                "name": "South West of Scotland",
                "nativeName": "South West of Scotland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg"
            },
            "GB-SCSE": {
                "name": "South East of Scotland",
                "nativeName": "South East of Scotland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg"
            },
            "GB-GWN": {
                "name": "Gwent",
                "nativeName": "Gwent",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg"
            },
            "GB-SGL": {
                "name": "South Glamorgan",
                "nativeName": "South Glamorgan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Glamorgan_Flag.svg"
            },
            "GB-MGL": {
                "name": "Mid Glamorgan",
                "nativeName": "Mid Glamorgan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Glamorgan_Flag.svg"
            },
            "GB-WGL": {
                "name": "West Glamorgan",
                "nativeName": "West Glamorgan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Glamorgan_Flag.svg"
            },
            "GB-DYF": {
                "name": "Dyfed",
                "nativeName": "Dyfed",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_dyfed.svg/128px-Flag_of_dyfed.svg.png"
            },
            "GB-POW": {
                "name": "Powys",
                "nativeName": "Powys",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Powys.svg"
            },
            "GB-GWY": {
                "name": "Gwynedd",
                "nativeName": "Gwynedd",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Gwynedd.svg"
            },
            "GB-CLW": {
                "name": "Clwyd",
                "nativeName": "Clwyd",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Coat_of_arms_of_Clwyd.svg/128px-Coat_of_arms_of_Clwyd.svg.png"
            },
            "GB-NIR": {
                "name": "Northern Ireland",
                "nativeName": "Tuaisceart Éireann",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/81/Saint_Patrick's_Saltire.svg"
            }
        }
    },
    "US": {
        "name": "United States",
        "nativeName": "United States",
        "regions": {
            "US-AL": {
                "name": "Alabama",
                "nativeName": "Alabama",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg"
            },
            "US-AK": {
                "name": "Alaska",
                "nativeName": "Alaska",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg"
            },
            "US-AZ": {
                "name": "Arizona",
                "nativeName": "Arizona",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg"
            },
            "US-AR": {
                "name": "Arkansas",
                "nativeName": "Arkansas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg"
            },
            "US-CA": {
                "name": "California",
                "nativeName": "California",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg//128px-Flag_of_California.svg.png"
            },
            "US-CO": {
                "name": "Colorado",
                "nativeName": "Colorado",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg"
            },
            "US-CT": {
                "name": "Connecticut",
                "nativeName": "Connecticut",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg//128px-Flag_of_Connecticut.svg.png"
            },
            "US-DE": {
                "name": "Delaware",
                "nativeName": "Delaware",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg//128px-Flag_of_Delaware.svg.png"
            },
            "US-FL": {
                "name": "Florida",
                "nativeName": "Florida",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg//128px-Flag_of_Florida.svg.png"
            },
            "US-GA": {
                "name": "Georgia",
                "nativeName": "Georgia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_the_State_of_Georgia.svg"
            },
            "US-HI": {
                "name": "Hawaii",
                "nativeName": "Hawaii",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg"
            },
            "US-ID": {
                "name": "Idaho",
                "nativeName": "Idaho",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg//128px-Flag_of_Idaho.svg.png"
            },
            "US-IL": {
                "name": "Illinois",
                "nativeName": "Illinois",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg//128px-Flag_of_Illinois.svg.png"
            },
            "US-IN": {
                "name": "Indiana",
                "nativeName": "Indiana",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg"
            },
            "US-IA": {
                "name": "Iowa",
                "nativeName": "Iowa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg//128px-Flag_of_Iowa.svg.png"
            },
            "US-KS": {
                "name": "Kansas",
                "nativeName": "Kansas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg//128px-Flag_of_Kansas.svg.png"
            },
            "US-KY": {
                "name": "Kentucky",
                "nativeName": "Kentucky",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg//128px-Flag_of_Kentucky.svg.png"
            },
            "US-LA": {
                "name": "Louisiana",
                "nativeName": "Louisiana",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg//128px-Flag_of_Louisiana.svg.png"
            },
            "US-ME": {
                "name": "Maine",
                "nativeName": "Maine",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_the_State_of_Maine.svg//128px-Flag_of_the_State_of_Maine.svg.png"
            },
            "US-MD": {
                "name": "Maryland",
                "nativeName": "Maryland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg"
            },
            "US-MA": {
                "name": "Massachusetts",
                "nativeName": "Massachusetts",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg//128px-Flag_of_Massachusetts.svg.png"
            },
            "US-MI": {
                "name": "Michigan",
                "nativeName": "Michigan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg//128px-Flag_of_Michigan.svg.png"
            },
            "US-MN": {
                "name": "Minnesota",
                "nativeName": "Minnesota",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Minnesota.svg"
            },
            "US-MS": {
                "name": "Mississippi",
                "nativeName": "Mississippi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_Mississippi.svg"
            },
            "US-MO": {
                "name": "Missouri",
                "nativeName": "Missouri",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg//128px-Flag_of_Missouri.svg.png"
            },
            "US-MT": {
                "name": "Montana",
                "nativeName": "Montana",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_Montana.svg"
            },
            "US-NE": {
                "name": "Nebraska",
                "nativeName": "Nebraska",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg//128px-Flag_of_Nebraska.svg.png"
            },
            "US-NV": {
                "name": "Nevada",
                "nativeName": "Nevada",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg//128px-Flag_of_Nevada.svg.png"
            },
            "US-NH": {
                "name": "New Hampshire",
                "nativeName": "New Hampshire",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg//128px-Flag_of_New_Hampshire.svg.png"
            },
            "US-NJ": {
                "name": "New Jersey",
                "nativeName": "New Jersey",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg//128px-Flag_of_New_Jersey.svg.png"
            },
            "US-NM": {
                "name": "New Mexico",
                "nativeName": "New Mexico",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_New_Mexico.svg"
            },
            "US-NY": {
                "name": "New York",
                "nativeName": "New York",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg//128px-Flag_of_New_York.svg.png"
            },
            "US-NC": {
                "name": "North Carolina",
                "nativeName": "North Carolina",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_North_Carolina.svg"
            },
            "US-ND": {
                "name": "North Dakota",
                "nativeName": "North Dakota",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg//128px-Flag_of_North_Dakota.svg.png"
            },
            "US-OH": {
                "name": "Ohio",
                "nativeName": "Ohio",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Ohio.svg"
            },
            "US-OK": {
                "name": "Oklahoma",
                "nativeName": "Oklahoma",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Oklahoma.svg"
            },
            "US-OR": {
                "name": "Oregon",
                "nativeName": "Oregon",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg//128px-Flag_of_Oregon.svg.png"
            },
            "US-PA": {
                "name": "Pennsylvania",
                "nativeName": "Pennsylvania",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg//128px-Flag_of_Pennsylvania.svg.png"
            },
            "US-RI": {
                "name": "Rhode Island",
                "nativeName": "Rhode Island",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Rhode_Island.svg"
            },
            "US-SC": {
                "name": "South Carolina",
                "nativeName": "South Carolina",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/69/Flag_of_South_Carolina.svg"
            },
            "US-SD": {
                "name": "South Dakota",
                "nativeName": "South Dakota",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg//128px-Flag_of_South_Dakota.svg.png"
            },
            "US-TN": {
                "name": "Tennessee",
                "nativeName": "Tennessee",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Tennessee.svg"
            },
            "US-TX": {
                "name": "Texas",
                "nativeName": "Texas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg"
            },
            "US-UT": {
                "name": "Utah",
                "nativeName": "Utah",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Utah.svg"
            },
            "US-VT": {
                "name": "Vermont",
                "nativeName": "Vermont",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg//128px-Flag_of_Vermont.svg.png"
            },
            "US-VA": {
                "name": "Virginia",
                "nativeName": "Virginia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg//128px-Flag_of_Virginia.svg.png"
            },
            "US-WA": {
                "name": "Washington",
                "nativeName": "Washington",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg//128px-Flag_of_Washington.svg.png"
            },
            "US-WV": {
                "name": "West Virginia",
                "nativeName": "West Virginia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg//128px-Flag_of_West_Virginia.svg.png"
            },
            "US-WI": {
                "name": "Wisconsin",
                "nativeName": "Wisconsin",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg//128px-Flag_of_Wisconsin.svg.png"
            },
            "US-WY": {
                "name": "Wyoming",
                "nativeName": "Wyoming",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg//128px-Flag_of_Wyoming.svg.png"
            },
            "US-WADC": {
                "name": "Washington, D.C.",
                "nativeName": "Washington, D.C.",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_the_District_of_Columbia.svg"
            }
        }
    },
    "UY": {
        "name": "Uruguay",
        "nativeName": "Uruguay",
        "regions": {
            "UY-AR": {
                "name": "Artigas",
                "nativeName": "Artigas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Artigas_Department.svg"
            },
            "UY-CA": {
                "name": "Canelones",
                "nativeName": "Canelones",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_Canelones_Department.svg"
            },
            "UY-CL": {
                "name": "Cerro Largo",
                "nativeName": "Cerro Largo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Cerro_Largo_Department.svg"
            },
            "UY-CO": {
                "name": "Colonia",
                "nativeName": "Colonia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Colonia_Department.svg"
            },
            "UY-DU": {
                "name": "Durazno",
                "nativeName": "Durazno",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Durazno_Department.svg"
            },
            "UY-FS": {
                "name": "Flores",
                "nativeName": "Flores",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Flores_Department.png/150px-Flag_of_Flores_Department.png"
            },
            "UY-FD": {
                "name": "Florida",
                "nativeName": "Florida",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_Florida_Department.png/150px-Flag_of_Florida_Department.png"
            },
            "UY-LA": {
                "name": "Lavalleja",
                "nativeName": "Lavalleja",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Lavalleja_Department.png/150px-Flag_of_Lavalleja_Department.png"
            },
            "UY-MA": {
                "name": "Maldonado",
                "nativeName": "Maldonado",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_Maldonado_Department.png/150px-Flag_of_Maldonado_Department.png"
            },
            "UY-PA": {
                "name": "Paysandú",
                "nativeName": "Paysandú",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Flag_of_Paysandú_Department.svg"
            },
            "UY-RN": {
                "name": "Río Negro",
                "nativeName": "Río Negro",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Rio_Negro_Department.png/150px-Flag_of_Rio_Negro_Department.png"
            },
            "UY-RV": {
                "name": "Rivera",
                "nativeName": "Rivera",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Rivera_Department.png/150px-Flag_of_Rivera_Department.png"
            },
            "UY-RO": {
                "name": "Rocha",
                "nativeName": "Rocha",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Flag_of_Rocha_Department.svg"
            },
            "UY-SA": {
                "name": "Salto",
                "nativeName": "Salto",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Salto_Department.svg/128px-Flag_of_Salto_Department.svg.png"
            },
            "UY-SJ": {
                "name": "San José",
                "nativeName": "San José",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_San_José_Department.svg"
            },
            "UY-SO": {
                "name": "Soriano",
                "nativeName": "Soriano",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Soriano_Department.svg"
            },
            "UY-TT": {
                "name": "Treinta y Tres",
                "nativeName": "Treinta y Tres",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_Treinta_y_Tres_Department.svg"
            },
            "UY-MO": {
                "name": "Montevideo",
                "nativeName": "Montevideo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Coat_of_arms_of_Montevideo_Department.svg/128px-Coat_of_arms_of_Montevideo_Department.svg.png"
            },
            "UY-TA": {
                "name": "Tacuarembó",
                "nativeName": "Tacuarembó",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/72/Coat_of_arms_of_Tacuarembó_Department.png"
            }
        }
    },
    "UZ": {
        "name": "Uzbekistan",
        "nativeName": "O‘zbekiston Ўзбекистон",
        "regions": {
            "UZ-QR": {
                "name": "Karakalpakstan",
                "nativeName": "Qaraqalpaqstan Respublikası",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/16/Flag_of_Karakalpakstan.svg"
            },
            "UZ-AN": {
                "name": "Andijan Region",
                "nativeName": "Andijon Viloyati",
                "flag": ""
            },
            "UZ-BU": {
                "name": "Bukhara Region",
                "nativeName": "Buxoro Viloyati",
                "flag": ""
            },
            "UZ-FA": {
                "name": "Fergana Region",
                "nativeName": "Farg'ona Viloyati",
                "flag": ""
            },
            "UZ-JI": {
                "name": "Jizzakh Region",
                "nativeName": "Jizzax Viloyati",
                "flag": ""
            },
            "UZ-NG": {
                "name": "Namangan Region",
                "nativeName": "Namangan Viloyati",
                "flag": ""
            },
            "UZ-NW": {
                "name": "Navoiy Region",
                "nativeName": "Navoiy Viloyati",
                "flag": ""
            },
            "UZ-QA": {
                "name": "Qashqadaryo Region",
                "nativeName": "Qashqadaryo Viloyati",
                "flag": ""
            },
            "UZ-SA": {
                "name": "Samarqand Region",
                "nativeName": "Samarqand Viloyati",
                "flag": ""
            },
            "UZ-SI": {
                "name": "Sirdaryo Region",
                "nativeName": "Sirdaryo Viloyati",
                "flag": ""
            },
            "UZ-SU": {
                "name": "Surxondaryo Region",
                "nativeName": "Surxondaryo Viloyati",
                "flag": ""
            },
            "UZ-TK": {
                "name": "Tashkent",
                "nativeName": "Toshkent",
                "flag": ""
            },
            "UZ-XO": {
                "name": "Xorazm Region",
                "nativeName": "Xorazm Viloyati",
                "flag": ""
            },
            "UZ-TO": {
                "name": "Toshkent Region",
                "nativeName": "Toshkent Viloyati",
                "flag": ""
            }
        }
    },
    "VE": {
        "name": "Venezuela",
        "nativeName": "Venezuela",
        "regions": {
            "VE-Z": {
                "name": "Amazonas",
                "nativeName": "Amazonas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Flag_of_Amazonas_Indigenous_State.svg"
            },
            "VE-B": {
                "name": "Anzoátegui",
                "nativeName": "Anzoátegui",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Anzoátegui_State_(original_version).svg"
            },
            "VE-C": {
                "name": "Apure",
                "nativeName": "Apure",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Apure_State.svg//128px-Flag_of_Apure_State.svg.png"
            },
            "VE-D": {
                "name": "Aragua",
                "nativeName": "Aragua",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Aragua_State.svg//128px-Flag_of_Aragua_State.svg.png"
            },
            "VE-E": {
                "name": "Barinas",
                "nativeName": "Barinas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flag_of_Barinas_State.svg"
            },
            "VE-F": {
                "name": "Bolívar",
                "nativeName": "Bolívar",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Bolívar_State.svg//128px-Flag_of_Bolívar_State.svg.png"
            },
            "VE-G": {
                "name": "Carabobo",
                "nativeName": "Carabobo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_Carabobo_State.svg"
            },
            "VE-H": {
                "name": "Cojedes",
                "nativeName": "Cojedes",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Flag_of_Cojedes_State.svg"
            },
            "VE-Y": {
                "name": "Delta Amacuro",
                "nativeName": "Delta Amacuro",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_Delta_Amacuro_State.svg//128px-Flag_of_Delta_Amacuro_State.svg.png"
            },
            "VE-I": {
                "name": "Falcón",
                "nativeName": "Falcón",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_Falcón.svg"
            },
            "VE-J": {
                "name": "Guárico",
                "nativeName": "Guárico",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Flag_of_Guárico_State.svg//128px-Flag_of_Guárico_State.svg.png"
            },
            "VE-K": {
                "name": "Lara",
                "nativeName": "Lara",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Lara_State.svg"
            },
            "VE-L": {
                "name": "Mérida",
                "nativeName": "Mérida",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Mérida_State.svg"
            },
            "VE-M": {
                "name": "Miranda",
                "nativeName": "Miranda",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Miranda_state.svg"
            },
            "VE-N": {
                "name": "Monagas",
                "nativeName": "Monagas",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Monagas_State.svg"
            },
            "VE-O": {
                "name": "Nueva Esparta",
                "nativeName": "Nueva Esparta",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Nueva_Esparta.svg"
            },
            "VE-P": {
                "name": "Portuguesa",
                "nativeName": "Portuguesa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/81/Flag_of_Portuguesa.svg"
            },
            "VE-R": {
                "name": "Sucre",
                "nativeName": "Sucre",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Sucre_State.svg//128px-Flag_of_Sucre_State.svg.png"
            },
            "VE-S": {
                "name": "Táchira",
                "nativeName": "Táchira",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Táchira.svg"
            },
            "VE-T": {
                "name": "Trujillo",
                "nativeName": "Trujillo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Flag_of_Trujillo_State.svg"
            },
            "VE-X": {
                "name": "Vargas",
                "nativeName": "La Guaira",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Vargas_State.svg"
            },
            "VE-U": {
                "name": "Yaracuy",
                "nativeName": "Yaracuy",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/15/Flag_of_Yaracuy_State.svg"
            },
            "VE-V": {
                "name": "Zulia",
                "nativeName": "Zulia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Flag_of_Zulia_State.svg"
            },
            "VE-W": {
                "name": "Federal Dependencies",
                "nativeName": "Dependencias Federales",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Federal_dependencies_of_Venezuela's_Flag.svg"
            },
            "VE-A": {
                "name": "Capital District",
                "nativeName": "Distrito Capital",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/09/Bandera_del_Municipio_Libertador_de_Caracas_(desde_2022).png"
            }
        }
    },
    "AF": {
        "name": "Afghanistan",
        "nativeName": "افغانستان",
        "regions": {
            "AF-BDS": {
                "name": "Badakhshan Province",
                "nativeName": "ولایت بدخشان",
                "flag": ""
            },
            "AF-BDG": {
                "name": "Badghis Province",
                "nativeName": "ولایت بادغیس",
                "flag": ""
            },
            "AF-BGL": {
                "name": "Baghlan Province",
                "nativeName": "ولایت بغلان",
                "flag": ""
            },
            "AF-BAL": {
                "name": "Balkh Province",
                "nativeName": "ولایت بلخ",
                "flag": ""
            },
            "AF-BAM": {
                "name": "Bamyan Province",
                "nativeName": "ولایت بامیان",
                "flag": ""
            },
            "AF-DAY": {
                "name": "Daykundi Province",
                "nativeName": "ولایت دایکندی",
                "flag": ""
            },
            "AF-FRA": {
                "name": "Farah Province",
                "nativeName": "ولایت فراه",
                "flag": ""
            },
            "AF-FYB": {
                "name": "Faryab Province",
                "nativeName": "ولایت فاریاب",
                "flag": ""
            },
            "AF-GHA": {
                "name": "Ghazni Province",
                "nativeName": "ولایت غزنی",
                "flag": ""
            },
            "AF-GHO": {
                "name": "Ghor Province",
                "nativeName": "غور",
                "flag": ""
            },
            "AF-HEL": {
                "name": "Helmand Province",
                "nativeName": "هلمند ولايت",
                "flag": ""
            },
            "AF-HER": {
                "name": "Herat Province",
                "nativeName": "ولایت هرات",
                "flag": ""
            },
            "AF-JOW": {
                "name": "Jowzjan Province",
                "nativeName": "ولایت جوزجان",
                "flag": ""
            },
            "AF-KAB": {
                "name": "Kabul Province",
                "nativeName": "ولایت كابل",
                "flag": ""
            },
            "AF-KAN": {
                "name": "Kandahar Province",
                "nativeName": "کندهار ولايت",
                "flag": ""
            },
            "AF-KAP": {
                "name": "Kapisa Province",
                "nativeName": "ولایت کاپیسا",
                "flag": ""
            },
            "AF-KHO": {
                "name": "Khost Province",
                "nativeName": "خوست ولايت",
                "flag": ""
            },
            "AF-KNR": {
                "name": "Kunar Province",
                "nativeName": "کونړ ولايت",
                "flag": ""
            },
            "AF-KDZ": {
                "name": "Kunduz Province",
                "nativeName": "ولایت قندوز",
                "flag": ""
            },
            "AF-LAG": {
                "name": "Laghman Province",
                "nativeName": "لغمان ولايت",
                "flag": ""
            },
            "AF-LOG": {
                "name": "Logar Province",
                "nativeName": "لوگر ولايت",
                "flag": ""
            },
            "AF-NAN": {
                "name": "Nangarhar Province",
                "nativeName": "ننگرهار ولايت",
                "flag": ""
            },
            "AF-NIM": {
                "name": "Nimruz Province",
                "nativeName": "ولایت نیمروز",
                "flag": ""
            },
            "AF-NUR": {
                "name": "Nuristan Province",
                "nativeName": "نورستان ولایت",
                "flag": ""
            },
            "AF-PIA": {
                "name": "Paktia Province",
                "nativeName": "پکتيا ولايت",
                "flag": ""
            },
            "AF-PKA": {
                "name": "Paktika Province",
                "nativeName": "پکتيکا ولايت",
                "flag": ""
            },
            "AF-PAN": {
                "name": "Panjshir Province",
                "nativeName": "ولایت پنجشیر",
                "flag": ""
            },
            "AF-PAR": {
                "name": "Parwan Province",
                "nativeName": "ولایت پروان",
                "flag": ""
            },
            "AF-SAM": {
                "name": "Samangan Province",
                "nativeName": "ولایت سمنگان",
                "flag": ""
            },
            "AF-SAR": {
                "name": "Sar-e Pol Province",
                "nativeName": "سرپل",
                "flag": ""
            },
            "AF-TAK": {
                "name": "Takhar Province",
                "nativeName": "تخار ولايت",
                "flag": ""
            },
            "AF-URU": {
                "name": "Uruzgan Province",
                "nativeName": "روزگان ولايت",
                "flag": ""
            },
            "AF-WAR": {
                "name": "Maidan Wardak Province",
                "nativeName": "ميدان وردگ ولايت",
                "flag": ""
            },
            "AF-ZAB": {
                "name": "Zabul Province",
                "nativeName": "زابل ولايت",
                "flag": ""
            }
        }
    },
    "AM": {
        "name": "Armenia",
        "nativeName": "Հայաստան",
        "regions": {
            "AM-AG": {
                "name": "Aragatsotn Province",
                "nativeName": "Արագածոտնի մարզ",
                "flag": ""
            },
            "AM-AR": {
                "name": "Ararat Province",
                "nativeName": "Արարատի մարզ",
                "flag": ""
            },
            "AM-AV": {
                "name": "Armavir Province",
                "nativeName": "Արմավիրի մարզ",
                "flag": ""
            },
            "AM-ER": {
                "name": "Yerevan",
                "nativeName": "Երևան",
                "flag": ""
            },
            "AM-GR": {
                "name": "Gegharkunik Province",
                "nativeName": "Գեղարքունիքի մարզ",
                "flag": ""
            },
            "AM-KT": {
                "name": "Kotayk Province",
                "nativeName": "Կոտայքի մարզ",
                "flag": ""
            },
            "AM-LO": {
                "name": "Lori Province",
                "nativeName": "Լոռու մարզ",
                "flag": ""
            },
            "AM-SH": {
                "name": "Shirak Province",
                "nativeName": "Շիրակի մարզ",
                "flag": ""
            },
            "AM-SU": {
                "name": "Syunik Province",
                "nativeName": "Սյունիքի մարզ",
                "flag": ""
            },
            "AM-TV": {
                "name": "Tavush Province",
                "nativeName": "Տավուշի մարզ",
                "flag": ""
            },
            "AM-VD": {
                "name": "Vayots Dzor Province",
                "nativeName": "Վայոց ձորի մարզ",
                "flag": ""
            }
        }
    },
    "AO": {
        "name": "Angola",
        "nativeName": "Angola",
        "regions": {
            "AO-BGO": {
                "name": "Bengo Province",
                "nativeName": "Bengo",
                "flag": ""
            },
            "AO-BGU": {
                "name": "Benguela Province",
                "nativeName": "Benguela",
                "flag": ""
            },
            "AO-BIE": {
                "name": "Bié Province",
                "nativeName": "Bié",
                "flag": ""
            },
            "AO-CAB": {
                "name": "Cabinda Province",
                "nativeName": "Cabinda",
                "flag": ""
            },
            "AO-CCU": {
                "name": "Cuando Cubango Province",
                "nativeName": "Cuando Cubango",
                "flag": ""
            },
            "AO-CNO": {
                "name": "Cuanza Norte Province",
                "nativeName": "Cuanza Norte",
                "flag": ""
            },
            "AO-CUS": {
                "name": "Cuanza Sul Province",
                "nativeName": "Cuanza Sul",
                "flag": ""
            },
            "AO-CNN": {
                "name": "Cunene Province",
                "nativeName": "Cunene",
                "flag": ""
            },
            "AO-HUA": {
                "name": "Huambo Province",
                "nativeName": "Huambo",
                "flag": ""
            },
            "AO-HUI": {
                "name": "Huíla Province",
                "nativeName": "Huíla",
                "flag": ""
            },
            "AO-LUA": {
                "name": "Luanda Province",
                "nativeName": "Luanda",
                "flag": ""
            },
            "AO-LNO": {
                "name": "Lunda Norte Province",
                "nativeName": "Lunda Norte",
                "flag": ""
            },
            "AO-LSU": {
                "name": "Lunda Sul Province",
                "nativeName": "Lunda Sul",
                "flag": ""
            },
            "AO-MAL": {
                "name": "Malanje Province",
                "nativeName": "Malanje",
                "flag": ""
            },
            "AO-MOX": {
                "name": "Moxico Province",
                "nativeName": "Moxico",
                "flag": ""
            },
            "AO-NAM": {
                "name": "Namibe Province",
                "nativeName": "Namibe",
                "flag": ""
            },
            "AO-UIG": {
                "name": "Uíge Province",
                "nativeName": "Uíge",
                "flag": ""
            },
            "AO-ZAI": {
                "name": "Zaire Province",
                "nativeName": "Zaire",
                "flag": ""
            }
        }
    },
    "BB": {
        "name": "Barbados",
        "regions": {
            "BB-01": {
                "name": "Christ Church",
                "nativeName": "Christ Church",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/7/79/Christ-church.png/revision/latest?cb=20230805131732"
            },
            "BB-02": {
                "name": "Saint Andrew",
                "nativeName": "Saint Andrew",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/e/ee/Flag_of_Christ_Church,_Barbados.png/revision/latest?cb=20230505120400"
            },
            "BB-03": {
                "name": "Saint George",
                "nativeName": "Saint George",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/3/32/Saint_Andrew.png/revision/latest?cb=20230805131956"
            },
            "BB-04": {
                "name": "Saint James",
                "nativeName": "Saint James",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/f7/St._george.png/revision/latest?cb=20230805132132"
            },
            "BB-05": {
                "name": "Saint John",
                "nativeName": "Saint John",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/c/c3/Saint_John.png/revision/latest/scale-to-width-down/1000?cb=20240127160953"
            },
            "BB-06": {
                "name": "Saint Joseph",
                "nativeName": "Saint Joseph",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/b/b4/Saint_Joseph.png/revision/latest/scale-to-width-down/1000?cb=20240127164135"
            },
            "BB-07": {
                "name": "Saint Lucy",
                "nativeName": "Saint Lucy",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/6f/Saint_Lucy.png/revision/latest?cb=20240127164747"
            },
            "BB-08": {
                "name": "Saint Michael",
                "nativeName": "Saint Michael",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/a/a1/Saint_Michael.png/revision/latest/scale-to-width-down/1000?cb=20240127165045"
            },
            "BB-09": {
                "name": "Saint Peter",
                "nativeName": "Saint Peter",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/1/17/Saint_Peter.png/revision/latest/scale-to-width-down/1000?cb=20240127165436"
            },
            "BB-10": {
                "name": "Saint Philip",
                "nativeName": "Saint Philip",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/d/db/Saint_Philip.png/revision/latest/scale-to-width-down/1000?cb=20240127170558"
            },
            "BB-11": {
                "name": "Saint Thomas",
                "nativeName": "Saint Thomas",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/f2/Saint_Thomas.png/revision/latest/scale-to-width-down/1000?cb=20240127170618"
            }
        },
        "nativeName": "Barbados"
    },
    "BD": {
        "name": "Bangladesh",
        "nativeName": "বাংলাদেশ",
        "regions": {
            "BD-A": {
                "name": "Barishal Division",
                "nativeName": "বরিশাল বিভাগ",
                "flag": ""
            },
            "BD-B": {
                "name": "Chattogram Division",
                "nativeName": "চট্টগ্রাম বিভাগ",
                "flag": ""
            },
            "BD-C": {
                "name": "Dhaka Division",
                "nativeName": "ঢাকা বিভাগ",
                "flag": ""
            },
            "BD-D": {
                "name": "Khulna Division",
                "nativeName": "খুলনা বিভাগ",
                "flag": ""
            },
            "BD-H": {
                "name": "Mymensingh Division",
                "nativeName": "ময়মনসিংহ বিভাগ",
                "flag": ""
            },
            "BD-E": {
                "name": "Rajshahi Division",
                "nativeName": "রাজশাহী বিভাগ",
                "flag": ""
            },
            "BD-F": {
                "name": "Rangpur Division",
                "nativeName": "রংপুর বিভাগ",
                "flag": ""
            },
            "BD-G": {
                "name": "Sylhet Division",
                "nativeName": "সিলেট বিভাগ",
                "flag": ""
            }
        }
    },
    "BF": {
        "name": "Burkina Faso",
        "nativeName": "Burkina Faso",
        "regions": {
            "BF-01": {
                "name": "Boucle du Mouhoun",
                "nativeName": "Boucle du Mouhoun",
                "flag": ""
            },
            "BF-02": {
                "name": "Waterfalls",
                "nativeName": "Cascades",
                "flag": ""
            },
            "BF-03": {
                "name": "Centre",
                "nativeName": "Centre",
                "flag": ""
            },
            "BF-04": {
                "name": "Central-East",
                "nativeName": "Centre-Est",
                "flag": ""
            },
            "BF-05": {
                "name": "Central-North",
                "nativeName": "Centre-Nord",
                "flag": ""
            },
            "BF-06": {
                "name": "Central-West",
                "nativeName": "Centre-Ouest",
                "flag": ""
            },
            "BF-07": {
                "name": "Central-South",
                "nativeName": "Centre-Sud",
                "flag": ""
            },
            "BF-08": {
                "name": "East",
                "nativeName": "Est",
                "flag": ""
            },
            "BF-09": {
                "name": "Upper-Basins",
                "nativeName": "Hauts-Bassins",
                "flag": ""
            },
            "BF-10": {
                "name": "North",
                "nativeName": "Nord",
                "flag": ""
            },
            "BF-11": {
                "name": "Central-Plateau",
                "nativeName": "Plateau-Central",
                "flag": ""
            },
            "BF-12": {
                "name": "Sahel",
                "nativeName": "Sahel",
                "flag": ""
            },
            "BF-13": {
                "name": "Southwest",
                "nativeName": "Sud-Ouest",
                "flag": ""
            }
        }
    },
    "BG": {
        "name": "Bulgaria",
        "regions": {
            "BG-01": {
                "name": "Blagoevgrad",
                "nativeName": "Благоевград",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Emblem_of_Blagoevgrad.svg"
            },
            "BG-02": {
                "name": "Burgas",
                "nativeName": "Бургас",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/be/BG-Burgas_flag.png"
            },
            "BG-03": {
                "name": "Varna",
                "nativeName": "Варна",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Varna_flag.png/256px-Varna_flag.png"
            },
            "BG-04": {
                "name": "Veliko Tarnovo",
                "nativeName": "Велико Търново",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/11/Veliko_tarnovo_flag.png"
            },
            "BG-05": {
                "name": "Vidin",
                "nativeName": "Видин",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Vidin.gif"
            },
            "BG-06": {
                "name": "Vratsa",
                "nativeName": "Враца",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Flag_of_Vratza.gif"
            },
            "BG-07": {
                "name": "Gabrovo",
                "nativeName": "Габрово",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0d/BG_Gabrovo_flag.svg"
            },
            "BG-08": {
                "name": "Dobrich",
                "nativeName": "Добрич",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Dobrich.svg"
            },
            "BG-09": {
                "name": "Kardzhali",
                "nativeName": "Кърджали",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Kardzhali.gif"
            },
            "BG-10": {
                "name": "Kyustendil",
                "nativeName": "Кюстендил",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_kn.gif"
            },
            "BG-11": {
                "name": "Lovech",
                "nativeName": "Ловеч",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_Lovech.gif"
            },
            "BG-12": {
                "name": "Montana",
                "nativeName": "Монтана",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Montana,_Bulgaria.svg"
            },
            "BG-13": {
                "name": "Pazardzhik",
                "nativeName": "Пазарджик",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Pazardzhik.gif"
            },
            "BG-14": {
                "name": "Pernik",
                "nativeName": "Перник",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Pernik_flag.png"
            },
            "BG-15": {
                "name": "Pleven",
                "nativeName": "Плевен",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_Pleven.gif"
            },
            "BG-16": {
                "name": "Plovdiv",
                "nativeName": "Пловдив",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Plovdiv_flag.svg/128px-Plovdiv_flag.svg.png"
            },
            "BG-17": {
                "name": "Razgrad",
                "nativeName": "Разград",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/86/Razgrad_flag.png"
            },
            "BG-18": {
                "name": "Ruse",
                "nativeName": "Русе",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Ruse.gif"
            },
            "BG-19": {
                "name": "Silistra",
                "nativeName": "Силистра",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Silistra_Municipality_HD.jpg/256px-Silistra_Municipality_HD.jpg"
            },
            "BG-20": {
                "name": "Sliven",
                "nativeName": "Сливен",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Sliven_flag.png"
            },
            "BG-21": {
                "name": "Smolyan",
                "nativeName": "Смолян",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Smolyan_Coat_of_Arms.png"
            },
            "BG-22": {
                "name": "Sofia-City",
                "nativeName": "София-град",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BG_Sofia_flag.svg/128px-BG_Sofia_flag.svg.png"
            },
            "BG-23": {
                "name": "Sofia",
                "nativeName": "Софийска",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BG_Sofia_flag.svg/128px-BG_Sofia_flag.svg.png"
            },
            "BG-24": {
                "name": "Stara Zagora",
                "nativeName": "Стара Загора",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Flag_of_Stara_Zagora_(obverse).svg"
            },
            "BG-25": {
                "name": "Targovishte",
                "nativeName": "Търговище",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Targovishte_Municipality.jpg/256px-Targovishte_Municipality.jpg"
            },
            "BG-26": {
                "name": "Haskovo",
                "nativeName": "Хасково",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Haskovo.gif"
            },
            "BG-27": {
                "name": "Shumen",
                "nativeName": "Шумен",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Flag_of_Shumen.png"
            },
            "BG-28": {
                "name": "Yambol",
                "nativeName": "Ямбол",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Yambol.gif"
            }
        },
        "nativeName": "България"
    },
    "BN": {
        "name": "Brunei",
        "nativeName": "Brunei",
        "regions": {
            "BN-BE": {
                "name": "Belait District",
                "nativeName": "Belait",
                "flag": ""
            },
            "BN-BM": {
                "name": "Brunei-Muara District",
                "nativeName": "Brunei-Muara",
                "flag": ""
            },
            "BN-TE": {
                "name": "Temburong District",
                "nativeName": "Temburong",
                "flag": ""
            },
            "BN-TU": {
                "name": "Tutong District",
                "nativeName": "Tutong",
                "flag": ""
            }
        }
    },
    "DO": {
        "name": "Dominican Republic",
        "regions": {
            "DO-01": {
                "name": "Distrito Nacional",
                "nativeName": "Distrito Nacional",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Escudo_del_Municipio_Santo_Domingo.svg/128px-Escudo_del_Municipio_Santo_Domingo.svg.png"
            },
            "DO-02": {
                "name": "Azua",
                "nativeName": "Azua",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Escudo_de_la_provincia_de_Azua_de_Compostela.jpg"
            },
            "DO-03": {
                "name": "Baoruco",
                "nativeName": "Baoruco",
                "flag": ""
            },
            "DO-04": {
                "name": "Barahona",
                "nativeName": "Barahona",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/59/Escudo_de_la_Provincia_Barahona.svg"
            },
            "DO-05": {
                "name": "Dajabón",
                "nativeName": "Dajabón",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Escudo_de_la_Provincia_Dajabón.png"
            },
            "DO-06": {
                "name": "Duarte",
                "nativeName": "Duarte",
                "flag": ""
            },
            "DO-08": {
                "name": "El Seibo",
                "nativeName": "El Seibo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Escudo_de_la_Provincia_El_Seibo.svg/128px-Escudo_de_la_Provincia_El_Seibo.svg.png"
            },
            "DO-09": {
                "name": "Espaillat",
                "nativeName": "Espaillat",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Escudo_de_la_Provincia_Espaillat.png"
            },
            "DO-30": {
                "name": "Hato Mayor",
                "nativeName": "Hato Mayor",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Escudo_de_la_Provincia_Hato_Mayor.png"
            },
            "DO-10": {
                "name": "Independencia Province",
                "nativeName": "Independencia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Escudo_de_la_Provincia_Independencia.png"
            },
            "DO-11": {
                "name": "La Altagracia",
                "nativeName": "La Altagracia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Escudo_de_la_Provincia_La_Altagracia.png"
            },
            "DO-07": {
                "name": "Elías Piña",
                "nativeName": "Elías Piña",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Escudo_de_la_Provincia_Elías_Piña.png"
            },
            "DO-12": {
                "name": "La Romana",
                "nativeName": "La Romana",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/48/Escudo_de_la_Provincia_La_Romana.svg"
            },
            "DO-13": {
                "name": "La Vega",
                "nativeName": "La Vega",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/31/Escudo_de_la_Provincia_La_Vega.png"
            },
            "DO-14": {
                "name": "María Trinidad Sánchez",
                "nativeName": "María Trinidad Sánchez",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Escudo_de_la_Provincia_María_Trinidad_Sánchez.png"
            },
            "DO-28": {
                "name": "Monseñor Nouel",
                "nativeName": "Monseñor Nouel",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Escudo_de_la_Provincia_Monseñor_Nouel.png"
            },
            "DO-15": {
                "name": "Monte Cristi",
                "nativeName": "Monte Cristi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Escudo_de_la_Provincia_Monte_Cristi.png"
            },
            "DO-29": {
                "name": "Monte Plata",
                "nativeName": "Monte Plata",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Escudo_de_la_Provincia_Monte_Plata.png"
            },
            "DO-16": {
                "name": "Pedernales",
                "nativeName": "Pedernales",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Escudo_de_la_Provincia_Pedernales.png"
            },
            "DO-17": {
                "name": "Peravia",
                "nativeName": "Peravia",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/90/Escudo_de_la_Provincia_Peravia.png"
            },
            "DO-18": {
                "name": "Puerto Plata",
                "nativeName": "Puerto Plata",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Escudo_de_la_Provincia_Puerto_Plata.svg/128px-Escudo_de_la_Provincia_Puerto_Plata.svg.png"
            },
            "DO-19": {
                "name": "Hermanas Mirabal",
                "nativeName": "Hermanas Mirabal",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Escudo_de_la_Provincia_Hermanas_Mirabal.png"
            },
            "DO-20": {
                "name": "Samaná",
                "nativeName": "Samaná",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Escudo_de_la_Provincia_Samaná.svg/128px-Escudo_de_la_Provincia_Samaná.svg.png"
            },
            "DO-21": {
                "name": "San Cristóbal",
                "nativeName": "San Cristóbal",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/89/Escudo_de_la_Provincia_San_Cristóbal.png"
            },
            "DO-31": {
                "name": "San José de Ocoa",
                "nativeName": "San José de Ocoa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Escudo_de_la_Provincia_San_José_de_Ocoa.png"
            },
            "DO-22": {
                "name": "San Juan",
                "nativeName": "San Juan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Escudo_de_la_Provincia_San_Juan.svg"
            },
            "DO-23": {
                "name": "San Pedro de Macorís",
                "nativeName": "San Pedro de Macorís",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/80/Escudo_de_la_Provincia_San_Pedro_de_Macorís.png"
            },
            "DO-24": {
                "name": "Sánchez Ramírez",
                "nativeName": "Sánchez Ramírez",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Escudo_de_la_Provincia_Sánchez_Ramírez.png"
            },
            "DO-25": {
                "name": "Santiago",
                "nativeName": "Santiago",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Escudo_de_la_Provincia_Santiago.svg/128px-Escudo_de_la_Provincia_Santiago.svg.png"
            },
            "DO-26": {
                "name": "Santiago Rodríguez",
                "nativeName": "Santiago Rodríguez",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Escudo_de_la_Provincia_Santiago_Rodríguez.png"
            },
            "DO-32": {
                "name": "Santo Domingo",
                "nativeName": "Santo Domingo",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Escudo_de_la_Provincia_Santo_Domingo.png"
            },
            "DO-27": {
                "name": "Valverde",
                "nativeName": "Valverde",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Escudo_del_Municipio_Mao.svg/128px-Escudo_del_Municipio_Mao.svg.png"
            }
        },
        "nativeName": "República Dominicana"
    },
    "DZ": {
        "name": "Algeria",
        "nativeName": "Algérie ⵍⵣⵣⴰⵢⴻⵔ الجزائر",
        "regions": {
            "DZ-01": {
                "name": "Adrar",
                "nativeName": "Adrar",
                "flag": ""
            },
            "DZ-44": {
                "name": "Aïn Defla",
                "nativeName": "Aïn Defla",
                "flag": ""
            },
            "DZ-46": {
                "name": "Aïn Témouchent",
                "nativeName": "Aïn Témouchent",
                "flag": ""
            },
            "DZ-16": {
                "name": "Algiers",
                "nativeName": "Alger",
                "flag": ""
            },
            "DZ-23": {
                "name": "Annaba",
                "nativeName": "Annaba",
                "flag": ""
            },
            "DZ-05": {
                "name": "Batna",
                "nativeName": "Batna",
                "flag": ""
            },
            "DZ-08": {
                "name": "Bashar",
                "nativeName": "Béchar",
                "flag": ""
            },
            "DZ-06": {
                "name": "Bejaia",
                "nativeName": "Béjaïa",
                "flag": ""
            },
            "DZ-52": {
                "name": "Beni Abbes",
                "nativeName": "Béni Abbès",
                "flag": ""
            },
            "DZ-07": {
                "name": "Biskra",
                "nativeName": "Biskra",
                "flag": ""
            },
            "DZ-09": {
                "name": "Blida",
                "nativeName": "Blida",
                "flag": ""
            },
            "DZ-50": {
                "name": "Bordj Badji Mokhtar",
                "nativeName": "Bordj Badji Mokhtar",
                "flag": ""
            },
            "DZ-34": {
                "name": "Bordj Bou Arreridj",
                "nativeName": "Bordj Bou Arreridj",
                "flag": ""
            },
            "DZ-10": {
                "name": "Bouira",
                "nativeName": "Bouira",
                "flag": ""
            },
            "DZ-35": {
                "name": "Boumerdes",
                "nativeName": "Boumerdès",
                "flag": ""
            },
            "DZ-02": {
                "name": "Chlef",
                "nativeName": "Chlef",
                "flag": ""
            },
            "DZ-25": {
                "name": "Constantine",
                "nativeName": "Constantine",
                "flag": ""
            },
            "DZ-56": {
                "name": "Djanet",
                "nativeName": "Djanet",
                "flag": ""
            },
            "DZ-17": {
                "name": "Djelfa",
                "nativeName": "Djelfa",
                "flag": ""
            },
            "DZ-32": {
                "name": "El Bayadh",
                "nativeName": "El Bayadh",
                "flag": ""
            },
            "DZ-57": {
                "name": "El M'Ghair",
                "nativeName": "El M'Ghair",
                "flag": ""
            },
            "DZ-58": {
                "name": "El Menia",
                "nativeName": "El Meniaa",
                "flag": ""
            },
            "DZ-39": {
                "name": "El Oued",
                "nativeName": "El Oued",
                "flag": ""
            },
            "DZ-36": {
                "name": "El Tarf",
                "nativeName": "El Tarf",
                "flag": ""
            },
            "DZ-47": {
                "name": "Ghardaia",
                "nativeName": "Ghardaïa",
                "flag": ""
            },
            "DZ-24": {
                "name": "Guelma",
                "nativeName": "Guelma",
                "flag": ""
            },
            "DZ-33": {
                "name": "Illizi",
                "nativeName": "Illizi",
                "flag": ""
            },
            "DZ-54": {
                "name": "In Guezzam",
                "nativeName": "In Guezzam",
                "flag": ""
            },
            "DZ-53": {
                "name": "In Salah",
                "nativeName": "In Salah",
                "flag": ""
            },
            "DZ-18": {
                "name": "Jijel",
                "nativeName": "Jijel",
                "flag": ""
            },
            "DZ-40": {
                "name": "Khenchela",
                "nativeName": "Khenchela",
                "flag": ""
            },
            "DZ-03": {
                "name": "Laghouat",
                "nativeName": "Laghouat",
                "flag": ""
            },
            "DZ-28": {
                "name": "M'Sila",
                "nativeName": "M'Sila",
                "flag": ""
            },
            "DZ-29": {
                "name": "Mascara",
                "nativeName": "Mascara",
                "flag": ""
            },
            "DZ-26": {
                "name": "Médéa",
                "nativeName": "Médéa",
                "flag": ""
            },
            "DZ-43": {
                "name": "Mila",
                "nativeName": "Mila",
                "flag": ""
            },
            "DZ-27": {
                "name": "Mostaganem",
                "nativeName": "Mostaganem",
                "flag": ""
            },
            "DZ-45": {
                "name": "Naâma",
                "nativeName": "Naâma ⵏⵄⴰⵎⴰ النعامة",
                "flag": ""
            },
            "DZ-31": {
                "name": "Oran",
                "nativeName": "Oran",
                "flag": ""
            },
            "DZ-30": {
                "name": "Ouargla",
                "nativeName": "Ouargla",
                "flag": ""
            },
            "DZ-51": {
                "name": "Ouled Djellal",
                "nativeName": "Ouled Djellal",
                "flag": ""
            },
            "DZ-04": {
                "name": "Oum El Bouaghi",
                "nativeName": "Oum El Bouaghi",
                "flag": ""
            },
            "DZ-48": {
                "name": "Relizane",
                "nativeName": "Relizane",
                "flag": ""
            },
            "DZ-20": {
                "name": "Saïda",
                "nativeName": "Saïda",
                "flag": ""
            },
            "DZ-19": {
                "name": "Setif",
                "nativeName": "Sétif",
                "flag": ""
            },
            "DZ-22": {
                "name": "Sidi Bel Abbès",
                "nativeName": "Sidi Bel Abbès",
                "flag": ""
            },
            "DZ-21": {
                "name": "Skikda",
                "nativeName": "Skikda",
                "flag": ""
            },
            "DZ-41": {
                "name": "Souk Ahras",
                "nativeName": "Souk Ahras",
                "flag": ""
            },
            "DZ-11": {
                "name": "Tamanrasset",
                "nativeName": "Tamanrasset",
                "flag": ""
            },
            "DZ-12": {
                "name": "Tébessa",
                "nativeName": "Tébessa",
                "flag": ""
            },
            "DZ-14": {
                "name": "Tiaret",
                "nativeName": "Tiaret",
                "flag": ""
            },
            "DZ-49": {
                "name": "Timimoun Province",
                "nativeName": "Timimoune",
                "flag": ""
            },
            "DZ-37": {
                "name": "Tinduf",
                "nativeName": "Tindouf",
                "flag": ""
            },
            "DZ-42": {
                "name": "Tipaza",
                "nativeName": "Tipaza",
                "flag": ""
            },
            "DZ-38": {
                "name": "Tissemsilt",
                "nativeName": "Tissemsilt",
                "flag": ""
            },
            "DZ-15": {
                "name": "Tizi Ouzou",
                "nativeName": "Tizi Ouzou",
                "flag": ""
            },
            "DZ-13": {
                "name": "Tlemcen",
                "nativeName": "Tlemcen ⵜⵍⴻⵎⵙⴻⵏ تلمسان",
                "flag": ""
            },
            "DZ-55": {
                "name": "Touggourt",
                "nativeName": "Touggourt",
                "flag": ""
            }
        }
    },
    "GR": {
        "name": "Greece",
        "nativename": "Ελλάδα",
        "nativeName": "Ελλάς",
        "regions": {
            "GR-A": {
                "name": "Eastern Macedonia and Thrace",
                "nativeName": "Περιφέρεια Ανατολικής Μακεδονίας και Θράκης",
                "flag": "https://upload.wikimedia.org/wikipedia/en/f/f8/Eastern_Macedonia_and_Thrace_logo.png"
            },
            "GR-B": {
                "name": "Central Macedonia",
                "nativeName": "Περιφέρεια Κεντρικής Μακεδονίας",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Greek_Macedonia.svg"
            },
            "GR-C": {
                "name": "Western Macedonia",
                "nativeName": "Περιφέρεια Δυτικής Μακεδονίας",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Greek_Macedonia.svg"
            },
            "GR-D": {
                "name": "Epirus",
                "nativeName": "Περιφέρεια Ηπείρου",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/18/Flag_of_the_Autonomous_Republic_of_Northern_Epirus.svg"
            },
            "GR-E": {
                "name": "Thessaly",
                "nativeName": "Περιφέρεια Θεσσαλίας",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Flag_of_the_Region_of_Thessaly.svg"
            },
            "GR-F": {
                "name": "Ioanian Islands",
                "nativeName": "Περιφέρεια Ιονίων Νήσων",
                "flag": "https://upload.wikimedia.org/wikipedia/en/9/9f/Logo_of_the_Ionian_Islands_Region.png"
            },
            "GR-G": {
                "name": "Western Greece",
                "nativeName": "Περιφέρεια Δυτικής Ελλάδας",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Western_Greece_logo.png"
            },
            "GR-H": {
                "name": "Central Greece",
                "nativeName": "Περιφέρεια Στερεάς Ελλάδας",
                "flag": "https://upload.wikimedia.org/wikipedia/en/4/4c/Logo_of_the_Central_Greece_Region.png"
            },
            "GR-I": {
                "name": "Attica",
                "nativeName": "Περιφέρεια Αττικής",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/12/Bandera_d'Àtica.svg"
            },
            "GR-J": {
                "name": "Peloponnese Region",
                "nativeName": "Περιφέρεια Πελοποννήσου",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Greek_Revolution_flag.svg"
            },
            "GR-K": {
                "name": "Northern Aegean",
                "nativeName": "Περιφέρεια Βόρειου Αιγαίου",
                "flag": "https://upload.wikimedia.org/wikipedia/en/7/70/Logo_of_the_North_Aegean_Region.jpg"
            },
            "GR-L": {
                "name": "South Aegean",
                "nativeName": "Περιφέρεια Νοτίου Αιγαίου",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Region_of_South_Aegean.svg"
            },
            "GR-M": {
                "name": "Region of Crete",
                "nativeName": "Περιφέρεια Κρήτης",
                "flag": "https://upload.wikimedia.org/wikipedia/en/1/1a/Logo_of_the_Crete_Region.png"
            },
            "GR-69": {
                "name": "Autonomous Monastic State of the Holy Mountain",
                "nativeName": "Αυτόνομη Μοναστική Πολιτεία Αγίου Όρους",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_the_Greek_Orthodox_Church.svg/128px-Flag_of_the_Greek_Orthodox_Church.svg.png"
            }
        }
    },
    "IL": {
        "name": "Israel",
        "regions": {
            "IL-M": {
                "name": "Center District",
                "nativeName": "מחוז המרכז",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Coat_of_Arms_of_Ramla.svg"
            },
            "IL-HA": {
                "name": "Haifa District",
                "nativeName": "מחוז חיפה",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/42/Coat_of_arms_of_Haifa.svg"
            },
            "IL-JM": {
                "name": "Jerusalem District",
                "nativeName": "מחוז ירושלים",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Emblem_of_Jerusalem.svg"
            },
            "IL-Z": {
                "name": "North District",
                "nativeName": "מחוז הצפון",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Coat_of_Arms_of_Nof_HaGalil.png/256px-Coat_of_Arms_of_Nof_HaGalil.png"
            },
            "IL-D": {
                "name": "South District",
                "nativeName": "מחוז הדרום",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Coat_of_arms_of_Beersheba.svg"
            },
            "IL-TA": {
                "name": "Tel Aviv District",
                "nativeName": "מחוז תל אביב",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Emblem_of_Tel_Aviv.svg"
            }
        },
        "nativeName": "ישראל"
    },
    "IN": {
        "name": "India",
        "nativeName": "India",
        "regions": {
            "IN-AN": {
                "name": "Andaman and Nicobar Islands",
                "nativeName": "Andaman and Nicobar Islands",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Andaman_and_Nicobar_Islands_emblem.png"
            },
            "IN-AP": {
                "name": "Andhra Pradesh",
                "nativeName": "Andhra Pradesh",
                "flag": "https://upload.wikimedia.org/wikipedia/en/3/37/Emblem_of_Andhra_Pradesh.svg"
            },
            "IN-AR": {
                "name": "Arunachal Pradesh",
                "nativeName": "Arunachal Pradesh",
                "flag": "https://upload.wikimedia.org/wikipedia/en/d/d4/Arunachal_Pradesh_Seal.svg"
            },
            "IN-AS": {
                "name": "Assam",
                "nativeName": "Assam",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Seal_of_Assam.svg/128px-Seal_of_Assam.svg.png"
            },
            "IN-BR": {
                "name": "Bihar",
                "nativeName": "Bihar",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Seal_of_Bihar.svg"
            },
            "IN-CH": {
                "name": "Chandigarh",
                "nativeName": "Chandigarh",
                "flag": "https://upload.wikimedia.org/wikipedia/en/a/a0/Emblem_of_Chandigarh.svg"
            },
            "IN-CG": {
                "name": "Chhattisgarh",
                "nativeName": "Chhattisgarh",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Coat_of_arms_of_Chhattisgarh.svg/128px-Coat_of_arms_of_Chhattisgarh.svg.png"
            },
            "IN-DH": {
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "nativeName": "Dadra and Nagar Haveli and Daman and Diu",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Seal_of_Dadra_and_Nagar_Haveli_and_Daman_and_Diu.svg/128px-Seal_of_Dadra_and_Nagar_Haveli_and_Daman_and_Diu.svg.png"
            },
            "IN-DL": {
                "name": "Delhi",
                "nativeName": "Delhi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Seal_of_the_National_Capital_Territory_of_Delhi.svg/128px-Seal_of_the_National_Capital_Territory_of_Delhi.svg.png"
            },
            "IN-GA": {
                "name": "Goa",
                "nativeName": "Goa",
                "flag": "https://upload.wikimedia.org/wikipedia/en/2/26/Emblem_of_Goa.svg"
            },
            "IN-GJ": {
                "name": "Gujarat",
                "nativeName": "Gujarat",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Government_Of_Gujarat_Seal_In_All_Languages.svg/128px-Government_Of_Gujarat_Seal_In_All_Languages.svg.png"
            },
            "IN-HP": {
                "name": "Himachal Pradesh",
                "nativeName": "Himachal Pradesh",
                "flag": "https://upload.wikimedia.org/wikipedia/en/b/be/Himachal_Pradesh_seal.svg"
            },
            "IN-HR": {
                "name": "Haryana",
                "nativeName": "Haryana",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emblem_of_Haryana.svg/128px-Emblem_of_Haryana.svg.png"
            },
            "IN-JH": {
                "name": "Jharkhand",
                "nativeName": "Jharkhand",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/128px-Jharkhand_Rajakiya_Chihna.svg.png"
            },
            "IN-JK": {
                "name": "Jammu and Kashmir",
                "nativeName": "Jammu and Kashmir",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Emblem_of_Jammu_and_Kashmir.png"
            },
            "IN-KA": {
                "name": "Karnataka",
                "nativeName": "Karnataka",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Seal_of_Karnataka.svg/128px-Seal_of_Karnataka.svg.png"
            },
            "IN-KL": {
                "name": "Kerala",
                "nativeName": "Kerala",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Government_of_Kerala_Logo.svg/128px-Government_of_Kerala_Logo.svg.png"
            },
            "IN-LA": {
                "name": "Ladakh",
                "nativeName": "Ladakh",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_Ladakh,_India.svg/128px-Flag_of_Ladakh,_India.svg.png"
            },
            "IN-LD": {
                "name": "Lakshadweep",
                "nativeName": "Lakshadweep",
                "flag": "https://upload.wikimedia.org/wikipedia/en/6/61/Lakshadweep_Banner.png"
            },
            "IN-MH": {
                "name": "Maharashtra",
                "nativeName": "Maharashtra",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Seal_of_Maharashtra.svg"
            },
            "IN-ML": {
                "name": "Meghalaya",
                "nativeName": "Meghalaya",
                "flag": "https://upload.wikimedia.org/wikipedia/en/d/df/Emblem_of_Meghalaya.svg"
            },
            "IN-MN": {
                "name": "Manipur",
                "nativeName": "Manipur",
                "flag": "https://upload.wikimedia.org/wikipedia/en/3/3e/Manipur_emblem.svg"
            },
            "IN-MP": {
                "name": "Madhya Pradesh",
                "nativeName": "Madhya Pradesh",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Emblem_of_Madhya_Pradesh.svg/128px-Emblem_of_Madhya_Pradesh.svg.png"
            },
            "IN-MZ": {
                "name": "Mizoram",
                "nativeName": "Mizoram",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_Mizoram.svg/128px-Seal_of_Mizoram.svg.png"
            },
            "IN-NL": {
                "name": "Nagaland",
                "nativeName": "Nagaland",
                "flag": "https://upload.wikimedia.org/wikipedia/en/1/1e/Seal_of_Nagaland.svg"
            },
            "IN-OD": {
                "name": "Odisha",
                "nativeName": "Odisha",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Seal_of_Odisha.svg/128px-Seal_of_Odisha.svg.png"
            },
            "IN-PB": {
                "name": "Punjab",
                "nativeName": "Punjab",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Seal_of_Punjab.svg/128px-Seal_of_Punjab.svg.png"
            },
            "IN-RJ": {
                "name": "Rajasthan",
                "nativeName": "Rajasthan",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Emblem_Rajasthan.png"
            },
            "IN-SK": {
                "name": "Sikkim",
                "nativeName": "Sikkim",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Seal_of_Sikkim.svg/128px-Seal_of_Sikkim.svg.png"
            },
            "IN-TS": {
                "name": "Telangana",
                "nativeName": "Telangana",
                "flag": "https://upload.wikimedia.org/wikipedia/en/6/61/Emblem_of_Telangana.svg"
            },
            "IN-TN": {
                "name": "Tamil Nadu",
                "nativeName": "Tamil Nadu",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/128px-TamilNadu_Logo.svg.png"
            },
            "IN-TR": {
                "name": "Tripura",
                "nativeName": "Tripura",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Seal_of_Tripura.svg/128px-Seal_of_Tripura.svg.png"
            },
            "IN-UP": {
                "name": "Uttar Pradesh",
                "nativeName": "Uttar Pradesh",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Seal_of_Uttar_Pradesh.svg"
            },
            "IN-UK": {
                "name": "Uttarakhand",
                "nativeName": "Uttarakhand",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Seal_of_Uttarakhand.svg/128px-Seal_of_Uttarakhand.svg.png"
            },
            "IN-WB": {
                "name": "West Bengal",
                "nativeName": "West Bengal",
                "flag": "https://upload.wikimedia.org/wikipedia/en/6/62/Emblem_of_West_Bengal_(2018-present).png"
            }
        }
    },
    "IS": {
        "name": "Iceland",
        "regions": {
            "IS-7": {
                "name": "Eastern Region",
                "nativeName": "Austurland",
                "flag": "https://upload.wikimedia.org/wikipedia/is/9/94/Múlaþing.PNG"
            },
            "IS-1": {
                "name": "Capital Region",
                "nativeName": "Höfuðborgarsvæðið",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Flag_of_Reykjavik,_Iceland.svg"
            },
            "IS-6": {
                "name": "Northeastern Region",
                "nativeName": "Norðurland eystra",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Akureyri.gif"
            },
            "IS-5": {
                "name": "Northwestern Region",
                "nativeName": "Norðurland vestra",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Skagafjórður.gif"
            },
            "IS-8": {
                "name": "Southern Region",
                "nativeName": "Suðurland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Arborg.gif"
            },
            "IS-2": {
                "name": "Southern Peninsula",
                "nativeName": "Suðurnes",
                "flag": "https://en.wikipedia.org/wiki/Reykjanesbær#/media/File:Reykjanesbær_Coat.svg"
            },
            "IS-4": {
                "name": "Westfjords",
                "nativeName": "Vestfirðir",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_Isafjarðarbær.gif"
            },
            "IS-3": {
                "name": "Western Region",
                "nativeName": "Vesturland",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Akranes.gif"
            }
        },
        "nativeName": "Ísland"
    },
    "JM": {
        "name": "Jamaica",
        "regions": {
            "JM-01": {
                "name": "Kingston",
                "nativeName": "Kingston",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/9/99/Flag_of_Kingston_Parish.png/revision/latest?cb=20230516011030"
            },
            "JM-02": {
                "name": "Saint Andrew",
                "nativeName": "Saint Andrew",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/81/Saint_Andrew_Parish,_Jamaica.jpeg/revision/latest?cb=20230516014126"
            },
            "JM-03": {
                "name": "Saint Thomas",
                "nativeName": "Saint Thomas",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/5/56/Flag_of_Saint_Thomas_Parish,_Jamaica.jpeg/revision/latest?cb=20230516015041"
            },
            "JM-04": {
                "name": "Portland",
                "nativeName": "Portland",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/6a/Flag_of_Portland_Parish.jpeg/revision/latest?cb=20230516012045"
            },
            "JM-05": {
                "name": "Saint Mary",
                "nativeName": "Saint Mary",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/a/a8/Flag_of_Saint_Mary_Parish,_Jamaica.png/revision/latest?cb=20230516010117"
            },
            "JM-06": {
                "name": "Saint Ann",
                "nativeName": "Saint Ann",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/89/Flag_of_Saint_Ann_Parish.png/revision/latest?cb=20230422025415"
            },
            "JM-07": {
                "name": "Trelawny",
                "nativeName": "Trelawny",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/9/95/Flag_of_Trelawny_Parish.png/revision/latest?cb=20230516120258"
            },
            "JM-08": {
                "name": "Saint James",
                "nativeName": "Saint James",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/ff/Flag_of_Saint_James_Parish,_Jamaica.png/revision/latest?cb=20230422021342"
            },
            "JM-09": {
                "name": "Hanover",
                "nativeName": "Hanover",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/b/b7/Proposed_flag_of_Hanover_Parish.png/revision/latest?cb=20230411001746"
            },
            "JM-10": {
                "name": "Westmoreland",
                "nativeName": "Westmoreland",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/d/de/Flag_of_Westmoreland_Parish.png/revision/latest?cb=20230422024137"
            },
            "JM-11": {
                "name": "Saint Elizabeth",
                "nativeName": "Saint Elizabeth",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/2b/Flag_of_Saint_Elizabeth_Parish.png/revision/latest?cb=20230412002449"
            },
            "JM-12": {
                "name": "Manchester",
                "nativeName": "Manchester",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/3/3a/Flag_of_Manchester_Parish.png/revision/latest?cb=20230422024732"
            },
            "JM-13": {
                "name": "Clarendon",
                "nativeName": "Clarendon",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/80/Flag_of_Clarendon_Parish,_Jamaica.png/revision/latest?cb=20230417124811"
            },
            "JM-14": {
                "name": "Saint Catherine",
                "nativeName": "Saint Catherine",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/40/Flag_of_Saint_Catherine_Parish.png/revision/latest?cb=20230516002708"
            }
        },
        "nativeName": "Jamaica"
    },
    "JO": {
        "name": "Jordan",
        "nativeName": "الأردن",
        "regions": {
            "JO-AJ": {
                "name": "Ajlun",
                "nativeName": "عجلون",
                "flag": ""
            },
            "JO-AQ": {
                "name": "Aqaba",
                "nativeName": "العقبة",
                "flag": ""
            },
            "JO-AM": {
                "name": "Amman",
                "nativeName": "عمان",
                "flag": ""
            },
            "JO-BA": {
                "name": "Balqa",
                "nativeName": "البلقاء",
                "flag": ""
            },
            "JO-KA": {
                "name": "Karak",
                "nativeName": "الكرك",
                "flag": ""
            },
            "JO-MA": {
                "name": "Mafraq",
                "nativeName": "المفرق",
                "flag": ""
            },
            "JO-AT": {
                "name": "Tafilah",
                "nativeName": "الطفيلة",
                "flag": ""
            },
            "JO-AZ": {
                "name": "Zarqa",
                "nativeName": "الزرقاء",
                "flag": ""
            },
            "JO-IR": {
                "name": "Irbid",
                "nativeName": "إربد",
                "flag": ""
            },
            "JO-JA": {
                "name": "Jarash",
                "nativeName": "جرش",
                "flag": ""
            },
            "JO-MN": {
                "name": "Maan",
                "nativeName": "معان",
                "flag": ""
            },
            "JO-MD": {
                "name": "Madaba",
                "nativeName": "مادبا",
                "flag": ""
            }
        }
    },
    "KH": {
        "name": "Cambodia",
        "regions": {
            "KH-12": {
                "name": "Phnom Penh",
                "nativeName": "រាជធានីភ្នំពេញ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Seal_of_Phnom_Penh.svg/128px-Seal_of_Phnom_Penh.svg.png"
            },
            "KH-2": {
                "name": "Battambang",
                "nativeName": "ខេត្តបាត់ដំបង",
                "flag": "https://upload.wikimedia.org/wikipedia/en/a/a8/Battambang_Province_seal.png"
            },
            "KH-1": {
                "name": "Bantey Meanchey",
                "nativeName": "ខេត្តបន្ទាយមានជ័យ",
                "flag": "https://upload.wikimedia.org/wikipedia/en/1/14/Banteay_Meanchey_seal.png"
            },
            "KH-23": {
                "name": "Kep",
                "nativeName": "ខេត្តកែប",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/80/Seal_of_Kep_Provincial_Administration.png"
            },
            "KH-3": {
                "name": "Kampong Cham",
                "nativeName": "ខេត្តកំពង់ចាម",
                "flag": "https://upload.wikimedia.org/wikipedia/en/9/94/Kampong_Cham_seal.png"
            },
            "KH-4": {
                "name": "Kampong Chhnang",
                "nativeName": "ខេត្តកំពង់ឆ្នាំង",
                "flag": "https://upload.wikimedia.org/wikipedia/en/4/4c/Kampong_Chhnang_seal.png"
            },
            "KH-5": {
                "name": "Kampong Speu",
                "nativeName": "ខេត្តកំពង់ស្ពឺ",
                "flag": "https://upload.wikimedia.org/wikipedia/en/c/cc/Kampong_Speu_seal.png"
            },
            "KH-6": {
                "name": "Kampong Thom",
                "nativeName": "ខេត្តកំពង់ធំ",
                "flag": "https://upload.wikimedia.org/wikipedia/en/7/78/Kampong_Thom_seal.png"
            },
            "KH-7": {
                "name": "Kampot",
                "nativeName": "ខេត្តកំពត",
                "flag": "https://upload.wikimedia.org/wikipedia/en/4/47/Kampot_logo.png"
            },
            "KH-8": {
                "name": "Kandal",
                "nativeName": "ខេត្តកណ្ដាល",
                "flag": "https://upload.wikimedia.org/wikipedia/en/b/b4/Seal_of_Kandal.png"
            },
            "KH-9": {
                "name": "Koh Kong",
                "nativeName": "ខេត្តកោះកុង",
                "flag": "https://en.wikipedia.org/wiki/Koh_Kong_Province#/media/File:Koh_Kong_seal.png"
            },
            "KH-10": {
                "name": "Kratie",
                "nativeName": "ខេត្តក្រចេះ",
                "flag": "https://upload.wikimedia.org/wikipedia/en/2/2c/Kratié_Province_logo.png"
            },
            "KH-11": {
                "name": "Mondulkiri",
                "nativeName": "ខេត្តមណ្ឌលគិរី",
                "flag": "https://upload.wikimedia.org/wikipedia/en/5/55/Mondulkiri.png"
            },
            "KH-22": {
                "name": "Oddar Meanchey",
                "nativeName": "ខេត្តឧត្ដរមានជ័យ",
                "flag": "https://upload.wikimedia.org/wikipedia/en/c/c9/Oddar_Meanchey_seal.png"
            },
            "KH-24": {
                "name": "Pailin",
                "nativeName": "ខេត្តប៉ៃលិន",
                "flag": "https://upload.wikimedia.org/wikipedia/en/8/8f/Seal_of_Pailin.png"
            },
            "KH-15": {
                "name": "Pursat",
                "nativeName": "ខេត្តពោធិ៍សាត់",
                "flag": "https://upload.wikimedia.org/wikipedia/en/6/6b/Pursat.png"
            },
            "KH-18": {
                "name": "Khaet Preah Sihanouk",
                "nativeName": "ខេត្តព្រះសីហនុ",
                "flag": "https://upload.wikimedia.org/wikipedia/en/e/e3/Sihanoukville_seal.png"
            },
            "KH-13": {
                "name": "Preah Vihear",
                "nativeName": "ខេត្តព្រះវិហារ",
                "flag": "https://upload.wikimedia.org/wikipedia/en/1/18/Preah_Vihear.png"
            },
            "KH-14": {
                "name": "Prey Veng",
                "nativeName": "ខេត្តព្រៃវែង",
                "flag": "https://upload.wikimedia.org/wikipedia/en/c/c8/Prey_Veng.png"
            },
            "KH-16": {
                "name": "Ratanakiri",
                "nativeName": "ខេត្តរតនគិរី",
                "flag": "https://upload.wikimedia.org/wikipedia/en/7/7b/Ratanakiri.png"
            },
            "KH-17": {
                "name": "Siem Reap",
                "nativeName": "ខេត្តសៀមរាប",
                "flag": "https://upload.wikimedia.org/wikipedia/en/0/0b/Siem_Reap_Province_seal.png"
            },
            "KH-19": {
                "name": "Stung Treng",
                "nativeName": "ខេត្តស្ទឹងត្រែង",
                "flag": "https://upload.wikimedia.org/wikipedia/en/f/fc/Stung_Treng_seal.png"
            },
            "KH-20": {
                "name": "Svay Rieng",
                "nativeName": "ខេត្តស្វាយរៀង",
                "flag": "https://upload.wikimedia.org/wikipedia/en/1/17/Svay_Rieng.png"
            },
            "KH-21": {
                "name": "Takeo",
                "nativeName": "ខេត្តតាកែវ",
                "flag": "https://upload.wikimedia.org/wikipedia/en/1/16/Seal_of_Takeo.png"
            },
            "KH-25": {
                "name": "Tbong Khmum",
                "nativeName": "ខេត្តត្បូងឃ្មុំ",
                "flag": "https://upload.wikimedia.org/wikipedia/en/4/45/Tboung_Khmum_seal.png"
            }
        },
        "nativeName": "ព្រះរាជាណាចក្រ​កម្ពុជា"
    },
    "KZ": {
        "name": "Kazakhstan",
        "nativeName": "Қазақстан",
        "regions": {
            "KZ-10": {
                "name": "Abay Region",
                "nativeName": "Абай облысы",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/3/3e/Flag_of_Abai_Region.svg"
            },
            "KZ-11": {
                "name": "Akmola Region",
                "nativeName": "Ақмола облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/35/Coat_of_Arms_of_Aqmola_Province_(new).png"
            },
            "KZ-19": {
                "name": "Almaty Region",
                "nativeName": "Алматы облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/44/Алматы_облысы_герб.png"
            },
            "KZ-75": {
                "name": "Almaty",
                "nativeName": "Алматы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Coat_of_arms_of_Almaty.svg/128px-Coat_of_arms_of_Almaty.svg.png"
            },
            "KZ-15": {
                "name": "Aqtöbe region",
                "nativeName": "Ақтөбе облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Aktyubinsk-obl-coat-of-arms.png"
            },
            "KZ-71": {
                "name": "Astana",
                "nativeName": "Астана",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Emblem_of_Astana_(latin).svg"
            },
            "KZ-23": {
                "name": "Atyrau Region",
                "nativeName": "Атырау облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/08/Coat_of_arms_of_Atyrau.svg"
            },
            "KZ-63": {
                "name": "East Kazakhstan Region",
                "nativeName": "Шығыс Қазақстан облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Coats_of_arms_of_East_Kazakhstan_Province.svg/128px-Coats_of_arms_of_East_Kazakhstan_Province.svg.png"
            },
            "KZ-31": {
                "name": "Jambyl Region",
                "nativeName": "Жамбыл облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/65/Zhambyl_province_seal.png"
            },
            "KZ-33": {
                "name": "Jetisu Region",
                "nativeName": "Жетісу облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/45/Jetisu_Region_Emblem.jpg"
            },
            "KZ-35": {
                "name": "Karaganda Region",
                "nativeName": "Қарағанды облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Coat_of_Arms_of_Karagandy_Province.svg"
            },
            "KZ-39": {
                "name": "Kostanay Region",
                "nativeName": "Қостанай облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_Kostanay_Province.png"
            },
            "KZ-43": {
                "name": "Kyzylorda Region",
                "nativeName": "Қызылорда облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/81/Kyzylorda_province_seal.svg"
            },
            "KZ-47": {
                "name": "Mangystau Region",
                "nativeName": "Маңғыстау облысы",
                "flag": "https://raw.githubusercontent.com/Cavitedev/osn-custom-flag/main/KZ/KZ-47.svg"
            },
            "KZ-59": {
                "name": "North Kazakhstan Region",
                "nativeName": "Солтүстік Қазақстан облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/North_Kazakhstan_province_seal.svg/128px-North_Kazakhstan_province_seal.svg.png"
            },
            "KZ-55": {
                "name": "Pavlodar Region",
                "nativeName": "Павлодар облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/50/Logo_Pavlodar_region.png"
            },
            "KZ-79": {
                "name": "Shymkent",
                "nativeName": "Шымкент",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/66/Shymkent_logo.svg"
            },
            "KZ-61": {
                "name": "Turkistan Region",
                "nativeName": "Түркістан облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/62/South_Kazakhstan_province_seal.png"
            },
            "KZ-62": {
                "name": "Ulytau Region",
                "nativeName": "Ұлытау облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/64/Coat_of_arms_of_Ulytau_Region.svg"
            },
            "KZ-27": {
                "name": "West Kazakhstan Region",
                "nativeName": "Батыс Қазақстан облысы",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Coat_of_Arms_Batys_Oblysy.png"
            }
        }
    },
    "LA": {
        "name": "Laos",
        "regions": {
            "LA-AT": {
                "name": "Attapeu",
                "nativeName": "ອັດຕະປື",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/f6/Flag_for_Attapeu.png/revision/latest?cb=20240130052942"
            },
            "LA-BK": {
                "name": "Bokeo Province",
                "nativeName": "ບໍ່ແກ້ວ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/68/Bokeo_2.png/revision/latest?cb=20240130121053"
            },
            "LA-BL": {
                "name": "Bolikhamsai",
                "nativeName": "ບໍລິຄຳໄຊ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/d/d0/Bolikhamsai.png/revision/latest?cb=20240130055248"
            },
            "LA-CH": {
                "name": "Champasak Province",
                "nativeName": "ຈຳປາສັກ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/a/ab/Flag_for_Champasak.png/revision/latest?cb=20240130060019"
            },
            "LA-HO": {
                "name": "Houaphanh",
                "nativeName": "ຫົວພັນ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/42/Flag_for_Houaphanh.png/revision/latest?cb=20240130064936"
            },
            "LA-KH": {
                "name": "Khammouane",
                "nativeName": "ຄໍາມ່ວນ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/4a/Khammouane.png/revision/latest?cb=20240130070503"
            },
            "LA-LM": {
                "name": "Luang Namtha",
                "nativeName": "ຫລວງນໍ້າທາ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/b/b8/Luang_Namtha.png/revision/latest?cb=20240130070522"
            },
            "LA-LP": {
                "name": "Luang Prabang",
                "nativeName": "ຫລວງພະບາງ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/e/eb/Luang_Prabang.png/revision/latest?cb=20240130070538"
            },
            "LA-OU": {
                "name": "Oudomxay",
                "nativeName": "ອຸດົມໄຊ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/1/17/Oudomxay.png/revision/latest?cb=20240130065634"
            },
            "LA-PH": {
                "name": "Phongsaly",
                "nativeName": "ຜົ້ງສາລີ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/9/94/Phongsaly.png/revision/latest?cb=20240130065802"
            },
            "LA-SL": {
                "name": "Salavan Province",
                "nativeName": "ສາລະວັນ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/1/1c/Salavan.png/revision/latest?cb=20240130062959"
            },
            "LA-SV": {
                "name": "Savannakhet Province",
                "nativeName": "ສະຫວັນນະເຂດ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/e/ed/Savannakhet.png/revision/latest?cb=20240130062029"
            },
            "LA-VI": {
                "name": "Vientiane Province",
                "nativeName": "ວຽງຈັນ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/3/3b/Vientiane_Province.png/revision/latest?cb=20240130030418"
            },
            "LA-VT": {
                "name": "Vientiane Prefecture",
                "nativeName": "ນະຄອນຫຼວງວຽງຈັນ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/8f/Flag_of_Vientiane.svg/revision/latest?cb=20220618094440"
            },
            "LA-XA": {
                "name": "Sainyabuli Province",
                "nativeName": "ໄຊຍະບູລີ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/26/Sainyabuli.png/revision/latest?cb=20240130062134"
            },
            "LA-XE": {
                "name": "Sekong Province",
                "nativeName": "ເຊກອງ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/4d/Sekong.png/revision/latest?cb=20240130063023"
            },
            "LA-XI": {
                "name": "Xiangkhouang Province",
                "nativeName": "ຊຽງຂວາງ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/3/37/Xiangkhouang.png/revision/latest?cb=20240130060755"
            },
            "LA-XS": {
                "name": "Xaisomboun Province",
                "nativeName": "ໄຊສົມບູນ",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/f6/Xaisomboun.png/revision/latest?cb=20240130055610"
            }
        },
        "nativeName": "ປະເທດລາວ"
    },
    "LB": {
        "name": "Lebanon",
        "regions": {
            "LB-AK": {
                "name": "Akkar Governorate",
                "nativeName": "محافظة عكار",
                "flag": "https://www.crwflags.com/fotw/images/l/lb-bebni.gif"
            },
            "LB-BH": {
                "name": "Baalbek-Hermel Governorate",
                "nativeName": "محافظة بعلبك الهرمل",
                "flag": "https://www.crwflags.com/fotw/images/l/lb-bh-ba.jpg"
            },
            "LB-BA": {
                "name": "Beirut Governorate",
                "nativeName": "محافظة بيروت",
                "flag": "https://www.crwflags.com/fotw/images/l/lb-be-be.gif"
            },
            "LB-BI": {
                "name": "Beqaa Governorate",
                "nativeName": "محافظة البقاع",
                "flag": "https://www.crwflags.com/fotw/images/l/lb-rasha.gif"
            },
            "LB-KJ": {
                "name": "Keserwan-Jbeil Governorate",
                "nativeName": "محافظة كسروان جبيل",
                "flag": "https://www.crwflags.com/fotw/images/l/lb-jbeil.gif"
            },
            "LB-JL": {
                "name": "Mount Lebanon Governorate",
                "nativeName": "محافظة جبل لبنان",
                "flag": "https://www.crwflags.com/fotw/images/l/lb-ml-al.gif"
            },
            "LB-NA": {
                "name": "Nabatieh Governorate",
                "nativeName": "محافظة النبطية",
                "flag": "https://www.crwflags.com/fotw/images/l/lb-na-na.gif"
            },
            "LB-AS": {
                "name": "North Governorate",
                "nativeName": "محافظة الشمال",
                "flag": "https://www.crwflags.com/fotw/images/l/lb-no-tr.gif"
            },
            "LB-JA": {
                "name": "South Governorate",
                "nativeName": "محافظة الجنوب",
                "flag": "https://www.crwflags.com/fotw/images/l/lb-so-si.gif"
            }
        },
        "nativeName": "لبنان"
    },
    "LU": {
        "name": "Luxembourg",
        "regions": {
            "LU-CA": {
                "name": "Canton Capellen",
                "nativeName": "Canton Capellen",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Armoiries_de_Septfontaines_1.svg"
            },
            "LU-CL": {
                "name": "Canton Clervaux",
                "nativeName": "Canton Clervaux",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Armoiries_Clervaux_2.svg"
            },
            "LU-DI": {
                "name": "Canton Diekirch",
                "nativeName": "Canton Diekirch",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Blason_Diekirch.svg"
            },
            "LU-EC": {
                "name": "Canton Echternach",
                "nativeName": "Canton Echternach",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coat_of_arms_echternach_luxbrg.svg/128px-Coat_of_arms_echternach_luxbrg.svg.png"
            },
            "LU-ES": {
                "name": "Canton Esch-sur-Alzette",
                "nativeName": "Canton Esch-sur-Alzette",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coat_of_arms_esch_alzette_luxbrg.png"
            },
            "LU-GR": {
                "name": "Canton Grevenmacher",
                "nativeName": "Canton Grevenmacher",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Coat_of_arms_grevenmacher_luxbrg.png"
            },
            "LU-LU": {
                "name": "Canton Luxembourg",
                "nativeName": "Canton Luxembourg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/db/Coat_of_arms_Luxembourg_City.png"
            },
            "LU-ME": {
                "name": "Canton Mersch",
                "nativeName": "Canton Mersch",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/54/Armoiries_de_Mersch_1.svg"
            },
            "LU-RD": {
                "name": "Canton Redange",
                "nativeName": "Canton Redange",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Blason_Redange-Sur-Attert.svg"
            },
            "LU-RM": {
                "name": "Canton Remich",
                "nativeName": "Canton Remich",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/39/Remich_(canton)_coat_of_arms.png"
            },
            "LU-VD": {
                "name": "Canton Vianden",
                "nativeName": "Canton Vianden",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Armoiries_de_Nassau_2.svg"
            },
            "LU-WI": {
                "name": "Canton Wiltz",
                "nativeName": "Canton Wiltz",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Armoiries_de_Wiltz_1.svg"
            }
        },
        "nativeName": "Luxembourg"
    },
    "MA": {
        "name": "Morocco",
        "regions": {
            "MA-05": {
                "name": "Béni Mellal-Khénifra",
                "nativeName": "Béni Mellal-Khénifra ⴰⵢⵜ ⵎⵍⵍⴰⵍ-ⵅⵏⵉⴼⵕⴰ بني ملال-خنيفرة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Logo-conseil-benimellaljpg.jpg"
            },
            "MA-06": {
                "name": "Casablanca-Settat",
                "nativeName": "Casablanca-Settat ⵜⵉⴳⵎⵉ ⵜⵓⵎⵍⵉⵍⵜ-ⵙⵟⵟⴰⵜ الدار البيضاء-سطات",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Casa-settat_logo.png"
            },
            "MA-12": {
                "name": "Dakhla-Oued Ed-Dahab",
                "nativeName": "Dakhla-Oued Ed-Dahab ⴷⴰⵅⵍⴰ-ⵡⴰⴷ ⴷⴰⵀⴰⴱ الداخلة-وادي الذهب",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/37/Dakhla-oued_eddahab.jpg"
            },
            "MA-08": {
                "name": "Drâa-Tafilalet",
                "nativeName": "Drâa-Tafilalet ⴷⴰⵔⵄⴰ-ⵜⴰⴼⵉⵍⴰⵍⵜ درعة تافيلالت",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Draa-tafilalet.png"
            },
            "MA-03": {
                "name": "Fez-Meknes",
                "nativeName": "Fès-Meknès ⴼⴰⵙ-ⵎⴽⵏⴰⵙ فاس-مكناس",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/af/Logo_region_fes_meknes.jpg"
            },
            "MA-10": {
                "name": "Guelmim-Oued Noun",
                "nativeName": "Guelmim-Oued Noun ⵜⴰⵙⴳⴰ-ⵡⴰⴷ ⵏⵓⵏ كلميم وادي نون",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Guelmim-oued_noun.jpg"
            },
            "MA-02": {
                "name": "Oriental",
                "nativeName": "Oriental ⵜⴰⵏⴳⵎⵓⴹⵜ الشرقية",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Ro_ma_logo.png"
            },
            "MA-11": {
                "name": "Laâyoune-Sakia El Hamra",
                "nativeName": "",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Logo-conseil-laayoune.jpg"
            },
            "MA-07": {
                "name": "Marrakech-Safi",
                "nativeName": "Marrakech-Safi ⵎⵕⵕⴰⴽⵛ-ⴰⵙⴼⵉ مراكش-أسفي",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Logo-conseil-marrakech.jpg"
            },
            "MA-04": {
                "name": "Rabat-Salé-Kénitra",
                "nativeName": "Rabat-Salé-Kénitra ⵔⴱⴰⵟ-ⵙⵍⴰ-ⵇⵏⵉⵟⵔⴰ الرباط-سلا-القنيطرة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Logo-conseil-rabat.jpg"
            },
            "MA-09": {
                "name": "Souss-Massa",
                "nativeName": "Souss-Massa ⵙⵓⵙⵙ-ⵎⴰⵙⵙⴰ سوس-ماسة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Souss_Massa.png"
            },
            "MA-01": {
                "name": "Tangier-Tetouan-Al Hoceima",
                "nativeName": "Tanger-Tétouan-Al Hoceïma ⵟⴰⵏⵊ-ⵟⵉⵜⴰⵡⵉⵏ-ⵍⵃⵓⵙⵉⵎⴰ طنجة تطوان الحسيمة",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/79/Rtta_logo.png"
            }
        },
        "nativeName": "Maroc ⵍⵎⵖⵔⵉⴱ المغرب"
    },
    "MK": {
        "name": "North Macedonia",
        "regions": {
            "MK-MK001": {
                "name": "Vardar Region",
                "nativeName": "Вардарски СР",
                "flag": "https://www.fotw.info/images/m/mk-vele.gif"
            },
            "MK-MK002": {
                "name": "Eastern Region",
                "nativeName": "Источен СР",
                "flag": "https://www.fotw.info/images/m/mk-shti.gif"
            },
            "MK-MK003": {
                "name": "Southwestern Region",
                "nativeName": "Југозападен СР",
                "flag": "https://www.fotw.info/images/m/mk-ohri.png"
            },
            "MK-MK004": {
                "name": "Southeastern Region",
                "nativeName": "Југоисточен СР",
                "flag": "https://www.fotw.info/images/m/mk-strm.gif"
            },
            "MK-MK005": {
                "name": "Pelagonia Region",
                "nativeName": "Пелагониски СР",
                "flag": "https://www.fotw.info/images/m/mk-pehc.gif"
            },
            "MK-MK006": {
                "name": "Polog Region",
                "nativeName": "Полошки СР",
                "flag": "https://www.fotw.info/images/m/mk-teto.gif"
            },
            "MK-MK007": {
                "name": "Northeastern Region",
                "nativeName": "Североисточен СР",
                "flag": "https://www.fotw.info/images/m/mk-kuma.gif"
            },
            "MK-MK008": {
                "name": "Skopje Region",
                "nativeName": "Скопски СР",
                "flag": "https://www.fotw.info/images/m/mk-aero.gif"
            }
        },
        "nativeName": "Северна Македонија"
    },
    "NP": {
        "name": "Nepal",
        "regions": {
            "NP-P1": {
                "name": "Koshi Province",
                "nativeName": "कोशी प्रदेश",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Emblem_of_Koshi_Province_(alternative).svg/128px-Emblem_of_Koshi_Province_(alternative).svg.png"
            },
            "NP-P2": {
                "name": "Madhesh Province",
                "nativeName": "मधेश प्रदेश",
                "flag": "https://upload.wikimedia.org/wikipedia/en/7/75/Province_No_2_emblem.png"
            },
            "NP-P3": {
                "name": "Bagmati Province",
                "nativeName": "बाग्मती प्रदेश",
                "flag": "https://upload.wikimedia.org/wikipedia/en/8/83/Emblem_of_Bagmati_Province.jpg"
            },
            "NP-P4": {
                "name": "Gandaki Province",
                "nativeName": "गण्डकी प्रदेश",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Emblem_of_Gandaki_Province_(alternative).svg/128px-Emblem_of_Gandaki_Province_(alternative).svg.png"
            },
            "NP-P5": {
                "name": "Lumbini Province",
                "nativeName": "लुम्बिनी प्रदेश",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Emblem_of_Lumbini_Province_(alternative).svg/128px-Emblem_of_Lumbini_Province_(alternative).svg.png"
            },
            "NP-P6": {
                "name": "Karnali Province",
                "nativeName": "कर्णाली प्रदेश",
                "flag": "https://upload.wikimedia.org/wikipedia/en/3/35/Emblem_of_Karnali_Pradesh.png"
            },
            "NP-P7": {
                "name": "Sudurpashchim Province",
                "nativeName": "सुदूरपश्चिम प्रदेश",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emblem_of_Sudurpaschim_Province_(adjustable).svg/128px-Emblem_of_Sudurpaschim_Province_(adjustable).svg.png"
            }
        },
        "nativeName": "नेपाल"
    },
    "OM": {
        "name": "Oman",
        "regions": {
            "OM-DA": {
                "name": "Ad Dakhiliyah Governorate",
                "nativeName": "محافظة الداخلية",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/1/16/Flag_of_Ad_Dakhiliyah_Governorate.svg/revision/latest?cb=20230416121055"
            },
            "OM-ZA": {
                "name": "Ad Dhahirah Governorate",
                "nativeName": "محافظة الظاهرة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/5/51/Flag_of_Ad_Dhahirah_Governorate.svg/revision/latest?cb=20230416121120"
            },
            "OM-BS": {
                "name": "Al Batinah North Governorate",
                "nativeName": "محافظة شمال الباطنة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/d/d3/Flag_of_Al_Batinah_North_Governorate.svg/revision/latest?cb=20230416121211"
            },
            "OM-BJ": {
                "name": "Al Batinah South Governorate",
                "nativeName": "محافظة جنوب الباطنة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/63/Flag_of_Al_Batinah_South_Governorate.svg/revision/latest?cb=20230416121238"
            },
            "OM-BU": {
                "name": "Al Buraymi Governorate",
                "nativeName": "محافظة البريمي",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/66/Flag_of_Al_Buraimi.png/revision/latest?cb=20230416122508"
            },
            "OM-WU": {
                "name": "Al Wusta Governorate",
                "nativeName": "محافظة الوسطى",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/e/ed/Flag_of_Al_Wusta.jpg/revision/latest?cb=20230416122639"
            },
            "OM-SS": {
                "name": "Ash Sharqiyah North Governorate",
                "nativeName": "شمال الشرقية",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/81/Flag_of_Ash_Sharqiyah_North_Governorate.png/revision/latest?cb=20230416122839"
            },
            "OM-SJ": {
                "name": "Ash Sharqiyah South Governorate",
                "nativeName": "جنوب الشرقية",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/5/57/Flag_of_Ash_Sharqiyah_South_Governorate.gif/revision/latest?cb=20230416122827"
            },
            "OM-ZU": {
                "name": "Dhofar Governorate",
                "nativeName": "محافظة ظفار",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/b/bd/Flag_of_Dhofar.gif/revision/latest?cb=20230416122029"
            },
            "OM-MA": {
                "name": "Muscat Governorate",
                "nativeName": "مسقط",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/d/df/Flag_of_Musandam.jpg/revision/latest?cb=20230416121943"
            },
            "OM-MU": {
                "name": "Musandam Governorate",
                "nativeName": "محافظة مسندم",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/60/Flag_of_Muscat_Governorate.webp/revision/latest?cb=20230416122255"
            }
        },
        "nativeName": "عمان"
    },
    "QA": {
        "name": "Qatar",
        "nativeName": "قطر",
        "regions": {
            "QA-MS": {
                "name": "Ash Shamal",
                "nativeName": "الشمال",
                "flag": ""
            },
            "QA-KH": {
                "name": "Al Khor and Al Thakhira",
                "nativeName": "الخور والذخيرة",
                "flag": ""
            },
            "QA-SH": {
                "name": "Al Shahaniya",
                "nativeName": "الشحانية",
                "flag": ""
            },
            "QA-US": {
                "name": "Umm Salal",
                "nativeName": "أم صلال",
                "flag": ""
            },
            "QA-ZA": {
                "name": "Al-Daayen",
                "nativeName": "الضعاين",
                "flag": ""
            },
            "QA-DA": {
                "name": "Doha",
                "nativeName": "الدوحة",
                "flag": ""
            },
            "QA-RA": {
                "name": "Al Rayyan",
                "nativeName": "الريان",
                "flag": ""
            },
            "QA-WA": {
                "name": "Al Wakrah",
                "nativeName": "الوكرة",
                "flag": ""
            }
        }
    },
    "RS": {
        "name": "Serbia",
        "regions": {
            "RS-00": {
                "name": "City of Belgrade",
                "nativeName": "Град Београд",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/df/Small_Coat_of_Arms_Belgrade.svg"
            },
            "RS-14": {
                "name": "Bor Administrative District",
                "nativeName": "Борски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8e/COA_Negotin.gif"
            },
            "RS-11": {
                "name": "Branicevo Administrative District",
                "nativeName": "Браничевски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/43/COA_Petrovac.png"
            },
            "RS-23": {
                "name": "Jablanica Administrative District",
                "nativeName": "Јабланички управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/88/COA_Vlasotince.png"
            },
            "RS-06": {
                "name": "South Backa Administrative District",
                "nativeName": "Јужнобачки управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/04/Backa-palanka-grb.png"
            },
            "RS-04": {
                "name": "South Banat Administrative District",
                "nativeName": "Јужнобанатски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Kovin-grb.png"
            },
            "RS-09": {
                "name": "Kolubara Administrative District",
                "nativeName": "Колубарски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/99/COA_Ub.png"
            },
            "RS-08": {
                "name": "Macva Administrative District",
                "nativeName": "Мачвански управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Grb_Bogatića.png/256px-Grb_Bogatića.png"
            },
            "RS-17": {
                "name": "Moravica Administrative District",
                "nativeName": "Моравички управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Gornji-milanovac-grb.png"
            },
            "RS-20": {
                "name": "Nisava Administrative District",
                "nativeName": "Нишавски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/85/Grb_Aleksinca.png"
            },
            "RS-24": {
                "name": "Pcinja Administrative District",
                "nativeName": "Пчињски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Grb_Vladičinog_Hana.png"
            },
            "RS-22": {
                "name": "Pirot Administrative District",
                "nativeName": "Пиротски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Babusnica-grb.png"
            },
            "RS-10": {
                "name": "Podunavlje Administrative District",
                "nativeName": "Подунавски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/30/COA_Smederevska_Palanka.gif"
            },
            "RS-13": {
                "name": "Pomoravlje Administrative District",
                "nativeName": "Поморавски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/06/COA_Paracin.png"
            },
            "RS-19": {
                "name": "Rasina Administrative District",
                "nativeName": "Расински управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9d/COA_Trstenik.gif"
            },
            "RS-18": {
                "name": "Raska Administrative District",
                "nativeName": "Рашки управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/GrbTutina.jpg/256px-GrbTutina.jpg"
            },
            "RS-01": {
                "name": "North Backa Administrative District",
                "nativeName": "Севернобачки управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Backa-topola-grb.png"
            },
            "RS-03": {
                "name": "North Banat Administrative District",
                "nativeName": "Севернобанатски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kanjiza-grb.png"
            },
            "RS-02": {
                "name": "Central Banat Administrative District",
                "nativeName": "Средњобанатски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4b/COA_Zitiste.png"
            },
            "RS-07": {
                "name": "Srem Administrative District",
                "nativeName": "Сремски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Stara-pazova-grb.png"
            },
            "RS-12": {
                "name": "Sumadija Administrative District",
                "nativeName": "Шумадијски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/50/GrbOpsiteArandjelovac.gif"
            },
            "RS-21": {
                "name": "Toplica Administrative District",
                "nativeName": "Топлички управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Grb_Kuršumlije.png"
            },
            "RS-15": {
                "name": "Zajecar Administrative District",
                "nativeName": "Зајечарски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Grb_Knjaževca.png/240px-Grb_Knjaževca.png"
            },
            "RS-05": {
                "name": "West Backa Administrative District",
                "nativeName": "Западнобачки управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/22/COA_Odzaci.png"
            },
            "RS-16": {
                "name": "Zlatibor Administrative District",
                "nativeName": "Златиборски управни округ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Grb-Prijepolje_mali.gif"
            }
        },
        "nativeName": "Србија"
    },
    "SA": {
        "name": "Saudi Arabia",
        "regions": {
            "SA-14": {
                "name": "'Asir Province",
                "nativeName": "منطقة عسير",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/28/Flag_of_'Asir_Province.svg/revision/latest?cb=20230124231733"
            },
            "SA-11": {
                "name": "Al-Bahah Province",
                "nativeName": "منطقة الباحة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/9/9a/Flag_of_Al-Bahah_Province.svg/revision/latest?cb=20230124231600"
            },
            "SA-08": {
                "name": "Northern Borders Province",
                "nativeName": "منطقة الحدود الشمالية",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/0/0c/Flag_of_Northern_Borders_Province.svg/revision/latest?cb=20230124231550"
            },
            "SA-12": {
                "name": "Al Jawf Region",
                "nativeName": "منطقة الجوف",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/42/Flag_of_Al-Jawf_Province.svg/revision/latest?cb=20230124231515"
            },
            "SA-03": {
                "name": "Medina Province",
                "nativeName": "منطقة المدينة المنورة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/1/17/Flag_of_Medina_Province_(Saudi_Arabia).svg/revision/latest?cb=20230124231615"
            },
            "SA-05": {
                "name": "Al-Qassim Province",
                "nativeName": "منطقة القصيم",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/b/bd/Flag_of_Al-Qassim_Province.svg/revision/latest?cb=20230124231651"
            },
            "SA-01": {
                "name": "Riyadh Region",
                "nativeName": "منطقة الرياض",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/9/96/Flag_of_Riyadh_Province.svg/revision/latest?cb=20230124231742"
            },
            "SA-04": {
                "name": "Eastern Province",
                "nativeName": "المنطقة الشرقية",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/c/cc/Flag_of_Eastern_Province,_Saudi_Arabia.svg/revision/latest?cb=20230124231526"
            },
            "SA-06": {
                "name": "Ḥa'il Province",
                "nativeName": "منطقة حائل",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/b/bb/Flag_of_Ḥa'il_Province.svg/revision/latest?cb=20230124231638"
            },
            "SA-09": {
                "name": "Jazan Province",
                "nativeName": "منطقة جازان",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/f4/Flag_of_Jazan_Province.svg/revision/latest?cb=20230124231539"
            },
            "SA-02": {
                "name": "Makkah Region",
                "nativeName": "منطقة مكة المكرمة",
                "flag": "https://preview.redd.it/as6i9wohy9m81.png?width=3000&format=png&auto=webp&s=7fe38b71c7b6a67ed721777fe3b04f783bbf050b"
            },
            "SA-10": {
                "name": "Najran Region",
                "nativeName": "منطقة نجران",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/3/3a/Flag_of_Najran_Province.svg/revision/latest?cb=20230124231703"
            },
            "SA-07": {
                "name": "Tabuk Province",
                "nativeName": "منطقة تبوك",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/9/90/Flag_of_Tabuk_Province.svg/revision/latest?cb=20230124231626"
            }
        },
        "nativeName": "السعودية"
    },
    "SG": {
        "name": "Singapore",
        "regions": {
            "SG-01": {
                "name": "Central Singapore",
                "nativeName": "Central Singapore",
                "flag": "https://ue.s-ul.eu/JBioxeXx"
            },
            "SG-02": {
                "name": "Northeast Singapore",
                "nativeName": "Northeast Singapore",
                "flag": "https://ue.s-ul.eu/VpaZHtiC"
            },
            "SG-03": {
                "name": "Northwest Singapore",
                "nativeName": "Northwest Singapore",
                "flag": "https://ue.s-ul.eu/pH7Iup3O"
            },
            "SG-04": {
                "name": "Southeast Singapore",
                "nativeName": "Southeast Singapore",
                "flag": "https://ue.s-ul.eu/yeIsa6DQ"
            },
            "SG-05": {
                "name": "Southwest Singapore",
                "nativeName": "Southwest Singapore",
                "flag": "https://ue.s-ul.eu/aenZEe21"
            }
        },
        "nativeName": "Singapura"
    },
    "SI": {
        "name": "Slovenia",
        "nativeName": "Slovenija",
        "regions": {
            "SI-SI022": {
                "name": "Mura Statistical Region",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI017": {
                "name": "Podravska regija",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI014": {
                "name": "Koroška regija",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI011": {
                "name": "Savinja Statistical Region",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI016": {
                "name": "Zasavska regija",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI018": {
                "name": "Lower Sava Statistical Region",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI023": {
                "name": "Jugovzhodna Slovenija",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI012": {
                "name": "Littoral–Inner Carniola Region",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI024": {
                "name": "Osrednjeslovenska regija",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI021": {
                "name": "Upper Carniola Statistical Region",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI015": {
                "name": "Goriška regija",
                "nativeName": "",
                "flag": ""
            },
            "SI-SI013": {
                "name": "Obalno-kraška regija",
                "nativeName": "",
                "flag": ""
            }
        }
    },
    "TN": {
        "name": "Tunisia",
        "regions": {
            "TN-31": {
                "name": "Béja",
                "nativeName": "ولاية باجة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/b/b3/Béja.png/revision/latest?cb=20240131051820"
            },
            "TN-13": {
                "name": "Ben Arous",
                "nativeName": "ولاية بن عروس",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/64/Ben_Arous.png/revision/latest?cb=20240131051851"
            },
            "TN-23": {
                "name": "Bizerte",
                "nativeName": "ولاية بنزرت",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/0/08/Bizerte.png/revision/latest?cb=20240131052025"
            },
            "TN-81": {
                "name": "Gabès",
                "nativeName": "ولاية قابس",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/7/78/Gabès.png/revision/latest?cb=20240131052117"
            },
            "TN-71": {
                "name": "Gafsa",
                "nativeName": "ولاية قفصة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/8e/Gafsa_Flag.png/revision/latest?cb=20240131052310"
            },
            "TN-32": {
                "name": "Jendouba",
                "nativeName": "ولاية جندوبة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/4f/Jendouba_Flag.png/revision/latest?cb=20240131052340"
            },
            "TN-41": {
                "name": "Kairouan",
                "nativeName": "ولاية القيروان",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/9/9d/Kairouan_Flag.png/revision/latest?cb=20240131050358"
            },
            "TN-42": {
                "name": "Kasserine",
                "nativeName": "ولاية القصرين",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/4/41/Kasserine.png/revision/latest?cb=20240131050240"
            },
            "TN-73": {
                "name": "Kébili",
                "nativeName": "ولاية قبلي",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/1/1f/Kebili_2.png/revision/latest?cb=20240131050527"
            },
            "TN-12": {
                "name": "Ariana",
                "nativeName": "ولاية أريانة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/83/Ariana.png/revision/latest?cb=20240131050902"
            },
            "TN-14": {
                "name": "Manouba",
                "nativeName": "ولاية منوبة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/0/08/Manouba.png/revision/latest?cb=20240131052915"
            },
            "TN-33": {
                "name": "Al Kaf",
                "nativeName": "ولاية الكاف",
                "flag": ""
            },
            "TN-53": {
                "name": "Mahdia",
                "nativeName": "ولاية المهدية",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/29/Mahdia.png/revision/latest?cb=20240131052851"
            },
            "TN-82": {
                "name": "Médenine",
                "nativeName": "ولاية مدنين",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/f3/Medenine.png/revision/latest?cb=20240131053015"
            },
            "TN-52": {
                "name": "Monastir",
                "nativeName": "ولاية المنستير",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/2e/Monastir.png/revision/latest?cb=20240131053036"
            },
            "TN-21": {
                "name": "Nabeul",
                "nativeName": "ولاية نابل",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/d/de/Nabeul.png/revision/latest?cb=20240131053055"
            },
            "TN-61": {
                "name": "Sfax",
                "nativeName": "ولاية صفاقس",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/0/07/Sfax.png/revision/latest?cb=20240131053332"
            },
            "TN-43": {
                "name": "Sidi Bouzid",
                "nativeName": "ولاية سيدي بوزيد",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/9/9b/Sidi_Bouzid.png/revision/latest?cb=20240131053355"
            },
            "TN-34": {
                "name": "Siliana",
                "nativeName": "ولاية سليانة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/8/80/Siliana.png/revision/latest?cb=20240131053413"
            },
            "TN-51": {
                "name": "Sousse",
                "nativeName": "ولاية سوسة",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/0/0b/Flag_for_Sousse.png/revision/latest?cb=20240131052540"
            },
            "TN-83": {
                "name": "Tataouine",
                "nativeName": "ولاية تطاوين",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/2/23/Tataouine.png/revision/latest?cb=20240131053603"
            },
            "TN-72": {
                "name": "Tozeur",
                "nativeName": "ولاية توزر",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/6/6b/Tozeur.png/revision/latest?cb=20240131053623"
            },
            "TN-11": {
                "name": "Tunis",
                "nativeName": "ولاية تونس",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/f/fd/Flag_for_Tunis.png/revision/latest?cb=20240131052600"
            },
            "TN-22": {
                "name": "Zaghouan Governorate",
                "nativeName": "ولاية زغوان",
                "flag": "https://static.wikia.nocookie.net/vexillology/images/5/57/Zaghouan.png/revision/latest?cb=20240131053641"
            }
        },
        "nativeName": "ولاية منوبة"
    },
    "TR": {
        "name": "Turkey",
        "nativeName": "Türkiye",
        "regions": {
            "TR-EGE": {
                "name": "Aegean Region",
                "nativeName": "Ege Mahallesi",
                "flag": "https://www.fotw.info/images/t/tr$iesob.gif"
            },
            "TR-KAR": {
                "name": "Black Sea Region",
                "nativeName": "Kurutepe Mahallesi",
                "flag": "https://www.fotw.info/images/t/tr-55b.jpg"
            },
            "TR-ICA": {
                "name": "Central Anatolia Region",
                "nativeName": "İç Anadolu Bölgesi",
                "flag": "https://www.fotw.info/images/t/tr-06-2021.gif"
            },
            "TR-DOA": {
                "name": "Eastern Anatolia Region",
                "nativeName": "Doğu Anadolu Bölgesi",
                "flag": "https://www.fotw.info/images/t/tr-65.gif"
            },
            "TR-MRM": {
                "name": "Marmara Region",
                "nativeName": "Marmara Bölgesi",
                "flag": "https://www.fotw.info/images/t/tr-34.gif"
            },
            "TR-AKD": {
                "name": "Mediterranean Region",
                "nativeName": "Akdeniz Bölgesi",
                "flag": "https://www.fotw.info/images/t/tr-07.gif"
            },
            "TR-GUA": {
                "name": "Southeastern Anatolia Region",
                "nativeName": "Güneydoğu Anadolu Bölgesi",
                "flag": "https://www.fotw.info/images/t/tr-63.gif"
            }
        }
    },
    "TT": {
        "name": "Trinidad and Tobago",
        "regions": {
            "TT-ARI": {
                "name": "Arima",
                "nativeName": "Arima",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-ar.gif"
            },
            "TT-CHA": {
                "name": "Chaguanas",
                "nativeName": "Chaguanas",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-ch.gif"
            },
            "TT-CTT": {
                "name": "Couva-Tabaquite-Talparo",
                "nativeName": "Couva-Tabaquite-Talparo",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-ct2.gif"
            },
            "TT-DMN": {
                "name": "Diego Martin",
                "nativeName": "Diego Martin",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-dmrc.gif"
            },
            "TT-MRC": {
                "name": "Mayaro-Rio Claro",
                "nativeName": "Mayaro-Rio Claro",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-mrcrc.gif"
            },
            "TT-PED": {
                "name": "Penal-Debe",
                "nativeName": "Penal-Debe",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-pdrc.gif"
            },
            "TT-POS": {
                "name": "Port of Spain",
                "nativeName": "Port of Spain",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-pos.gif"
            },
            "TT-PRT": {
                "name": "Princes Town",
                "nativeName": "Princes Town",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-pt.gif"
            },
            "TT-PTF": {
                "name": "Point Fortin",
                "nativeName": "Point Fortin",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-pf2.gif"
            },
            "TT-SFO": {
                "name": "San Fernando",
                "nativeName": "San Fernando",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-sf.gif"
            },
            "TT-SGE": {
                "name": "Sangre Grande",
                "nativeName": "Sangre Grande",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-sn.gif"
            },
            "TT-SIP": {
                "name": "Siparia",
                "nativeName": "Siparia",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-si.gif"
            },
            "TT-SJL": {
                "name": "San Juan-Laventille",
                "nativeName": "San Juan-Laventille",
                "flag": "https://www.crwflags.com/fotw/images/t/tt-sl.gif"
            },
            "TT-TOB": {
                "name": "Tobago",
                "nativeName": "Tobago",
                "flag": "https://www.crwflags.com/fotw/images/t/tt.gif"
            },
            "TT-TUP": {
                "name": "Tunapuna-Piarco",
                "nativeName": "Tunapuna-Piarco",
                "flag": "https://www.crwflags.com/fotw/flags/tt-tp.html"
            }
        },
        "nativeName": "Trinidad and Tobago"
    },
    "TW": {
        "name": "Taiwan",
        "regions": {
            "TW-CHA": {
                "name": "Changhua County",
                "nativeName": "彰化縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Flag_of_Changhua_County.svg"
            },
            "TW-CYQ": {
                "name": "Chiayi County",
                "nativeName": "嘉義縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_Chiayi_County.svg"
            },
            "TW-CYI": {
                "name": "Chiayi",
                "nativeName": "嘉義市",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Chiayi_City.svg"
            },
            "TW-HSQ": {
                "name": "Hsinchu County",
                "nativeName": "新竹縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Hsinchu_County_(since_2019).svg"
            },
            "TW-HSZ": {
                "name": "Hsinchu",
                "nativeName": "新竹市",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Hsinchu_City.svg"
            },
            "TW-HUA": {
                "name": "Hualien County",
                "nativeName": "花蓮縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Flag_of_Hualien_County.svg"
            },
            "TW-KHH": {
                "name": "Kaohsiung",
                "nativeName": "高雄市",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_Kaohsiung_City.svg/128px-Flag_of_Kaohsiung_City.svg.png"
            },
            "TW-KEE": {
                "name": "Keelung",
                "nativeName": "基隆市",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/3/33/Flag_of_Keelung_City.svg"
            },
            "TW-KIN": {
                "name": "Kinmen",
                "nativeName": "金門縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Kinmen_County.svg"
            },
            "TW-LIE": {
                "name": "Lienchiang County",
                "nativeName": "連江縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Lienchiang_County.svg"
            },
            "TW-MIA": {
                "name": "Miaoli County",
                "nativeName": "苗栗縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/23/Flag_of_Miaoli_County.svg"
            },
            "TW-NAN": {
                "name": "Nantou County",
                "nativeName": "南投縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Nantou_County.svg/128px-Flag_of_Nantou_County.svg.png"
            },
            "TW-NWT": {
                "name": "New Taipei",
                "nativeName": "新北市",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_New_Taipei_City.svg"
            },
            "TW-PEN": {
                "name": "Penghu",
                "nativeName": "澎湖縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Flag_of_Penghu_County.svg"
            },
            "TW-PIF": {
                "name": "Pingtung County",
                "nativeName": "屏東縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Flag_of_Pingtung_County.svg"
            },
            "TW-TXG": {
                "name": "Taichung",
                "nativeName": "臺中市",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Taichung_City.svg"
            },
            "TW-TNN": {
                "name": "Tainan",
                "nativeName": "臺南市",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Flag_of_Tainan_City.svg"
            },
            "TW-TPE": {
                "name": "Taipei",
                "nativeName": "臺北市",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Taipei_City.svg"
            },
            "TW-TTT": {
                "name": "Taitung County",
                "nativeName": "臺東縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Taitung_County_(before_2015).svg"
            },
            "TW-TAO": {
                "name": "Taoyuan City",
                "nativeName": "桃園市",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flag_of_Taoyuan_City.svg"
            },
            "TW-ILA": {
                "name": "Yilan County",
                "nativeName": "宜蘭縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Yilan_County.svg"
            },
            "TW-YUN": {
                "name": "Yunlin County",
                "nativeName": "雲林縣",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Yunlin_County.svg"
            }
        },
        "nativeName": "台灣"
    },
    "VN": {
        "name": "Vietnam",
        "nativeName": "Việt Nam",
        "regions": {
            "VN-44": {
                "name": "An Giang Province",
                "nativeName": "Tỉnh An Giang",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/f/f0/Logo_tỉnh_Bình_Phước_2022.svg"
            },
            "VN-43": {
                "name": "Bà Rịa - Vũng Tàu Province",
                "nativeName": "Tỉnh Bà Rịa - Vũng Tàu",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/6/65/Biểu_trưng_tỉnh_Bà_Rịa_–_Vũng_Tàu.png"
            },
            "VN-57": {
                "name": "Bình Dương Province",
                "nativeName": "Tỉnh Bình Dương",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/c/ca/Biểu_trưng_tỉnh_Bình_Dương.svg"
            },
            "VN-58": {
                "name": "Bình Phước Province",
                "nativeName": "Tỉnh Bình Phước",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/b/bd/Logo_tỉnh_Bình_Phước_(mới).png"
            },
            "VN-40": {
                "name": "Bình Thuận Province",
                "nativeName": "Tỉnh Bình Thuận",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/a/a0/Biểu_trưng_tỉnh_Bình_Thuận.svg"
            },
            "VN-31": {
                "name": "Bình Định Province",
                "nativeName": "Tỉnh Bình Định",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/9/99/Biểu_trưng_tỉnh_Bình_Định.svg"
            },
            "VN-55": {
                "name": "Bạc Liêu Province",
                "nativeName": "Tỉnh Bạc Liêu",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/7/79/Logo_tỉnh_Bạc_Liêu.svg"
            },
            "VN-54": {
                "name": "Bắc Giang Province",
                "nativeName": "Tỉnh Bắc Giang",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/d/d2/Biểu_trưng_tỉnh_Bắc_Giang.svg"
            },
            "VN-53": {
                "name": "Bắc Kạn Province",
                "nativeName": "Tỉnh Bắc Kạn",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/6/64/Biểu_trưng_tỉnh_Bắc_Kạn.svg"
            },
            "VN-56": {
                "name": "Bắc Ninh province",
                "nativeName": "Tỉnh Bắc Ninh",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/2/2b/Biểu_trưng_tỉnh_Bắc_Ninh.svg"
            },
            "VN-50": {
                "name": "Bến Tre Province",
                "nativeName": "Tỉnh Bến Tre",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/0/0d/Biểu_trưng_tỉnh_Bến_Tre.svg"
            },
            "VN-04": {
                "name": "Cao Bằng Province",
                "nativeName": "Tỉnh Cao Bằng",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/1/17/Logo_tỉnh_Cao_Bằng.png"
            },
            "VN-59": {
                "name": "Cà Mau Province",
                "nativeName": "Tỉnh Cà Mau",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/9/96/Biểu_trưng_tỉnh_Cà_Mau.svg"
            },
            "VN-CT": {
                "name": "Cần Thơ",
                "nativeName": "Thành phố Cần Thơ",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Emblem_of_Cantho_City.svg"
            },
            "VN-30": {
                "name": "Gia Lai Province",
                "nativeName": "Tỉnh Gia Lai",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/a/a7/Logo_tỉnh_Gia_Lai.svg"
            },
            "VN-14": {
                "name": "Hoà Bình province",
                "nativeName": "Tỉnh Hòa Bình",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/f/f6/Logo_tỉnh_Hoà_Bình.svg"
            },
            "VN-03": {
                "name": "Hà Giang Province",
                "nativeName": "Tỉnh Hà Giang",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/2/22/Logo_Du_lịch_Hà_Giang.png"
            },
            "VN-63": {
                "name": "Hà Nam Province",
                "nativeName": "Tỉnh Hà Nam",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/a/a5/Logo_tỉnh_Hà_Nam.svg"
            },
            "VN-HN": {
                "name": "Hà Nội",
                "nativeName": "Thành phố Hà Nội",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/1/18/Emblem_of_Hanoi.svg"
            },
            "VN-23": {
                "name": "Hà Tĩnh Province",
                "nativeName": "Tỉnh Hà Tĩnh",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/9/96/Logo_tỉnh_Hà_Tĩnh.svg"
            },
            "VN-66": {
                "name": "Hưng Yên Province",
                "nativeName": "Tỉnh Hưng Yên",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/7/72/Logo_Hưng_Yên.svg"
            },
            "VN-61": {
                "name": "Hải Dương Province",
                "nativeName": "Tỉnh Hải Dương",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/7/77/Logo_tỉnh_Hải_Dương.svg"
            },
            "VN-HP": {
                "name": "Hải Phòng",
                "nativeName": "Thành phố Hải Phòng",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Emblem_of_Haiphong.png"
            },
            "VN-73": {
                "name": "Hậu Giang Province",
                "nativeName": "Tỉnh Hậu Giang",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/9/94/Logo_tỉnh_Hậu_Giang.png"
            },
            "VN-SG": {
                "name": "Hồ Chí Minh City",
                "nativeName": "Thành phố Hồ Chí Minh",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/1/12/Biểu_trưng_của_TP_HCM.svg"
            },
            "VN-34": {
                "name": "Khánh Hòa Province",
                "nativeName": "Tỉnh Khánh Hòa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Emblem_of_Khanhhoa_Province.svg"
            },
            "VN-47": {
                "name": "Kiên Giang Province",
                "nativeName": "Tỉnh Kiên Giang",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/c/c6/Logo_tỉnh_Kiên_Giang.png"
            },
            "VN-28": {
                "name": "Kon Tum Province",
                "nativeName": "Tỉnh Kon Tum",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/thumb/4/4a/Logo_tỉnh_Kon_Tum.svG/800px-Logo_tỉnh_Kon_Tum.svG.png"
            },
            "VN-01": {
                "name": "Lai Châu Province",
                "nativeName": "Tỉnh Lai Châu",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/thumb/0/0e/Logo_tỉnh_Lai_Châu.png/225px-Logo_tỉnh_Lai_Châu.png"
            },
            "VN-41": {
                "name": "Long An Province",
                "nativeName": "Tỉnh Long An",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/2/22/Emblem_of_Longan_Province.svg"
            },
            "VN-02": {
                "name": "Lào Cai Province",
                "nativeName": "Tỉnh Lào Cai",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/3/3d/Logo_tỉnh_Lào_Cai.svg"
            },
            "VN-35": {
                "name": "Lâm Đồng Province",
                "nativeName": "Tỉnh Lâm Đồng",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/3/32/Logo_tỉnh_Lâm_Đồng_(không_chính_thức).png"
            },
            "VN-09": {
                "name": "Lạng Sơn Province",
                "nativeName": "Tỉnh Lạng Sơn",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/6/65/Logo_tỉnh_Lạng_Sơn.png"
            },
            "VN-67": {
                "name": "Nam Định Province",
                "nativeName": "Tỉnh Nam Định",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/f/ff/Logo_tỉnh_Nam_Định.svg"
            },
            "VN-22": {
                "name": "Nghệ An Province",
                "nativeName": "Tỉnh Nghệ An",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/8/8c/Logo_tỉnh_Nghệ_An.png"
            },
            "VN-18": {
                "name": "Ninh Bình Province",
                "nativeName": "Tỉnh Ninh Bình",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/c/cc/Logo_tỉnh_Ninh_Bình.svg"
            },
            "VN-36": {
                "name": "Ninh Thuận Province",
                "nativeName": "Tỉnh Ninh Thuận",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/4/41/Logo_tỉnh_Ninh_Thuận.svg"
            },
            "VN-68": {
                "name": "Phú Thọ Province",
                "nativeName": "Tỉnh Phú Thọ",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/5/5f/Logo_tỉnh_Phú_Thọ.svg"
            },
            "VN-32": {
                "name": "Phú Yên Province",
                "nativeName": "Tỉnh Phú Yên",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/6/65/Logo_tỉnh_Phú_Yên.svg"
            },
            "VN-24": {
                "name": "Quảng Bình Province",
                "nativeName": "Tỉnh Quảng Bình",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/d/d7/Logo_tỉnh_Quảng_Bình_(không_chính_thức).png"
            },
            "VN-27": {
                "name": "Quảng Nam Province",
                "nativeName": "Tỉnh Quảng Nam",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/a/a0/Logo_Quang_Nam.svg"
            },
            "VN-29": {
                "name": "Quảng Ngãi Province",
                "nativeName": "Tỉnh Quảng Ngãi",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/5/57/Emblem_of_Quangngai_Province.png"
            },
            "VN-13": {
                "name": "Quảng Ninh Province",
                "nativeName": "Tỉnh Quảng Ninh",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/c/c2/Logo_tỉnh_Quảng_Ninh_(không_chính_thức).png"
            },
            "VN-25": {
                "name": "Quảng Trị Province",
                "nativeName": "Tỉnh Quảng Trị",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/a/af/Logo_tỉnh_Quảng_Trị.svg"
            },
            "VN-52": {
                "name": "Sóc Trăng Province",
                "nativeName": "Tỉnh Sóc Trăng",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/a/af/Logo_tỉnh_Sóc_Trăng.svg"
            },
            "VN-05": {
                "name": "Sơn La Province",
                "nativeName": "Tỉnh Sơn La",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/b/bf/Biểu_trưng_tỉnh_Sơn_La.svg"
            },
            "VN-21": {
                "name": "Thanh Hoá Province",
                "nativeName": "Tỉnh Thanh Hóa",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/6/6c/Logo_tỉnh_Thanh_Hóa.svg"
            },
            "VN-20": {
                "name": "Thái Bình Province",
                "nativeName": "Tỉnh Thái Bình",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/2/20/Emblem_of_Thaibinh_Province.png"
            },
            "VN-69": {
                "name": "Thái Nguyên Province",
                "nativeName": "Tỉnh Thái Nguyên",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/c/c7/Logo_tỉnh_Thái_Nguyên.svg"
            },
            "VN-26": {
                "name": "Thừa Thiên Huế Province",
                "nativeName": "Tỉnh Thừa Thiên Huế",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/2/2a/Logo_thành_phố_Huế.svg"
            },
            "VN-46": {
                "name": "Tiền Giang Province",
                "nativeName": "Tỉnh Tiền Giang",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/4/4e/Logo_tỉnh_Tiền_Giang.svg"
            },
            "VN-51": {
                "name": "Trà Vinh Province",
                "nativeName": "Tỉnh Trà Vinh",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/6/6c/Logo_tỉnh_Trà_Vinh.svg"
            },
            "VN-07": {
                "name": "Tuyên Quang Province",
                "nativeName": "Tỉnh Tuyên Quang",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/3/32/Logo_tỉnh_Tuyên_Quang.png"
            },
            "VN-37": {
                "name": "Tây Ninh Province",
                "nativeName": "Tỉnh Tây Ninh",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/3/35/Logo_tỉnh_Tây_Ninh.svg"
            },
            "VN-49": {
                "name": "Vĩnh Long Province",
                "nativeName": "Tỉnh Vĩnh Long",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/7/7d/Logo_tỉnh_Vĩnh_Long.svg"
            },
            "VN-70": {
                "name": "Vĩnh Phúc Province",
                "nativeName": "Tỉnh Vĩnh Phúc",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/b/bd/Logo_tỉnh_Vĩnh_Phúc.svg"
            },
            "VN-06": {
                "name": "Yên Bái Province",
                "nativeName": "Tỉnh Yên Bái",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/6/6c/Logo_tỉnh_Yên_Bái.svg"
            },
            "VN-71": {
                "name": "Điện Biên Province",
                "nativeName": "Tỉnh Điện Biên",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/6/6f/Logo_tỉnh_Điện_Biên.svg"
            },
            "VN-DN": {
                "name": "Đà Nẵng",
                "nativeName": "Thành phố Đà Nẵng",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Emblem_of_Danang_City.svg"
            },
            "VN-33": {
                "name": "Đăk Lăk Province",
                "nativeName": "Tỉnh Đăk Lăk",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/2/2b/Logo_tỉnh_Đắk_Lắk.svg"
            },
            "VN-72": {
                "name": "Đăk Nông Province",
                "nativeName": "Tỉnh Đăk Nông",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/2/27/Logo_tỉnh_Đắk_Nông.svg"
            },
            "VN-39": {
                "name": "Đồng Nai Province",
                "nativeName": "Tỉnh Đồng Nai",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/2/2c/Logo_Dong_Nai.png"
            },
            "VN-45": {
                "name": "Đồng Tháp Province",
                "nativeName": "Tỉnh Đồng Tháp",
                "flag": "https://upload.wikimedia.org/wikipedia/vi/7/71/Logo_tỉnh_Đồng_Tháp.svg"
            }
        }
    }
}
