import styled from 'styled-components'

export const Container = styled.div`
    padding: 11% 0;

    h1 {
        margin: 3rem 0;
    }

    div.movie {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;

        font-size: 120%;
    }

    span.release-date {
        opacity: 0.5;
    }

    img {
        border-radius: 1rem;
        width: 300px;
    }

    div.details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        margin-left: 4rem;
        max-width: 50%;
    }

    button {
        margin-top: 1rem;
        border: none;
        border-radius: 1rem;
        padding: 0.8rem 2rem;


        cursor: pointer;

        font-size: 100%;
        color: white;

        background: #6654da;

        transition: 0.3s
    }

    button:hover {
        background-color: #5848c2;
    }
`