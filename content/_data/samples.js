// Base URL under which the built Ceramic samples are served.
//
// In production, the samples are hosted at ceramic-engine.com/ceramic-samples
// (this is the default, so the generated site is unchanged).
//
// For LOCAL testing (see build-local.sh), set the CERAMIC_SAMPLES_LOCAL env
// variable: the samples are then served by the local dev server under
// /ceramic-samples, so the example iframes and thumbnails point at the
// locally-built samples instead of the production ones.
module.exports = {
    baseUrl: process.env.CERAMIC_SAMPLES_LOCAL
        ? '/ceramic-samples'
        : 'https://ceramic-engine.com/ceramic-samples'
};
