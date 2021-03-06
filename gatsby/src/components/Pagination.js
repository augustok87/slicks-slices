import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  border-radius: 5px;
  & > * {
    //grab each flex align-items, direct descendants
    flex: 1;
    padding: 1rem;
    border-right: 1px solid var(--grey);
    text-decoration: none;
    &[aria-current], //anything that has an "aria-current" property or class of "current."
    &.current {
      color: var(--red);
    }
    &[disabled] {
      //anything that has //a disabled atribute
      pointer-events: none; //make it not clickable
      color: var(--grey);
    }
  }
  @media (max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <PaginationStyles>
      <Link
        title="Prev Page"
        disabled={!hasPrevPage}
        to={`${base}/${prevPage}`}
      >
        <span className="word">← Prev</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`${base}/${i > 0 ? i + 1 : ''}`}
          key={`Page-${i}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        title="Next Page"
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}
      >
        <sp className="word" an>
          Next →
        </sp>
      </Link>
    </PaginationStyles>
  );
}

// as
