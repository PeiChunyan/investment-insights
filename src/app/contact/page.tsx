export default function Contact() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-slate-800 mb-12 tracking-tight">Contact</h1>
          
          <div className="bg-slate-200 p-12 rounded-2xl">
            <div className="w-16 h-16 bg-slate-300 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <div className="text-2xl">📧</div>
            </div>
            
            <p className="text-lg text-slate-700 mb-6">
              Questions, feedback, or collaboration opportunities
            </p>
            
            <a 
              href="mailto:maya.peichunyan@gmail.com"
              className="text-xl font-medium text-slate-800 hover:text-slate-600 transition-colors underline decoration-2 decoration-slate-400 hover:decoration-slate-600"
            >
              maya.peichunyan@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}