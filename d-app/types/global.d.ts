declare module '*.scss' {
    const content: { [styleName: string]: string };
    export default content;
}

interface User {
    id: number;
    name: string;
    gender: string;
}

interface LoginUser {
    id: number;
    name: string;
    lastSearchDt: Date;
    assets: Asset[];
    displayName: string;
    //ignores password
}

interface Asset {
    locationUri: string; // url
    type: AssetType;
    metaData: any;
}

export enum AssetType {
    LOGIN_ICON,
    PROFILE_PICTURE,
    CONVERSATION
}