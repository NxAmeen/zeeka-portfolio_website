// Edit portfolio content here. null URLs render honest, inactive link labels.
export const content = {
  name: 'Ameen Nizar', brand: 'zeekaedits', location: 'Saudi Arabia',
  brief: 'Learning intelligent systems. Creating stories that move.',
  email: 'ameennizar0818@gmail.com', whatsapp: 'https://wa.me/966571773953',
  cv: './assets/Ameen_Nizar_CV.pdf',
  socials: {
    LinkedIn: 'https://www.linkedin.com/in/ameen-nizar/',
    Instagram: 'https://www.instagram.com/zee.ka._/',
    GitHub: 'https://github.com/'
  },
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
  mediaIntro: 'From the first idea to the final cut, I bring videography and editing together. My focus is the feeling of a film: the right frame, a deliberate camera move, and an edit that gives every moment room to land.',
  mediaCraft: [
    {number:'01', title:'Behind the camera', subtitle:'VIDEOGRAPHY', text:'Build a visual story through composition, light and movement. Find the details that give a place, person or product its character.', terms:['Shot planning & visual references','Composition & framing','Camera movement & gimbal shots','Detail shots & supporting footage']},
    {number:'02', title:'Inside the edit', subtitle:'VIDEO EDITING', text:'Turn raw footage into a clear, engaging sequence. Shape the story with shot selection, pacing and transitions that serve the moment.', terms:['Footage selection & organisation','Narrative structure & pacing','Music-led cuts & transitions','Reels & longer-form edits']},
    {number:'03', title:'The finishing touches', subtitle:'POST-PRODUCTION', text:'Bring the film together through colour, sound and considered graphics. Keep the final delivery suited to the screen it will live on.', terms:['Colour correction & visual consistency','Titles, captions & motion accents','Audio balance & music timing','Platform-specific framing & exports']}
  ],
  mediaToolDetails: ['Shape an edit from the first assembly to delivery: select takes, refine pacing, connect scenes and balance picture with sound.','Add movement with intention: animated titles, kinetic typography and graphic elements that support the story.','Create the supporting visuals around a film, from clean thumbnails to carefully layered graphic elements.','Build a consistent photographic look through exposure, contrast, colour and selective adjustments.'],
  mediaToolSkills: [
    ['Timeline organisation & rough cuts','J-cuts, L-cuts & match cuts','Speed ramps & beat-synced edits','Lumetri correction & shot matching','Audio levels, captions & exports'],
    ['Keyframes & easing curves','Kinetic typography & title sequences','Masks, tracking & compositing','Motion accents & transitions'],
    ['Layers, masks & selections','Retouching & compositing','Thumbnails & cover artwork','Typography & layout'],
    ['Exposure & white balance','Tone curves & HSL adjustments','Selective masks & local edits','Consistent photo colour & exports']
  ],
  editingStyles: [
    {title:'Cinematic storytelling',text:'Deliberate pacing, motivated transitions and space for atmosphere. Let the sequence build a feeling rather than simply move through shots.',tags:['Narrative flow','J-cuts & L-cuts','Sound-led transitions']},
    {title:'High-energy reels',text:'A clear opening, tight selects and music-led rhythm. Use speed changes, punchy cuts and captions to keep a short piece moving.',tags:['Beat-sync','Speed ramps','Vertical framing']},
    {title:'Clean, minimal edits',text:'Simple cuts, restrained graphics and a focus on the subject. Keep the message readable and give the strongest images room to work.',tags:['Match cuts','Subtle motion','Clear typography']},
    {title:'Colour correction & grading',text:'Start with balanced exposure and white balance, match shots, then shape contrast, colour and mood. Keep skin tones and visual continuity in mind.',tags:['Shot matching','Curves & HSL','Creative looks']}
  ],
  mediaProcess: [
    {title:'Find the story', text:'Start with the message, audience and feeling. Gather references and outline the shots that will carry the idea.'},
    {title:'Capture with intent', text:'Plan framing and movement, then capture the key moments and supporting details that give the edit options.'},
    {title:'Shape the rhythm', text:'Build the sequence, refine the pacing, and bring picture, music and sound into the same conversation.'},
    {title:'Refine & deliver', text:'Review the cut, polish colour and graphics, then prepare the right framing and export for its destination.'}
  ],
  gearDetails: ['The camera at the centre of my filming setup.','A flexible focal range for wider scenes, closer details and portraits.','Controlled, stabilised camera movement for flowing shots.'],
  gear: ['Sony a7 IV','G Master 24–70 mm','DJI RS 4'],
  // Replace demo records with { title, role, tools, caption, url } for your real work.
  films: [
    {title:'Motion & atmosphere',category:'CINEMATIC FILM',format:'Landscape · 16:9',role:'Videography & editing — demo',tools:'Premiere Pro · After Effects',caption:'An original animated demo exploring flowing shapes and a cinematic title treatment. This is a playback sample, not my client work.',story:'Use this space to explain the brief, what you filmed, how you approached the edit and the final result.',url:'./assets/demos/motion.mp4',poster:'./assets/demos/motion.jpg',demo:true},
    {title:'A different perspective',category:'VISUAL STORY',format:'Landscape · 16:9',role:'Camera & post-production — demo',tools:'Premiere Pro · Lightroom',caption:'An original geometric motion demo exploring changing perspective. This is a playback sample, not my client work.',story:'Add the context, your responsibilities and the creative decisions behind the finished piece.',url:'./assets/demos/perspective.mp4',poster:'./assets/demos/perspective.jpg',demo:true},
    {title:'Made for the moment',category:'SOCIAL REEL',format:'Vertical · 9:16',role:'Video editing — demo',tools:'Premiere Pro · After Effects',caption:'An original vertical motion demo for the reel viewer. This is a playback sample, not my client work.',story:'Describe your hook, footage selection, sound choices and how you adapted the edit for a vertical screen.',url:'./assets/demos/moment.mp4',poster:'./assets/demos/moment.jpg',demo:true}
  ]
};
