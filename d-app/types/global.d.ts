declare module '*.scss' {
    const content: { [styleName: string]: string };
    export default content;
}

interface LoginRequest {
    email: number;
    displayName: string;
    password: string;
}

interface User {
    id?: number;
    name: string;
    lastSearchDt?: Date;
    assets?: Asset[];
    displayName: string;
    password?: string;
    gender?: string;
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