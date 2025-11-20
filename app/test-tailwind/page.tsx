export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Tailwind CSS Test Page</h1>

      <div className="space-y-8">
        {/* Test 1: Basic padding */}
        <div className="bg-blue-500 text-white">
          <div className="p-8">This should have 32px padding (p-8)</div>
        </div>

        {/* Test 2: Right padding specifically */}
        <div className="bg-green-500 text-white">
          <div className="pr-32">This should have 128px right padding (pr-32)</div>
        </div>

        {/* Test 3: Responsive padding */}
        <div className="bg-purple-500 text-white">
          <div className="p-4 md:p-8 lg:p-16 xl:p-32">
            Responsive padding: 16px mobile, 32px md, 64px lg, 128px xl
          </div>
        </div>

        {/* Test 4: Flexbox with padding */}
        <div className="bg-red-500">
          <div className="flex justify-between items-center pr-32">
            <span className="text-white">Left item</span>
            <span className="text-white">Right item (should have 128px space to edge)</span>
          </div>
        </div>

        {/* Test 5: Custom padding values */}
        <div className="bg-yellow-500 text-black">
          <div className="px-4 sm:px-6 lg:px-8">
            Standard responsive horizontal padding (matches Navigation)
          </div>
        </div>

        {/* Test 6: Max width with padding */}
        <div className="bg-indigo-500">
          <div className="mx-auto max-w-7xl px-8">
            <div className="text-white">Max width container with padding</div>
          </div>
        </div>
      </div>
    </div>
  );
}