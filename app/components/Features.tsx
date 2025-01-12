export default function Features() {
  return (
    <div>
      <div className="bg-[#288cb5]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 text-[#f3f3f1]">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Connect with Trusted Dealers Nationwide
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: 'car-front',
                    text: 'Access Exclusive Wholesale Inventory Direct from Dealers',
                  },
                  {
                    icon: 'globe',
                    text: 'Build Your Dealer Network in Real-Time',
                  },
                  {
                    icon: 'bag-check',
                    text: 'Trade Unlimited Vehicles with Zero Auction Fees',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <i className={`bi bi-${item.icon} text-3xl`} />
                    <h6 className="font-medium">{item.text}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-black">
              <h2 className="text-2xl font-bold mb-6">
                Your Direct Connection to Premium Wholesale Inventory
              </h2>
              <p className="flex items-center gap-2">
                <i className="bi bi-wallet-fill" />
                Maximize Profits with Direct Dealer-to-Dealer Trading
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 text-center">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-8">
              Streamline Your Inventory Acquisition
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <FeatureBox
                bgColor="bg-[#288cb5]"
                icon="box-seam"
                title="Premium Inventory Available 24/7"
              />
              <FeatureBox
                bgColor="bg-gray-100"
                icon="car-front"
                title="Access Thousands of Retail-Ready Vehicles"
              />
              <FeatureBox
                bgColor="bg-gray-100"
                icon="speedometer"
                title="Close Deals in Record Time"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">
              Trade with Complete Peace of Mind
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <FeatureBox
                bgColor="bg-gray-100"
                icon="hand-thumbs-up"
                title="Connect with Verified Dealer Partners"
              />
              <FeatureBox
                bgColor="bg-gray-100"
                icon="chat-quote"
                title="Track Dealer Performance & Reviews"
              />
              <FeatureBox
                bgColor="bg-[#288cb5]"
                icon="chat-left"
                title="Engage in Our Trusted Trading Community"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureBox({
  bgColor = '',
  icon,
  title,
}: {
  bgColor?: string;
  icon: string;
  title: string;
}) {
  return (
    <div className={`${bgColor} p-4 shadow-sm rounded-lg`}>
      <div className="text-2xl mb-3">
        <i className={`bi bi-${icon}-fill`} />
      </div>
      <h5 className="text-sm font-medium">{title}</h5>
    </div>
  );
}
