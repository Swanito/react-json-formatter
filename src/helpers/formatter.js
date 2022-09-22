export const formatJson = (jsonString) => {
    try {
        const o = JSON.parse(jsonString)
        if (o && typeof o === "object") {
            return JSON.stringify(o, null, 4)
        }
    }
    catch (e) {
        return e
    }
}

export const formatMap = (jsonString) => {
    try {
        const o = JSON.parse(jsonString || '{}');
        if (o && typeof o === "object") {

        }
    }
    catch (e) {
        return e
    }
}