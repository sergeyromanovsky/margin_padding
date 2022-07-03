export const validateCSS = (cssProperty: string, value: string) =>
  CSS.supports(cssProperty, value);
