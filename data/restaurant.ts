import type { ImageSourcePropType } from "react-native";
import { AppImages } from "./images";
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: ImageSourcePropType;
    ingredients: string[];
}
export interface MenuCategory {
    id: string;
    name: string;
    products: Product[];
}
export interface Restaurant {
    id: string;
    name: string;
    slug: string;
    description: string;
    logo: ImageSourcePropType;
    cover: ImageSourcePropType;
    menuCategories: MenuCategory[];
}
const RESTAURANT: Restaurant = {
    id: 'rest-fsw-donalds',
    name: "McDonald's",
    slug: 'fsw-donalds',
    description: 'O melhor fast food do mundo',
    logo: AppImages.logo,
    cover: AppImages.estabelecimento,
    menuCategories: [
        {
            id: 'cat-combos',
            name: 'Combos',
            products: [
                {
                    id:'combo-big-mac-duplo',
                    name: 'McOferta Média Combo Big Mac Duplo',
                    description: 'Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado, sabor cheddar, molho especial, cebola, picles e pão com gergelim, acompanhamento e bebida.',
                    price: 39.90,
                    image: AppImages.comboduplobigmac,
                    ingredients: [
                        'Pão com gergelim',
                        'Hambúrgueres de carne bovina',
                        'Alface',
                        'Queijo cheddar',
                        'Molho especial',
                        'Picles',
                        'Cebola',
                    ],
                },
            ]
        }
        
    ]
};