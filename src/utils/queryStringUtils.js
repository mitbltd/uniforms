export function getQuery() {
    return new URLSearchParams(window.location.search);
}
export function replaceQueryPart(key, value)
{
    const query = getQuery() ;
    if (value =='all'){
        query.set(key, "");
    }
    else{
        query.set(key, value);
    }
    window.location.search = query.toString();
}

export function getValue(key) {
    return getQuery().get(key);
}