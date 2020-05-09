const dateConvertor = date => {
    const dateString = date.replace(/-/gi, "");
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    
    const newDate = new Date(year, month - 1, day);

    const dateFinal = newDate.toDateString().substring(4)
    return dateFinal
}

export {
    dateConvertor
}