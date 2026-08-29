
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const slugify = require('slugify');

const position = {
  false: "push",
  true: "unshift",
}

const renderPermalink = (slug, opts, state, idx) => {
  const space = () =>
    Object.assign(new state.Token("text", "", 0), {
      content: " ",
    })

  const linkTokens = [
    Object.assign(new state.Token("link_open", "a", 1), {
      attrs: [
        ["class", opts.permalinkClass],
        ["href", opts.permalinkHref(slug, state)],
      ],
    }),
    Object.assign(new state.Token("html_block", "", 0), {
      // Edit starts here:
      content: '<span aria-hidden="true" class="header-anchor__symbol">#</span>',
      // Edit ends
    }),
    new state.Token("link_close", "a", -1),
  ]

  if (opts.permalinkSpace) {
    linkTokens[position[!opts.permalinkBefore]](space())
  }
  state.tokens[idx + 1].children[position[opts.permalinkBefore]](
    ...linkTokens
  )
};

const customSlugify = (text) => {
  return slugify(text.split('_').join(' '), {
    replacement: '-',
    remove: '*+~.()\'"!:@',
    lower: true,
    strict: true,
    trim: true
  });
};

module.exports = function(eleventyConfig) {

  var md = require('markdown-it')({
    html: true
  })
  .use(require('markdown-it-anchor'), {
    level: 2,
    permalink: true,
    permalinkSymbol: '#',
    slugify: customSlugify,
    renderPermalink
  });

  eleventyConfig.addJavaScriptFunction('require', require);

  eleventyConfig.setLibrary("md", md);

  // Loreline scripts (```lor fences in the API docs) have no Prism grammar:
  // register a plain-text one so the syntax highlighter doesn't error on them
  const Prism = require('prismjs');
  if (!Prism.languages.lor) {
    Prism.languages.lor = {};
  }

  eleventyConfig.addPlugin(syntaxHighlight, {
    lineSeparator: '\n',
    alwaysWrapLineHighlights: true
  });

  eleventyConfig.addPassthroughCopy('content/static');

  // For LOCAL testing only (build-local.sh sets CERAMIC_SAMPLES_LOCAL):
  // serve the locally-built samples under /ceramic-samples so the example
  // iframes/thumbnails can point at them (see content/_data/samples.js).
  // In production this is skipped: samples are hosted separately.
  if (process.env.CERAMIC_SAMPLES_LOCAL) {
    eleventyConfig.addPassthroughCopy({ '_samples': 'ceramic-samples' });
  }

  global.js = eleventyConfig.javascriptFunctions;

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};