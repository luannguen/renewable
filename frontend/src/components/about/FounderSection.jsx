import Image from 'next/image';

const FounderSection = () => {
  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Quote Section */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="max-w-xl">
              
              {/* Section Header */}
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full mb-4">
                  Our Vision
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Leading the Way to a 
                  <span className="text-emerald-600"> Sustainable Future</span>
                </h2>
              </div>

              {/* Quote Box */}
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "We pride ourselves in offering products and solutions that will reduce carbon and support sustainable business. We help you to cut carbon, cut costs and Go Green."
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-emerald-600 font-bold text-lg">N</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">Nathan Badger</p>
                    <p className="text-emerald-600 font-medium">Founder & CEO</p>
                  </div>
                </div>

                {/* Decorative Arrow */}
                <div className="hidden lg:block absolute right-[-20px] top-1/2 transform -translate-y-1/2">
                  <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent"></div>
                  <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[16px] border-l-gray-100 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent"></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full transform scale-110 opacity-20"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/v2/nathan-badger-founder-of-optimise-energy.png"
                    alt="Nathan Badger - CEO and Founder of Renewable Hub"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                </div>

                {/* Floating Achievement Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>

                {/* Floating Year Badge */}
                <div className="absolute -top-4 -right-4 bg-emerald-600 text-white rounded-full p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold">EST.</div>
                    <div className="text-xs">2014</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-emerald-200 rounded-full opacity-30"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-emerald-300 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="rgba(16, 185, 129, 0.1)"></path>
        </svg>
      </div>
    </section>
  );
};

export default FounderSection;
