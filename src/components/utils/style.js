const styleOverride = (styleOverridePropName = 'styleOverride') => {
  return (props, ...rest) => {
    const overrideProp = props[styleOverridePropName]

    if (Array.isArray(overrideProp)) {
      return overrideProp.map(override => toStyleObj(override, props, ...rest))
    }

    return toStyleObj(overrideProp, props, ...rest)
  }
}

const toStyleObj = (override, props, ...rest) => {
  if (typeof override === 'function') {
    return override(props, ...rest)
  }

  return override
}

export {
  styleOverride
}
