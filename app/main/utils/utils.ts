export function isNumber(value: any): boolean {
    return !isNaN(parseInt(value, 10))
}

export function isNumberOrNull(value: any): boolean {
    if (!isNaN(parseInt(value, 10))) {
        return true
    }
    if (value === null || value === undefined) {
        return true
    }
    return false
}

export function toNumber(value: any) {
    return value * 1
}

export function cleanObject(obj: object) {
    return Object.keys(obj).filter((i: any) => (obj as any)[i] !== undefined).reduce((_obj: any, key: any) => {
        _obj[key] = (obj as any)[key]
        return _obj
    }, {})
}