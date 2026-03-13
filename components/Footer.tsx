export default function Footer() {
  return (
    <footer className="border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-xl mb-6">
             ChatFlow
          </div>
          <p className="text-slate-500 text-sm">
            The world&apos;s easiest way to build and deploy AI chatbots.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Product</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-500">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-500">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Legal</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Contact</h4>
          <p className="text-slate-400 text-sm mb-4">support@chatflow.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-900 text-center text-slate-600 text-sm">
        © 2026 ChatFlow AI. All rights reserved.
      </div>
    </footer>
  );
}