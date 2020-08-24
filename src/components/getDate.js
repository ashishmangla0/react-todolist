const d = new Date();
export const GetCurrentyear = d.getFullYear();
export const GetCurrentmonth = () => {
    return ('0' + d.getMonth()).slice(-2)
}
export const GetCurrentday = () => {
    return ('0' + d.getDate()).slice(-2)
}

export const FormateYYYY = `${GetCurrentyear}`