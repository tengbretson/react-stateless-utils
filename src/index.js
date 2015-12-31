const configure = property => config => fn => (fn[property] = config, fn);

export const propTypes = configure('propTypes');
export const defaultProps = configure('defaultProps');
export const displayName = configure('displayName');
