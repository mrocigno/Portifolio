import styled from 'styled-components';
import colors from '../../styles/colors';
 
export const HeaderDiv = styled.div`
    background-color: ${colors.HEADER};
    width: 100%;
    display: flex;
    position: fixed;
`;

export const HeaderContents = styled.div`
    background-color: green;
    flex: 1;

    &:hover {
        background-color: red;
        transition: all .1s ease-in-out;
    }
`;