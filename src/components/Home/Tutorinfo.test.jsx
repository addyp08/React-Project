/**
 * Unit tests for Tutorinfo (KnowMore) component.
 * Assumes a testing environment with React Testing Library and Jest/Vitest.
 */
/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';


// Mock framer-motion so animations don't interfere with tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

// Mock media imports (these will just resolve to strings in tests)
vi.mock('../../assets/Tutor-bg.mp4', () => 'tutor-bg.mp4');
vi.mock('../../assets/tutor1.png', () => 'tutor1.png');
vi.mock('../../assets/tutor2.png', () => 'tutor2.png');
vi.mock('../../assets/tutor3.png', () => 'tutor3.png');
vi.mock('../../assets/tutor4.jpg', () => 'tutor4.jpg');

import '@testing-library/jest-dom/extend-expect';
import KnowMore from './Tutorinfo';
import { vi } from 'vitest';


describe('Tutorinfo / KnowMore component', () => {
  test('renders heading', () => {
    render(<KnowMore />);
    const heading = screen.getByRole('heading', { name: /Meet Our Expert Tutors/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders four tutor cards with correct names and expertise', () => {
    render(<KnowMore />);

    // Names from the component's tutors array
    expect(screen.getByText(/Shubham Bandal/i)).toBeInTheDocument();
    expect(screen.getByText(/Kushal/i)).toBeInTheDocument();
    expect(screen.getByText(/Tage/i)).toBeInTheDocument();
    expect(screen.getByText(/Addy/i)).toBeInTheDocument();

    // Expertise text checks
    expect(screen.getByText(/Goli Specialist/i)).toBeInTheDocument();
    expect(screen.getByText(/Flirting \+ YD/i)).toBeInTheDocument();
    expect(screen.getByText(/Salt in rice/i)).toBeInTheDocument();
    expect(screen.getByText(/Eating/i)).toBeInTheDocument();
  });

  test('renders tutor images with alt text', () => {
    render(<KnowMore />);
    const images = screen.getAllByRole('img');
    // There should be at least the tutor images (video has no role img)
    expect(images.length).toBeGreaterThanOrEqual(4);
    expect(screen.getByAltText(/Shubham Bandal/i)).toBeInTheDocument();
  });
});
