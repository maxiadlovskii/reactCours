import {OrderedMap, Map} from 'immutable' //OrderedMap тому що важливе збереження порядку статтей
export function arrToMap(arr, DataRecord = Map) {
    return arr.reduce((acc, item) =>
        acc.set(item.id, new DataRecord(item))
        , new OrderedMap({}))
}
export function mapToArr(obj) {
    return obj.valueSeq().toArray()
}