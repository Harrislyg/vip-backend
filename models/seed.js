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
        'experience': ['IOS Developer at App in San Francisco, California', 'Web Developer at ABC company', 'Android Developer at XYZ company'],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': 'Engineer'
      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'Harris Leow',
        'email': 'harris@u.nus.edu',
        'password': 'password',
        'role': 'Developer',
        'industry': ['FinTech', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a Economics undergraduate specializing in Quantitative Economics. Our team is looking to integrate AI into the FinTech industry',
        'experience': ['Web Developer at App in San Francisco, California', 'Front-end engineer at ABC company'],
        'school': 'NUS',
        'major': 'Quant Economics',
        'teambizstage': 'Business Plan Mapped',
        'bizstage': 'MVP',
        'partnerrole': 'Designer'
      },
      {
        'profileImg': 'https://cofounder-sg.s3.amazonaws.com/happy.png',
        'name': 'Rafikah',
        'email': 'rafikah@u.nus.edu',
        'password': 'password',
        'role': 'Developer',
        'industry': ['AI', 'Machine Learning', 'Data Science'],
        'facebook': 'https://www.facebook.com/harris.leow',
        'linkedin': 'https://sg.linkedin.com/in/harrisleow',
        'github': 'https://github.com/Harrislyg',
        'summary': 'I am a computer science undergraduate specializing in AI. Our team is looking to integrate AI into the FinTech industry',
        'experience': ['Marketing executive for App in San Francisco, California', 'Business Developer at ABC company', 'Business Analyst at XYZ company'],
        'school': 'NUS',
        'major': 'Marketing',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': 'Developer'

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
        'experience': ['IOS Developer at App in San Francisco, California', 'Web Developer at ABC company', 'Android Developer at XYZ company'],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': 'Engineer'

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
        'experience': ['IOS Developer at App in San Francisco, California', 'Web Developer at ABC company', 'Android Developer at XYZ company'],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': 'Engineer'

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
        'experience': ['IOS Developer at App in San Francisco, California', 'Web Developer at ABC company', 'Android Developer at XYZ company'],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': 'Engineer'

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
        'experience': ['IOS Developer at App in San Francisco, California', 'Web Developer at ABC company', 'Android Developer at XYZ company'],
        'school': 'NUS',
        'major': 'Computer Science',
        'teambizstage': 'MVP',
        'bizstage': 'MVP',
        'partnerrole': 'Engineer'

      }
    ]
  }

]
