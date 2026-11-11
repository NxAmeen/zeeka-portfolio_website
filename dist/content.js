// Edit portfolio content here. null URLs render honest, inactive link labels.
export const content = {
  name: 'Ameen Nizar', brand: 'zeekaedits', location: 'Saudi Arabia',
  brief: 'Learning intelligent systems. Creating stories that move.',
  email: 'ameennizar0818@gmail.com', whatsapp: 'https://wa.me/966571773953',
  cv: './assets/Ameen_Nizar_CV.pdf',
  socials: { LinkedIn: null, Instagram: null, GitHub: null },
  skills: [
    {name:'Python', icon:'Py', detail:'From fundamentals to practical data workflows.', terms:['Data types & control flow','Functions & comprehensions','File handling & exceptions','Object-oriented programming','Modules & automation']},
    {name:'SQL', icon:'SQL', detail:'Turning relational data into useful answers.', terms:['Joins & subqueries','GROUP BY & aggregations','Common table expressions','Window functions','Data cleaning & analysis']},
    {name:'Data libraries', icon:'[ ]', detail:'Explore, transform and communicate data.', terms:['NumPy · arrays & broadcasting','Pandas · cleaning & transformation','Matplotlib · visualisation','Seaborn · distributions & correlations','Scikit-learn · pipelines & tuning']},
    {name:'Machine learning', icon:'ML', detail:'From a good question to an evaluated model.', terms:['Linear, Ridge & Lasso regression','Logistic Regression · KNN · SVM','Decision Trees · Naive Bayes','Random Forest · gradient boosting','K-Means · hierarchical · DBSCAN','PCA · feature engineering','Cross-validation · F1 · ROC-AUC']},
    {name:'Natural language processing', icon:'Aa', detail:'Finding structure and meaning in language.', terms:['Text cleaning & normalisation','Tokenization · stop-word removal','Stemming & lemmatization','Bag of Words · n-grams · TF-IDF','POS tagging · named entities','Sentiment & text classification']},
    {name:'Analytics & delivery', icon:'↗', detail:'Taking analysis beyond the notebook.', terms:['Power BI · DAX · Power Query','PostgreSQL · Supabase','FastAPI · REST APIs','Docker · Git · GitHub Actions','Render deployment']}
  ],
  projects: [
    {title:'NightStay',category:'MACHINE LEARNING',number:'01',visual:'night',problem:'Predict the room type of an NYC Airbnb listing from its characteristics.',stack:['Python','scikit-learn','FastAPI','Render'],outcome:'An end-to-end classifier with class probabilities, input validation and 88% reported accuracy.',url:null},
    {title:'Breast ultrasound classifier',category:'DEEP LEARNING',number:'02',visual:'scan',problem:'Classify ultrasound images into normal, benign and malignant categories.',stack:['ResNet50','BUSI','MLflow'],outcome:'A completed image-classification project using augmentation, weighted loss and 210 tracked experiments. Research project, not a clinical diagnostic tool.',url:null},
    {title:'Ask your PDF',category:'RETRIEVAL-AUGMENTED GENERATION',number:'03',visual:'rag',problem:'Find relevant answers inside a PDF without reading every page.',stack:['MiniLM','pgvector','Neon','FastAPI'],outcome:'A completed RAG chatbot with source-cited answers and a fallback when the document does not contain an answer.',url:null},
    {title:'Olist intelligence',category:'DATA ANALYTICS',number:'04',visual:'charts',problem:'Connect sales, delivery and customer-review data into a clear business picture.',stack:['PostgreSQL','Power BI','DAX'],outcome:'A nine-page report covering revenue, average order value, on-time delivery and seller performance.',url:null}
  ],
  journey: [
    {title:'Build the foundation',status:'Completed',text:'Python, SQL, NumPy and Pandas. Working with data, one useful question at a time.'},
    {title:'Learn from data',status:'Completed',text:'Machine learning, evaluation and visual analytics. From exploration to deployed predictions.'},
    {title:'Work with language',status:'Completed',text:'NLP fundamentals: preprocessing, text representations, linguistic analysis and classification.'},
    {title:'Connect the workflow',status:'Completed',text:'n8n and practical automation projects: APIs, lead validation and human-approved email workflows.'},
    {title:'Explore agentic systems',status:'In progress',text:'Claude skills, AI agents, Higgsfield and more capable automation workflows.'},
    {title:'Go deeper',status:'Upcoming',text:'Deeper study of neural networks, deep learning, LLMs and RAG, building on completed project experience.'}
  ],
  log: [{date:'2026-11-11',title:'Where I am, and what comes next',text:'Python, SQL, machine learning, NLP and n8n are completed learning foundations. My current focus is Claude skills, AI agents, Higgsfield and automation. Next: deeper study of ANN, deep learning, LLMs and RAG.'}],
  mediaTools: ['Premiere Pro','After Effects','Photoshop','Lightroom'],
  gear: ['Sony a7 IV','G Master 24–70 mm','DJI RS 4'],
  // Replace demo records with { title, role, tools, caption, url } for your real work.
  films: [
    {title:'Motion & atmosphere',role:'Demo layout',tools:'Premiere Pro · After Effects',caption:'An illustrative title sequence. This is not a client project or a sample of Ameen’s work.',url:null},
    {title:'A different perspective',role:'Demo layout',tools:'Premiere Pro · Lightroom',caption:'A second portfolio slot, ready for a reel and its production story.',url:null}
  ]
};
