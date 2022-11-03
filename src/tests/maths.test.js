import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import {render, fireEvent, waitFor, screen, within} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';


describe('stimulate user interaction', () => {

  test('test when user click Home nav link', async () => {
    render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    fireEvent.click(screen.getByText('Home'));
    await waitFor(() => screen.getAllByRole('heading'))
    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Math Magicians');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('Welcome to our page!');
  })

  test('test when user click Calculator nav link', async () => {
    render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    fireEvent.click(screen.getByText('Calculator'));
    await waitFor(() => screen.getAllByRole('button'))
    expect(screen.getAllByRole('button').length).toBe(19);
  })


  test('test when user click Quote nav link', async () => {
    render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    fireEvent.click(screen.getByText('Quote'));
    const text = await screen.findByText('Mathematics is not about numbers, equations, computations,');
    expect(text).toBeInTheDocument(); 
  })
})