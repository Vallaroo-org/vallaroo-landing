import { title, subtitle } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function AboutPage() {
  const values = [
    {
      title: "Simplicity",
      description: "We believe complex problems deserve simple solutions. Our platform is designed to be intuitive and easy to use.",
      icon: "✨"
    },
    {
      title: "Reliability",
      description: "Your business depends on our platform. We ensure 99.9% uptime and robust data security for peace of mind.",
      icon: "🛡️"
    },
    {
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge features to help your business stay ahead of the competition.",
      icon: "🚀"
    },
    {
      title: "Community",
      description: "Built by shop owners, for shop owners. We listen to our community and build features that matter.",
      icon: "🤝"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Platform Launch",
      description: "Vallaroo launched with core shop management features"
    },
    {
      year: "2024",
      title: "10,000+ Users",
      description: "Reached our first major milestone of active businesses"
    },
    {
      year: "2024",
      title: "Advanced Features",
      description: "Added inventory management, analytics, and multi-shop support"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding to serve businesses worldwide"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full text-center justify-center">
          <h1 className={title({ size: "lg" })}>
            About Vallaroo
          </h1>
          <div className={subtitle({ class: "mt-6 text-lg" })}>
            The complete shop management platform that empowers businesses to grow efficiently and profitably.
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className={title({ size: "lg" })}>
                Our Mission
              </h2>
              <div className="space-y-4 mt-4 sm:mt-6">
                <p className="text-default-600 text-sm sm:text-base">
                  At Vallaroo, we believe that every business deserves access to powerful, affordable shop management tools. 
                  Our mission is to democratize enterprise-grade technology for businesses of all sizes.
                </p>
                <p className="text-default-600 text-sm sm:text-base">
                  We started with a simple observation: existing shop management solutions were either too expensive, 
                  too complex, or too limited. Small and medium businesses were being left behind.
                </p>
                <p className="text-default-600 text-sm sm:text-base">
                  Today, Vallaroo serves thousands of businesses worldwide, helping them streamline operations, 
                  increase efficiency, and focus on what matters most - serving their customers.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-6 sm:p-8">
              <div className="text-4xl sm:text-6xl mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-default-600 text-sm sm:text-base">
                To become the world's most trusted and accessible shop management platform, 
                empowering millions of businesses to succeed in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={title({ size: "lg" })}>
              Our Core Values
            </h2>
            <p className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center">
                <CardHeader className="flex justify-center pb-4">
                  <div className="text-3xl sm:text-4xl mb-4">{value.icon}</div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">{value.title}</h3>
                  <p className="text-default-600 text-xs sm:text-sm break-words leading-relaxed">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={title({ size: "lg" })}>
              Our Journey
            </h2>
            <p className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
              From startup to trusted platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-4 sm:p-6 text-center">
                <CardHeader className="flex justify-center pb-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                </CardHeader>
                <CardBody className="pt-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">{milestone.title}</h3>
                  <p className="text-default-600 text-xs sm:text-sm break-words leading-relaxed">{milestone.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-default-600 text-sm sm:text-base">Active Businesses</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-default-600 text-sm sm:text-base">Shops Managed</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-default-600 text-sm sm:text-base">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={title({ size: "lg" })}>
              What We Do
            </h2>
            <p className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
              Comprehensive shop management solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl">🏪</div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Shop Management</h3>
                  <p className="text-default-600 text-xs sm:text-sm break-words leading-relaxed">
                    Complete control over your shops with multi-location support, inventory tracking, 
                    and centralized management tools.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl">📊</div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Analytics & Insights</h3>
                  <p className="text-default-600 text-xs sm:text-sm break-words leading-relaxed">
                    Powerful reporting and analytics to understand your business performance 
                    and make data-driven decisions.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl">👥</div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Customer Management</h3>
                  <p className="text-default-600 text-xs sm:text-sm break-words leading-relaxed">
                    Build lasting relationships with your customers through comprehensive 
                    CRM and communication tools.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl">⚡</div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 break-words">Automation</h3>
                  <p className="text-default-600 text-xs sm:text-sm break-words leading-relaxed">
                    Streamline operations with automated workflows, notifications, 
                    and intelligent inventory management.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block w-full text-center justify-center">
          <h2 className={title({ size: "lg" })}>
            Join the Vallaroo Community
          </h2>
          <div className={subtitle({ class: "mt-6 text-lg" })}>
            Ready to transform your shop management? Start your free journey today.
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
              Start Free Trial
            </Button>
            <Button
              as={Link}
              href="/contact"
              variant="bordered"
              size="lg"
              className="w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
