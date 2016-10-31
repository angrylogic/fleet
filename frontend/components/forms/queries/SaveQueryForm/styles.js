import Styles from '../../../../styles';

const { color, font, padding } = Styles;

const formSection = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: padding.base,
  paddingTop: padding.base,
};

const formInput = {
  fontSize: font.small,
  color: color.textDark,
  width: '300px',
};

export default {
  buttonWrapperStyles: {
    ...formSection,
    justifyContent: 'flex-end',
  },
  containerStyles: {},
  formSectionStyles: formSection,
  labelStyles: {
    display: 'block',
    marginBottom: padding.half,
  },
  moreOptionsIconStyles: {
    fontSize: font.xSmall,
    marginLeft: padding.half,
  },
  moreOptionsCtaSectionStyles: {
    ...formSection,
    borderTop: 'none',
    justifyContent: 'flex-end',
    paddingTop: 0,
  },
  moreOptionsTextStyles: {
    color: color.brand,
    cursor: 'pointer',
    fontSize: font.medium,
  },
  queryDescriptionInputStyles: {
    ...formInput,
  },
  queryHostsPercentageStyles: {
    ...formInput,
    display: 'inline-block',
    marginLeft: '5px',
    paddingRight: 0,
    maxWidth: '40px',
  },
  dropdownInputStyles: {
    ...formInput,
    backgroundColor: color.white,
    borderColor: color.brand,
    borderStyle: 'solid',
    borderWidth: '1px',
    height: '30px',
    textTransform: 'uppercase',
    ':focus': {
      outline: 'none',
    },
  },
  helpTextStyles: {
    backgroundColor: color.accentLight,
    padding: padding.base,
    width: '340px',
  },
  queryNameInputStyles: {
    ...formInput,
    height: '30px',
    lineHeight: '30px',
    paddingLeft: '3px',
  },
  queryNameWrapperStyles: {
    ...formSection,
  },
  runQuerySectionStyles: {
    ...formSection,
    display: 'block',
    textAlign: 'right',
  },
  runQueryTipStyles: {
    color: color.textLight,
    fontSize: font.small,
    marginRight: padding.half,
  },
};
