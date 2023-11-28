interface Ability {
    name: string;
    text: string;
    type: string;
}

interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
}

interface WeaknessResistance {
    type: string;
    value: string;
}

interface PSet {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
        unlimited: string;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
        symbol: string;
        logo: string;
    };
}

interface ImageUrls {
    small: string;
    large: string;
}

interface PriceDetails {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number | null;
}

interface TCGPlayer {
    url: string;
    updatedAt: string;
    prices: {
        holofoil: PriceDetails;
        reverseHolofoil: PriceDetails;
    };
}

interface CardMarketPrices {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number;
    suggestedPrice: number;
    reverseHoloSell: number;
    reverseHoloLow: number;
    reverseHoloTrend: number;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
}

interface CardMarket {
    url: string;
    updatedAt: string;
    prices: CardMarketPrices;
}

interface PokemonCard {
    data: any;
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level: string;
    hp: string;
    types: string[];
    evolvesFrom: string;
    abilities: Ability[];
    attacks: Attack[];
    weaknesses: WeaknessResistance[];
    resistances: WeaknessResistance[];
    retreatCost: string[];
    convertedRetreatCost: number;
    set: PSet;
    number: string;
    artist: string;
    rarity: string;
    flavorText: string;
    nationalPokedexNumbers: number[];
    legalities: {
        unlimited: string;
    };
    images: ImageUrls;
    tcgplayer: TCGPlayer;
    cardmarket: CardMarket;
}


export { PokemonCard };