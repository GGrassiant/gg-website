// Libs
import React from 'react';
import renderer from 'react-test-renderer';

// Utils
import ThemeContext from '../../context/ThemeContext';

// Components
import Header from '../header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON();
    expect(tree).toMatchSnapshot();

    console.log(
      renderer.create(
        <ThemeContext.Provider
          value={{
            dark: true,
            toggleDark: () => console.log('test Header'),
          }}
        >
          <Header siteTitle="Default Starter" />
        </ThemeContext.Provider>,
      ).root,
    );
  });
});
