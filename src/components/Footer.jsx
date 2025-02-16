import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="border-t border-gray-200 pt-16 sm:p-16">
            <div className="grid grid-cols-4 gap-8 mb-12">
                <div>
                    <h4 className="font-bold text-lg mb-4 text-green-500">GreenSpace</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4 text-green-500">Resources</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Help Center
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4 text-green-500">Legal</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                                Cookie Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4 text-green-500">Connect</h4>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="sm:w-10 sm:h-10 bg-emerald-50 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors"
                        >
                            <img src='https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebdd90aef8ef8c749e848_X-EverythingApp-Logo-Twitter.jpg' className='rounded-full'/>
                        </a>
                        <a
                            href="#"
                            className="sm:w-10 sm:h-10 bg-emerald-50 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors"
                        >
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' className='rounded-full'/>
                        </a>
                        <a
                            href="#"
                            className="sm:w-10 sm:h-10 bg-emerald-50 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors"
                        >
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' className="rounded-full"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 pt-8 text-center text-green-600 ">
                <p>© 2025 GreenSpace. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
