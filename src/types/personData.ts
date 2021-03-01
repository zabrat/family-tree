export default interface IPersonData{
    person_id: number,
    gender: string,
    FIO: string,
    born_date: string,
    status: boolean,
    death_date: string|null,
    liveIn: string,
    phone_number: string|null,
    img: string|null,
    father: number|null,
    mother: number|null,
    spouse: number|null,
    children: number[]
}