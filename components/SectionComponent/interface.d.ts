export interface ContentPackAPIPayload {
    _id: string;
    cover: string;
    title: string;
    description: string;
    contentPreviewUrl: string;
    price: number;
    length: number;
    numOfsections: number;
    numOfcontent: number;
    section: any;
    status: string;
    createAt: number;
    updateAt: number;
}