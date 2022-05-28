
export const isEmpty = (value: any) => {
    if (
        value == null ||
        value == undefined ||
        value == "undefined" ||
        value == "" ||
        value == "null"
    ) {
        return true;
    }
    return false;
};

export const truncate = (str: string, max: number, suffix: string) => {
    if (isEmpty(str) || str.length <= 0) return "Not Provided";
    else if (str.length < max && str.length > 0) return str;
    else return `${str.substring(0, max)}${suffix}`;
};