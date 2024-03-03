import '../styles/About.css';

export function About() {
  return (
    <div className="about">
      <div className="about-header">
        <p>Passionate computer science students with a thirst for learning.</p>
      </div>
      <div className="about-body">
        <p className="about-title">About Us</p>
        <p className="about-subtitle">Front-end</p>
        <p className="about-name">
          <a className="about-underline" href="https://github.com/ShafeiW">
            Shafei
          </a>
          ,{' '}
          <a className="about-underline" href="https://github.com/unsignd">
            Yejun
          </a>
        </p>
        <p className="about-subtitle">Back-end</p>
        <p className="about-name">
          <a className="about-underline" href="https://github.com/lizard777">
            Liz
          </a>
          ,{' '}
          <a className="about-underline" href="https://github.com/junhe-c">
            Jun He
          </a>
        </p>
      </div>
      {/* <div className="about-container">
        <p className="about-bigheader">About us.</p>
        <p className="about-littlecaption">
          Front End:
          <a className="about-underline" href="https://github.com/ShafeiW">
            {' '}
            Shafei{' '}
          </a>{' '}
          &
          <a className="about-underline" href="https://github.com/unsignd">
            {' '}
            Yejun{' '}
          </a>
        </p>
        <p className="about-littlecaption">
          Back End:
          <a className="about-underline" href="https://github.com/lizard777">
            {' '}
            Liz{' '}
          </a>{' '}
          &
          <a className="about-underline" href="https://github.com/junhe-c">
            {' '}
            Jun He{' '}
          </a>
        </p>
        <p className="about-littlecaption2">
          Passionate computer science students with a thirst for learning.
        </p>
      </div> */}
    </div>
  );
}
