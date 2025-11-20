import { FileInput } from '@/shared/components/ui';

/**
 * FileInputShowcase Component
 *
 * Comprehensive showcase and testing page for the FileInput component.
 * Demonstrates all variants, sizes, states, and use cases from the AEGOV Design System.
 */
export const FileInputShowcase = () => {
  const handleFilesChange = (files: FileList | null) => {
    console.log('Files selected:', files);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            FileInput Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for FileInput component
          </p>
        </header>

        <div className="space-y-12">
          {/* Section 1: Sizes */}
          <section data-testid="sizes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sizes</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Small</h3>
                <FileInput
                  label="Upload file"
                  size="sm"
                  data-testid="file-input-sm"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Base</h3>
                <FileInput
                  label="Upload file"
                  size="base"
                  data-testid="file-input-base"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Large</h3>
                <FileInput
                  label="Upload file"
                  size="lg"
                  data-testid="file-input-lg"
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>

          {/* Section 2: Variants */}
          <section data-testid="variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Variants</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Primary</h3>
                <FileInput
                  label="Upload file"
                  variant="primary"
                  data-testid="file-input-primary"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Secondary</h3>
                <FileInput
                  label="Upload file"
                  variant="secondary"
                  data-testid="file-input-secondary"
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>

          {/* Section 3: File Type Restrictions */}
          <section data-testid="file-types-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              File Type Restrictions
            </h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">PDF Only</h3>
                <FileInput
                  label="Upload PDF"
                  accept=".pdf"
                  data-testid="file-input-pdf"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Images Only</h3>
                <FileInput
                  label="Upload images"
                  accept="image/*"
                  data-testid="file-input-images"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Documents</h3>
                <FileInput
                  label="Upload documents"
                  accept=".pdf,.doc,.docx"
                  data-testid="file-input-documents"
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>

          {/* Section 4: Multiple Files */}
          <section data-testid="multiple-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Multiple Files</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Multiple File Selection
                </h3>
                <FileInput
                  label="Upload files"
                  multiple
                  data-testid="file-input-multiple"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Multiple Images
                </h3>
                <FileInput
                  label="Upload images"
                  accept="image/*"
                  multiple
                  data-testid="file-input-multiple-images"
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>

          {/* Section 5: File List Display */}
          <section data-testid="file-list-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              File List Display
            </h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  With File List
                </h3>
                <FileInput
                  label="Upload file"
                  showFileList={true}
                  data-testid="file-input-with-list"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Without File List
                </h3>
                <FileInput
                  label="Upload file"
                  showFileList={false}
                  data-testid="file-input-no-list"
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>

          {/* Section 6: States */}
          <section data-testid="states-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">States</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Enabled</h3>
                <FileInput
                  label="Upload file"
                  data-testid="file-input-enabled"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Disabled</h3>
                <FileInput
                  label="Upload file"
                  disabled
                  data-testid="file-input-disabled"
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>

          {/* Section 7: Custom Labels */}
          <section data-testid="labels-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custom Labels</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Default Label
                </h3>
                <FileInput data-testid="file-input-default-label" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Custom Label
                </h3>
                <FileInput
                  label="Attach document"
                  data-testid="file-input-custom-label"
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>

          {/* Section 8: Use Cases */}
          <section data-testid="use-cases-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Common Use Cases
            </h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Profile Picture Upload
                </h3>
                <FileInput
                  label="Upload profile picture"
                  accept="image/png,image/jpeg"
                  size="lg"
                  data-testid="file-input-profile"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Document Submission
                </h3>
                <FileInput
                  label="Submit documents"
                  accept=".pdf,.doc,.docx"
                  multiple
                  data-testid="file-input-submission"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  CSV Import
                </h3>
                <FileInput
                  label="Import CSV"
                  accept=".csv"
                  variant="secondary"
                  data-testid="file-input-csv"
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>

          {/* Section 9: Combinations */}
          <section data-testid="combinations-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Variant Combinations
            </h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Small Secondary
                </h3>
                <FileInput
                  label="Upload file"
                  size="sm"
                  variant="secondary"
                  data-testid="file-input-sm-secondary"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Large Primary
                </h3>
                <FileInput
                  label="Upload file"
                  size="lg"
                  variant="primary"
                  data-testid="file-input-lg-primary"
                  onFilesChange={handleFilesChange}
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Large Secondary Multiple
                </h3>
                <FileInput
                  label="Upload files"
                  size="lg"
                  variant="secondary"
                  multiple
                  data-testid="file-input-lg-secondary-multiple"
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
