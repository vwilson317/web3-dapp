declare module '*.scss' {
    const content: { [styleName: string]: string };
    export default content;
}

interface User {
    id: number;
    name: string;
    gender: string;
}