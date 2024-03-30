import ComingSoon from '../public/coming-soon.jpg'
import SnippetsImg from '../public/snippets-plugin.jpg'

export const projects = [
  {
    id: 1,
    category: [
      "App Development", 
      "NativeScript", 
      "RESTful API"
    ],
    description: "A cargo app wherein users can request a quote, book shipments, and check the status of the quotation or shipment.", 
    href: "https://play.google.com/store/apps/details?id=com.smartlogx.app",
    title: "Smartlogx App",
    image: `${ComingSoon.src}`
  },
  {
    id: 2,
    category: [
      "Plugin Development",
      "WordPress",
      "PHP"
    ],
    description: "A WordPress plugin where you can create code snippets for your website as a knowledge base that users can check and search for codes.", 
    href: "https://github.com/LeonLouis/WP-Code-Snippets-Plugin",
    title: "Code Snippets Plugin",
    image: `${SnippetsImg.src}`
  },
  {
    id: 3,
    category: [
      "Web Development", 
      "ReactJS", 
      "AWS Amplify"
    ],
    description: "A website was created by two friends for the purpose of sharing their experience as web developers traveling everywhere.", 
    href: "https://www.fatbois.life/",
    title: "Fatbois Website",
    image: `${ComingSoon.src}`
  },
];

export const skills = [
  {
    name: 'HTML',
    img: '/html5.svg',
  },
  {
    name: 'CSS',
    img: '/css3.svg',
  },
  {
    name: 'Sass',
    img: '/sass.svg'
  },
  {
    name: 'JavaScript',
    img: '/js.svg',
  },
  {
    name: 'PHP',
    img: '/php.svg',
  },
  {
    name: 'WordPress',
    img: '/wordpress.svg',
  },
  {
    name: 'Git',
    img: '/git.svg',
  },
  {
    name: 'MySQL',
    img: '/mysql.svg',
  },
  {
    name: 'Jquery',
    img: '/jquery.svg',
  },
  {
    name: 'NativeScript',
    img: '/nativescript.svg',
  },
  {
    name: 'Tailwind',
    img: '/tailwind.svg',
  },
  {
    name: 'Bootstrap',
    img: '/bootstrap.svg',
  },
  {
    name: 'Github',
    img: '/github.svg',
  },
  {
    name: 'Postman',
    img: '/postman.svg',
  }
]