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
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'An Vu',
        'email': 'me@maianvu.com',
        'password': 'password',
        'role': 'Developer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}, {exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Engineer', 'Hustler']
      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'Harris Leow',
        'email': 'harris@u.nus.edu',
        'password': 'password',
        'role': 'Designer',
        'industry': ['FinTech', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a Economics undergraduate specializing in Quantitative Economics. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}, {exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}],
        'school': 'NUS',
        'major': 'Quant Economics',
        'teambizstage': 'Business Plan Mapped',
        'bizstage': 'MVP',
        'partnerrole': ['Designer', 'Engineer']
      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'Rafikah',
        'email': 'rafikah@u.nus.edu',
        'password': 'password',
        'role': 'Marketer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}, {exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}],
        'school': 'NUS',
        'major': 'Marketing',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Developer', 'Designer']

      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'An Vu',
        'email': 'me2@maianvu.com',
        'password': 'password',
        'role': 'Developer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}, {exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Engineer', 'Developer', 'Designer']

      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'An Vu',
        'email': 'me3@maianvu.com',
        'password': 'password',
        'role': 'Developer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}, {exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}],
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
        'role': 'Developer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}, {exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}],
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
        'role': 'Developer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experiences': [{exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}, {exptitle: 'IOS Developer', expcompany: 'Traceapp', expdescription: 'Developed the core technology of the application'}],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': ['Marketer', 'Engineer', 'Designer']

      }
    ]
  }

]
