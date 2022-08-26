import { FormInstance } from 'antd'


type ContentData = {
    _id: string;
    cover: string;
    title: string;
    description: string;
    contentPreviewUrl: string;
    price: number;
    length: number;
    numOfsections: number;
    numOfcontent: number;
}




export interface CardContentListProp {
    data: ContentData;
}

export interface ContentCreateFormProps {
    product?: any
    form: FormInstance<any>
    loading?: boolean
    onFinish?: (fieldValue: any) => void
    onCancel?: () => void
}

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