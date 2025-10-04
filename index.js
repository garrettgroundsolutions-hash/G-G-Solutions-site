export default function Home() {
  return (
    <div className=\"min-h-screen bg-gray-50 text-gray-900\"> 
      <header className=\"bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center\"> 
        <h1 className=\"text-5xl font-bold mb-4\">G.G. Solutions</h1>
        <p className=\"text-xl mb-6\">Extraordinary services, amazing products, and expert guidance</p>
        <button className=\"bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100\">Get Started</button>
      </header>
      <section className=\"max-w-4xl mx-auto py-16 px-6 text-center\">
        <h2 className=\"text-3xl font-bold mb-4\">About Us</h2>
        <p className=\"text-lg text-gray-600\">At G.G. Solutions, we specialize in delivering extraordinary services, offering amazing products, and providing expert logistical and consulting support to help businesses and individuals succeed.</p>
      </section>
      <section className=\"bg-white py-16 px-6\"> 
        <div className=\"max-w-5xl mx-auto text-center\"> 
          <h2 className=\"text-3xl font-bold mb-10\">Our Services</h2>
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\"> 
            <div className=\"p-6 bg-gray-100 rounded-2xl shadow-md\"> 
              <h3 className=\"text-xl font-semibold mb-2\">Extraordinary Services</h3>
              <p className=\"text-gray-600\">Customized and high-quality services tailored to exceed expectations.</p>
            </div>
            <div className=\"p-6 bg-gray-100 rounded-2xl shadow-md\"> 
              <h3 className=\"text-xl font-semibold mb-2\">Amazing Products</h3>
              <p className=\"text-gray-600\">Unique, reliable, and impactful products designed to inspire and deliver value.</p>
            </div>
            <div className=\"p-6 bg-gray-100 rounded-2xl shadow-md\"> 
              <h3 className=\"text-xl font-semibold mb-2\">Logistics & Consulting</h3>
              <p className=\"text-gray-600\">Efficient logistics solutions and professional consulting to guide your success.</p>
            </div>
          </div>
        </div>
      </section>
      <section className=\"bg-gray-50 py-16 px-6\"> 
        <div className=\"max-w-3xl mx-auto text-center\"> 
          <h2 className=\"text-3xl font-bold mb-6\">Contact Us</h2>
          <p className=\"text-lg text-gray-600 mb-8\">Ready to take the next step? Reach out today.</p>
          <form className=\"space-y-4\"> 
            <input type=\"text\" placeholder=\"Your Name\" className=\"w-full p-3 border rounded-xl\" /> 
            <input type=\"email\" placeholder=\"Your Email\" className=\"w-full p-3 border rounded-xl\" /> 
            <textarea placeholder=\"Your Message\" className=\"w-full p-3 border rounded-xl\"></textarea>
            <button type=\"submit\" className=\"bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700\">Send Message</button>
          </form>
        </div>
      </section>
      <footer className=\"bg-gray-900 text-gray-400 py-6 text-center\"> 
        <p>© {new Date().getFullYear()} G.G. Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}