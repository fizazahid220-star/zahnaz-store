import Header from '../components/Header'
export default function Contact(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container py-10">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-gray-400 mt-2">For orders message us on WhatsApp: <a className="text-blue-400" href="https://wa.me/923001234567">+92 300 1234567</a></p>
        <p className="text-gray-400">Instagram: <a className="text-blue-400" href="#">@zahnaz</a></p>
      </main>
    </div>
  )
}
