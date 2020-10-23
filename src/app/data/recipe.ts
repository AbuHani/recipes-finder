export interface Recipe {
    id: number;
    image: string;
    imageType: string;
    title: string;
    usedIngredientCount: number;
    missedIngredientCount: number;
    [key: string]: any;
}
export interface RecipeResponse {
    results: Recipe[];
    offset: number;
    number: number;
    totalResults: number;
}
