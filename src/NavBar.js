import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = [<button>Home</button>, <button>Work History</button>, <button>Photos</button>,<button>Contact</button>];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}