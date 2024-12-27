import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">akuaAddis Factory</h3>
            <p className="text-blue-200">Premium water production from the Ethiopian highlands.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#process" className="text-blue-200 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="#products" className="text-blue-200 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Factory Information</h4>
            <p className="text-blue-200">123 Highland Industrial Zone</p>
            <p className="text-blue-200">Addis Ababa, Ethiopia</p>
            <p className="text-blue-200">Phone: +251 123 456 789</p>
            <p className="text-blue-200">Email: factory@akuaaddis.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-200">&copy; {new Date().getFullYear()} akuaAddis Water Factory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

