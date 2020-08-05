const Intl = jest.genMockFromModule('react-intl');

const intl = {
  formatMessage: ({ defaultMessage }) => defaultMessage,
};

Intl.useIntl = jest.fn().mockImplementation(() => intl);

module.exports = Intl;
