import { title, subtitle } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";

export default function PricingPage() {
  const features = [
    "Unlimited shops",
    "Complete product management",
    "Customer database & analytics",
    "Order processing & tracking",
    "Inventory management",
    "Multi-user access",
    "API access",
    "Email & SMS notifications",
    "Advanced reporting",
    "24/7 support",
    "Regular updates",
    "No hidden fees"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full text-center justify-center">
          <h1 className={title({ size: "lg" })}>
            Vallaroo is Completely Free
          </h1>
          <div className={subtitle({ class: "mt-6 text-lg" })}>
            No pricing tiers, no hidden costs, no surprises. Everything you need to manage your shops is included.
          </div>
        </div>
      </section>

      {/* Free Plan Card */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full">
          <Card className="p-6 sm:p-8 border-2 border-primary">
            <div className="text-center mb-6 sm:mb-8">
              <Chip color="primary" variant="flat" size="lg" className="mb-4">
                🎉 100% Free Forever
              </Chip>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">$0</h2>
              <p className="text-lg sm:text-xl text-default-600">No monthly fees, no setup costs</p>
            </div>

            <CardBody className="pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-primary text-lg">✓</span>
                    <span className="text-default-700 text-sm sm:text-base break-words">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  as={Link}
                  href="#"
                  color="primary"
                  size="lg"
                  variant="shadow"
                  className="w-full sm:w-auto"
                >
                  Get Started Now - It's Free
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={title({ size: "lg" })}>
              Why We're Free
            </h2>
            <p className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
              We believe powerful shop management tools should be accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl mb-4">🌍</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Democratizing Technology</h3>
              <p className="text-default-600 text-xs sm:text-sm break-words leading-relaxed">
                Making enterprise-grade shop management accessible to businesses of all sizes
              </p>
            </Card>
            <Card className="p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl mb-4">🚀</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Community-Driven</h3>
              <p className="text-default-600 text-xs sm:text-sm break-words leading-relaxed">
                Built by the community, for the community. Your feedback shapes our platform
              </p>
            </Card>
            <Card className="p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-4">💡</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Innovation First</h3>
              <p className="text-default-600 text-xs sm:text-sm break-words leading-relaxed">
                Focus on building the best features, not on monetization strategies
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={title({ size: "lg" })}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Is it really free forever?</h3>
              <p className="text-default-600 text-sm sm:text-base break-words leading-relaxed">Yes! Vallaroo will always be free. We're committed to keeping our platform accessible to everyone.</p>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Are there any hidden costs?</h3>
              <p className="text-default-600 text-sm sm:text-base break-words leading-relaxed">No hidden fees, no setup costs, no monthly charges. What you see is what you get.</p>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">What about support?</h3>
              <p className="text-default-600 text-sm sm:text-base break-words leading-relaxed">We provide full support including documentation, tutorials, and community forums.</p>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Will you add paid features later?</h3>
              <p className="text-default-600 text-sm sm:text-base break-words leading-relaxed">Our core features will always remain free. Any future premium features will be clearly communicated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full text-center justify-center">
          <h2 className={title({ size: "lg" })}>
            Ready to Get Started?
          </h2>
          <div className={subtitle({ class: "mt-6 text-lg" })}>
            Join thousands of businesses using Vallaroo to manage their shops - completely free
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              as={Link}
              href="#"
              color="primary"
              size="lg"
              variant="shadow"
              className="w-full sm:w-auto"
            >
              Start Using Vallaroo - Free
            </Button>
            <Button
              as={Link}
              href="/about"
              variant="bordered"
              size="lg"
              className="w-full sm:w-auto"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
