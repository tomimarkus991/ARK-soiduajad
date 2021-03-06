"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const difference = (_array1, _array2) => {
    const result = {};
    if (Object.is(_array1, _array2)) {
        return undefined;
    }
    if (!_array2 || typeof _array2 !== "object") {
        return _array2;
    }
    Object.keys(_array1 || {})
        .concat(Object.keys(_array2 || {}))
        .forEach((key) => {
        if (_array2[key] !== _array1[key] &&
            !Object.is(_array1[key], _array2[key])) {
            result[key] = _array2[key];
        }
        if (typeof _array2[key] === "object" &&
            typeof _array1[key] === "object") {
            const value = difference(_array1[key], _array2[key]);
            if (value !== undefined) {
                result[key] = value;
            }
        }
    });
    return result;
};
exports.default = difference;
//# sourceMappingURL=difference.js.map