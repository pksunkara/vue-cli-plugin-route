module.exports = (api, options, rootOptions) => {
  // TODO: Typescript support
  // TODO: Post process lint

  // eslint-disable-next-line global-require, import/no-dynamic-require
  require(`./${options.type}`)(api, options, rootOptions);
};
