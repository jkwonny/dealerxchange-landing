export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5">
            <p className="text-gray-600">
              DealerXChange helps you to connect and share with other dealers
              nationwide to Buy and Sell wholesale vehicles.
            </p>
          </div>
        </div>

        <div className="border-t py-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600">
            © 2025 DealerXChange, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
