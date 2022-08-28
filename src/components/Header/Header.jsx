import styles from './header.css'



export function underlineAll() {
    const buttonAll = document.querySelector('.button__all')
    const buttonFav = document.querySelector('.button__fav')
    buttonAll.classList.toggle('underline')
    if (buttonFav.classList.contains('underline')) {
        buttonFav.classList.remove('underline')
    }
}

export function underlineFav() {
    const buttonAll = document.querySelector('.button__all')
    const buttonFav = document.querySelector('.button__fav')
    buttonFav.classList.add('underline')
    if (buttonAll.classList.contains('underline')) {
        buttonAll.classList.remove('underline')
    }
}

export const Header = function ({ children }) {
    return (
        <div className='header'>
            <h1 className='header__item'>Blogs</h1>
            {children}
        </div>

    )
}

