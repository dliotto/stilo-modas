import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #c9abab;
            color: #fff;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#c9abab')};
            }
        }
    }
`;

export const HeaderProduct = styled.ul`
    width: 100%;
    color: #999;
    text-align: left;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        padding: 5px 26px;
        text-align: center;
        align-items: center;
    }
`;

export const BodyProduct = styled.ul`
    width: 100%;
    color: #999;
    text-align: left;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        padding: 5px 7px;
        text-align: center;
        align-items: center;
    }
`;

export const ProductTable = styled.div`
    width: 100%;

    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
        color: #333;
    }
`;

export const ImageProduct = styled.div`
    width: 100% !important;
    display: block !important;
    align-items: center !important;
    text-align: center;

    img {
        height: 260px;
    }
`;
