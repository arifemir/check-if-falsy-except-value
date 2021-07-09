type falsy = 0 | "" | '' | `` | false | -0 | null | undefined | typeof NaN;

export const toBool: (value: any, exceptFalsy: falsy) => boolean = (value, exceptFalsy) => (!!value) || (value === exceptFalsy) || (Number.isNaN(exceptFalsy) && (Number.isNaN(value) === Number.isNaN(exceptFalsy)));
