// Libs
import React, { Component, createContext } from 'react';

interface ThemeProps {
  children: Array<React.ReactElement>;
}

interface BackgroundMode {
  dark: boolean | null;
}

interface DefaultState extends BackgroundMode {
  toggleDark: () => void | null;
}

const defaultState: DefaultState = {
  dark: null,
  toggleDark: () => null,
};
const ThemeContext: React.Context<DefaultState> = createContext(defaultState);
// Getting dark mode information from OS.
// You need macOS Mojave + Safari Technology Preview Release 68
const supportsDarkMode = (): boolean =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

class ThemeProvider extends Component<ThemeProps, BackgroundMode> {
  constructor(props: ThemeProps) {
    super(props);
    this.state = {
      dark: null,
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
