export function arrToMap(arr) {
    return arr.reduce((acc, article) => {
        acc[article.id] = article
        return acc
    }, {})
}
export function mapToArr(obj) {
    return Object.keys(obj).map(id =>obj[id])
}