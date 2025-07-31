import Link from "next/link";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function Home() {
  return (
    <>
      <div className="bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-slate-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-500 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-6 py-24 relative">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-white rounded-lg transform rotate-45 shadow-inner"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                {/* Floating elements around logo */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            <h1 className="text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
              Investment <span className="text-slate-700 relative">
                Insights
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full opacity-70"></div>
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A thoughtful approach to financial analysis and investment methodology development.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                href="/articles"
                className="px-8 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-sm"
              >
                Browse Articles
              </Link>
              <Link
                href="/dashboard"
                className="px-8 py-3 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-all duration-300"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-slate-800 mb-6">Investment Philosophy</h2>
            <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
              A systematic approach to long-term, analysis-driven investing built on patience and disciplined thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200">
                <div className="text-3xl">⏳</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Patience</h3>
              <p className="text-slate-600 leading-relaxed">
                Markets reward those who wait. Every decision is made with a long-term perspective in mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200">
                <div className="text-3xl">📊</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Every investment thesis is grounded in thorough research and systematic evaluation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-200">
                <div className="text-3xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Long-term</h3>
              <p className="text-slate-600 leading-relaxed">
                Building wealth requires time. Focus on fundamental value over short-term market noise.
              </p>
            </div>
          </div>

          <div className="bg-slate-300 p-10 rounded-2xl text-center max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-slate-800 mb-4">
              Learning through accountability
            </p>
            <p className="text-slate-700 leading-relaxed">
              Every analysis includes trackable predictions to measure accuracy and improve decision-making over time.
            </p>
          </div>
        </div>
      </div>
      
      <NewsletterSignup />
    </>
  );
}
