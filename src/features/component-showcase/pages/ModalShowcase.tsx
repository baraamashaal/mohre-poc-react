import { useState } from 'react';
import { Modal, type ModalAction } from '../../../shared/components/ui';

export const ModalShowcase = () => {
  const [basicOpen, setBasicOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successNoIconOpen, setSuccessNoIconOpen] = useState(false);
  const [multipleActionsOpen, setMultipleActionsOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [dangerOpen, setDangerOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [scrollableOpen, setScrollableOpen] = useState(false);
  const [placementOpen, setPlacementOpen] = useState(false);
  const [staticOpen, setStaticOpen] = useState(false);
  const [noCloseOpen, setNoCloseOpen] = useState(false);
  const [smallOpen, setSmallOpen] = useState(false);
  const [mediumOpen, setMediumOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);

  // Action handlers
  const handleSuccess = () => {
    alert('Action confirmed!');
    setSuccessOpen(false);
  };

  const handleDeactivate = () => {
    alert('Account deactivated');
    setDangerOpen(false);
  };

  const handleConfirm = () => {
    alert('Application submitted');
    setConfirmOpen(false);
  };

  // Icons
  const CheckIcon = (
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
  );

  const WarningIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <rect width="256" height="256" fill="none" />
      <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" />
    </svg>
  );

  const DangerIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <rect width="256" height="256" fill="none" />
      <path d="M188,48a27.75,27.75,0,0,0-12,2.71V44a28,28,0,0,0-54.65-8.6A28,28,0,0,0,80,60v64l-3.82-6.13a28,28,0,0,0-48.6,27.82c16,33.77,28.93,57.72,43.72,72.69C86.24,233.54,103.2,240,128,240a88.1,88.1,0,0,0,88-88V76A28,28,0,0,0,188,48Zm12,104a72.08,72.08,0,0,1-72,72c-20.38,0-33.51-4.88-45.33-16.85C69.44,193.74,57.26,171,41.9,138.58a6.36,6.36,0,0,0-.3-.58,12,12,0,0,1,20.79-12,1.76,1.76,0,0,0,.14.23l18.67,30A8,8,0,0,0,96,152V60a12,12,0,0,1,24,0v60a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v76a8,8,0,0,0,16,0V76a12,12,0,0,1,24,0Z" />
    </svg>
  );

  const CheckCircleIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <rect width="256" height="256" fill="none" />
      <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
    </svg>
  );

  const DocumentIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <rect width="256" height="256" fill="none" />
      <path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z" />
    </svg>
  );

  const ShieldIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <rect width="256" height="256" fill="none" />
      <path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm-34.34,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Modal Component Showcase</h1>
          <p className="text-lg text-gray-600">
            Interactive demonstrations of all Modal variants from the AEGOV Design System. Click buttons to
            open different modal types.
          </p>
        </header>

        {/* Basic Modal */}
        <section data-testid="basic-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Basic Modal</h2>
          <p className="text-gray-600 mb-4">Simple modal with title and content. Closes via ESC, close button, or backdrop click.</p>
          <button onClick={() => setBasicOpen(true)} className="aegov-btn">
            Open Basic Modal
          </button>

          <Modal open={basicOpen} onOpenChange={setBasicOpen} title="Hello" data-testid="basic-modal">
            <div>
              <p>To close the modal, you can use any of the following methods:</p>
              <ul className="list-decimal ps-4 space-y-3">
                <li>Press the "ESC" key on your keyboard.</li>
                <li>Click the close button in the top-right corner.</li>
                <li>Click outside the modal on the backdrop.</li>
              </ul>
            </div>
          </Modal>
        </section>

        {/* Single Action with Icon */}
        <section data-testid="success-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Single Action Modal with Icon</h2>
          <p className="text-gray-600 mb-4">Success confirmation modal with checkmark icon (Example 5 from docs).</p>
          <button onClick={() => setSuccessOpen(true)} className="aegov-btn">
            Open Success Modal
          </button>

          <Modal
            open={successOpen}
            onOpenChange={setSuccessOpen}
            title="Payment successful"
            variant="success"
            size="sm"
            actions={[
              { label: 'Got it', onClick: handleSuccess, primary: true, className: 'btn-block' },
            ]}
            icon={{ icon: CheckIcon }}
            data-testid="success-modal"
          >
            <p className="text-base text-aeblack-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
            </p>
          </Modal>
        </section>

        {/* Single Action without Icon */}
        <section data-testid="success-no-icon-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Single Action Modal without Icon</h2>
          <p className="text-gray-600 mb-4">Payment confirmation without visual icon (Example 6 from docs).</p>
          <button onClick={() => setSuccessNoIconOpen(true)} className="aegov-btn">
            Open Simple Modal
          </button>

          <Modal
            open={successNoIconOpen}
            onOpenChange={setSuccessNoIconOpen}
            title="Payment successful"
            size="sm"
            actions={[
              {
                label: 'Continue',
                autoClose: true,
                primary: true,
                className: 'btn-block',
              },
            ]}
            data-testid="success-no-icon-modal"
          >
            <div className="text-center">
              <p className="text-base text-aeblack-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
              </p>
            </div>
          </Modal>
        </section>

        {/* Multiple Actions */}
        <section data-testid="multiple-actions-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Multiple Actions Modal</h2>
          <p className="text-gray-600 mb-4">Two-button confirmation dialog (Example 7 from docs).</p>
          <button onClick={() => setMultipleActionsOpen(true)} className="aegov-btn">
            Open Multiple Actions Modal
          </button>

          <Modal
            open={multipleActionsOpen}
            onOpenChange={setMultipleActionsOpen}
            title="Payment successful"
            size="sm"
            actions={[
              {
                label: 'Confirm',
                onClick: () => {
                  alert('Confirmed');
                  setMultipleActionsOpen(false);
                },
                primary: true,
              },
              { label: 'Cancel', autoClose: true, variant: 'btn-soft' },
            ]}
            data-testid="multiple-actions-modal"
          >
            <div className="text-center">
              <p className="text-base text-aeblack-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
              </p>
            </div>
          </Modal>
        </section>

        {/* Alert Modal */}
        <section data-testid="alert-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Alert Modal</h2>
          <p className="text-gray-600 mb-4">Warning modal with alert icon (Example 8 from docs).</p>
          <button onClick={() => setAlertOpen(true)} className="aegov-btn">
            Open Alert Modal
          </button>

          <Modal
            open={alertOpen}
            onOpenChange={setAlertOpen}
            title="Deactivate account"
            variant="alert"
            size="lg"
            showCloseButton={false}
            actions={[
              {
                label: 'Confirm',
                onClick: () => {
                  alert('Confirmed');
                  setAlertOpen(false);
                },
                primary: true,
              },
              { label: 'Cancel', autoClose: true, variant: 'btn-soft' },
            ]}
            icon={{ icon: WarningIcon }}
            data-testid="alert-modal"
          >
            <p className="text-base font-normal text-aeblack-500 mb-0">
              Are you sure you want to deactivate your account? All of your data will be permanently
              removed from our servers forever. This action cannot be undone.
            </p>
          </Modal>
        </section>

        {/* Danger Modal (Serious) */}
        <section data-testid="danger-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Danger Modal (Serious)</h2>
          <p className="text-gray-600 mb-4">High-stakes action modal with red icon styling (Example 12 from docs).</p>
          <button onClick={() => setDangerOpen(true)} className="aegov-btn">
            Open Danger Modal
          </button>

          <Modal
            open={dangerOpen}
            onOpenChange={setDangerOpen}
            title="Deactivate account"
            variant="danger"
            size="3xl"
            showCloseButton={false}
            actions={[
              { label: 'Deactivate my account', onClick: handleDeactivate, primary: true },
              { label: 'Cancel', autoClose: true, variant: 'btn-link' },
            ]}
            footer={
              <div className="aegov-check-item sm:pl-20 mb-4 sm:mb-0 justify-center sm:justify-start">
                <input id="danger-checkbox" type="checkbox" value="0" />
                <label htmlFor="danger-checkbox" className="text-aeblack-400">
                  Don't show me this message again
                </label>
              </div>
            }
            icon={{ icon: DangerIcon }}
            data-testid="danger-modal"
          >
            <p className="text-base font-normal text-aeblack-800 mb-0">
              Are you sure you want to deactivate your account? All of your data will be permanently
              removed from our servers forever. This action cannot be undone.
            </p>
          </Modal>
        </section>

        {/* Confirmation Standard */}
        <section data-testid="confirmation-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Confirmation Standard Modal</h2>
          <p className="text-gray-600 mb-4">Standard confirmation with checkbox (Example 11 from docs).</p>
          <button onClick={() => setConfirmOpen(true)} className="aegov-btn">
            Open Confirmation Modal
          </button>

          <Modal
            open={confirmOpen}
            onOpenChange={setConfirmOpen}
            title="Are you sure you want to submit this application?"
            size="2xl"
            showCloseButton={false}
            actions={[
              { label: 'Confirm', onClick: handleConfirm, primary: true },
              { label: 'Cancel', autoClose: true, variant: 'btn-soft' },
            ]}
            footer={
              <div className="aegov-check-item sm:pl-20 mb-4 sm:mb-0 justify-center sm:justify-start">
                <input id="confirm-checkbox" type="checkbox" value="0" />
                <label htmlFor="confirm-checkbox" className="text-aeblack-400">
                  Don't show me this message again
                </label>
              </div>
            }
            icon={{ icon: CheckCircleIcon }}
            data-testid="confirmation-modal"
          >
            <p className="text-base font-normal text-aeblack-800 mb-0">
              You are about to submit the application to process a medical fitness examination at the Nadd
              Al Sheeba Medical Centre, Dubai. Are you sure you want to proceed?
            </p>
          </Modal>
        </section>

        {/* Scrollable Content */}
        <section data-testid="scrollable-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Scrollable Content Modal</h2>
          <p className="text-gray-600 mb-4">Terms/conditions modal with overflow handling (Example 10 from docs).</p>
          <button onClick={() => setScrollableOpen(true)} className="aegov-btn">
            Open Scrollable Modal
          </button>

          <Modal
            open={scrollableOpen}
            onOpenChange={setScrollableOpen}
            title="Our terms and conditions have been updated"
            size="3xl"
            scrollable={true}
            staticBackdrop={true}
            showCloseButton={false}
            actions={[
              {
                label: 'I have understood these updates',
                autoClose: true,
                primary: true,
                variant: 'btn-primary',
              },
            ]}
            icon={{ icon: DocumentIcon }}
            data-testid="scrollable-modal"
          >
            <div className="text-base font-normal text-aeblack-800">
              <p>
                There has been an update to our terms and conditions, and in order to proceed, you must be
                aware of the following changes:
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
                Further to these changes, we have also received updates about changes in third-party
                software used to manage this portal. Information regarding changes in the terms and
                conditions of third-party software use is as follows:
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
          </Modal>
        </section>

        {/* Placement */}
        <section data-testid="placement-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Bottom-Right Placement Modal</h2>
          <p className="text-gray-600 mb-4">Alert positioned via placement prop (Example 9 from docs).</p>
          <button onClick={() => setPlacementOpen(true)} className="aegov-btn">
            Open Bottom-Right Modal
          </button>

          <Modal
            open={placementOpen}
            onOpenChange={setPlacementOpen}
            title="Cookie Consent"
            variant="alert"
            size="3xl"
            placement="bottom-right"
            staticBackdrop={true}
            showCloseButton={false}
            actions={[
              {
                label: 'Allow all and accept',
                onClick: () => {
                  alert('Accepted');
                  setPlacementOpen(false);
                },
                primary: true,
                variant: 'btn-primary',
              },
              { label: 'Deny and quit', autoClose: true, variant: 'btn-primary btn-outline' },
            ]}
            icon={{ icon: ShieldIcon }}
            data-testid="placement-modal"
          >
            <div className="text-base font-normal text-primary-600">
              <p>
                Are you sure you want to deactivate your account? Our site enables scripts (e.g. cookies)
                that are able to read, store, and write information on your browser and device. The
                information processed by this script includes data relating to you, which may include
                personal identifiers.
              </p>
              <p className="mb-0">
                We use this information for various purposes - e.g. to deliver content, maintain security,
                enable user choice, improve our sites, and for marketing purposes. You may choose to accept
                or deny using our website accordingly. Learn more by visiting our Privacy Policy.
              </p>
            </div>
          </Modal>
        </section>

        {/* Static Backdrop */}
        <section data-testid="static-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Static Backdrop Modal</h2>
          <p className="text-gray-600 mb-4">Modal that cannot be closed by clicking backdrop.</p>
          <button onClick={() => setStaticOpen(true)} className="aegov-btn">
            Open Static Backdrop Modal
          </button>

          <Modal
            open={staticOpen}
            onOpenChange={setStaticOpen}
            title="Static Backdrop Modal"
            staticBackdrop={true}
            data-testid="static-modal"
          >
            <p className="text-base text-aeblack-500">
              This modal cannot be closed by clicking outside. Use the close button or press ESC key.
            </p>
          </Modal>
        </section>

        {/* No Close Button */}
        <section data-testid="no-close-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. No Close Button Modal</h2>
          <p className="text-gray-600 mb-4">Modal without close button in corner.</p>
          <button onClick={() => setNoCloseOpen(true)} className="aegov-btn">
            Open No Close Button Modal
          </button>

          <Modal
            open={noCloseOpen}
            onOpenChange={setNoCloseOpen}
            title="No Close Button"
            showCloseButton={false}
            actions={[{ label: 'Close', autoClose: true, primary: true }]}
            data-testid="no-close-modal"
          >
            <p className="text-base text-aeblack-500">
              This modal has no close button in the corner. Use the button below to close.
            </p>
          </Modal>
        </section>

        {/* Size Variations */}
        <section data-testid="sizes-section" className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Size Variations</h2>
          <p className="text-gray-600 mb-4">Different modal sizes: small, medium, large.</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setSmallOpen(true)} className="aegov-btn">
              Small Modal
            </button>
            <button onClick={() => setMediumOpen(true)} className="aegov-btn">
              Medium Modal
            </button>
            <button onClick={() => setLargeOpen(true)} className="aegov-btn">
              Large Modal
            </button>
          </div>

          <Modal
            open={smallOpen}
            onOpenChange={setSmallOpen}
            title="Small Modal"
            size="sm"
            data-testid="small-modal"
          >
            <p className="text-base text-aeblack-500">This is a small modal (sm).</p>
          </Modal>

          <Modal
            open={mediumOpen}
            onOpenChange={setMediumOpen}
            title="Medium Modal"
            size="md"
            data-testid="medium-modal"
          >
            <p className="text-base text-aeblack-500">This is a medium modal (md) - the default size.</p>
          </Modal>

          <Modal
            open={largeOpen}
            onOpenChange={setLargeOpen}
            title="Large Modal"
            size="xl"
            data-testid="large-modal"
          >
            <p className="text-base text-aeblack-500">This is a large modal (xl).</p>
          </Modal>
        </section>

        {/* Accessibility Info */}
        <section className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Features</h2>
          <ul className="list-disc ps-6 space-y-2 text-gray-700">
            <li>
              <strong>Focus Management:</strong> Focus automatically shifts to the first interactive element
              when modal opens
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> ESC key closes the modal, Tab cycles through interactive
              elements
            </li>
            <li>
              <strong>ARIA Attributes:</strong> Proper role="dialog", aria-labelledby, and aria-describedby
              attributes
            </li>
            <li>
              <strong>Focus Trap:</strong> Focus stays within modal until closed
            </li>
            <li>
              <strong>Screen Reader Support:</strong> All modals are announced properly to screen readers
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};
