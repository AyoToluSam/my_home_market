import styled from "styled-components";

type CarouselProps = {
  active: boolean;
};

export const CarouselContainer = styled.div`
  position: relative;
`;

export const CarouselContent = styled.div<CarouselProps>`
  width: 100%;
  display: ${(props) => (props.active ? `flex` : `none`)};
`;

export const CarouselButtons = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselButton = styled.button<CarouselProps>`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? `1` : `.33`)};
  transform: ${(props) => (props.active ? `scale(1.6)` : `scale(1)`)};

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: #000;
  border-radius: 10px;
  width: 0.25rem;
  height: 0.25rem;
`;
