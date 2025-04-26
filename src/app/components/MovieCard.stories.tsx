import { Meta, StoryObj } from '@storybook/react';
import MovieCard from './MovieCard';

const meta: Meta<typeof MovieCard> = {
  title: 'Components/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', minWidth: '300px', maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onAdd: { action: 'movie added' }
  }
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

// Example of a movie with poster
export const WithPoster: Story = {
  args: {
    movie: {
      id: 1,
      title: 'Inception',
      poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      release_date: '2010-07-16'
    },
    onAdd: (movie) => console.log('Added movie:', movie.title)
  }
};

// Example of a movie without poster
export const WithoutPoster: Story = {
  args: {
    movie: {
      id: 2,
      title: 'Classic Movie',
      release_date: '1999-12-31'
    },
    onAdd: (movie) => console.log('Added movie:', movie.title)
  }
};

// Example of a movie with a very long title
export const LongTitle: Story = {
  args: {
    movie: {
      id: 3,
      title: 'The Incredibly Long Movie Title That Just Keeps Going and Going',
      poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      release_date: '2023-01-01'
    },
    onAdd: (movie) => console.log('Added movie:', movie.title)
  }
}; 