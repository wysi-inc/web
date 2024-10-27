export type LanguagesType = {
    [code: string]: LanguageName;
};

export type LanguageName = {
    name: string;
    nativeName: string;
};

export type SubdivisionType = {
    name: string;
    nativeName: string;
    flag: string;
};

export type Country = {
    name: string;
    nativeName: string;
    regions: SubdivisionType[];
};

export type SubdivisionFlagsType = {
    [countryCode: string]: {
        name: string;
        nativename?: string;
        nativeName: string;
        regions: {
            [regionCode: string]: SubdivisionType;
        };
    };
};
