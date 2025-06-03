'use client'

import { CalendarDays, GraduationCap, Users, Award, Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Animation components
const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

const ScaleIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center px-4 sm:px-6 lg:px-8">
          <div className="mr-4 flex items-center">
            <Link className="flex items-center space-x-2" href="/">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold">Lincoln High</span>
            </Link>
          </div>
          <nav className="hidden flex-1 items-center justify-center space-x-6 text-sm font-medium md:flex lg:space-x-8">
            <Link href="#about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#programs" className="transition-colors hover:text-primary">
              Programs
            </Link>
            <Link href="#news" className="transition-colors hover:text-primary">
              News
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Student Portal
            </Button>
            <Button size="sm" className="hidden sm:flex">
              Apply Now
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-24 lg:py-32">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
          
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
                <FadeIn>
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Excellence in <span className="text-primary">Education</span> Since 1952
                    </h1>
                    <p className="max-w-[600px] text-lg text-muted-foreground">
                      Empowering students to achieve their full potential through innovative learning, dedicated faculty,
                      and a supportive community environment.
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="flex flex-col gap-3 min-[400px]:flex-row">
                    <Button size="lg" className="h-12 px-8">
                      Schedule a Tour
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8">
                      Learn More
                    </Button>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.4}>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="rounded-lg border bg-background p-4 text-center shadow-sm transition-all hover:shadow-md">
                      <div className="text-2xl font-bold text-primary">1,200+</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                    <div className="rounded-lg border bg-background p-4 text-center shadow-sm transition-all hover:shadow-md">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Graduation Rate</div>
                    </div>
                    <div className="rounded-lg border bg-background p-4 text-center shadow-sm transition-all hover:shadow-md">
                      <div className="text-2xl font-bold text-primary">85%</div>
                      <div className="text-sm text-muted-foreground">College Bound</div>
                    </div>
                  </div>
                </FadeIn>
              </div>
              
              <ScaleIn>
                <div className="relative">
                  <div className="absolute -right-6 -top-6 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Lincoln High School Campus"
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 lg:py-28">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About <span className="text-primary">Lincoln High School</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  A tradition of academic excellence and character development
                </p>
              </div>
            </FadeIn>
            
            <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                <FadeIn>
                  <div className="space-y-6 sm:space-y-8">
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <p className="text-lg text-muted-foreground">
                      Lincoln High School is committed to providing a comprehensive educational experience that prepares
                      students for success in college, career, and life. We foster critical thinking, creativity, and
                      character development in a safe and inclusive environment.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { icon: Award, text: "State Championship Athletics" },
                        { icon: Users, text: "Small Class Sizes" },
                        { icon: GraduationCap, text: "AP & Honors Programs" },
                        { icon: CalendarDays, text: "Year-Round Support" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -2 }}
                          className="flex items-center space-x-3 rounded-lg p-3 transition-all hover:bg-slate-50"
                        >
                          <item.icon className="h-6 w-6 text-primary" />
                          <span>{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="relative">
                    <div className="absolute -left-6 -top-6 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <Image
                        src="/placeholder.svg?height=500&width=700"
                        alt="Students in classroom"
                        width={700}
                        height={500}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="bg-slate-50 py-16 sm:py-20 lg:py-28">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our <span className="text-primary">Academic Programs</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Comprehensive curriculum designed to challenge and inspire
                </p>
              </div>
            </FadeIn>
            
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "STEM Excellence",
                  description: "Advanced science, technology, engineering, and mathematics programs",
                  items: ["AP Physics & Chemistry", "Computer Science & Robotics", "Engineering Design", "Advanced Mathematics"],
                  color: "bg-blue-100"
                },
                {
                  title: "Liberal Arts",
                  description: "Comprehensive humanities and social sciences education",
                  items: ["AP Literature & Language", "World History & Government", "Foreign Languages", "Philosophy & Ethics"],
                  color: "bg-emerald-100"
                },
                {
                  title: "Arts & Athletics",
                  description: "Creative expression and physical development programs",
                  items: ["Visual & Performing Arts", "Varsity Sports Teams", "Music & Theater", "Health & Wellness"],
                  color: "bg-amber-100"
                }
              ].map((program, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="h-full transition-all hover:shadow-lg">
                      <CardHeader>
                        <div className={`mb-4 h-12 w-12 rounded-full ${program.color} flex items-center justify-center`}>
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <CardTitle>{program.title}</CardTitle>
                        <CardDescription>{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {program.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {[
                { number: "25+", label: "AP Courses" },
                { number: "1:12", label: "Teacher Ratio" },
                { number: "$12M", label: "Scholarships Earned" },
                { number: "50+", label: "Clubs & Activities" }
              ].map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-3xl font-bold sm:text-4xl md:text-5xl">{stat.number}</div>
                    <div className="mt-2 text-sm font-medium uppercase tracking-wider opacity-80 md:text-base">
                      {stat.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 sm:py-20 lg:py-28">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Latest <span className="text-primary">News & Events</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Stay updated with what's happening at Lincoln High
                </p>
              </div>
            </FadeIn>
            
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Science Fair Champions",
                  date: "March 15, 2024",
                  description: "Our students took first place in the regional science fair with their innovative renewable energy project."
                },
                {
                  title: "Spring Musical: Hamilton",
                  date: "April 20-22, 2024",
                  description: "Don't miss our talented students perform Hamilton in the school auditorium. Tickets available at the main office."
                },
                {
                  title: "Annual College Fair",
                  date: "May 5, 2024",
                  description: "Over 50 colleges and universities will be represented at our annual college fair in the gymnasium."
                }
              ].map((news, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt={news.title}
                          width={400}
                          height={200}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{news.title}</CardTitle>
                        <CardDescription>{news.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {news.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn delay={0.3}>
              <div className="mt-10 text-center sm:mt-12">
                <Button variant="outline" size="lg">
                  View All News
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-slate-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our <span className="text-primary">Community Says</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Hear from students, parents, and alumni about their experiences
                </p>
              </div>
            </FadeIn>
            
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  quote: "Lincoln High provided me with the foundation to succeed in college and beyond. The teachers truly care about their students.",
                  author: "Sarah Johnson",
                  role: "Class of 2020, Stanford University"
                },
                {
                  quote: "The STEM program at Lincoln is exceptional. My daughter has grown so much in her problem-solving and critical thinking skills.",
                  author: "Michael Chen",
                  role: "Parent of current student"
                },
                {
                  quote: "As a transfer student, I was welcomed with open arms. The community here is supportive and inclusive.",
                  author: "David Martinez",
                  role: "Class of 2023"
                }
              ].map((testimonial, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="rounded-xl border bg-white p-6 shadow-sm">
                    <div className="mb-4 text-lg font-medium text-muted-foreground">
                      "{testimonial.quote}"
                    </div>
                    <div className="mt-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-medium">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 lg:py-28">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact <span className="text-primary">Lincoln High</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Get in touch with our school administration
                </p>
              </div>
            </FadeIn>
            
            <div className="mx-auto mt-12 grid max-w-6xl gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-12">
              <FadeIn>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">School Information</h3>
                    <div className="space-y-4">
                      {[
                        { icon: MapPin, text: "1234 Education Drive, Springfield, IL 62701" },
                        { icon: Phone, text: "(555) 123-4567" },
                        { icon: Mail, text: "info@lincolnhigh.edu" },
                        { icon: Clock, text: "Monday - Friday: 7:30 AM - 4:00 PM" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="mt-1 rounded-full bg-primary/10 p-2">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Quick Links</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        "Student Handbook",
                        "Academic Calendar",
                        "Parent Portal",
                        "Athletics Schedule",
                        "Lunch Menu",
                        "Transportation"
                      ].map((link, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="group flex items-center space-x-2 text-muted-foreground transition-colors hover:text-primary"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                          <span>{link}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-80 w-full bg-slate-100 sm:h-96">
          <div className="h-full w-full">
            {/* Replace with actual map component */}
            <div className="flex h-full items-center justify-center bg-slate-200">
              <span className="text-lg font-medium text-muted-foreground">School Location Map</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-12 px-4 sm:px-6 lg:px-8 md:py-16">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
            <FadeIn>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold">Lincoln High</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Excellence in education since 1952. Preparing students for success in college, career, and life.
                </p>
                <div className="flex space-x-4 pt-2">
                  {[/* Social icons would go here */].map((icon, index) => (
                    <Link key={index} href="#" className="text-muted-foreground hover:text-primary">
                      {/* Social icon component */}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            {[
              {
                title: "Academics",
                links: ["Course Catalog", "AP Programs", "Graduation Requirements", "Academic Support"]
              },
              {
                title: "Student Life",
                links: ["Clubs & Organizations", "Athletics", "Student Government", "Events Calendar"]
              },
              {
                title: "Resources",
                links: ["Library", "Counseling Services", "Health Services", "Technology Support"]
              }
            ].map((section, index) => (
              <FadeIn key={index} delay={(index + 1) * 0.1}>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href="#"
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Lincoln High School. All rights reserved.</p>
              <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2">
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-primary">
                  Accessibility
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  )
}