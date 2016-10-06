require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/user.js'
  ])

  // Clear specified collections
  seeder.clearModels(['User'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () { process.exit() })
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'User',
    'documents': [
      {
        'profileImg': 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/13912649_10154341045669454_1360564859556121569_n.jpg?oh=158409f18ba189e695a200be70c1bfbd&oe=586BEFDF',
        'name': 'An Vu',
        'email': 'me@maianvu.com',
        'password': 'password',
        'role': 'Developer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a Computer Science undergraduate specializing in AI & Machine Learning capabilities. Our team is looking to integrate A.I technologies into the networking space for entrepreneurs',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'I developed the core technology of Tranceapp on both IOS and Android devices. This included the integration of media functionalities as well as the gamification of the dance features. The features were developed using Objective-C and Swift for IOS and Java for Android. We are currently looking to build the add-ons with React-native with serves to accomodate both IOS and Android devices.'}, {exptitle: 'Web Developer', expcompany: 'Reactor', expdescription: 'At Reactor, I headed the development of their first web application using React JS with Redux. Albeit a small team, I was given the important tasks of developing the major technological dependencies that the accelerator need to incorporate for their initial launch.'}],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Engineer', 'Designer']
      },
      {
        'profileImg': 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t1.0-9/13921061_10153791624370737_573675253896951613_n.jpg?oh=8f7087293f340af85e49d9df20ff966f&oe=5873771A',
        'name': 'Harris Leow',
        'email': 'harris@u.nus.edu',
        'password': 'password',
        'role': 'Designer',
        'industry': ['Web Development', 'FinTech', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a Economics undergraduate specializing in Quantitative & Financial Economics. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'I developed the core technology of Tranceapp on both IOS and Android devices. This included the integration of media functionalities as well as the gamification of the dance features. The features were developed using Objective-C and Swift for IOS and Java for Android. We are currently looking to build the add-ons with React-native with serves to accomodate both IOS and Android devices.'}, {exptitle: 'Web Developer', expcompany: 'Reactor', expdescription: 'At Reactor, I headed the development of their first web application using React JS with Redux. Albeit a small team, I was given the important tasks of developing the major technological dependencies that the accelerator need to incorporate for their initial launch.'}],
        'school': 'NUS',
        'major': 'Quantitative Economics',
        'teambizstage': 'Business Plan Mapped',
        'bizstage': 'MVP',
        'partnerrole': ['Designer', 'Engineer']
      },
      {
        'profileImg': 'https://scontent.fsnc1-5.fna.fbcdn.net/t31.0-8/11864993_1674509946100813_8542193839675787295_o.jpg',
        'name': 'Rafikah',
        'email': 'rafikah@u.nus.edu',
        'password': 'password',
        'role': 'Marketer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a Business School undergraduate specializing in Marketing & Finance. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'I developed the core technology of Tranceapp on both IOS and Android devices. This included the integration of media functionalities as well as the gamification of the dance features. The features were developed using Objective-C and Swift for IOS and Java for Android. We are currently looking to build the add-ons with React-native with serves to accomodate both IOS and Android devices.'}, {exptitle: 'Web Developer', expcompany: 'Reactor', expdescription: 'At Reactor, I headed the development of their first web application using React JS with Redux. Albeit a small team, I was given the important tasks of developing the major technological dependencies that the accelerator need to incorporate for their initial launch.'}],
        'school': 'NUS',
        'major': 'Marketing',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Developer', 'Designer']

      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'Isabella',
        'email': 'isabella@u.nus.edu',
        'password': 'password',
        'role': 'Developer',
        'industry': ['Web Development', 'Graphic Design', 'UI/UX'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'I developed the core technology of Tranceapp on both IOS and Android devices. This included the integration of media functionalities as well as the gamification of the dance features. The features were developed using Objective-C and Swift for IOS and Java for Android. We are currently looking to build the add-ons with React-native with serves to accomodate both IOS and Android devices.'}, {exptitle: 'Web Developer', expcompany: 'Reactor', expdescription: 'At Reactor, I headed the development of their first web application using React JS with Redux. Albeit a small team, I was given the important tasks of developing the major technological dependencies that the accelerator need to incorporate for their initial launch.'}],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Engineer', 'Developer', 'Designer']

      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'Huizhen',
        'email': 'huizhen@u.nus.edu',
        'password': 'password',
        'role': 'Designer',
        'industry': ['UI/UX', 'Digital Marketing', 'Agile Development'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a Economics undergraduate specializing in Quantitative & Financial Economics. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'I developed the core technology of Tranceapp on both IOS and Android devices. This included the integration of media functionalities as well as the gamification of the dance features. The features were developed using Objective-C and Swift for IOS and Java for Android. We are currently looking to build the add-ons with React-native with serves to accomodate both IOS and Android devices.'}, {exptitle: 'Web Developer', expcompany: 'Reactor', expdescription: 'At Reactor, I headed the development of their first web application using React JS with Redux. Albeit a small team, I was given the important tasks of developing the major technological dependencies that the accelerator need to incorporate for their initial launch.'}],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Developer', 'Engineer', 'Marketer']

      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'An Vu',
        'email': 'me4@maianvu.com',
        'password': 'password',
        'role': 'Hustler',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'I developed the core technology of Tranceapp on both IOS and Android devices. This included the integration of media functionalities as well as the gamification of the dance features. The features were developed using Objective-C and Swift for IOS and Java for Android. We are currently looking to build the add-ons with React-native with serves to accomodate both IOS and Android devices.'}, {exptitle: 'Web Developer', expcompany: 'Reactor', expdescription: 'At Reactor, I headed the development of their first web application using React JS with Redux. Albeit a small team, I was given the important tasks of developing the major technological dependencies that the accelerator need to incorporate for their initial launch.'}],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Engineer', 'Developer', 'Designer']

      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'An Vu',
        'email': 'me5@maianvu.com',
        'password': 'password',
        'role': 'Marketer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'I developed the core technology of Tranceapp on both IOS and Android devices. This included the integration of media functionalities as well as the gamification of the dance features. The features were developed using Objective-C and Swift for IOS and Java for Android. We are currently looking to build the add-ons with React-native with serves to accomodate both IOS and Android devices.'}, {exptitle: 'Web Developer', expcompany: 'Reactor', expdescription: 'At Reactor, I headed the development of their first web application using React JS with Redux. Albeit a small team, I was given the important tasks of developing the major technological dependencies that the accelerator need to incorporate for their initial launch.'}],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Marketer', 'Engineer', 'Designer']

      }
    ]
  }

]
