'use client';

import { styled } from 'styled-components';

const containerValue = ({ theme }) => theme?.breakpoints?.container;

export const Container = styled.div`
  padding-inline: clamp(2.5em, 4vw, 8em);
  margin-inline: auto;
  width: 100%;

  @media screen and (min-width: ${containerValue}) {
    max-width: ${containerValue};
  }
`;

export const Row = styled.div`
  --default-padding: clamp(2.5em, 10vh, 5em);

  &:nth-child(1) {
    padding-block-end: calc(var(--default-padding) / 2);
  }

  &:nth-child(2) {
    padding-block-end: calc(var(--default-padding) * 0.5);
  }
`;

export const ImageWrapper = styled.div`
  --image-size: clamp(4.5em, 6.5vw, 8em);

  position: relative;
  width: var(--image-size);
  height: var(--image-size);
`;

export const MainTitle = styled.h2`
  font-size: calc(clamp(3.25em, 7vw, 8em) * 0.875);
  line-height: 1.1;
`;
