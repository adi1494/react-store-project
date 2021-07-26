import styled from 'styled-components';

export const DefaultButton = styled.button `
    width: 80%;
    max-width: 300px;

    text-transform: capitalize;
    font-size: 1.4rem;
    color: var(--mainwhite);
    padding: 0.2rem 0.5rem;
    background: var(--color-primary);
    // border : 1px solid var(--mainwhite);
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;

    transition: all 0.2s ease-in-out;
    &:hover {

    }
    &:focus {
        outline: none;
    }
`

export const CartButton = styled.button `
    width: ${props => (props.head?"100%":"80%")};
    max-width: 300px;

    text-transform: capitalize;
    font-size: 1.4rem;
    padding: 0.2rem 0.5rem;
    border : none;
    border-radius: 0.2rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;

    color: ${props => (props.head?"var(--yellow)":"var(--mainwhite)")};
    background: ${props => (props.head?"var(--color-primary)":"var(--color-secondary)")};

    transition: all 0.2s ease-in-out;
    &:hover {

    }
    &:focus {
        outline: none;
    }
`