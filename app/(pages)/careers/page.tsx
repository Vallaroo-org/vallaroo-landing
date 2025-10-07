import React from 'react';
import Link from 'next/link';
import IconifyIconClient from '@/src/IconifyIconClient';

export default function Careers() {
  const jobPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      type: "Full-Time",
      department: "Engineering",
      location: "Remote",
      description: "Join our engineering team to build scalable shop management solutions.",
      requirements: ["5+ years experience", "React, Node.js", "Database design"]
    },
    {
      id: 2,
      title: "Product Manager",
      type: "Full-Time", 
      department: "Product",
      location: "Hybrid",
      description: "Drive product strategy and roadmap for our shop management platform.",
      requirements: ["3+ years PM experience", "B2B SaaS experience", "Analytical mindset"]
    },
    {
      id: 3,
      title: "Customer Success Manager",
      type: "Full-Time",
      department: "Customer Success",
      location: "Remote",
      description: "Help our customers succeed with Vallaroo and grow their businesses.",
      requirements: ["Customer-facing experience", "Shop management knowledge", "Problem-solving skills"]
    },
    {
      id: 4,
      title: "UI/UX Designer",
      type: "Full-Time",
      department: "Design",
      location: "Remote",
      description: "Create beautiful and intuitive user experiences for our platform.",
      requirements: ["3+ years design experience", "Figma expertise", "User research skills"]
    },
    {
      id: 5,
      title: "Marketing Specialist",
      type: "Full-Time",
      department: "Marketing",
      location: "Hybrid",
      description: "Drive growth through content marketing and digital campaigns.",
      requirements: ["Marketing experience", "Content creation", "Analytics knowledge"]
    },
    {
      id: 6,
      title: "DevOps Engineer",
      type: "Full-Time",
      department: "Engineering",
      location: "Remote",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["AWS/Azure experience", "Docker, Kubernetes", "CI/CD pipelines"]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "We offer competitive compensation packages with equity options."
    },
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Work from anywhere with flexible hours and home office setup."
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Annual learning budget and conference attendance opportunities."
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs."
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team building events and company retreats."
    },
    {
      icon: "⚡",
      title: "Fast Growth",
      description: "Be part of a rapidly growing company with exciting opportunities."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="text-center">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Careers
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5">
              Join the Vallaroo Team
            </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white max-w-3xl mx-auto">
              We're building the future of shop management. Join us in empowering thousands of businesses 
              worldwide with powerful, intuitive tools that help them grow and succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🚀 Fast-growing startup
              </span>
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🌍 Remote-first culture
              </span>
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                💡 Innovation-focused
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-12.5 lg:py-25 md:py-22.5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work at Vallaroo?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just building software – we're building the future of retail technology. 
              Join a team that's passionate about making a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-12.5 lg:py-25 md:py-22.5 bg-body-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to make an impact? Check out our current openings and find your perfect role.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobPositions.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      📍 {job.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {job.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex w-full justify-center py-3 px-6 bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary/90"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see a position that fits? We're always looking for great talent.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-3.5 px-7.5 bg-white border border-primary font-medium rounded-2xl text-primary transition-all duration-300 hover:bg-primary hover:text-dark"
            >
              Send Us Your Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12.5 lg:py-25 md:py-22.5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Vallaroo, we believe that great products come from great teams. 
              We foster a culture of innovation, collaboration, and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-semibold mb-2">Customer-First</h4>
                    <p className="text-gray-600">Everything we do is focused on solving real problems for our customers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="font-semibold mb-2">Innovation</h4>
                    <p className="text-gray-600">We constantly push boundaries and explore new ways to improve our platform.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-semibold mb-2">Collaboration</h4>
                    <p className="text-gray-600">We work together as one team, sharing knowledge and supporting each other.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📈</div>
                  <div>
                    <h4 className="font-semibold mb-2">Growth</h4>
                    <p className="text-gray-600">We invest in our team's growth and provide opportunities for advancement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">What Our Team Says</h3>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "Working at Vallaroo has been an incredible journey. The team is passionate about 
                building products that truly help small businesses succeed. The remote-first culture 
                gives me the flexibility I need while still feeling connected to the team."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-gray-600 text-sm">Senior Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12.5 lg:py-25 md:py-22.5 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-dark">
              Ready to Join Our Mission?
            </h2>
            <p className="text-lg mb-8 text-dark/80">
              Help us build the future of shop management. We're looking for passionate, 
              talented individuals who want to make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex py-3.5 px-7.5 bg-white font-medium rounded-2xl text-primary transition-all duration-300 hover:bg-gray-100"
              >
                View Open Positions
              </Link>
              <Link
                href="/about"
                className="inline-flex py-3.5 px-7.5 border border-white font-medium rounded-2xl text-white transition-all duration-300 hover:bg-white/10"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}