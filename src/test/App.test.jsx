import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App.jsx';

describe('App', () => {
  it('renders the portfolio hero and contact sections', async () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /let’s build something great/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /chat on whatsapp/i })).toBeInTheDocument();
  });
});
