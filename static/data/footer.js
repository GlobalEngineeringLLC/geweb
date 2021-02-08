let email = 'hello@skylines.one'
let paddingClasses = 'block pb-0.5'

export default {
  name: 'Skylines One',
  subtitle: '.Love the hustle',
  bottom: [
    [
      { value: '© 2021 - Skylines One.' },
      { value: 'All rights reserved.', class: 'block sm:inline' },
    ],
    [
      { value: 'Made in Lewes,' },
      { value: 'Delaware, USA', class: 'block sm:inline' },
    ],
  ],
  title: "Let's build something great together",
  linkBlock: [
    {
      title: 'Office',
      rows: {
        rootClass: 'min-w-full',
        class: paddingClasses + ' min-w-full',
        linebreaks: true,
        text: ['16192 Coastal Highway', 'Lewes DE 19958', 'County of Sussex'],
      },
    },
    {
      title: "Let's talk",
      rows: {
        class: paddingClasses,
        linebreaks: true,
        text: [
          { value: email, href: `mailto:${email}` },
          { value: '+1 (302) 747-1888', href: 'tel:+13027471888' },
        ],
      },
    },
    {
      title: 'Company',
      rows: {
        class: paddingClasses,
        linebreaks: true,
        text: [
          { value: 'About', href: 'about-us' },
          { value: 'Our work', href: 'portfolio' },
          { value: 'Career', href: 'career' },
          { value: 'Privacy Policy', href: 'privacy' },
        ],
      },
    },
    {
      title: "Let's connect",
      rows: {
        class: paddingClasses + ' pl-1 fa-brand-2',
        linebreaks: true,
        text: [
          {
            value: ' LinkedIn',
            href: 'https://linkedin.com/company/skylinesone',
          },
          {
            value: ' Discord',
            href: 'https://discord.skylines.one',
          },
          {
            value: ' Github',
            href: 'https://github.com/orgs/skylinesone',
          },
          {
            value: ' Whatsapp',
            href: 'https://wa.me/31638450573',
          },
          {
            value: ' Messenger',
            href: 'https://m.me/alexm888',
          },
          {
            value: ' Telegram',
            href: 'https://t.me/joinchat/GdtTxhUBOd5x742Yf6Z9vA',
          },
        ],
      },
    },
  ],
}