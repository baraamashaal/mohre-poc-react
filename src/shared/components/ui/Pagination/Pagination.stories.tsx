import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Pagination component facilitates navigation through content distributed across multiple pages. Provides an organized way to handle large datasets by breaking them into manageable chunks.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const PaginationWrapper = (args: any) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);

  return (
    <div className="w-full min-w-[600px]">
      <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 3,
    totalPages: 10,
  },
};

export const WithFirstLast: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 5,
    totalPages: 17,
    showFirstLast: true,
  },
};

export const SmallPageCount: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 2,
    totalPages: 5,
  },
};

export const LargePageCount: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 50,
    totalPages: 100,
    showFirstLast: true,
  },
};

export const OnFirstPage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    showFirstLast: true,
  },
};

export const OnLastPage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 10,
    totalPages: 10,
    showFirstLast: true,
  },
};

export const SmallSiblingCount: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 1,
    showFirstLast: true,
  },
};

export const LargeSiblingCount: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 3,
    showFirstLast: true,
  },
};

export const WithTotalItems: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalItems: 95,
    itemsPerPage: 10,
  },
  parameters: {
    docs: {
      description: {
        story: 'Automatically calculates total pages from totalItems and itemsPerPage. In this case: 95 items ÷ 10 per page = 10 pages.',
      },
    },
  },
};

export const WithTotalItemsAndFirstLast: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 3,
    totalItems: 247,
    itemsPerPage: 20,
    showFirstLast: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Using totalItems with First and Last buttons. In this case: 247 items ÷ 20 per page = 13 pages (rounded up).',
      },
    },
  },
};
