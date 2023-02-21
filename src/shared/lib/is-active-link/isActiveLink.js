export const isActiveLink = (pathname,link) => {
    return pathname.slice(1) === link ? '#e60000' : 'none'
}