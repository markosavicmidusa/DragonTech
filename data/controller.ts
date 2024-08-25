import { ICategory, categories } from "./categories/categories";
import { commercials, Commercial } from "./commercials/commercials";
import {backgroundImages, Images} from "./backgroundImages/backgroundImages";
import { introImages} from "./intro/introImg";
import { rosenImages } from "./rosenApotheke/rosenApotheke";
import { softwareDevelopmentImages } from "./softwareDevImages/softwareDevImages";
import { gamingImages } from "./gaming/gaming";

export function getCommercials():Commercial[]{
    return commercials
}


export function getCategories():ICategory[]{
    return categories
}

export function getBackgroundImages():Images[]{
    return backgroundImages;
}

export function getIntroImages():Images[]{
    return introImages;
}

export function getRosenImages():Images[]{
    return rosenImages;
}

export function getSoftwareDevImages():Images[]{
    return softwareDevelopmentImages;
}

export function getGamingImages():Images[]{
    return gamingImages;
}