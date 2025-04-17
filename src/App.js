import React, { useState } from 'react';

function Application() {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    workExperience: '',
    educationLevel: '',
    salaryExpectations: '',
    availability: '',
    languages: {},
    taskManagement: 0,
    digitalCompetence: false,
    marketingStudies: false,
    graphicSkills: false,
    superpower: '',
    weakness: '',
    futureOpportunities: false,
    documentsVerified: false,
    documents: null,
    teamPreference: '',
    greatestAchievement: '',
    stressManagement: '',
    communicationStyle: '',
    expectationsHandling: '',
    professionalMistake: '',
    successFeeling: '',
    creativeProject: '',
    shortLongTermBalance: '',
    uncertaintyReaction: '',
    internationalTeamChallenge: '',
    detailOrBigPicture: '',
    changeIndustry: '',
    workValues: '',
    conflictResolution: ''
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

  const nextStep = () => {
    if (step === 4 && subStep < additionalQuestions.length - 1) {
      setSubStep(subStep + 1);
    } else if (step === 5 && subStep < backendQuestions.length - 1) {
      setSubStep(subStep + 1);
    } else if (step === 6 && subStep < frontendQuestions.length - 1) {
      setSubStep(subStep + 1);
    } else if (step === 7 && subStep < qualificationQuestions.length - 1) {
      setSubStep(subStep + 1);
    } else {
      setStep(step + 1);
      setSubStep(0);
    }
  };
  
  const prevStep = () => {
    if (step === 4 && subStep > 0) {
      setSubStep(subStep - 1);
    } else if (step === 5 && subStep > 0) {
      setSubStep(subStep - 1);
    } else if (step === 6 && subStep > 0) {
      setSubStep(subStep - 1);
    } else if (step === 7 && subStep > 0) {
      setSubStep(subStep - 1);
    } else if (step > 1) {
      setStep(step - 1);
      setSubStep(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };

  const additionalQuestions = [
    {
      question: "A jeni aktualisht në një kontratë pune të rregullt?*",
      name: "currentContract",
      type: "select",
      options: ["Po", "Jo", "Kontratë e përkohshme", "Freelancer", "Student"],
      required: true
    },
    // {
    //   question: "Çfarë periudhe njoftimi keni në punën tuaj aktuale?",
    //   name: "noticePeriod",
    //   type: "text",
    //   placeholder: "P.sh. 2 javë, 1 muaj...",
    //   required: false
    // },
    {
      question: "Përshkruani përvojën tuaj të punës (vite dhe pozicione)*",
      name: "workExperience",
      type: "textarea",
      required: true
    },
    {
      question: "Niveli i arsimimit*",
      name: "educationLevel",
      type: "select",
      options: ["Shkollë e mesme", "Bachelor", "Master", "PhD", "Tjetër"],
      required: true
    },
    {
      question: "Pritjet tuaja për rrogën (në EUR)*",
      name: "salaryExpectations",
      type: "text",
      required: true
    },
    {
      question: "Kur jeni i disponueshëm për të filluar punën?*",
      name: "availability",
      type: "text",
      required: true
    },
    {
      question: "Nëse do t’ju duhej të punonit jashtë orarit, a do të ishit dakord?*",
      name: "overtimeAgreement",
      type: "select",
      options: ["Po", "Jo", "Varet nga situata"],
      required: true
    },
    {
      question: "Çfarë ju motivoi të aplikoni në këtë kompani?*",
      name: "motivation",
      type: "textarea",
      required: true
    },
    {
      question: "Çfarë kërkoni në punën tuaj të ardhshme?",
      name: "nextJobExpectations",
      type: "textarea",
      required: false
    },
    {
      question: "Sa i rëndësishëm është për ju zhvillimi i vazhdueshëm në profesionin tuaj?",
      name: "professionalDevelopment",
      type: "textarea",
      required: false
    },
    {
      question: "Çfarë ju motivon?",
      name: "whatMotivatesYou",
      type: "textarea",
      required: false
    },
    {
      question: "A preferoni të punoni më shumë në ekip apo individualisht? Pse?",
      name: "teamPreference",
      type: "textarea",
      required: false
    },
    {
      question: "Cili është suksesi juaj më i madh profesional deri më tani?",
      name: "greatestAchievement",
      type: "textarea",
      required: false
    },
    {
      question: "Si e menaxhoni stresin gjatë situatave të vështira në punë?",
      name: "stressManagement",
      type: "textarea",
      required: false
    },
    {
      question: "Si e përshkruani stilin tuaj të komunikimit profesional?",
      name: "communicationStyle",
      type: "textarea",
      required: false
    },
    {
      question: "Çfarë presin të tjerët nga ju në punë dhe si i përmbushni këto pritshmëri?",
      name: "expectationsHandling",
      type: "textarea",
      required: false
    },
    {
      question: "Cili është gabimi më i madh profesional që keni bërë dhe çfarë mësuat prej tij?",
      name: "professionalMistake",
      type: "textarea",
      required: false
    },
    {
      question: "Çfarë ju bën të ndiheni të suksesshëm në fund të një dite pune?",
      name: "successFeeling",
      type: "textarea",
      required: false
    }
  ];

  const qualificationQuestions = [
    {
      question: "Menaxhimi i detyrave (vlerësoni me yje 1-5)*",
      name: "taskManagement",
      type: "stars",
      required: true
    },
    {
      question: "Cila është superfuqia juaj?",
      name: "superpower",
      type: "text",
      required: false
    },
    {
      question: "Cila është kriptoniti/dobësia juaj?",
      name: "weakness",
      type: "text",
      required: false
    },
    {
      question: "Cilën nga gjuhët në vijim flisni, ju lutemi zgjidhni dhe vlerësoni nivelin tuaj:",
      name: "languages",
      type: "languages",
      options: ["Anglisht", "Shqip", "Gjermanisht", "Frengjisht", "Italisht"],
      required: false
    },
    {
      question: "A jeni më shumë person i orientuar drejt detajeve apo pamjes së përgjithshme? Jepni një shembull.",
      name: "detailOrBigPicture",
      type: "textarea",
      required: false
    },
    {
      question: "Nëse do të mund të ndryshonit një gjë në industrinë tuaj, cila do të ishte ajo?",
      name: "changeIndustry",
      type: "textarea",
      required: false
    },
    {
      question: "Cilat janë tri vlera personale që i konsideroni të rëndësishme në një vend pune?",
      name: "workValues",
      type: "text",
      required: false
    },
    {
      question: "Nëse një koleg nuk po përmbush detyrat e tij, si do të vepronit?",
      name: "conflictResolution",
      type: "textarea",
      required: false
    },
    {
      question: "Cili është një projekt kreativ ku keni kontribuar dhe si ishte roli juaj?",
      name: "creativeProject",
      type: "textarea",
      required: false
    },
    {
      question: "Si i balanconi detyrat afatshkurtra me qëllimet afatgjata?",
      name: "shortLongTermBalance",
      type: "textarea",
      required: false
    },
    {
      question: "Si reagon kur përballesh me një situatë ku nuk ke informacion të mjaftueshëm?",
      name: "uncertaintyReaction",
      type: "textarea",
      required: false
    },
    {
      question: "Nëse do të punonit në një ekip ndërkombëtar, cilat do të ishin sfidat dhe si do t’i përballonit?",
      name: "internationalTeamChallenge",
      type: "textarea",
      required: false
    }
  ];
  const backendQuestions = [
    {
      question: "Cilat janë teknologjitë që përdorni për zhvillimin e backend? (Node.js, Express, Django, etj.)",
      name: "backendTechnologies",
      type: "text",
      required: true
    },
    {
      question: "Çfarë është një API RESTful dhe si mund ta implementoni këtë në një projekt?",
      name: "restApiImplementation",
      type: "textarea",
      required: false
    },
    {
      question: "Si menaxhoni autentifikimin dhe autorizimin në backend? Përdorni JWT, OAuth, ose diçka tjetër?",
      name: "authAndAuthorization",
      type: "textarea",
      required: false
    },
    {
      question: "Si mund të optimizoni performancën e bazës së të dhënave në një aplikacion backend?",
      name: "dbPerformanceOptimization",
      type: "textarea",
      required: false
    },
    {
      question: "Çfarë është një microservice dhe si mund ta implementoni këtë në një projekt?",
      name: "microservicesImplementation",
      type: "textarea",
      required: false
    }
  ];

  const frontendQuestions = [
    {
      question: "Cilat janë teknologjitë që përdorni për zhvillimin e aplikacioneve frontend? (React, Vue, Angular, etj.)",
      name: "frontendTechnologies",
      type: "text",
      required: true
    },
    {
      question: "Si do të optimizoni performancën e një aplikacioni React?",
      name: "reactOptimization",
      type: "textarea",
      required: false
    },
    {
      question: "Si implementoni dizajnin responsiv në një aplikacion frontend?",
      name: "responsiveDesign",
      type: "textarea",
      required: false
    },
    {
      question: "Si do të menaxhoni state-në në React? Çfarë librarish keni përdorur për këtë qëllim?",
      name: "reactStateManagement",
      type: "textarea",
      required: false
    },
    {
      question: "Çfarë është Virtual DOM dhe si ndihmon në performancën e React?",
      name: "virtualDOMExplanation",
      type: "textarea",
      required: false
    }
  ];
  
  

  const renderQuestion = (q) => {
    switch (q.type) {
      case "select":
        return (
          <select
            name={q.name}
            value={formData[q.name]}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required={q.required}
          >
            <option value="">Zgjidhni...</option>
            {q.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            name={q.name}
            value={formData[q.name]}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required={q.required}
            placeholder={q.placeholder || ''}
          />
        );
      case "checkbox":
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              id={q.name}
              name={q.name}
              checked={formData[q.name]}
              onChange={handleChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor={q.name} className="ml-2 block text-sm text-gray-700">
              {formData[q.name] ? "Po" : "Jo"}
            </label>
          </div>
        );
      case "stars":
        return (
          <div className="flex justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, [q.name]: star }))}
                className="text-3xl mx-1 focus:outline-none"
              >
                {star <= formData[q.name] ? '★' : '☆'}
              </button>
            ))}
          </div>
        );
      case "languages":
        return (
          <div className="grid gap-4 mt-4">
            {q.options.map((lang) => (
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
        );
      default:
        return (
          <input
            type={q.type || "text"}
            name={q.name}
            value={formData[q.name]}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required={q.required}
            placeholder={q.placeholder || ''}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
      {/* Header with progress */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-4 tracking-tight">
          {step === 1 ? 'Aplikoni për Punë' : 
           step === 2 ? 'Zgjidhni Pozicionin' : 
           'Formulari i Aplikimit'}
        </h1>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4, 5, 6, 7].map((stepNumber) => (
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
                   style={{ width: `${((step-1)*20 + (step === 4 ? (subStep/additionalQuestions.length)*20 : step === 5 ? (subStep/qualificationQuestions.length)*20 : 0))}%` }}></div>
            </div>
          </div>
        </div>

      

        <div className="p-8">
          {step === 1 && (
            <div className="text-center animate-fade-in">
              <div className="mx-auto w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Mirë se vini në procesin e aplikimit</h2>
              <p className="mb-8 text-lg text-gray-600 max-w-md mx-auto">Ne jemi të entuziazmuar për interesin tuaj për të bashkëpunuar me ne. Ky proces do të zgjasë vetëm disa minuta.</p>
              <button 
                onClick={nextStep}
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Filloni Aplikimin
              </button>
            </div>
          )}

{step === 2 && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Për cilin pozicion dëshironi të aplikoni?</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {['Full Stack Developer', 'Backend Developer', 'FrontEnd Developer'].map((position) => (
                  <div 
                    key={position}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, position }));
                      nextStep();
                    }}
                    className={`p-8 border-2 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 flex flex-col items-center
                      ${formData.position === position ? 
                        'border-indigo-500 bg-indigo-50 shadow-md' : 
                        'border-gray-200 hover:border-indigo-300 bg-white'}`}
                  >
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl text-center text-gray-800 mb-2">{position}</h3>
                    <p className="text-gray-600 text-center text-sm">Klikoni për të zgjedhur</p>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <button 
                  onClick={prevStep}
                  className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  Kthehu
                </button>
              </div>
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
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Informacion shtesë ({subStep + 1}/{additionalQuestions.length})
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {additionalQuestions[subStep].question}
                  {additionalQuestions[subStep].required && <span className="text-red-500">*</span>}
                </label>
                {renderQuestion(additionalQuestions[subStep])}
              </div>

              <div className="flex justify-between pt-6">
                <button 
                  type="button"
                  onClick={prevStep}
                  disabled={step === 4 && subStep === 0}
                  className={`px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-200 ${step === 4 && subStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Kthehu
                </button>
                <button 
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                  {subStep === additionalQuestions.length - 1 ? 'Vazhdo' : 'Tjetra'}
                </button>
              </div>
            </form>
          )}
            {step === 5 && (
            <form className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
               Backend  ({subStep + 1}/{backendQuestions .length})
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {backendQuestions [subStep].question}
                  {backendQuestions [subStep].required && <span className="text-red-500">*</span>}
                </label>
                {renderQuestion(backendQuestions [subStep])}
              </div>

              <div className="flex justify-between pt-6">
                <button 
                  type="button"
                  onClick={prevStep}
                  disabled={step === 4 && subStep === 0}
                  className={`px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-200 ${step === 4 && subStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Kthehu
                </button>
                <button 
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                  {subStep === backendQuestions.length - 1 ? 'Vazhdo' : 'Tjetra'}
                </button>
              </div>
            </form>
          )}
             {step === 6 && (
            <form className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
               FrontEnd  ({subStep + 1}/{frontendQuestions  .length})
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {frontendQuestions  [subStep].question}
                  {frontendQuestions  [subStep].required && <span className="text-red-500">*</span>}
                </label>
                {renderQuestion(frontendQuestions  [subStep])}
              </div>

              <div className="flex justify-between pt-6">
                <button 
                  type="button"
                  onClick={prevStep}
                  disabled={step === 4 && subStep === 0}
                  className={`px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-200 ${step === 4 && subStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Kthehu
                </button>
                <button 
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                  {subStep === qualificationQuestions .length - 1 ? 'Vazhdo' : 'Tjetra'}
                </button>
              </div>
            </form>
          )}


          {step === 7 && (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Kualifikimet dhe aftësitë tuaja ({subStep + 1}/{qualificationQuestions.length})
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {qualificationQuestions[subStep].question}
                  {qualificationQuestions[subStep].required && <span className="text-red-500">*</span>}
                </label>
                {renderQuestion(qualificationQuestions[subStep])}
              </div>

              {subStep === qualificationQuestions.length - 1 && (
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Ngarkoni dokumentet tuaja (CV, letër motivuese, certifikime)*
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

                  <div className="mt-4 flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="documentsVerified"
                        name="documentsVerified"
                        checked={formData.documentsVerified}
                        onChange={handleChange}
                        className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        
                      />
                    </div>
                    <label htmlFor="documentsVerified" className="ml-3 block text-sm text-gray-700">
                      Konfirmoj që të gjitha dokumentet e ngarkuara janë të sakta dhe të plota*
                    </label>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                <button 
                  type="button"
                  onClick={prevStep}
                  disabled={step === 5 && subStep === 0}
                  className={`px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-200 ${step === 5 && subStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Kthehu
                </button>
                {subStep === qualificationQuestions.length - 1 ? (
                  <button 
                    type="submit"
                    disabled={!formData.documentsVerified}
                    className={`px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg ${!formData.documentsVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Dërgo Aplikimin
                  </button>
                ) : (
                  <button 
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-200"
                  >
                    Tjetra
                  </button>
                )}
              </div>
            </form>
          )}
{isSubmitted && (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-2xl w-full">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Faleminderit!</h2>
      <p className="dark:text-gray-300">
        Aplikimi juaj për pozitën <strong>Full Stack Developer</strong> është dorëzuar me sukses.
      </p>

      <button
        onClick={() => {
          setIsSubmitted(false);
        }}
        className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
      >
        OK
      </button>
    </div>
  </div>
)}


        </div>

      
      </div>
    </div>
  );
}

export default Application;