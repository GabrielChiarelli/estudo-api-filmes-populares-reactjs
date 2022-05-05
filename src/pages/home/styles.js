import styled from 'styled-components'

export const Container = styled.div`
    h1 {
        margin: 4rem 0;

        text-align: center;
    }

    /*ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap = 3rem;
        row-gap: 4rem;

        list-style: none;
    }*/    
`

export const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap = 3rem;
    row-gap: 4rem;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 2rem;
        width: 180px;
        border-radius: 1rem;
    }

    span {
        text-align: center;
        font-size: 120%;
        font-weight: bold;
    }

    a {
        transition: 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
`