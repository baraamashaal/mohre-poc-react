import { Blockquote } from '@/shared/components/ui';

export function BlockquoteShowcase() {
  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Blockquote Component</h1>
        <p className="text-lg text-aeblack-600 mb-8">
          Visually distinguishes and highlights quoted text or excerpts with proper
          attribution.
        </p>
      </header>

      {/* Example 1: Standard Blockquote with Icon */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Example 1: Standard Blockquote with Icon
        </h2>
        <p className="text-aeblack-600 mb-6">
          Default blockquote with quotation icon and attribution footer.
        </p>
        <div className="space-y-4">
          <Blockquote
            author="AbdulRahman Bin Mohammed Al Owais"
            authorTitle="Minister of Health & Prevention"
            cite="https://mohap.gov.ae/en/about-us/minister-message"
            style="soft"
          >
            The confidence of our wise leadership in healthcare professionals is highly
            appreciated. This confidence places a significant responsibility on our
            shoulders to continue providing excellent healthcare services to all
            residents of the UAE.
          </Blockquote>
        </div>
      </section>

      {/* Example 2: Basic Code Structure Template */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Example 2: Basic Code Structure Template
        </h2>
        <p className="text-aeblack-600 mb-6">
          Template showing the required structure for blockquote component.
        </p>
        <div className="space-y-4">
          <Blockquote
            author="Author Full Name"
            authorTitle="Author Title or Source Name"
            cite="https://www.example.com"
            style="soft"
          >
            Quote text goes here. This should be the actual quoted content from the
            source.
          </Blockquote>
        </div>
      </section>

      {/* Example 3: Colored Blockquote (Without Icon) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Example 3: Colored Blockquote (Without Icon)
        </h2>
        <p className="text-aeblack-600 mb-6">
          Colored variant with background styling, SVG icon omitted.
        </p>
        <div className="space-y-4">
          <Blockquote
            author="AbdulRahman Bin Mohammed Al Owais"
            authorTitle="Minister of Health & Prevention"
            cite="https://www.example.com"
            style="colored"
          >
            The confidence of our wise leadership in healthcare professionals is highly
            appreciated. This confidence places a significant responsibility on our
            shoulders to continue providing excellent healthcare services to all
            residents of the UAE.
          </Blockquote>
        </div>
      </section>

      {/* Additional Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Additional Examples</h2>

        <div className="space-y-8">
          {/* Short Quote */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Short Quote</h3>
            <Blockquote
              author="Albert Einstein"
              authorTitle="Theoretical Physicist"
              cite="https://example.com/einstein-quotes"
              style="soft"
            >
              Imagination is more important than knowledge.
            </Blockquote>
          </div>

          {/* Long Quote */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Long Quote</h3>
            <Blockquote
              author="Jane Smith"
              authorTitle="Director of Communications"
              cite="https://example.com/long-article"
              style="soft"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </Blockquote>
          </div>

          {/* Colored Style */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Colored Style</h3>
            <Blockquote
              author="John Doe"
              authorTitle="CEO, Example Corporation"
              cite="https://example.com/article"
              style="colored"
            >
              This is an example quote in the colored style variant. Notice how the
              background color provides visual distinction without the quotation icon.
            </Blockquote>
          </div>

          {/* Arabic/RTL */}
          <div dir="rtl">
            <h3 className="text-xl font-semibold mb-4">Arabic/RTL Support</h3>
            <Blockquote
              author="عبدالرحمن بن محمد العويس"
              authorTitle="وزير الصحة ووقاية المجتمع"
              cite="https://mohap.gov.ae/ar/about-us/minister-message"
              style="soft"
            >
              ثقة قيادتنا الرشيدة في الكوادر الصحية محل تقدير كبير. هذه الثقة تضع
              مسؤولية كبيرة على عاتقنا لمواصلة تقديم خدمات صحية متميزة لجميع سكان
              دولة الإمارات.
            </Blockquote>
          </div>

          {/* Colored Arabic */}
          <div dir="rtl">
            <h3 className="text-xl font-semibold mb-4">Colored Arabic Style</h3>
            <Blockquote
              author="عبدالرحمن بن محمد العويس"
              authorTitle="وزير الصحة ووقاية المجتمع"
              cite="https://mohap.gov.ae/ar/about-us/minister-message"
              style="colored"
            >
              ثقة قيادتنا الرشيدة في الكوادر الصحية محل تقدير كبير. هذه الثقة تضع
              مسؤولية كبيرة على عاتقنا لمواصلة تقديم خدمات صحية متميزة لجميع سكان
              دولة الإمارات.
            </Blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
