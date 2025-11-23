import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import type { ModalAction } from './Modal.types';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dialog overlay component for displaying focused content that requires user attention. Built with Radix UI Dialog and supports multiple variants, sizes, and placements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'],
      description: 'Modal size',
    },
    variant: {
      control: 'select',
      options: ['default', 'alert', 'danger', 'success', 'language', 'gold-star', 'customer-pulse'],
      description: 'Modal variant',
    },
    placement: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'center-left',
        'center',
        'center-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Modal placement on screen',
    },
    staticBackdrop: {
      control: 'boolean',
      description: 'Prevent closing on backdrop click',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWrapper = ({
  children,
  ...props
}: React.ComponentProps<typeof Modal> & { buttonLabel?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="aegov-btn" onClick={() => setOpen(true)}>
        {props.buttonLabel || 'Open Modal'}
      </button>
      <Modal {...props} open={open} onOpenChange={setOpen}>
        {children}
      </Modal>
    </>
  );
};

/**
 * Basic modal with title and content
 */
export const Default: Story = {
  render: () => (
    <ModalWrapper title="Hello" buttonLabel="Open Modal">
      <div>
        <p>To close the modal, you can use any of the following methods:</p>
        <ul className="list-decimal ps-4 space-y-3">
          <li>Press the "ESC" key on your keyboard.</li>
          <li>Click the close button in the top-right corner.</li>
          <li>Click outside the modal on the backdrop.</li>
        </ul>
      </div>
    </ModalWrapper>
  ),
};

/**
 * Single action modal with icon (success variant)
 */
export const SingleActionWithIcon: Story = {
  render: () => {
    const actions: ModalAction[] = [{ label: 'Got it', autoClose: true, primary: true }];

    return (
      <ModalWrapper
        title="Payment successful"
        variant="success"
        size="sm"
        actions={actions}
        buttonLabel="Success Modal"
        icon={{
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
              <rect width="256" height="256" fill="none" />
              <polyline
                points="40 144 96 200 224 72"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          ),
        }}
      >
        <p className="text-base text-aeblack-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
        </p>
      </ModalWrapper>
    );
  },
};

/**
 * Single action modal without icon
 */
export const SingleActionWithoutIcon: Story = {
  render: () => {
    const actions: ModalAction[] = [
      { label: 'Continue', autoClose: true, primary: true, className: 'btn-block' },
    ];

    return (
      <ModalWrapper
        title="Payment successful"
        size="sm"
        actions={actions}
        showCloseButton={true}
        buttonLabel="Simple Modal"
      >
        <div className="text-center">
          <p className="text-base text-aeblack-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
          </p>
        </div>
      </ModalWrapper>
    );
  },
};

/**
 * Modal with multiple action buttons
 */
export const MultipleActions: Story = {
  render: () => {
    const actions: ModalAction[] = [
      { label: 'Confirm', onClick: () => alert('Confirmed'), primary: true },
      { label: 'Cancel', autoClose: true },
    ];

    return (
      <ModalWrapper title="Payment successful" size="sm" actions={actions} buttonLabel="Multiple Actions">
        <div className="text-center">
          <p className="text-base text-aeblack-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
          </p>
        </div>
      </ModalWrapper>
    );
  },
};

/**
 * Alert modal with warning icon
 */
export const AlertModal: Story = {
  render: () => {
    const actions: ModalAction[] = [
      { label: 'Confirm', onClick: () => alert('Confirmed'), primary: true },
      { label: 'Cancel', autoClose: true, variant: 'btn-soft' },
    ];

    return (
      <ModalWrapper
        title="Deactivate account"
        variant="alert"
        size="lg"
        actions={actions}
        showCloseButton={false}
        buttonLabel="Alert Modal"
        icon={{
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
              <rect width="256" height="256" fill="none" />
              <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" />
            </svg>
          ),
        }}
      >
        <p className="text-base font-normal text-aeblack-500 mb-0">
          Are you sure you want to deactivate your account? All of your data will be permanently removed
          from our servers forever. This action cannot be undone.
        </p>
      </ModalWrapper>
    );
  },
};

/**
 * Danger modal for destructive actions
 */
export const DangerModal: Story = {
  render: () => {
    const actions: ModalAction[] = [
      {
        label: 'Deactivate my account',
        onClick: () => alert('Account deactivated'),
        primary: true,
      },
      { label: 'Cancel', autoClose: true, variant: 'btn-link' },
    ];

    return (
      <ModalWrapper
        title="Deactivate account"
        variant="danger"
        size="3xl"
        actions={actions}
        showCloseButton={false}
        buttonLabel="Danger Modal"
        footer={
          <div className="aegov-check-item sm:pl-20 mb-4 sm:mb-0 justify-center sm:justify-start">
            <input id="danger-checkbox" type="checkbox" value="0" />
            <label htmlFor="danger-checkbox" className="text-aeblack-400">
              Don't show me this message again
            </label>
          </div>
        }
        icon={{
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
              <rect width="256" height="256" fill="none" />
              <path d="M188,48a27.75,27.75,0,0,0-12,2.71V44a28,28,0,0,0-54.65-8.6A28,28,0,0,0,80,60v64l-3.82-6.13a28,28,0,0,0-48.6,27.82c16,33.77,28.93,57.72,43.72,72.69C86.24,233.54,103.2,240,128,240a88.1,88.1,0,0,0,88-88V76A28,28,0,0,0,188,48Zm12,104a72.08,72.08,0,0,1-72,72c-20.38,0-33.51-4.88-45.33-16.85C69.44,193.74,57.26,171,41.9,138.58a6.36,6.36,0,0,0-.3-.58,12,12,0,0,1,20.79-12,1.76,1.76,0,0,0,.14.23l18.67,30A8,8,0,0,0,96,152V60a12,12,0,0,1,24,0v60a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v76a8,8,0,0,0,16,0V76a12,12,0,0,1,24,0Z" />
            </svg>
          ),
        }}
      >
        <p className="text-base font-normal text-aeblack-800 mb-0">
          Are you sure you want to deactivate your account? All of your data will be permanently removed
          from our servers forever. This action cannot be undone.
        </p>
      </ModalWrapper>
    );
  },
};

/**
 * Confirmation modal with checkbox
 */
export const ConfirmationStandard: Story = {
  render: () => {
    const actions: ModalAction[] = [
      { label: 'Confirm', onClick: () => alert('Confirmed'), primary: true },
      { label: 'Cancel', autoClose: true, variant: 'btn-soft' },
    ];

    return (
      <ModalWrapper
        title="Are you sure you want to submit this application?"
        size="2xl"
        actions={actions}
        showCloseButton={false}
        buttonLabel="Confirmation Modal"
        footer={
          <div className="aegov-check-item sm:pl-20 mb-4 sm:mb-0 justify-center sm:justify-start">
            <input id="confirm-checkbox" type="checkbox" value="0" />
            <label htmlFor="confirm-checkbox" className="text-aeblack-400">
              Don't show me this message again
            </label>
          </div>
        }
        icon={{
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
              <rect width="256" height="256" fill="none" />
              <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
            </svg>
          ),
        }}
      >
        <p className="text-base font-normal text-aeblack-800 mb-0">
          You are about to submit the application to process a medical fitness examination at the Nadd Al
          Sheeba Medical Centre, Dubai. Are you sure you want to proceed?
        </p>
      </ModalWrapper>
    );
  },
};

/**
 * Modal with scrollable content
 */
export const ScrollableContent: Story = {
  render: () => {
    const actions: ModalAction[] = [
      {
        label: 'I have understood these updates',
        autoClose: true,
        primary: true,
        variant: 'btn-primary',
      },
    ];

    return (
      <ModalWrapper
        title="Our terms and conditions have been updated"
        size="3xl"
        scrollable={true}
        actions={actions}
        staticBackdrop={true}
        showCloseButton={false}
        buttonLabel="Scrollable Modal"
        icon={{
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
              <rect width="256" height="256" fill="none" />
              <path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z" />
            </svg>
          ),
        }}
      >
        <div className="text-base font-normal text-aeblack-800">
          <p>
            There has been an update to our terms and conditions, and in order to proceed, you must be aware
            of the following changes:
          </p>
          <ul className="list-disc space-y-8 mb-14">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non posuere odio. Etiam
              mattis porta commodo. Nulla sagittis congue mi id vehicula.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non posuere odio. Etiam
              mattis porta commodo. Nulla sagittis congue mi id vehicula.
            </li>
          </ul>
          <p>
            Further to these changes, we have also received updates about changes in third-party software
            used to manage this portal. Information regarding changes in the terms and conditions of
            third-party software use is as follows:
          </p>
          <ul className="list-disc space-y-8 mb-14">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non posuere odio. Etiam
              mattis porta commodo. Nulla sagittis congue mi id vehicula.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non posuere odio. Etiam
              mattis porta commodo. Nulla sagittis congue mi id vehicula.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non posuere odio. Etiam
              mattis porta commodo. Nulla sagittis congue mi id vehicula.
            </li>
          </ul>
        </div>
      </ModalWrapper>
    );
  },
};

/**
 * Modal with bottom-right placement
 */
export const BottomRightPlacement: Story = {
  render: () => {
    const actions: ModalAction[] = [
      {
        label: 'Allow all and accept',
        onClick: () => alert('Accepted'),
        primary: true,
        variant: 'btn-primary',
      },
      { label: 'Deny and quit', autoClose: true, variant: 'btn-primary btn-outline' },
    ];

    return (
      <ModalWrapper
        title="Cookie Consent"
        variant="alert"
        size="3xl"
        placement="bottom-right"
        staticBackdrop={true}
        actions={actions}
        showCloseButton={false}
        buttonLabel="Bottom Right Modal"
        icon={{
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
              <rect width="256" height="256" fill="none" />
              <path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm-34.34,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32Z" />
            </svg>
          ),
        }}
      >
        <div className="text-base font-normal text-primary-600">
          <p>
            Are you sure you want to deactivate your account? Our site enables scripts (e.g. cookies) that
            are able to read, store, and write information on your browser and device. The information
            processed by this script includes data relating to you, which may include personal identifiers.
          </p>
          <p className="mb-0">
            We use this information for various purposes - e.g. to deliver content, maintain security, enable
            user choice, improve our sites, and for marketing purposes. You may choose to accept or deny
            using our website accordingly. Learn more by visiting our Privacy Policy.
          </p>
        </div>
      </ModalWrapper>
    );
  },
};

/**
 * Small modal size
 */
export const SmallSize: Story = {
  render: () => (
    <ModalWrapper title="Small Modal" size="sm" buttonLabel="Small Modal">
      <p className="text-base text-aeblack-500">This is a small modal.</p>
    </ModalWrapper>
  ),
};

/**
 * Medium modal size
 */
export const MediumSize: Story = {
  render: () => (
    <ModalWrapper title="Medium Modal" size="md" buttonLabel="Medium Modal">
      <p className="text-base text-aeblack-500">This is a medium modal (default size).</p>
    </ModalWrapper>
  ),
};

/**
 * Large modal size
 */
export const LargeSize: Story = {
  render: () => (
    <ModalWrapper title="Large Modal" size="xl" buttonLabel="Large Modal">
      <p className="text-base text-aeblack-500">This is a large modal.</p>
    </ModalWrapper>
  ),
};

/**
 * Extra large modal size
 */
export const ExtraLargeSize: Story = {
  render: () => (
    <ModalWrapper title="Extra Large Modal" size="3xl" buttonLabel="Extra Large Modal">
      <p className="text-base text-aeblack-500">This is an extra large modal.</p>
    </ModalWrapper>
  ),
};

/**
 * Modal with static backdrop (cannot close by clicking outside)
 */
export const StaticBackdrop: Story = {
  render: () => (
    <ModalWrapper title="Static Backdrop Modal" staticBackdrop={true} buttonLabel="Static Backdrop">
      <p className="text-base text-aeblack-500">
        This modal cannot be closed by clicking outside. Use the close button or ESC key.
      </p>
    </ModalWrapper>
  ),
};

/**
 * Modal without close button
 */
export const NoCloseButton: Story = {
  render: () => {
    const actions: ModalAction[] = [{ label: 'Close', autoClose: true, primary: true }];

    return (
      <ModalWrapper
        title="No Close Button"
        showCloseButton={false}
        actions={actions}
        buttonLabel="No Close Button"
      >
        <p className="text-base text-aeblack-500">This modal has no close button in the corner.</p>
      </ModalWrapper>
    );
  },
};

/**
 * Accessibility demonstration
 */
export const Accessibility: Story = {
  render: () => {
    const actions: ModalAction[] = [
      { label: 'Confirm', primary: true },
      { label: 'Cancel', autoClose: true },
    ];

    return (
      <ModalWrapper
        title="Accessible Modal"
        description="This modal demonstrates accessibility features"
        actions={actions}
        buttonLabel="Accessible Modal"
      >
        <div>
          <p className="text-base text-aeblack-500 mb-4">
            This modal includes proper ARIA attributes, focus management, and keyboard navigation support.
          </p>
          <ul className="list-disc ps-4 space-y-2 text-sm text-aeblack-600">
            <li>
              <strong>role="dialog"</strong> - Identifies this as a dialog
            </li>
            <li>
              <strong>aria-labelledby</strong> - Points to the modal title
            </li>
            <li>
              <strong>aria-describedby</strong> - Points to the description
            </li>
            <li>
              <strong>ESC key</strong> - Closes the modal
            </li>
            <li>
              <strong>Focus trap</strong> - Keeps focus within the modal
            </li>
          </ul>
        </div>
      </ModalWrapper>
    );
  },
};
