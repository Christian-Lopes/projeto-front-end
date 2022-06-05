import styled from 'styled-components';

export const Container = styled.div`
    grid-area: SL;

    display: flex;
    flex-direction: column;
    align-direction: center;

    background-color: var(--tertiary);

    padding: 11px 0;

    max-height: 100vh;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Separator = styled.div`
    width: 32px;
    border-button: 2px solid var(--quartenary);

    margin-button: 8px;
`;