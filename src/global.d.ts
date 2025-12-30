export {};


declare global {

    interface researchObject{
        date: string,
        title: string,
        desc: string,
        link: string
    };

    interface projectObject{
        title: string,
        desc: string,
        img: string,
    }

}