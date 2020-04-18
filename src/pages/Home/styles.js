import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        color: #333;

        > strong {
            font-size: 14px;
            line-height: 20px;
            color: #333 !important;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
            color: #333;
        }
    }

    img {
        align-self: center;
        max-width: 250px;
    }

    button {
        background: #c9abab;
        color: #fff;
        border: 0;
        border-radius: 5px;
        overflow: hidden;
        margin-top: auto;
        display: flex;
        align-items: center;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.03, '#c9abab')};
        }

        div {
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0, 0, 0, 0.1);

            svg {
                margin-right: 5px;
            }
        }

        span {
            flex: 1;
            text-align: center;
            font-weight: bold;
        }
    }
`;
