const { cleanGitHubJobsApiResponse } = require("./gitHubJobsApi.js");

test("Test whether cleanGitHubJobsApiResponse() cleans a raw API call response as expected.", () => {
  const rawResponse = [
    {
      id: "6bbe0cd6-95fd-461c-a194-746872465b7e",
      type: "Contract",
      url:
        "https://jobs.github.com/positions/6bbe0cd6-95fd-461c-a194-746872465b7e",
      created_at: "Sun Oct 27 11:58:38 UTC 2019",
      company: "Imperial Leisure",
      company_url: "https://www.imperialleisure.com",
      location: "London",
      title: "Freelance React Native/Flutter Developer – Immediate Start",
      description:
        "<p>Immediate start. Can work remotely.</p>\n<p>We are looking for a React Native or Flutter developer to build a small mobile app, for charity, that will work on iOS and Android.</p>\n<p>The app will let deaf people download a signed video of a speech that will be given at an event so that they can watch the signed video through the app when they attend the event - there will be no data connection (Wi-Fi or cellular) at the event, so the user will need to download the video before the event and play it back without data. Every week, there'll be a new event and a new video. The data in the app will be available through a JSON feed – e.g. the app will be able to pull the JSON feed detect the new video and download it.</p>\n<p>Here's a summary of how the app will work:</p>\n<ol>\n<li>Every week, a new signed video of a speech will become available to download on the app.</li>\n<li>The user will download the video into the app and save the video in the app to watch later.</li>\n<li>When the user attends the event later on, s/he'll be open up the app and play the video. Please note there'll be no data connection at the event so the user has to be able to download and save the video and play it back without a data connection.</li>\n<li>There will be some other static sections within the app that provide some information about the charity and links to external sites.</li>\n<li>There will be a data collection from inside the app that will allow users to submit their personal details and name so that they can receive email notifications.</li>\n</ol>\n<p>Considerations</p>\n<p>– There is no need for users to sign in or create accounts in the app.\n–  All designs will be provided by us.\n– The app should be multilingual and support two languages.\n–  We'll host the videos.\n– We'd like to be able to deliver push messages and in-app messages to users through a tool such as One Signal</p>\n",
      how_to_apply:
        '<p>Please send a copy of your CV to <a href="mailto:jobs@imperialleisure.com">jobs@imperialleisure.com</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0YxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2990a63e7cfc9a32e897832fc947ad89a0e2aef4/il-logo.png"
    },
    {
      id: "36b9af5b-fcc0-457d-b7f3-efc61625bbdb",
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/36b9af5b-fcc0-457d-b7f3-efc61625bbdb",
      created_at: "Mon Oct 21 12:46:24 UTC 2019",
      company: "Shell",
      company_url: "http://www.shell.com",
      location: "London",
      title: "Scrum Master - Agile Hub",
      description:
        '<p><strong>Job Description</strong></p>\n<p><strong>For an accomplished Scrum Master, we have the perfect opportunity. Bring us your skills for mentoring and facilitation, and we’ll give you every chance to grow your talent and stretch your technical and professional skills.</strong></p>\n<p><strong>Where you fit</strong></p>\n<p>We’re seeking a Scrum Master with strong Agile project experience to support a dynamic new development team, joining one of our exciting new innovation hubs at Shell. This is a role where you’ll be actively encouraged to take pride in doing things differently – to take a unique approach of balancing human-centred and digital design with an agile technology capability in order to tackle complex problems in original ways.</p>\n<p>With a huge variety of potential projects to grow across the business, within an evolving landscape, you’ll be challenged to think innovatively, with many different areas to investigate, tackling varied problem areas in terms of people, industry and scenarios.</p>\n<p><strong>What’s the role?</strong></p>\n<p>As Scrum Master, you’ll be responsible for ensuring your team is successful in working together and working in Agile. Providing support to the team and leading by example, including facilitating discussion and decision making, and quickly resolving any conflicts to get the work delivered efficiently and effectively.</p>\n<p>As a highly independent, confident professional, you’ll be able to deliver value, adapting quickly to an ever-changing environment, and effectively guiding the team and organisation on how to use Agile/Scrum practices and values to its full benefit.</p>\n<p>Naturally, your communication and mentoring skills will be second to none, as you work skillfully to nurture a trusting and safe environment where problems can be raised without fear of blame or judgement, within a collective approach to problem-solving.</p>\n<p>You can expect more specific duties to include:</p>\n<ul>\n<li>Assessing the Scrum maturity of the team and organisation, before coaching the team to higher levels of maturity, at a pace that is sustainable.</li>\n<li>Assisting with internal and external communication, improving transparency, and information-sharing.</li>\n<li>Supporting and educating product owners, especially on maintaining the product backlog.</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<p><strong>What we need from you</strong></p>\n<p>We’re keen to hear from men and women with experience in playing the Scrum Master role, with proven skills and knowledge of leadership, facilitation, conflict resolution and increasing transparency. Plus, we’d also hope to see evidence on your CV of the following:</p>\n<ul>\n<li>Experience in applying a wide variety of well-documented patterns and techniques to enhance the Scrum approach.</li>\n<li>Knowledge and experience of other agile and DevOps approaches</li>\n</ul>\n<p><strong>An innovative place to work</strong></p>\n<p>There’s never been a more exciting time to work at Shell. Everyone here is helping solve one of the biggest challenges facing the world today: bringing the benefits of energy to everyone on the planet, whilst managing the risks of climate change.</p>\n<p>Join us and you’ll add your talent and imagination to a business with the power to shape the future – whether by investing in renewables, exploring new ways to store energy or developing technology that helps the world to use energy more efficiently.</p>\n<p><strong>An inclusive place to work</strong></p>\n<p>To power progress together, we need to attract and develop the brightest minds and make sure every voice is heard. Here are just some of the ways we’re nurturing an inclusive environment – one where you can express your ideas, extend your skills and reach your potential…</p>\n<ul>\n<li>We’re creating a space where people with disabilities can excel through transparent recruitment process, workplace adjustments and ongoing support in their roles. Feel free to let us know about your circumstances when you apply and we’ll take it from there.</li>\n<li>We’re closing the gender gap – whether that’s through action on equal pay or by enabling more women to reach senior roles in engineering and technology.</li>\n<li>We’re striving to be a pioneer of an inclusive and diverse workplace, promoting equality for employees regardless of sexual orientation or gender identity.</li>\n<li>We consider ourselves a flexible employer and want to support you finding the right balance. We encourage you to discuss this with us in your application.</li>\n</ul>\n<p><strong>A rewarding place to work</strong></p>\n<p>Combine our creative, collaborative environment and global operations with an impressive range of benefits and joining Shell becomes an inspired career choice.</p>\n<p>We’re huge advocates for career development. We’ll encourage you to try new roles and experience new settings. By pushing people to reach their potential, we frequently help them find skills they never knew they had, or make career moves they never thought possible.</p>\n<p><strong>Interested?</strong></p>\n<p>Please apply via the <a href="https://shellinternational.redirect.your-jobresponse.com/scrum_master_agile_hub_london/257065/V819/apply">link</a></p>\n<p><strong>Company Description</strong></p>\n<p>Shell started operations in the United Kingdom more than 110 years ago. Since then we have grown into a leading innovative oil and gas company that rewards its employees by investing heavily in their careers and learning. Our people are our greatest asset, and our commitment to your career will see you thrive in a work environment that offers an industry-leading development programme. When your ideas travel, Shell will benefit and innovation will thrive. Shell has a key role to play in helping meet the UK’s growing energy demand, whilst using innovative technologies to develop cleaner energy. We are the largest FTSE 100 company in the UK by market capitalisation, and make a significant contribution to the UK economy. As well as processing 35% of the gas coming into the UK, we serve more than four million customers at our filling stations each week. Shell employs some 6,400 skilled staff as well as many contractors.</p>\n<p><strong>Disclaimer</strong></p>\n<p>Please note: We occasionally amend or withdraw Shell jobs and reserve the right to do so at any time, including prior to the advertised closing date.</p>\n<p>Before applying, you are advised to read our data protection policy. This policy describes the processing that may be associated with your personal data and informs you that your personal data may be transferred to Royal Dutch/Shell Group companies around the world.</p>\n<p>The Shell Group and its approved recruitment consultants will never ask you for a fee to process or consider your application for a career with Shell. Anyone who demands such a fee is not an authorised Shell representative and you are strongly advised to refuse any such demand.</p>\n<p>Shell is an Equal Opportunity Employer.</p>\n',
      how_to_apply:
        '<p><a href="https://shellinternational.redirect.your-jobresponse.com/scrum_master_agile_hub_london/257065/V819/apply">Click here to apply!</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaWgxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8ea8b93afe09e5e3d6635d9fd0fecd92d1fea3c3/shell_logo.jpg"
    }
  ];

  const expected = [
    {
      type: "Contract",
      url:
        "https://jobs.github.com/positions/6bbe0cd6-95fd-461c-a194-746872465b7e",
      created_at: "Sun Oct 27 11:58:38 UTC 2019",
      company: "Imperial Leisure",
      company_url: "https://www.imperialleisure.com",
      location: "London",
      title: "Freelance React Native/Flutter Developer – Immediate Start",
      how_to_apply:
        '<p>Please send a copy of your CV to <a href="mailto:jobs@imperialleisure.com">jobs@imperialleisure.com</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0YxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2990a63e7cfc9a32e897832fc947ad89a0e2aef4/il-logo.png"
    },
    {
      type: "Full Time",
      url:
        "https://jobs.github.com/positions/36b9af5b-fcc0-457d-b7f3-efc61625bbdb",
      created_at: "Mon Oct 21 12:46:24 UTC 2019",
      company: "Shell",
      company_url: "http://www.shell.com",
      location: "London",
      title: "Scrum Master - Agile Hub",
      how_to_apply:
        '<p><a href="https://shellinternational.redirect.your-jobresponse.com/scrum_master_agile_hub_london/257065/V819/apply">Click here to apply!</a></p>\n',
      company_logo:
        "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaWgxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8ea8b93afe09e5e3d6635d9fd0fecd92d1fea3c3/shell_logo.jpg"
    }
  ];

  expect(cleanGitHubJobsApiResponse(rawResponse)).toBe(expected);
});

test("Test whether cleanGitHubJobsApiResponse() returns null when the provided argument is not an array", () => {
  const rawResponse = {
    id: "6bbe0cd6-95fd-461c-a194-746872465b7e",
    type: "Contract",
    url:
      "https://jobs.github.com/positions/6bbe0cd6-95fd-461c-a194-746872465b7e",
    created_at: "Sun Oct 27 11:58:38 UTC 2019",
    company: "Imperial Leisure",
    company_url: "https://www.imperialleisure.com",
    location: "London",
    title: "Freelance React Native/Flutter Developer – Immediate Start",
    description:
      "<p>Immediate start. Can work remotely.</p>\n<p>We are looking for a React Native or Flutter developer to build a small mobile app, for charity, that will work on iOS and Android.</p>\n<p>The app will let deaf people download a signed video of a speech that will be given at an event so that they can watch the signed video through the app when they attend the event - there will be no data connection (Wi-Fi or cellular) at the event, so the user will need to download the video before the event and play it back without data. Every week, there'll be a new event and a new video. The data in the app will be available through a JSON feed – e.g. the app will be able to pull the JSON feed detect the new video and download it.</p>\n<p>Here's a summary of how the app will work:</p>\n<ol>\n<li>Every week, a new signed video of a speech will become available to download on the app.</li>\n<li>The user will download the video into the app and save the video in the app to watch later.</li>\n<li>When the user attends the event later on, s/he'll be open up the app and play the video. Please note there'll be no data connection at the event so the user has to be able to download and save the video and play it back without a data connection.</li>\n<li>There will be some other static sections within the app that provide some information about the charity and links to external sites.</li>\n<li>There will be a data collection from inside the app that will allow users to submit their personal details and name so that they can receive email notifications.</li>\n</ol>\n<p>Considerations</p>\n<p>– There is no need for users to sign in or create accounts in the app.\n–  All designs will be provided by us.\n– The app should be multilingual and support two languages.\n–  We'll host the videos.\n– We'd like to be able to deliver push messages and in-app messages to users through a tool such as One Signal</p>\n",
    how_to_apply:
      '<p>Please send a copy of your CV to <a href="mailto:jobs@imperialleisure.com">jobs@imperialleisure.com</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0YxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2990a63e7cfc9a32e897832fc947ad89a0e2aef4/il-logo.png"
  };

  expect(cleanGitHubJobsApiResponse(rawResponse)).toBeNull();
});

test("Test whether cleanGitHubJobsApiResponse() returns when the provided argument is an empty array.", () => {
  const rawResponse = [];

  expect(cleanGitHubJobsApiResponse(rawResponse)).toBeNull();
});
