const getJobsHandlerDummyResponse = [
  {
    id: "2a6eedca-1cb3-42a6-b469-78b43750366b",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/2a6eedca-1cb3-42a6-b469-78b43750366b",
    created_at: "Wed Nov 13 11:53:54 UTC 2019",
    company: "Blackbox Company (UK) Ltd.",
    company_url: "https://www.blackbox-co.com",
    location: "Crowthorne",
    title: "Front-End Developer",
    how_to_apply:
      '<p><a href="mailto:jobs@blackbox-co.com">jobs@blackbox-co.com</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2gzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--482f93948fc8f680f874a7a28aaaa366b8a428e3/bbx-logo-black.png"
  },
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
    how_to_apply:
      '<p><a href="https://shellinternational.redirect.your-jobresponse.com/scrum_master_agile_hub_london/257065/V819/apply">Click here to apply!</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaWgxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8ea8b93afe09e5e3d6635d9fd0fecd92d1fea3c3/shell_logo.jpg"
  },
  {
    id: "aa48ee67-6f39-47ae-b1d0-0bcabcbfac6f",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/aa48ee67-6f39-47ae-b1d0-0bcabcbfac6f",
    created_at: "Mon Oct 21 09:43:20 UTC 2019",
    company: "Shell",
    company_url: "http://www.shell.com",
    location: "London",
    title: "DevOps Engineer",
    how_to_apply:
      '<p><a href="https://shellinternational.redirect.your-jobresponse.com/devops_engineer_london/257033/V819/apply">Click here to apply!</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaVYxIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9c806040709f9612a77ec8495d56fc50c6a08769/shell_logo.jpg"
  },
  {
    id: "112df01c-1391-4b39-9915-201db08d00b0",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/112df01c-1391-4b39-9915-201db08d00b0",
    created_at: "Tue Oct 15 09:55:40 UTC 2019",
    company: "FIVE AI",
    company_url: "http://www.five.ai",
    location: "London",
    title: "Software Engineer [Simulator]",
    how_to_apply:
      '<p><a href="https://workable.com/j/71854B75B7">https://workable.com/j/71854B75B7</a> or feel free to drop us a line at <a href="mailto:talent@five.ai">talent@five.ai</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdEowIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e7088572fcde7dbc3fbf8250882b1ec63c2e1210/FiveAI%20Logo.png"
  },
  {
    id: "f61bcf90-e400-11e8-8ff5-71d2e066e687",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/f61bcf90-e400-11e8-8ff5-71d2e066e687",
    created_at: "Fri Nov 09 09:23:05 UTC 2018",
    company: "University of Cambridge",
    company_url: "https://www.gen.cam.ac.uk/",
    location: "Cambridge, UK",
    title: "Research Software Engineer",
    how_to_apply:
      '<p>To apply: <a href="http://www.jobs.cam.ac.uk/job/19504/">http://www.jobs.cam.ac.uk/job/19504/</a></p>\n',
    company_logo: null
  },
  {
    id: "6087faee-e298-11e8-9e1d-f95949c20e77",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/6087faee-e298-11e8-9e1d-f95949c20e77",
    created_at: "Wed Nov 07 14:22:29 UTC 2018",
    company: "Attest",
    company_url: "http://www.askattest.com",
    location: "London",
    title: "Engineering Manager",
    how_to_apply:
      '<p>Please submit your application via this link: <a href="https://team.askattest.com/jobs/139761-engineering-manager">https://team.askattest.com/jobs/139761-engineering-manager</a> Feel free to email <a href="mailto:careers@askattest.com">careers@askattest.com</a> if you have any questions.</p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1pXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d3736f7a28b084e631d978b685d41fdff31bad0f/292a96a0-15e6-40fe-b25a-cfe1954fd730"
  },
  {
    id: "4ef36d90-dc62-11e8-9d0f-2748d202bd44",
    type: "Contract",
    url:
      "https://jobs.github.com/positions/4ef36d90-dc62-11e8-9d0f-2748d202bd44",
    created_at: "Tue Oct 30 16:39:18 UTC 2018",
    company: "Adaptive Financial Consulting Ltd",
    company_url: "http://weareadaptive.com",
    location: "London, UK",
    title: "Web Applications Developer (JavaScript, HTML, React, Finance)",
    how_to_apply:
      '<p>Please apply via this link: <a href="https://grnh.se/cb8994e21">https://grnh.se/cb8994e21</a></p>\n',
    company_logo: null
  },
  {
    id: "5cfc5c04-d90f-11e8-9d50-d2e1d303c48e",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/5cfc5c04-d90f-11e8-9d50-d2e1d303c48e",
    created_at: "Fri Oct 26 11:08:15 UTC 2018",
    company: "http://www.paddle.com",
    company_url: "http://www.paddle.com",
    location: "London",
    title: "Senior Python Software Engineer ",
    how_to_apply:
      '<p>Please apply via our website: <a href="https://boards.greenhouse.io/paddle/jobs/4107363002?gh_jid=4107363002">https://boards.greenhouse.io/paddle/jobs/4107363002?gh_jid=4107363002</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUZYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b0abd7e6d191b98e36fdf022128b3755200da29a/e0c799c9-8deb-4a76-aaf4-e13cf221ca35"
  }
];

module.exports = getJobsHandlerDummyResponse;
