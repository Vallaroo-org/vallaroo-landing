import { title, subtitle } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help with your account or technical issues",
      contact: "support@vallaroo.com",
      icon: "📧",
      response: "Response within 24 hours"
    },
    {
      title: "Sales Inquiries",
      description: "Learn about our plans and enterprise solutions",
      contact: "sales@vallaroo.com",
      icon: "💼",
      response: "Response within 2 hours"
    },
    {
      title: "Technical Support",
      description: "Get immediate help with technical problems",
      contact: "tech@vallaroo.com",
      icon: "🔧",
      response: "Response within 4 hours"
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 100",
      country: "San Francisco, CA 94105",
      icon: "🏢"
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 15",
      country: "New York, NY 10013",
      icon: "🏢"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className={title({ size: "lg" })}>
          Get in Touch
        </h1>
        <p className={subtitle({ class: "mt-4" })}>
          We're here to help. Reach out to us for support, sales inquiries, or just to say hello.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <CardHeader className="pb-6">
                <h2 className={title({ size: "lg" })}>
                  Send us a Message
                </h2>
                <p className="text-default-600 mt-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardBody className="pt-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      placeholder="Enter your first name"
                      variant="bordered"
                      isRequired
                    />
                    <Input
                      label="Last Name"
                      placeholder="Enter your last name"
                      variant="bordered"
                      isRequired
                    />
                  </div>
                  
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    type="email"
                    isRequired
                  />
                  
                  <Input
                    label="Company"
                    placeholder="Enter your company name"
                    variant="bordered"
                  />
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <select className="w-full p-3 border border-default-300 rounded-lg bg-background">
                      <option>General Inquiry</option>
                      <option>Sales Question</option>
                      <option>Technical Support</option>
                      <option>Feature Request</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  
                  <Textarea
                    label="Message"
                    placeholder="Tell us how we can help you..."
                    variant="bordered"
                    minRows={4}
                    isRequired
                  />
                  
                  <Button
                    color="primary"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className={`${title({ size: "lg" })} mb-6`}>
                Contact Methods
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-6">
                    <CardBody className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{method.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{method.title}</h3>
                          <p className="text-default-600 text-sm mb-2">{method.description}</p>
                          <p className="text-primary font-medium">{method.contact}</p>
                          <p className="text-default-500 text-xs mt-1">{method.response}</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className={`${title({ size: "lg" })} mb-6`}>
                Our Offices
              </h2>
              <div className="space-y-4">
                {officeLocations.map((office, index) => (
                  <Card key={index} className="p-6">
                    <CardBody className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{office.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{office.city}</h3>
                          <p className="text-default-600 text-sm">{office.address}</p>
                          <p className="text-default-600 text-sm">{office.country}</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className={`${title({ size: "lg" })} mb-6`}>
                Quick Links
              </h2>
              <div className="space-y-3">
                <Link href="#" className="block text-primary hover:underline">
                  📖 Documentation
                </Link>
                <Link href="#" className="block text-primary hover:underline">
                  🎥 Video Tutorials
                </Link>
                <Link href="#" className="block text-primary hover:underline">
                  ❓ FAQ
                </Link>
                <Link href="#" className="block text-primary hover:underline">
                  🐛 Report a Bug
                </Link>
                <Link href="#" className="block text-primary hover:underline">
                  💡 Feature Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Hours */}
      <div className="max-w-4xl mx-auto mt-16">
        <Card className="p-8">
          <div className="text-center">
            <h2 className={`${title({ size: "lg" })} mb-4`}>
              Support Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-default-600">24/7</p>
                <p className="text-default-500 text-sm">Response within 24 hours</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-default-600">Mon-Fri: 9AM-6PM PST</p>
                <p className="text-default-500 text-sm">Available in app</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-default-600">Mon-Fri: 9AM-5PM PST</p>
                <p className="text-default-500 text-sm">For Enterprise customers</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 