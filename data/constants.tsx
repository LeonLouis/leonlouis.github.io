import ComingSoon from '../public/coming-soon.jpg'

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
    href: "#",
    title: "Code Snippets Plugin",
    image: `${ComingSoon.src}`
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