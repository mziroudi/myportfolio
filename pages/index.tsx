import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  const projects = [
    {
      id: 'darnjara',
      title: 'Darnjara.ma',
      description: 'E-commerce platform for interior doors and furniture',
      impact: '60% traffic increase',
      category: 'E-commerce',
      image: '/images/darnjara.jpg'
    },
    {
      id: 'primolegno',
      title: 'Primolegno.ma',
      description: 'Luxury interior design and furniture showcase',
      impact: '45% brand recognition boost',
      category: 'Luxury Brand',
      image: '/images/primolegno.jpg'
    },
    {
      id: 'touarga',
      title: 'Touarga Club',
      description: 'Sports club and fitness community platform',
      impact: '75% visitor increase',
      category: 'Sports & Fitness',
      image: '/images/touarga.jpg'
    },
    {
      id: 'amf',
      title: 'AMF Academy',
      description: 'Football academy and youth development program',
      impact: '200% media coverage increase',
      category: 'Education & Sports',
      image: '/images/amf.jpg'
    },
    {
      id: 'medicpro',
      title: 'MedicPro Healthcare',
      description: 'Healthcare management and patient care platform',
      impact: '180% traffic increase',
      category: 'Healthcare',
      image: '/images/medicpro.jpg'
    },
    {
      id: 'hss',
      title: 'HSS Maroc',
      description: 'Premium home security and automation systems',
      impact: '65% lead quality improvement',
      category: 'Smart Home',
      image: '/images/hss.jpg'
    }
  ];

  return (
    <>
      <Head>
        <title>Mouad Ziroudi - Senior Product Designer</title>
        <meta name="description" content="Senior Product Designer with 6+ years of experience creating exceptional digital experiences across e-commerce, healthcare, and luxury brands" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Mouad Ziroudi
            </h1>
            <p className="text-2xl lg:text-3xl text-slate-300 mb-8">
              Senior Product Designer
            </p>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
              6+ years of experience creating exceptional digital experiences that drive business results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:mouad.ziroudi@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="https://linkedin.com/in/mouad-ziroudi/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-400 hover:border-slate-300 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A selection of my recent work across diverse industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link key={project.id} href={`/case-study/${project.id}`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-xl mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-slate-600">
                        {project.title}
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-semibold">
                          {project.impact}
                        </span>
                        <span className="text-blue-600 font-medium group-hover:text-blue-700">
                          View Case Study →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-20 px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Expertise & Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">UX/UI Design</h3>
                <p className="text-slate-600">Creating intuitive, user-centered interfaces</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Product Strategy</h3>
                <p className="text-slate-600">Aligning design with business goals</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Design Systems</h3>
                <p className="text-slate-600">Building scalable, consistent design frameworks</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">User Research</h3>
                <p className="text-slate-600">Data-driven design decisions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Interested in collaborating? I'd love to hear about your project.
            </p>
            <a 
              href="mailto:mouad.ziroudi@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;