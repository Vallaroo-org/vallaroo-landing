"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import {Accordion, AccordionItem} from "@nextui-org/accordion";
// import json from "./lottie.json";
import Lottie from "react-lottie";

export default function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        // animationData: json,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const features = [
        {
            title: "Shop Management",
            description: "Create, manage, and monitor multiple shops with approval workflows and status tracking.",
            icon: "🏪",
            color: "primary"
        },
        {
            title: "Product Catalog",
            description: "Organize products with categories, manage inventory, and track stock levels in real-time.",
            icon: "📦",
            color: "secondary"
        },
        {
            title: "Customer Management",
            description: "Build customer relationships with detailed profiles, order history, and communication tools.",
            icon: "👥",
            color: "success"
        },
        {
            title: "Order Processing",
            description: "Streamline order management from creation to fulfillment with automated workflows.",
            icon: "🛒",
            color: "warning"
        },
        {
            title: "Analytics & Reporting",
            description: "Get insights into sales performance, customer behavior, and business metrics.",
            icon: "📊",
            color: "danger"
        },
        {
            title: "Multi-tenant Architecture",
            description: "Secure, scalable platform supporting multiple businesses with role-based access control.",
            icon: "🔐",
            color: "default"
        }
    ];

    const benefits = [
        {
            title: "Save Time",
            description: "Automate routine tasks and streamline operations to focus on growing your business."
        },
        {
            title: "Increase Sales",
            description: "Better inventory management and customer insights lead to improved sales performance."
        },
        {
            title: "Reduce Costs",
            description: "Eliminate manual processes and reduce operational overhead with integrated tools."
        },
        {
            title: "Scale Easily",
            description: "Cloud-based platform that grows with your business needs and requirements."
        }
    ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-8 py-16 md:py-24 px-4">
        <div className="inline-block max-w-4xl text-center justify-center">
          <h1 className={title({ size: "lg" })}>
            Complete&nbsp;
            <span className={title({ color: "violet", size: "lg" })}>
              Shop Management&nbsp;
            </span>
            Platform
          </h1>
          <div className={subtitle({ class: "mt-6 text-lg" })}>
            Manage your shop, products, customers, and orders all in one powerful platform. 
            Built for modern businesses that want to scale efficiently.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "lg",
            })}
            href={siteConfig.links.demo}
          >
            Start Free Trial
          </Link>
          <Link
            className={buttonStyles({ 
              variant: "bordered", 
              radius: "full",
              size: "lg"
            })}
            href="#features"
          >
            Learn More
          </Link>
        </div>

        {/* <div className="mt-8">
          <Lottie 
            options={defaultOptions}
            height={400}
            width={600}
            isStopped={false}
            isPaused={false}
          />
        </div> */}
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-default-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={title({ size: "lg" })}>
              Everything You Need to Run Your Shop
            </h2>
            <p className={subtitle({ class: "mt-4" })}>
              Powerful features designed to streamline your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="flex gap-3">
                  <div className="text-3xl">{feature.icon}</div>
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-default-600">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={title({ size: "lg" })}>
              Why Choose Vallaroo?
            </h2>
            <p className={subtitle({ class: "mt-4" })}>
              Built with modern technology and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-default-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-default-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={title({ size: "lg" })}>
              Built with Modern Technology
            </h2>
            <p className={subtitle({ class: "mt-4" })}>
              Enterprise-grade architecture for reliability and scalability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">☕</div>
              <h3 className="font-semibold">Java 21</h3>
              <p className="text-sm text-default-600">Spring Boot 3.x</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🗄️</div>
              <h3 className="font-semibold">PostgreSQL</h3>
              <p className="text-sm text-default-600">Reliable Database</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-semibold">Redis</h3>
              <p className="text-sm text-default-600">Fast Caching</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">☁️</div>
              <h3 className="font-semibold">AWS</h3>
              <p className="text-sm text-default-600">Cloud Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={title({ size: "lg" })}>
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="How does Vallaroo help my business?" title="How does Vallaroo help my business?">
              Vallaroo streamlines your entire shop management process. From inventory tracking to customer management, 
              order processing to analytics - everything is integrated in one platform. This saves time, reduces errors, 
              and provides valuable insights to help you make better business decisions.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Is Vallaroo suitable for multiple shops?" title="Is Vallaroo suitable for multiple shops?">
              Absolutely! Vallaroo is built with multi-tenant architecture, meaning you can manage multiple shops 
              from a single platform. Each shop can have its own products, customers, and settings while sharing 
              the same powerful management tools.
            </AccordionItem>
            <AccordionItem key="3" aria-label="What kind of support do you provide?" title="What kind of support do you provide?">
              We provide comprehensive support including documentation, video tutorials, email support, and live chat. 
              Our team is dedicated to helping you succeed with Vallaroo and ensure smooth operations for your business.
            </AccordionItem>
            <AccordionItem key="4" aria-label="Can I integrate with other systems?" title="Can I integrate with other systems?">
              Yes! Vallaroo provides REST APIs that allow you to integrate with your existing systems, 
              e-commerce platforms, accounting software, and more. We also support webhooks for real-time data synchronization.
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={title({ size: "lg" })}>
            Ready to Transform Your Shop Management?
          </h2>
          <p className={subtitle({ class: "mt-4 mb-8" })}>
            Join thousands of businesses that trust Vallaroo to manage their operations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                size: "lg",
              })}
              href={siteConfig.links.demo}
            >
              Start Free Trial
            </Link>
            <Link
              className={buttonStyles({ 
                variant: "bordered", 
                radius: "full",
                size: "lg"
              })}
              href={siteConfig.links.docs}
            >
              View Documentation
            </Link>
          </div>

          <div className="mt-8">
            <Snippet hideCopyButton hideSymbol variant="bordered">
              <span>
                Try Vallaroo today and see the difference in your shop management
              </span>
            </Snippet>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">Vallaroo</h3>
              <p className="text-sm text-default-600">Complete shop management platform</p>
            </div>
            
            <div className="flex gap-4">
              <Link
                isExternal
                className={buttonStyles({ variant: "light", radius: "full" })}
                href={siteConfig.links.github}
              >
                <GithubIcon size={20} />
                GitHub
              </Link>
              <Link
                isExternal
                className={buttonStyles({ variant: "light", radius: "full" })}
                href={siteConfig.links.docs}
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
