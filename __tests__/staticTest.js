import React from "react";
import { render } from "@testing-library/react";
import { StaticQuery, useStaticQuery } from "gatsby";
import Layout from '../src/components/layout';

// Mock the useStaticQuery hook
beforeEach(() => {
  useStaticQuery.mockReturnValue({
    site: {
      siteMetadata: {
        title: "Joe's Gatsby Site",
      },
    },
  });
});

test("Displays the Home navigation button in Layout component", () => {
  const { getByText } = render(<Layout />);
  // Assertion
  const homeNavButton = getByText("Home");
  expect(homeNavButton).toBeInTheDocument();
  expect(homeNavButton.closest('a')).toHaveAttribute('href', '/');
});