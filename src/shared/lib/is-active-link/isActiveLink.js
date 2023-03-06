export const isActiveLink = (pathname,link,onTrue ='#e60000',onFalse='none') => {
    return pathname.slice(1) === link ? onTrue : onFalse
}