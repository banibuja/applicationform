import React, { useState } from 'react';

function Application() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    position: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    heardAbout: '',
    currentContract: '',
    noticePeriod: '',
    motivation: '',
    nextJobExpectations: '',
    professionalDevelopment: '',
    whatMotivatesYou: '',
    languages: {},
    taskManagement: 0,
    digitalCompetence: false,
    marketingStudies: false,
    graphicSkills: false,
    superpower: '',
    weakness: '',
    futureOpportunities: false,
    documents: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files : 
              value
    }));
  };

  const handleLanguageChange = (lang, level) => {
    setFormData(prev => ({
      ...prev,
      languages: {
        ...prev.languages,
        [lang]: level
      }
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Aplikimi u dërgua me sukses!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with progress */}
        <div className="bg-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-center text-white mb-2">
            {step === 1 ? 'A jeni gati të vazhdoni aplikimin?' : 
             step === 2 ? 'Zgjidhni Pozicionin' : 
             'Formulari i Aplikimit'}
          </h1>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4, 5].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${step >= stepNumber ? 'bg-white text-indigo-600 font-bold' : 'bg-indigo-400 text-white'}`}>
                    {stepNumber}
                  </div>
                  <span className="text-xs mt-1 text-white opacity-80">Hapi {stepNumber}</span>
                </div>
              ))}
            </div>
            <div className="w-full bg-indigo-400 rounded-full h-2.5">
              <div className="bg-white h-2.5 rounded-full" 
                   style={{ width: `${(step / 5) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div className="text-center">
              <p className="mb-8 text-lg text-gray-600">Filloni procesin e aplikimit</p>
              <button 
                onClick={nextStep}
                className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg"
              >
                Fillo
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Zgjidhni pozicionin e dëshiruar</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {['Full Stack Developer', 'Backend Developer', 'FrontEnd Developer'].map((position) => (
                  <div 
                    key={position}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, position }));
                      nextStep();
                    }}
                    className={`p-6 border-2 rounded-xl cursor-pointer transition duration-200 transform hover:scale-105
                      ${formData.position === position ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
                  >
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-lg text-center">{position}</h3>
                    <p className="text-gray-600 mt-2 text-center text-sm">Klikoni për të zgjedhur këtë pozicion</p>
                  </div>
                ))}
              </div>
              <button 
                onClick={prevStep}
                className="mt-6 px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-200"
              >
                Kthehu
              </button>
            </div>
          )}

          {step === 3 && (
            <form className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">Informacionet tuaja</h2>
              <p className="text-gray-600 text-center mb-6">Futni të dhënat tuaja të kontaktit në mënyrë që HR të mund t'ju kontaktojë</p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Emri*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mbiemri*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Numri i Telefonit*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Data e Lindjes*</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Si e morët vesh për këtë vend pune në këtë kompani?*
                </label>
                <input
                  type="text"
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="flex justify-between pt-6">
                <button 
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  Kthehu
                </button>
                <button 
                  onClick={nextStep}
                  className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                  Vazhdo
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <form className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Informacion shtesë</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  A jeni aktualisht në një kontratë pune të rregullt?*
                </label>
                <select
                  name="currentContract"
                  value={formData.currentContract}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Zgjidhni...</option>
                  <option value="Po">Po</option>
                  <option value="Jo">Jo</option>
                  <option value="Kontratë e përkohshme">Kontratë e përkohshme</option>
                  <option value="Freelancer">Freelancer</option>
                </select>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Çfarë periudhe njoftimi keni në punën tuaj aktuale?
                </label>
                <input
                  type="text"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="P.sh. 2 javë, 1 muaj..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Çfarë ju motivoi të aplikoni në këtë kompani?
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Shkruani përse dëshironi të punoni me ne..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Çfarë kërkoni në punën tuaj të ardhshme?
                </label>
                <textarea
                  name="nextJobExpectations"
                  value={formData.nextJobExpectations}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Përshkruani çfarë prisni nga puna e ardhshme..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sa i rëndësishëm është për ju zhvillimi i vazhdueshëm në profesionin tuaj?
                </label>
                <textarea
                  name="professionalDevelopment"
                  value={formData.professionalDevelopment}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Shpjegoni rëndësinë e zhvillimit profesional për ju..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Çfarë ju motivon?
                </label>
                <textarea
                  name="whatMotivatesYou"
                  value={formData.whatMotivatesYou}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Përshkruani cilët faktorë ju motivojnë në punë..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cilën nga gjuhët në vijim flisni, ju lutemi zgjidhni dhe vlerësoni nivelin tuaj:
                </label>
                <div className="grid gap-4 mt-4">
                  {['Anglisht', 'Shqip', 'Gjermanisht', 'Frengjisht', 'Italisht'].map((lang) => (
                    <div key={lang} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                      <span className="w-1/4 font-medium">{lang}</span>
                      <select
                        onChange={(e) => handleLanguageChange(lang, e.target.value)}
                        value={formData.languages[lang] || ''}
                        className="w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Zgjidhni nivelin</option>
                        <option value="fillestar">Fillestar</option>
                        <option value="mesatar">Mesatar</option>
                        <option value="i avancuar">I avancuar</option>
                        <option value="amilindje">Amilindje</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button 
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  Kthehu
                </button>
                <button 
                  onClick={nextStep}
                  className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                  Vazhdo
                </button>
              </div>
            </form>
          )}

          {step === 5 && (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Kualifikimet dhe aftësitë tuaja</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Menaxhimi i detyrave (vlerësoni me yje)
                </label>
                <div className="flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, taskManagement: star }))}
                      className="text-3xl mx-1 focus:outline-none"
                    >
                      {star <= formData.taskManagement ? '★' : '☆'}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Dobët</span>
                  <span>Shkëlqyeshëm</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="block text-sm font-medium text-gray-700 mb-3">Aftësitë tuaja:</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      id="digitalCompetence"
                      name="digitalCompetence"
                      checked={formData.digitalCompetence}
                      onChange={handleChange}
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="digitalCompetence" className="ml-3 block text-sm text-gray-700">
                      Kompetenca dixhitale
                    </label>
                  </div>

                  <div className="flex items-center bg-white p-3 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      id="marketingStudies"
                      name="marketingStudies"
                      checked={formData.marketingStudies}
                      onChange={handleChange}
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="marketingStudies" className="ml-3 block text-sm text-gray-700">
                      Studime në Marketing
                    </label>
                  </div>

                  <div className="flex items-center bg-white p-3 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      id="graphicSkills"
                      name="graphicSkills"
                      checked={formData.graphicSkills}
                      onChange={handleChange}
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="graphicSkills" className="ml-3 block text-sm text-gray-700">
                      Aftësitë grafike
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cila është superfuqia juaj?
                </label>
                <input
                  type="text"
                  name="superpower"
                  value={formData.superpower}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Përshkruani cilën aftësi e konsideroni si forcën tuaj më të madhe..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cila është kriptoniti/dobësia juaj?
                </label>
                <input
                  type="text"
                  name="weakness"
                  value={formData.weakness}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Përshkruani cilën zonë mendoni se duhet të përmirësoni..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="futureOpportunities"
                      name="futureOpportunities"
                      checked={formData.futureOpportunities}
                      onChange={handleChange}
                      className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                  </div>
                  <label htmlFor="futureOpportunities" className="ml-3 block text-sm text-gray-700">
                    Kompania mund të më informojë për mundësitë e ardhshme të punësimit deri në 1 vit.
                  </label>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Ngarkoni dokumentet tuaja (CV, letër motivuese, certifikime)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Ngarko një skedar</span>
                        <input
                          id="file-upload"
                          name="documents"
                          type="file"
                          onChange={handleChange}
                          multiple
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">ose lëvizni dhe lini këtu</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX deri në 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <button 
                  onClick={prevStep}
                  type="button"
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  Kthehu
                </button>
                <button 
                  type="submit"
                  className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg"
                >
                  Dërgo Aplikimin
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Application;