const Intl = jest.genMockFromModule('react-intl');

const intl = {
  formatMessage: ({ id: defaultMessage }) => defaultMessage,
};

Intl.useIntl = jest.fn().mockImplementation(() => intl);

module.exports = Intl;
