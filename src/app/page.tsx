'use client'

import { CalendarDays, GraduationCap, Users, Award, Phone, Mail, MapPin, Clock, ChevronRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

// Enhanced animation components
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
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
      transition={{ duration: 0.5, delay, ease: "backOut" }}
    >
      {children}
    </motion.div>
  )
}

const RotateIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: -5, opacity: 0 }}
      animate={inView ? { rotate: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Enhanced Navigation */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link className="flex items-center space-x-2 z-50" href="/">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Lincoln High</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'About', href: '#about' },
              { name: 'Programs', href: '#programs' },
              { name: 'News', href: '#news' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-primary">
              Student Portal
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              Apply Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6"
            >
              <div className="flex flex-col space-y-4">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Programs', href: '#programs' },
                  { name: 'News', href: '#news' },
                  { name: 'Contact', href: '#contact' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                  <Button variant="outline" className="w-full">
                    Student Portal
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section - Enhanced with gradient and parallax effect */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:100px_100px] opacity-10"></div>
          </div>
          
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
                <FadeIn>
                  <div className="space-y-4">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    >
                      Excellence in <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Education</span> Since 1952
                    </motion.h1>
                    <p className="max-w-[600px] text-lg text-gray-600">
                      Empowering students to achieve their full potential through innovative learning, dedicated faculty,
                      and a supportive community environment.
                    </p>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="flex flex-col gap-3 min-[400px]:flex-row">
                    <Button 
                      size="lg" 
                      className="h-12 px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-primary/30 transition-all"
                    >
                      Schedule a Tour
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="h-12 px-8 border-gray-300 hover:border-primary hover:text-primary"
                    >
                      Learn More
                    </Button>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.4}>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {[
                      { number: "1,200+", label: "Students" },
                      { number: "98%", label: "Graduation Rate" },
                      { number: "85%", label: "College Bound" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </FadeIn>
              </div>
              
              <ScaleIn>
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute -right-6 -top-6 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src="/school-building.jpg"
                      alt="Lincoln High School Campus"
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold">Our Beautiful Campus</h3>
                      <p className="text-sm opacity-90">State-of-the-art facilities for modern education</p>
                    </div>
                  </div>
                </motion.div>
              </ScaleIn>
            </div>
          </div>
        </section>

        {/* About Section with animated tabs */}
        <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Lincoln High</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  A tradition of academic excellence and character development
                </p>
              </div>
            </FadeIn>
            
            <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                <FadeIn>
                  <div className="space-y-6 sm:space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                    <p className="text-lg text-gray-600">
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
                          whileHover={{ y: -3 }}
                          className="flex items-start space-x-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                        >
                          <div className="flex-shrink-0 rounded-lg bg-primary/10 p-2">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-gray-700">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <div className="relative">
                    <div className="absolute -left-6 -top-6 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                    <div className="relative overflow-hidden rounded-3xl shadow-xl">
                      <Image
                        src="/classroom.jpg"
                        alt="Students in classroom"
                        width={700}
                        height={500}
                        className="h-auto w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-semibold">Interactive Learning</h3>
                        <p className="text-sm opacity-90">Engaging classrooms with modern technology</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section with animated cards */}
        <section id="programs" className="py-16 sm:py-20 lg:py-28 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Academic Programs</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
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
                  color: "bg-blue-100 text-blue-800"
                },
                {
                  title: "Liberal Arts",
                  description: "Comprehensive humanities and social sciences education",
                  items: ["AP Literature & Language", "World History & Government", "Foreign Languages", "Philosophy & Ethics"],
                  color: "bg-emerald-100 text-emerald-800"
                },
                {
                  title: "Arts & Athletics",
                  description: "Creative expression and physical development programs",
                  items: ["Visual & Performing Arts", "Varsity Sports Teams", "Music & Theater", "Health & Wellness"],
                  color: "bg-amber-100 text-amber-800"
                }
              ].map((program, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full transition-all hover:shadow-lg border-0 bg-white overflow-hidden group">
                      <div className={`h-2 w-full ${program.color}`}></div>
                      <CardHeader>
                        <div className={`mb-4 h-12 w-12 rounded-lg ${program.color} flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-gray-900">{program.title}</CardTitle>
                        <CardDescription className="text-gray-600">{program.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {program.items.map((item, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start"
                              whileHover={{ x: 5 }}
                            >
                              <span className={`mr-2 mt-1.5 h-2 w-2 rounded-full ${program.color.replace('100', '500')}`} />
                              <span className="text-gray-700">{item}</span>
                            </motion.li>
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

        {/* Stats Section with animated counters */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {[
                { number: 25, suffix: "+", label: "AP Courses" },
                { number: 12, suffix: ":1", label: "Teacher Ratio" },
                { number: 12, suffix: "M+", label: "Scholarships Earned" },
                { number: 50, suffix: "+", label: "Clubs & Activities" }
              ].map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
                      <AnimatedCounter from={0} to={stat.number} duration={1.5} delay={index * 0.2} />
                      {stat.suffix}
                    </div>
                    <div className="mt-2 text-sm font-medium uppercase tracking-wider opacity-80 md:text-base">
                      {stat.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* News Section with hover effects */}
        <section id="news" className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Latest <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">News & Events</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Stay updated with what's happening at Lincoln High
                </p>
              </div>
            </FadeIn>
            
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Science Fair Champions",
                  date: "March 15, 2024",
                  description: "Our students took first place in the regional science fair with their innovative renewable energy project.",
                  image: "/science-fair.jpg"
                },
                {
                  title: "Spring Musical: Hamilton",
                  date: "April 20-22, 2024",
                  description: "Don't miss our talented students perform Hamilton in the school auditorium. Tickets available at the main office.",
                  image: "/musical.jpg"
                },
                {
                  title: "Annual College Fair",
                  date: "May 5, 2024",
                  description: "Over 50 colleges and universities will be represented at our annual college fair in the gymnasium.",
                  image: "/college-fair.jpg"
                }
              ].map((news, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div whileHover={{ y: -8 }}>
                    <Card className="overflow-hidden transition-all hover:shadow-lg border-0 group">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={news.image}
                          alt={news.title}
                          width={400}
                          height={200}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-gray-900 group-hover:text-primary transition-colors">
                          {news.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          <div className="flex items-center">
                            <CalendarDays className="h-4 w-4 mr-1" />
                            {news.date}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
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
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-300 hover:border-primary hover:text-primary"
                >
                  View All News
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials with animated carousel */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Community Says</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Hear from students, parents, and alumni about their experiences
                </p>
              </div>
            </FadeIn>
            
            <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* Contact Section with enhanced form */}
        <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Lincoln High</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Get in touch with our school administration
                </p>
              </div>
            </FadeIn>
            
            <div className="mx-auto mt-12 grid max-w-6xl gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-12">
              <FadeIn>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-900">School Information</h3>
                    <div className="space-y-4">
                      {[
                        { icon: MapPin, text: "1234 Education Drive, Springfield, IL 62701" },
                        { icon: Phone, text: "(555) 123-4567" },
                        { icon: Mail, text: "info@lincolnhigh.edu" },
                        { icon: Clock, text: "Monday - Friday: 7:30 AM - 4:00 PM" }
                      ].map((item, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <div className="mt-1 rounded-full bg-primary/10 p-2 flex-shrink-0">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-gray-700">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Quick Links</h3>
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
                          className="group flex items-center space-x-2 text-gray-700 transition-colors hover:text-primary"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                          <span>{link}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-gray-900">Send us a Message</CardTitle>
                    <CardDescription className="text-gray-600">
                      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-primary/30 transition-all"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="h-80 w-full bg-gray-100 sm:h-96 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/map-pattern.svg')] opacity-10"></div>
          <div className="container h-full relative z-10 flex items-center justify-center">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Campus</h3>
              <p className="text-gray-600 mb-4">Schedule a tour to experience Lincoln High firsthand</p>
              <Button 
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-primary/30 transition-all"
              >
                Book a Tour
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t bg-white">
        <div className="container py-12 px-4 sm:px-6 lg:px-8 md:py-16">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
            <FadeIn>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Lincoln High</span>
                </div>
                <p className="text-sm text-gray-600">
                  Excellence in education since 1952. Preparing students for success in college, career, and life.
                </p>
                <div className="flex space-x-4 pt-2">
                  {['Twitter', 'Facebook', 'Instagram', 'YouTube'].map((social, index) => (
                    <Link 
                      key={index} 
                      href="#" 
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={social}
                    >
                      <span className="sr-only">{social}</span>
                      <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
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
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href="#"
                          className="text-sm text-gray-600 transition-colors hover:text-primary flex items-start group"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 mt-2 mr-2 transition-opacity group-hover:opacity-100"></span>
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
            <div className="mt-12 border-t border-gray-200 pt-8 text-center">
              <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Lincoln High School. All rights reserved.
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-2">
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
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

// Animated Counter Component
const AnimatedCounter = ({ from, to, duration, delay }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const end = to;
    const increment = end > start ? 1 : -1;
    const range = end - start;
    const step = Math.abs(Math.floor(duration * 1000 / range));

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += increment;
        setCount(start);
        if (start === end) {
          clearInterval(counter);
        }
      }, step);
      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [from, to, duration, delay]);

  return <span>{count}</span>;
};

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      quote: "Lincoln High provided me with the foundation to succeed in college and beyond. The teachers truly care about their students.",
      author: "Sarah Johnson",
      role: "Class of 2020, Stanford University",
      avatar: "/avatar1.jpg"
    },
    {
      quote: "The STEM program at Lincoln is exceptional. My daughter has grown so much in her problem-solving and critical thinking skills.",
      author: "Michael Chen",
      role: "Parent of current student",
      avatar: "/avatar2.jpg"
    },
    {
      quote: "As a transfer student, I was welcomed with open arms. The community here is supportive and inclusive.",
      author: "David Martinez",
      role: "Class of 2023",
      avatar: "/avatar3.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden rounded-xl bg-white p-8 shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <blockquote className="text-lg font-medium text-gray-700">
            "{testimonials[current].quote}"
          </blockquote>
          <div className="mt-6 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <Image
                src={testimonials[current].avatar}
                alt={testimonials[current].author}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ml-4 text-left">
              <div className="font-medium text-gray-900">{testimonials[current].author}</div>
              <div className="text-sm text-gray-600">{testimonials[current].role}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="mt-8 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-all ${current === index ? 'bg-primary w-6' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};