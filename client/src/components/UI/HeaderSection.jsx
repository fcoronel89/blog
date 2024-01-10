import './HeaderSection.scss';

const HeaderSection = ({ cssClasses, children }) => {
  const classes = `header-section ${cssClasses}`;
  return <section className={classes}>{children}</section>;
};

export default HeaderSection;
