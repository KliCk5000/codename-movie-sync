import { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    onSearch: { action: 'searched' },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    onSearch: (query: string) => console.log('Searching for:', query),
  },
};
