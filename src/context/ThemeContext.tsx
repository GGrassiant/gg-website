// Libs
import React, { Component, createContext } from 'react';

const defaultState = {
  dark: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDark: () => {},
};
const ThemeContext = createContext(defaultState);
// Getting dark mode information from OS.
// You need macOS Mojave + Safari Technology Preview Release 68
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

class ThemeProvider extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dark: false,
    };
  }

  componentDidMount(): void {
    // Getting dark mode value from localStorage
    const lsDark = JSON.parse(localStorage.getItem('dark') as string);
    if (lsDark) {
      this.setState({ dark: lsDark });
    } else if (supportsDarkMode()) {
      this.setState({ dark: true });
    }
  }

  toggleDark = (): void => {
    const { state } = this;
    const dark = !state.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    this.setState({ dark });
  };

  render(): React.ReactElement {
    const { children } = this.props;
    const { dark } = this.state;
    const { toggleDark } = this;
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
