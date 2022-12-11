import React from 'react';
import Banner from './Banner';
// import Banner from '../components/Banner';
// import logo from '../logo.svg';

const getDate = () => {
  return new Date().getFullYear();
};
const usefulLinks = [
  {
    id: 1,
    name: 'Useful Links',
    links: [
      {
        title: 'Stackoverflow',
        url: 'https://stackoverflow.com/',
      },
      {
        title: 'Fontawesome',
        url: 'https://fontawesome.com/',
      },
      {
        title: 'Dev.to',
        url: 'https://dev.to/',
      },
      {
        title: 'Medium',
        url: 'https://medium.com/',
      },
    ],
  },
  {
    id: 2,
    name: 'Socials',
    links: [
      { title: 'Github', url: 'https://github.com/njsaugat' },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/saugat-poudel-08b1241a0/',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/njsaugat',
      },
    ],
  },
  {
    id: 3,
    name: 'Collab',
    links: [
      {
        title: 'Codespaces',
        url: 'https://github.com/features/codespaces',
      },
      {
        title: 'Docs',
        url: 'https://www.google.com/docs/about/',
      },
    ],
  },
];
const Footer = () => {
  const renderUsefulLinks = usefulLinks.map((usefulLink) => {
    return (
      <div className="flex flex-col category" key={usefulLink.id}>
        <h1 className="my-3 text-xl font-bold leading-tight md:leading-snug">
          {usefulLink.name}
        </h1>
        {usefulLink.links.map((link, index) => {
          return (
            <a
              className="my-1 no-underline"
              href={link.url}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          );
        })}
      </div>
    );
  });
  return (
    <div className="p-10 pt-5 text-white bg-black md:p-20">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex flex-col items-center justify-center w-full my-10 left md:w-2/5">
          <Banner />
          <span className="mt-10 text-gray-400">
            A new way to binge watch
            <br />
            your movies.
          </span>
        </div>
        <div className="flex justify-center w-full gap-10 right item md:w-3/5 md:gap-x-32">
          {renderUsefulLinks}
        </div>
      </div>
      <div className=" bg-gray-500  mx-10 h-0.5 my-5"></div>
      <span className="flex items-center justify-center text-gray-400 py-">
        Copyright © {getDate()} CineWish. All Rights Reserved. © Saugat Poudel
      </span>
    </div>
  );
};

export default Footer;
