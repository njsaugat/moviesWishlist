import React from 'react';
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
      <div className="category flex flex-col" key={usefulLink.id}>
        <h1 className="font-bold text-xl my-3  leading-tight md:leading-snug">
          {usefulLink.name}
        </h1>
        {usefulLink.links.map((link, index) => {
          return (
            <a
              className="no-underline my-1"
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
    <div className="p-10 md:p-20 pt-5 bg-black text-white">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="left flex flex-col justify-center items-center w-full md:w-2/5 my-10">
          {/* <Banner /> */}
          <span className="text-gray-400 mt-10">
            A new way to binge watch
            <br />
            your movies.
          </span>
        </div>
        <div className="right item flex justify-center  w-full md:w-3/5 gap-10 md:gap-x-32">
          {renderUsefulLinks}
        </div>
      </div>
      <div className=" bg-gray-500  mx-10 h-0.5 my-5"></div>
      <span className="py- text-gray-400 flex justify-center items-center">
        Copyright © {getDate()} GharShar. All Rights Reserved. © Saugat Poudel
      </span>
    </div>
  );
};

export default Footer;
