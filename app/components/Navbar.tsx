/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#f9fcfb] border-b py-4 shadow-sm text-black font-bold">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="w-64">
            <Link href="/" className="flex items-center text-black font-bold">
              <img
                src="/dealerxchange_logo.jpeg"
                alt="DealerXChange"
                width={200}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
