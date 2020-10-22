import {getQuery} from "./queryStringUtils";

export function getFilterComposite() {

    const typeFilter = getQuery().get("type");
    const sizeFilter = getQuery().get("size");
    return (item) => (typeFilter ? item.type == typeFilter : true) && (sizeFilter ? item.size == sizeFilter : true)
}