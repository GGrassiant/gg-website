// Libs
import React, { Component, createContext } from 'react';

interface ThemeProps {
  children: Array<React.ReactElement>;
}

interface BackgroundMode {
  dark: boolean;
}

interface DefaultState extends BackgroundMode {
  toggleDark: () => void;
}

const defaultState: DefaultState = {
  dark: false,
  toggleDark: () => null,
};
const ThemeContext: React.Context<DefaultState> = createContext(defaultState);

class ThemeProvider extends Component<ThemeProps, BackgroundMode> {
  constructor(props: ThemeProps) {
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
    } else {
      this.setState({ dark: false });
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
