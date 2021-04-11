const getClassName = (classNames) => (
    Object.keys(classNames)
        .filter(className => classNames[className])
        .join(' ')
        .trim()
);

export { getClassName };
