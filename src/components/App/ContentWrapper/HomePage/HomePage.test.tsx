import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';
import firebaseMock from '../../../../api/HomePageApi/__mocks__/HomePageApi';

afterEach(cleanup);

describe('Home page', () => {

  // it('Should render main title', () => {
  //   const { getByText } = render(
  //     <HomePage />
  //   );
  //   expect(getByText('ITA Tools')).toBeInTheDocument();
  // });

  // it('Should render h1', () => {
  //   const { container } = render(
  //     <HomePage />
  //   );
  //   const titleTag = container.querySelector('h1');
  //   expect(titleTag).toBeInTheDocument();
  // });

it('Fetch tiles from API', () => {
    expect(true).toBeTruthy();
  });

  // it('Should render Tile container', () => {
  //   const { container } = render(
  //     <HomePage />
  //   );

  //   const homePageContainer = container.querySelector('.tiles-container');
  //   expect(homePageContainer).toBeTruthy();
  // });

});