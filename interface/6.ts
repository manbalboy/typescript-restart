export {}
interface YearPriceMap {
    [year: number] : number;
    [year: string] : string | number;
}


const yearMap : YearPriceMap = {};

yearMap[1998] = 1000;
// yearMap[1998] = 'abc'; X
yearMap['2000'] = 1000;
yearMap['2000'] = '1000';