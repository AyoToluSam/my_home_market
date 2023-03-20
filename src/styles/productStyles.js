import styled from 'styled-components';


export const BlurBackground = styled.div`
position: fixed;
z-index: 998;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.7);
display: flex;
align-items: center;
justify-content: center;
`;


export const Loading = styled.div`
position: fixed;
z-index: 998;
display: flex;
flex-direction: column;
gap: 1rem;
justify-content: center;
align-items: center;
text-align: center;
background-color: #f2f2f2;
padding: 3rem;
border-radius: 8px;
`;