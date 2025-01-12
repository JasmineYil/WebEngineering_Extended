import React from 'react';

const RelatedLinks: React.FC = () => (
  <div className="secondary">
    <h2 className="related-title">Related</h2>
    <ul className="related-links" aria-label="Related articles">
      <li>
        <a href="#" className="related-link">
          The trouble with Bees
        </a>
      </li>
      <li>
        <a href="#" className="related-link">
          The trouble with Otters
        </a>
      </li>
      <li>
        <a href="#" className="related-link">
          The trouble with Penguins
        </a>
      </li>
      <li>
        <a href="#" className="related-link">
          The trouble with Octopi
        </a>
      </li>
      <li>
        <a href="#" className="related-link">
          The trouble with Lemurs
        </a>
      </li>
    </ul>
  </div>
);

export default RelatedLinks;
